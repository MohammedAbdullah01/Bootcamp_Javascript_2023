/*
Regular Expression

    Quantifiers =>  Part 1

    n+  => One Or More  
    n*  => Zero Or More  
    n?  => Zero Or One  
*/

//Mail
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
let mailReg = /\w+@\w+.(com|net)/gi;
console.log(mails.match(mailReg)); //  ['osama@gmail.com', 'elzero@gmail.net']

mailReg = /\w+@\w+.\w+/gi;
console.log(mails.match(mailReg)); //  ['o@nn.sa', 'osama@gmail.com', 'elzero@gmail.net', 'osama@mail.ru']

// Numbers
let nums = "0110 10 150 05120 0560 350 00";
let numsReg = /0\d+0/gi;
console.log(nums.match(numsReg)); // ['0110', '05120', '0560']

numsReg = /0\d*0/gi;
console.log(nums.match(numsReg)); // ['0110', '05120', '0560', '00']

// URLS
let urls = "https://google.com http://www.website.net web.com";
let urlReg = /(https?:\/\/)?(www.)?\w+.(com|net)/gi;
console.log(urls.match(urlReg)); //  ['https://google.com', 'http://www.website.net', 'web.com']

/***************************************** */

/*
Regular Expression

    Quantifiers =>  Part 2 

    n{x}  => Number of  
    n{x , y}  => Range  
    n{x,}  => At Least x   
*/

let serials = "S100S S3000S S50000S S950000S";

// S[Three Number]S
console.log(serials.match(/\bs\d{3}s\b/gi)); // ['S100S']

// S[Four Or Five Number]S
console.log(serials.match(/\bs\d{4,5}s\b/gi)); // ['S3000S', 'S50000S']

// // S[At Least Four]S
console.log(serials.match(/s\d{4,}s/gi)); // ['S3000S', 'S50000S', 'S950000S']

/***************************************** */

/*
Regular Expression

    Quantifiers =>  Part 3 

    $   => End With Something  
    ^   => Start With Something
    ?=  => Followed By Something
    ?!  => Not Followed By Something
*/

let mystring = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

//1- [ $ ]
console.log(/ing$/gi.test(mystring)); // True
console.log(/Pro$/gi.test(mystring)); // False
console.log(/lz$/g.test(names)); // False

//2- [ ^ ]

console.log(/^we/gi.test(mystring)); // True
console.log(/^\d/gi.test(names)); // True
console.log(/^2/g.test(names)); // False

//3- [ ?= ]

console.log(names.match(/\d\w{5}(?=z)/gi)); //  ['1Osama', '2Ahmed', '5Gamal']

//4- [ ?= ]
console.log(names.match(/\d\w{8}(?!z)/gi)); //  ['3Mohammed']
