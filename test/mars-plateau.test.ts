import * as MARS from "../src/mars-plateau";
// 1. test Plateau creation
describe('Set up plateau', () => {
        test.each`
            x | y | expected
            ${7} | ${9}	| ${{"x": 7, "y": 9}}
            ${2} | ${2}	| ${{"x": 2, "y": 2}}
            ${2} | ${2}	| ${{"x": 2, "y": 2}}
            ${100} | ${100}	| ${{"x": 100, "y": 100}}
        `('Plateau($x,$y) = $expected', ({ x,y, expected}) => {
            let plateau: MARS.Plateau  = new MARS.Plateau(x,y);
            expect(plateau).toEqual(expected);
        });
});
