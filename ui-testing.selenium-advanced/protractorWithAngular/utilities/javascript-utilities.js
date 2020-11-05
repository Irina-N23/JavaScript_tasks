"use strict";

const {browser} = require("protractor");
const CustomConditions = require("./custom-conditions");
const customConditions = new CustomConditions();

class JavaScriptUtilities {
    constructor() {
    }

    async clickOnElementLocated(elementLocator) {
        return customConditions.waitForVisibilityOfElementLocated(elementLocator)
        .then(() => browser.findElement(elementLocator))
        .then(element => browser.actions().mouseDown(element).mouseUp(element)
                                                                     .perform())
    }

    getTextFromElementLocated(elementLocator) {
        return customConditions.waitForPresenceOfElementLocated(elementLocator)
            .then(() => element(elementLocator).getText());
    }
}

module.exports = JavaScriptUtilities;