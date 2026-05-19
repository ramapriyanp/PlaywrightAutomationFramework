class Loginpage{

    constructor(page){
        this.page = page;
        this.signInButton = page.locator("[value='Login']");
        this.username = page.locator('#userEmail');
        this.password = page.locator('#userPassword');

    }

    async goToLandingPage(){
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }

    async validLogin(username, password){
        await this.username.fill(username)
        await this.password.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');
    }

}

module.exports = {Loginpage};