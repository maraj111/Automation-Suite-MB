import {test, expect} from '@playwright/test';
import {gotoSandbox} from 'playwright-sandbox/dist/PlaywrightSandbox';
import {AdminPage} from '../../pages/AdminPage';
/*Created By Mamta 
There is no updating facility available so unable to test this.
Workaround available to delete and add new rooms.
*/
test('Check if rooms are added', async ({page}) => {     
  await gotoSandbox(page, 'LOGIN_FORM');
  const adminPage = new AdminPage(page); 
  await adminPage.open();
  await adminPage.loginAdmin("admin", "password");
  await expect(page.locator('#roomName100')).toBeVisible();
  
});