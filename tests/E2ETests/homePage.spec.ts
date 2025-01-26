import { test, expect } from '@playwright/test';
import { gotoSandbox } from 'playwright-sandbox/dist/PlaywrightSandbox';
import { HomePage } from '../../pages/HomePage';

/*Created By Mamta
check homepage title -heading 
hompage link is emplty link and just refresh the page
get all links on homepage and check naviagtion for all links working/broken links- read more about the features link is broken
check inquiry form field having right data sets- valid and invalid data
can add table for all types valid and invalid data fields and different relevant messages 
use BVA and ECP test techniques for data fields.
Uplift needed for let mehack menu should be popout/dropdown menu, as once click on let me hack then unable to click on any other links.
not user friendly.
*/

test.describe('Home Page Tests', () => {
test('page title/heading', async ({ page }) => {
  await gotoSandbox(page, 'LOGIN_FORM');
  await page.goto('https://automationintesting.online/');
  await expect(page).toHaveTitle(/Restful-booker-platform/);
  await expect(page).toHaveTitle('Restful-booker-platform demo'); 
  await page.getByRole('link', { name: 'home page' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
  await page.close();

});

test('get all links', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.getAllLinks(page);
  
  });

  test('submit contact form with valid data', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.enterUserDetails('John','johnsmith@yahoo.com','07712345678','booking info','I have booked for easter can you send me a confirmation email. thanks!');
    await homePage.isThanksMessageVisible();
    expect(await homePage.thanksMessage.textContent()).toContain('Thanks for getting in touch');
    await page.close();
  });

  test('submit contact form with invalid data', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.enterUserDetails('','','','booking info','I have booked for easter can you send me a confirmation email. thanks!');
    await homePage.isErrorMessageVisible();
    expect(await homePage.errorMessage.textContent()).toContain('Phone may not be blank');
    await page.close();
  });


});
