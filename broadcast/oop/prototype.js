/*
Prototype
    - Prototypes are the mechanism by which javascript objects
    inherit features from one another. 
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(501, "Mohamed");
console.log(userOne.u);

console.log(User.prototype); // {constructor: ƒ, sayHello: ƒ}

let strOne = "Ahmed";
console.log(String.prototype);

/*************************** */

/*
Prototype
    - Add To Prototype Chain 
    - Extend Built In Constructors Features 
*/

class UserTwo {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userTwo = new UserTwo(101, "Mohy");

console.log(userTwo.u);
console.log(UserTwo.prototype); // {constructor: ƒ, sayHello: ƒ}
console.log(userTwo);

// Add To Prototype Chain Method
UserTwo.prototype.sayWelcom = function () {
  return `Welcome ${this.u}`;
};
console.log(UserTwo.prototype); // {sayWelcom: ƒ, constructor: ƒ, sayHello: ƒ}
console.log(userTwo.sayWelcom()); // Welcome Mohy

// Add To Prototype Chain Property

Object.prototype.love = "I Love Programming";

console.log(userTwo.love); // I Love Programming

// Add To Prototype Chain Method To String Class

String.prototype.add_dot_before_and_after = function (str) {
  return `. ${this} .`;
};

let mySt = "Marim";

console.log(mySt.add_dot_before_and_after()); // '. Marim .'
