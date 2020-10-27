"use strict";

const utilities = require("./utilities");

class CalculatorEntity {
    constructor() {
    }

    add(...addends) {
        if (utilities.isArrayComposedOfNumbers(addends)) {
            const reducer = (totalSum, currentAddend) => totalSum + currentAddend;
            return addends.reduce(reducer, 0);
        }
    }

    multiply(...multipliers) {
        if (utilities.isArrayComposedOfNumbers(multipliers)) {
            const reducer = (totalProduct, currentMultiplier) => totalProduct * currentMultiplier;
            return multipliers.reduce(reducer, 1);
        }
    }
}

module.exports = CalculatorEntity;