import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { MainPage } from "../pages/main-page";


test.describe("Lunch page tests", () => {

  let loginPage;
  let mainPage;

  test.beforeEach(async ({ page }) =>{
    loginPage = new LoginPage(page);
    mainPage = new MainPage(page);
    await loginPage.goto();
    await loginPage.loginStandardUser();

  });

  test("Try to add a lunch as an admin", async () => {
    
    await loginPage.isAdmin();
    await mainPage.gotoEdit();

  });

  test("Verify add the dish", async () => {
    let dishName = 'Blynai';
    await mainPage.addDishToCart(dishName);
    let isInCart = await mainPage.isDishInCart(dishName);
    expect(isInCart).toBe(true);
  })
})
