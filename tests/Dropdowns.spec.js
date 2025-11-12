const {test, expect}= require('@playwright/test');

test('UI controls', async ({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

        const userName= page.locator('#username');
        const signIn= page.locator('#signInBtn');
        const dropdown= page.locator("select.form-control");
        await dropdown.selectOption("consult");
       // await page.pause();
        await page.locator('.radiotextsty').last().click();
        await page.locator('#okayBtn').click();

        //Assertion
        console.log(page.locator('.radiotextsty').last().isChecked());
        await expect(page.locator('.radiotextsty').last()).toBeChecked();

        await page.locator('#terms').click();
        await expect(page.locator('#terms')).toBeChecked();

        await page.locator('#terms').uncheck();
        expect(await page.locator('#terms').isChecked()).toBeFalsy();
        //expect(await page.locator('#terms').isChecked()).toBeTruthy();

        const locat= page.locator('.blinkingText');
        await expect(locat).toHaveAttribute("class","blinkingText");
       
    });


    test('Child Window Handle', async ({browser})=>
        {
            const context= await browser.newContext();   
            const page= await context.newPage();

            const userName= page.locator('#username');
            await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
            const locat= page.locator('.blinkingText');


            const [newPage]= await Promise.all([ 
                context.waitForEvent('page'), //listen for any new page pending, rejected, fulfilled
                locat.click(),
            ])  //new page is opened

            const text= await newPage.locator(".red").textContent();
            console.log(text);

            const arrayText= text.split("@");
            const domain= arrayText[1].split(" ")[0];
            console.log(domain);
            
            await userName.fill(domain);
            await page.pause();
            console.log(await userName.textContent());

    
            
               
        });

