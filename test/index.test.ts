import { checkPlateauCommand, checkRoverStartingPos } from "../index"
import { Plateau } from "../src/mars-plateau"
import {ERROR_MESSAGE_PLATEAU, ERROR_MESSAGE_ROVER, ERROR_MESSAGE_MOVEMENT} from "../error_messages"
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
    `('checkPlateauCommand($input)', ({input}) => {
        expect(() => checkPlateauCommand(input)).toThrow(ERROR_MESSAGE_PLATEAU);
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
    `('checkRoverStartingPos($input)', ({input}) => {
        expect(() => checkRoverStartingPos(input)).toThrow(ERROR_MESSAGE_ROVER);
    });          
});

// // 3. Test invalid movement commands for rover
// describe('Input needs to be a string of characters made up of M,L and R only', () => {
//     test.each`
//         input	
//         ${""}
//         ${" MMMM"}	
//         ${"5LLL"}
//         ${"SR5"}
//         ${"$$$$$$$"}
//         ${"MMMMMMD"}
//         ${"LLLLLLSRR"}
//     `('checkRoverMovement($input)', ({input}) => {
//         expect(() => checkRoverMovement(input)).toThrow(ERROR_MESSAGE_MOVEMENT);
//     });          
// });