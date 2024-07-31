describe('Get Color',()=>{
    it('Insta Login Button',async ()=>{
        await browser.url("https://www.facebook.com/")
        const ele = await $("//button[text()='Log in']")
        const bgColor = await ele.getCSSProperty("background-color")
        console.log(`Rgb color ${bgColor}`);
        const rgb2hex = bgColor.parsed.hex.toString()
        console.log(`Hexadecimal value ${rgb2hex}`);
    })
})