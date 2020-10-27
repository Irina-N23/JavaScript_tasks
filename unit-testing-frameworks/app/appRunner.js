"use strict";

const Calculator = require("./calculatorEntity");

let calculator = new Calculator;

console.log(`The result of multiplication: ${calculator.multiply(102, 3)}.`);
console.log(`The result of addition: ${calculator.add(7, 13)}.`);

console.log(`The result of addition: ${calculator.add(111, "string")}.`);