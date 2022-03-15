import { Plateau } from "../src/mars-plateau";
import { Rover } from "../src/mars-rover";
// 1. test Plateau creation
// default to min 4 X 4 plateau to allow rovers to move about
describe('Set up plateau', () => {
        test.each`
            input | expectedX | expectedY
            ${"7 9"}	| ${7}  |${9}
            ${"-2 2"}	| ${4}  |${4}
            ${"2 -2"}	| ${4}  |${4}
            ${"100 100"}	| ${100}  |${100}
            ${"3 3"}	| ${4}  |${4}
        `('Plateau($input) = $expectedX, $expectedY', ({ input, expectedX, expectedY}) => {
            let plateau: Plateau  = new Plateau(input);
            expect(plateau.x).toBe(expectedX);
            expect(plateau.y).toBe(expectedY);
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
            expect(rover).toEqual(expected);
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
// 5. test to make sure rover does not go beyond edge of plateau ❌
// 6/7 Tests to make sure it does not collide with other 
//     objects such as the other rover 🏎️ or even 👽
// e.g 5 by 5 plateau or some other shape 🌝 === safe area to move
// ❌❌❌❌❌❌❌   ❌❌❌❌❌❌❌
// ❌🌝🌝🌝🌝🌝❌   ❌🌝🌝🌝🌝🌝❌
// ❌🌝🌝🌝🌝🌝❌   ❌🌝👽🌝🌝🌝❌
// ❌🌝🌝🌝🌝🌝❌   ❌🌝🌝🏎️🌝🌝❌
// ❌🌝🌝🌝🌝🌝❌   ❌🌝🌝🌝👾🌝❌
// ❌🌝🌝🌝🌝🌝❌   ❌🌝🌝🌝🌝🌝❌
// ❌❌❌❌❌❌❌   ❌❌❌❌❌❌❌
describe.only('rover not to go beyond plateau edges', () => {
        const plateau: Plateau  = new Plateau("5 5");
        test.each`
            startingPosition | input | expected
            ${"5 5 N"} | ${"MMMLM"}	| ${"5 5 N"}
            ${"3 3 E"} | ${"MMRMMRMRRMRMM"} | ${"5 0 S"}
            ${"0 0 W"} | ${"MMRMMRMRRMRMM"} | ${"0 0 W"}
        `('Rover.move($input) = $expected', ({startingPosition, input, expected}) => {
            let rover: Rover  = new Rover(plateau);
            rover.setStartinPosition(startingPosition);
            expect(rover.move(input)).toEqual(expected);
        });
});
// 6. Test to make sure it does not collide with the other rover 🏎️  
describe('rovers not to collide', () => {
        const plateau: Plateau  = new Plateau("5 5");
        test.each`
            startingPosition | input | expected
            ${"2 3 E"} | ${"MMMLM"}	| ${"2 3 E"}
        `('Rover.move($input) = $expected', ({startingPosition, input, expected}) => {
            let rover1: Rover  = new Rover(plateau);
            rover1.setStartinPosition("2 4 N");
            rover1.move("LMLMLMLM"); // back to original
            let rover2: Rover  = new Rover(plateau);
            rover2.setStartinPosition(startingPosition);
            expect(rover2.move(input)).toEqual(expected);
        });
});