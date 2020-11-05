"use strict";

const {browser, element, protractor} = require("protractor");
const EC = protractor.ExpectedConditions;

class CustomConditions {
    constructor() {
        this.TIMEOUT = 30000;
    }

    waitForVisibilityOfElementLocated(elementLocator) {
        return browser.wait(EC.visibilityOf(element(elementLocator)),
                                                                  this.TIMEOUT);
    }

    waitForPresenceOfElementLocated(elementLocator) {
        return browser.wait(EC.presenceOf(element(elementLocator)),
                                                                  this.TIMEOUT);
    }
}

module.exports = CustomConditions;