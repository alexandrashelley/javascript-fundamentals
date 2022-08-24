class ShoppingBasket {
  constructor() {
    this.basket = []
  }
  getTotalPrice() {
    let totalPrice = 0
    this.basket.forEach((candy) => totalPrice += candy.getPrice());
    return totalPrice;
    // return 0;
  };

  addItem(candy) {
    this.basket.push(candy);
  }
};

module.exports = ShoppingBasket;