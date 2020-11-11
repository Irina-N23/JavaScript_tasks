"use strict";

const CustomConditions = require("./custom-conditions");
const customConditions = new CustomConditions();

class JavaScriptUtilities {
    constructor() {
    }

    clickOnElement(element) {
        return customConditions.waitForVisibilityOfElement(element)
        .then(element => browser.actions().mouseDown(element).mouseUp(element)
                                                                     .perform())
    }

    getTextFromElement(element) {
        return customConditions.waitForPresenceOfElement(element)
            .then(() => element.getText());
    }
}

module.exports = JavaScriptUtilities;