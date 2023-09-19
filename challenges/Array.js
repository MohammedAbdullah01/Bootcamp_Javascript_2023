/*
    Array Challenge 7
        1- Output => ["Osama" ,"Elham", "Mazero" ,"Ahmed"]
        2- Output => ["Elham", "Mazero"] Mandatory condition for use Function slice
            console.log(my.slice(???????)) // ["Elham", "Mazero"]
        3- Output => "Elzero"
        4- Output => "rO"
 */

let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// console.log(my.sort()); // ['Ahmed', 'Ameer', 'Elham', 'Gamal', 'Mazero', 'Osama']

let newArray = my.reverse().splice(zero, counter).reverse(); // ['Ameer', 'Gamal', 'Osama', 'Elham', 'Mazero', 'Ahmed']
my.unshift(newArray[zero]);
console.log(my); // Result =>  ['Osama', 'Elham', 'Mazero', 'Ahmed']


my = my.slice(zero, counter); // ['Osama', 'Elham', 'Mazero']
my.shift();

console.log(my); // Result =>  ['Elham', 'Mazero']

let str1 = my[zero];
str1 = str1.slice(zero, str1.length - counter); // El
my.reverse();

let str2 = my[zero][zero] + my[zero]; // MMazero
str2 = str2.slice(counter); // zero

let Elzero = str1 + str2;
console.log(Elzero); // Result =>  Elzero

let str3 = Elzero[zero] + Elzero;
let chartoUpper = str3.slice(counter + counter).toLocaleUpperCase();
str3 = Elzero.substring(str3.length - counter);
let charToLower = str3[zero];
console.log(charToLower + chartoUpper); // Result =>  rO