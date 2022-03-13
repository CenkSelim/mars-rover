const  MAX_X:number  = 5;
const  MAX_y:number  = 5;
const  MIN_X:number  = 0;
const  MIN_y:number  = 0;

export class Plateau {
        x: number;
        y: number;
        constructor(input: string) {
            const size = input.split(' ').map(Number);
            this.x = (size[0] <= MAX_X) && (size[0] > MIN_X) ? size[0] : MAX_X;
            this.y = (size[1] <= MAX_y) && (size[1] > MIN_y) ? size[1] : MAX_y;   
        }
}
