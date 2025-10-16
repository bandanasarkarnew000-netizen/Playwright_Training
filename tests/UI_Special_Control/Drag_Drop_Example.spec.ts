import { test, expect } from '@playwright/test';

test('Drag and Drop Exp 1 @smoke', async ({ page }) => {
    // Visit the LambdaTest Drag and Drop Demo
    await page.goto("https://www.lambdatest.com/selenium-playground/drag-and-drop-demo");
    // Correct locators for draggable and dropzone
    await page.dragAndDrop('#draggable', '#mydropzone');
    await page.waitForTimeout(5000);
    // ...existing code...
});

test('Drag and Drop Exp 2', async ({ page }) => {
    // Visit the LambdaTest Drag and Drop Demo
    await page.goto("https://www.lambdatest.com/selenium-playground/drag-and-drop-demo");
    // Correct locators for draggable and droppable
    await page.dragAndDrop('#draggable', '#droppable');
    await page.waitForTimeout(5000);
    // ...existing code...
});

