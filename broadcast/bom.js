/*
- BOM [Browser Object Model]
    - Introduction
        -- Window Object Is The Browser Window
        -- Window Contain The Document Object 
        -- All Global Variables And Object And Functions Are Members Of Window Object 
            --- Test Document And Console 

    - What Can We Do With Window Object ? 
        -- Open Window
        -- Close Window 
        -- Move Window
        -- Resize Window 
        -- Print Document
        -- Run Code After Period Of Time Once Or More 
        -- Fully Control The URL 
        -- Save Date Inside Browser To Use Later
*/

/******************************/

/*
BOM [Browser Object Model]
    - alert(Message) => Need Response Only Ok Available
    - confirm(Message) => Need Response And Return a Boolean 
    - prompt(Message , Default Message) => Collect Data 
*/

// Alert()
// alert("Test"); // Stoped The Script
// console.log("test"); 


// Confirm
// let ConfirMsg = confirm("Are You Sure ?");

// // if Clicked Ok => return true || if Clicked Cancel => return false
// console.log(ConfirMsg); 

// if (ConfirMsg === true) {
//     console.log("Item Deleted");
// } else {
//     console.log("Item Not Deleted");
// }



// Peompt
// let PromMsg = prompt("Good Day To You ?", "Write Day With 3 Character");

// // if Clicked Ok => return Collect Data || if Clicked Cancel => return Null
// console.log(PromMsg);



/******************************/

/*
BOM [Browser Object Model]
    - setTimeout(function , Timeout , Additional Params) 
    - clearTimeout(Identifier) 
*/


// Example 1 
// setTimeout(() => {
//     console.log("Iam Mohamed");
// }, 2000); // After 2 Scound Print The Console "Iam Mohamed"

/******************************/

// // Example 2
// function sayHello(user, age) {
//     console.log(`Welcome ${user} Is a ${age}`);
// }

// setTimeout(sayHello, 3000, "Mohamed", 30);

/******************************/


// Create Element && use Action setTimeout
let btn = document.createElement("button")
btn.id = "btn";
let textBtn = document.createTextNode("Close");
btn.appendChild(textBtn);
document.body.appendChild(btn);


// Example 3
// function sayHello() {
//     console.log(`Welcome`);
// }

// let ele = document.getElementById("btn");

// let counter = setTimeout(sayHello, 3000); //Return Count setTimeout

// ele.onclick = function () {
//     clearTimeout(counter);
// }


/******************************/

/*
BOM [Browser Object Model]
    - setInterval(function , Millseconds , Additional Params) 
    - clearInterval(Identifier) 
*/

// setInterval(() => {
//     console.log("Msg");
// }, 1000); // Prints the message every 1000 to infinity


// Example 2
// function printName(user, age) {
//     console.log(`The Name ${user} Is a Age ${age}`);
// }

// setInterval(printName, 1000 , "Mohamed" , 26);


// Example 3 CountDown  

// let devInterval = document.createElement("div");
// devInterval.id = "Interval";
// let textDivInterval = document.createTextNode(5);

// devInterval.appendChild(textDivInterval);

// document.body.appendChild(devInterval);

// function countDown() {
//     devInterval.innerHTML -= 1;
//     if (devInterval.innerHTML === "0") {
//         clearInterval(clearInt)
//     }
// }

// let clearInt = setInterval(countDown, 1000);



/******************************/

/*
BOM [Browser Object Model]
    - location object
    --- href Get / Set [URL || Hash || File || Mail]
    --- host
    --- hash
    --- protocol
    --- reload()
    --- replace()
    --- assign()
*/

console.log(location);

// href => not deleted search history
// console.log(location.href); // get => http://localhost/BroadcastJavascript/
// location.href = "https://google.com"; // set => Change Location

// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#advanced";

// host
// console.log(location.host); // broadcastjavascript.test + port

// hostname
// console.log(location.hostname); // broadcastjavascript.test

// protocol
console.log(location.protocol); // http:

// hash
console.log(location.hash); // get Hash In href 


// reload()
// console.log(location.reload()); // Reload The Page


// replace() => Removes the current page from the session history and navigates to the given URL.
// console.log(location.replace("https://google.com"));


// assign() => Navigates to the given URL.
// console.log(location.assign("https://google.com"));



/******************************/

/*
BOM [Browser Object Model]
    - open(URL [Opt] , Window Name Or Target Attr [Opt] , Win Features [Opt])
    - close()
    - Window Features
    -- Width  [Num]
    -- Height [Num]
    -- Left   [Num]
    -- Top    [Num]

    Search
    - Window.open Window Features
*/


// setTimeout(() => {
//     window.open("https://google.com" , "_blank" , "width=400, height=400, left=400,top=500");
// }, 2000);

// setTimeout(() => {
//     window.open("https://google.com" , "_self" , "width=400, height=400, left=400,top=500");
// }, 2000);

















