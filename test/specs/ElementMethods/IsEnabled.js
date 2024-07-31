describe('Textfield Operations',()=>{
    it('isDisplayed',async ()=>{
        await browser.url("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
        browser.maximizeWindow()
        const radioBtn = await $("//input[@name='Manual Testing']")
        if ( await radioBtn.isSelected()) {
            console.log(`Raiobtn is Selected`);
        } else {
            console.log(`Raiobtn is not Selected`);
        }
        const submitBtn = await $("//button[text()='Submit']")
        if ( await submitBtn.isDisplayed()) {
            console.log(`Userid is not Displayed`);
        } else {
            console.log(`Userid is Displayed`);
        }
        
    })   
})