const  MAX_X:number  = 5;
const  MAX_y:number  = 5;
const  MIN_X:number  = 0;
const  MIN_y:number  = 0;

export class Plateau {
        x: number;
        y: number;
        constructor(x: number, y: number) {
            this.x = (x <= MAX_X) && (x > MIN_X) ? x : MAX_X;
            this.y = (y <= MAX_y) && (y > MIN_y) ? y : MAX_y;   
        }
}
