class User {
  #i;
  #u;
  constructor(id, username, age) {
    this.#i = id;
    this.#u = username;
    this.g = age || "Unknown";
  }
  getId() {
    return this.#i;
  }

  getUserName() {
    return this.#u;
  }
}

class Admin extends User {
  constructor(id, username, age, pass) {
    super(id, username, age);
    this.p = pass;
  }
}

let o1 = new Admin(101, "Mohamed", 27, "password");
console.log(o1.g);
console.log(o1.getId());
console.log(o1.getUserName());
console.log(o1.p);
