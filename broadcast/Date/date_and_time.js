/*
Date And Time 
    - Date Constructor

Static Methods
    - Date.now()

    - To Track Time You Need Starting Point
    - Epoch Time Or Unix Time In Computer Science Is Number Of Secound Since January 1 ,1970
    - Why 1970 [829 DAys To 136 Years]

Search For 
    - Year 2038 Problem In Computer Science
*/

let dateNow = new Date();

console.log(Date.now()); //  1700592516075
console.log(dateNow); // Tue Nov 21 2023 20:47:43 GMT+0200 (Eastern European Standard Time)

// 1000 Mill = 1 second
let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`seconds ${seconds}`);

let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);

let years = days / 365; // Number Of Years
console.log(`Years ${years}`);

/*********************************** */

/*
Date And Time 
    - getTime() => Number Milliseconds
    - getDate() => Day Of The Month  
    - getFullYear()
    - getMonth() => Zero Based  
    - getDay() => Day Of The Week    
    - getHours()
    - getMinutes()
    - getSeconds()   
*/

let dateNow2 = new Date();

let birthday = new Date("Aug 16 , 1997");

let dateDifferent = dateNow2 - birthday;

console.log(dateDifferent / 1000 / 60 / 60 / 24 / 365);


console.log(dateNow2.getTime()); 
console.log(dateNow2.getDate());
console.log(dateNow2.getFullYear());
console.log(dateNow2.getMonth());
console.log(dateNow2.getDay());
console.log(dateNow2.getHours());
console.log(dateNow2.getMinutes());
console.log(dateNow2.getSeconds());
