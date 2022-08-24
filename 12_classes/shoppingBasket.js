class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
}

class ShoppingBasket {
  constructor() {
    // we need to declare an empty array constructor,
    // so that we will be able to add items to it in
    // later methods
    this.basket = [];
  }
  // candy is an instance of the Candy class (name, price)
  addItem(candy) {
    this.basket.push(candy);
    return;
  }
  getTotalPrice() {
    let totalPrice = 0;
    this.basket.forEach((candy) => (totalPrice += candy.getPrice()));
    return totalPrice;
  }
}

module.exports = ('./shoppingBasket.js')

// node
// const candy = new Candy('Mars', 4.99);
// const basket = new ShoppingBasket();
// basket.addItem(candy);
// basket.getTotalPrice();