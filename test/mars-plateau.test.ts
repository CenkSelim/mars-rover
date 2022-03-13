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

