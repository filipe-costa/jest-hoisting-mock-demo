import { customAlphabet } from "nanoid";
import type { HoistingId } from "./types.js";

const getId = customAlphabet('1234567890abcdef', 10);

export const hoistingId = (): HoistingId => {
    return {
        opId: getId()
    }
}