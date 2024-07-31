import { Key } from 'webdriverio'

describe("flipkart", () => {
    it("launch the application", async () => {
        await browser.url("https://flipkart.com/")
        await browser.maximizeWindow()
        const title = await browser.getTitle();
        await expect(title).toBe('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
        await browser.$("//a[text()='Cart']").click()
        await browser.back()
        const searchBar = await browser.$("//input[@name='q']")
        console.log(typeof searchBar);
        await searchBar.setValue("Iphone")
        await browser.keys(Key.Enter)
        const iphoneList = await $$("//div[contains(text(),'Apple iPhone') and @class='KzDlHZ']");
        console.log(typeof iphoneList);
        iphoneList.forEach(element => {
            console.log(element.getText());
        })
        await browser.minimizeWindow()
    })
})