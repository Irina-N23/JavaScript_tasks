"use strict";

const EverNoteElements = require("./../../website-locators/evernote");
const credentials = require("./../../user-credentials.json");
const {browser, element, protractor, Key} = require("protractor");
const evernote = new EverNoteElements();
const EC = protractor.ExpectedConditions;


describe("An Evernote scenario", () => {
    afterAll(() => browser.quit());

    it("should open Evernote homepage", (done) => {
        browser.get(evernote.HOME_URL, 30000)
        .then(() => expect(browser.getTitle())
                                .toContain("Organize Your Notes with Evernote"))
        .then(() => done());
    });


    it("should log in to user's account", (done) => {
        browser.findElement(evernote.LOGIN_BUTTON).click()
        .then(() => browser.findElement(evernote.EMAIL_OR_USERNAME_FIELD))
        .then(emailField => {
            emailField.clear();
            emailField.sendKeys(credentials.email, Key.ENTER);
        })
        .then(() => browser.wait(EC
                        .visibilityOf(element(evernote.PASSWORD_FIELD)), 30000))
        .then(() => browser.findElement(evernote.PASSWORD_FIELD))
        .then(passwordField => {
            passwordField.clear();
            passwordField.sendKeys(credentials.password, Key.ENTER);
        })
        .then(() => browser.wait(EC
                     .visibilityOf(element(evernote.AUTHORIZED_EMAIL)), 120000))
        .then(() => browser.findElement(evernote.AUTHORIZED_EMAIL).getText())
        .then(text => expect(text).toEqual(credentials.email))
        .then(() => done());
    });


    it("should find a chosen note", (done) => {
        browser.findElement(evernote.SEARCH_FIELD).sendKeys("To-Do", Key.ENTER)
        .then(() => browser.wait(EC
                        .visibilityOf(element(evernote.SEARCH_RESULTS)), 30000))
        .then(() => browser.findElement(evernote.SEARCH_RESULTS).getText())
        .then(searchResults => expect(searchResults).toBe("1 note found"))
        .then(() => done());
    });


    it("should mark today's task as done", (done) => {
        browser.wait(EC.visibilityOf(evernote.EDITOR_IFRAME), 30000)
        .then(() => browser.switchTo()
                               .frame((evernote.EDITOR_IFRAME).getWebElement()))
        .then(() => browser.findElement(evernote.TODAY_CHECKBOX).click())
        .then(() => browser.findElement(evernote.TOMORROW_FIELD).click())
        .then(() => browser.isElementPresent(evernote.IS_DATA_CHECKED))
        .then(isPresent => expect(isPresent).toBe(true))
        .then(() => browser.switchTo().defaultContent())
        .then(() => done());
    });


    it("should write a todo for tomorrow applying italic", (done) => {
        browser.wait(EC.visibilityOf(element(evernote.ITALIC_TEXT_BUTTON)), 30000)
        .then(() => browser.findElement(evernote.ITALIC_TEXT_BUTTON).click())
        .then(() => browser.switchTo()
                               .frame((evernote.EDITOR_IFRAME).getWebElement()))
        .then(() => browser.findElement(evernote.TOMORROW_FIELD).clear())
        .then(() => browser.findElement(evernote.TOMORROW_FIELD)
                                                           .sendKeys("meeting"))
        .then(() => expect(evernote.CHANGED_TOMORROW_FIELD
                                                 .getText()).toEqual("meeting"))
        .then(() => done());
    });
});