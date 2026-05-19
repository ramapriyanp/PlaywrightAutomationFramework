const {expect} = require('@playwright/test');
class CartPage {
    constructor(page) {
        this.page = page;
        this.cartProductName = page.locator('.cartSection h3');
        this.checkoutBtn = page.locator('text=Checkout');
    }

    async verifyProductNameInCart(prodname) {
        expect (await this.cartProductName.textContent()).toContain(prodname);
    }

    async clickCheckout() {
        await this.checkoutBtn.click();
    }
}

module.exports = {CartPage};