"use strict";

const FILE_TO_READ_PATH = "resources\\task 2\\4.json";
const FILE_TO_WRITE_PATH = "resources\\task 2\\Incorrect properties.txt";

const fs = require("fs");

const jsonString = fs.readFileSync(FILE_TO_READ_PATH, "utf8");
const jsonObject = JSON.parse(jsonString);

const dataComplianceValues = {
    "flag": typeof jsonObject.flag === "boolean",
    "myPromises": Array.isArray(jsonObject.myPromises),
    "element": typeof jsonObject.element === "object",
    "screenshot": jsonObject.screenshot === null,
    "elementText": typeof jsonObject.elementText === "string",
    "allElementsText": jsonObject.allElementsText.includes("const"),
    "counter": jsonObject.counter > 10,
    "config": jsonObject.config === "Common",
    "const": jsonObject.const.toLowerCase() === "FiRst".toLowerCase(),
    "parameters": jsonObject.parameters.length === 8,
    "description": jsonObject.description.length > 5
                       && jsonObject.description.length < 13
};

let correctPropertyCounter = 0;
let incorrectProperties = {};

for (let property in dataComplianceValues) {
    if (dataComplianceValues[property]) {
        correctPropertyCounter++;
    } else {
        for (let attribute in jsonObject) {
            if (attribute === property) {
               incorrectProperties[attribute] = dataComplianceValues[property];
            }
        }
    }
}

if (correctPropertyCounter === dataComplianceValues.length) {
    console.log("OK");
} else {
    fs.writeFileSync(FILE_TO_WRITE_PATH, JSON.stringify(incorrectProperties));
    console.log("\n(!)\tSome invalid properties have been found. "
                + `Just have a look at "${FILE_TO_WRITE_PATH}"!`);
}