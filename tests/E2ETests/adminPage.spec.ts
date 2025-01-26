import { test, expect } from '@playwright/test';
import { gotoSandbox } from 'playwright-sandbox/dist/PlaywrightSandbox';
import { AdminPage } from '../../pages/AdminPage';

/*Created By Mamta
check admin page login with right and wrong credentials-use data sets
check admin page logout link is visible after login
For wrong credentials there are no worning messages or timeout/lockout system
Unable to add all detailes for room-for example image,
Admin can use Rooms, Report, Branding functions successfully.
clicking on frontpage taking back to home page 
clicking on mail icon show inquiry form details with usernames, so admin can respond to the inquiry.

*/
test.describe('Admin Page Tests', () => {
  test('login with right credentials', async ({ page }) => {
    await gotoSandbox(page, 'LOGIN_FORM');
    const adminPage = new AdminPage(page);
    await adminPage.open();
    await adminPage.loginAdmin("admin", "password");
    await adminPage.isFrontPageLinkVisible();
    expect (page.url()).toBe('https://automationintesting.online/#/admin');
    expect (page.getByRole('link', { name: 'Logout' })).toBeVisible();
    await page.getByRole('link', { name: 'Logout' }).click(); 
    await page.close();
    
  });

  test('login with wrong credentials', async ({ page }) => {
    await gotoSandbox(page, 'LOGIN_FORM');
    const adminPage = new AdminPage(page);
    await adminPage.open();
    await adminPage.loginAdmin("admin", "nopassword"); 
    expect(page.getByRole('link', { name: 'Logout' })).not.toBeVisible();
    await page.close();
    });
  
});
