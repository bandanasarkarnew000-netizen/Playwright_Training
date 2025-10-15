import { test, expect } from '@playwright/test';

test('OrangeHRM - Verify Login Functionality with valid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder("Username").fill("Admin")
  //await page.pause()
  await page.waitForSelector(".orange-container")
  
  await page.getByPlaceholder("Password").fill("admin1234")
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();

});