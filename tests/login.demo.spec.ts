import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import loginData from '../test-data/loginData.json'

test('Valid login test', async ({ page }) => {

    // Create LoginPage object
    const loginPage = new LoginPage(page);

    // Open the website
    await page.goto('https://demowebshop.tricentis.com/');

    // Click Login
    await page.getByRole('link', { name: 'Log in' }).click();

    // Perform login
   // await loginPage.login('hanna123@gmail.com','Test@123');
   await loginPage.login(
    loginData.valid_User.username,
    loginData.valid_User.password
   );

    // Assert URL
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
});

test('Invalid login test', async ({ page }) => {

    // Create LoginPage object
    const loginPage = new LoginPage(page);

    // Open the website
    await page.goto('https://demowebshop.tricentis.com/');

    // Click Login
    await page.getByRole('link', { name: 'Log in' }).click();

    // Perform login
   // await loginPage.login('hanna123@gmail.com','Test@123');
   await loginPage.login(
    loginData.invalid_User.username,
    loginData.invalid_User.password
   );

    // Assert URL
    await expect(loginPage.errorMessage).toBeVisible();
}); 