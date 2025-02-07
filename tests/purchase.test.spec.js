
import { Browser, Builder, WebDriver } from "selenium-webdriver";
import { expect } from "chai";
import { PurchasePage } from "../pages/purchase.page.js";

describe("Purchase Test", function () {
    /** @type {WebDriver} */
    let driver;
    let purchasePage;

    beforeEach(async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        purchasePage = new PurchasePage (driver);
        await driver.get("https://www.saucedemo.com");
        await driver.manage().window().maximize();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("Test 3: Purchase of products", async function () {

        await purchasePage.loginToPurchasePage("standard_user", "secret_sauce");

        expect(await purchasePage.getProductsPageTitle()).to.equal("Products");
        await purchasePage.addBackpackItemToCart();
        await purchasePage.addBikelightItemToCart();
        expect(await purchasePage.checkItemsCount()).to.equal("2"); 
        await purchasePage.clickOnShoppingCartButton();
        expect(await purchasePage.getYourCartPageTitle()).to.equal("Your Cart");
        expect(await purchasePage.checkIfsBackpackItemIsAdded()).to.equal("Sauce Labs Backpack");
        expect(await purchasePage.checkIfBikelightItemIsAdded()).to.equal("Sauce Bike Light");
        await purchasePage.clickOnCheckoutButton();

        expect(await purchasePage.getCheckoutYourInformationPageTitle()).to.equal("Checkout: Your Information");
        await purchasePage.enterFirstName("Amra");
        await purchasePage.enterLastName("Dzihic");
        await purchasePage.enterPostalCode(71000);
        await purchasePage.clickOnContinueButton();

        expect(await purchasePage.getCheckoutOverviewPageTitle()).to.equal("Checkout: Overview");

        expect(await purchasePage.getCheckoutCompletePageTitle()).to.equal("Checkout: Complete!");
       
        await purchasePage.clickOnMenuButton();
        
        await purchasePage.clickOnLogoutLink();

        await purchasePage.getLoginPageTitle();
    });
})
