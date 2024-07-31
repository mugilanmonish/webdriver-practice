import LoginPage from "../pageobjects/loginPage.js"
import fs from "fs"

let data =fs.readFileSync("./test/resource/data copy.json")
let credentials = JSON.parse(data)

describe('',()=>{
    credentials.forEach(element => {
        let un = element.unm;
        let pwd = element.pwd; 
        it('',async ()=>{
            await browser.url("https://practicetestautomation.com/practice-test-login/")
            await LoginPage.loginFunction(un,pwd);
            await browser.pause(3000)
        })
    });
})