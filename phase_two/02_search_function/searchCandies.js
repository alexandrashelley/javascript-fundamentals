const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: "Mars", price: 1.49 },
  { name: "Maltesers", price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

const convertName = (candy) => {
  return candy.name;
};

// const belowPrice = (candy, price) => {
//   if (candy.price <= price) {
//     return candy;
//   }
// };

const searchCandies = (search_term, price) => {
  // const candyNames = candies.filter((element) => belowPrice(element, price));
  const candyNames = candies.filter((element) => element.price <= price)
  const candyPrefix = candyNames.filter((element) => element.name.toLowerCase().startsWith(search_term.toLowerCase()));
  return candyPrefix.map((element) => convertName(element));

  // return ['Mars', 'Maltesers']
};

module.exports = searchCandies;
