describe('Flipkart',()=>{
    it('Suggestion Click',async ()=>{
        await browser.url("https://flipkart.com/")
        await browser.maximizeWindow()
        await $("//input[@name='q']").setValue("jbl")
        await browser.pause(5000)
        const list = await $$("//a[@class='oleBil']")
        for (const key in list) {
            if (key==2) {
                list[key].click()
                break
            }
        }
        await browser.pause(5000)
    })
})