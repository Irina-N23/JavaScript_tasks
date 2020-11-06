"use strict";
const {element, by} = require("protractor");

class EverNoteElements {
    constructor() {
        this.HOME_URL = "https://evernote.com/";
        this.LOGIN_BUTTON = by.xpath("//div[@class='top']//a[text()='Log In']");
        this.EMAIL_OR_USERNAME_FIELD = by.css("#username");
        this.PASSWORD_FIELD = by.css("#password");
        this.AUTHORIZED_EMAIL = by.xpath("//div[text()="
                                               + "'sometestuserqa@gmail.com']");
        this.SEARCH_FIELD = by.css("#qa-SEARCH_INPUT_INITIAL");
        this.SEARCH_RESULTS = by.id("qa-SEARCH_RESULTS_TOTAL_NOTECOUNT");
        this.EDITOR_IFRAME = element(by.id("qa-COMMON_EDITOR_IFRAME"));
        this.TODAY_CHECKBOX = by.xpath("//b[text()='Today']/../"
                                           + "following-sibling::ul[1]//input");
        this.IS_DATA_CHECKED = by.xpath("//li[@data-checked='true']");
        this.TOMORROW_FIELD = by.xpath("//b[text()='Tomorrow']/../"
                              + "following-sibling::ul[1]//div[@class='para']");
        this.CHANGED_TOMORROW_FIELD = element(by.xpath("//b[text()='Tomorrow']"
                       + "/../following-sibling::ul[1]//div[@class='para']/i"));
    }
}

module.exports = EverNoteElements;