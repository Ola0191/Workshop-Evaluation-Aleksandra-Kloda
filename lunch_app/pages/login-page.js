import { expect } from "@playwright/test";

export class LoginPage {
    
    constructor(page) {
        this.page = page;
        this.loginField = page.locator('input[name="email"]');
        this.passwordField = page.locator('input[name="password"]');

      }

      async goto() {
        await this.page.goto("https://lunch.devbstaging.com/login-password");
      }

      async loginStandardUser() {
        await this.loginField.fill("admin7@sft.com");
        await this.passwordField.fill("admin654");
        //await this.loginField.fill("piotr.kosacz@sft.com");
        //await this.passwordField.fill("student338");
        await this.page.locator(".v-btn__content").click();
        //await expect(this.page.locator('.v-btn__content')).click();
        //await expect(this.page.locator('.v-subheader theme--dark')).toHaveText('Admin 7');
      
      }

      async haveAdmin() {
        //await expect(this.page).toHaveTitle("Lunch App");
        await this.page.locator('.v-subheader.theme--dark').waitFor();
        await expect(this.page.locator('.v-subheader.theme--dark')).toHaveText('Admin 7');
      }
}