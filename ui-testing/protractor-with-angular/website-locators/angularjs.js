"use strict";

const {element, by} = require("protractor");

class AngularJsWebsiteElements {
    constructor() {
        this.HOME_URL = "https://angularjs.org/";
        this.LEARN_BUTTON = by.xpath("//a[text()='Learn']");
        this.TUTORIAL_BUTTON = by.xpath("//a[text()='Tutorial']");
        this.SEARCH_FIELD = by.model('q');
        this.SEARCH_RESULT_PAGE = by.linkText("ngBindHtml");
        this.HIDE_BUTTON = by.xpath("//button[text()='Hide']");
        this.SHOW_BUTTON = element(by.xpath("//button[text()='Show']"));
        this.VERSION_DROPDOWN = by.model("$ctrl.selectedVersion");
        this.VERSION = "1.6.10";
        this.VERSION_TO_CHOOSE = element(by.xpath(`//optgroup[@label='Latest']`
                                      + `//option[@label='v${this.VERSION}']`));
    }
}

module.exports = AngularJsWebsiteElements;