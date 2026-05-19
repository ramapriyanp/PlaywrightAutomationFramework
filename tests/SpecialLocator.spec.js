const {test, expect} = require('@playwright/test');

// test('First PlayWright Test', async ()=>
// {

// });

test('Special Locator Test', async({page}) =>
{
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Employed').click();
    await page.getByLabel('Gender').selectOption('Male');
    await page.getByPlaceholder('Password').fill('test');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByText('Success!The Form has been submitted successfully!').isVisible();
    await page.getByRole('link', { name: 'Shop'}).click();
    console.log(await page.locator('app-card h4 a').allTextContents());
    await page.locator('app-card', {hasText: 'Nokia Edge'}).locator('button').click();  
    await page.pause();
});

