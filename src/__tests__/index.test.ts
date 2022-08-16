/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { vi, describe, expect, it } from "vitest";
import { GCSocketClient } from "../index";

// probably a bad mock i dont know how it works :(
vi.mock("@microsoft/signalr", () => {
  console.log('mock called')
  const HubConnectionBuilder = vi.fn()
  const connection = {
    start: vi.fn(),
    stop: vi.fn(() => {
      connection?.onclose?.()
      console.log("connection closed")
    }),
    on: vi.fn(),
    onclose: () => { },
    invoke: vi.fn((method: string, data: any) => {
      if (method === "MapLogin") {
        // FIXME: RETURN REAL DATA HERE SOME DAY
        return {
          "showStreamOverlay": false,
          "showFlags": false,
          "showBorders": true,
          "mapIdentifier": "deras_bot",
          "streamer": "Credulus",
          "installedFlagPacks": "{\"LGBTPack\": \"https://service.geochatter.tv/flagpacks/LGBTPACK.zip\"}",
          "gameMode": "STREAK",
          "isUSStreak": false,
          "temporaryGuesses": true
        }
      }

    })
  }
  HubConnectionBuilder.prototype.withUrl = vi.fn(() => {
    return { build: () => { return connection } }
  })
  return {
    HubConnectionBuilder
  }
})

describe("init", () => {
  describe("starting GCSignalRClient", () => {
    const onStreamerSettings = vi.fn()
    const client = new GCSocketClient("https://dev.geochatter.tv/guess/geoChatterHub", "code", {
      onStreamerSettings
    })

    vi.useFakeTimers()
    it("map login should have been called with the correct code", () => {
      /* expect(client.connection.invoke).to */
      expect(client.connection.invoke).toBeCalledWith("MapLogin", "code")
      expect(client.connection.start).toBeCalledTimes(1)
    })
    it("onStreamerSettings should have been called with res from MapLogin", () => {
      expect(onStreamerSettings).toBeCalledWith({
        "showStreamOverlay": false,
        "showFlags": false,
        "showBorders": true,
        "mapIdentifier": "deras_bot",
        "streamer": "Credulus",
        "installedFlagPacks": "{\"LGBTPack\": \"https://service.geochatter.tv/flagpacks/LGBTPACK.zip\"}",
        "gameMode": "STREAK",
        "isUSStreak": false,
        "temporaryGuesses": true
      
                 })
  })
  describe("set streamer code", () => {
    client.streamerCode = "newCode"
    it("should call the map login with the new code", () => {
      expect(client.connection.invoke).toBeCalledWith("MapLogin", "newCode")
    })
  })
  describe("stopping connection", () => {
    client.stop()
    it("test reconnect", () => {
      // running timer before checking 
      vi.advanceTimersToNextTimer()
      expect(client.connection.start).toBeCalledTimes(2)
    })
  })


})
});
