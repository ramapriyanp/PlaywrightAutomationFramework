const { Before, After, BeforeStep, AfterStep, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const playwright = require('@playwright/test');
const {POManager} = require('../../pageObjects/POManager');
const path = require("node:path");





Before(async function () {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);

});

After(async function () {
    console.log("Test execution completed");
});

BeforeStep(async function () {
    console.log("Before Step");
});

AfterStep(async function (result) {
    console.log("After Step");
    if (result.result.status === 'FAILED') {
        const screenshot = await this.page.screenshot({ path: 'screenshot1.png' });

    }
});

BeforeAll(async function () {
    console.log("Before all tests");
});

AfterAll(async function () {
    console.log("After all tests");
});