import { test, expect } from '@playwright/test';


test('Google Search Test', async ({ page }) => {

  // Open Google
  await page.goto('https://www.google.com');

  // Enter search text
  await page.locator('textarea[name="q"]').fill('Playwright testing');

  // Press Enter
  await page.keyboard.press('Enter');

  // Wait for search results page
  await page.waitForLoadState('domcontentloaded');

  // Check that search results are displayed
  const results = await page.locator('#search').count();

  expect(results).toBeGreaterThan(0);

});