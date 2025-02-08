import { Browser, Builder, WebDrive } from "selenium-webdriver";
import { expect } from "chai";
import { LoginPage } from "../pages/login.page.js";

describe("Login Tests", function() {
    /** @type {WebDriver} */
    let driver;
    let loginPage;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        loginPage = new LoginPage(driver);  // Initialize the login page here
        await driver.get("https://www.saucedemo.com");
        await driver.manage().window().maximize();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("Test 1: Login without credentials", async function() {
        await loginPage.clickOnLoginButton();
        await loginPage.login('', '');
        
        // Verifikacija
        expect(await loginPage.getErrorMessage()).to.equal("Epic sadface: Username is required");
        
        // Zatvaranje error poruke
        await loginPage.clickOnCloseErrorMessage();
        let errorIsVisible = await loginPage.errorMessage.isDisplayed();
        expect(errorIsVisible).to.equal(false);
    });

    it("Login with wrong password", async function() {
        await loginPage.open();
        await loginPage.login("standard_user", "pogresnaSifra");
        
        // Verifikacija
        let errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).to.equal("Epic sadface: Username and password do not match any user in this service");
        
        // Zatvaranje error poruke
        await loginPage.closeErrorMessage();
        let errorIsVisible = await loginPage.errorMessage.isDisplayed();
        expect(errorIsVisible).to.equal(false);
    });
});