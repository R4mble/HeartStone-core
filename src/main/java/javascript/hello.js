const R = require('./ramda.min.js');

var hello = () => print('Hello Nashorn!')
hello()

const byAge = R.descend(R.prop('age'));
const people = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByOldestFirst = R.sort(byAge, people);
//print(peopleByOldestFirst)