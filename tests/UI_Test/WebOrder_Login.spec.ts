import { test, expect } from '@playwright/test';

test('Verify Login Functionality with valid credentials', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
   await page.getByRole('textbox', { name: 'Username:' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Password:' }).fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h2')).toContainText('List of All Orders');

  await page.getByRole('link', { name: 'Order', exact: true }).click();
  await page.getByLabel('Product:*').selectOption('FamilyAlbum');
  await page.getByRole('textbox', { name: 'Quantity:*' }).click();
  await page.getByRole('textbox', { name: 'Quantity:*' }).fill('5');
  await page.getByRole('textbox', { name: 'Customer name:*' }).click();
  await page.getByRole('textbox', { name: 'Customer name:*' }).fill('Abhi');
  await page.getByRole('textbox', { name: 'Street:*' }).click();
  await page.getByRole('textbox', { name: 'Street:*' }).fill('BTM');
  await page.getByRole('textbox', { name: 'City:*' }).click();
  await page.getByRole('textbox', { name: 'City:*' }).fill('Bangalore');
  await page.getByRole('textbox', { name: 'Zip:*' }).click();
  await page.getByRole('textbox', { name: 'Zip:*' }).fill('560076');
  await page.getByRole('textbox', { name: 'Zip:*' }).press('Tab');
  await page.getByRole('radio', { name: 'Visa' }).check();
  
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});