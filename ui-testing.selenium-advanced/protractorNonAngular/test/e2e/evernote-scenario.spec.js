"use strict";

const EverNoteLocators = require("../../websiteLocators/evernote-locators");
const JavaScriptUtilities = require("../../utilities/javascript-utilities");
const {email, password} = require("./../../user-credentials.json");
const {Key} = require("protractor");

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
        browser.actions().click(evernote.LOGIN_BUTTON).perform()
        .then(() => utilities.inputText(evernote.EMAIL_OR_USERNAME_FIELD, email,
                                                                     Key.ENTER))
        .then(() => utilities.inputText(evernote.PASSWORD_FIELD, password,
                                                                     Key.ENTER))
        .then(() => utilities.getTextFromElement(evernote.AUTHORIZED_EMAIL,
                                                                        120000))
        .then(text => expect(text).toEqual(email));
    });


    it("should find a chosen note", () => {
        utilities.inputText(evernote.SEARCH_FIELD, "To-Do", Key.ENTER)
        .then(() => utilities.getTextFromElement(evernote.SEARCH_RESULTS))
        .then(searchResults => {
            browser.executeScript("console.log(`Search results are "
                                    + "\"${arguments[0]}\".`);", searchResults);
            expect(searchResults).toBe("1 note found");
        });
    });


    it("should mark today's task as done", () => {
        utilities.switchToEditorIFrame()
        .then(() => utilities.clickOnElement(evernote.TODAY_CHECKBOX))
        .then(() => utilities.clickOnElement(evernote.TOMORROW_FIELD))
        .then(() => browser.isElementPresent(evernote.IS_DATA_CHECKED))
        .then(isPresent => expect(isPresent).toBe(true));
    });


    it("should write a todo for tomorrow", () => {
        utilities.inputText(evernote.TOMORROW_FIELD, "meeting!")
        .then(() => utilities.getTextFromElement(evernote.TOMORROW_FIELD))
        .then(newText => expect(newText).toEqual("meeting!"));
    });
});