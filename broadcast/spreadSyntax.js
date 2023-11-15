/*
Spread Operator => ...Iterable 
"Allow Iterable To Expand In Place
*/

// 1- Spread With String => Expand String
console.log("Osama"); // Osama
console.log(..."Osama"); // O s a m a
console.log([..."Osama"]); // ["O", "s", "a", "m", "a"]

// 2- Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

console.log([...myArray1, ...myArray2]); //  [1, 2, 3, 4, 5, 6]

// 3- Copy Array

let copyArray = [...myArray1];
console.log(copyArray); //  [1, 2, 3]

// - 4 Push Inside Array
let allFriends = ["Mohamed", "Ahmed", "Noah"];
let newFriends = ["khaled", "Samer", "Marim"];
allFriends.push(...newFriends);
console.log(allFriends); // ['Mohamed', 'Ahmed', 'Noah', 'khaled', 'Samer', 'Marim']

// - 5 Use With Math Object

let myNums = [10, 20, 30, 40, 50, 60];
console.log(Math.max(...myNums)); // 60

// - 6 Spread With Objects => Merge Objects

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  c: 3,
  d: 4,
};

console.log({ ...obj1, ...obj2, e: 5 }); // {a: 1, b: 2, c: 3, d: 4, e: 5}
