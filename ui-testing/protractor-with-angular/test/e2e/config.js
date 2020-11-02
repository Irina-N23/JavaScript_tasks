"use strict";

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    capabilities: {
        "browserName": "chrome"
    },
    specs: ["*.spec.js"],
    framework: "jasmine",
    jasmineNodeOptions: {
        defaultTimeoutInterval: 600000,
        showColors: true,
        silent: true,
        print: () => {}
    },
    allScriptsTimeout: 300000,

    onPrepare: () => {
        browser.ignoreSynchronization = false;
        browser.manage().window().maximize();

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