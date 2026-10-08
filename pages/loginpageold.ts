 
import { Page } from '@playwright/test';

export class LoginPage {

    // Page object
    page: Page;

    // Locators
    emailInput;
    passwordInput;
    loginButton;

    // Constructor
    constructor(page: Page) {

        this.page = page;

        // Email locator
        this.emailInput = page.getByLabel('Email');

        // Password locator
        this.passwordInput = page.locator('#Password');

        // Login button locator
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

    // Method to perform login
    async login(email: string, password: string) {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }
}


