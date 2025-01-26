/*Created By Mamta 
Admin can delete the rooms.
*/
import {test, expect} from '@playwright/test';
import {gotoSandbox} from 'playwright-sandbox/dist/PlaywrightSandbox';
import {AdminPage} from '../../pages/AdminPage';
/*Created By Mamta 

*/
test('Check if rooms are added', async ({page}) => {     
  await gotoSandbox(page, 'LOGIN_FORM');
  const adminPage = new AdminPage(page); 
  await adminPage.open();
  await adminPage.loginAdmin("admin", "password");
  await expect(page.locator('#roomName100')).toBeVisible();
  await deleteSelectedRoom(page);
});

async function deleteSelectedRoom(page) {
  await expect(page.locator('#deleteRoomButton')).not.toBeVisible();
}