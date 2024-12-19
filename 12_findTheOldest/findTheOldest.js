const getAge = function (person) {
  if (person.hasOwnProperty('yearOfDeath'))
    age = person.yearOfDeath - person.yearOfBirth
  else
    age = new Date().getFullYear() - person.yearOfBirth
  return age
}

const findTheOldest = function (people) {
  /* fuction takes array and returns object */
  let eldestPerson = people[0]
  let eldestAge = getAge(eldestPerson)
  let personAge

  people.forEach(function (person) {
    personAge = getAge(person)
    if (eldestAge < personAge)
      eldestPerson = person
    eldestAge = personAge
  })
  return eldestPerson
};


// Do not edit below this line
module.exports = findTheOldest;
