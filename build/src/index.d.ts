import * as signalR from '@microsoft/signalr';
import { z } from "zod";
export { z } from "zod";
interface Listeners {
    onStreamerSettings?: (streamerSettings: z.infer<typeof MapOptions>) => any;
    onSuccessfulGuess?: () => any;
    onFailedGuess?: (error: string, text?: string) => any;
    onGameStart?: (mapGameSettings: z.infer<typeof MapGameSettings>) => any;
    onRoundStart?: (mapRoundStart: z.infer<typeof MapRoundSettings>) => any;
    onRoundEnd?: (mapRoundResult: z.infer<typeof MapRoundResult>) => any;
    onGameEnd?: (mapGameEndResult: z.infer<typeof MapGameEndResult>) => any;
    onGameExit?: () => any;
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
export declare const MapOptions: z.ZodNullable<z.ZodObject<{
    mapIdentifier: z.ZodOptional<z.ZodString>;
    botname: z.ZodOptional<z.ZodString>;
    streamer: z.ZodString;
    installedFlagPacks: z.ZodString;
    gameMode: z.ZodString;
    isUSStreak: z.ZodBoolean;
    temporaryGuesses: z.ZodBoolean;
    showFlags: z.ZodBoolean;
    showBorders: z.ZodBoolean;
    showStreamOverlay: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    mapIdentifier?: string | undefined;
    botname?: string | undefined;
    streamer: string;
    installedFlagPacks: string;
    gameMode: string;
    isUSStreak: boolean;
    temporaryGuesses: boolean;
    showFlags: boolean;
    showBorders: boolean;
    showStreamOverlay: boolean;
}, {
    mapIdentifier?: string | undefined;
    botname?: string | undefined;
    streamer: string;
    installedFlagPacks: string;
    gameMode: string;
    isUSStreak: boolean;
    temporaryGuesses: boolean;
    showFlags: boolean;
    showBorders: boolean;
    showStreamOverlay: boolean;
}>>;
export declare const MapGameSettings: z.ZodObject<{
    mapID: z.ZodNumber;
    mapName: z.ZodString;
    forbidMoving: z.ZodBoolean;
    forbidRotating: z.ZodBoolean;
    forbidZooming: z.ZodBoolean;
    gameMode: z.ZodString;
    gameState: z.ZodString;
    isStreak: z.ZodBoolean;
    isInfinite: z.ZodBoolean;
    timeLimit: z.ZodNumber;
    streakType: z.ZodString;
}, "strip", z.ZodTypeAny, {
    gameMode: string;
    mapID: number;
    mapName: string;
    forbidMoving: boolean;
    forbidRotating: boolean;
    forbidZooming: boolean;
    gameState: string;
    isStreak: boolean;
    isInfinite: boolean;
    timeLimit: number;
    streakType: string;
}, {
    gameMode: string;
    mapID: number;
    mapName: string;
    forbidMoving: boolean;
    forbidRotating: boolean;
    forbidZooming: boolean;
    gameState: string;
    isStreak: boolean;
    isInfinite: boolean;
    timeLimit: number;
    streakType: string;
}>;
export declare const PlayerBase: z.ZodObject<{
    displayName: z.ZodString;
    userName: z.ZodString;
    profilePicUrl: z.ZodString;
    score: z.ZodNumber;
    distance: z.ZodNumber;
    timeTaken: z.ZodNumber;
    streak: z.ZodNumber;
    guessCount: z.ZodNumber;
    isStreamerResult: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    displayName: string;
    userName: string;
    profilePicUrl: string;
    score: number;
    distance: number;
    timeTaken: number;
    streak: number;
    guessCount: number;
    isStreamerResult: boolean;
}, {
    displayName: string;
    userName: string;
    profilePicUrl: string;
    score: number;
    distance: number;
    timeTaken: number;
    streak: number;
    guessCount: number;
    isStreamerResult: boolean;
}>;
export declare const MapRoundResult: z.ZodArray<z.ZodObject<z.extendShape<{
    displayName: z.ZodString;
    userName: z.ZodString;
    profilePicUrl: z.ZodString;
    score: z.ZodNumber;
    distance: z.ZodNumber;
    timeTaken: z.ZodNumber;
    streak: z.ZodNumber;
    guessCount: z.ZodNumber;
    isStreamerResult: z.ZodBoolean;
}, {
    guessedBefore: z.ZodBoolean;
    exactCountryCode: z.ZodString;
    countryCode: z.ZodString;
    wasRandom: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
    displayName: string;
    userName: string;
    profilePicUrl: string;
    score: number;
    distance: number;
    timeTaken: number;
    streak: number;
    guessCount: number;
    isStreamerResult: boolean;
    guessedBefore: boolean;
    exactCountryCode: string;
    countryCode: string;
    wasRandom: boolean;
}, {
    displayName: string;
    userName: string;
    profilePicUrl: string;
    score: number;
    distance: number;
    timeTaken: number;
    streak: number;
    guessCount: number;
    isStreamerResult: boolean;
    guessedBefore: boolean;
    exactCountryCode: string;
    countryCode: string;
    wasRandom: boolean;
}>, "many">;
export declare const MapGameEndResult: z.ZodArray<z.ZodObject<{
    displayName: z.ZodString;
    userName: z.ZodString;
    profilePicUrl: z.ZodString;
    score: z.ZodNumber;
    distance: z.ZodNumber;
    timeTaken: z.ZodNumber;
    streak: z.ZodNumber;
    guessCount: z.ZodNumber;
    isStreamerResult: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    displayName: string;
    userName: string;
    profilePicUrl: string;
    score: number;
    distance: number;
    timeTaken: number;
    streak: number;
    guessCount: number;
    isStreamerResult: boolean;
}, {
    displayName: string;
    userName: string;
    profilePicUrl: string;
    score: number;
    distance: number;
    timeTaken: number;
    streak: number;
    guessCount: number;
    isStreamerResult: boolean;
}>, "many">;
export declare const MapRoundSettings: z.ZodObject<{
    roundNumber: z.ZodNumber;
    isMultiGuess: z.ZodBoolean;
    startTime: z.ZodString;
}, "strip", z.ZodTypeAny, {
    roundNumber: number;
    isMultiGuess: boolean;
    startTime: string;
}, {
    roundNumber: number;
    isMultiGuess: boolean;
    startTime: string;
}>;
