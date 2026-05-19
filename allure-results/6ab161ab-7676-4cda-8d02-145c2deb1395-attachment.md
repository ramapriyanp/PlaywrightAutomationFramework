# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> @Web End to End Test
- Location: tests\ClientAppPO.spec.js:164:1

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: locator.click: Test timeout of 50000ms exceeded.
Call log:
  - waiting for locator('.ta-results button').filter({ hasText: 'India' }).first()

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: ZARA COAT 3
      - generic [ref=e34]: $ 11500
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4542 9931 9292 2293
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01" [selected]
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16" [selected]
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30"
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]: "123"
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]: John Doe
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]: rahulshettyacademy
                - paragraph [ref=e73]: "* Coupon Applied"
              - button "Apply Coupon" [ref=e76] [cursor=pointer]
        - generic [ref=e77]:
          - generic [ref=e78]: Shipping Information
          - generic [ref=e80]:
            - generic [ref=e81]: testfl3@gmail.com
            - textbox [ref=e82]: testfl3@gmail.com
            - textbox "Select Country" [active] [ref=e85]: Ind
            - generic [ref=e87] [cursor=pointer]: Place Order
```

# Test source

```ts
  1  | const {expect} = require('@playwright/test');
  2  | class OrderReview
  3  | 
  4  | {
  5  |     constructor(page)   {  
  6  |         this.page = page;
  7  |         this.cvv = page.locator('.input').nth(3);
  8  |         this.nameOnCard = page.locator('.input').nth(4);
  9  |         this.couponCode = page.locator('.input').nth(5);
  10 |         this.applyCouponBtn = page.locator('button[type="submit"]');
  11 |         this.couponMsg = page.locator('text="* Coupon Applied"');
  12 |         this.shippingEmail = page.locator('.user__name [type="text"]').nth(0);
  13 |         this.shippingCountry = page.locator('input[placeholder="Select Country"]');
  14 |         // this.countryResults = page.locator('.ta-item');
  15 |         this.countryOptions = page.locator('.ta-results button');
  16 | 
  17 |     }
  18 | 
  19 |     async  fillPaymentDetails(cvv, nameOnCard, couponCode, Email, Country)
  20 |     {
  21 |         await this.cvv.fill(cvv);
  22 |         await this.nameOnCard.fill(nameOnCard);
  23 |         await this.couponCode.fill(couponCode);
  24 |         await this.applyCouponBtn.click();
  25 |         expect(await this.couponMsg.textContent()).toContain("* Coupon Applied");
  26 |         expect(await this.shippingEmail.textContent()).toContain(Email);
  27 |         await this.shippingCountry.fill(Country);
  28 |         await this.countryOptions
  29 |             .filter({ hasText: 'India' })
  30 |             .first()
> 31 |             .click();
     |              ^ Error: locator.click: Test timeout of 50000ms exceeded.
  32 |     }
  33 | 
  34 | }
  35 | 
  36 | module.exports = {OrderReview};
```