import * as MARS from "../src/mars-plateau";
// 1. test Plateau creation
describe('Set up plateau', () => {
        test.each`
            x | y | expected
            ${7} | ${9}	| ${{"x": 5, "y": 5}}
            ${-2} | ${2}	| ${{"x": 5, "y": 2}}
            ${2} | ${-2}	| ${{"x": 2, "y": 5}}
            ${100} | ${100}	| ${{"x": 5, "y": 5}}
            ${3} | ${3}	| ${{"x": 3, "y": 3}}
        `('Plateau($x,$y) = $expected', ({ x,y, expected}) => {
            let plateau: MARS.Plateau  = new MARS.Plateau(x,y);
            expect(plateau).toEqual(expected);
        });
});

