const repeatString = function(str, nTimes) {
  if (nTimes < 0) return 'ERROR'

  let newStr = ''
  while(nTimes > 0){
    newStr += str
    nTimes--
  }
  return newStr
}
// Do not edit below this line
module.exports = repeatString;
