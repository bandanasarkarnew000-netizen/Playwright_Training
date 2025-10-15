import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const testData = JSON.parse(fs.readFileSync('tests/TestData/OrangeHRM_AI.json', 'utf-8'));

for (const data of testData) {
  test(`Login with username: '${data.username}' and password: '${data.password}'`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.fill('input[name="username"]', data.username);
    await page.fill('input[name="password"]', data.password);
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle', timeout: 10000 }).catch(() => {}),
      page.click('button[type="submit"]'),
    ]);

    if (data.expected === 'Dashboard') {
      const dashboardLocator = page.locator('h6:has-text("Dashboard")');
      await dashboardLocator.waitFor({ state: 'visible', timeout: 10000 });
      await expect(dashboardLocator).toBeVisible();
    } else if (data.expected === 'Required') {
      await expect(page.locator('span:has-text("Required")')).toBeVisible();
    } else if (data.expected === 'Invalid credentials') {
      await expect(page.locator('p:has-text("Invalid credentials")')).toBeVisible();
    }
  });
}