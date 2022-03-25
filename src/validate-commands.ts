import { ERROR_MESSAGE_PLATEAU, ERROR_MESSAGE_ROVER, ERROR_MESSAGE_MOVEMENT } from "./error-messages";

const DIRECTION_FACING = ['N', 'E', 'W', 'S'] as const; 
export type Orientation = typeof DIRECTION_FACING[number];
const MOVING_COMMANDS = ['L', 'F', 'M'] as const;  
export type Command = typeof MOVING_COMMANDS[number];

export const validatePlateauCommand = (input: string): boolean => {
    validateXandY(input, 2, ERROR_MESSAGE_PLATEAU);
    return true;
};

export const isRoverInBounds = (input: string): boolean => {
    validateXandY(input, 3, ERROR_MESSAGE_ROVER);
    const facing = input.split(' ').map((x) => x)[2];
    if (!DIRECTION_FACING.includes(facing as Orientation))
        throw new Error(ERROR_MESSAGE_ROVER);
    return true;
};
const validateXandY = (input: string, noOfVariables: number, error_message: string): boolean => {
    if (input === '')
        throw new Error(error_message);
    const size = input.split(' ').map(Number);
    if (size.length !== noOfVariables)
        throw new Error(error_message);
    if ((Number.isNaN(size[0])) || (Number.isNaN(size[1])))
        throw new Error(error_message);
    return true;
};

export const validateRoverMovement = (input: string): boolean => {
    if (input === '')
        throw new Error(ERROR_MESSAGE_MOVEMENT);
    if (input.match('[^LMR]'))
        throw new Error(ERROR_MESSAGE_MOVEMENT);
    return true;
};
