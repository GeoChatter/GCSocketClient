// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-floating-promises */
import * as signalR from '@microsoft/signalr';
import { z } from "zod"
import { createErrorText, GuessState } from './helpers.js';

import { Color, Flag, Guess, StreamerSettings } from "./types.js"


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
        z.string().url().parse(url)
        this.connection = new signalR.HubConnectionBuilder().withUrl(url, {}).build();
        this._streamerCode = streamerCode
        this.listeners = listeners
        this.#start()
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
        const streamerSettings = StreamerSettings.parse(await this.connection.invoke("MapLogin", this.streamerCode))
        this.#setStreamerSettings(streamerSettings)
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
        const streamerSettings = StreamerSettings.parse(await this.connection.invoke("MapLogin", this.streamerCode))
        this.#setStreamerSettings(streamerSettings)
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
        await this.connection.invoke("SendFlagToClients", Flag.parse(data))
    }

    /**
     * Sends the color data to the server including the the values from SendingBase from "./types.ts"
     * @param {Flag} data - Flag - This is the data that will be sent to the server.
     */
    async sendColor(data: z.infer<typeof Color>) {
        await this.connection.invoke("SendColorToClients", Color.parse(data))
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
