import { z } from "zod"

import { MapGameEndResult, MapGameSettings, MapOptions, MapRoundResult, MapRoundSettings  } from "../index";
import fakeGameEndResults from "./fakeGameEndResults";
import fakeGameSettings from "./fakeGameSettings";
import fakeMapOptions from "./fakeMapOptions"
import fakeRoundInfo from "./fakeRoundInfo";
import fakeRoundResults from "./fakeRoundResults";

export class MockConnectionBuilder {

    constructor() {
        console.log("using MockConnectionBuilder")
    }


    registeredHandlers: { [key: string]: (data?: unknown) => void; } = {}

    connection = {
        state: "Closed",

        start: () => {this.connection.state = "Connected" },
        stop: () => {
            this.connection.onclose(new Error("mock error"))
            this.connection.state = "Closed"
            console.log("connection closed")
        },
        on: (method: string, func: (data: unknown) => void) => {
            this.registeredHandlers[method] = func
        },

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onclose: (e: Error) => {
         },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onreconnecting: (e: Error) => { },


        invoke: (method: string, args: unknown): (z.infer<typeof MapOptions> | void) => {
            if (method === "MapLogin") {
                // FIXME: RETURN REAL DATA HERE SOME DAY
                return this.mapOptions
            }
        }

    }

    withUrl(_url: string, _: any) {
        return {
            build: () => this.connection
        }
    }

    startGame = () => {
        this.registeredHandlers.StartGame(this.mapGameSettings)
    }

    sendMapOptions = () => {
        this.registeredHandlers.MapOptions(this.mapOptions)
    }

    startRound = () => {
        this.registeredHandlers.StartRound(this.mapRoundSettings)
    }
    endRound = () => {
        this.registeredHandlers.EndRound(this.mapRoundResult)
    }

    endGame = () => {
        this.registeredHandlers.EndGame(this.mapGameEndResult)
    }
    exitGame = () => { 
        this.registeredHandlers.ExitGame()
    }

    mapOptions  = fakeMapOptions as z.infer<typeof MapOptions>

    mapGameSettings  = fakeGameSettings as z.infer<typeof MapGameSettings>


    mapRoundResult: z.infer<typeof MapRoundResult> =  fakeRoundResults

    mapGameEndResult: z.infer<typeof MapGameEndResult> = fakeGameEndResults

    mapRoundSettings: z.infer<typeof MapRoundSettings> = fakeRoundInfo 
}
