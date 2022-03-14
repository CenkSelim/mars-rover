import { PLATEAU_MIN_X, PLATEAU_MIN_y } from "./plateau_min_max";
import { Plateau } from "./mars-plateau";

export class Rover {
    x: number;
    y: number;
    facing: string;
    plateau: Plateau;

    constructor(plateau: Plateau) {
        this.plateau = plateau;
    }
    setStartinPosition(input: string) {
        const startPosition: string[] = input.split(' ');
        const x: number = Number(startPosition[0]);
        const y: number = Number(startPosition[1]);
        // Defaulting to min position of plateau if high or negative values added  
        this.x = (x <= this.plateau.x) && (x >= PLATEAU_MIN_X) ? x : PLATEAU_MIN_X;
        this.y = (y <= this.plateau.y) && (y >= PLATEAU_MIN_y) ? y : PLATEAU_MIN_y;
        this.facing = startPosition[2];
    }

    move(instructions: string): string {
        const instructionsList: string[] = instructions.split('');
        instructionsList.forEach(instruction => {
            switch (instruction) {
                case "L": // 90 degrees left
                    this.moveLeft();
                    break;
                case "R": // 90 degrees right
                    this.moveRight();
                    break;
                case "M": // move forward in direction facing
                    this.moveForward();
                    break;
            }
        });
        return (`${this.x} ${this.y} ${this.facing}`);
    }
    moveLeft() {
        switch (this.facing) {
            case "N":
                this.facing = "W";
                break;
            case "E":
                this.facing = "N";
                break;
            case "W":
                this.facing = "S";
                break;
            case "S":
                this.facing = "E";
                break;
        }
    }
    moveRight() {
        switch (this.facing) {
            case "N":
                this.facing = "E";
                break;
            case "E":
                this.facing = "S";
                break;
            case "W":
                this.facing = "N";
                break;
            case "S":
                this.facing = "W";
                break;
        }
    }
    moveForward() {
        switch (this.facing) {
            case "N":
                this.y += 1;
                break;
            case "E":
                this.x += 1;
                break;
            case "W":
                this.x -= 1;
                break;
            case "S":
                this.y -= 1;
                break;
        }
    }
}
