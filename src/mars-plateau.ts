import { PLATEAU_MINMAX_X, PLATEAU_MIN_X, PLATEAU_MINMAX_Y, PLATEAU_MIN_Y } from "./plateau_min_max";

export class Plateau {
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

    addObstacle(obstaclePosition: string){
        if (this.#obstacles.indexOf(obstaclePosition)=== -1) this.#obstacles.push(obstaclePosition);       
    }

    removeObstacle(obstaclePosition: string){
        this.#obstacles = this.#obstacles.filter(pos => pos !== obstaclePosition);
    }

    getObstacleList() {
     return this.#obstacles;
    }
    isThereAnObstacleHere(obstaclePosition: string): boolean{
        if (!this.#obstacles || !this.#obstacles.length) {
            return false;
        }
        return this.#obstacles.some(pos => pos === obstaclePosition)
    }
}