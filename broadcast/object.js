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