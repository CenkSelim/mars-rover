
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
	askQuestion(`Is "${COMMANDS_FILE}" ready to be processed? `, processCommands);
}
    
function processCommands(answer: string): void {

    if (answer.toLowerCase()==="n") {
        process.exit();
    }

    try {
        const data = readFileSync(COMMANDS_FILE, 'utf8');
        return processingCommands(data);
    } catch (err) {
        if (err instanceof Error) {
            return startHere(err.message);
        }
    }
} 

startHere();