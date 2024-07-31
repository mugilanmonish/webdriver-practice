describe('JS POPUP', () => {
    it('Accept and Dismiss', async () => {
        await browser.url("file:///C:/Users/Mugilan/Desktop/Popup.html")
        // await browser.pause(4000)
        await $("//button[text()='Show Alert']").click()
        console.log(`Alert Text ${await browser.getAlertText()}`);
        await browser.dismissAlert()
        await browser.acceptAlert();
        await $("//button[text()='Show Prompt']").click()
        await browser.pause(2000)
   //     await browser.sendAlertText('mugilan')
        await browser.pause(3000)
        await browser.acceptAlert()
        await browser.acceptAlert()
        await browser.sendAlertText
        await browser.pause(3000)
    })
})