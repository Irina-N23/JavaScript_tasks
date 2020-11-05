"use strict";

const AngularJsWebsiteElements = require("./../../websiteLocators/angularjs");
const CustomConditions = require("./../../utilities/custom-conditions");
const JavaScriptUtilities= require("./../../utilities/javascript-utilities");
const {browser, element, Key} = require("protractor");

const angularjs = new AngularJsWebsiteElements();
const customConditions = new CustomConditions();
const utilities = new JavaScriptUtilities();


describe("An AngularJS website scenario", () => {
    afterAll(() => browser.close());

    it("should open AngularJS homepage", () => {
        browser.get(angularjs.HOME_URL, 40000)
        .then(() => expect(browser.getTitle()).toContain("AngularJS"))
    });


    it("should go to Tutorial page", () => {
        utilities.clickOnElementLocated(angularjs.LEARN_BUTTON)
        .then(() => utilities.clickOnElementLocated(angularjs.TUTORIAL_BUTTON))
        .then(() => browser.executeScript("return document.URL;"))
        .then(url => expect(url).toEqual("https://docs.angularjs.org/tutorial"))
    });


    it("should find an article about \"bind\"", () => {
        browser.findElement(angularjs.SEARCH_FIELD)
        .then(searchField => {
            browser.actions().mouseMove(searchField).perform();
            searchField.sendKeys("bind");
        })
        .then(setTimeout(() => element(angularjs.SEARCH_FIELD)
                                                    .sendKeys(Key.ENTER), 3000))
        .then(() => utilities.getTextFromElementLocated(angularjs
                                                              .FOUND_PAGE_NAME))
        .then(header => expect(header.toLowerCase()).toContain("bind"))
    });


    it("should hide content of the article \"ngBindHtml\"", () => {
        utilities.clickOnElementLocated(angularjs.HIDE_BUTTON)
        .then(() => utilities.getTextFromElementLocated(angularjs.SHOW_BUTTON))
        .then(text => expect(text).toEqual("Show"));
    });


    it("should go to page of a chosen version of AngularJS", () => {
        utilities.clickOnElementLocated(angularjs.VERSION_DROPDOWN)
        .then(() => browser.executeScript("arguments[0].style.border = "
                      + "'2px solid red'", element(angularjs.VERSION_DROPDOWN)))
        .then(() => customConditions.waitForPresenceOfElementLocated(angularjs
                                                            .VERSION_TO_CHOOSE))
        .then(() => element(angularjs.VERSION_TO_CHOOSE).click())
        .then(() => expect(browser.getCurrentUrl()).toContain(angularjs.VERSION))
    });
});