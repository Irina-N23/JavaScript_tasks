"use strict";

const {browser, element, protractor} = require("protractor");
const EC = protractor.ExpectedConditions;
const TIMEOUT = 30000;

async function waitForVisiblityOfElementLocated(elementLocator) {
    if (arguments[1] === undefined) {
        arguments[1] = TIMEOUT;
    }

    return browser.wait(EC.visibilityOf(element(elementLocator)), arguments[1]);
}

module.exports
         .waitForVisiblityOfElementLocated = waitForVisiblityOfElementLocated;