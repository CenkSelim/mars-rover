import { PLATEAU_MINMAX_X, PLATEAU_MIN_X, PLATEAU_MINMAX_Y, PLATEAU_MIN_Y } from "./plateau-min-max";

interface Surface {
        x: number;
        y: number;
        addObstacle(obstaclePosition: string): void 
    }
export class Plateau implements Surface{
    x: number;
    y: number;
    #obstacles: string[]  = [];
    constructor(input: string) {
        const size = input.split(' ').map(Number);
        // defaulting to min-max value if low/negative numbers
        this.x = (size[0] >= PLATEAU_MINMAX_X) && (size[0] > PLATEAU_MIN_X) ? size[0] : PLATEAU_MINMAX_X;
        this.y = (size[1] >= PLATEAU_MINMAX_Y) && (size[1] > PLATEAU_MIN_Y) ? size[1] : PLATEAU_MINMAX_Y;          
        this.populateObstaclesListWithBoundary();       
    }

    private populateObstaclesListWithBoundary() {
        for (let index = -1; index <= this.x + 1; index++) {
            this.addObstacle(`${PLATEAU_MIN_X - 1} ${index}`);
            this.addObstacle(`${index} ${PLATEAU_MIN_Y - 1}`);
            this.addObstacle(`${this.x + 1} ${index}`);
            this.addObstacle(`${index} ${this.x + 1}`);
        }
    }

    addObstacle(obstaclePosition: string): void{
        if (this.#obstacles.indexOf(obstaclePosition)=== -1) this.#obstacles.push(obstaclePosition);       
    }

    getObstacleList(): string[]{
     return this.#obstacles;
    }
    
    isThereAnObstacleHere(obstaclePosition: string): boolean{
        return this.#obstacles.some(pos => pos === obstaclePosition)
    }
}