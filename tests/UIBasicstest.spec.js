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


test('Page PlayWright Test', async ({page})=>
{   
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});
