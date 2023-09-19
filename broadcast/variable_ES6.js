/*  
    Var
    - Redeclare (Yes)
    - Access Before Declare (Undefind)
    - Variable Scope Drama [Added To Window] (Yes)
    - Block or Function Scope

    Let
    - Redeclare (No =>  Error) 
    - Access Before Declare (Error)
    - Variable Scope Drama (No Added To Window)
    - Block or Function Scope

    const
    - Redeclare (No =>  Error)
    - Access Before Declare (Error)
    - Variable Scope Drama (No Added To Window)
    - Block or Function Scope
*/

// Var =>  Redeclare
var userName = "Mohamed";
var userName = "Mohamed Abdullah";
console.log(userName); // Mohamed Abdullah

// Let => Redeclare (No =>  Error) 
let userName2 = "Mohamed 2";
let userName2 = "Mohamed 2d";
console.log(userName2); // Error =>  Identifier 'userName2' has already been declared 

// const => Redeclare (No =>  Error) 
let userName3 = "Mohamed 3";
let userName3 = "Mohamed 3d";
console.log(userName3); // Error =>  Identifier 'userName2' has already been declared 


// Var => Access Before Declare (Undefind)
console.log(a); // Undefind
var a = "abc";


// Let => Access Before Declare (Error)
console.log(b); // Cannot access 'b' before initialization
let b = "abc";


// const => Access Before Declare (Error)
console.log(c); // Cannot access 'c' before initialization
let c = "abc";

// Var => Variable Scope Drama [Added To Window] (Yes)
var d = "abc";
console.log(d); // Existing in Window Object


// Let => Variable Scope Drama [No Added To Window] (No)
let f = "abc";
console.log(f); // Not Existing in Window Object


// Let => Variable Scope Drama [No Added To Window] (No)
const v = "abc";
console.log(v); // Not Existing in Window Object
