/*
Regular Expression

    Ranges

    - Part 1 
    
    (X|Y) => X OR Y 
    [0-9] => 0 To 9  
    [^0-9] => Any Character Not 0 To 9
    Practice  
    ------------------
    - Part 2

    [a-z]
    [^a-z]
    [A-Z]
    [^A-Z]
    [abc]
    [^abc]
    
*/

// - Part 1

let tld = "Com Net Org Info Code Io";
let tldRe = /(org|info|code)/gi;

console.log(tld.match(tldRe)); //  ['Org', 'Info', 'Code']

let nums = "12345678910";
let numsRe = /[0-9]/;

console.log(nums.match(numsRe)); //  ['1', index: 0, input: '12345678910', groups: undefined]

numsRe = /[0-9]/g;
console.log(nums.match(numsRe)); // ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0']

numsRe = /[0-2]/g;
console.log(nums.match(numsRe)); // ['1', '2', '1', '0']

// All Nums Not 0 To 2
numsRe = /[^0-2]/g;
console.log(nums.match(numsRe)); // ['3', '4', '5', '6', '7', '8', '9']

// Special Characters
let specialNums = "1$23!45@678#9%10";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe)); // ['$', '!', '@', '#', '%']

// Practice
let practice = "Nm1 Nm1Nm Nm2 Nm8 Nm8Nm";
let practiceRe = /nm[5-9]nm/gi;
console.log(practice.match(practiceRe)); // ['Nm8Nm']

// - Part 2

// [a-z]
let myString = "AaBbcdefG123!234%^&*";
let aTozSmall = /[a-z]/g;

console.log(myString.match(aTozSmall)); // ['a', 'b', 'c', 'd', 'e', 'f']

// All Character Not a To z => [^a-z]
aTozSmall = /[^a-z]/g;
console.log(myString.match(aTozSmall)); // ['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']

// [A-Z]
AtoZCapetal = /[A-Z]/g;
console.log(myString.match(AtoZCapetal)); // ['A', 'B', 'G']

// All Character Not A To Z => // [^A-Z]
AtoZCapetal = /[^A-Z]/g;
console.log(myString.match(AtoZCapetal)); // ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']

// [abc]

characterOnly = /[ace]/g;

console.log(myString.match(characterOnly)); //  ['a', 'c', 'e']

// [^abc]

notCharacterOnly = /[^ace]/g;

console.log(myString.match(notCharacterOnly)); // ['A', 'B', 'b', 'd', 'f', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']


// All Character a To z && A To Z
aATozZ = /[a-zA-Z]/g;

console.log(myString.match(aATozZ)); //  ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']

// Not a To z && A To Z
notaATozZ = /[^a-zA-Z]/g;

console.log(myString.match(notaATozZ)); //  ['1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']

// Special Only
SpecialOnly = /[^a-zA-Z0-9]/g;

console.log(myString.match(SpecialOnly)); //  ['!', '%', '^', '&', '*']
