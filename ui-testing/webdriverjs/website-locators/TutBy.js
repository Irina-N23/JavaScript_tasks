"use strict";

class TutBy {
    constructor() {
        this.HOME_URL = "https://www.tut.by/";
        this.CALCULATORS_BUTTON = "#nav-more-calc > a";
        this.CURRENCY_CONVERTER_LINK = "//td/a[text()='Конвертер валют']";
        this.CURRENCY_CONVERTER_HEADER = "h1";
        this.ADD_CURRENCY_BUTTON = "//span[text()='Добавить валюту']";
        this.CURRENCY_INPUT_FIELD = "//div[contains(@class,'dropup open')]"
                                           + "//input[contains(@class,'form')]";
        this.CHF_BUTTON = "#select_currency_CHF > div > button";
        this.CHF_INPUT_FIELD = "input7";
        this.BYN_INPUT_FIELD = "//div[@class='input-holder CWA']"
                                            + "//span[@class='i-p custom_i-r']";
    }
}

module.exports = TutBy;