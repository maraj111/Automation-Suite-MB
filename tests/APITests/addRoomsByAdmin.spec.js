import { test, expect } from '@playwright/test';
/*Created By Mamta 
This test is to add rooms by admin and verify the added rooms on the front page
WIP: Need to tidy up.
*/
test('test', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('link', { name: 'admin panel', exact: true }).click();
  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('admin');
  await page.getByTestId('login-header').click();
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('password');
  await page.getByTestId('submit').click();
  await page.getByTestId('roomName').click();
  await page.getByTestId('roomName').fill('100');
  await page.locator('#type').selectOption('Double');
  await page.locator('#accessible').selectOption('true');
  await page.locator('#roomPrice').click();
  await page.locator('#roomPrice').fill('190');
  await page.getByRole('checkbox', { name: 'WiFi' }).check();
  await page.getByRole('checkbox', { name: 'TV' }).check();
  await page.getByRole('checkbox', { name: 'Refreshments' }).check();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByTestId('roomName').click();
  await page.getByTestId('roomName').fill('500');
  await page.locator('#type').selectOption('Suite');
  await page.locator('#accessible').selectOption('true');
  await page.locator('#roomPrice').click();
  await page.locator('#roomPrice').fill('395');
  await page.getByRole('checkbox', { name: 'Safe' }).check();
  await page.getByRole('checkbox', { name: 'Radio' }).check();
  await page.getByRole('checkbox', { name: 'Views' }).check();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByTestId('roomName').click();
  await page.getByTestId('roomName').fill('105');
  await page.locator('#roomPrice').click();
  await page.locator('#roomPrice').fill('99');
  await page.getByRole('checkbox', { name: 'Views' }).uncheck();
  await page.getByRole('checkbox', { name: 'Radio' }).uncheck();
  await page.getByRole('checkbox', { name: 'Safe' }).uncheck();
  await page.getByRole('checkbox', { name: 'Refreshments' }).uncheck();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('link', { name: 'Front Page' }).click();
  await page.getByRole('img', { name: 'Preview image of room100' }).click();
  await page.getByRole('img', { name: 'Preview image of room500' }).click();
  await page.getByRole('img', { name: 'Preview image of room105' }).click();
  await page.locator('div:nth-child(12) > div > .row > .col-sm-7 > .btn').click();
  await page.locator('.rbc-row-bg > div:nth-child(5)').first().click();
});