import {  By, until, WebDriver } from "selenium-webdriver";

class LoginPage {
    constructor(driver) {
        /** @type {WebDriver} */
        this.driver = driver;
        this.usernameField = By.id("user-name");
        this.passwordField= By.id("password");
        this.loginButton = By.id("login-button"); 
        this.errorMessage = By.className("error-message-container");
        this.errorButton = By.className("error-button");    
    }

    async enterUsername(username) {
        let usernameField = await this.driver.wait(until.elementLocated(this.usernameField), 10000);
        await this.driver.wait(until.elementIsVisible(usernameField));
        await usernameField.click();
        await usernameField.clear();
        await usernameField.sendKeys(username);
    }

    async enterPassword(password) {
        let passwordField = await this.driver.wait(until.elementLocated(this.usernameField), 10000);
        await this.driver.wait(until.elementIsVisible(usernameField));
        await passwordField.click();
        await passwordField.clear();
        await passwordField.sendKeys(password);
    }

    async clickOnLoginButton() {
        let loginButton = await this.driver.findElement(this.loginButton);
        await loginButton.click();
    }

    async loginPage(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickOnLoginButton();
    }

    async getErrorMessage() {
        let errorMessageIcon = await this.driver.wait(until.elementLocated(this.errorMessage), 10000);
        await this.driver.wait(until.elementIsVisible(errorMessage));
        return await errorMessageIcon.getText();
    }

    async clickOnCloseErrorButton() {
      let errorButton = await this.driver.findElement(this.errorButton);
      await errorButton.click();
}

    async verifyErrorMessageIsNotDisplayed() {
        let errorMessage = await this.driver.findElement(this.errorMessage);
        await this.driver.wait(until.elementIsNotVisible(errorMessage), 10000);
}
    }

export { LoginPage };