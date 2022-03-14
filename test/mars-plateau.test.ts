import { Plateau } from "../src/mars-plateau";
import { Rover } from "../src/mars-rover";
// 1. test Plateau creation
describe('Set up plateau', () => {
        test.each`
            input | expected
            ${"7 9"}	| ${{"x": 5, "y": 5}}
            ${"-2 2"}	| ${{"x": 5, "y": 2}}
            ${"2 -2"}	| ${{"x": 2, "y": 5}}
            ${"100 100"}	| ${{"x": 5, "y": 5}}
            ${"3 3"}	| ${{"x": 3, "y": 3}}
        `('Plateau($input) = $expected', ({ input, expected}) => {
            let plateau: Plateau  = new Plateau(input);
            expect(plateau).toEqual(expected);
        });
});

// 2. test starting position for rover
// 3. test rover orientation
describe('Set up rover starting position', () => {
        const plateau: Plateau  = new Plateau("5 5");
        test.each`
            startingPosition | expected
            ${"0 0 N"}	| ${{"x": 0, "y": 0, "facing": "N"}}
            ${"3 1 E"}	| ${{"x": 3, "y": 1, "facing": "E"}}
            ${"1 3 W"}	| ${{"x": 1, "y": 3, "facing": "W"}}
            ${"3 3 S"}	| ${{"x": 3, "y": 3, "facing": "S"}}
            ${"-1 -5 N"}	| ${{"x": 0, "y": 0, "facing": "N"}}
        `('Rover($startingPosition) = $expected', ({ startingPosition, expected}) => {
            let rover: Rover  = new Rover(plateau);
            rover.setStartinPosition(startingPosition);             
            expect({x:rover.x,y:rover.y,facing:rover.facing}).toEqual(expected);
        });
});

// 4. test rover movement
describe('rover movement', () => {
        const plateau: Plateau  = new Plateau("5 5");
        test.each`
            startingPosition | input | expected
            ${"1 2 N"} | ${"LMLMLMLMM"}	| ${"1 3 N"}
            ${"3 3 E"} | ${"MMRMMRMRRM"} | ${"5 1 E"}
        `('Rover.move($input) = $expected', ({startingPosition, input, expected}) => {
            let rover: Rover  = new Rover(plateau);
            rover.setStartinPosition(startingPosition);
            expect(rover.move(input)).toEqual(expected);
        });
});