"use strict";

function printSweetsOf(array) {
    array.forEach(sweet => {
        for (let attribute in sweet) {
            console.log(attribute + ": " + sweet[attribute]);
        }
        console.log();
    });
}

module.exports.printSweetsOf = printSweetsOf;