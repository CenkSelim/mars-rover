import { Plateau } from "./src/mars-plateau"
import { Rover } from "./src/mars-rover";
import { clear, print, askQuestion } from './console';
import { readFileSync, existsSync } from 'fs';

const COMMANDS_FILE = './commands1.txt';

export function startHere(message: string = ''): void {
	clear(false);
	print('---------------------------------');
	print('| Welcome to Mars rover project |');
	print('---------------------------------');
    if (message !== '') {        
        print(`|****** ${message} *******|`); 
    }
	askQuestion(`Is ${COMMANDS_FILE} ready to be processed? `, processCommands);
}
    
function processCommands(answer: string) {

    if (answer.toLowerCase()==="n") {
        process.exit();
    }

    try {
        const data = readFileSync(COMMANDS_FILE, 'utf8')
        console.log(data)
    } catch (err) {
        if (err instanceof Error) {
            return startHere(err.message)
        }
    }
} 

startHere();