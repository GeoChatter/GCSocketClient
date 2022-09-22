// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-floating-promises */
import * as signalR from '@microsoft/signalr';
import { z } from "zod"

export { z } from "zod"

interface Listeners {
    onStreamerSettings?: (streamerSettings: z.infer<typeof MapOptions>) => any
    onSuccessfulGuess?: () => any,
    onFailedGuess?: (error: string, text?: string) => any,
    onGameStart?: (mapGameSettings: z.infer<typeof MapGameSettings>) => any,
    onRoundStart?: (mapRoundStart: z.infer<typeof MapRoundSettings>) => any,
    onRoundEnd?: (mapRoundResult: z.infer<typeof MapRoundResult>) => any,
    onGameEnd?: (mapGameEndResult: z.infer<typeof MapGameEndResult>) => any,
    onGameExit?: () => any,
}
//END GAME
// {"type":1,"target":"EndGame","arguments":[[{"displayName":"rhinoooo_","userName":"rhinoooo_","profilePicUrl":"https://static-cdn.jtvnw.net/jtv_user_pictures/90323d58-8ce7-4e9a-9128-8fe46bacc4dd-profile_image-300x300.png","wasRandom":false,"score":4997,"distance":0.8161156737972088,"timeTaken":14779,"streak":1,"countryCode":null,"exactCountryCode":null,"guessCount":1,"isStreamerResult":false,"guessedBefore":false},{"displayName":"Soeren_______","userName":"soeren_______","profilePicUrl":"https://static-cdn.jtvnw.net/jtv_user_pictures/b069cbe1-b70a-4b54-b8bb-b4d928bff8ba-profile_image-300x300.png","wasRandom":false,"score":4643,"distance":12476.826501381793,"timeTaken":52130,"streak":1,"countryCode":null,"exactCountryCode":null,"guessCount":2,"isStreamerResult":false,"guessedBefore":false},{"displayName":"GeoChatter","userName":"geochatter","profilePicUrl":"https://static-cdn.jtvnw.net/jtv_user_pictures/73797ad7-6d0e-43ec-82cb-6be968562f86-profile_image-300x300.png","wasRandom":false,"score":971,"distance":36192.18396014681,"timeTaken":132966,"streak":0,"countryCode":null,"exactCountryCode":null,"guessCount":5,"isStreamerResult":true,"guessedBefore":false}]]}



// helper to allow sleeping 
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export class GCSocketClient {
    connection: signalR.HubConnection
    private listeners?: Listeners
    private _streamerCode: string
    private running = false


    /**
     * The constructor for the class. It is called when the class is instantiated.
     * @param {string} url - The url of the signalR hub from GeoChatter.
     * @param {string} [streamerCode] - The streamer code is the code that is used on the Server to send the Guess to the right client.
     * @param {Listeners} [listeners] - Listeners trigger a callback that should handle the app state on /map or in the twitch extension for example when streamerSettings change.
     */
    constructor(url: string, streamerCode: string, listeners?: Listeners) {
        const result = z.string().url().safeParse(url)
        if (result.success) {
            this.connection = new signalR.HubConnectionBuilder().withUrl(result.data, {}).build();
            this._streamerCode = streamerCode
            this.listeners = listeners
            this.#start()
        }
        else {
            throw result.error
        }

    }

    /**
     * It sets the streamer code and logs in to the map.
     * @param {string | undefined} streamerCode - The streamer code that you get from the streamer(used to be the bot name).
     */
    set streamerCode(streamerCode: string) {
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
    get streamerCode(): (string) {
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
        await this.#logInToMap()
        this.#listenToStreamerSettings()
        this.#listenToProblems()
        this.#listenToGameStart()
        this.#listenToRoundStart()
        this.#listenToRoundEnd()
        this.#listenToGameEnd()
        this.#listenToGameExit()
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
    #setStreamerSettings(streamerSettings?: z.infer<typeof MapOptions>) {
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
        const res: unknown = await this.connection.invoke("MapLogin", this.streamerCode)
        const streamerSettingsRes = MapOptions.safeParse(res)
        if (streamerSettingsRes.success) {
            this.#setStreamerSettings(streamerSettingsRes.data)
        }
        else {
            console.error("map log in", streamerSettingsRes.error)
            console.log(res)
        }
    }

    /**
     * > When the server sends a message called "SetMapFeatures", the client will call the
     * #setStreamerSettings function with the data sent by the server so the listener will be run
     */
    #listenToStreamerSettings() {
        this.connection.on("SetMapFeatures", (streamerSettings: z.infer<typeof MapOptions>) => {
            this.#setStreamerSettings(streamerSettings)
        })
    }
    /**
     * It listens to the server for a message called "StartGame" and when it receives it, it calls the
     * onGameStart listener with `mapGameSettings`
     */
    #listenToGameStart() {
        this.connection.on("StartGame", (data: unknown) => {

            const res = MapGameSettings.safeParse(data)
            if (res.success) {
                this.listeners?.onGameStart?.(res.data)
            }
            else {
                console.error("game start", res.error)
            }
        })
    }

    /**
     * It listens to the `StartRound` event from the server and calls the `onRoundStart` listener with the
     * data from the server
     */
    #listenToRoundStart() {
        this.connection.on("StartRound", (data: unknown) => {

            const res = MapRoundSettings.safeParse(data)
            if (res.success) {
                this.listeners?.onRoundStart?.(res.data)
            }
            else {
                console.error("round start", res.error)
            }
        })
    }
    /**
     * It listens to the server for the "EndRound" event, and when it receives it, it calls the onRoundEnd
     * function in the listeners object with the MapRoundEnd data from the server
     */
    #listenToRoundEnd() {
        this.connection.on("EndRound", (data: unknown) => {

            const res = MapRoundResult.safeParse(data)
            if (res.success) {
                this.listeners?.onRoundEnd?.(res.data)
            }
            else {
                console.error(res.error)
            }

        })
    }
    /**
     * It listens for the "EndGame" event from the server, and when it receives it, it calls the
     * onGameEnd listener
     */
    /**
     * It listens to the server for the "EndGame" event, and when it receives it, it calls the onGameEnd with the data with the game end result
     * listener
     */
    #listenToGameEnd() {
        this.connection.on("EndGame", (data: unknown) => {


            const res = MapGameEndResult.safeParse(data)
            if (res.success) {
                this.listeners?.onGameEnd?.(res.data)
            }
            else {
                console.error(res.error)
            }
        })
    }
    /**
     *  When the server sends the `ExitGame` message, call it calls the `onGameExit` listener
     */
    #listenToGameExit() {
        this.connection.on("ExitGame", () => {

            this.listeners?.onGameExit?.()

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
        const res: unknown = await this.connection.invoke("MapLogin", this.streamerCode)
        const streamerSettingsRes = MapOptions.safeParse(res)
        if (streamerSettingsRes.success) {
            this.#setStreamerSettings(streamerSettingsRes.data)
        } else {
            console.error("got a weird response from map login check if you need to update gcsocketlibrary", streamerSettingsRes.error)
            console.log(res)
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
            while (state === "Submitted" || counter >= 0) {
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
            await this.connection.invoke("SendFlagToClients", flagParseRes.data)
        } else {
            console.error(flagParseRes.error)
            console.log(data)
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
            console.log(data)
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

export const SendingBase = z.object(
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

export const Guess = SendingBase.extend({
    lat: z.string(),
    lng: z.string(),
    isTemporary: z.boolean(),
    isRandom: z.boolean(),
});


export const Flag = SendingBase.extend({
    flag: z.string()
});


export const Color = SendingBase.extend({
    color: z.string()
});

// TODO: add all settings and maybe with show option
export const MapOptions = z.object({
    mapIdentifier: z.string().optional(),
    botname: z.string().nullish(),
    streamer: z.string().nullish(),
    twitchChannelName: z.string().nullish(),
    // not sure
    installedFlagPacks: z.string(),
    // convert to enum later
    gameMode: z.string().nullish(),
    isUSStreak: z.boolean(),
    temporaryGuesses: z.boolean(),
    showFlags: z.boolean(),
    showBorders: z.boolean(),
    showStreamOverlay: z.boolean(),
})
export const MapGameSettings = z.object({
    mapID: z.number(),
    mapName: z.string(),
    forbidMoving: z.boolean(),
    forbidRotating: z.boolean(),
    forbidZooming: z.boolean(),
    gameMode: z.string(),
    gameState: z.string(),
    isStreak: z.boolean(),
    isInfinite: z.boolean(),
    timeLimit: z.number(),
    streakType: z.string(),
})

export const PlayerBase = z.object({
    displayName: z.string(),
    userName: z.string(),
    profilePicUrl: z.string(),
    score: z.number(),
    distance: z.number(),
    timeTaken: z.number(),
    streak: z.number(),
    playerFlagName: z.string().nullish(),
    playerFlag: z.string().nullish(),
    guessCount: z.number(),
    isStreamerResult: z.boolean(),
})
export const MapRoundResult = z.array(PlayerBase.extend({
    guessedBefore: z.boolean(),
    exactCountryCode: z.string(),
    countryCode: z.string(),
    wasRandom: z.boolean(),
}
))

export const MapGameEndResult = z.array(PlayerBase)

export const MapRoundSettings = z.object({
    roundNumber: z.number(),
    isMultiGuess: z.boolean(),
    startTime: z.string(),
    gameId: z.string().nullish()
})