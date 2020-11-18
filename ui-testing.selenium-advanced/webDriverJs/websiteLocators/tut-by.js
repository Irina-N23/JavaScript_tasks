"use strict";

const {By} = require('selenium-webdriver');

class TutBy {
    constructor() {
        this.HOME_URL = "https://www.tut.by/";
        this.FINANCE_URL = "https://finance.tut.by/";

        this.CALCULATORS_BUTTON = By.css("#nav-more-calc > a");
        this.CURRENCY_CONVERTER_LINK = By.xpath("//td/a[text()='Конвертер"
                                                + " валют']");
        this.CURRENCY_CONVERTER_HEADER = By.css("h1");
        this.ADD_CURRENCY_BUTTON = By.xpath("//span[text()='Добавить валюту']");
        this.CURRENCY_INPUT_FIELD = By.xpath("//div[contains(@class,'dropup "
                                             + "open')]//input[contains(@class,"
                                             + "'form')]");
        this.CHF_BUTTON = By.css("#select_currency_CHF > div > button");
        this.CHF_INPUT_FIELD = By.name("input7");
        this.BYN_INPUT_FIELD = By.xpath("//div[@class='input-holder CWA']"
                                        + "//span[@class='i-p custom_i-r']");
    }
}

module.exports = TutBy;