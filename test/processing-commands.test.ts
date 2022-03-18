
import { plateauCommandReport } from "../src/commands-reports";

// 1. Check plateau command and report 
// 2. Check rover position command and report
// 3. Check rover movement and report

describe('Check plateau command and report', () => {
    test.each`
        input	| expected
        ${"1 S"}	| ${"1 S X"}
        ${"1 1"}	| ${"1 1 √"}
        ${"S 1"}	| ${"S 1 X"}
        ${"100 100"}	| ${"100 100 √"}
        ${""}	| ${" X"}
    `('plateauCommandReport($input)', ({ input, expected }) => {
        expect(plateauCommandReport(input)).toEqual(expected);
    });
    
});