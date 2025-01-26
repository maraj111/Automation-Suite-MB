import { Locator, Page } from '@playwright/test';

export class AdminPage {
  private page: Page;
  private usernameInput = '#username';
  private passwordInput = '#password';
  private submitButton = 'button[type="submit"]';
  private frontPageLink = 'a[href="/"]';
  private logoutLink = 'a[href="/logout"]';
  public roomName = '#roomName100';
  public deleteRoom = '#room13 > div:nth-child(6)';
  
  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://automationintesting.online/');
    await this.page.getByRole('link', { name: 'admin panel', exact: true }).click();
  }

  /*async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async submit() {
    await this.page.click(this.submitButton);
  }*/

  async loginAdmin(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.submitButton);
  }

  async isFrontPageLinkVisible() {
    await this.page.waitForSelector(this.frontPageLink);
  }

  async isLogoutLinkVisible() {
    await this.page.waitForSelector(this.logoutLink);
  }

  async isRoomNameVisible() {
    await this.page.waitForSelector(this.roomName);
  }
 
  async deleteSelectedRoom() {
    await this.page.waitForSelector(this.deleteRoom);
    await this.page.click(this.deleteRoom);
  }
}
