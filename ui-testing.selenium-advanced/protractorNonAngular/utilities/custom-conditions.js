"use strict";

const EC = protractor.ExpectedConditions;
const TIMEOUT = 30000;


module.exports.waitForVisiblityOfElement = async function(element) {
    if (arguments[1] === undefined) {
        arguments[1] = TIMEOUT;
    }

    return browser.wait(EC.visibilityOf(element), arguments[1]);
}