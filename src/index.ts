import * as signalR from "@microsoft/signalr";

import { z } from "zod";

import { MockConnectionBuilder } from "./mock/MockConnectionBuilder";
export { z, MockConnectionBuilder };

export interface Listeners {
    onStreamerSettings?: (streamerSettings: z.infer<typeof MapOptions>) => void;
    onSuccessfulGuess?: () => void;
    onFailedGuess?: (error: string, text?: string) => void;
    onGameStart?: (mapGameSettings: z.infer<typeof MapGameSettings>) => void;
    onRoundStart?: (mapRoundStart: z.infer<typeof MapRoundSettings>) => void;
    onRoundEnd?: (mapRoundResult: z.infer<typeof MapRoundResult>) => void;
    onGameEnd?: (mapGameEndResult: z.infer<typeof MapGameEndResult>) => void;
    onGameExit?: () => void;
}

// helper to allow sleeping
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class GCSocketClient {
    connection: signalR.HubConnection | MockConnectionBuilder["connection"];
    private listeners?: Listeners;
    private _streamerCode: string;
    private running = false;

    /**
     * The constructor for the class. It is called when the class is instantiated.
     * @param {string} url - The url of the signalR hub from GeoChatter.
     * @param {string} [streamerCode] - The streamer code is the code that is used on the Server to send the Guess to the right client.
     * @param {Listeners} [listeners] - Listeners trigger a callback that should handle the app state on /map or in the twitch extension for example when streamerSettings change.
     */
    constructor(
        url: string,
        streamerCode: string,
        listeners: Listeners,
        connectionBuilder:
            | signalR.HubConnectionBuilder
            | MockConnectionBuilder = new signalR.HubConnectionBuilder()
    ) {
        const result = z.string().url().safeParse(url);
        if (result.success) {
            this.connection = connectionBuilder.withUrl(result.data, {}).build();
            this._streamerCode = streamerCode;
            this.listeners = listeners;
            void this.#start();
        } else {
            throw result.error;
        }
    }

    /**
     * It sets the streamer code and logs in to the map.
     * @param {string | undefined} streamerCode - The streamer code that you get from the streamer(used to be the bot name).
     */
    set streamerCode(streamerCode: string) {
        if (!streamerCode) {
            console.warn("no streamer code given");
        }
        this._streamerCode = streamerCode;
        console.info("new streamer code", streamerCode);
        void this.#logInToMap();
    }

    /**
     * It returns the value of the private variable _streamerCode.
     * @returns The streamerCode property is being returned.
     */
    get streamerCode(): string {
        return this._streamerCode;
    }

    /**
     * It starts the connection, logs in to the map, listens to streamer settings it got back from the map login and listens to problems
     */
    async #start(): Promise<void> {
        if (this.running) {
            console.warn("don't use start again! use reconnect instead");
        }
        await this.connection.start();
        await this.#logInToMap();
        this.#listenToStreamerSettings();
        this.#listenToProblems();
        this.#listenToGameStart();
        this.#listenToRoundStart();
        this.#listenToRoundEnd();
        this.#listenToGameEnd();
        this.#listenToGameExit();
        this.running = true;
    }

    /**
     * It stops the connection to the SignalR hub.
     */
    async stop() {
        await this.connection.stop();
    }

    /**
     * It does not really set anything but it calls the onStreamerSettings listener.
     *
     * @param {StreamerSettings} [streamerSettings] - StreamerSettings is an object that contains the streamer settings.
     */
    #setStreamerSettings(streamerSettings?: z.infer<typeof MapOptions>) {
        if (!streamerSettings) {
            console.warn("did'nt receive streamer settings as response");
        } else {
            this.listeners?.onStreamerSettings?.(streamerSettings);
        }
    }

    /**
     * > The function `logInToMap` is a function that calls the `MapLogin` method on the
     * server and then gets the streamer settings from the server as a response.
     */
    async #logInToMap() {
        const res: unknown = await this.connection.invoke(
            "MapLogin",
            this.streamerCode
        );
        const streamerSettingsRes = MapOptions.safeParse(res);
        if (streamerSettingsRes.success) {
            this.#setStreamerSettings(streamerSettingsRes.data);
            if (streamerSettingsRes.data.isInGame) {
                await this.#getGameSettings(this.streamerCode)
            }
            if (streamerSettingsRes.data.isInRound) {
                await this.#getRoundSettings(this.streamerCode)
            }
        } else {
            console.error("map log in", streamerSettingsRes.error);
            console.log(res);
        }
    }

    /**
     * > When the server sends a message called "SetMapFeatures", the client will call the
     * #setStreamerSettings function with the data sent by the server so the listener will be run
     */
    #listenToStreamerSettings() {
        this.connection.on(
            "SetMapFeatures",
            (streamerSettings: z.infer<typeof MapOptions>) => {
                this.#setStreamerSettings(streamerSettings);
            }
        );
    }
    /**
     * It listens to the server for a message called "StartGame" and when it receives it, it calls the
     * onGameStart listener with `mapGameSettings`
     */
    #listenToGameStart() {
        this.connection.on("StartGame", (data: unknown) => {
            const res = MapGameSettings.safeParse(data);
            if (res.success) {
                this.listeners?.onGameStart?.(res.data);
            } else {
                console.error("game start", res.error);
            }
        });
    }

    /**
     * It listens to the `StartRound` event from the server and calls the `onRoundStart` listener with the
     * data from the server
     */
    #listenToRoundStart() {
        this.connection.on("StartRound", (data: unknown) => {
            const res = MapRoundSettings.safeParse(data);
            if (res.success) {
                this.listeners?.onRoundStart?.(res.data);
            } else {
                console.error("round start", res.error);
            }
        });
    }
    /**
     * It listens to the server for the "EndRound" event, and when it receives it, it calls the onRoundEnd
     * function in the listeners object with the MapRoundEnd data from the server
     */
    #listenToRoundEnd() {
        this.connection.on("EndRound", (data: unknown) => {
            const res = MapRoundResult.safeParse(data);
            if (res.success) {
                this.listeners?.onRoundEnd?.(res.data);
            } else {
                console.error(res.error);
            }
        });
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
            const res = MapGameEndResult.safeParse(data);
            if (res.success) {
                this.listeners?.onGameEnd?.(res.data);
            } else {
                console.error(res.error);
            }
        });
    }
    /**
     *  When the server sends the `ExitGame` message, call it calls the `onGameExit` listener
     */
    #listenToGameExit() {
        this.connection.on("ExitGame", () => {
            this.listeners?.onGameExit?.();
        });
    }

    /**
     * If the connection gets closed, it waits 1 second and tries to reconnect
     * it also logs if signal r is reconnecting
     */
    #listenToProblems() {
        this.connection.onreconnecting = (e: Error) => {
            console.info("default reconnecting from singalR", e);
        };
        this.connection.onclose = (e: Error) => {
            console.warn("signalR connection closed trying to reconnect manually", e);
            setTimeout(() => {
                void this.reconnect();
            }, 1000);
        };
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
        console.info("reconnecting...");
        if (!this.streamerCode) {
            console.warn("calling reconnect without streamer code");
        }

        await this.connection.start();
        const res: unknown = await this.connection.invoke(
            "MapLogin",
            this.streamerCode
        );
        const streamerSettingsRes = MapOptions.safeParse(res);
        if (streamerSettingsRes.success) {
            this.#setStreamerSettings(streamerSettingsRes.data);
        } else {
            console.error(
                "got a weird response from map login check if you need to update gcsocketlibrary",
                streamerSettingsRes.error
            );
            console.log(res);
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
    async sendGuess(
        guess: z.infer<typeof Guess>,
        checkGuess = true
    ): Promise<void> {
        let guessId: number | undefined;
        if (this.connection.state !== "Connected") {
            console.log("not connected trying to reconnect before sending guess");
            await this.reconnect().then(async () => {
                console.log("sending guess after reconnect");
                guessId = (await this.connection.invoke(
                    "SendGuessToClients",
                    guess
                )) as number;
            });
        } else {
            guessId = (await this.connection.invoke(
                "SendGuessToClients",
                guess
            )) as number;
        }
        if (!checkGuess) return;
        if (typeof guessId === "number") {
            let state: GuessState = await this.#getGuessState(guessId);
            let counter = 6;
            while (state === "Submitted" && counter >= 0) {
                state = await this.#getGuessState(guessId);
                console.log(state);
                await sleep(500);
                counter = counter - 1;
            }
            if (counter <= 0) {
                console.warn("something went wrong while processing guess on client");
                this.listeners?.onFailedGuess?.(
                    state,
                    "something went wrong while processing guess on client"
                );
                return;
            }
            if (state === "Success" || state === "TempSuccess") {
                this.listeners?.onSuccessfulGuess?.();
            } else {
                this.listeners?.onFailedGuess?.(state, createErrorText(state));
            }
        }
    }
    /**
     * Sends the flag data to the server including the the values from SendingBase from "./types.ts"
     * @param {Flag} data - Flag - This is the data that will be sent to the server.
     */
    async sendFlag(data: z.infer<typeof Flag>) {
        const flagParseRes = Flag.safeParse(data);
        if (flagParseRes.success) {
            await this.connection.invoke("SendFlagToClients", flagParseRes.data);
        } else {
            console.error(flagParseRes.error);
            console.log(data);
        }
    }

    /**
     * Sends the color data to the server including the the values from SendingBase from "./types.ts"
     * @param {Flag} data - Flag - This is the data that will be sent to the server.
     */
    async sendColor(data: z.infer<typeof Color>) {
        const ColorParseRes = Color.safeParse(data);
        if (ColorParseRes.success) {
            await this.connection.invoke("SendColorToClients", ColorParseRes.data);
        } else {
            console.error(ColorParseRes.error);
            console.log(data);
        }
    }

    /**
     * This function returns a `Promise<GuessState>` that resolves to the `GuessState` of the guess depending on the `GuessState` Value the guess is either a `Success` or an Error or still progressing
     * @param {number} id - The id of the guess you want to get the state of.
     * @returns GuessState
     */
    async #getGuessState(id: number): Promise<GuessState> {
        return (await this.connection.invoke("GetGuessState", id)) as GuessState;
    }

    /**
     * It gets the user stats for a given channel and twitch id.
     * @param {string} channelName - The name of the channel you want to get the stats for.
     * @param {number} twitchId - The Twitch ID of the user you want to get stats for.
     * @returns A promise that resolves to a StatsPlayer or undefined.
     */
    async getUserStats(
        channelName: string,
        twitchId: number
    ): Promise<z.infer<typeof StatsPlayer> | undefined> {
        const data = (await this.connection.invoke(
            "GetUserStats",
            channelName,
            twitchId
        )) as unknown;
        const parsed = StatsPlayer.safeParse(data);
        if (parsed.success) {
            return parsed.data;
        } else {
            console.error(parsed.error);
        }
    }

    async #getRoundSettings(mapIdentifier: string): Promise<void> {
        const data = await this.connection.invoke("GetRoundSettings", mapIdentifier) as unknown;

        const parsed = MapRoundSettings.safeParse(data);
        if (parsed.success) {
            this.listeners?.onRoundStart?.(parsed.data)
        } else {
            console.error(parsed.error);
        }
    }
    async #getGameSettings(mapIdentifier: string): Promise<void> {
        const data = await this.connection.invoke("GetGameSettings", mapIdentifier) as unknown;
        const parsed = MapGameSettings.safeParse(data);
        if (parsed.success) {
            this.listeners?.onGameStart?.(parsed.data)
        } else {
            console.error(parsed.error);
        }
    }

    /**
     * It returns the channel stats for a given channel name.
     * @param {string} channelName - The name of the channel you want to get the stats of.
     * @returns A promise that resolves to a ChannelStats object or undefined.
     */
    async channelStats(
        channelName: string
    ): Promise<z.infer<typeof ChannelStats> | undefined> {
        const data = (await this.connection.invoke(
            "GetChannelStats",
            channelName
        )) as unknown;
        const parsed = ChannelStats.safeParse(data);
        if (parsed.success) {
            return parsed.data;
        } else {
            console.error(parsed.error);
        }
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
        case GuessState.Banned: {
            return "You are banned by the streamer and not allowed participate in any games.";
        }
        case GuessState.BotNotFound: {
            return "Bot not found";
        }
        case GuessState.GuessedAlready: {
            return "Already sent a guess for the round!";
        }
        case GuessState.InvalidCoordinates: {
            return "Invalid coordinates. Refresh the page.";
        }
        case GuessState.NoGame: {
            return "No ongoing game or round found, try again later.";
        }
        case GuessState.NotFound: {
            return "Invalid user data. Refresh the page.";
        }
        case GuessState.SameCoordinates: {
            return "Failed to send same guess back to back.";
        }
        case GuessState.TooFast: {
            return "Sending guesses too fast, try guessing again.";
        }
        case GuessState.UndefinedError: {
            return "Server error. Try guessing again.";
        }
        case GuessState.Unknown: {
            return "Invalid guess id. Refresh the page.";
        }
        default: {
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
    Unknown = "Unknown",
}

export const SendingBase = z.object({
    bot: z.string(),
    tkn: z.string(),
    id: z.string(),
    name: z.string(),
    sourcePlatform: z.enum(["YouTube", "Twitch"]),
    display: z.string(),
    pic: z.string(),
});

export const Guess = SendingBase.extend({
    lat: z.string(),
    lng: z.string(),
    isTemporary: z.boolean(),
    isRandom: z.boolean(),
});

export const Flag = SendingBase.extend({
    flag: z.string(),
});

export const Color = SendingBase.extend({
    color: z.string(),
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
    isInRound: z.boolean(),
    isInGame: z.boolean(),
});
export const MapGameSettings = z.object({
    mapID: z.string(),
    mapName: z.string(),
    isInfinite: z.boolean(),
    isStreak: z.boolean(),
    gameType: z.string(),
    gameMode: z.string(),
    gameState: z.string(),
    roundCount: z.number(),
    timeLimit: z.number(),
    forbidMoving: z.boolean(),
    forbidZooming: z.boolean(),
    forbidRotating: z.boolean(),
    streakType: z.string(),
});

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
});
export const MapRoundResult = z.array(
    PlayerBase.extend({
        guessedBefore: z.boolean(),
        exactCountryCode: z.string().nullish(),
        countryCode: z.string().nullish(),
        wasRandom: z.boolean(),
        gameId: z.string().nullish(),
    })
);

export const MapGameEndResult = MapRoundResult;

export const MapRoundSettings = z.object({
    roundNumber: z.number(),
    isMultiGuess: z.boolean(),
    startTime: z.string(),
    layers: z.array(z.string()).nullish(),
    is3dEnabled: z.boolean(),
    blackAndWhite: z.boolean(),
    blurry: z.boolean(),
    mirrored: z.boolean(),
    upsideDown: z.boolean(),
    sepia: z.boolean(),
    maxZoomLevel: z.number(),
});

export const StatsPlayer = z.object({
    id: z.number(),
    channel: z.string(),
    twitchId: z.string(),
    playerName: z.string(),
    playerFlag: z.string(),
    playerFlagName: z.string(),
    countryStreak: z.number(),
    bestStreak: z.number(),
    correctCountries: z.number(),
    numberOfCountries: z.number(),
    wins: z.number(),
    perfects: z.number(),
    overallAverage: z.number(),
    bestGame: z.number(),
    bestRound: z.number(),
    sumOfGuesses: z.number(),
    totalDistance: z.number(),
    lastGuess: z.string(),
    noOfGuesses: z.number(),
    noOf5kGuesses: z.number(),
    displayName: z.string(),
    profilePictureUrl: z.string(),
    color: z.string(),
    isBanned: z.boolean(),
    modified: z.string(),
});

export const ChannelStats = z.object({
    averageName: z.string(),
    averageSum: z.number(),
    averageCount: z.number(),
    bestStreak: z.number(),
    bestStreakName: z.string(),
    bestRound: z.number(),
    bestRoundName: z.string(),
    noOf5kGuesses: z.number(),
    noOf5kGuessesName: z.string(),
    wins: z.number(),
    winsName: z.string(),
    perfects: z.number(),
    perfectsName: z.string(),
});
