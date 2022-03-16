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
describe('Check obstacles set up correctly after setup', () => {
        test.each`
            input | expected
            ${"6 6"}	| ${["-1 -1","-1 0","-1 1","-1 2","-1 3","-1 4","-1 5","-1 6","-1 7","0 -1","0 7","1 -1","1 7","2 -1","2 7","3 -1","3 7","4 -1","4 7","5 -1","5 7","6 -1","6 7","7 -1","7 0","7 1","7 2","7 3","7 4","7 5","7 6","7 7"]} 
            ${"-2 2"}	| ${["-1 -1","-1 0","-1 1","-1 2","-1 3","-1 4","-1 5","0 5","1 5","2 5","3 5","4 5","0 -1","1 -1","2 -1","3 -1","4 -1","5 -1","5 0","5 1","5 2","5 3","5 4","5 5"]}
            ${"2 -2"}	| ${["-1 -1","-1 0","-1 1","-1 2","-1 3","-1 4","-1 5","0 5","1 5","2 5","3 5","4 5","0 -1","1 -1","2 -1","3 -1","4 -1","5 -1","5 0","5 1","5 2","5 3","5 4","5 5"]}
            ${"5 5"}	| ${["-1 -1","-1 0","-1 1","-1 2","-1 3","-1 4","-1 5","-1 6","0 -1","0 6","1 -1","1 6","2 -1","2 6","3 -1","3 6","4 -1","4 6","5 -1","5 6","6 -1","6 0","6 1","6 2","6 3","6 4","6 5","6 6"]}
            ${"3 3"}	| ${["-1 -1","-1 0","-1 1","-1 2","-1 3","-1 4","-1 5","0 5","1 5","2 5","3 5","4 5","0 -1","1 -1","2 -1","3 -1","4 -1","5 -1","5 0","5 1","5 2","5 3","5 4","5 5"]}
        `('Plateau($input) = $expected', ({ input, expected}) => {
            let plateau: Plateau  = new Plateau(input);
            expect(plateau.getObstacleList().sort()).toEqual(expect.arrayContaining(expected));
        });
});
