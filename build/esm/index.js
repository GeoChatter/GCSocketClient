import * as signalR from "@microsoft/signalr";
import { z } from "zod";
import { createErrorText } from "./helpers.js";
import { Color, Flag, StreamerSettings } from "./types.js";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
class GCSignalRClient {
  connection;
  listeners;
  _streamerCode;
  running = false;
  constructor(url, streamerCode, listeners) {
    z.string().url().parse(url);
    this.connection = new signalR.HubConnectionBuilder().withUrl(url, {}).build();
    this._streamerCode = streamerCode;
    this.listeners = listeners;
    this.#start();
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
    const streamerSettings = StreamerSettings.parse(await this.connection.invoke("MapLogin", this.streamerCode));
    this.#setStreamerSettings(streamerSettings);
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
    const streamerSettings = StreamerSettings.parse(await this.connection.invoke("MapLogin", this.streamerCode));
    this.#setStreamerSettings(streamerSettings);
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
    await this.connection.invoke("SendFlagToClients", Flag.parse(data));
  }
  async sendColor(data) {
    await this.connection.invoke("SendColorToClients", Color.parse(data));
  }
  async #getGuessState(id) {
    return await this.connection.invoke("GetGuessState", id);
  }
}
export {
  GCSignalRClient as default
};
//# sourceMappingURL=index.js.map
