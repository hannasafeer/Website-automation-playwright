
import { Page, Locator } from '@playwright/test';

export class LoginPage {

    // Page object
    page: Page;

    // Locators
    emailInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    errorMessage: Locator;
    logoutLink: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;

        // Email locator
        this.emailInput = page.getByLabel('Email');

        // Password locator
        this.passwordInput = page.locator('#Password');

        // Login button locator
        this.loginButton = page.getByRole('button', {
            name: 'Log in'
        });

        // Error message locator
        this.errorMessage = page.locator(
            '.validation-summary-errors'
        );

        // Logout link locator
        this.logoutLink = page.getByRole('link', {
            name: 'Log out'
        });
    }

    // Navigate to the login page
    async gotoLoginPage(): Promise<void> {
        await this.page.goto(
            'https://demowebshop.tricentis.com/'
        );

        await this.page.getByRole('link', {
            name: 'Log in'
        }).click();
    }

    // Perform login
    async login(
        email: string,
        password: string
    ): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
