import { z } from "zod";
import { MapGameEndResult, MapRoundResult, MapRoundSettings } from "../index";
export declare class MockConnectionBuilder {
    constructor();
    registeredHandlers: {
        [key: string]: (data?: unknown) => void;
    };
    connection: {
        state: string;
        start: import("vitest/dist/index-4a906fa4").q<any[], any>;
        stop: import("vitest/dist/index-4a906fa4").q<[], void>;
        on: import("vitest/dist/index-4a906fa4").q<[method: string, func: (data: unknown) => void], void>;
        onclose: (e: Error) => void;
        onreconnecting: (e: Error) => void;
        invoke: import("vitest/dist/index-4a906fa4").q<[method: string, args: unknown], void | {
            mapIdentifier?: string | undefined;
            botname?: string | null | undefined;
            streamer?: string | null | undefined;
            twitchChannelName?: string | null | undefined;
            gameMode?: string | null | undefined;
            installedFlagPacks: string;
            isUSStreak: boolean;
            temporaryGuesses: boolean;
            showFlags: boolean;
            showBorders: boolean;
            showStreamOverlay: boolean;
        }>;
    };
    withUrl(_url: string, _: any): {
        build: () => {
            state: string;
            start: import("vitest/dist/index-4a906fa4").q<any[], any>;
            stop: import("vitest/dist/index-4a906fa4").q<[], void>;
            on: import("vitest/dist/index-4a906fa4").q<[method: string, func: (data: unknown) => void], void>;
            onclose: (e: Error) => void;
            onreconnecting: (e: Error) => void;
            invoke: import("vitest/dist/index-4a906fa4").q<[method: string, args: unknown], void | {
                mapIdentifier?: string | undefined;
                botname?: string | null | undefined;
                streamer?: string | null | undefined;
                twitchChannelName?: string | null | undefined;
                gameMode?: string | null | undefined;
                installedFlagPacks: string;
                isUSStreak: boolean;
                temporaryGuesses: boolean;
                showFlags: boolean;
                showBorders: boolean;
                showStreamOverlay: boolean;
            }>;
        };
    };
    startGame: () => void;
    sendMapOptions: () => void;
    startRound: () => void;
    endRound: () => void;
    endGame: () => void;
    exitGame: () => void;
    mapOptions: {
        mapIdentifier?: string | undefined;
        botname?: string | null | undefined;
        streamer?: string | null | undefined;
        twitchChannelName?: string | null | undefined;
        gameMode?: string | null | undefined;
        installedFlagPacks: string;
        isUSStreak: boolean;
        temporaryGuesses: boolean;
        showFlags: boolean;
        showBorders: boolean;
        showStreamOverlay: boolean;
    };
    mapGameSettings: {
        gameMode: string;
        mapID: number;
        mapName: string;
        forbidMoving: boolean;
        forbidRotating: boolean;
        forbidZooming: boolean;
        roundCount: number;
        gameType: string;
        gameState: string;
        isStreak: boolean;
        isInfinite: boolean;
        timeLimit: number;
        streakType: string;
    };
    mapRoundResult: z.infer<typeof MapRoundResult>;
    mapGameEndResult: z.infer<typeof MapGameEndResult>;
    mapRoundSettings: z.infer<typeof MapRoundSettings>;
}
