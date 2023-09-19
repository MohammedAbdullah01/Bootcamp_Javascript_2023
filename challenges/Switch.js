/*
    Switch Challenge 6

    // Challenge 1 => Convert If Stetment To Switch 
    let job = "Manager";
    let salary = 0;

    if(job === "Manager"){
        salary = 8000;
    }else if(job === "It" || job === "Support"){
        salary = 6000;
    }else if(job === "Developer" || job === "Designer"){
        salary = 7000;
    }else{
        salary = 4000
    }
    
    ///////////////////////////////

    // Challenge 2 => Convert Switch To If Stetment

    let holidays = 0;
    let money = 0;

    switch (holidays) {
    case 0:
        money = 5000;
        console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`My Money is ${money}`);
        break;
        case 4:
        money = 1000;
        console.log(`My Money is ${money}`);
        break;
        case 5:
        money = 0;
        console.log(`My Money is ${money}`);
        break;
    default:
        money= 0;
        console.log(`My Money is ${money}`);
        break;
}
*/

let job = "Manager";
let salary = 0;

// 6 Challenge 1
switch (job) {
    case "Manager":
        salary += 8000;
        console.log(salary);
        break;
    case "It":
    case "Support":
        salary += 6000;
        console.log(salary);
        break;
    case "Developer":
    case "Deesigner":
        salary += 7000;
        console.log(salary);
        break;
    default:
        salary += 4000;
        console.log(salary);
        break;
}

/******************************* */

// 6 Challenge 2

let holidays = 0;
let money = 0;


if (holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);

} else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Money is ${money}`);

} else if (holidays === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);

} else if (holidays === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);

} else if (holidays === 5) {
    console.log(`My Money is ${money}`);

} else {
    console.log(`My Money is ${money}`);
}