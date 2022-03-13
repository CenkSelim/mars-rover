import * as MARS from "../src/mars-plateau";
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
            let plateau: MARS.Plateau  = new MARS.Plateau(input);
            expect(plateau).toEqual(expected);
        });
});

// 2. test starting position for rover
// 3. test rover orientation
describe('Set up rover starting position', () => {
        test.each`
            input | expected
            ${"0 0 N"}	| ${{"x": 0, "y": 0, "facing": "N"}}
            ${"3 1 E"}	| ${{"x": 3, "y": 1, "facing": "E"}}
            ${"1 3 W"}	| ${{"x": 1, "y": 3, "facing": "W"}}
            ${"3 3 S"}	| ${{"x": 3, "y": 3, "facing": "S"}}
            ${"-1 -5 N"}	| ${{"x": 0, "y": 0, "facing": "N"}}
        `('Rover($input) = $expected', ({ input, expected}) => {
            let rover: MARS.Rover  = new MARS.Rover(input);           
            expect(rover).toEqual(expected);
        });
});

// 4. test rover movement
describe('rover movement', () => {
        test.each`
            startingPosition | input | expected
            ${"1 2 N"} | ${"LMLMLMLMM"}	| ${{"x": 1, "y": 3, "facing": "N"}}
            ${"3 3 E"} | ${"MMRMMRMRRM"}	| ${{"x": 5, "y": 1, "facing": "E"}}
        `('Rover.move($input) = $expected', ({startingPosition, input, expected}) => {
            let rover: MARS.Rover  = new MARS.Rover(startingPosition);
            rover.move(input);
            expect(rover).toEqual(expected);
            console.log(`${rover.x} ${rover.y} ${rover.facing}`)
        });
});