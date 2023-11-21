/*
Encapsulation
    - Class Fields Are Public By Default
    - Guards The Data Against  Illegal Access
    - Helps To Achieve The Targget Without Revealing Its Complex Details
    - Will Reduce Human Errors
    - Make The App More Flexible And Manageable
    - Simlifies The App
*/

class User {
  #s;
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.#s = salary;
  }

  getSalary(){
    return parseInt(this.#s)
  }
}

let userOne = new User(50, "Mohamed" , "5000Egy");

console.log(userOne); // {i: 50, u: 'Mohamed', #s: '5000Egy'}
console.log(userOne.getSalary()); // 5000
