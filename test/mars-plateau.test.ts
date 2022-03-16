import { Plateau } from "../src/mars-plateau";
import { Rover } from "../src/mars-rover";
// 1. Test Plateau creation
//    default to min 4 X 4 plateau to allow rovers to move about
// ❌❌❌❌❌❌❌   
// ❌🌝🌝🌝🌝🌝❌   
// ❌🌝🌝🌝🌝🌝❌   
// ❌🌝🌝🌝🌝🌝❌   
// ❌🌝🌝🌝🌝🌝❌   
// ❌🌝🌝🌝🌝🌝❌   
// ❌❌❌❌❌❌❌   
//
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
