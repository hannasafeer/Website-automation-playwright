import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('Demo Web Shop login test', async ({ page }) => {

    // Create LoginPage object
    const loginPage = new LoginPage(page);

    // Open the website
    await page.goto('https://demowebshop.tricentis.com/');

    // Click Login
    await page.getByRole('link', { name: 'Log in' }).click();

    // Perform login
    await loginPage.login(
        'hanna123@gmail.com',
        'Test@123'
    );

    // Assert URL
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
});
//done