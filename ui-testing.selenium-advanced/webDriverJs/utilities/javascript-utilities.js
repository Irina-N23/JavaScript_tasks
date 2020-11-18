"use strict";

const {until} = require('selenium-webdriver');

class JavaScriptUtilities {
    constructor(driver) {
        this.driver = driver;
        this.CUSTOM_TIMEOUT = 60000;
    }


    clickOnElementLocated(elementLocator) {
        return this.driver.wait(until
            .elementLocated(elementLocator), this.CUSTOM_TIMEOUT)
            .then(element => this.driver.actions().click(element).perform());
    }

    sendKeysToElementLocated(elementLocator, ...keys) {
        return this.driver.wait(until
            .elementLocated(elementLocator), this.CUSTOM_TIMEOUT)
            .then(inputField => {
                inputField.clear();
                inputField.sendKeys(keys.join(""));
            });
    }
}

module.exports = JavaScriptUtilities;