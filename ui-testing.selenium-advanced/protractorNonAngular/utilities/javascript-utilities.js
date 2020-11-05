"use strict";

const {browser, element} = require("protractor");
const customConditions = require("./custom-conditions");
const EverNoteElements = require("../websiteLocators/evernote-locators");
const editorIFrame = new EverNoteElements().EDITOR_IFRAME;

class JavaScriptUtilities {
    constructor() {
    }

    async clickOnElementLocated(elementLocator) {
        return customConditions.waitForVisiblityOfElementLocated(elementLocator)
            .then(() => browser.findElement(elementLocator))
            .then(element => browser.actions().mouseDown(element).mouseUp()
                                                                    .perform());
    }


    async sendKeysToElementLocated(elementLocator, ...keys) {
        return customConditions.waitForVisiblityOfElementLocated(elementLocator)
            .then(() => browser.findElement(elementLocator))
            .then(inputField => {
                inputField.clear();
                inputField.sendKeys(keys.join(""));
            });
    }


    async switchToEditorIFrame() {
        return customConditions.waitForVisiblityOfElementLocated(editorIFrame)
            .then(() => browser.switchTo().frame(element(editorIFrame)
                                                             .getWebElement()));
    }


    async getTextFromElementLocated(elementLocator) {
        return customConditions.waitForVisiblityOfElementLocated(elementLocator)
            .then(() => browser.findElement(elementLocator).getText());
    }
}

module.exports = JavaScriptUtilities;