/*
Generators
- Generator Function Run Its Code When Required
- Generator Function Return Special Object [Generator Object]
- Generator Are Iterable
*/

function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator); // Object
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: undefined, done: true}

for (let value of generateNumbers()) {
  console.log(value);
}

// for (let value of generator) {
//   console.log(value);
// }
