import { Plateau } from "./src/mars-plateau"
import { Rover } from "./src/mars-rover";
import { checkPlateauCommand, checkRoverStartingPos, checkRoverMovement } from "./src/check-command";

import { clear, print, askQuestion } from './console';
import { readFileSync, existsSync } from 'fs';

const COMMANDS_FILE : string = './commands.txt';
const NUMBER_OF_COMMAND_ALLOWED : number = 5;

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
        const data = readFileSync(COMMANDS_FILE, 'utf8');
        checkAndExecuteCommandsFile(data);
    } catch (err) {
        if (err instanceof Error) {
            return startHere(err.message);
        }
    }
} 

function checkAndExecuteCommandsFile(data: string) {
    const arr = data.split(/\r?\n/).filter( x => !x.startsWith("*"));
    console.log(arr);
    if (!checkPlateauCommand(arr[0])) {
        
    }
    const plateau = new Plateau(arr[0]);

    if (!checkRoverStartingPos(arr[1])) {
        
    }
    const rover1 = new Rover(plateau);
    rover1.setStartinPosition(arr[1])

    if (!checkRoverMovement(arr[2])) {
        
    }
    const rover1Pos = rover1.move(arr[2]);
    plateau.addObstacle(rover1Pos);

    if (!checkRoverStartingPos(arr[3])) {
        
    }
    const rover2 = new Rover(plateau);
    rover2.setStartinPosition(arr[3])

    if (!checkRoverMovement(arr[4])) {
        
    }
    const rover2Pos = rover2.move(arr[4]);
    plateau.addObstacle(rover1Pos);


    return startHere(`Rover 1 new pos ${rover1Pos}  Rover 2 new pos ${rover2Pos}`);
}

startHere();