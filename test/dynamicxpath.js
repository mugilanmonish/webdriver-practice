import Javascriptutility from "./genricutility/javascriptutility.js";

describe('Redbus', () => {
    it('Dynamic Date', async() => {
        await browser.url("https://www.redbus.in/")
        await $("div[id='onwardCal']").click()
        const xpath = `//span[text()="${Javascriptutility.getDate()}"]`;
        await $(xpath).click();
        await browser.pause(6000)
    })
})