const Candy = require("./candy");

describe("candy object name", () => {
  it("retrieves the candy name from the new candy object", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.getName()).toBe("Mars");
  });
  it("retrieves the candy price from the new candy object", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.getPrice()).toBe(4.99);
  });
});
