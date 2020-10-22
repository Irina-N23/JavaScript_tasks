"use strict";

const NOTES_PATH = "resources\\task 5\\notes.json";
const fs = require("fs");

function getJsonfromFile() {
    try {
        const jsonString = fs.readFileSync(NOTES_PATH, "utf8");
        return JSON.parse(jsonString);
    } catch (error) {
        console.log(`(!) Failed to read the file "${NOTES_PATH}":\n${error}`);
        process.exit(-1);
    }
}

function updateJsonFile(updatedJsonString) {
    try {
        fs.writeFileSync(NOTES_PATH, updatedJsonString);
    } catch (error) {
        console.log(`(!) Failed to update the file "${NOTES_PATH}":\n${error}`);
    }
}

module.exports.getJsonfromFile = getJsonfromFile;
module.exports.updateJsonFile = updateJsonFile;