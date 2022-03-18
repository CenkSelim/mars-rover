import { checkPlateauCommand, checkRoverStartingPos, checkRoverMovement } from "../src/checks-for-commands";
import { ERROR_MESSAGE_PLATEAU, ERROR_MESSAGE_ROVER, ERROR_MESSAGE_MOVEMENT } from "./error-messages";

export const plateauCommandReport = (command: string): string => {
    let reportLine: string = "";
    try {
        if (checkPlateauCommand(command)) reportLine = (`${command} √`) ; 
    } catch (e) { 
        if (e.message === ERROR_MESSAGE_PLATEAU) {
            reportLine = (`${command} X`) ;
        } else {
            reportLine = e.message;
        }
    }
    return reportLine;
};

export const roverStartingPosCommandReport = (command: string): string => {
   let reportLine: string = "";
    try {
        if (checkRoverStartingPos(command)) reportLine = (`${command} √`) ; 
    } catch (e) { 
        if (e.message === ERROR_MESSAGE_ROVER) {
            reportLine = (`${command} X`) ;
        } else {
            reportLine = e.message;
        }
    }
    return reportLine;
}

export const roverMovementCommandsReport = (command: string): string => {
    return " X";
}
