const leapYears = function (year) {
  const divisableBy100 = (year % 100 === 0)
  const divisableBy400 = (year % 400 === 0)
  const divisableBy4   = (year %   4 === 0)

  if (divisableBy100)
    if (divisableBy400) return true
    else return false

  if (divisableBy4) return true
  else return false
};



// Do not edit below this line
module.exports = leapYears;
