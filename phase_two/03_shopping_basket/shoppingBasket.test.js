const ShoppingBasket = require("./shoppingBasket");
// const Candy = require('./candy')

describe("the ShoppingBasket object", () => {
  it("returns 0 for price with an empty basket", () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  });

  it("adding a new candy and checking total price of basket", () => {
    const fakeSnickers = { getPrice: () => 3.99 };
    const basket = new ShoppingBasket();
    basket.addItem(fakeSnickers);
    expect(basket.getTotalPrice()).toBe(3.99);
  });

  it("applies discount to the total price of the basket", () => {
    const fakeSnickers = { getPrice: () => 3.99 };
    const basket = new ShoppingBasket();
    basket.addItem(fakeSnickers);
    basket.applyDiscount(2.00);
    expect(basket.getTotalPrice()).toBe(1.99);
  });
});
