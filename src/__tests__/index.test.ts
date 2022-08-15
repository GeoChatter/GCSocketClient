import { vi,describe, expect, it } from "vitest";
import  GCSignalRClient from "../index";

// probably a bad mock i dont know how it works :(
vi.mock("@microsoft/signalr", () => {
   console.log('mock called')
   const HubConnectionBuilder= vi.fn()
   const connection = {
               start : vi.fn(),
               stop : vi.fn(()=> {connection?.onclose?.()
                            console.log("connection closed")
                }),
               on : vi.fn(),
               onclose:  ()=> {},
               invoke : vi.fn((method:string, data:any) => {
                 if (method === "MapLogin") {
                   // FIXME: RETURN REAL DATA HERE SOME DAY
                   return  {borders: true}
                 }

               })}
   HubConnectionBuilder.prototype.withUrl = vi.fn(() => {
     return {build: () => {return connection }}
   })
   return {
     HubConnectionBuilder
   }
})

describe("init", () => {
  describe("starting GCSignalRClient", () => {
    const onStreamerSettings = vi.fn()
    const client = new GCSignalRClient("https://google.com/","code", {
      onStreamerSettings
    })

    vi.useFakeTimers()
      it("map login should have been called with the correct code", () => {
        /* expect(client.connection.invoke).to */
          expect(client.connection.invoke).toBeCalledWith("MapLogin", "code")
         expect(client.connection.start).toBeCalledTimes(1)
      })
      it("onStreamerSettings should have been called with res from MapLogin", () => {
        expect(onStreamerSettings).toBeCalledWith("test")
      })
      describe("set streamer code", ()=> {
        client.streamerCode = "newCode"
        it("should call the maplogin with the new code", () => {
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
