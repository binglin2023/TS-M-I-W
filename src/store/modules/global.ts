import { defineStore } from "pinia";

export interface GlobalState {
    MAP_TOOLS: { right: number; top: number; yx: boolean; dx: boolean; tl: boolean };
    MAP?: any;
}

export const GlobalModule = defineStore({
    id: "app-global",
    state: (): GlobalState => ({
        MAP_TOOLS: { right: 0, top: 0, yx: false, dx: false, tl: false },
        MAP: null,
    })
});