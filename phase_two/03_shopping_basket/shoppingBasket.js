class ShoppingBasket {
  constructor() {
    this.basket = []
    this.discount = 0;
  }
  getTotalPrice() {
    let totalPrice = 0
    this.basket.forEach((candy) => totalPrice += candy.getPrice());
    return +(totalPrice - this.discount).toFixed(2);
  };

  addItem(candy) {
    this.basket.push(candy);
  };

  applyDiscount(discount) {
    this.discount += discount;
  };
};

module.exports = ShoppingBasket;