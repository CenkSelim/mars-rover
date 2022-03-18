import { Plateau } from "./mars-plateau";
import { Rover } from "./mars-rover";
import { checkPlateauCommand, checkRoverStartingPos, checkRoverMovement } from "./checks-for-commands";
import { startHere } from "../index";
import chalk from 'chalk';

// 1. Check individual command line
// 2. Report if in ok or not
// 3. If Ok process command and output result

export function processingCommands(data: string):  void {
    const arr = data.split(/\r?\n/).filter(x => !x.startsWith("//"));
    console.log(arr);
    const report = checkAndExecute(arr);
    return startHere(report);
}
function checkAndExecute(arr: string[]) {
   chalk.level = 1;
    return chalk.yellow("   all ok √\r\n Output: ");
}

