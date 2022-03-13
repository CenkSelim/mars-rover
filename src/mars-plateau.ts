const  PLATEAU_MAX_X:number  = 5;
const  PLATEAU_MAX_y:number  = 5;
const  PLATEAU_MIN_X:number  = 0;
const  PLATEAU_MIN_y:number  = 0;

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

export class Rover {
        x: number;
        y: number;
        facing: string;
    constructor(input: string) {
        const startPosition:string[] = input.split(' ');
        const x:number = Number(startPosition[0]);
        const y:number = Number(startPosition[1]);
        // Defaulting to min position of plateau if high or negative values added  
        this.x = ( x <= PLATEAU_MAX_X) && (x >= PLATEAU_MIN_X) ? x : PLATEAU_MIN_X;
        this.y = ( y <= PLATEAU_MAX_y) && (y >= PLATEAU_MIN_y) ? y : PLATEAU_MIN_y;   
        this.facing = startPosition[2];
    }
}
