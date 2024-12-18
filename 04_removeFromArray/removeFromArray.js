const removeFromArray = function (array, ...deletions) {
  for (let n = 0; n < deletions.length; n++) {
    do {
      index = array.indexOf(deletions[n])
      if (index >= 0) array.splice(index, 1)
    } while (index >= 0)
  }
  return array
}



// Do not edit below this line
module.exports = removeFromArray;
