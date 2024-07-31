import { Key } from 'webdriverio'

describe('Broswer Methods', () => {
    it('Navigation', async () => {
        await browser.url("https://webdriver.io/")
        // await browser.pause(3000)
        // browser.refresh()
        // await browser.pause(3000)
        // (await $("//a[text()='API']")).click()
        // await browser.pause(3000)
        // await browser.back()
        // await browser.pause(3000)
        // await browser.forward()
        // await browser.pause(3000)
        // //        await browser.fullscreenWindow()
        // await browser.pause(3000)
        // await browser.newWindow("https://www.instagram.com/")
        await browser.fullscreenWindow()
        await browser.pause(3000)
        await browser.keys(Key.Escape)
        await browser.pause(5000)
    })
})