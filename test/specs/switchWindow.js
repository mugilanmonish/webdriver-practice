describe('Switch window',()=>{
    it('New window method',async ()=>{
        await browser.url("https://webdriver.io/")
        await browser.maximizeWindow()
        // open new window
        await browser.pause(1500)
        await browser.newWindow('https://www.instagram.com/')
        // switch back to 1st window
        await browser.pause(1500)
        await browser.switchWindow('mobile automation test framework for Node')
        // again switch to 2nd window
        await browser.pause(1500)
        await browser.switchWindow('Insta')
        await browser.pause(1500)
    })
})