import { test, expect } from '@playwright/test';

test('Verify Login Functionality with valid credentials', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
  await page.locator("//input[@name='ctl00$MainContent$username']").fill("Tester")
  await page.locator("#ctl00_MainContent_password").fill("test");
  await page.locator("//input[@type='submit']").click()

});