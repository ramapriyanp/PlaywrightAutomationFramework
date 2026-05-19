const {expect} = require('@playwright/test');
class OrderReview

{
    constructor(page)   {  
        this.page = page;
        this.cvv = page.locator('.input').nth(3);
        this.nameOnCard = page.locator('.input').nth(4);
        this.couponCode = page.locator('.input').nth(5);
        this.applyCouponBtn = page.locator('button[type="submit"]');
        this.couponMsg = page.locator('text="* Coupon Applied"');
        this.shippingEmail = page.locator('.user__name [type="text"]').nth(0);
        this.shippingCountry = page.locator('input[placeholder="Select Country"]');
        // this.countryResults = page.locator('.ta-item');
        this.countryOptions = page.locator('.ta-results button');

    }

    async  fillPaymentDetails(cvv, nameOnCard, couponCode, Email, Country)
    {
        await this.cvv.fill(cvv);
        await this.nameOnCard.fill(nameOnCard);
        await this.couponCode.fill(couponCode);
        await this.applyCouponBtn.click();
        expect(await this.couponMsg.textContent()).toContain("* Coupon Applied");
        expect(await this.shippingEmail.textContent()).toContain(Email);
        await this.shippingCountry.fill(Country);
        // await this.countryOptions
        //     .filter({ hasText: 'India' })
        //     .first()
        //     .click();
    }

}

module.exports = {OrderReview};