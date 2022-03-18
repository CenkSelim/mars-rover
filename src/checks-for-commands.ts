import { ERROR_MESSAGE_PLATEAU, ERROR_MESSAGE_ROVER, ERROR_MESSAGE_MOVEMENT } from "./error-messages";

const DIRECTION_FACING = ['N', 'E', 'W', 'S']; 
const MOVING_COMMANDS = ['L', 'F', 'M']; 


export const checkPlateauCommand = (input: string): true => {
    checkXandY(input, 2, ERROR_MESSAGE_PLATEAU);
    return true;
};

export const checkRoverStartingPos = (input: string): boolean => {
    checkXandY(input, 3, ERROR_MESSAGE_ROVER);
    const facing = input.split(' ').map((x) => x)[2];
    if (DIRECTION_FACING.indexOf(facing) === -1)
        throw new Error(ERROR_MESSAGE_ROVER);
    return true;
};
const checkXandY = (input: string, noOfVariables: number, error_message: string): boolean => {
    if (input === '')
        throw new Error(error_message);
    const size = input.split(' ').map(Number);
    if (size.length !== noOfVariables)
        throw new Error(error_message);
    if ((Number.isNaN(size[0])) || (Number.isNaN(size[1])))
        throw new Error(error_message);
    return true;
};

export const checkRoverMovement = (input: string): boolean => {
    if (input === '')
        throw new Error(ERROR_MESSAGE_MOVEMENT);
    if (input.match('[^LMR]'))
        throw new Error(ERROR_MESSAGE_MOVEMENT);
    return true;
};
