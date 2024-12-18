const add = function (num1, num2) {
  return num1 + num2
};

const subtract = function (num1, num2) {
  return num1 - num2
};

const sum = function (arrayOfNumbers) {
  sumOfNumbers = arrayOfNumbers.reduce((total, num) => total + num, 0)
  return sumOfNumbers
};

const multiply = function (arrayOfNumbers) {
  productOfNumbers = arrayOfNumbers.reduce((total, num) => total * num, 1)
  return productOfNumbers
};

const power = function (base, exponent) {
  let result = base
  for (let n = 1; n < exponent; n++)
    result *= base
  return result
};

const factorial = function (num) {
  if (num === 0) return 1
  else {
    let result = num
    for (let n = num - 1; n > 1; n--)
      result *= n
    return result
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
