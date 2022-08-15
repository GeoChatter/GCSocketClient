import * as signalR from '@microsoft/signalr';
import { z } from "zod";
import { Color, Flag, Guess, StreamerSettings } from "./types.js";
interface Listeners {
    onStreamerSettings?: (streamerSettings: z.infer<typeof StreamerSettings>) => any;
    onSuccessfulGuess?: () => any;
    onFailedGuess?: (error: string, text?: string) => any;
}
export default class GCSignalRClient {
    #private;
    connection: signalR.HubConnection;
    private listeners?;
    private _streamerCode?;
    private running;
    /**
     * The constructor for the class. It is called when the class is instantiated.
     * @param {string} url - The url of the signalR hub from GeoChatter.
     * @param {string} [streamerCode] - The streamer code is the code that is used on the Server to send the Guess to the right client.
     * @param {Listeners} [listeners] - Listeners trigger a callback that should handle the app state on /map or in the twitch extension for example when streamerSettings change.
     */
    constructor(url: string, streamerCode?: string, listeners?: Listeners);
    /**
     * It sets the streamer code and logs in to the map.
     * @param {string | undefined} streamerCode - The streamer code that you get from the streamer(used to be the bot name).
     */
    set streamerCode(streamerCode: string | undefined);
    /**
     * It returns the value of the private variable _streamerCode.
     * @returns The streamerCode property is being returned.
     */
    get streamerCode(): (string | undefined);
    /**
     * It stops the connection to the SignalR hub.
     */
    stop(): Promise<void>;
    /**
     * > This function is called when the connection to the server is lost and the client needs to
     * reconnect
     *
     * It starts and logs into the map again and then listens to the streamer settings again but it does not recreate the listers because they are already created.
     * (not sure if its true but i believe it is)
     *
     *
     */
    reconnect(): Promise<void>;
    /**
     * It sends a guess to the server and waits for the server to process it
     * @param {Guess} guess - Guess - The guess object that gets send to the server.
     * @param [checkGuess=true] - if true, the client will wait for the server to process the guess and
     * then call the onSuccessfulGuess or onFailedGuess listener.
     * It retries as long as the state is not "Submitted" or the counter hits 50.
     * If checkGuess is false, the client will not wait for the server to process the guess.
     * Otherwise it will call either the onSuccessfulGuess or onFailedGuess listener.
     */
    sendGuess(guess: z.infer<typeof Guess>, checkGuess?: boolean): Promise<void>;
    /**
     * Sends the flag data to the server including the the values from SendingBase from "./types.ts"
     * @param {Flag} data - Flag - This is the data that will be sent to the server.
     */
    sendFlag(data: z.infer<typeof Flag>): Promise<void>;
    /**
     * Sends the color data to the server including the the values from SendingBase from "./types.ts"
     * @param {Flag} data - Flag - This is the data that will be sent to the server.
     */
    sendColor(data: z.infer<typeof Color>): Promise<void>;
}
export {};
