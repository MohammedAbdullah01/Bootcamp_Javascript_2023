/*
    Number Method 
    Two Dots To Call A Method
    - toString()
    - toFixed()
    - parseInt()
    - parseFloat()
    - isInteger() [ES6]
    - isNaN() [ES6]
*/


console.log(100..toString()); // 100 => Rutern type of (String)

console.log((100.10).toString()); // 100.1 => Rutern type of (String)

console.log(100.55554.toFixed(2)); // 100.56 => Rutern The End Numbers In A function toFixed()


console.log(parseInt("100Mohamed ")); // 100 =>  Returns the number if the number is inside a string statement
console.log(parseInt("Mohamed 100 ")); // NaN

console.log(parseFloat("1000.555Mohamed ")); // 1000.555 =>  Returns the Float if the Float is inside a string statement
console.log(parseInt("Mohamed 100.25 ")); // NaN

console.log(Number.isInteger("100")); // False => Checks whether the return value is a Integer
console.log(Number.isInteger(100.555)); // False  
console.log(Number.isInteger(100)); // True  

console.log(Number.isNaN("Mohamed" * 20)); // True
console.log(Number.isNaN("Mohamed" - 20)); // True
console.log(Number.isNaN("Mohamed" + 20)); // False