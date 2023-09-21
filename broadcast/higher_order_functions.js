/* 
    Higher Order Functions
    --->is a function that accepts functions as parameters and /or returns afunction.

    - Map
    -- method creates a new array
    -- populated with the results of calling a provided function on every element
    -- in the calling array

    Syntax map(CallBackFunction(Element , Index , Array) {} , thisArg  )
    - Element => The Current Element being processed in the array
    - Index   => The Index of the current element being processed in the array
    - Array   => The Current Array

    Notes
    - Map Return A New Array

    Examples 
    - Anonymous Function
    - Named Function
*/


let myArray = [1, 2, 3, 4, 5, 6];

// Anonymous Function
let printArray = function (element, index, array) {
    return element + element;
};

// Named Function
function additionl(element) {
    return element + element;
}

printArray = myArray.map(function (element, index, array) {
    return element + element;
});

// Arrow Function
// let printArray = (element, index, array) => element + element;

// console.log(printArray); // [2, 4, 6, 8, 10, 12]


// console.log(myArray.map(printArray)); // [2, 4, 6, 8, 10, 12]

// Named Function
console.log(myArray.map(additionl)); // [2, 4, 6, 8, 10, 12]


/********************************** */

/*
    Map 
    - Swap Cases
    - Inverted Number
    - Ignore Boolean Value 
*/

let swappingCases = "moHAMEd";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Mo123ham4ed";



let swp = swappingCases.split("").map(function (element) {
    return (element === element.toLocaleLowerCase()) ? element.toLocaleUpperCase() : element.toLocaleLowerCase();
}).join("");

console.log(swp); // MOhameD 


let inv = invertedNumbers.map((element) => -element);

console.log(inv); // [-1, 10, 20, -15, -100, 30]


let ign = ignoreNumbers.split("").map((element) => (isNaN(element)) ? element : "").join("");

console.log(ign); // Mohamed


/********************************** */

/*
    - Filter
    -- method creates a new array
    -- With All element that pass the test implemented by the provided function

    Syntax map(CallBackFunction(Element , Index , Array) {} , thisArg  )
    - Element => The Current Element being processed in the array
    - Index   => The Index of the current element being processed in the array
    - Array   => The Current Array
*/

// Get Friends With Name Starts With "A"
let myFriends = ["Noah", "Amgad", "Noar", "Anwar", "Ahmed", "Mohamed", "Sayed", "Asmaa"];

// Get Even Numbers Only
let myNumbers = [11, 20, 30, 100, 50, 19];


let filterFriends = myFriends.filter((el) => el.startsWith("A"));

console.log(filterFriends);  // ['Amgad', 'Anwar', 'Ahmed', 'Asmaa']

let evenNumbersFilter = myNumbers.filter((el) => el % 2 === 0);

console.log(evenNumbersFilter);  // [20, 30, 100, 50]


/********************************** */

/*
    - Filter
    -- Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";


let sen = sentence.split(" ").filter((ele) => ele.length <= 4).join(" ");

console.log(sen); // I Love Code Too Much

let mix = "A13BS2ZX";

let multiplNnumbers = mix.split("").filter((el) => !isNaN(parseInt(el)))
    .map((el) => el * el)
    .join("");

console.log(multiplNnumbers); // 194




/********************************** */

/*
- Reduce
-- method executes a reducer function on each element of the array
-- resulting in a single output value

Syntax map(CallBackFunction(Accumulator , Current value , Current index , Sourse Array){ } , initialValue)
- Accumulator => The Accumulator value previously returned in the last invocation 
- Current value   => The current element being processed in the array
- Current index   => The Index of the current element being processed in the array
-------------------- starts from index 0 if an initialValue is provided.
-------------------- otherwise , it starts from index 1. 
- Array           => The Current Array
*/

let nums = [10, 20, 30, 40, 50];

let addNums = nums.reduce((acc, current) => acc + current);
let addNumsTwo = nums.reduce((acc, current) => acc + current, 15); // initialValue 10

console.log(addNums); // 150

console.log(addNumsTwo); // 15 initialValue => The Accumulator => {15} + 10 + 20+ 30 + 40 + 50 = 165


/********************************** */

/*
Reduce
- Longest Word
- Remove Characters + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battey", "Test"];
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];



let check = theBiggest.reduce((acc, current) => acc.length > current.length ? acc : current);

console.log(check); // Propaganda




let finalString = removeChars.filter((ele) => ele !== "@")
    .reduce((acc, current) => `${acc}${current}`);

console.log(finalString); // ELZERO



