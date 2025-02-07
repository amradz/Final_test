import { By, until, WebDriver } from 'selenium-webdriver';

class ProductPage {
    constructor(driver) {
        /** @type {WebDriver} */
        this.driver = driver;
        this.usernameField = By.id("user-name");
        this.passwordField= By.id("password");
        this.loginButton = By.id("login-button"); 
        this.productsPage = By.className("title");
        this.addBackpackItem = By.id("add-to-cart-sauce-labs-backpack");
        this.addBikelightItem = By.id("add-to-cart-sauce-labs-bike-light");
        this.itemsCount = By.className("shopping_cart_badge");
        this.shoppingCartLink = By.className("shopping_cart_link");
        this.yourCartPage = By.className("title");
        this.checkBackpackItem = By.xpath("//div[text()='Sauce Labs Backpack']");
        this.checkBikelightItem = By.xpath("//div[text()='Sauce Bike Light']");
        this.checkoutButton = By.id("checkout");
        this.checkoutYourInformationPage = By.className("title");
        this.firstNameField = By.id("first-name");
        this.lastNameField = By.id("last-name");
        this.postalCodeField = By.id("postal-code");
        this.continueButton = By.id("continue");
        this.checkoutOverviewPage = By.className("title");
        this.finishButton = By.id("finish");
        this.checkoutCompletePage = By.className("title");
        this.menuButton = By.id("react-burger-menu-btn");
        this.logoutLink = By.id("logout_sidebar_link");
    }
    async enterUsername(username) {
        let usernameField = await this.driver.wait(until.elementLocated(this.usernameField), 10000);
        await this.driver.wait(until.elementIsVisible(usernameField));
        await usernameField.click();
        await usernameField.clear();
        await usernameField.sendKeys(username);
    }

    async enterPassword(password) {
        let passwordField = await this.driver.findElement(this.passwordField);
        await this.driver.wait(until.elementIsVisible(passwordField));
        await passwordField.click();
        await passwordField.clear();
        await passwordField.sendKeys(password);
    }

    async clickOnLoginButton() {
        let loginButton = await this.driver.findElement(this.loginButton);
        await loginButton.click();
    }

    async loginToLoginPage(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickOnLoginButton();
    }

    async getProductsPageTitle() {
        let pageTitle = await this.driver.findElement(this.productsPage);
        return pageTitle.getText();
    }

    async addBackpackItemToCart() {
        let addBackpackItem = await this.driver.findElement(this.addBackpackItem);
        await addBackpackItem.click();
    }

    async addBikelightItemToCart() {
        let addBikelightItem = await this.driver.findElement(this.addBikelightItem);
        await addBikelightItem.click();
    }

    async checkItemsCount() {
        let itemsCount = await this.driver.findElement(this.itemsCount);
        return itemsCount.getText();
    }

    async clickOnShoppingCartButton() {
        let shoppingCartLink = await this.driver.findElement(this.shoppingCartLink);
        await shoppingCartLink.click();
    }

    async getYourCartPageTitle() {
        let pageTitle = await this.driver.findElement(this.yourCartPage);
        return pageTitle.getText();
    }

    async checkIfBackpackItemIsAdded() {
        let backpackTitle = await this.driver.findElement(this.checkBackpackItem);
        return backpackTitle.getText();
    }

    async checkIfBikelightItemIsAdded() {
        let bikelightTitle = await this.driver.findElement(this.checkBikelightItem);
        return bikelightTitle.getText();
    }

    async clickOnCheckoutButton() {
        let checkoutButton = await this.driver.findElement(this.checkoutButton);
        await checkoutButton.click();
    }

    async getCheckoutYourInformationPageTitle() {
        let pageTitle = await this.driver.findElement(this.checkoutYourInformationPage);
        return pageTitle.getText();
    }

    async enterFirstName(firstName) {
        let firstNameField = await this.driver.wait(until.elementLocated(this.firstNameField), 10000);
        await this.driver.wait(until.elementIsVisible(firstNameField));
        await firstNameField.click();
        await firstNameField.clear();
        await firstNameField.sendKeys(firstName);
    }

    async enterLastName(lastName) {
        let lastNameField = await this.driver.findElement(this.lastNameField);
        await this.driver.wait(until.elementIsVisible(lastNameField));
        await lastNameField.click();
        await lastNameField.clear();
        await lastNameField.sendKeys(lastName);
    }

    async enterPostalCode(postalCode) {
        let postalCodeField = await this.driver.findElement(this.postalCodeField);
        await this.driver.wait(until.elementIsVisible(postalCodeField));
        await postalCodeField.click();
        await postalCodeField.clear();
        await postalCodeField.sendKeys(postalCode);
    }

    async clickOnContinueButton() {
        let continueButton = await this.driver.findElement(this.continueButton);
        await continueButton.click();
    }

    async getCheckoutOverviewPageTitle() {
        let pageTitle = await this.driver.findElement(this.checkoutOverviewPage);
        return pageTitle.getText();
    }

    async clickOnFinishButton() {
        let finishButton = await this.driver.findElement(this.finishButton);
        await finishButton.click();
    }

    async getCheckoutCompletePageTitle() {
        let pageTitle = await this.driver.findElement(this.checkoutCompletePage);
        return pageTitle.getText();
    }

    async clickOnMenuButton() {
        let menuButton = await this.driver.findElement(this.menuButton);
        await menuButton.click();
    }

    async clickOnLogoutLink() {
        let logoutLink = await this.driver.findElement(this.logoutLink);
        await this.driver.wait(until.elementIsVisible(logoutLink));
        await logoutLink.click();
    }

    async getLoginPageTitle() {
        let loginButton = await this.driver.wait(until.elementLocated(this.loginButton), 10000);
        await this.driver.wait(until.elementIsVisible(loginButton));
    }
}


export { ProductPage };