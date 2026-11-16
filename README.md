# SauceDemo E2E Automation with Playwright

An end-to-end testing project for [SauceDemo](https://www.saucedemo.com/) built with JavaScript and Playwright. This project uses the Page Object Model (POM) to organize test code and GitHub Actions to run automated tests through CI/CD.

## Project Structure

```text
playwright-saucedemo-e2e-pom/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   └── CheckoutPage.js
├── tests/
│   ├── e2e-checkout.spec.js
│   └── api-check.spec.js
├── playwright.config.js
└── package.json
```

- `pages/` contains page classes, locators, and reusable actions.
- `tests/` contains UI and API test specifications.
- `.github/workflows/` contains the GitHub Actions workflow.
- `playwright.config.js` contains the Playwright configuration.

## Test Coverage

### UI Tests

**End-to-End Checkout**

- Log in using valid credentials.
- Sort products by price (low to high).
- Add Sauce Labs Onesie to the cart.
- Fill in the checkout information.
- Complete the order and verify the confirmation message.

**Checkout Form Validation**

- Attempt to continue checkout without entering customer details.
- Verify that the expected first name validation message appears.

### API Test

**API Health Check**

- Send a GET request using Playwright's API request fixture.
- Verify the HTTP 200 response status.
- Validate the expected properties in the JSON response.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/azzamhndra/playwright-saucedemo-e2e-pom.git
cd playwright-saucedemo-e2e-pom
```

Install the dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run the entire test suite:

```bash
npx playwright test
```

Run tests in UI mode:

```bash
npx playwright test --ui
```

Run tests on a specific browser:

```bash
npx playwright test --project=chromium
```

View the HTML test report:

```bash
npx playwright show-report
```

## CI/CD

GitHub Actions is configured to run the test suite automatically on every push and pull request.

Test reports are uploaded as workflow artifacts and can be downloaded from the GitHub Actions run for further inspection.
