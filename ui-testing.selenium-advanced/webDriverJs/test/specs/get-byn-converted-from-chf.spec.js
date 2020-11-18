"use strict";

const {Builder, Key} = require('selenium-webdriver');
const {expect} = require("chai");
const TutBy = require("../../websiteLocators/tut-by");
const CustomConditions = require("../../utilities/custom-conditions");
const JavaScriptUtilities = require("../../utilities/javascript-utilities");

let driver = new Builder().forBrowser("chrome").build();
const tut = new TutBy();
const customCondition = new CustomConditions(driver);
const utilities = new JavaScriptUtilities(driver);

describe("Making a conversion from CHF to BYN", () => {
    before(() => {
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
    });

    after(async() => await driver.quit());


    it("should open Tut.by homepage", async () => {
        await driver.get(tut.HOME_URL)
        await customCondition.waitForjQueryAJAXsCompleted()
        driver.executeScript("return document.URL;")
        .then(url => expect(url).to.be.eql(tut.HOME_URL))
    });


    it("should go to section \"Finance\" of Tut.by", (done) => {
        driver.navigate().to(tut.FINANCE_URL)
        .then(() => driver.getTitle())
        .then(pageTitle => expect(pageTitle).contains("FINANCE.TUT.BY"))
        .then(() => done());
    });


    it("should find currency converter on a corresponding page", (done) => {
        utilities.clickOnElementLocated(tut.CALCULATORS_BUTTON)
        .then(() => utilities.clickOnElementLocated(tut.CURRENCY_CONVERTER_LINK))
        .then(() => customCondition
                          .waitForElementLocated(tut.CURRENCY_CONVERTER_HEADER))
        .then(converterHeader => converterHeader.getText())
        .then(text => expect(text).to.be.eql("Конвертер валют"))
        .then(() => done());
    });


    it("should add currency CHF to currency list", (done) => {
        utilities.clickOnElementLocated(tut.ADD_CURRENCY_BUTTON)
        .then(() => utilities.sendKeysToElementLocated(tut
                                       .CURRENCY_INPUT_FIELD, "CHF", Key.ENTER))
        .then(() => customCondition.waitForElementLocated(tut.CHF_BUTTON))
        .then(button => button.getAttribute("title"))
        .then(attributeTitle => expect(attributeTitle)
                                .to.be.eql("BYN, USD, EUR, RUB, UAH, PLN, CHF"))
        .then(() => done());
    });


    it("should return an amount of BYN converted from CHF", (done) => {
        utilities.sendKeysToElementLocated(tut.CHF_INPUT_FIELD, 150, Key.TAB)
        .then(() => driver.actions().keyDown(Key.HOME).keyUp(Key.HOME).perform())
        .then(() => customCondition.waitForElementLocated(tut.BYN_INPUT_FIELD))
        .then(bynInputField => bynInputField.getText())
        .then(amountOfByn => expect(amountOfByn).to.match(/^\d+(\.\d*)?$/))
        .then(() => done());
    });
});