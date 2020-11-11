"use strict";

const EverNoteElements = require("./../../website-locators/evernote");
const {email, password} = require("./../../user-credentials.json");
const {Key} = require("protractor");
const EC = protractor.ExpectedConditions;
const evernote = new EverNoteElements();
const TIMEOUT = 30000;


describe("An Evernote scenario", () => {
    afterAll(() => browser.close());

    it("should open Evernote homepage", () => {
        browser.get(evernote.HOME_URL, TIMEOUT)
        .then(() => expect(browser.getTitle())
                               .toContain("Organize Your Notes with Evernote"));
    });


    it("should log in to user's account", () => {
        evernote.LOGIN_BUTTON.click()
        .then(() => evernote.EMAIL_OR_USERNAME_FIELD.clear())
        .then(() => evernote.EMAIL_OR_USERNAME_FIELD.sendKeys(email, Key.ENTER))
        .then(() => browser.wait(EC.visibilityOf(evernote.PASSWORD_FIELD),
                                                                       TIMEOUT))
        .then(() => evernote.PASSWORD_FIELD.clear())
        .then(() => evernote.PASSWORD_FIELD.sendKeys(password, Key.ENTER))
        .then(() => browser.wait(EC.visibilityOf(evernote.AUTHORIZED_EMAIL),
                                                                     TIMEOUT*4))
        .then(() => evernote.AUTHORIZED_EMAIL.getText())
        .then(text => expect(text).toEqual(email));
    });


    it("should find a chosen note", () => {
        evernote.SEARCH_FIELD.sendKeys("To-Do", Key.ENTER)
        .then(() => browser.wait(EC.visibilityOf(evernote.SEARCH_RESULTS),
                                                                       TIMEOUT))
        .then(() => evernote.SEARCH_RESULTS.getText())
        .then(searchResults => expect(searchResults).toBe("1 note found"));
    });


    it("should mark today's task as done", () => {
        browser.wait(EC.visibilityOf(evernote.EDITOR_IFRAME), TIMEOUT)
        .then(() => browser.switchTo()
                               .frame((evernote.EDITOR_IFRAME).getWebElement()))
        .then(() => evernote.TODAY_CHECKBOX.click())
        .then(() => evernote.TOMORROW_FIELD.click())
        .then(() => browser.isElementPresent(evernote.IS_DATA_CHECKED))
        .then(isPresent => expect(isPresent).toBe(true))
    });


    it("should write a todo for tomorrow applying italic", () => {
        evernote.TOMORROW_FIELD.clear()
        .then(() => evernote.TOMORROW_FIELD.sendKeys("meeting"))
        .then(() => evernote.TOMORROW_FIELD.sendKeys(Key.chord(Key.CONTROL,
                                                    Key.SHIFT, Key.ARROW_LEFT)))
        .then(() => evernote.TOMORROW_FIELD
                                         .sendKeys(Key.chord(Key.CONTROL, "i")))
        .then(() => expect(evernote.CHANGED_TOMORROW_FIELD
                                                .getText()).toEqual("meeting"));
    });
});