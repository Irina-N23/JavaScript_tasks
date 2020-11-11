"use strict";

module.exports.isArrayComposedOfNumbers = function (array) {
    if (array.length === 0) {
        throw new Error("(!) No arguments have been inputted.\n")
    }

    const isNumbers = array.every(element => typeof element === "number");

    if (isNumbers) {
        return true;
    } else {
        throw new TypeError("(!) Incorrect type of parameters:"
                                        + " the type must be \"number\".\n");
    }
}