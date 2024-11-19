import { customAlphabet } from "nanoid";

const getId = customAlphabet('1234567890abcdef', 10);

export const hoistingId = () => {
    return {
        opId: getId()
    }
}