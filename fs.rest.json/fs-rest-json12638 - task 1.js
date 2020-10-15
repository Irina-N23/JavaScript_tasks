"use strict";

function getFileContent(file) {
    const fs = require("fs");
    return fs.readFileSync(file, "utf8");
}

function getEvenStringsFromFile(fileContent) {
    const arrayOfStrings = fileContent.split("\n");
    let evenStrings = "";

    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (i % 2 === 0) {
            evenStrings += arrayOfStrings[i] + "\n";
        }
    }
    return evenStrings;
}

function printEvenStringsToConsole(fileToProcess) {
    const receivedFileContent = getFileContent(fileToProcess);

    console.log("Here are even strings only:\n\n"
                        + getEvenStringsFromFile(receivedFileContent));
}


printEvenStringsToConsole("fs.rest.json\\resources\\fileToRead (task 1).txt");