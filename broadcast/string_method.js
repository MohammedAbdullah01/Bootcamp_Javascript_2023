/*
    String Method
    - Access Eith Index
    - Access Eith charAt() => Returns the character at the specified index.
    - length => Returns the length of a String object.
    - trim() =>Removes the leading and trailing white space and line terminator characters from a string.
    - toUpperCase()
    - toLowerCase()
    - Chain Method => trim().charAt().toUpperCase()
*/

let a = "Mohamed";

let n = [1, 2, 3, 4];

console.log(a[2]); // h

console.log(a.charAt(2)); // h

console.log(a.length); // 7

console.log(a.trim());  // Mohamed Remove Space in Right and Left

console.log(a.toUpperCase()); // MOHAMED
console.log(a.toLocaleLowerCase()); // mohamed

console.log(a.trim().charAt(2).toUpperCase()); // H

/***********************************/


/*
    String Method
    - indexOf(value , start [opt] defualt=> 0) => Returns the position of the first occurrence of a substring.
    - LastIndexOf(value , start [opt] defualt=> 0) => Returns the last occurrence of a substring in the string.
    - slice( Start , End [opt] Not Include End) => Returns a section of a string.
    - repeat(Times) => Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
    - split(Separator [opt] , limit [opt]) => Split a string into substrings using the specified separator and return them as an array.
*/


let u = "Mohamed Abdullah Hammad";

console.log(u.indexOf("d")); // 6
console.log(u.indexOf("o")); // 1
console.log(u.indexOf("o", 8)); // -1 Not Found

console.log(u.lastIndexOf("d")); // 10
console.log(u.lastIndexOf("a")); // 14
console.log(u.lastIndexOf("d", 8)); // 6

console.log(u.slice(0, 7)); // Mohamed

console.log((u.repeat(4))); // Mohamed Abdullah Mohamed Abdullah Mohamed Abdullah Mohamed Abdullah

console.log(u.split(" ")); //  ['Mohamed', 'Abdullah', 'Hammad']
console.log(u.split(" ", 2)); //  ['Mohamed', 'Abdullah']



/***********************************/


/*
    String Method
    - substring(Start , End [opt] Not Including) => Returns the substring at the specified location within a String object.
        - Start >  End Will Swap
        - Start < 0 It Start From 0  
        - Use Length To Get Last Character

    - substr(Start , Characters Extract)
        - Start >= Length = ""
        - Negative Start From End

    - includes(Value , Start [opt] Default 0) [ES6]
    - startsWith(Value , Start [opt] Default 0) [ES6]
    - endsWith(Value , Start [opt] Default Full Length) [ES6]
*/

let mo = "Mohamed Abdullah";

console.log(mo.substring(1)); // ohamed Abdullah
console.log(mo.substring(0, 7)); // Mohamed
console.log(mo.substring(mo.length - 1)); // h


console.log(mo.substr(0, 6)); // Mohame 
console.log(mo.substr(12, 2)); // ll 


console.log(mo.includes("mohamed")); //  false
console.log(mo.includes("Mohamed")); //  true
console.log(mo.includes("Mohamed", 10)); //  false


console.log(mo.startsWith("Mo")); // true
console.log(mo.startsWith("Abd")); // false
console.log(mo.startsWith("Abd", 8)); // true


console.log(mo.endsWith("lah")); // true
console.log(mo.endsWith("d", 7)); // true
console.log(mo.endsWith("med", 7)); // true

