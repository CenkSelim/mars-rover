import { createPlateau, createRover } from "../index"
import { Plateau } from "../src/mars-plateau"
import {ERROR_MESSAGE_PLATEAU, ERROR_MESSAGE_ROVER} from "../error_messages"
// 1. Test the input for the plateau size x by y
describe('Input needs to be two numbers seperated by a space character', () => {
    test.each`
        input	
        ${""}	
        ${"S"}	
        ${"5"}
        ${"S 5"}
        ${"5 S"}
        ${"1 2 E"}	
    `('createPlateau($input)', ({input}) => {
        expect(() => createPlateau(input)).toThrow(ERROR_MESSAGE_PLATEAU);
    });          
});

describe('Input needs to be two numbers and a compass point ie N or E or W or S', () => {
    const plateau: Plateau  = new Plateau("5 5");
    test.each`
        input	
        ${""}
        ${"S"}	
        ${"5"}
        ${"S 5"}
        ${"5 S"}
        ${"1 2 X"}	
    `('createRover($input)', ({input}) => {
        expect(() => createRover(input, plateau)).toThrow(ERROR_MESSAGE_ROVER);
    });          
});