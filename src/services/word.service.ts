import { generate } from "random-words";

export function getWord(min: number, max: number): string {
    return generate({ minLength: min, maxLength: max})[0];
}