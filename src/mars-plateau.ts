import { PLATEAU_MINMAX_X, PLATEAU_MIN_X, PLATEAU_MINMAX_Y, PLATEAU_MIN_Y } from "./plateau_min_max";

export class Plateau {
        x: number;
        y: number;
        constructor(input: string) {
            const size = input.split(' ').map(Number);
            // defaulting to max value if high or negative numbers
            this.x = (size[0] >= PLATEAU_MINMAX_X) && (size[0] > PLATEAU_MIN_X) ? size[0] : PLATEAU_MINMAX_X;
            this.y = (size[1] >= PLATEAU_MINMAX_Y) && (size[1] > PLATEAU_MIN_Y) ? size[1] : PLATEAU_MINMAX_Y;   
        }
}