import * as signalR from '@microsoft/signalr';
import { createErrorText, GuessState } from './helpers';

import type { Color, Flag, Guess,  StreamerSettings } from "./types"
 

type Listeners = {
    onStreamerSettings?: (streamerSettings: StreamerSettings) => any
    onSuccesfulGuess? : () => any,
    onFailedGuess? : (error: string, text?: string) => any,
}

// helper to allow sleeping 
const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));

export default class GCSignalRClient {
    connection: signalR.HubConnection
    private listeners?: Listeners
    private _streamerCode?: string
    private running = false

    constructor(url: string, streamerCode?: string, listeners?: Listeners) {
        this.connection = new signalR.HubConnectionBuilder().withUrl(url, {}).build();
        this._streamerCode = streamerCode
        this.listeners = listeners
    }
    set streamerCode(streamerCode: string | undefined) {
        this._streamerCode = streamerCode
        console.info("new streamer code", streamerCode)
        this.#logInToMap()
    }
    get streamerCode(): (string | undefined) {
        return this._streamerCode
    }

    async start() {
        if (this.running) {
            console.warn("dont use start again! use reconnect instead")
        }
        await this.connection.start()
        this.#logInToMap()
        this.#listenToStreamerSettings
        this.#listenToProblems()
        this.running = true
    }

    async stop() {
        await this.connection.stop()
    }

    #setStreamerSettings(streamerSettings?: StreamerSettings) {
        if (!streamerSettings) {
            console.warn("didnt recive streamer settings as response")
        }
        else {
            this.listeners?.onStreamerSettings?.(streamerSettings)
        }

    }
    async #logInToMap() {
        const streamerSettings = await this.connection.invoke("MapLogin", this.streamerCode)
        this.#setStreamerSettings(streamerSettings)
    }

    #listenToStreamerSettings() {
        this.connection.on("SetMapFeatures", (streamerSettings: StreamerSettings) => {
            this.#setStreamerSettings(streamerSettings)
        })
    }

    #listenToProblems() {
        this.connection.onreconnecting = (e) => {
            console.info("default reconnecting from singalR", e)
        }
        this.connection.onclose = (e) => {
            console.warn("signalR connection closed trying to reconnect manually", e)
            setTimeout(() => this.reconnect(), 1000)
        }
    }

    async reconnect() {
        console.info("reconnecting...")
        if (!this.streamerCode) {
            console.warn("calling reconnect without streamer code")
        }

        await this.connection.start()
        const streamerSettings = await this.connection.invoke("MapLogin", this.streamerCode)
        this.#setStreamerSettings(streamerSettings)
    }

    async sendGuess(guess: Guess, checkGuess=true) {
        let guessId: (number | undefined)
        if (this.connection.state !== "Connected") {
            console.log("not connected trying to reconnect before sending guess")
            this.reconnect().then(async () => {
                console.log("sending guess after reconnect")
                guessId = await this.connection.invoke("SendGuessToClients", guess)
            })
        } else {
            guessId = await this.connection.invoke("SendGuessToClients", guess)
        }
        if (!checkGuess) return 
        if (typeof guessId === "number"){
        let state: GuessState = await this.#getGuessState(guessId)
              // 50 might be to much
              let counter = 50
              while (state === "Submitted" || counter <= 0){
                state = await this.#getGuessState(guessId)
                console.log(state)
                await sleep(300)
                counter = counter -1 
              }
              if (counter <= 0 ){
                console.warn("something went wrong while processing guess on client")
                this.listeners?.onFailedGuess?.(state, "something went wrong while processing guess on client")
                return 
              }
              if (state === "Success") {
                  this.listeners?.onSuccesfulGuess?.()
              } else{
                  this.listeners?.onFailedGuess?.(state, createErrorText(state))
        }}
    }
    async sendFlag(data: Flag) {
        const res = await this.connection.invoke("SendFlagToClients", data)
        return res
    }
    async sendColor(data: Color) {
        await this.connection.invoke("SendColorToClients", data)
    }

    async #getGuessState(id: number) {
        return await this.connection.invoke("GetGuessState", id)
    }
}

