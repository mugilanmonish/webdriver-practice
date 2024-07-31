describe('Wait until title comes',()=>{
    it('wait function',async ()=>{
        await browser.url("https://webdriver.io/")
        await $(`//a[text()='API']`).click()
        await browser.waitUntil(async ()=>{
            return(await browser.getTitle()==='Introduction | WebdriverIO')
        },{
            timeout : 3000,
            timeoutMsg :'Title Is Wrong'
        })
        const apiTitle = await browser.getTitle()
        await expect(apiTitle).toBe('Introduction | WebdriverIO')
    })
})