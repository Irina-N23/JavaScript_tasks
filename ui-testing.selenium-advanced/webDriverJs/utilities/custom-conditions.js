"use strict";

const {until} = require('selenium-webdriver');

class CustomConditions {
    constructor(driver) {
        this.driver = driver;
        this.CUSTOM_TIMEOUT = 60000;
    }

    async isjQueryAJAXsCompleted() {
        return this.driver.executeScript("return (window.jQuery != null)"
                                                + " && (jQuery.active == 0);")
    }

    async waitForjQueryAJAXsCompleted() {
        return this.driver.wait(() => this.isjQueryAJAXsCompleted(), this.CUSTOM_TIMEOUT);
    }

    waitForElementLocated(elementLocator) {
        return this.driver.wait(until
            .elementLocated(elementLocator), this.CUSTOM_TIMEOUT);
    }
}

module.exports = CustomConditions;