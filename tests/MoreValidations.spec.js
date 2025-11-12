const {test,expect} = require('@playwright/test')

test('Popup validations', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    // await page.goto("https://google.com");
    // await page.goBack();
    // await page.goForward();

    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

   // await page.pause();
    page.on('dialog',dialog => dialog.accept());            //on method gives you to handle events for popups or dialogs
    //page.on('dialog',dialog => dialog.dismiss());         // accept and dismiss are the methods for event
    page.locator('#confirmbtn').click();

    //MouseHover
    await page.locator('#mousehover').hover();

    //iFrame
    const framesPage= page.frameLocator('#courses-iframe');
    framesPage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck= await framesPage.locator('.text h2').textContent();
    console.log(textCheck.split(" ")[1]);






})