import { expect } from "@playwright/test";

export class MainPage {
  
  constructor(page) {
    this.page = page;
  }

  async gotoSettings() {
    await this.page.locator('a.v-list__tile.v-list__tile--link.theme--light >> text="Settings"').waitFor();
    await this.page.locator('a.v-list__tile.v-list__tile--link.theme--light >> text="Settings"').click();
    await this.page.locator(`.v-select__selection v-select__selection--comma >> text="Vilnius"`).click();
  }

  async gotoEdit() {
    await this.page.locator('a.v-list__tile.v-list__tile--link.theme--light >> text="Lunch Editing"').click();
    await this.page.locator('input[aria-label="Selected Date"]').click();
    await this.page.click('button:has-text("30")');
    await page.hover('button.v-btn.v-btn--floating.theme--dark.primary');
  }

  async addDishToCart(dishName) {

    let dishLocator = this.page.locator('.v-card_text overflow-wrap >> text="Blynai"');
    await dishLocator.waitFor();
    await dishLocator.click();
  }

  async isDishInCart(dishName) {
    let cartItemLocator = this.page.locator('.v-card_text overflow-wrap >> break-word="Blynai"');
    await cartItemLocator.isVisible(); 
  }
}
