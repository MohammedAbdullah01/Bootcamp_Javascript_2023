/*
    Constructor Function 
*/

function User(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary + 1000;
}

let userOne = new User(100, "Mohamed", 3000);
let userTwo = new User(101, "Ahmed", 4000);
let userThree = new User(102, "Hany", 5000);

console.log(userOne); //  {i: 100, u: 'Mohamed', s: 4000}
console.log(userOne.i); //   100
console.log(userOne.u); //  Mohamed

console.log(userTwo); //  {i: 101, u: 'Mohamed', s: 5000}
console.log(userTwo.i); //  101
console.log(userTwo.s); //  5000

console.log(userThree); // {i: 102, u: 'Hany', s: 6000}

/******************************* */

/*
    Constructor Function (New Syntax)
*/

class Member {
  constructor(id, username, age) {
    this.i = id;
    this.u = username;
    this.g = age;
  }
}

let memberOne = new Member(200, "Khaled", 35);

// Check Instanceof
console.log(userOne instanceof User); // true
console.log(userOne.constructor === User); // true

console.log(memberOne.constructor === User); // false

console.log(memberOne instanceof Member); // true
console.log(memberOne.constructor === Member); // true

console.log(memberOne); // {i: 200, u: 'Khaled', g: 35}
