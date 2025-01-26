import { test, expect } from '@playwright/test';
/* Crated By Mamta 
WIP: Going to fail as this function is not behaving as expected.
Here I used recodrd a test function to reord a user's journey on the website.
As you can see lot's of clicking and repetative actions are performed to use the website.
This function is not user friendly and there is no unique booking number is given to the user.
This is not a good practice to use this function to book a room.
User unable to change the date of booking.
Definitely needs to improve the function to make it user friendly.
*/

test('test', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('heading', { name: 'Suite' }).first().click();
  await page.locator('div:nth-child(6) > div > .row > .col-sm-7 > .btn').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByText('11').dblclick();
  await page.locator('div:nth-child(4) > .rbc-row-bg > div:nth-child(3)').click();
  await page.locator('div:nth-child(4) > .rbc-row-bg > div:nth-child(4)').dblclick();
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill('mam');
  await page.getByRole('textbox', { name: 'Lastname' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).fill('mori');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('mor@gmail.com');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('09876543333');
  await page.getByRole('button', { name: 'Book', exact: true }).click();
  await page.getByRole('heading', { name: 'Booking Successful!' }).click();
  await page.getByText('Congratulations! Your booking').click();
  await page.getByText('-02-12 - 2025-02-13').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByText('TwinPlease enter a').click();
  await page.locator('div:nth-child(8) > div > .row > .col-sm-7 > .btn').click();
  await page.getByText('15').dblclick();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('div:nth-child(4) > .rbc-row-bg > div:nth-child(3)').click();
  await page.locator('div:nth-child(5) > .rbc-row-bg > div:nth-child(3)').dblclick();
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill('abc');
  await page.getByRole('textbox', { name: 'Lastname' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).fill('abcd');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('abc@yahoo.com');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('0987654453453');
  await page.getByRole('button', { name: 'Book', exact: true }).click();
  await page.getByRole('heading', { name: 'Booking Successful!' }).click();
  await page.getByText('Congratulations! Your booking').click();
  await page.getByText('-02-18 - 2025-02-19').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('heading', { name: 'Single' }).nth(2).click();
  await page.locator('div:nth-child(11) > div > .row > .col-sm-7 > .btn').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('div:nth-child(4) > .rbc-row-bg > div').first().click();
  await page.locator('div:nth-child(4) > .rbc-row-bg > div').first().dblclick();
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByText('night(s) - £99').click();
  await page.locator('div').filter({ hasText: /^1 night\(s\) - £99$/ }).first().click();
  await page.locator('div').filter({ hasText: /^1 night\(s\) - £99$/ }).nth(2).dblclick();
  await page.locator('div').filter({ hasText: /^1 night\(s\) - £99$/ }).first().dblclick();
  await page.locator('.rbc-row-segment').first().dblclick();
  await page.getByText('night(s) - £99').click({
    button: 'right'
  });
  await page.locator('.rbc-row-content > div:nth-child(2)').click();
  await page.getByText('night(s) - £99').click();
  await page.locator('.rbc-row-content > div:nth-child(2)').dblclick();
  await page.locator('.rbc-row-segment').first().click();
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill('siya');
  await page.getByRole('textbox', { name: 'Lastname' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).fill('samya');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('sami@hotmail.com');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('087657463738292');
  await page.getByRole('button', { name: 'Book', exact: true }).click();
  await page.getByRole('heading', { name: 'Booking Successful!' }).click();
  await page.getByText('Congratulations! Your booking').click();
  await page.getByText('-04-16 - 2025-04-17').click();
  await page.getByText('-04-16 - 2025-04-17').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'admin panel', exact: true }).click();
  await page.getByRole('link', { name: 'admin panel', exact: true }).click();
  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('admin');
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('password');
  await page.getByTestId('submit').click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByTestId('message13').click();
  await page.getByText('From: jos smith').click();
  await page.getByText('Phone: 098765432123').click();
  await page.getByText('Email: s@yahoo.com').click();
  await page.getByText('Email:').click();
  await page.getByTestId('message').getByText('You have a new booking!').click();
  await page.getByText('You have a new booking from').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByTestId('messageDescription15').getByText('You have a new booking!').click();
  await page.getByText('From: tina muni').click();
  await page.getByText('From: tina muni').click();
  await page.locator('div').filter({ hasText: /^Phone: 098765345232$/ }).click();
  await page.getByText('Email:').click();
  await page.getByTestId('message').getByText('You have a new booking!').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByText('siya samya').click();
  await page.getByText('From:').click();
  await page.getByText('From: siya samya').click();
  await page.getByText('Phone:').click();
  await page.getByTestId('message').locator('div').filter({ hasText: 'Email: sami@hotmail.com' }).nth(1).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: 'Branding' }).click();
  await page.getByRole('link', { name: 'Report' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByText('jos smith - Room:').click();
  await page.getByText('10', { exact: true }).click();
  await page.getByText('mam mori - Room:').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByText('siya samya - Room:').click();
  await page.getByRole('link', { name: 'Rooms' }).click();
  await page.getByRole('link', { name: 'Report' }).click();
  await page.getByRole('link', { name: 'Branding' }).click();
  await page.getByRole('link', { name: 'Front Page' }).click();
});