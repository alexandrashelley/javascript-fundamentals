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