/*
Generators
- delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6];
}

let All = generateAll();

console.log(All.next()); // {value: 1, done: false}
console.log(All.next()); // {value: 2, done: false}
console.log(All.next()); // {value: 3, done: false}
console.log(All.next()); // {value: 'A', done: false}
console.log(All.next()); // {value: 'B', done: false}
console.log(All.next()); // {value: 'C', done: false}
// console.log(All.return("Stop Generator")); // {value: 'Stop Generator', done: true}
console.log(All.next()); // {value: 4, done: false}
console.log(All.next()); // {value: 5, done: false}
console.log(All.next()); // {value: 6, done: false}
console.log(All.next()); // {value: undefined, done: true}
