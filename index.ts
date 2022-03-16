import {Plateau} from "./src/mars-plateau"

export const createPlateau = (input: string):Plateau => {
    if (input === '') throw new Error("two numbers are required eg 5 5");
    const size = input.split(' ').map(Number);
    if (size.length !== 2) throw new Error("two numbers are required eg 5 5");
    if ((Number.isNaN(size[0])) || (Number.isNaN(size[1]))) throw new Error("two numbers are required eg 5 5");
    return new Plateau(input);
} 