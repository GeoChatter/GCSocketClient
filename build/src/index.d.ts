import * as signalR from '@microsoft/signalr';
import { z } from "zod";
export { z } from "zod";
interface Listeners {
    onStreamerSettings?: (streamerSettings: z.infer<typeof MapOptions>) => any;
    onSuccessfulGuess?: () => any;
    onFailedGuess?: (error: string, text?: string) => any;
    onGameStart?: (mapGameSettings: z.infer<typeof MapGameSettings>) => any;
    onRoundStart?: (mapRoundStart: z.infer<typeof MapRoundSettings>) => any;
    onRoundEnd?: () => any;
    onGameEnd?: () => any;
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
export declare const MapOptions: z.ZodObject<{
    mapIdentifier: z.ZodString;
    streamer: z.ZodString;
    installedFlagPacks: z.ZodString;
    gameMode: z.ZodString;
    isUSStreak: z.ZodBoolean;
    temporaryGuesses: z.ZodBoolean;
    showFlags: z.ZodBoolean;
    showBorders: z.ZodBoolean;
    showStreamOverlay: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    mapIdentifier: string;
    streamer: string;
    installedFlagPacks: string;
    gameMode: string;
    isUSStreak: boolean;
    temporaryGuesses: boolean;
    showFlags: boolean;
    showBorders: boolean;
    showStreamOverlay: boolean;
}, {
    mapIdentifier: string;
    streamer: string;
    installedFlagPacks: string;
    gameMode: string;
    isUSStreak: boolean;
    temporaryGuesses: boolean;
    showFlags: boolean;
    showBorders: boolean;
    showStreamOverlay: boolean;
}>;
export declare const MapGameSettings: z.ZodObject<{
    MapID: z.ZodString;
    MapName: z.ZodString;
    ForbidMoving: z.ZodBoolean;
    ForbidRotating: z.ZodBoolean;
    ForbidZooming: z.ZodBoolean;
    GameMode: z.ZodString;
    GameState: z.ZodString;
    IsStreak: z.ZodBoolean;
    IsInfinite: z.ZodBoolean;
    TimeLimit: z.ZodNumber;
    StreakType: z.ZodString;
}, "strip", z.ZodTypeAny, {
    MapID: string;
    MapName: string;
    ForbidMoving: boolean;
    ForbidRotating: boolean;
    ForbidZooming: boolean;
    GameMode: string;
    GameState: string;
    IsStreak: boolean;
    IsInfinite: boolean;
    TimeLimit: number;
    StreakType: string;
}, {
    MapID: string;
    MapName: string;
    ForbidMoving: boolean;
    ForbidRotating: boolean;
    ForbidZooming: boolean;
    GameMode: string;
    GameState: string;
    IsStreak: boolean;
    IsInfinite: boolean;
    TimeLimit: number;
    StreakType: string;
}>;
export declare const MapRoundResult: z.ZodObject<{
    DisplayName: z.ZodString;
    UserName: z.ZodString;
    ProfilePicUrl: z.ZodString;
    WasRandom: z.ZodBoolean;
    Score: z.ZodNumber;
    Distance: z.ZodNumber;
    TimeTaken: z.ZodNumber;
    Streak: z.ZodNumber;
    CountryCode: z.ZodString;
    ExactCountryCode: z.ZodString;
    GuessCount: z.ZodNumber;
    IsStreamerResult: z.ZodBoolean;
    GuessedBefore: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    DisplayName: string;
    UserName: string;
    ProfilePicUrl: string;
    WasRandom: boolean;
    Score: number;
    Distance: number;
    TimeTaken: number;
    Streak: number;
    CountryCode: string;
    ExactCountryCode: string;
    GuessCount: number;
    IsStreamerResult: boolean;
    GuessedBefore: boolean;
}, {
    DisplayName: string;
    UserName: string;
    ProfilePicUrl: string;
    WasRandom: boolean;
    Score: number;
    Distance: number;
    TimeTaken: number;
    Streak: number;
    CountryCode: string;
    ExactCountryCode: string;
    GuessCount: number;
    IsStreamerResult: boolean;
    GuessedBefore: boolean;
}>;
export declare const MapRoundSettings: z.ZodObject<{
    RoundNumber: z.ZodNumber;
    IsMultiGuess: z.ZodBoolean;
    StartTime: z.ZodString;
}, "strip", z.ZodTypeAny, {
    RoundNumber: number;
    IsMultiGuess: boolean;
    StartTime: string;
}, {
    RoundNumber: number;
    IsMultiGuess: boolean;
    StartTime: string;
}>;
