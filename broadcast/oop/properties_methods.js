/*
Constructor Function 
    - Deal With Properties and Methods 
*/

class User {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User(303, "Abdullah", 2000);
let userTwo = new User(304, "Mohamed", 6000);

console.log(userOne.u); // Abdullah
console.log(userOne.s); // 2500
console.log(userOne.msg()); // Hello Abdullah Your Salary Is 2500
console.log(userOne.writeMsg()); // Hello Abdullah Your Salary Is 2500

console.log(userTwo.u); // Mohamed
console.log(userTwo.s); // 6000
console.log(userTwo.msg()); // Hello Mohamed Your Salary Is 6000
console.log(userTwo.writeMsg()); // Hello Mohamed Your Salary Is 6000
