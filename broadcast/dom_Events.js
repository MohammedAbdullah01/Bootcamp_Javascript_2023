/*
    DOM [Events]
    - Validate Form Practice
    - prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (event) {
    let userValid = false;
    let ageValid = false;

    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
    }

    if (ageInput.value !== "") {
        ageValid = true;
    }

    if (userValid === false || ageValid === false) {

        event.preventDefault();
    }
}


/***************************** */

/*
    DOM [Events Simulation]
    - click
    - focus 
    - blur 
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
    one.focus();

}
one.onblur = function () {
    // document.links[0].click();
}



/***************************** */

/*
    DOM [Class List]
    - classList 
    -- length 
    -- contains 
    -- item(index) 
    -- add 
    -- remove 
    -- toggle 
*/

let element = document.getElementById("my-div");

console.log(element.classList); // DOMTokenList(4) ['div-one', 'div-two', 'show', 'test', value: 'div-one div-two show test']

console.log(element.classList.length); // 4

console.log(element.classList.contains("p")); // False
console.log(element.classList.contains("test")); // True

console.log(element.classList.item(0)); // div-one
console.log(element.classList.item(1)); // div-two

element.onclick = function () {
    // element.classList.add("div-three", "div-four"); // added classes in element
    // element.classList.remove("div-three", "div-four"); // Removed classes in element
    element.classList.toggle("div-three"); // added class Not Found || Removed class in found
}




/***************************** */

/*
    DOM [CSS]
    - style
    - cssText
    - removeProperty(PropertyName) [Inline , stylesheet]
    - setProperty(PropertyName , Value , priority) 
*/

let element2 = document.getElementById("my-div");

element2.style.color = "Red";
element2.style.fontSize = "20px";

element2.style.cssText = "color: Blue; font-size: 50px";

element2.style.removeProperty("color");
element2.style.setProperty("color", "Blue", "important");

document.styleSheets[0].cssRules[0].style.removeProperty("background-color");
document.styleSheets[0].cssRules[0].style.setProperty("background-color", "#ff0");



/***************************** */

/*
    DOM [Deal With Elements]
    - before  [Element || String] 
    - after   [Element || String] 
    - append  [Element || String] 
    - prepend [Element || String] 
    - remove   
*/

let element3 = document.getElementById("my-div");
let createP = document.createElement("p");
let createSpan = document.createElement("span");

element3.before("Hello From Js", createP);
// Hello From Js
// <p></p>
// Div With Many Classes


element3.after("Hello From Js", createP);
// Div With Many Classes
// Hello From Js
// <p></p>


element3.append(" Hello From Js In The Div", createSpan);
// Div With Many Classes Hello From Js In The Div
// <span></span>

element3.prepend("Hello From Js In The Div ", createSpan);
// Hello From Js In The Div Div With Many Classes Hello From Js In The Div
// <span></span>


// element3.remove(); // Removed Element


/***************************** */

/*
    DOM [Traversing]
    - nextSibling
    - previousSibling
    - nextElementSibling
    - previousElementSibling
    - parentElement
*/

let span = document.querySelector(".span-two");

console.log(span.nextSibling); // <!-- commit -->

console.log(span.previousSibling); // <!-- commit -->

console.log(span.nextElementSibling); // span.span-three

console.log(span.previousElementSibling); // span.span-one

console.log(span.parentElement); // div#my-div-two


/***************************** */

/*
    DOM [Cloning]
    - cloneNode(Deep)
*/


let myP = document.querySelector("#my-p").cloneNode(true);
let myD = document.querySelector("#my-div-three");

myP.id = `${myP.id}-cloning`;// <p id="my-p-cloning">This Is P</p>

myD.appendChild(myP);






