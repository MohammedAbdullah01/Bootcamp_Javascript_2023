/*
Regular Expression

    - replace 
    - replaceAll 
    
*/

let str = "We Love Programming And @ Because @ Is Amazing";
console.log(str.replace("@", "JavaScript")); // We Love Programming And JavaScript Because @ Is Amazing
console.log(str.replaceAll("@", "JavaScript")); // We Love Programming And JavaScript Because JavaScript  Is Amazing

let reg = /@/gi;
console.log(str.replaceAll(reg, "JavaScript")); // We Love Programming And JavaScript Because JavaScript  Is Amazing
console.log(str.replaceAll(/@/gi, "JavaScript")); // We Love Programming And JavaScript Because JavaScript  Is Amazing
