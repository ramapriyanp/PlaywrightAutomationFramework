const {test, expect} = require('@playwright/test');

test('@Web Pop Up validations', async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    // await page.goto('https://google.com');
    // await page.goBack();
    // await page.goForward();
    // await page.locator('#displayed-text').isVisible();
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    page.on('dialog', dialog => dialog.accept());
    // to dismiss the alert use dialog.dismiss() instead of dialog.accept()
    // page.on('dialog', dialog => dialog.dismiss());
    await page.locator('#confirmbtn').click();

    await page.locator('#mousehover').hover();
    await page.getByRole('link', {name: 'Top'}).click();

    const framePage = await page.frameLocator('#courses-iframe');
    framePage.getByRole('link', {name: 'All Access Plan'}).click();
    const text = await framePage.locator('.text h2').textContent();
    console.log(text.split(" ")[1]);
    page.locator('#mousehover').hover();
});

test('screenshot & Visual comparison', async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#displayed-text').screenshot({path: 'Fieldscreenshot.png'});
    await page.locator('#hide-textbox').click();
    await page.screenshot({path: 'screenshot.png'});
    await expect(page.locator('#displayed-text')).toBeHidden();
    
})

test('Visual Comparison', async({page})=>
{
    await page.goto('https://www.google.com/');
    expect(await page.screenshot()).toMatchSnapshot('googlesnapshot.png');
    
})