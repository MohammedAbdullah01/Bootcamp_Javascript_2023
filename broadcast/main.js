/*
    OutPut To Screen
    - window.alert()
    - document.write()
    - console.log()
 */

// window.alert("Hello Erom Js File");

document.write("<h1>Page <span>Title </span></h1>");

console.log("Hello From Js File");

// -------------------------------------

/*
    Console Methos
    - log
    - error
    - table

    web API => console depending web API, Not depending javascript 

    styling Console
    - Directive %c
*/

console.log("Log");

console.error("Error");

console.table(["Mohamed", "Ahmed", "Ali"]);

console.log("%cHello %cWorld", "color:red; font-size:50px", "color:blue; font-size:25px")

// -------------------------------------


/*  
    ES6 => Ecma Script , 6 => version
 */

var myName = "Mohamed";
console.log("Hello " + myName);

console.log(`Hello ${myName}`); // The way I write => ES6

// -------------------------------------


/* 
    Data Type Intro
    - String
    - Number
    - Array => Object
    - Object {} 
    - Boolean
    - Undefined
    - null
*/

console.log(typeof ("Mohamed")); // Type => String

console.log(typeof 500); // Type => Number 
console.log(typeof 500.15); // Type => Number 

console.log(typeof [10, 20, 30]); // Type => Object 
console.log(typeof ["Mo", "Sa", "No"]); // Type => Object 

console.log(typeof { name: 'Mohamed', age: 26, country: 'Pl' }); // Type => Object 

console.log(typeof true); // Type => Boolean 
console.log(typeof (false)); // Type => Boolean 

console.log(typeof undefined); // Type => Undefined 

// -------------------------------------

let title = "Elzero";
let description = "Elzero Web School";
let date = "2023/25/10";

let card = `
<div class = "card">
    <div 0class= "child">
        <h1>${title}</h1>
        <p>${description}</p>
        <span>${date}</span>
    </div>
</div>`;

document.write(card.repeat(4));

console.log(+"10" +  10 + false);
console.log("" - 2);







