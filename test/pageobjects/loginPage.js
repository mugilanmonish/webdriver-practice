class LoginPage {
    get userrname() { return $("//input[@id='username']") }

    get password() { return $("//input[@id='password']") }

    get submitButton() { return $("//button[@id='submit']") }

    async loginFunction(uname,pass) {
        await this.userrname.setValue(uname)
        await this.password.setValue(pass)
        await this.submitButton.click()
    }
}
export default new LoginPage();