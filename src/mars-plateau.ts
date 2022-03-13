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
    move(instructions: string){
        const instructionsList:string[] = instructions.split('');
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
    }
    moveLeft(){
        switch (this.facing) {
            case "N":
                this.facing = "W"
                break;       
            case "E":
                this.facing = "N"                
                break;
            case "W":
                this.facing = "S"                
                break;       
            case "S":
                this.facing = "E"
                break;       
        }
    }
    moveRight(){
        switch (this.facing) {
            case "N":
                this.facing = "E"
                break;       
            case "E":
                this.facing = "S"                
                break;
            case "W":
                this.facing = "N"                
                break;       
            case "S":
                this.facing = "W"
                break;       
        }
    }
    moveForward(){
        switch (this.facing) {
            case "N":
                this.y +=1;
                break;       
            case "E":
                this.x +=1;               
                break;
            case "W":
                this.x -=1;               
                break;       
            case "S":
                this.y -=1;
                break;       
        }
    }
}
