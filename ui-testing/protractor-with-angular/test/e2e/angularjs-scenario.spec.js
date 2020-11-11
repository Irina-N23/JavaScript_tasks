"use strict";

const AngularJsWebsiteElements = require("./../../website-locators/angularjs");
const {Key} = require("protractor");
const EC = protractor.ExpectedConditions;
const angularjs = new AngularJsWebsiteElements();
const TIMEOUT = 30000;


describe("An AngularJS website scenario", () => {
    afterAll(() => browser.close());


    it("should open AngularJS homepage", () => {
        browser.get(angularjs.HOME_URL, TIMEOUT)
        .then(() => expect(browser.getTitle()).toContain("AngularJS"));
    });


    it("should go to Tutorial page", () => {
        angularjs.LEARN_BUTTON.click()
        .then(() => angularjs.TUTORIAL_BUTTON.click())
        .then(() => browser.getCurrentUrl())
        .then(url => expect(url).toEqual("https://docs.angularjs.org/tutorial"));
    });


    it("should find an article about \"bind\"", () => {
        angularjs.SEARCH_FIELD.sendKeys("bind")
        .then(() => (setTimeout(() => angularjs.SEARCH_FIELD
                                                   .sendKeys(Key.ENTER), 5000)))
        .then(() => browser.wait(EC
                            .presenceOf(angularjs.SEARCH_RESULT_PAGE), TIMEOUT))
        .then(() => angularjs.SEARCH_RESULT_PAGE.getText())
        .then(header => expect(header.toLowerCase()).toContain("bind"));
    });


    it("should hide content of the article \"ngBindHtml\"", () => {
        browser.wait(EC.visibilityOf(angularjs.HIDE_BUTTON), TIMEOUT)
        .then(() => angularjs.HIDE_BUTTON.click())
        .then(() => browser.wait(EC.visibilityOf(angularjs.SHOW_BUTTON),
                                                                       TIMEOUT))
        .then(() => expect(angularjs.SHOW_BUTTON.getText()).toEqual("Show"));
    });


    it("should go to page of a chosen version of AngularJS", () => {
        angularjs.VERSION_DROPDOWN.click()
        .then(() => browser.wait(EC
                           .visibilityOf(angularjs.VERSION_TO_CHOOSE), TIMEOUT))
        .then(() => angularjs.VERSION_TO_CHOOSE.click())
        .then(() => expect(browser.getCurrentUrl())
                                                 .toContain(angularjs.VERSION));
    });
});