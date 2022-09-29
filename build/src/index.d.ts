import * as signalR from "@microsoft/signalr";
import { z } from "zod";
import { MockConnectionBuilder } from "./mock/MockConnectionBuilder";
export { z, MockConnectionBuilder };
interface Listeners {
    onStreamerSettings?: (streamerSettings: z.infer<typeof MapOptions>) => void;
    onSuccessfulGuess?: () => void;
    onFailedGuess?: (error: string, text?: string) => void;
    onGameStart?: (mapGameSettings: z.infer<typeof MapGameSettings>) => void;
    onRoundStart?: (mapRoundStart: z.infer<typeof MapRoundSettings>) => void;
    onRoundEnd?: (mapRoundResult: z.infer<typeof MapRoundResult>) => void;
    onGameEnd?: (mapGameEndResult: z.infer<typeof MapGameEndResult>) => void;
    onGameExit?: () => void;
}
export declare class GCSocketClient {
    #private;
    connection: signalR.HubConnection | MockConnectionBuilder["connection"];
    private listeners?;
    private _streamerCode;
    private running;
    /**
     * The constructor for the class. It is called when the class is instantiated.
     * @param {string} url - The url of the signalR hub from GeoChatter.
     * @param {string} [streamerCode] - The streamer code is the code that is used on the Server to send the Guess to the right client.
     * @param {Listeners} [listeners] - Listeners trigger a callback that should handle the app state on /map or in the twitch extension for example when streamerSettings change.
     */
    constructor(url: string, streamerCode: string, listeners: Listeners, connectionBuilder?: signalR.HubConnectionBuilder | MockConnectionBuilder);
    /**
     * It sets the streamer code and logs in to the map.
     * @param {string | undefined} streamerCode - The streamer code that you get from the streamer(used to be the bot name).
     */
    set streamerCode(streamerCode: string);
    /**
     * It returns the value of the private variable _streamerCode.
     * @returns The streamerCode property is being returned.
     */
    get streamerCode(): string;
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
    /**
     * It gets the user stats for a given channel and twitch id.
     * @param {string} channelName - The name of the channel you want to get the stats for.
     * @param {number} twitchId - The Twitch ID of the user you want to get stats for.
     * @returns A promise that resolves to a StatsPlayer or undefined.
     */
    getUserStats(channelName: string, twitchId: number): Promise<z.infer<typeof StatsPlayer> | undefined>;
    /**
     * It returns the channel stats for a given channel name.
     * @param {string} channelName - The name of the channel you want to get the stats of.
     * @returns A promise that resolves to a ChannelStats object or undefined.
     */
    channelStats(channelName: string): Promise<z.infer<typeof ChannelStats> | undefined>;
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
    id: string;
    bot: string;
    tkn: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch";
    display: string;
    pic: string;
}, {
    id: string;
    bot: string;
    tkn: string;
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
    id: string;
    bot: string;
    tkn: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch";
    display: string;
    pic: string;
    lat: string;
    lng: string;
    isTemporary: boolean;
    isRandom: boolean;
}, {
    id: string;
    bot: string;
    tkn: string;
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
    id: string;
    bot: string;
    tkn: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch";
    display: string;
    pic: string;
    flag: string;
}, {
    id: string;
    bot: string;
    tkn: string;
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
    id: string;
    bot: string;
    tkn: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch";
    display: string;
    pic: string;
    color: string;
}, {
    id: string;
    bot: string;
    tkn: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch";
    display: string;
    pic: string;
    color: string;
}>;
export declare const MapOptions: z.ZodObject<{
    mapIdentifier: z.ZodOptional<z.ZodString>;
    botname: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    streamer: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    twitchChannelName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    installedFlagPacks: z.ZodString;
    gameMode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    isUSStreak: z.ZodBoolean;
    temporaryGuesses: z.ZodBoolean;
    showFlags: z.ZodBoolean;
    showBorders: z.ZodBoolean;
    showStreamOverlay: z.ZodBoolean;
    isInRound: z.ZodBoolean;
    isInGame: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    mapIdentifier?: string | undefined;
    botname?: string | null | undefined;
    streamer?: string | null | undefined;
    twitchChannelName?: string | null | undefined;
    gameMode?: string | null | undefined;
    installedFlagPacks: string;
    isUSStreak: boolean;
    temporaryGuesses: boolean;
    showFlags: boolean;
    showBorders: boolean;
    showStreamOverlay: boolean;
    isInRound: boolean;
    isInGame: boolean;
}, {
    mapIdentifier?: string | undefined;
    botname?: string | null | undefined;
    streamer?: string | null | undefined;
    twitchChannelName?: string | null | undefined;
    gameMode?: string | null | undefined;
    installedFlagPacks: string;
    isUSStreak: boolean;
    temporaryGuesses: boolean;
    showFlags: boolean;
    showBorders: boolean;
    showStreamOverlay: boolean;
    isInRound: boolean;
    isInGame: boolean;
}>;
export declare const MapGameSettings: z.ZodObject<{
    mapID: z.ZodString;
    mapName: z.ZodString;
    isInfinite: z.ZodBoolean;
    isStreak: z.ZodBoolean;
    gameType: z.ZodString;
    gameMode: z.ZodString;
    gameState: z.ZodString;
    roundCount: z.ZodNumber;
    timeLimit: z.ZodNumber;
    forbidMoving: z.ZodBoolean;
    forbidZooming: z.ZodBoolean;
    forbidRotating: z.ZodBoolean;
    streakType: z.ZodString;
}, "strip", z.ZodTypeAny, {
    gameMode: string;
    mapID: string;
    mapName: string;
    isInfinite: boolean;
    isStreak: boolean;
    gameType: string;
    gameState: string;
    roundCount: number;
    timeLimit: number;
    forbidMoving: boolean;
    forbidZooming: boolean;
    forbidRotating: boolean;
    streakType: string;
}, {
    gameMode: string;
    mapID: string;
    mapName: string;
    isInfinite: boolean;
    isStreak: boolean;
    gameType: string;
    gameState: string;
    roundCount: number;
    timeLimit: number;
    forbidMoving: boolean;
    forbidZooming: boolean;
    forbidRotating: boolean;
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
    playerFlagName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    playerFlag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    guessCount: z.ZodNumber;
    isStreamerResult: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    playerFlagName?: string | null | undefined;
    playerFlag?: string | null | undefined;
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
    playerFlagName?: string | null | undefined;
    playerFlag?: string | null | undefined;
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
    playerFlagName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    playerFlag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    guessCount: z.ZodNumber;
    isStreamerResult: z.ZodBoolean;
}, {
    guessedBefore: z.ZodBoolean;
    exactCountryCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    countryCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    wasRandom: z.ZodBoolean;
    gameId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    playerFlagName?: string | null | undefined;
    playerFlag?: string | null | undefined;
    exactCountryCode?: string | null | undefined;
    countryCode?: string | null | undefined;
    gameId?: string | null | undefined;
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
    wasRandom: boolean;
}, {
    playerFlagName?: string | null | undefined;
    playerFlag?: string | null | undefined;
    exactCountryCode?: string | null | undefined;
    countryCode?: string | null | undefined;
    gameId?: string | null | undefined;
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
    wasRandom: boolean;
}>, "many">;
export declare const MapGameEndResult: z.ZodArray<z.ZodObject<z.extendShape<{
    displayName: z.ZodString;
    userName: z.ZodString;
    profilePicUrl: z.ZodString;
    score: z.ZodNumber;
    distance: z.ZodNumber;
    timeTaken: z.ZodNumber;
    streak: z.ZodNumber;
    playerFlagName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    playerFlag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    guessCount: z.ZodNumber;
    isStreamerResult: z.ZodBoolean;
}, {
    guessedBefore: z.ZodBoolean;
    exactCountryCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    countryCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    wasRandom: z.ZodBoolean;
    gameId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    playerFlagName?: string | null | undefined;
    playerFlag?: string | null | undefined;
    exactCountryCode?: string | null | undefined;
    countryCode?: string | null | undefined;
    gameId?: string | null | undefined;
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
    wasRandom: boolean;
}, {
    playerFlagName?: string | null | undefined;
    playerFlag?: string | null | undefined;
    exactCountryCode?: string | null | undefined;
    countryCode?: string | null | undefined;
    gameId?: string | null | undefined;
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
    wasRandom: boolean;
}>, "many">;
export declare const MapRoundSettings: z.ZodObject<{
    roundNumber: z.ZodNumber;
    isMultiGuess: z.ZodBoolean;
    startTime: z.ZodString;
    layers: z.ZodArray<z.ZodString, "many">;
    is3dEnabled: z.ZodBoolean;
    blackAndWhite: z.ZodBoolean;
    blurry: z.ZodBoolean;
    mirrored: z.ZodBoolean;
    upsideDown: z.ZodBoolean;
    sepia: z.ZodBoolean;
    maxZoomLevel: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    roundNumber: number;
    isMultiGuess: boolean;
    startTime: string;
    layers: string[];
    is3dEnabled: boolean;
    blackAndWhite: boolean;
    blurry: boolean;
    mirrored: boolean;
    upsideDown: boolean;
    sepia: boolean;
    maxZoomLevel: number;
}, {
    roundNumber: number;
    isMultiGuess: boolean;
    startTime: string;
    layers: string[];
    is3dEnabled: boolean;
    blackAndWhite: boolean;
    blurry: boolean;
    mirrored: boolean;
    upsideDown: boolean;
    sepia: boolean;
    maxZoomLevel: number;
}>;
export declare const StatsPlayer: z.ZodObject<{
    id: z.ZodNumber;
    channel: z.ZodString;
    twitchId: z.ZodString;
    playerName: z.ZodString;
    playerFlag: z.ZodString;
    playerFlagName: z.ZodString;
    countryStreak: z.ZodNumber;
    bestStreak: z.ZodNumber;
    correctCountries: z.ZodNumber;
    numberOfCountries: z.ZodNumber;
    wins: z.ZodNumber;
    perfects: z.ZodNumber;
    overallAverage: z.ZodNumber;
    bestGame: z.ZodNumber;
    bestRound: z.ZodNumber;
    sumOfGuesses: z.ZodNumber;
    totalDistance: z.ZodNumber;
    lastGuess: z.ZodString;
    noOfGuesses: z.ZodNumber;
    noOf5kGuesses: z.ZodNumber;
    displayName: z.ZodString;
    profilePictureUrl: z.ZodString;
    color: z.ZodString;
    isBanned: z.ZodBoolean;
    modified: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    displayName: string;
    playerFlagName: string;
    playerFlag: string;
    color: string;
    channel: string;
    twitchId: string;
    playerName: string;
    countryStreak: number;
    bestStreak: number;
    correctCountries: number;
    numberOfCountries: number;
    wins: number;
    perfects: number;
    overallAverage: number;
    bestGame: number;
    bestRound: number;
    sumOfGuesses: number;
    totalDistance: number;
    lastGuess: string;
    noOfGuesses: number;
    noOf5kGuesses: number;
    profilePictureUrl: string;
    isBanned: boolean;
    modified: string;
}, {
    id: number;
    displayName: string;
    playerFlagName: string;
    playerFlag: string;
    color: string;
    channel: string;
    twitchId: string;
    playerName: string;
    countryStreak: number;
    bestStreak: number;
    correctCountries: number;
    numberOfCountries: number;
    wins: number;
    perfects: number;
    overallAverage: number;
    bestGame: number;
    bestRound: number;
    sumOfGuesses: number;
    totalDistance: number;
    lastGuess: string;
    noOfGuesses: number;
    noOf5kGuesses: number;
    profilePictureUrl: string;
    isBanned: boolean;
    modified: string;
}>;
export declare const ChannelStats: z.ZodObject<{
    averageName: z.ZodString;
    averageSum: z.ZodNumber;
    averageCount: z.ZodNumber;
    bestStreak: z.ZodNumber;
    bestStreakName: z.ZodString;
    bestRound: z.ZodNumber;
    bestRoundName: z.ZodString;
    noOf5kGuesses: z.ZodNumber;
    noOf5kGuessesName: z.ZodString;
    wins: z.ZodNumber;
    winsName: z.ZodString;
    perfects: z.ZodNumber;
    perfectsName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    bestStreak: number;
    wins: number;
    perfects: number;
    bestRound: number;
    noOf5kGuesses: number;
    averageName: string;
    averageSum: number;
    averageCount: number;
    bestStreakName: string;
    bestRoundName: string;
    noOf5kGuessesName: string;
    winsName: string;
    perfectsName: string;
}, {
    bestStreak: number;
    wins: number;
    perfects: number;
    bestRound: number;
    noOf5kGuesses: number;
    averageName: string;
    averageSum: number;
    averageCount: number;
    bestStreakName: string;
    bestRoundName: string;
    noOf5kGuessesName: string;
    winsName: string;
    perfectsName: string;
}>;
