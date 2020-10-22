"use strict";

const functions = require("./core functionality");

const myArgs = process.argv.slice(2);

// Reads a name of inputted command in order to run the appropriqate action:
const goToChosenAction = () => {
    const action = myArgs[0].toLowerCase();

    switch(action) {
        case "add":
            functions.add(myArgs[1], myArgs[2]);
            console.log("\nDone:\tthe note has been added to the list.\n");
        break;
        case "list":
            console.log("\nThe To-Do List:");
            functions.list();
        break;
        case "read":
            functions.read(myArgs[1]);
        break;
        case "remove":
            functions.remove(myArgs[1]);
        break;
        default:
            console.log(`\n(!) Incorrect name of action has been inputted: `
                        + `"${action}".\n`);
    }
}

module.exports.goToChosenAction = goToChosenAction;