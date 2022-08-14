import { describe, expect, it } from "vitest";
import  GCSignalRClient from "../index";

describe("init()", () => {
  describe("given url", () => {
    // FIXME: SignalR should be mocked for testing i guess or we test with a real client but its very hard to test everything that way 
    describe("when called", () => {
      it("returns the url", () => {
        /* expect(init(url)).toEqual(url); */
      });
    });
  });
});
