/*
Destructuring
" is a javascript expression that allows us to extract data from arrays object , 
and maps and set them new , distinct variables. "

- Destructuring Array 
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];


let [nameOne, nameTwo, nameThree, nameFour] = myFriends;


console.log(nameOne); // Ahmed
console.log(nameTwo); // Sayed
console.log(nameThree); // Ali
console.log(nameFour); // Maysa

// ************************

let [x, y, , z] = myFriends;

console.log(x); // Ahmed
console.log(y); // Sayed
console.log(z); // Maysa


/***************************** */

/*
Destructuring
- Destructuring Array Advanced Example
*/

let myFriendsTwo = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];


let [ah, , , [sh, , [, ga]]] = myFriendsTwo;

console.log(ah); // Ahmed
console.log(sh); // Shady
console.log(ga); // Gamal



/***************************** */

/*
Destructuring
- Destructuring Array  => Swapping Variables 
*/

let book = "Video";
let video = "Book";

// // Save Book Value Im Variable Stash
// let stash = book;

// // Change Book Value
// book = video;

// // Change Video Value
// video = stash;

// ||

// Destructuring Swapping

[book, video] = [video, book];

console.log(book); // Book
console.log(video); // Video


/***************************** */

/*
Destructuring
- Destructuring Object
*/


const user = {
    theName: "Mohamed",
    theAge: 26,
    theTitle: "Developer",
    theCountry: "Cairo",
};

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;
// ({ theName, theAge, theTitle, theCountry } = user) // 

let { theName, theAge, theTitle, theCountry } = user;

console.log(theName); // Mohamed 
console.log(theAge); // 26
console.log(theTitle); // Developer
console.log(theCountry); // Cairo


/***************************** */

/*
Destructuring
- Destructuring Object
--- Naming The Variables
--- Add New Property 
--- Nested Object
--- Destructuring The Nested Object Only
*/

const userTwo = {
    theName: "Mohamed",
    theAge: 26,
    theTitle: "Developer",
    theCountry: "Cairo",
    skills: {
        html: 50,
        css: 90,
    },
};


// Naming The Variables
// let { theName2: na, theAge2: ag, theTitle2: ti, theCountry2: cu } = userTwo;

// Add New Property
// let { theName2: na, theAge2: ag, theTitle2: ti, theCountry2: cu, theColor: co = "Red" } = userTwo;

// Nested Object
// let { theName2: na, theAge2: ag, theTitle2: ti, theCountry2: cu, skills: { html: h } } = userTwo;


// Destructuring The Nested Object Only
// let { html: h , css: cs  } = userTwo.skills;


/***************************** */

/*
Destructuring
- Destructuring Function Parameters
*/

const userThree = {
    theName: "Mohamed",
    theAge: 26,
    theTitle: "Developer",
    theCountry: "Cairo",
    skills: {
        html: 50,
        css: 90,
    },
};

ShowData(userThree);

function ShowData({ theName, theAge, skills: { html, css } = userThree }) {
    console.log(`Your Name Is ${theName}`);// Your Name Is Mohamed
    console.log(`Your Age Is ${theAge}`); // Your Age Is 26
    console.log(`Your Skilles Is Progress ${html} , ${css}`); // Your Skilles Is Progress 50 , 90
}



/***************************** */

/*
Destructuring
- Destructuring Mixed Content [Traninig]
*/

const userFour = {
    theName: "Mohamed",
    theAge: 26,
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
        egypt: "Cairo",
        ksa: "Riyadh",
    }
};


const { theName4, theAge4, skills: [, , j], addresses: { egypt: e } } = userFour;
console.log(theName); // Mohamed
console.log(theAge); // 26 
console.log(j);// JavaScript
console.log(e);// Cairo

