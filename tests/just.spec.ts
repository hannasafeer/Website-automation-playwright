
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import loginData from '../test-data/logindatanew.json';

loginData.forEach((data) => {

    // Skip test cases where run is false
    test.skip(!data.run, `Skipping test for ${data.username}`);

    test(`Login test - ${data.username}`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        // Open login page
        await loginPage.gotoLoginPage();

        // Enter username and password
        await loginPage.login(data.username, data.password);

        // Verify expected result
        if (data.expected === 'success') {

            // Verify successful login
            await expect(
                page.getByRole('link', { name: 'Log out' })
            ).toBeVisible();

        } else if (data.expected === 'failure') {

            // Verify login error message
            await expect(loginPage.errorMessage).toBeVisible();

        } else {
            throw new Error(`Unknown expected result: ${data.expected}`);
        }

    });
});
