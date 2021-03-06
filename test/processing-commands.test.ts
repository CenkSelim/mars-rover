
import { plateauCommandReport, 
    roverStartingPosCommandReport, 
    roverMovementCommandsReport } from "../src/commands-reports";

// 1. Check plateau command and report 
// 2. Check rover position command and report
// 3. Check rover movement and report

describe('Check plateau command and report', () => {
    test.each`
        input	| expected
        ${"1 S"}	| ${"× 1 S"}
        ${"1 1"}	| ${"√ 1 1"}
        ${"S 1"}	| ${"× S 1"}
        ${"100 100"}	| ${"√ 100 100"}
        ${""}	| ${"× "}
    `('plateauCommandReport($input)', ({ input, expected }) => {
        expect(plateauCommandReport(input)).toEqual(expected);
    });   
});

// 2. Check rover position command and report
describe('Check rover position command and report', () => {
    test.each`
        input	| expected
        ${""}	| ${"× "}
        ${"1"}	| ${"× 1"}
        ${" 1"}	| ${"×  1"}
        ${"1 1"}	| ${"× 1 1"}
        ${"1 1 E"}	| ${"√ 1 1 E"}
        ${"99 99 W"}	| ${"√ 99 99 W"}
    `('roverStartingPosCommandReport($input) ', ({ input, expected }) => {
        expect(roverStartingPosCommandReport(input)).toEqual(expected);
    });    
});

// 3. Check rover movement and report
describe('Check rover movement and report', () => {
    test.each`
        input	| expected
        ${""}	| ${"× "}
        ${"S"}	| ${"× S"}
        ${"SLMMMM"}	| ${"× SLMMMM"}
        ${"LMMMM"}	| ${"√ LMMMM"}
        ${"LMMMMRMLLLMR"}	| ${"√ LMMMMRMLLLMR"}    
    `('roverMovementCommandReport($input) ', ({ input, expected }) => {
        expect(roverMovementCommandsReport(input)).toEqual(expected);
    });    
});
