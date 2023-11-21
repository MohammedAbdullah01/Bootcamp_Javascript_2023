/*
Object Meta Data and Descriptor
    - writable
    - enumerable
    - configurable [Cannot Delete]
*/

const myObject = {
  a: 1,
  b: 2,
};

// Example 1 (writable = false)
// Object.defineProperty(myObject, "c", {
//   writable: true,
//   enumerable: true,
//   configurable: true,
//   value: 3,
// });

// Answer = > Example 1
// console.log(myObject); // {a: 1, b: 2, c: 3}

/*********************************************************************************************** */

// Example 2 (writable = false)
// Object.defineProperty(myObject, "c", {
//     writable: false, // Not modifying me property
//     enumerable: true,
//     configurable: true,
//     value: 3,
// });

// myObject.c = 200; // if writable = true value => c = 200
// console.log(myObject); // {a: 1, b: 2, c: 3}

/*********************************************************************************************** */

// Example 3 (enumerable = false)
// Object.defineProperty(myObject, "c", {
//   writable: true,
//   enumerable: false,
//   configurable: true,
//   value: 3,
// });
// // (if enumerable: false) => Anything that has repetition will exclude Property => (c) // not be deleted from In Object

// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
//   // a 1
//   // b 2
// }

// console.log(myObject); // {a: 1, b: 2, c: 3}

/*********************************************************************************************** */

// Example 4 (configurable = false)
// Object.defineProperty(myObject, "c", {
//   writable: true,
//   enumerable: true,
//   configurable: false,
//   value: 3,
// });

// // if(configurable: false) Not Be Deleted From object (c)
// console.log(delete myObject.c); // False

// console.log(myObject); // {a: 1, b: 2, c: 3}

/*********************************************************************************************** */

/* Part 2 
Object Meta Data and Descriptor
    - Define Multiple Properties
    - Check Descriptors
*/

Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject); // {a: 1, b: 2, c: 3, d: 4, e: 5}

console.log(Object.getOwnPropertyDescriptor(myObject, "c")); // {value: 3, writable: false, enumerable: false, configurable: true}

console.log(Object.getOwnPropertyDescriptors(myObject));
/*
{a: {…}, b: {…}, c: {…}, d: {…}, e: {…}}
a: 
configurable: true
enumerable: true
value: 1
writable: true

b: 
configurable: true
enumerable: true
value: 2
writable: true

c: 
configurable: true
enumerable: false
value: 3
writable: false

d: 
configurable: true
enumerable: false
value: 4
writable: false

e: 
configurable: true
enumerable: false
value: 5
writable: false
*/
