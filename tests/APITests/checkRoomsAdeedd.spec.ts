import {test, expect} from '@playwright/test';
import {gotoSandbox} from 'playwright-sandbox/dist/PlaywrightSandbox';
import {AdminPage} from '../../pages/AdminPage';
/*Created By Mamta 
Make sure run after addRoomsByAdmin class and within 10 minutes as website will be reloaded after every 10 minutes.
*/
test('Check if rooms are added', async ({page}) => {     
  await gotoSandbox(page, 'LOGIN_FORM');
  const adminPage = new AdminPage(page); 
  await adminPage.open();
  await adminPage.loginAdmin("admin", "password");
  await expect(page.locator('#roomName100')).toBeVisible();
  await expect(page.locator('#roomName500')).toBeVisible();
  await expect(page.locator('#roomName105')).toBeVisible();
     
});