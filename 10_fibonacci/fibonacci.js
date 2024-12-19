const fibonacci = function (n) {
  /* n is a term in mathematics for n-th number in a sequence
      ie. 1st, 2nd, ... 5th*/
  if (n < 0) return 'OOPS'
  if (n == 0) return 0
  if (n == 1 || n == 2) return 1

  //Recursive form f(n) = f(n-1) + f(n-2)
  // let sum = fibonacci(n-1) + fibonacci(n-2) 
  // return sum

  //Summation form (starting at 3rd term of sequence)
  let sum = 0 /* f(n)   */
  let num1 = 2 /* f(n-1) */
  let num2 = 1 /* f(n-2) */

  let m = 3
  while (m < n) {
    sum = num1 + num2 /* f(n) = f(n-1) + f(n-2) */
    m++
    if (m == n) break
    else {
      num2 = num1 /* f(n-2) = f(n-1) */
      num1 = sum  /* f(n-1) = sum    */
      sum = 0
    }
  }
  return sum
};

// Do not edit below this line
module.exports = fibonacci;
