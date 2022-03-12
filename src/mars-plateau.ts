const  MAX_X:number  = 5;
const  MAX_y:number  = 5;

export class Plateau {
        x: number;
        y: number;
        constructor(x: number, y: number) {
            this.x = (x <= MAX_X) && (x > 0) ? x : MAX_X;
            this.y = (y <= MAX_y) && (y > 0) ? y : MAX_y;   
        }
}