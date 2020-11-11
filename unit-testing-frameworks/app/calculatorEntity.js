"use strict";

const {isArrayComposedOfNumbers} = require("./utilities");

class CalculatorEntity {
    constructor() {
    }

    add(...addends) {
        if (isArrayComposedOfNumbers(addends)) {
            const reducer = (totalSum,
                                    currentAddend) => totalSum + currentAddend;
            return addends.reduce(reducer, 0);
        }
    }

    multiply(...multipliers) {
        if (isArrayComposedOfNumbers(multipliers)) {
            const reducer = (totalProduct,
                         currentMultiplier) => totalProduct * currentMultiplier;
            return multipliers.reduce(reducer, 1);
        }
    }
}

module.exports = CalculatorEntity;