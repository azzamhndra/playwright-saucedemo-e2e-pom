const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('End-to-End Checkout', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.filterToLow();
  await inventoryPage.addToCart();

  await expect(page.getByText('Sauce Labs Onesie')).toBeVisible();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.clickCheckout();
  await checkoutPage.fillInformation('Azza', 'Mahendra', '30267');
  await checkoutPage.clickContinue();
  await checkoutPage.clickFinish();

  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});

test('Validasi Form Checkout', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addToCart();
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.clickCheckout();
  await checkoutPage.clickContinue();
  await expect(page.getByText('Error: First Name is required')).toBeVisible();
});
