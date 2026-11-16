class InventoryPage {
  constructor(page) {
    this.firstAddToCartButton = page.getByRole('button', {
      name: 'Add To Cart',
    });
    this.shoppingCartButton = page.locator('.shopping_cart_link');
    this.filterSelect = page.locator('.product_sort_container');
  }

  async addToCart() {
    await this.firstAddToCartButton.first().click();
    await this.shoppingCartButton.click();
  }

  async filterToLow() {
    this.filterSelect.selectOption({ label: 'Price (low to high)' });
  }
}

module.exports = { InventoryPage };
