/*
Constructor Function 
    - Update Properties
    - Built In Constructor
*/

class User {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  // Methods
  updateUsername(newName) {
    this.u = newName;
  }
}

let userOne = new User(505, "Hanan", 1500);

console.log(userOne.u); // Hanan

// Updated User Name
userOne.updateUsername("Marim");

console.log(userOne.u); // Marim

// Built In Constructor

let strOne = "Mohamed";
let strTwo = new String("Mohamed");

// Type Of
console.log(typeof strOne); // string
console.log(typeof strTwo); // object

// check instanceof
console.log(strOne instanceof String); // false
console.log(strTwo instanceof String); // true

console.log(strOne.constructor === String); // true
console.log(strTwo.constructor === String); // true
