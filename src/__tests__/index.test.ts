import { vi, describe, expect, it } from "vitest";
import { GCSocketClient, MapGameEndResult, MapGameSettings, MapOptions, MapRoundResult } from "../index";
import { MockConnectionBuilder } from "../mock/MockConnectionBuilder"


describe("init", () => {
  describe("starting GCSignalRClient", () => {
    const onStreamerSettings = vi.fn()
    const onGameStart = vi.fn()
    const onRoundStart = vi.fn()
    const onRoundEnd = vi.fn()
    const onGameEnd = vi.fn()
    const onGameExit = vi.fn()


    const connectionBuilder = new MockConnectionBuilder()
    const client = new GCSocketClient("https://dev.geochatter.tv/guess/geoChatterHub", "code", { connectionBuilder }, {
      onStreamerSettings,
      onGameStart,
      onRoundStart,
      onRoundEnd,
      onGameEnd,
      onGameExit
    })


    vi.useFakeTimers()
    it("map login should trigger streamer settings", () => {
      /* expect(client.connection.invoke).to */
      expect(onStreamerSettings).toBeCalled();
    })
    it("onStreamerSettings should have been called with res from MapLogin", () => {
      expect(onStreamerSettings).toBeCalledWith(connectionBuilder.mapOptions)
    })
    describe("set streamer code", () => {
      client.streamerCode = "newCode"
      it("should call the map login with the new code", () => {
        expect(onStreamerSettings).toBeCalledTimes(2)
      })
    })
    describe("stopping connection", async () => {
      await client.stop()
      it("test reconnect", () => {
        // running timer before checking 
        expect(client.connection.state).toBe("Closed")
        vi.advanceTimersToNextTimer()
        expect(client.connection.state).toBe("Connected")
      })
    })

    describe("gameStart", () => {
      it("should give me the app options", () => {
        connectionBuilder.startGame()
        expect(onGameStart).toHaveBeenCalledWith(connectionBuilder.mapGameSettings)
      })
    })

    describe("roundStart", () => {
      it("should give me the round info", () => {
        connectionBuilder.startRound()
        expect(onRoundStart).toHaveBeenCalledWith(connectionBuilder.mapRoundSettings)
      })
    })
    describe("roundEnd", () => {
      it("should give me the round info", () => {
        connectionBuilder.endRound()
        expect(onRoundEnd).toHaveBeenCalledWith(connectionBuilder.mapRoundResult)
      })
    })
    describe("gameEnd", () => {
      it("should give me the round info", () => {
        connectionBuilder.endGame()
        expect(onGameEnd).toHaveBeenCalledWith(connectionBuilder.mapGameEndResult)
      })
    })
    describe("gameExit", () => {
      it("should give me the round info", () => {
        connectionBuilder.exitGame()
        expect(onGameExit).toBeCalled()
      })
    })

  })
});
