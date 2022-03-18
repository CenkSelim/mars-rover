
import { clear, print, askQuestion } from './console';
import { readFileSync, existsSync } from 'fs';
import { processingCommands } from "./src/processing-commands";

const COMMANDS_FILE : string = './commands.txt';
const NUMBER_OF_COMMAND_ALLOWED : number = 5;

export function startHere(message: string = ''): void {
	clear(false);
	print('---------------------------------');
	print('| Welcome to Mars rover project |');
	print('---------------------------------');
    if (message !== '') { 
        print(`|*************|`);        
        print(message);
        print(`|*************|`);  
    }
	askQuestion(`Is "${COMMANDS_FILE}" ready to be processed? (y or q) `, processCommands);
}
    
function processCommands(answer: string): void {

    if (answer.toLowerCase()==="q") {
        process.exit();
    }
    if (answer.toLowerCase()==="y") {
        try {
            const data = readFileSync(COMMANDS_FILE, 'utf8');
            return processingCommands(data);
        } catch (err) {
            if (err instanceof Error) {
                return startHere(err.message);
            }
        }
    }
    return startHere();
} 

startHere();