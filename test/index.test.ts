import { createPlateau } from "../index"
// 1. Test the input for the plateau size x by y
describe('Input needs to be two numbers seperated by a space character', () => {
    test.each`
        input	
        ${""}	
        ${"S"}	
        ${"5"}
        ${"S 5"}
        ${"5 S"}
    `('createPlateau($input)', ({input}) => {
        expect(() => createPlateau(input)).toThrow("two numbers are required eg 5 5");
    });          
});

describe('Input needs to be two numbers and a compass point ie N or E or W or S', () => {
    test.each`
        input	
        ${""}	
    `('createPlateau($input)', ({input}) => {
        expect(() => createRover(input)).toThrow("two numbers are required and a compass point ie N or E or W or S eg 3 2 E");
    });          
});