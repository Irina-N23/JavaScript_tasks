"use strict";

const utilities = require("./utilities");

// Adds a unique note to the list:
function add(inputtedTitle, inputtedBody) {
    const jsonObject = utilities.getJsonfromFile();

    jsonObject["Notes"].forEach(note => {
        if (note.title === inputtedTitle) {
            console.log(`\n(!) Note with the title "${inputtedTitle}" has already been created.`
                        + " Title of every note has to be unique.\n");
            process.exit(1);
        }
    });

    const newNote = {"title": inputtedTitle, "body": inputtedBody};
    jsonObject["Notes"].push(newNote);

    utilities.updateJsonFile(JSON.stringify(jsonObject));
}

// Prints to-do list to console:
function list() {
    const jsonObject = utilities.getJsonfromFile();

    jsonObject["Notes"].forEach((note, counter = 0) => {
        console.log(`    ${++counter}. ${note.title}: ${note.body}`);
    });
}

// Reads a chosen note by its title:
function read(chosenTitle) {
    const jsonObject = utilities.getJsonfromFile();

    jsonObject["Notes"].forEach(note => {
        if (note.title === chosenTitle) {
            console.log(`\n${note.title}: ${note.body}\n`);
            process.exit(1);
        }
    });

    console.log(`\n(!) Note with the title "${chosenTitle}" has not been found.\n`);
}

// Removes a chosen note by its title:
function remove(chosenTitle) {
    const jsonObject = utilities.getJsonfromFile();

    jsonObject["Notes"].forEach(note => {
        if (note.title === chosenTitle) {
            jsonObject["Notes"].splice(jsonObject["Notes"].indexOf(note), 1);
            utilities.updateJsonFile(JSON.stringify(jsonObject));

            console.log(`\nDone:\tnote with the title "${chosenTitle}"`
                        + " has been successfully removed.\n");
            process.exit(1);
        }
    });

    console.log(`\n(!) Note with title "${chosenTitle}" has not been found.\n`);
}

module.exports.add = add;
module.exports.list = list;
module.exports.read = read;
module.exports.remove = remove;