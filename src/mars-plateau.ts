import { PLATEAU_MAX_X, PLATEAU_MIN_X, PLATEAU_MAX_y, PLATEAU_MIN_y } from "./plateau_min_max";

export class Plateau {
        x: number;
        y: number;
        constructor(input: string) {
            const size = input.split(' ').map(Number);
            // defaulting to max value if high or negative numbers
            this.x = (size[0] <= PLATEAU_MAX_X) && (size[0] > PLATEAU_MIN_X) ? size[0] : PLATEAU_MAX_X;
            this.y = (size[1] <= PLATEAU_MAX_y) && (size[1] > PLATEAU_MIN_y) ? size[1] : PLATEAU_MAX_y;   
        }
}