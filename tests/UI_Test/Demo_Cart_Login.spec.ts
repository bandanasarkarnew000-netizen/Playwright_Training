import { test, expect } from '@playwright/test';

test('Navigate to Demo Web Shop login page', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
    await expect(page.locator('form[action="/login"]')).toBeVisible();
    // Script to go to Register page
    await page.click('a[href="/register"]');
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/register');
    await expect(page.locator('form[action="/register"]')).toBeVisible();
    // Go back to Login page
    await page.goBack();
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
    await expect(page.locator('form[action="/login"]')).toBeVisible();
});