describe(("Google search"), () => {
    it("click 3rd element", async () => {
        await browser.url("https://google.com/")
        await browser.maximizeWindow()
        await $("//textarea[@name='q']").setValue("Javascript")
        await browser.waitUntil(async ()=>{
            return (await $("(//div[@class='wM6W7d' and @role])[last()]").isDisplayed())
        },{
            timeout:10000,
            interval:500,
            timeoutMsg:"Element is not dislayed in 10sec"
        })
        const relist = await $$("//div[@class='wM6W7d' and @role]")
        console.log(`*********************${relist.length}************************`);
        for (const i in relist) {
            if (i == 2) {
                relist[i].click();
            }
        }
    })
})