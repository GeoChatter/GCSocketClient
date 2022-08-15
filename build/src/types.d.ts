import z from "zod";
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
export declare const enum GuessState {
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
