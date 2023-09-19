/*
    Scope
    - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
    var a = 10;
    let b = 20;
    console.log(`Function - From Local ${a}`);
    console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();


/********************* */

/*
    Scope
    - Block Scope [If , Switch , For]
*/

var x = 10;

if(10 === 10)
{
    let x = 100;
    console.log(`From If Local ${x}`); // From If Local 100
}


console.log(`From Global ${x}`); // From Global 10


 // From Global 10
