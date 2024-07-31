describe('Dropdwon',()=>{
    it('All methods',async ()=>{
        await browser.url("https://demoapps.qspiders.com/ui/dropdown")
        await browser.$("//select[@id='select3']").selectByAttribute("value","India")
//        await browser.pause(3000)
        await browser.$("//select[@id='select5']").selectByIndex(1)
        const getValueText = await browser.$("//select[@id='select5']").getValue()
        console.log(`Selected Value ${getValueText}`)
        await browser.pause(3000)
        await browser.$("//label[@for='cities']/following-sibling::select[not(contains(@id,'select2'))]").selectByVisibleText("Kendujhar")
    })
})