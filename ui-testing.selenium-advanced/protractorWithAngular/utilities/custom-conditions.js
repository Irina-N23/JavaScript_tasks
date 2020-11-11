"use strict";

const EC = protractor.ExpectedConditions;

class CustomConditions {
    constructor() {
        this.TIMEOUT = 30000;
    }

    waitForVisibilityOfElement(element) {
        return browser.wait(EC.visibilityOf(element), this.TIMEOUT);
    }

    waitForPresenceOfElement(element) {
        return browser.wait(EC.presenceOf(element), this.TIMEOUT);
    }
}

module.exports = CustomConditions;