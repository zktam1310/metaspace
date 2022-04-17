import { atom } from "recoil";

// Pause Menu Recoil State
export const pauseAtom = atom({
    key: "pause",
    default: null
})

export const physicDebuggerAtom = atom({
    key: "physicDebugger",
    default: false
})

