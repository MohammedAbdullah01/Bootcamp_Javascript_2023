/*
    Math Object
    - round() =>  Returns the number to the nearest integer
    - ceil() => Returns the smallest integer greater than or equal to its numeric argument.
    - floor() => Returns the greatest integer less than or equal to its numeric argument.
    - min() => Returns the smaller of a set of supplied numeric expressions.
    - max() => Returns the larger of a set of supplied numeric expressions.
    - pow() => Returns the value of a base expression taken to a specified power.
    - random() => Returns a pseudorandom number between 0 and 1.
    - trunc() [ES6] => Returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x.
*/

console.log(Math.round(99.9)); // 100
console.log(Math.round(99.4)); // 99

console.log(Math.ceil(80.4)); // 81 
console.log(Math.ceil(80.9)); // 81 

console.log(Math.floor(80.4)); // 80

console.log(Math.min(10 , 20 ,30 )); // 10

console.log(Math.max(10 , 20 ,30 )); // 30

console.log(Math.pow(2 , 4)); // 16 => 2 * 2 * 2 * 2

console.log(Math.random()); // Random

console.log(Math.trunc(99.5)); // 99
console.log(Math.trunc(80.5)); // 80

