import { Key } from "webdriverio";

describe('Keys',()=>{
    it('Copy & Paste ',async()=>{
       await browser.url("https://demoapps.qspiders.com/ui")
       await $("//input[@id='name']").setValue("Mugilan")
       await browser.keys([Key.Ctrl,'a'])
 //      await  browser.pause(2000)
       await browser.keys([Key.Ctrl,'x'])
 //      await  browser.pause(2000)
       await browser.keys(Key.Tab)
 //      await  browser.pause(2000)
       const password = await $("//input[@id='email']")
//       await  browser.pause(2000)
       password.click()
  //     await  browser.pause(2000)
       await browser.keys([Key.Ctrl,'v'])
 //      await  browser.pause(2000)
       await browser.keys([Key.Ctrl,'a'])
       await  browser.pause(2000)
       await browser.keys([Key.Delete])
       await  browser.pause(2000)
    })
})