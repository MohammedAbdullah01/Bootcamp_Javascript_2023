/*
    Loop
        - For 
        for([1] , [2] , [3]){
            // Block Of Code
        }
*/


let = myFriends = [1, "Mohamed", "Ahmed", 2, "Noha", "Noah", "Noar"];
let myNames = [];
let myNumbers = [];

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}

for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] === "string") {
        myNames.push(myFriends[i]);
    } else if (typeof myFriends[i] === "number") {
        myNumbers.push(myFriends[i]);
    }
}
console.log(myNames); // ['Mohamed', 'Ahmed', 'Noha', 'Noah', 'Noar']
console.log(myNumbers); // [1, 2]



/************************************** */

/*
    Loop
        - For 
        Nested Loops
*/

let products = ["Keyboard", "Pen", "Mouse", 10, 50, "Pad", 80, "Moniter"];
let colors = ["Red", "Black", "Green"];
let models = [2021, 2022];

for (let p = 0; p < products.length; p++) {
    console.log("-------");
    console.log(products[p]);
    console.log("-------");

    console.log("Colors :");
    for (let c = 0; c < colors.length; c++) {
        console.log(`- ${colors[c]}`);
    }
    console.log("Models :");
    for (let m = 0; m < models.length; m++) {
        console.log(`- ${models[m]}`);
    }
}


/************************************** */

/*
    Loop Control
        - Break 
        - Continue 
        - Label 
*/

// Break
for (let g = 0; g < products.length; g++) {

    if (products[g] === "Mouse") {
        break;
    }
    console.log(products[g]); // Keyboard  Pen
}


//Continue
for (let z = 0; z < products.length; z++) {

    if (typeof products[z] === "number") {
        continue;
    }
    console.log(products[z]); // "Keyboard", "Pen", "Mouse", "Pad","Moniter"
}

// Label

mainLop: for (let r = 0; r < products.length; r++) {

    if (typeof products[r] === "number") {
        continue;
    }

    console.log(products[r]); // Keyboard  
    nestedLop: for (let y = 0; y < colors.length; y++) {

        if (colors[y] === "Green") {
            break mainLop;
        }
        console.log(colors[y]); // Red Black
    }
}


/************************************** */

/*
    Loop For Advenced Example
*/

let o = 0;
for (; ;) {
    console.log(products[o]); // 
    o++;
    if (o === products.length) break;
}



/************************************** */

/*
    Products Practice
*/

let products2 = ["Keyboard", "Pen", "Mouse", "Moniter", "Pad", "Iphone"];
let colors2 = ["Red", "Green", "Black"];
let countProduct = 5;

document.write(`<h1>Show Products ${countProduct}</h1>`); // Show Products 5

for (let i = 0; i < countProduct; i++) {
    document.write("<div>");
    document.write(`<h3>${products2[i]}</h3>`);
    for (let g = 0; g < colors2.length; g++) {
        document.write(`<p>${colors2[g]}</p>`);
    }
    document.write(`<p>${colors2.join(" | ")}</p>`);
    document.write("</div>");
}





