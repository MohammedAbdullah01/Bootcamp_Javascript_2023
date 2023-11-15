/*
    Array Method 
    - Array.from(Iterable , MapFunction , This)

    --- Variable
    --- String Numbers
    --- Set 
    --- Using The Map Function 
    --- Arrow Function 
    --- Shorten The Method + Use arguments
    */

// Example 1
let theName = "Mohamed";

console.log(Array.from(theName)); // ['M', 'o', 'h', 'a', 'm', 'e', 'd']

let theNumber = "123456";

console.log(Array.from(theNumber)); // ['1', '2', '3', '4', '5', '6'] return Array Is The Item => string

console.log(
  Array.from(theNumber, function (n) {
    return +n + +n;
  })
); // [2, 4, 6, 8, 10, 12] return Array Is The Item => number and n + n

// Example 2
let theArry = [1, 1, 1, 2, 3, 4];

let newArray = new Set(theArry);

console.log(newArray);
console.log(Array.from(newArray)); // [1, 2, 3, 4]

// Example 3

function arrayFro() {
  return arguments;
}

console.log(Array.from(arrayFro("Mohamed", "Ahmed", "Mona"))); // ['Mohamed', 'Ahmed', 'Mona']
