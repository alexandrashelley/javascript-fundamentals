const fizzBuzzUntil = (num) => {
  if (num % 15 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
};

let i = 0;
while (i <= 15) {
  console.log(fizzBuzzUntil(i));
  i += 1;
}

module.exports = fizzBuzzUntil;
