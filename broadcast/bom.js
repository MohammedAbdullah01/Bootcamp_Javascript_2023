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
function sayHello() {
    console.log(`Welcome`);
}

let ele = document.getElementById("btn");

let counter = setTimeout(sayHello, 3000); //Return Count setTimeout

ele.onclick = function () {
    clearTimeout(counter);
}






