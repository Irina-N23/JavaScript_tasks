"use strict";

const CalculatorEntity = require("../../app/calculatorEntity");
const {expect} = require("chai");

describe("method \"add()\": positive scenarios", function() {
    let calculator;

    beforeEach(() => calculator = new CalculatorEntity());
    afterEach(() => calculator = null);

    it("must return sum of inputted arguments if they are integers",
        () => expect(calculator.add(-43, 11, 35)).to.be.equal(3));

    it("must return sum of inputted arguments if they include integers"
                                             +" and floating-point numbers",
        () => expect(calculator.add(5.5, 11, 15.2, -1.3)).to.be.equal(30.4));
});


describe("method \"add()\": negative scenarios", function() {
    let calculator;

    beforeEach(() => calculator = new CalculatorEntity());
    afterEach(() => calculator = null);

    it("must throw an error if arguments have not been inputted",
        () => expect(() => calculator.add())
                      .to.throw(Error, "(!) No arguments have been inputted.\n"));

    it("must throw a type error if inputted arguments are not numbers",
        () => expect(calculator.add.bind(5, true, "str")).to.throw(TypeError));
});