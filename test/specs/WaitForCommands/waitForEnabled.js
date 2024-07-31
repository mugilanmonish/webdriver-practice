describe('Commands',()=>{
    it('witforenable',async ()=>{
        await browser.url('file:///C:/Users/Mugilan/Desktop/enable_disable.html')
        const ele = await $('#hiddenButton')
        await ele.waitForDisplayed({timeout:7000})
        console.log(`**************${await ele.getText()}*****************`);
        const notEnable = await $('#delayedButton')
        console.log(`**********************************************************************************`);
        await notEnable.waitForEnabled({timeout:20000})
        console.log(`***************************${await notEnable.getProperty('id')}********************************`);
    })
})