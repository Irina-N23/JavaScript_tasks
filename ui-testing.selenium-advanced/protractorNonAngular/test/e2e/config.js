"use strict";

const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {
    capabilities: {
        "browserName": "chrome"
    },
    specs: ["*.spec.js"],
    framework: "jasmine",
    jasmineNodeOptions: {
        defaultTimeoutInterval: 600000,
        showColors: true,
        print: () => {}
    },
    allScriptsTimeout: 300000,

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().setSize(1920, 1080);

        jasmine.getEnv().addReporter(
            new SpecReporter({
                suite: {
                    displayNumber: true,
                },
                spec: {
                    displaySuccessful: true,
                    displayPending: true,
                    displayDuration: true,
                },
                summary: {
                    displaySuccessful: false,
                    displayFailed: true,
                    displayPending: false,
                    displayDuration: true,
                },
            }),
        );
    }
}