"use strict";

const {Builder, By, Key, until} = require('selenium-webdriver');
const {expect} = require("chai");
const TutBy = require("../../website-locators/TutBy");

let driver = new Builder().forBrowser("chrome").build();
let tut = new TutBy();


describe("Making a conversion from CHF to BYN", function() {
    before(() => {
        driver.manage().window().setSize(1920, 1080);
        driver.manage().deleteAllCookies();
    });

    after(() => driver.quit());


    it("should open Tut.by homepage", function(done) {
        driver.get(tut.HOME_URL)
        .then(() => driver.getCurrentUrl())
        .then(receivedUrl => expect(receivedUrl).to.be.eql(tut.HOME_URL))
        .then(() => done());
    });


    it("should go to section \"Finance\" of Tut.by", function(done) {
        driver.navigate().to("https://finance.tut.by/")
        .then(() => driver.getTitle())
        .then(title => expect(title).contains("FINANCE.TUT.BY"))
        .then(() => done());
    });


    it("should find currency converter on a corresponding page", function(done) {
        driver.wait(until.elementLocated(By.css(tut.CALCULATORS_BUTTON)), 60000)
        .then(button => button.click())
        .then(() => driver.wait(until.elementLocated(By
                        .xpath(tut.CURRENCY_CONVERTER_LINK)), 60000).click())
        .then(() => driver.wait(until.elementLocated(By
                        .css(tut.CURRENCY_CONVERTER_HEADER)), 60000))
        .then(element => element.getText())
        .then(text => expect(text).to.be.eql("Конвертер валют"))
        .then(() => done());
    });


    it("should add currency CHF to currency list", function(done) {
        driver.wait(until.elementLocated(By
                                .xpath(tut.ADD_CURRENCY_BUTTON)), 60000).click()

        .then(() => driver.wait(until.elementLocated(By.xpath(tut
               .CURRENCY_INPUT_FIELD)), 15000, "Timed out after 25 sec", 45000))
        .then(currencyInputField => {
            currencyInputField.clear();
            currencyInputField.sendKeys("CHF", Key.ENTER);
        })

        .then(() => driver.wait(until.elementLocated(By.css(tut.CHF_BUTTON))))
        .then(button => button.getAttribute("title"))
        .then(attributeTitle => expect(attributeTitle)
                                .to.be.eql("BYN, USD, EUR, RUB, UAH, PLN, CHF"))
        .then(() => done());
    });


    it("should return an amount of BYN converted from CHF", function(done) {
        driver.wait(until.elementLocated(By.name(tut.CHF_INPUT_FIELD)), 60000)
        .then(chfInputField => {
            chfInputField.clear();
            chfInputField.sendKeys("150", Key.TAB)
        })

        .then(() => driver.wait(until.elementLocated(By
                                        .xpath(tut.BYN_INPUT_FIELD)), 60000))
        .then(bynInputField => bynInputField.getText())
        .then(byn => expect(byn).to.match(/^\d+(\.\d*)?$/))
        .then(() => done());
    });
});