/*
    Switch Statement
    switch(expression){
    Case 1 :
        Code Block
        break;
    Cace 2 :
        Code Block
        break;
    Defualt : 
        Code Block
}
    - Defualt Ordering 
    - Multiple Match
    - ===
*/

let day = 5;

switch (day) {
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    default:
        console.log("Unknown");
        break;
}

