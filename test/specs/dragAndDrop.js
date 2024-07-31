describe('Broswer Methods', () => {
    it('Navigation', async () => {
        await browser.url("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=1")
        await browser.maximizeWindow()
        await browser.pause(5000)
        let source = await $("//div[text()='Mobile Charger']")
        let target = await $("//div[contains(text(),'Mobile Accessories')]/parent::div")
        const xAxis = await target.getWindowRect().x
        const yAxis = await target.getWindowRect().y;
        source.dragAndDrop({xAxis,yAxis})
        await browser.pause(5000)
    })
})