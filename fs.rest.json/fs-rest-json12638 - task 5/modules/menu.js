"use strict";

const functions = require("./core functionality");

const arguments = process.argv.slice(2);

// Reads a name of inputted command in order to run the appropriqate action:
const goToChosenAction = () => {
    const action = arguments[0].toLowerCase();

    switch(action) {
        case "add":
            functions.add(arguments[1], arguments[2]);
            console.log("\nDone:\tthe note has been added to the list.\n");
        break;
        case "list":
            console.log("\nThe To-Do List:");
            functions.list();
        break;
        case "read":
            functions.read(arguments[1]);
        break;
        case "remove":
            functions.remove(arguments[1]);
        break;
        default:
            console.log(`\n(!) Incorrect name of action has been inputted: `
                        + `"${action}".\n`);
    }
}

module.exports.goToChosenAction = goToChosenAction;