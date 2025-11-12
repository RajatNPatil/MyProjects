const {test, expect}= require('@playwright/test');

test('context Playwright Test', async ({browser})=>
    {
        //playwright code
        //chrome- plugins/cookies
        const context= await browser.newContext();   //browser instance
        const page= await context.newPage();
        const userName= page.locator('#username');
        const signIn= page.locator('#signInBtn');
        const cardTitles= page.locator('.card-body a');
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        //get title - assertion
        console.log(await page.title());
        //css
        //methods-> type-> fill
        await userName.fill("rahulshetty");
        await page.locator('#password').fill("learning"); 
        await signIn.click();
        //wait until this locator shown up page
       console.log( await page.locator("[style*='block']").textContent());
       //assertion
       await expect(page.locator("[style*='block']")).toContainText('Incorrect');

       //type - fill
       await userName.fill("");
       await userName.fill("rahulshettyacademy")
       await signIn.click();

    //    console.log(await cardTitles.first().textContent());
    //    console.log(await cardTitles.nth(2).textContent());
       const allTitles= await cardTitles.allTextContents();
       console.log(allTitles);
        
    });

test('Browser context Playwright Test', async ({browser})=>
{
    //playwright code
    //chrome- plugins/cookies
    const context= await browser.newContext();   //browser instance
    const page= await context.newPage();
    await page.goto("https://sso.teachable.com/secure/9521/identity/login/password?force=true");
    //get title - assertion
    console.log(await page.title());
    //css
    //methods-> type-> fill
    await page.locator('#email').fill("rahulshetty@gmail.com");
    await page.locator('#password').fill("learning"); 
    await page.locator("input[value='Log in']").click();
    //wait until this locator shown up page
   console.log( await page.locator("[style*='block']").textContent());
   //assertion
   await expect(page.locator("[style*='block']")).toContainText('Learning');
    
});


test('Page Playwright Test', async ({page})=>
    {
        await page.goto("https://www.google.com/");
        console.log(await page.title());
        await expect(page).toHaveTitle("Google");
    });

