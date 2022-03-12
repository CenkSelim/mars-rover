import * as MARS from "../src/mars-plateau";
// 1. test Plateau creation
describe('Set up plateau', () => {
        test.each`
            x | y | expexted
            ${7} | ${9}	| ${{"x": 7, "y": 9}}
            ${2} | ${2}	| ${{"x": 2, "y": 2}}
            ${2} | ${2}	| ${{"x": 2, "y": 2}}
            ${100} | ${100}	| ${{"x": 100, "y": 100}}
        `('Plateau($x,$y) = $upper-right-x, upper-right-y', ({ x,y, expexted}) => {
            let plateau: MARS.Plateau  = new MARS.Plateau(x,y);
            expect(plateau).toEqual(expexted);
        });
});
