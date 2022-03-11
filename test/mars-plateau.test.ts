import * as MARS from "../src/mars-plateau";

describe('testing scafolding', () => {
        test.each`
            x | y | total
            ${1} | ${2}	| ${3}
        `('add($x,$y) = $total', ({ x,y,total}) => {
            expect(MARS.add(x,y)).toBe(total);
        });
});
