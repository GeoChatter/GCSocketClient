
interface SendingBase {
    bot: string;
    tkn: string;
    id: string;
    name: string;
    sourcePlatform: "YouTube" | "Twitch"
    display: string;
    pic: string;
}

export interface Guess extends SendingBase {
    lat: string;
    lng: string;
    isTemporary: boolean;
    isRandom: boolean;
};


export interface Flag extends SendingBase {
    flag: string;
};


export interface Color extends SendingBase  {
    color: string
};

// TODO: add all settings and maybe with show option
export type StreamerSettings = {
    borders: boolean,
    flags: boolean,
    streamOverlay: boolean,
    borderAdmin: boolean,
    temporaryGuesses: boolean,
    streamer: string
}
 export const enum GuessState
    { 
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
