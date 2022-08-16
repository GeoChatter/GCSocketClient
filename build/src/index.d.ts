import * as signalR from '@microsoft/signalr';
import { z } from "zod";
export { z } from "zod";
interface Listeners {
    onStreamerSettings?: (streamerSettings: z.infer<typeof StreamerSettings>) => any;
    onSuccessfulGuess?: () => any;
    onFailedGuess?: (error: string, text?: string) => any;
}
export declare class GCSocketClient {
    #private;
    connection: signalR.HubConnection;
    private listeners?;
    private _streamerCode;
    private running;
    /**
     * The constructor for the class. It is called when the class is instantiated.
     * @param {string} url - The url of the signalR hub from GeoChatter.
     * @param {string} [streamerCode] - The streamer code is the code that is used on the Server to send the Guess to the right client.
     * @param {Listeners} [listeners] - Listeners trigger a callback that should handle the app state on /map or in the twitch extension for example when streamerSettings change.
     */
    constructor(url: string, streamerCode: string, listeners?: Listeners);
    /**
     * It sets the streamer code and logs in to the map.
     * @param {string | undefined} streamerCode - The streamer code that you get from the streamer(used to be the bot name).
     */
    set streamerCode(streamerCode: string);
    /**
     * It returns the value of the private variable _streamerCode.
     * @returns The streamerCode property is being returned.
     */
    get streamerCode(): (string);
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
export declare const SendingBase: z.ZodObject<{
    bot: z.ZodString;
    tkn: z.ZodString;
    id: z.ZodString;
    name: z.ZodString;
    sourcePlatform: z.ZodEnum<["YouTube", "Twitch"]>;
    display: z.ZodString;
    pic: z.ZodString;
}, "strip", z.ZodTypeAny, {
    bot: string;
    tkn: string;
    id: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch";
    display: string;
    pic: string;
}, {
    bot: string;
    tkn: string;
    id: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch";
    display: string;
    pic: string;
}>;
export declare const Guess: z.ZodObject<z.extendShape<{
    bot: z.ZodString;
    tkn: z.ZodString;
    id: z.ZodString;
    name: z.ZodString;
    sourcePlatform: z.ZodEnum<["YouTube", "Twitch"]>;
    display: z.ZodString;
    pic: z.ZodString;
}, {
    lat: z.ZodString;
    lng: z.ZodString;
    isTemporary: z.ZodBoolean;
    isRandom: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
    bot: string;
    tkn: string;
    id: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch";
    display: string;
    pic: string;
    lat: string;
    lng: string;
    isTemporary: boolean;
    isRandom: boolean;
}, {
    bot: string;
    tkn: string;
    id: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch";
    display: string;
    pic: string;
    lat: string;
    lng: string;
    isTemporary: boolean;
    isRandom: boolean;
}>;
export declare const Flag: z.ZodObject<z.extendShape<{
    bot: z.ZodString;
    tkn: z.ZodString;
    id: z.ZodString;
    name: z.ZodString;
    sourcePlatform: z.ZodEnum<["YouTube", "Twitch"]>;
    display: z.ZodString;
    pic: z.ZodString;
}, {
    flag: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    bot: string;
    tkn: string;
    id: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch";
    display: string;
    pic: string;
    flag: string;
}, {
    bot: string;
    tkn: string;
    id: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch";
    display: string;
    pic: string;
    flag: string;
}>;
export declare const Color: z.ZodObject<z.extendShape<{
    bot: z.ZodString;
    tkn: z.ZodString;
    id: z.ZodString;
    name: z.ZodString;
    sourcePlatform: z.ZodEnum<["YouTube", "Twitch"]>;
    display: z.ZodString;
    pic: z.ZodString;
}, {
    color: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    bot: string;
    tkn: string;
    id: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch";
    display: string;
    pic: string;
    color: string;
}, {
    bot: string;
    tkn: string;
    id: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch";
    display: string;
    pic: string;
    color: string;
}>;
export declare const StreamerSettings: z.ZodObject<{
    borders: z.ZodBoolean;
    flags: z.ZodBoolean;
    streamOverlay: z.ZodBoolean;
    borderAdmin: z.ZodBoolean;
    temporaryGuesses: z.ZodBoolean;
    streamer: z.ZodString;
}, "strip", z.ZodTypeAny, {
    borders: boolean;
    flags: boolean;
    streamOverlay: boolean;
    borderAdmin: boolean;
    temporaryGuesses: boolean;
    streamer: string;
}, {
    borders: boolean;
    flags: boolean;
    streamOverlay: boolean;
    borderAdmin: boolean;
    temporaryGuesses: boolean;
    streamer: string;
}>;
