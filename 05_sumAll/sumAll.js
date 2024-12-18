function isValid(num) {
  if (typeof num === 'number'
    && isFinite(num)
    && num > 0
    && Number.isInteger(num)) {
    return true
  } else {
    return false
  }
}

const sumAll = function (num1, num2) {
  if (isValid(num1) && isValid(num2)) {
    let sum = 0
    let initialValue = 0
    let uptoValue = 0
    if (num1 < num2) {
      initialValue = num1
      uptoValue = num2
    } else {
      initialValue = num2
      uptoValue = num1
    }
    for (let n = initialValue; n <= uptoValue; n++) {
      sum += n
    }

    return sum
  } else {
    return 'ERROR'
  }


}
// Do not edit below this line
module.exports = sumAll;
