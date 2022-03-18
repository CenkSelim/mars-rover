import { checkPlateauCommand, checkRoverStartingPos, checkRoverMovement } from "../src/checks-for-commands";
import { ERROR_MESSAGE_PLATEAU, ERROR_MESSAGE_ROVER, ERROR_MESSAGE_MOVEMENT } from "./error-messages";

export const plateauCommandReport = (command: string): string => {
    let reportLine: string = "";
    try {
        if (checkPlateauCommand(command)) reportLine = formatValid(command) ; 
    } catch (e) { 
         reportLine = formatError(e, command,ERROR_MESSAGE_PLATEAU);
    }
    return reportLine;
};

export const roverStartingPosCommandReport = (command: string): string => {
   let reportLine: string = "";
    try {
        if (checkRoverStartingPos(command)) reportLine = formatValid(command) ; 
    } catch (e) { 
        reportLine = formatError(e, command,ERROR_MESSAGE_ROVER);
    }
    return reportLine;
}

export const roverMovementCommandsReport = (command: string): string => {
    let reportLine: string = "";
    try {
        if (checkRoverMovement(command)) reportLine = formatValid(command) ; 
    } catch (e) { 
        reportLine = formatError(e, command,ERROR_MESSAGE_MOVEMENT);
    }
    return reportLine;
}

function formatValid(command: string): string {
    const tick :string = "√";
    return `${tick} ${command}`;
}

function formatError(e: any, command: string, message: string): string {
    let reportLine: string = "";
    const cross :string = "×";
    if (e instanceof Error) {
        if (e.message === message) {
            reportLine = (`${cross} ${command}`);
        } else {
            reportLine = e.message;
        }
    } else {
        reportLine = "Error - see logs";
        console.log(e);
    }
    return reportLine;
}
