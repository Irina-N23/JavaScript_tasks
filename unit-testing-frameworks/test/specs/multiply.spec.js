"use strict";

const CalculatorEntity = require("../../app/calculatorEntity");
const {expect} = require("chai");

describe("method \"multiply()\": positive scenarios", function() {
    let calculator;

    beforeEach(() => calculator = new CalculatorEntity());
    afterEach(() => calculator = null);

    it("must return product of inputted arguments if they are integers",
        () => expect(calculator.multiply(-43, 11, 35)).to.be.equal(-16555));

    it("must return product of inputted arguments if they include integers "
                                                 + "and floating-point numbers",
        () => expect(calculator.multiply(5.5, -3.11, 2)).to.be.equal(-34.21));
});


describe("method \"multiply()\": negative scenarios", function() {
    let calculator;

    beforeEach(() => calculator = new CalculatorEntity());
    afterEach(() => calculator = null);

    it("must throw an error if arguments have not been inputted",
        () => expect(() => calculator.multiply())
                      .to.throw(Error, "(!) No arguments have been inputted.\n"));

    it("must throw a type error if inputted arguments are not numbers",
        () => expect(calculator.multiply.bind(5, true, "Q")).to.throw(TypeError));
});