import { validatePlateauCommand, isRoverInBounds, validateRoverMovement } from "../src/validate-commands";
import {ERROR_MESSAGE_PLATEAU, ERROR_MESSAGE_ROVER, ERROR_MESSAGE_MOVEMENT} from "../src/error-messages"

// Validity of plateau creation and rover position tests in plateau and rover test files
// 1. Test invalid input for the plateau size x by y
// 2. Test invalid input for the rover initial location x any y and direction facing
// 3. Test invalid movement commands for rover

describe('Input needs to be two numbers seperated by a space character', () => {
    test.each`
        input	
        ${""}	
        ${"S"}	
        ${"5"}
        ${"S 5"}
        ${"5 S"}
        ${"1 2 E"}	
    `('validatePlateauCommand($input)', ({input}) => {
        expect(() => validatePlateauCommand(input)).toThrow(ERROR_MESSAGE_PLATEAU);
    });          
});

// 2. Test the input for the rover initial location x any y
describe('Input needs to be two numbers and a compass point ie N or E or W or S', () => {
    test.each`
        input	
        ${""}
        ${"S"}	
        ${"5"}
        ${"S 5"}
        ${"5 S"}
        ${"1 2 X"}	
    `('isRoverInBounds($input)', ({input}) => {
        expect(() => isRoverInBounds(input)).toThrow(ERROR_MESSAGE_ROVER);
    });          
});

// 3. Test invalid movement commands for rover
describe('Input needs to be a string of characters made up of M,L and R only', () => {
    test.each`
        input	
        ${""}
        ${" MMMM"}	
        ${"5LLL"}
        ${"SR5"}
        ${"$$$$$$$"}
        ${"MMMMMMD"}
        ${"LLLLLLSRR"}
        ${"LMR "}
    `('checkRoverMovement($input)', ({input}) => {
        expect(() => validateRoverMovement(input)).toThrow(ERROR_MESSAGE_MOVEMENT);
    });          
});