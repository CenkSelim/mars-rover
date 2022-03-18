import { startHere } from "../index";
import {plateauCommandReport, roverMovementCommandsReport, roverStartingPosCommandReport} from "./commands-reports"
import { Plateau } from "../src/mars-plateau";
import { Rover } from "../src/mars-rover";

// 1. Check individual command line
// 2. Report if in ok or not
// 3. If Ok process command and output result

export function processingCommands(data: string):  void {
    const arr = data.split(/\r?\n/).filter(x => !x.startsWith("//"));
    const report = checkAndExecute(arr);
    return startHere(report);
}
export const checkAndExecute = (arr: string[]): string => {
    let report : string = "";
    report += `\r\n ${plateauCommandReport(arr[0])} `
    for (let index = 1; index < arr.length; index +=2) {
        report += `\r\n ${roverStartingPosCommandReport(arr[index])} `;
        report += `\r\n ${roverMovementCommandsReport(arr[index + 1])} `; 
    }
    report += `\r\n`;
    if(arr.length === report.split(/\r?\n/).filter((obj) => obj.startsWith(" √")).length){
        report += `\r\n Output:`;
        report += `\r\n ${executeCommands(arr)}`;
        report += `\r\n`;
    }
    return report;
}

const executeCommands = (arr: string[]): string => {
    let output: string = "";
    let plateau: Plateau  = new Plateau(arr[0]);
    for (let index = 1; index < arr.length; index +=2) {
        let rover: Rover  = new Rover(plateau);
        rover.setStartinPosition(arr[index]);
        output += `\r\n ${rover.move(arr[index + 1])} `;
        plateau.addObstacle(`${rover.x} ${rover.y}`); 
    }
    return output;
}