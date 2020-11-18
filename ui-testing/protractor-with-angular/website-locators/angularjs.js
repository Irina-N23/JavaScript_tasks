"use strict";

class AngularJsWebsiteElements {
    constructor() {
        this.HOME_URL = "https://angularjs.org/";

        this.LEARN_BUTTON = element(by.xpath("//a[text()='Learn']"));
        this.TUTORIAL_BUTTON = element(by.xpath("//a[text()='Tutorial']"));
        this.SEARCH_FIELD = element(by.model('q'));
        this.SEARCH_RESULT_PAGE = element(by.linkText("ngBindHtml"));
        this.HIDE_BUTTON = element(by.xpath("//button[text()='Hide']"));
        this.SHOW_BUTTON = element(by.xpath("//button[text()='Show']"));
        this.VERSION_DROPDOWN = element(by.model("$ctrl.selectedVersion"));
        this.VERSION = "1.6.10";
        this.VERSION_TO_CHOOSE = element(by.xpath(`//optgroup[@label='Latest']`
                                      + `//option[@label='v${this.VERSION}']`));
    }
}

module.exports = AngularJsWebsiteElements;