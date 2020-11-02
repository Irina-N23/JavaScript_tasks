"use strict";

const AngularJsWebsiteElements = require("./../../website-locators/angularjs");
const angularjs = new AngularJsWebsiteElements();
const {browser, element, protractor, Key} = require("protractor");
const EC = protractor.ExpectedConditions;


describe("An AngularJS website scenario", () => {
    afterAll(() => browser.quit());


    it("should open AngularJS homepage", (done) => {
        browser.get(angularjs.HOME_URL, 30000)
        .then(() => expect(browser.getTitle()).toContain("AngularJS"))
        .then(() => done());
    });


    it("should go to Tutorial page", (done) => {
        browser.findElement(angularjs.LEARN_BUTTON).click()
        .then(() => element(angularjs.TUTORIAL_BUTTON).click())
        .then(() => browser.getCurrentUrl())
        .then(url => expect(url).toEqual("https://docs.angularjs.org/tutorial"))
        .then(() => done());
    });


    it("should find an article about \"bind\"", (done) => {
        browser.findElement(angularjs.SEARCH_FIELD).sendKeys("bind")
        .then(setTimeout(() => element(angularjs.SEARCH_FIELD)
                                                    .sendKeys(Key.ENTER), 5000))
        .then(() => browser.wait(EC
                   .presenceOf(element(angularjs.SEARCH_RESULT_PAGE)), 30000))
        .then(() => browser.findElement(angularjs.SEARCH_RESULT_PAGE).getText())
        .then(header => expect(header.toLowerCase()).toContain("bind"))
        .then(() => done());
    });


    it("should hide content of the article \"ngBindHtml\"", (done) => {
        browser.wait(EC.visibilityOf(element(angularjs.HIDE_BUTTON)), 30000)
        .then(() => browser.findElement(angularjs.HIDE_BUTTON).click())
        .then(() => browser.wait(EC.visibilityOf(angularjs.SHOW_BUTTON), 30000))
        .then(() => expect(angularjs.SHOW_BUTTON.getText()).toEqual("Show"))
        .then(() => done());
    });


    it("should go to page of a chosen version of AngularJS", (done) => {
        browser.findElement(angularjs.VERSION_DROPDOWN).click()
        .then(() => browser.wait(EC
                             .visibilityOf(angularjs.VERSION_TO_CHOOSE), 30000))
        .then(() => angularjs.VERSION_TO_CHOOSE.click())
        .then(() => expect(browser.getCurrentUrl()).toContain(angularjs.VERSION))
        .then(() => done());
    });
});