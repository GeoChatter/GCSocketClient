"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  default: () => GCSignalRClient
});
module.exports = __toCommonJS(src_exports);
var signalR = __toESM(require("@microsoft/signalr"));
var import_zod = require("zod");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
class GCSignalRClient {
  connection;
  listeners;
  _streamerCode;
  running = false;
  constructor(url, streamerCode, listeners) {
    const result = import_zod.z.string().url().safeParse(url);
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
    this.#logInToMap();
    this.#listenToStreamerSettings();
    this.#listenToProblems();
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
    const streamerSettingsRes = StreamerSettings.safeParse(await this.connection.invoke("MapLogin", this.streamerCode));
    if (streamerSettingsRes.success) {
      this.#setStreamerSettings(streamerSettingsRes.data);
    } else {
      console.error("got a weird response from map login check if you need to update gcsocketlibrary", streamerSettingsRes.error);
    }
  }
  #listenToStreamerSettings() {
    this.connection.on("SetMapFeatures", (streamerSettings) => {
      this.#setStreamerSettings(streamerSettings);
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
    const streamerSettingsRes = StreamerSettings.safeParse(await this.connection.invoke("MapLogin", this.streamerCode));
    if (streamerSettingsRes.success) {
      this.#setStreamerSettings(streamerSettingsRes.data);
    } else {
      console.error("got a weird response from map login check if you need to update gcsocketlibrary", streamerSettingsRes.error);
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
      await this.connection.invoke("SendFlagToClients");
    } else {
      console.error(flagParseRes.error);
    }
  }
  async sendColor(data) {
    const ColorParseRes = Color.safeParse(data);
    if (ColorParseRes.success) {
      await this.connection.invoke("SendColorToClients", ColorParseRes.data);
    } else {
      console.error(ColorParseRes.error);
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
const SendingBase = import_zod.z.object(
  {
    bot: import_zod.z.string(),
    tkn: import_zod.z.string(),
    id: import_zod.z.string(),
    name: import_zod.z.string(),
    sourcePlatform: import_zod.z.enum(["YouTube", "Twitch"]),
    display: import_zod.z.string(),
    pic: import_zod.z.string()
  }
);
const Guess = SendingBase.extend({
  lat: import_zod.z.string(),
  lng: import_zod.z.string(),
  isTemporary: import_zod.z.boolean(),
  isRandom: import_zod.z.boolean()
});
const Flag = SendingBase.extend({
  flag: import_zod.z.string()
});
const Color = SendingBase.extend({
  color: import_zod.z.string()
});
const StreamerSettings = import_zod.z.object({
  borders: import_zod.z.boolean(),
  flags: import_zod.z.boolean(),
  streamOverlay: import_zod.z.boolean(),
  borderAdmin: import_zod.z.boolean(),
  temporaryGuesses: import_zod.z.boolean(),
  streamer: import_zod.z.string()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=index.js.map
