export class MainPage {
  
  constructor(page) {
    this.page = page;
  }

  async toHaveAdmin() {
    await expect(this.page.locator('.v-btn__content')).click();
  }
}
