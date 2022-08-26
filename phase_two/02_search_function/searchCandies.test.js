const searchCandies = require('./searchCandies')

describe('candies', () => {
  it('Searching for prefix Ma and a price of 10 returns matching candies', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('Searching for prefix Ma and a price of 2 returns matching candies', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it('Searching for prefix S and a price of 10 returns matching candies', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  });

  it('Searching for prefix S and a price of 4 returns matching candies', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  });
  
  it('Searching with a lowercase prefix ma and a price of 10 returns matching candies', () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
  });
});




const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
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

// // const convertName = (candy) => {
// //   return candy.name;
// // };

// const checkPrice = (candy) => {
//   if (candy.price <= price) {
//     return candy;
//   };
// };

// const searchCandies = (searchTerm, price) => {

//   const priceFilter = candies.filter((element) => element.price <= price);
  
//   // const candyPrefix = candyNames.filter((element) => element.name.toLowerCase().startsWith(search_term.toLowerCase()));
//   // return candyPrefix.map((element) => convertName(element));

  

//   const candyName = candies.filter(
    
//     (candy) => {
//     if (candy.name === searchTerm){
//       return candy;
//     }
//   }
  
//   );

//   console.log(candyName)
//   // const candyPrice = candies.filter(checkPrice);

// };


// searchCandies('Mars',1)


// // const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

// // // 1. Using a predicate function and `filter` to get only names shorter than 3 letters.

// // const isShorterThanThree = (name) => {
// //   if (name.length < 3) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

// // // 2. Create a new array of all names uppercased by applying
// // // the `getUppercased` function to all elements in the `names` array.

// // const getUppercased = (name) => {
// //   return name.toUpperCase();
// // }

// // const uppercasedNames = names.map(getUppercased);






// module.exports = searchCandies;
