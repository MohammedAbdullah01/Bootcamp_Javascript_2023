/*
Class
Static Properties and Methods
*/

class User {
  // Static Properties
  static count = 0;
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username;
    this.s = salary;
    User.count++
  }
  // Methods
  static sayHello() {
    return `Hello From Class`;
  }
 
  static countMember() {
    return `${this.count} Member Created`;
  }
}

let userOne = new User(505, "Hanan", 1500);
let userTwo = new User(506, "Ahmed", 2500);
let userThree = new User(507, "Mahmoud", 3500);

// Properties
console.log(userOne.count); // undefined
console.log(User.count); // 3

// Methods
console.log(User.sayHello()); // Hello From Class
console.log(User.countMember()); // 3 Member Created
