import { ERROR_MESSAGE_PLATEAU, ERROR_MESSAGE_ROVER } from "./error_messages";
import { Plateau } from "./src/mars-plateau"
import { Rover } from "./src/mars-rover";

// This the node console app starting point need a plateau and two rovers
// 
//
const DIRECTION_FACING = ['N', 'E', 'W', 'S']; 
const MOVING_COMMANDS = ['L', 'F', 'M']; 

export const createPlateau = (input: string):Plateau => {
    checkXandY(input,2,ERROR_MESSAGE_PLATEAU);  
    return new Plateau(input);
} 

export const createRover = (input: string, plateau: Plateau):Rover => {
    checkXandY(input,3,ERROR_MESSAGE_ROVER);   
    const facing = input.split(' ').map((x)=>x)[2];
    if (DIRECTION_FACING.indexOf(facing) === -1) throw new Error(ERROR_MESSAGE_ROVER);
    return new Rover(plateau);
} 

function checkXandY(input: string, noOfVariables: number, error_message: string) {
    if (input === '')
        throw new Error(error_message);
    const size = input.split(' ').map(Number);
    if (size.length !== noOfVariables)
        throw new Error(error_message);
    if ((Number.isNaN(size[0])) || (Number.isNaN(size[1])))
        throw new Error(error_message);
}

