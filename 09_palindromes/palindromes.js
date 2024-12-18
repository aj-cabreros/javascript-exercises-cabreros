const palindromes = function (str) {
  const arr = str.replace(/\W/g, '').toLowerCase().split('')
  let front = 0
  let back = arr.length - 1

  while (front <= back) {
    if (arr[front] !== arr[back]) break
    front++
    back--
  }

  if (front >= back) return true
  else return false

};

// Do not edit below this line
module.exports = palindromes;
