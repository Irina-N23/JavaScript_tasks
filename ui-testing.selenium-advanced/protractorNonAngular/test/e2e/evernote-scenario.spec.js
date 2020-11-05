"use strict";

const EverNoteLocators = require("../../websiteLocators/evernote-locators");
const JavaScriptUtilities = require("../../utilities/javascript-utilities");
const credentials = require("./../../user-credentials.json");
const {browser, Key} = require("protractor");

const evernote = new EverNoteLocators();
const utilities = new JavaScriptUtilities();


describe("An Evernote scenario", () => {
    afterAll(() => browser.close());


    it("should open Evernote homepage", () => {
        browser.get(evernote.HOME_URL, 30000)
        .then(() => browser.executeScript("return document.title;"))
        .then(titleOfPage => expect(titleOfPage)
                               .toContain("Organize Your Notes with Evernote"));
    });


    it("should log in to user's account", () => {
        browser.findElement(evernote.LOGIN_BUTTON)
        .then(button => browser.actions().click(button).perform())
        .then(() => utilities.sendKeysToElementLocated(evernote
                        .EMAIL_OR_USERNAME_FIELD, credentials.email, Key.ENTER))
        .then(() => utilities.sendKeysToElementLocated(evernote
                              .PASSWORD_FIELD, credentials.password, Key.ENTER))
        .then(() => utilities.getTextFromElementLocated(evernote
                                                     .AUTHORIZED_EMAIL, 120000))
        .then(text => expect(text).toEqual(credentials.email));
    });


    it("should find a chosen note", () => {
        utilities.sendKeysToElementLocated(evernote
                                              .SEARCH_FIELD, "To-Do", Key.ENTER)
        .then(() => utilities.getTextFromElementLocated(evernote
                                                               .SEARCH_RESULTS))
        .then(searchResults => {
            browser.executeScript("console.log(`Search results are "
                                    + "\"${arguments[0]}\".`);", searchResults);
            expect(searchResults).toBe("1 note found");
        });
    });


    it("should mark today's task as done", () => {
        utilities.switchToEditorIFrame()
        .then(() => utilities.clickOnElementLocated(evernote.TODAY_CHECKBOX))
        .then(() => utilities.clickOnElementLocated(evernote.TOMORROW_FIELD))
        .then(() => browser.isElementPresent(evernote.IS_DATA_CHECKED))
        .then(isPresent => expect(isPresent).toBe(true))
        .then(() => browser.switchTo().frame(null));
    });


    it("should write a todo for tomorrow", () => {
        utilities.switchToEditorIFrame()
        .then(() => utilities.sendKeysToElementLocated(evernote
                                                    .TOMORROW_FIELD, "meeting!"))
        .then(() => utilities.getTextFromElementLocated(evernote.TOMORROW_FIELD))
        .then(newText => expect(newText).toEqual("meeting!"));
    });
});