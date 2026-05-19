const {Given, When, Then} = require('@cucumber/cucumber');
const assert = require('assert');
const expect = require('@playwright/test');
const playwright = require('@playwright/test');
const {POManager} = require('../../pageObjects/POManager');


Given('a login to Ecommerce application with {string} and {string}', 
    {timeout: 1000000}, async function (username, password) {
           // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
    // const browser = await playwright.chromium.launch({ headless: false });
    // const context = await browser.newContext();
    // const page = await context.newPage();
    // this.poManager = new POManager(page);
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goToLandingPage();
    await loginPage.validLogin(username, password);

});

When('add {string} to cart', {timeout: 1000000}, async function (prodName) {
           // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
        const dashboardpage = this.poManager.getDashboardPage();
        await dashboardpage.searchProductAddToCart(prodName);
        await dashboardpage.navigateToCart();
         });

Then('verify {string} is displayed in the cart', {timeout: 1000000}, async function (prodName) {
           // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
        const cartPage = this.poManager.getCartPage();
        await cartPage.verifyProductNameInCart(prodName);
        await cartPage.clickCheckout();
         });
         
Then('Enter valid details and place the order', {timeout: 1000000}, async function () {
           // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
        const orderReview = this.poManager.getOrderReview();
        const cvv="123";
        const nameOnCard = "John Doe";
        const couponCode = "rahulshettyacademy";
        const country = "Ind";
        const username = 'testfl3@gmail.com';
        await orderReview.fillPaymentDetails(cvv, nameOnCard, couponCode, username, country);
         });       