const ShoppingBasket = require('./shoppingBasket')
// const Candy = require('./candy')

describe("the ShoppingBasket object", () => {
  it('returns 0 for price with an empty basket', () => {
  const basket = new ShoppingBasket;
    expect(basket.getTotalPrice()).toBe(0);
  })

  it ('adding a new candy and checking total price of basket', () => {
    // const candy = new Candy('Snickers', 3.99);

    const fakeSnickers = { getPrice: () => 3.99 };
    
    const basket = new ShoppingBasket;
    basket.addItem(fakeSnickers);
    expect(basket.getTotalPrice()).toBe(3.99);
  })

});  
