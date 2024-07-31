describe('Textfield Operations',()=>{
    it('clear',async ()=>{
        await browser.url("https://demo.vtiger.com/vtigercrm/")
        const usernameTxtFld = await $("//input[@id='username']")
    //    await browser.pause(2000)
 //       await usernameTxtFld.clearValue()
        await browser.pause(2000)
        await usernameTxtFld.setValue("Mugilan")
        await browser.pause(4000)
        const valueAtri = await usernameTxtFld.getAttribute("value")
        const usernameTagname = await usernameTxtFld.getTagName()
        console.log(`Username tagname ${usernameTagname}`);
        console.log(`Value Attribute ${valueAtri}`);
        console.log(`Size of the element ${await usernameTxtFld.getSize()}`);
        console.log(`Height of the element ${(await usernameTxtFld.getSize()).height}`);
        console.log(`Width of the element ${(await usernameTxtFld.getSize()).width}`);
        console.log(`Location ${await usernameTxtFld.getLocation()}`);
        console.log(`Location X axis ${(await usernameTxtFld.getLocation()).x}`);
        console.log(`Location Y axis ${(await usernameTxtFld.getLocation()).y}`);
        await browser.setWindowSize(500,700)
        await browser.pause(3000)
        console.log("Resized new size "+await browser.getWindowSize());
    })   
})