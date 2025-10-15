import { test, expect } from '@playwright/test';

test.skip('Flipcart Login Page Mouse Hover', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.waitForLoadState('networkidle');
  // Close login popup if present
  const closeBtn = page.locator('button._2KpZ6l._2doB4z');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }
  // Hover over Login menu
  await page.hover('._28p97w'); // Flipkart Login menu CSS selector
  // Wait for My Profile option to appear and click
  await page.click('._3vhnxf'); // My Profile CSS selector
  // Assert Request OTP button is visible and has correct text
  const otpBtn = page.locator('button._2KpZ6l._1seccl._3A3g7y');
  await expect(otpBtn).toHaveText(/Request OTP/i);
  await expect(otpBtn).toBeVisible();
  await page.waitForTimeout(2000);

});

test('Demo WebShop Mouse Hover Example', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.waitForLoadState('networkidle');
  await page.hover('ul.top-menu > li > a[href="/computers"]');
  await page.click('ul.top-menu > li > ul > li > a[href="/notebooks"]');
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/notebooks');
  await page.waitForTimeout(2000);

});