import LoginPage from "../pageobjects/loginPage.js"
import fs from "fs"

let data =fs.readFileSync("./test/resource/data.json")
let credentials = JSON.parse(data)

let un = credentials.unm;
let pwd = credentials.pwd;
console.log(`Username is ${un}`);
console.log(`Password is ${pwd}`);
describe('',()=>{
    it('',async ()=>{
        await browser.url("https://practicetestautomation.com/practice-test-login/")
        await LoginPage.loginFunction(un,pwd);
    })
})