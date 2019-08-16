const R = require('./ramda.min.js');
const print = console.log

var hello = () => print('Hello Nashorn!')
hello()

const byAge = R.descend(R.prop('age'));
const people = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByOldestFirst = R.sort(byAge, people);
print(peopleByOldestFirst)

list = [4,5,2,6]
list2 = R.sort((a,b) => a-b, list)
list3 = R.sort((a,b) => b-a, list)
print(list2)
print(list3)

print(R.keys({a: {d: 3}, b: 2, c: 3}))

// jsonObject = {a: 1, b: 2, c: 3}
// keys = [];
// for (var p in jsonObject)
// 　　keys.push(p);
// print(keys)

mapValues = (f, obj) => 
              R.keys(obj).reduce((acc, key) => {
                  acc[key] = f(obj[key])
                  return acc
              }, {})

print(mapValues(a => a + 1, {a: 1, b: 2, c: 3}))              

const getMetrics = R.applySpec({
  sum: (a,b,c) => a+b+c,
  nested: { mul: (a,b,c) => a*b*c }
});
print(getMetrics(2, 5, 4))

var getAges = R.pluck('age');
print(getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}])); //=> [29, 27]

print(R.pluck(0, [[1, 2], [3, 4]]));               //=> [1, 3]
print(R.pluck('val', {a: {val: 3}, b: {val: 5}})); //=> {a: 3, b: 5}


const sumArgs = (...args) => R.sum(args);
print(sumArgs(1,2,3,4,5))
const curriedAddFourNumbers = R.curryN(4, sumArgs);
const f = curriedAddFourNumbers(1, 2);
const g = f(3);
print(g(4)); //=> 10

const mapIndexed = R.addIndex(R.map);
print(mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']));
  