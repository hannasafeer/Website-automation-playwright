
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import loginData from '../test-data/logindatanew.json';

loginData.forEach((data) => {
    test.only(`Login test - ${data.username}`, async ({ page }) => {

        test.skip(!data.run, `Skipping test for ${data.username}`);

        const loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();
        await loginPage.login(data.username, data.password);

        if (data.expected === 'success') {
            await expect(loginPage.logoutLink).toBeVisible();
        } else if (data.expected === 'failure') {
            await expect(loginPage.errorMessage).toBeVisible();
        } else {
            throw new Error(`Unknown expected result: ${data.expected}`);
        }
    });
});