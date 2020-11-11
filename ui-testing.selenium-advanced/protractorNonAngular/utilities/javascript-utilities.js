"use strict";

const {waitForVisiblityOfElement} = require("./custom-conditions");
const EverNoteElements = require("../websiteLocators/evernote-locators");
const editorIFrame = new EverNoteElements().EDITOR_IFRAME;

class JavaScriptUtilities {
    constructor() {
    }

    clickOnElement(element) {
        return waitForVisiblityOfElement(element)
            .then(() => browser.actions().mouseDown(element).mouseUp()
                                                                    .perform());
    }


    inputText(element, ...keys) {
        return waitForVisiblityOfElement(element)
            .then(() => element.clear())
            .then(() => element.sendKeys(keys.join("")));
    }


    switchToEditorIFrame() {
        return waitForVisiblityOfElement(editorIFrame)
            .then(() => browser.switchTo().frame(editorIFrame.getWebElement()));
    }


    getTextFromElement(element) {
        return waitForVisiblityOfElement(element)
            .then(() => element.getText());
    }
}

module.exports = JavaScriptUtilities;