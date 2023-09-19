/*
    Function Advenced Examples
*/

function sayHello(userName, age) {

    if (age < 20) {
        console.log(`App is Not Suitable For You`);
    } else {
        console.log(`Hello ${userName} Your Age is ${age}`);
    }
}


sayHello("Mohamed", 26); // Hello Mohamed Your Age is 26
sayHello("Ahmed", 20); // Hello Ahmed Your Age is 20
sayHello("Noah", 18); // App is Not Suitable For You



function generateYears(startYear, endYear, exclude) {
    let countd = [];
    for (i = startYear; i <= endYear; i++) {
        if (i === exclude) {
            continue;
        }
        console.log(i);
        countd.push(i);

    }
    console.log(endYear - startYear);
}

generateYears(1997, 2023, 2022); // 26


/********************************** */

/*
    Function
    - Return 
    - Automatic Semicolon Insertion [No Line Trminator Allowed] 
    - Interrupttting
*/

function calc(num1, num2) {
    return num1 + num2;
}

function generateTwo(start, end) {
    for (let i = start; i <= end; i++) {
        if (i === 15) {
            return;
        }
        console.log(i);
    }
}

totalNum = calc(20, 30); // 50

console.log(totalNum);

generateTwo(10, 20); // 10 11 12 13 14


/********************************** */

/*
    Function
    - Default Function Parameters
    - Function Parameters Default [Undefined]
    - old strategies [Condition + Logical Or]
    - ES6 Method
*/

function sayHelloThree(userName, age = "Unknown") {
    return `Hello ${userName} Your Age is ${age}`;
}

console.log(sayHelloThree("Mohamed")); // Hello Mohamed Your Age is Unknown
console.log(sayHelloThree("Mohamed", 26)); // Hello Mohamed Your Age is 26


/********************************** */

/*
    Function
    - Rest Parameters
    - Only One Allowed
    - Must Be Last Element
*/

function calcTwo(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

console.log(calcTwo(10, 20, 30, 40)); // 100



/********************************** */

/*
    Function
    - Parameters
    - Default
    - RestSkills
    - Loop
    - Condition
*/


function showInfo(user = "Unknown", age = "Unknown", HourRate = 0, show = "Yes", ...skills) {

    document.write(`<div>`);
    document.write(`<h1><p>Welcome ${user}</p></h1>`);
    document.write(`<h2>Profile Details</h2><hr>`);
    document.write(`<h3>User Name : ${user}</h3>`);
    document.write(`<h3>Age : ${age}</h3>`);
    document.write(`<h3>Hour Rate : $${HourRate}</h3>`);
    document.write(`<h3>Show Skills : ${show}</h3>`);
    document.write(`<h3>Skills</h3>`);

    if (show === "Yes") {
        if (skills.length === 0) {
            document.write(`<p>Not Found IS Skills</p>`);
        }
        for (let i = 0; i < skills.length; i++) {
            document.write(`<p> ${i + 1} - ${skills[i]}</p>`);
        }
    } else {
        if (skills.length === 0) {
            document.write(`<p>Not Found IS Skills</p>`);
        } else {
            document.write(`<p>Skills Is Hidden </p>`);
        }
    }

    document.write(`</div>`);

}

showInfo("Mohamed", 26, 15, "No", "PHP", "Css", "JavaScript", "Laravel");


/********************************** */

/*
    Function
    - Anonymous Function
    - Calling Named Function VS Anonymous Function 
    - Argument To Other Function
    - Task Without Name
    - SetTimeout 
*/

let calaclutor = function (num1, num2) {
    return num1 + num2;
};

function sayHelloFour() {
    return document.write("Hello Mohamed");
}

document.getElementById("show").onclick = sayHelloFour;

console.log(calaclutor(10, 20));

setTimeout(function () {
    console.log("Good");
}, 2000);


/********************************** */


/*
    Function
    - Function Inside Function
    - Return Function
*/

// Example 1 
// function sayMessage(firstName, lastName) {
//     let message = `Hello`;

//     // Nested Function
//     function concatMessage() {
//         message += ` ${firstName} ${lastName}`;
//     }
//     concatMessage();
//     return message;
// }


// // Example 2 
// function sayMessage(firstName, lastName) {
//     let message = `Hello`;

//     // Nested Function
//     function concatMessage() {
//         message += ` ${firstName} ${lastName}`;
//         return message;
//     }
//     return concatMessage();
// }


// Example 3
function sayMessage(firstName, lastName) {
    let message = `Hello`;

    // Nested Function
    function concatMessage() {
        // Nested Function
        function getFullName() {
            return `${firstName} ${lastName}`;
        }
        message += ` ${getFullName()}`;
        return message;
    }
    return concatMessage();

}

console.log(sayMessage("Mohamed", "Adbullah")); // Hello Mohamed Adbullah