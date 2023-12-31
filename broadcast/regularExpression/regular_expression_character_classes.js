/*
Regular Expression

    Character Classes

    .  => matches any character , except newline or other line terminators.
    \w => matches word characters . [a-z, A-Z , 0-9 and Underscore ] 
    \W => matches Non word characters  
    \d => matches digits from 0 to 9  
    \D => matches Non-digits from characters  
    \s => matches witespace character  
    \S => matches Non witespace character  
*/

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";

let dot = /./g;
let word = /\w/g;
let wordCapital = /\W/g;
let digits = /\d/g;
let NonDigits = /\D/g;
let witespace = /\s/g;
let NonWiteSpace = /\S/g;
let validEmail = /\w@\w.(com|net)/gi;
let validEmailNotNumber = /[a-z]@[a-z].(com|net)/gi;

console.log(email.match(validEmail)); // ['O@g.com', 'O@g.net', 'A@Y.com', '1@1.com']
console.log(email.match(validEmailNotNumber)); // ['O@g.com', 'O@g.net', 'A@Y.com']

console.log(email.match(dot)); // ['O', '@', '@', '@', 'g', '.', '.', '.', 'c', 'o', 'm', ' ', 'O', '@', 'g', '.', 'c', 'o', 'm', ' ', 'O', '@', 'g', '.', 'n', 'e', 't', ' ', 'A', '@', 'Y', '.', 'c', 'o', 'm', ' ', 'O', '-', 'g', '.', 'c', 'o', 'm', ' ', 'o', '@', 's', '.', 'o', 'r', 'g', ' ', '1', '@', '1', '.', 'c', 'o', 'm']
console.log(email.match(word)); // ['O', 'g', 'c', 'o', 'm', 'O', 'g', 'c', 'o', 'm', 'O', 'g', 'n', 'e', 't', 'A', 'Y', 'c', 'o', 'm', 'O', 'g', 'c', 'o', 'm', 'o', 's', 'o', 'r', 'g', '1', '1', 'c', 'o', 'm']
console.log(email.match(wordCapital)); // ['@', '@', '@', '.', '.', '.', ' ', '@', '.', ' ', '@', '.', ' ', '@', '.', ' ', '-', '.', ' ', '@', '.', ' ', '@', '.']
console.log(email.match(digits)); //  ['1', '1']
console.log(email.match(NonDigits)); //  ['O', '@', '@', '@', 'g', '.', '.', '.', 'c', 'o', 'm', ' ', 'O', '@', 'g', '.', 'c', 'o', 'm', ' ', 'O', '@', 'g', '.', 'n', 'e', 't', ' ', 'A', '@', 'Y', '.', 'c', 'o', 'm', ' ', 'O', '-', 'g', '.', 'c', 'o', 'm', ' ', 'o', '@', 's', '.', 'o', 'r', 'g', ' ', '@', '.', 'c', 'o', 'm']
console.log(email.match(witespace)); //  [' ', ' ', ' ', ' ', ' ', ' ']
console.log(email.match(NonWiteSpace)); //  ['O', '@', '@', '@', 'g', '.', '.', '.', 'c', 'o', 'm', 'O', '@', 'g', '.', 'c', 'o', 'm', 'O', '@', 'g', '.', 'n', 'e', 't', 'A', '@', 'Y', '.', 'c', 'o', 'm', 'O', '-', 'g', '.', 'c', 'o', 'm', 'o', '@', 's', '.', 'o', 'r', 'g', '1', '@', '1', '.', 'c', 'o', 'm']

// Trining
let m = "Mohamed                 A hmed";

let result = m.match(/[\w\^s]/gi);

console.log(result); // MohamedAhmed
console.log(result.join("")); // MohamedAhmed

/*
Character Classes

    \b => matches at the beginning or end of a word 
    \B => matches Not at the beginning or end of a word 

    Test Method
    pattern.test(inpute);
*/

let names = "Mohamed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

let reg = /\bspam/gi;

console.log(names.match(reg)); // ['Spam', 'Spam']

reg = /spam\b/gi;
console.log(names.match(reg)); // ['Spam', 'Spam', 'Spam']

reg = /(\bspam|spam\b)/gi;
console.log(names.match(reg)); // ['Spam', 'Spam', 'Spam', 'Spam', 'Spam']

reg = /(\Bspam|spam\B)/gi;
console.log(names.match(reg)); // ['Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'spam']

// Test Method => Return Boolean =>  found = return true - notFound = return false
console.log(reg.test(names)); // true
console.log(/(\bspam|spam\b)/gi.test("Mohamed")); // False
console.log(/(\bspam|spam\b)/gi.test("1spam")); // true
console.log(/(\bspam|spam\b)/gi.test("spam1")); // true
