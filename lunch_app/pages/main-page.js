import { expect } from "@playwright/test";

export class MainPage {
  
  constructor(page) {
    this.page = page;
  }

  async gotoSettings() {
    await this.page.locator('a.v-list__tile.v-list__tile--link.theme--light >> text="Settings"').waitFor();
    await this.page.locator('a.v-list__tile.v-list__tile--link.theme--light >> text="Settings"').click();
    //await this.page.locator('a.v-list__tile:has-text("Settings")').click();

    await this.page.locator(`.v-select__selection v-select__selection--comma >> text="Vilnius"`).click();

  }

  async gotoEdit() {
    await this.page.locator('a.v-list__tile.v-list__tile--link.theme--light >> text="Lunch Editing"').click();
  }
}
