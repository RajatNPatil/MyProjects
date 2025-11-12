const {test, expect}= require('@playwright/test');

test('Client app test', async ({page})=>
    {
        //creds for login-> username: Rajatp@gmail.com password: Raja@123

        const prodName= 'ZARA COAT 3';
        const products= page.locator('.card-body');
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
        await page.locator('#userEmail').fill('Rajatp@gmail.com');
        await page.locator('#userPassword').fill('Raja@123');
        await page.locator('#login').click();

        //await page.waitForLoadState('networkidle');
        await page.locator('.card-body b').first().waitFor();
        const alltitles= await page.locator('.card-body b').allTextContents();
        console.log(alltitles);

        //select zara coat 3 and add to cart    
        const count= await products.count();
        for(let i=0; i<count; ++i)
        {
            if(await products.nth(i).locator("b").textContent()===prodName)
            {
                //add product to cart
                await products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }

        await page.locator("[routerlink*='cart']").click();
        await page.locator("div li").first().waitFor();
        const bool= page.locator('h3:has-text("ZARA COAT 3")').isVisible();
        expect(bool).toBeTruthy();
        await page.locator('text=Checkout').click();
        await page.locator("[placeholder*='Country']").pressSequentially("ind");
        const dropdown= page.locator(".ta-results");
        await dropdown.waitFor();
        const optionsCount = await dropdown.locator("button").count();

        for(let i=0; i<optionsCount; ++i)
        {
            const text= await dropdown.locator("button").nth(i).textContent();
            if(text=== " India")
            {
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }
        



        
    });


