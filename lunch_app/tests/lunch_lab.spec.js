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

  test("Verify search feature when no data", async () => {
    
    await loginPage.haveAdmin();
    //expect(this.page).toHaveTitle("Lunch App");
    //await mainPage.toHaveAdmin();
    //await mainPage.gotoSettings();
  });
})
