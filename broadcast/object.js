/*
    Object
*/

let user = {
    //Prooerties
    theName: "Mohamed",
    theAge: 26,

    //Method
    sayHello: function () {
        return "Hello";
    },
}

console.log(user.theName); // Mohamed
console.log(user.theAge);// 26
console.log(user.sayHello()); // Hello


/********************************************* */

/*
    Object
    - Dig Deeper
    - Dot. Notation VS Braket[] Notition
    - Dynamic Property Name
*/

let varibal = "country of";

// Object
let user2 = {
    theName: "Mohamed",
    "country of": "Egypt",
}

console.log(user2.theName); // Mohamed
console.log(user2["theName"]); // Mohamed
console.log(user2["country of"]); // Egypt
console.log(user2[varibal]); // Egypt


/********************************************* */

/*
    Object
    - Nested Object And Trainings
*/

// Object
let user3 = {
    theName: "Ahmed",
    theAge: 35,
    available: false,
    addresses: {
        pl: "Rafh",
        egypt: {
            addOne: "Cairo",
            addTwo: "Giza"
        }
    },

    checkAvailable: function () {
        if (user.available) {
            return "For Free";
        } else {
            return "Not For Free";

        }
    }

}

console.log(user3.theName); // Ahmed
console.log(user3.theAge); // 35
console.log(user3.addresses.pl); // Rafh
console.log(user3.addresses.egypt.addOne); // Cairo
console.log(user3["addresses"]["egypt"]["addTwo"]); // Giza
console.log(user3.checkAvailable()); // Not For Free



/********************************************* */

/*
    Object
    - Create Eith New Keyword new Object
*/


let user4 = new Object({
    age: 20
});
console.log(user4);

user4.age = 26; // Updated Property

user4["country"] = "Egypt";

user4.sayHello = function () {
    return "Hello";
};
console.log(user4);
console.log(user4.age); // 26
console.log(user4.country); // Egypt
console.log(user4.sayHello()); // Hello


/********************************************* */

/*
    Object
    - Create Object With Create Method
*/

let user5 = new Object({
    age: 20,

    calcAgeWithDay: function () {
        return this.age * 365;
    }
});


let user6 = Object.create(user5);
user5.age = 50;

console.log(user6.calcAgeWithDay()); // 18250




/********************************************* */

/*
    Object
    - Create Object With assign Method
*/


let user7 = new Object({
    age: 20,
    pro2: 2,

    calcAgeWithDay: function () {
        return this.age * 2;
    }
});

let targetObject = new Object({
    age: 10,

    calcAgeWithDay: function () {
        return this.age * 1;
    }
});

let user8 = Object.assign(targetObject, user7, { age: 40 });
console.log(user8); // {age: 40, pro2: 2, calcAgeWithDay: ƒ}
console.log(user8.calcAgeWithDay()); // 80