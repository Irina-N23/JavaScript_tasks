"use strict";

function getFileContent(file) {
    const fs = require("fs");
    return fs.readFileSync(file, "utf8");
}

function getEvenLinesFromFile(fileContent) {
    const arrayOfLines = fileContent.split("\n");
    let evenLines = "";

    for (let i = 0; i < arrayOfLines.length; i++) {
        if (i % 2 !== 0) {    // lines are counted from 1 (not from 0)
            evenLines += arrayOfLines[i] + " ";
        }
    }
    return evenLines;
}

function printEvenLinesToConsole(fileToProcess) {
    const receivedFileContent = getFileContent(fileToProcess);
    
    console.log(getEvenLinesFromFile(receivedFileContent));
}


printEvenLinesToConsole("fs.rest.json\\resources\\task 1\\text.txt");