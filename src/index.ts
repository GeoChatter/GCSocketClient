// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-floating-promises */
import * as signalR from '@microsoft/signalr';
import { z } from "zod"


interface Listeners {
    onStreamerSettings?: (streamerSettings: z.infer<typeof StreamerSettings>) => any
    onSuccessfulGuess?: () => any,
    onFailedGuess?: (error: string, text?: string) => any,
}

// helper to allow sleeping 
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export default class GCSignalRClient {
    connection: signalR.HubConnection
    private listeners?: Listeners
    private _streamerCode?: string
    private running = false


    /**
     * The constructor for the class. It is called when the class is instantiated.
     * @param {string} url - The url of the signalR hub from GeoChatter.
     * @param {string} [streamerCode] - The streamer code is the code that is used on the Server to send the Guess to the right client.
     * @param {Listeners} [listeners] - Listeners trigger a callback that should handle the app state on /map or in the twitch extension for example when streamerSettings change.
     */
    constructor(url: string, streamerCode?: string, listeners?: Listeners) {
        const result = z.string().url().safeParse(url)
        if (result.success) {
            this.connection = new signalR.HubConnectionBuilder().withUrl(result.data, {}).build();
            this._streamerCode = streamerCode
            this.listeners = listeners
            this.#start()
        }
        else {
            throw  result.error
        }

    }

    /**
     * It sets the streamer code and logs in to the map.
     * @param {string | undefined} streamerCode - The streamer code that you get from the streamer(used to be the bot name).
     */
    set streamerCode(streamerCode: string | undefined) {
        if (!streamerCode) {
            console.warn("no streamer code given")
        }
        this._streamerCode = streamerCode
        console.info("new streamer code", streamerCode)
        this.#logInToMap()
    }

    /**
     * It returns the value of the private variable _streamerCode.
     * @returns The streamerCode property is being returned.
     */
    get streamerCode(): (string | undefined) {
        return this._streamerCode
    }

    /**
     * It starts the connection, logs in to the map, listens to streamer settings it got back from the map login and listens to problems
     */
    async #start() {
        if (this.running) {
            console.warn("don't use start again! use reconnect instead")
        }
        await this.connection.start()
        this.#logInToMap()
        this.#listenToStreamerSettings()
        this.#listenToProblems()
        this.running = true
    }

    /**
     * It stops the connection to the SignalR hub.
     */
    async stop() {
        await this.connection.stop()
    }

    /**
     * It does not really set anything but it calls the onStreamerSettings listener.
     * 
     * @param {StreamerSettings} [streamerSettings] - StreamerSettings is an object that contains the streamer settings.
     */
    #setStreamerSettings(streamerSettings?: z.infer<typeof StreamerSettings>) {
        if (!streamerSettings) {
            console.warn("did'nt receive streamer settings as response")
        }
        else {
            this.listeners?.onStreamerSettings?.(streamerSettings)
        }
    }

    /**
     * > The function `logInToMap` is a function that calls the `MapLogin` method on the
     * server and then gets the streamer settings from the server as a response.
     */
    async #logInToMap() {
        const streamerSettingsRes = StreamerSettings.safeParse(await this.connection.invoke("MapLogin", this.streamerCode))
        if (streamerSettingsRes.success) {
            this.#setStreamerSettings(streamerSettingsRes.data)
        }
        else {
            console.error("got a weird response from map login check if you need to update gcsocketlibrary", streamerSettingsRes.error)
        }
    }

    /**
     * > When the server sends a message called "SetMapFeatures", the client will call the
     * #setStreamerSettings function with the data sent by the server so the listener will be run
     */
    #listenToStreamerSettings() {
        this.connection.on("SetMapFeatures", (streamerSettings: z.infer<typeof StreamerSettings>) => {
            this.#setStreamerSettings(streamerSettings)
        })
    }
    /**
     * If the connection gets closed, it waits 1 second and tries to reconnect
     * it also logs if signal r is reconnecting
     */
    #listenToProblems() {
        this.connection.onreconnecting = (e) => {
            console.info("default reconnecting from singalR", e)
        }
        this.connection.onclose = (e) => {
            console.warn("signalR connection closed trying to reconnect manually", e)
            setTimeout(() => { this.reconnect() }, 1000)
        }
    }

    /**
     * > This function is called when the connection to the server is lost and the client needs to
     * reconnect
     * 
     * It starts and logs into the map again and then listens to the streamer settings again but it does not recreate the listers because they are already created.
     * (not sure if its true but i believe it is)
     * 
     * 
     */
    async reconnect() {
        console.info("reconnecting...")
        if (!this.streamerCode) {
            console.warn("calling reconnect without streamer code")
        }

        await this.connection.start()
        const streamerSettingsRes = StreamerSettings.safeParse(await this.connection.invoke("MapLogin", this.streamerCode))
        if (streamerSettingsRes.success) {
            this.#setStreamerSettings(streamerSettingsRes.data)
        } else {
            console.error("got a weird response from map login check if you need to update gcsocketlibrary", streamerSettingsRes.error)
        }
    }

    /**
     * It sends a guess to the server and waits for the server to process it
     * @param {Guess} guess - Guess - The guess object that gets send to the server.
     * @param [checkGuess=true] - if true, the client will wait for the server to process the guess and
     * then call the onSuccessfulGuess or onFailedGuess listener.
     * It retries as long as the state is not "Submitted" or the counter hits 50.
     * If checkGuess is false, the client will not wait for the server to process the guess.
     * Otherwise it will call either the onSuccessfulGuess or onFailedGuess listener.
     */
    async sendGuess(guess: z.infer<typeof Guess>, checkGuess = true): Promise<void> {
        let guessId: (number | undefined)
        if (this.connection.state !== "Connected") {
            console.log("not connected trying to reconnect before sending guess")
            await this.reconnect().then(async () => {
                console.log("sending guess after reconnect")
                guessId = await this.connection.invoke("SendGuessToClients", guess)
            })
        } else {
            guessId = await this.connection.invoke("SendGuessToClients", guess)
        }
        if (!checkGuess) return
        if (typeof guessId === "number") {
            let state: GuessState = await this.#getGuessState(guessId)
            // 50 might be to much
            let counter = 50
            while (state === "Submitted" || counter <= 0) {
                state = await this.#getGuessState(guessId)
                console.log(state)
                await sleep(300)
                counter = counter - 1
            }
            if (counter <= 0) {
                console.warn("something went wrong while processing guess on client")
                this.listeners?.onFailedGuess?.(state, "something went wrong while processing guess on client")
                return
            }
            if (state === "Success" || state === "TempSuccess") {
                this.listeners?.onSuccessfulGuess?.()
            } else {
                this.listeners?.onFailedGuess?.(state, createErrorText(state))
            }
        }
    }
    /**
     * Sends the flag data to the server including the the values from SendingBase from "./types.ts"
     * @param {Flag} data - Flag - This is the data that will be sent to the server.
     */
    async sendFlag(data: z.infer<typeof Flag>) {
        const flagParseRes = Flag.safeParse(data)
        if (flagParseRes.success) {
            await this.connection.invoke("SendFlagToClients",)
        } else {
            console.error(flagParseRes.error)
        }
    }

    /**
     * Sends the color data to the server including the the values from SendingBase from "./types.ts"
     * @param {Flag} data - Flag - This is the data that will be sent to the server.
     */
    async sendColor(data: z.infer<typeof Color>) {
        const ColorParseRes = Color.safeParse(data)
        if (ColorParseRes.success) {
            await this.connection.invoke("SendColorToClients", ColorParseRes.data)
        }
        else {
            console.error(ColorParseRes.error)
        }
    }

    /**
     * This function returns a `Promise<GuessState>` that resolves to the `GuessState` of the guess depending on the `GuessState` Value the guess is either a `Success` or an Error or still progressing
     * @param {number} id - The id of the guess you want to get the state of.
     * @returns GuessState
     */
    async #getGuessState(id: number): Promise<GuessState> {
        return await this.connection.invoke("GetGuessState", id)
    }
}

/**
 * It matches the Errors and creates a better string 
 * I removed all successful results from it.
 * @param {GuessState} status - The status of the guess.
 * @returns A string
 */
function createErrorText(status: GuessState): string {
    switch (status) {
        case GuessState.Banned:
            {
                return "You are banned by the streamer and not allowed participate in any games.";
            }
        case GuessState.BotNotFound:
            {
                return "Bot not found";
            }
        case GuessState.GuessedAlready:
            {
                return "Already sent a guess for the round!";
            }
        case GuessState.InvalidCoordinates:
            {
                return "Invalid coordinates. Refresh the page.";
            }
        case GuessState.NoGame:
            {
                return "No ongoing game found, try again later.";
            }
        case GuessState.NotFound:
            {
                return "Invalid user data. Refresh the page."
            }
        case GuessState.SameCoordinates:
            {
                return "Failed to send same guess back to back.";
            }
        case GuessState.TooFast:
            {
                return "Sending guesses too fast, try guessing again.";
            }
        case GuessState.UndefinedError:
            {
                return "Server error. Try guessing again.";
            }
        case GuessState.Unknown:
            {
                return "Invalid guess id. Refresh the page.";
            }
        default:
            {
                return "Something went wrong. Try guessing again.";
            }
    }
}

const enum GuessState {
    /** State for recently submitted guess */
    Submitted = "Submitted",
    /** State for successfully registered guess */
    Success = "Success",
    /** State for guess not having any game to be sent to */
    NoGame = "NoGame",
    /** State for temporary guesses successfully registering */
    TempSuccess = "TempSuccess",
    /** State for invalid user data */
    NotFound = "NotFound",
    /** State for guess sent by a banned player */
    Banned = "Banned",
    /** State for multiguess not being allowed */
    GuessedAlready = "GuessedAlready",
    /** State for multiguess sent too often */
    TooFast = "TooFast",
    /** State for invalid guess coordinates */
    InvalidCoordinates = "InvalidCoordinates",
    /** State for sending same coordinates back to back */
    SameCoordinates = "SameCoordinates",
    /** State for internal error */
    UndefinedError = "UndefinedError",
    /** State for no game/bot found */
    BotNotFound = "BotNotFound",
    /** State for unknown guess id */
    Unknown = "Unknown"
}

const SendingBase = z.object(
    {
        bot: z.string(),
        tkn: z.string(),
        id: z.string(),
        name: z.string(),
        sourcePlatform: z.enum(["YouTube", "Twitch"]),
        display: z.string(),
        pic: z.string(),
    }
)

const Guess = SendingBase.extend({
    lat: z.string(),
    lng: z.string(),
    isTemporary: z.boolean(),
    isRandom: z.boolean(),
});


const Flag = SendingBase.extend({
    flag: z.string()
});


const Color = SendingBase.extend({
    color: z.string()
});

// TODO: add all settings and maybe with show option
const StreamerSettings = z.object({
    borders: z.boolean(),
    flags: z.boolean(),
    streamOverlay: z.boolean(),
    borderAdmin: z.boolean(),
    temporaryGuesses: z.boolean(),
    streamer: z.string()
})
