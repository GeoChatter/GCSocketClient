import * as signalR from "@microsoft/signalr";
import { z } from "zod";
import { z as z2 } from "zod";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
class GCSocketClient {
  connection;
  listeners;
  _streamerCode;
  running = false;
  constructor(url, streamerCode, listeners) {
    const result = z.string().url().safeParse(url);
    if (result.success) {
      this.connection = new signalR.HubConnectionBuilder().withUrl(result.data, {}).build();
      this._streamerCode = streamerCode;
      this.listeners = listeners;
      this.#start();
    } else {
      throw result.error;
    }
  }
  set streamerCode(streamerCode) {
    if (!streamerCode) {
      console.warn("no streamer code given");
    }
    this._streamerCode = streamerCode;
    console.info("new streamer code", streamerCode);
    this.#logInToMap();
  }
  get streamerCode() {
    return this._streamerCode;
  }
  async #start() {
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
  async stop() {
    await this.connection.stop();
  }
  #setStreamerSettings(streamerSettings) {
    if (!streamerSettings) {
      console.warn("did'nt receive streamer settings as response");
    } else {
      this.listeners?.onStreamerSettings?.(streamerSettings);
    }
  }
  async #logInToMap() {
    const res = await this.connection.invoke("MapLogin", this.streamerCode);
    const streamerSettingsRes = MapOptions.safeParse(res);
    if (streamerSettingsRes.success) {
      this.#setStreamerSettings(streamerSettingsRes.data);
    } else {
      console.error("map log in", streamerSettingsRes.error);
      console.log(res);
    }
  }
  #listenToStreamerSettings() {
    this.connection.on("SetMapFeatures", (streamerSettings) => {
      this.#setStreamerSettings(streamerSettings);
    });
  }
  #listenToGameStart() {
    this.connection.on("StartGame", (data) => {
      const res = MapGameSettings.safeParse(data);
      if (res.success) {
        this.listeners?.onGameStart?.(res.data);
      } else {
        console.error("game start", res.error);
      }
    });
  }
  #listenToRoundStart() {
    this.connection.on("StartRound", (data) => {
      const res = MapRoundSettings.safeParse(data);
      if (res.success) {
        this.listeners?.onRoundStart?.(res.data);
      } else {
        console.error("round start", res.error);
      }
    });
  }
  #listenToRoundEnd() {
    this.connection.on("EndRound", (data) => {
      const res = MapRoundResult.safeParse(data);
      if (res.success) {
        this.listeners?.onRoundEnd?.(res.data);
      } else {
        console.error(res.error);
      }
    });
  }
  #listenToGameEnd() {
    this.connection.on("EndGame", (data) => {
      const res = MapGameEndResult.safeParse(data);
      if (res.success) {
        this.listeners?.onGameEnd?.(res.data);
      } else {
        console.error(res.error);
      }
    });
  }
  #listenToGameExit() {
    this.connection.on("ExitGame", () => {
      this.listeners?.onGameExit?.();
    });
  }
  #listenToProblems() {
    this.connection.onreconnecting = (e) => {
      console.info("default reconnecting from singalR", e);
    };
    this.connection.onclose = (e) => {
      console.warn("signalR connection closed trying to reconnect manually", e);
      setTimeout(() => {
        this.reconnect();
      }, 1e3);
    };
  }
  async reconnect() {
    console.info("reconnecting...");
    if (!this.streamerCode) {
      console.warn("calling reconnect without streamer code");
    }
    await this.connection.start();
    const res = await this.connection.invoke("MapLogin", this.streamerCode);
    const streamerSettingsRes = MapOptions.safeParse(res);
    if (streamerSettingsRes.success) {
      this.#setStreamerSettings(streamerSettingsRes.data);
    } else {
      console.error("got a weird response from map login check if you need to update gcsocketlibrary", streamerSettingsRes.error);
      console.log(res);
    }
  }
  async sendGuess(guess, checkGuess = true) {
    let guessId;
    if (this.connection.state !== "Connected") {
      console.log("not connected trying to reconnect before sending guess");
      await this.reconnect().then(async () => {
        console.log("sending guess after reconnect");
        guessId = await this.connection.invoke("SendGuessToClients", guess);
      });
    } else {
      guessId = await this.connection.invoke("SendGuessToClients", guess);
    }
    if (!checkGuess)
      return;
    if (typeof guessId === "number") {
      let state = await this.#getGuessState(guessId);
      let counter = 50;
      while (state === "Submitted" || counter <= 0) {
        state = await this.#getGuessState(guessId);
        console.log(state);
        await sleep(300);
        counter = counter - 1;
      }
      if (counter <= 0) {
        console.warn("something went wrong while processing guess on client");
        this.listeners?.onFailedGuess?.(state, "something went wrong while processing guess on client");
        return;
      }
      if (state === "Success" || state === "TempSuccess") {
        this.listeners?.onSuccessfulGuess?.();
      } else {
        this.listeners?.onFailedGuess?.(state, createErrorText(state));
      }
    }
  }
  async sendFlag(data) {
    const flagParseRes = Flag.safeParse(data);
    if (flagParseRes.success) {
      await this.connection.invoke("SendFlagToClients", flagParseRes.data);
    } else {
      console.error(flagParseRes.error);
      console.log(data);
    }
  }
  async sendColor(data) {
    const ColorParseRes = Color.safeParse(data);
    if (ColorParseRes.success) {
      await this.connection.invoke("SendColorToClients", ColorParseRes.data);
    } else {
      console.error(ColorParseRes.error);
      console.log(data);
    }
  }
  async #getGuessState(id) {
    return await this.connection.invoke("GetGuessState", id);
  }
}
function createErrorText(status) {
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
      return "No ongoing game found, try again later.";
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
var GuessState = /* @__PURE__ */ ((GuessState2) => {
  GuessState2["Submitted"] = "Submitted";
  GuessState2["Success"] = "Success";
  GuessState2["NoGame"] = "NoGame";
  GuessState2["TempSuccess"] = "TempSuccess";
  GuessState2["NotFound"] = "NotFound";
  GuessState2["Banned"] = "Banned";
  GuessState2["GuessedAlready"] = "GuessedAlready";
  GuessState2["TooFast"] = "TooFast";
  GuessState2["InvalidCoordinates"] = "InvalidCoordinates";
  GuessState2["SameCoordinates"] = "SameCoordinates";
  GuessState2["UndefinedError"] = "UndefinedError";
  GuessState2["BotNotFound"] = "BotNotFound";
  GuessState2["Unknown"] = "Unknown";
  return GuessState2;
})(GuessState || {});
const SendingBase = z.object(
  {
    bot: z.string(),
    tkn: z.string(),
    id: z.string(),
    name: z.string(),
    sourcePlatform: z.enum(["YouTube", "Twitch"]),
    display: z.string(),
    pic: z.string()
  }
);
const Guess = SendingBase.extend({
  lat: z.string(),
  lng: z.string(),
  isTemporary: z.boolean(),
  isRandom: z.boolean()
});
const Flag = SendingBase.extend({
  flag: z.string()
});
const Color = SendingBase.extend({
  color: z.string()
});
const MapOptions = z.object({
  mapIdentifier: z.string().optional(),
  botname: z.string().optional(),
  streamer: z.string(),
  installedFlagPacks: z.string(),
  gameMode: z.string(),
  isUSStreak: z.boolean(),
  temporaryGuesses: z.boolean(),
  showFlags: z.boolean(),
  showBorders: z.boolean(),
  showStreamOverlay: z.boolean()
});
const MapGameSettings = z.object({
  mapID: z.number(),
  mapName: z.string(),
  forbidMoving: z.boolean(),
  forbidRotating: z.boolean(),
  forbidZooming: z.boolean(),
  gameMode: z.string(),
  gameState: z.string(),
  isStreak: z.boolean(),
  isInfinite: z.boolean(),
  timeLimit: z.number(),
  streakType: z.string()
});
const PlayerBase = z.object({
  displayName: z.string(),
  userName: z.string(),
  profilePicUrl: z.string().url(),
  score: z.number(),
  distance: z.number(),
  timeTaken: z.number(),
  streak: z.number(),
  guessCount: z.number(),
  isStreamerResult: z.boolean()
});
const MapRoundResult = z.array(PlayerBase.extend(
  {
    guessedBefore: z.boolean(),
    exactCountryCode: z.string(),
    countryCode: z.string(),
    wasRandom: z.boolean()
  }
));
const MapGameEndResult = z.array(PlayerBase);
const MapRoundSettings = z.object({
  roundNumber: z.number(),
  isMultiGuess: z.boolean(),
  startTime: z.string()
});
export {
  Color,
  Flag,
  GCSocketClient,
  Guess,
  MapGameEndResult,
  MapGameSettings,
  MapOptions,
  MapRoundResult,
  MapRoundSettings,
  PlayerBase,
  SendingBase,
  z2 as z
};
//# sourceMappingURL=index.js.map
