describe('PROMPT js POPUP',()=>{
    it('demo apps prompt', async () => {
        await browser.url("https://demoapps.qspiders.com/ui/alert/prompt?sublist=2")
        await $("//button[@id='buttonAlert1']").click()
        await browser.pause(3000)
        await browser.sendAlertText('Mugilan')
        await browser.pause(3000)
        await browser.acceptAlert()
        await browser.dismissAlert()
        await browser.pause(3000)
        let a = await $("//button[@id='buttonAlert1']");
    })
})