import { createPlateau } from "../index"
// 1. Test the input for the plateau size x by y
describe('Input needs to be two numbers seperated by a space character', () => {
    
    test("it throws an error if not passed a string of two numbers", () => {
        expect(() => createPlateau("")).toThrow("two numbers are required eg 5 5");
    });       
});