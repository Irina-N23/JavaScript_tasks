"use strict";

// 1. Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
// Класс должен поддерживать свойства message, name и stack.

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}

function testFormatErrorInvocation() {
    throw new FormatError("(!) An invalid format has been applied.");
}

try {
    testFormatErrorInvocation();
} catch (error) {
    if (error instanceof FormatError && error instanceof SyntaxError) {
        alert(error.message);
        alert(error.name);
        alert(error.stack);
    } else {
        throw error;
    }
}



// 2. Wrap in try catch 1/0 and print to zero can not be divided. 
class ArithmeticError extends Error {
    constructor(message) {
        super(message);
        this.name = "ArithmeticError";
    }
}

function divideNumbers(a, b) {
    if (b === 0) {
        throw new ArithmeticError("(!) Division by zero is not allowed!");
    }
    return a / b;
}

try {
    const quotient = divideNumbers(1, 0);
    alert(quotient);
} catch (randomError) {
    if (randomError instanceof ArithmeticError) {
        alert(randomError.name + ":\n" + randomError.message);
    } else {
        throw randomError;
    }
}