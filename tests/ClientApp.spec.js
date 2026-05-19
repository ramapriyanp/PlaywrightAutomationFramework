const {test, expect} = require('@playwright/test');

// test('First PlayWright Test', async ()=>
// {

// });

test('First PlayWright Test', async({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator('#username').fill("test");
    await page.locator('#password').fill("test"); 
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());

    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    
});

test('Login Test', async ({page})=>
{
    const username = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const errorMsg = page.locator("[style*='block']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await username.fill("test");
    await password.fill("test");
    await signInBtn.click();
    console.log(await errorMsg.textContent());
    await expect(errorMsg).toContainText('Incorrect');
    

    await username.fill("");
    await password.fill("");
    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await signInBtn.click();
    console.log(await page.locator('.card-body a').nth(0).textContent());
    console.log(await page.locator('.card-body a').allTextContents());

});

test('@Web Register and Login Test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    const registerBtn = page.locator('.btn1');
    const firstName = page.locator('#firstName');
    const lastName = page.locator('#lastName');
    const email = page.locator('#userEmail');
    const mobile = page.locator('#userMobile');
    const password = page.locator('#userPassword');
    const confirmPassword = page.locator('#confirmPassword');
    const ageCheckBox = page.locator("input[type='checkbox']");
    const register = page.locator("[value='Register']");
    const regLoginBtn = page.locator('.btn.btn-primary');
    // const login = page.locator('#login');
    const login = page.locator("[value='Login']");
    const products = page.locator('.card-body b');

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    // await registerBtn.click();
    // await firstName.fill("Testfirst");
    // await lastName.fill("Testlast");
    await email.fill("testfl3@gmail.com");
    // await mobile.fill("1234567890");
    await password.fill("Welcome11*");
    // await confirmPassword.fill("Welcome11*");
    // await ageCheckBox.click();
    // await register.click();
    // await regLoginBtn.click();

    await email.fill("testfl3@gmail.com");
    await password.fill("Welcome11*");
    await login.click();
    await page.waitForLoadState('networkidle');
    // await products.first().waitFor();
    // await expect(page.locator(".card-body")).toBeVisible();
    console.log(await products.allTextContents());
});

test('UI Controls', async ({page})=>
{
    const userName = page.locator('#username');
    const passWord = page.locator('#password');
    const dropDown = page.locator('select.form-control')
    const radioBtn = page.locator('.checkmark');
    const okayBtn = page.locator('#okayBtn');
    const checkBox = page.locator('#terms');
    const materialLink = page.locator('[href*="documents-request"]');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await dropDown.selectOption('consult');
    await radioBtn.nth(1).click();
    console.log(await radioBtn.nth(1).isChecked());
    await expect(radioBtn.nth(1)).toBeChecked();
    await okayBtn.click();
    await checkBox.click();
    console.log(checkBox.isChecked());
    await expect(checkBox).toBeChecked();
    await checkBox.uncheck();
    expect (await checkBox.isChecked()).toBeFalsy();
    await expect(materialLink).toHaveAttribute("class", "blinkingText");

    

    

    

    // await page.pause();




});

test('Handling Child Windows', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const materialLink = page.locator('[href*="documents-request"]');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // switching o child tab
    const [newPage] = await Promise.all(
    [context.waitForEvent('page'),
    materialLink.click(),])

    const text = await newPage.locator('.red').textContent();
    console.log(text); 

    const domain = text.split('@')[1].split(' ')[0];
    console.log(domain);

    // switch to paren window
    await page.locator('#username').fill(domain);
    console.log(await page.locator('#username').inputValue());

}
);

test('End to End Test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    const email = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    // const login = page.locator('#login');
    const login = page.locator("[value='Login']");
    const products = page.locator('.card-body b');
    const prodName = "ZARA COAT 3";
    const product = page.locator('.card-body', { hasText: prodName });
    const addToCartBtn = page.locator('button.w-10');
    const cartBtn = page.locator("[routerlink*='cart']");
    const cartProductName = page.locator('.cartSection h3');
    const checkoutBtn = page.locator('text=Checkout');
    // const cvv = page.locator('text=CVV Code ').locator('input');
    // const nameOnCard = page.locator('text=Name on Card ').locator('input');
    const cvv = page.locator('.input').nth(3);
    const nameOnCard = page.locator('.input').nth(4);
    const couponCode = page.locator('.input').nth(5);
    const applyCouponBtn = page.locator('button[type="submit"]');
    const couponMsg = page.locator('text="* Coupon Applied"');
    const shippingEmail = page.locator('.user__name [type="text"]').nth(0);
    const shippingCountry = page.locator('input[placeholder="Select Country"]');
    // const dropdown = page.locator('.ta-results');
    

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await email.fill("testfl3@gmail.com");
    await password.fill("Welcome11*");
    await login.click();
    await page.waitForLoadState('networkidle');
    // await products.first().waitFor();
    // await expect(page.locator(".card-body")).toBeVisible();
    console.log(await products.allTextContents());
    await product.locator(addToCartBtn).click();
    await cartBtn.click();
    // await page.waitForLoadState('networkidle');
    expect (await cartProductName.textContent()).toContain(prodName);
    console.log(await cartProductName.textContent());
    await checkoutBtn.click();
    await cvv.fill("123");
    await nameOnCard.fill("John Doe");
    await couponCode.fill("rahulshettyacademy");
    await applyCouponBtn.click();
    expect(await couponMsg.textContent()).toContain("* Coupon Applied");
    expect(await shippingEmail.textContent()).toContain("testfl3@gmail.com");
    // await shippingCountry.fill("ind");
    // await page.locator('.ta-results button', { hasText: 'India' }).click();

    await shippingCountry.fill("ind");
const dropdown = page.locator(".ta-results");
   await dropdown.first().waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }



//     await shippingCountry.fill("ind");
// await page.locator('.ta-results button', { hasText: 'India' }).click();
    // await dropdown.waitFor();
    // const dropdownCount = await dropdown.locator('button').count();
    // dropdown.first().waitFor();
    // await dropdown.locator('button', { hasText: "India" }).click();
    // for (let i=0; i<dropdownCount; i++)
    // {
    //     const text = await dropdown.locator('button').nth(i).textContent();
    //     if (text === "India")
    //     {
    //         await dropdown.locator('button').nth(i).click();
    //         break;
    //     }
    // }
    await page.pause();
});