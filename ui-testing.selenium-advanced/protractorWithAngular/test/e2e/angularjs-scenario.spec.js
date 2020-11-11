"use strict";

const AngularJsWebsiteElements = require("./../../websiteLocators/angularjs");
const {waitForPresenceOfElement} = require("./../../utilities/"
                                                         + "custom-conditions");
const {clickOnElement, getTextFromElement} = require("./../../utilities/"
                                                      + "javascript-utilities");
const {Key} = require("protractor");
const angularjs = new AngularJsWebsiteElements();


describe("An AngularJS website scenario", () => {
    afterAll(() => browser.close());

    it("should open AngularJS homepage", () => {
        browser.get(angularjs.HOME_URL, 40000)
        .then(() => expect(browser.getTitle()).toContain("AngularJS"))
    });


    it("should go to Tutorial page", () => {
        clickOnElement(angularjs.LEARN_BUTTON)
        .then(() => clickOnElement(angularjs.TUTORIAL_BUTTON))
        .then(() => browser.executeScript("return document.URL;"))
        .then(url => expect(url).toEqual("https://docs.angularjs.org/tutorial"))
    });


    it("should find an article about \"bind\"", () => {
        browser.actions().mouseMove(angularjs.SEARCH_FIELD).perform()
        .then(() => angularjs.SEARCH_FIELD.sendKeys("bind"))
        .then(setTimeout(() => angularjs.SEARCH_FIELD.sendKeys(Key.ENTER), 3000))
        .then(() => getTextFromElement(angularjs.FOUND_PAGE_NAME))
        .then(header => expect(header.toLowerCase()).toContain("bind"))
    });


    it("should hide content of the article \"ngBindHtml\"", () => {
        clickOnElement(angularjs.HIDE_BUTTON)
        .then(() => getTextFromElement(angularjs.SHOW_BUTTON))
        .then(text => expect(text).toEqual("Show"));
    });


    it("should go to page of a chosen version of AngularJS", () => {
        clickOnElement(angularjs.VERSION_DROPDOWN)
        .then(() => browser.executeScript("arguments[0].style.border = "
                      + "'2px solid red'", angularjs.VERSION_DROPDOWN))
        .then(() => waitForPresenceOfElement(angularjs.VERSION_TO_CHOOSE))
        .then(() => clickOnElement(angularjs.VERSION_TO_CHOOSE))
        .then(() => expect(browser.getCurrentUrl()).toContain(angularjs.VERSION))
    });
});