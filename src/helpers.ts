

export function createErrorText(status: GuessState): string
{
    switch (status)
    {
        case GuessState.Banned:
            {
                return "You are banned by the streamer and not allowed participate in any games.";
            }
        case GuessState.BotNotFound:
            {
                return "Bot not found";
            }
        case GuessState.GuessedAlready:
            {
                return "Already sent a guess for the round!";
            }
        case GuessState.InvalidCoordinates:
            {
                return "Invalid coordinates. Refresh the page.";
            }
        case GuessState.NoGame:
            {
                return "No ongoing game found, try again later.";
            }
        case GuessState.NotFound:
            {
                return "Invalid user data. Refresh the page."
            }
        case GuessState.SameCoordinates:
            {
                return "Failed to send same guess back to back.";
            }
        case GuessState.TooFast:
            {
                return "Sending guesses too fast, try guessing again.";
            }
        case GuessState.UndefinedError:
            {
                return "Server error. Try guessing again.";
            }
        case GuessState.Unknown:
            {
                return "Invalid guess id. Refresh the page.";
            }
        default:
            {
                return "Something went wrong. Try guessing again.";
            }
    }
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
