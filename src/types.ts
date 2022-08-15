import z from "zod"
export const SendingBase = z.object(
    {
        bot: z.string(),
        tkn: z.string(),
        id: z.string(),
        name: z.string(),
        sourcePlatform: z.enum(["YouTube", "Twitch"]),
        display: z.string(),
        pic: z.string(),
    }
)

export const Guess = SendingBase.extend( {
    lat: z.string(),
    lng: z.string(),
    isTemporary: z.boolean(),
    isRandom: z.boolean(),
});


export const Flag =  SendingBase.extend( {
    flag: z.string()
});


export const  Color = SendingBase.extend(  {
    color: z.string()
});

// TODO: add all settings and maybe with show option
export const StreamerSettings = z.object(  {
    borders: z.boolean(),
    flags: z.boolean(),
    streamOverlay: z.boolean(),
    borderAdmin: z.boolean(),
    temporaryGuesses: z.boolean(),
    streamer: z.string()
})

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
