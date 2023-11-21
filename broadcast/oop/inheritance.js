/*
Inheritance
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

class Admin extends User {
  constructor(id, username, permission) {
    super(id, username);
    this.p = permission;
  }
}

class Superman extends Admin {
  constructor(id, username, permission, abilty) {
    super(id, username, permission);
    this.v = abilty;
  }
}

let userOne = new User(10, "User:Mohamed");
let adminOne = new Admin(12, "Admin:Mohamed", 1);

let superman = new Superman(13, "Superman:Mohamed", 1, false);

console.log(userOne); // {i: 10, u: 'User:Mohamed'}
console.log(adminOne); // {i: 12, u: 'Admin:Mohamed', p: 1}
console.log(superman); // {i: 13, u: 'Superman:Mohamed', p: 1, v: false}

console.log(userOne.sayHello()); // Hello User:Mohamed
console.log(adminOne.sayHello()); // Hello Admin:Mohamed
console.log(superman.sayHello()); // Hello Superman:Mohamed

// Check instanceof
console.log(userOne instanceof User); // true
console.log(adminOne instanceof Admin); // true
console.log(superman instanceof Superman); // true
