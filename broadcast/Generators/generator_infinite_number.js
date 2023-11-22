/*
Generators
- Generator Infinite Numbers
- Use Return Inside Generators
*/

// function* generateNumbers() {
//   yield 1;
//   yield 2;
//   return 3;
//   yield 3;
//   yield 4;
// }

// let generator = generateNumbers();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: true}
// console.log(generator.next()); // {value: undefined, done: true}
// console.log(generator.next()); // {value: undefined, done: true}

/***************************** */

// Infinite Numbers
function* generateNumbers() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

let generator = generateNumbers();

console.log(generator.next()); // {value: 0, done: false}
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
