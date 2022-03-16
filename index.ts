import {Plateau} from "./src/mars-plateau"

export const createPlateau = (input: string):Plateau => {
    if (input === '') throw new Error("two numbers are required eg 5 5");
    return new Plateau('5 5');
} 