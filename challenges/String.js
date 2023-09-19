/*
    String Challenge 4
        All Solution Must Be in One Chain
        You Can Use Concatenate

    1- include This Methods in Your Solution [slice , charAt] Output => Zero
    2- Output => Repet H 8 and toUpperCace 
    3- Output => Return Array [Elzero]  
    4- Use Only "substr" Method + Teplate Literals In Your Solution Output=> Elzero School
    5- Solution Must Be Dynamic And String May Change Output => eLZERO WEB SCHOOl
 */

let t = "Elzero Web School";

//  1 
console.log(t.charAt(2).toUpperCase() + t.slice(3, 6)); // Zero

// 2 
console.log(t.charAt(13).toUpperCase().repeat(8)); // H H H H H H H H 

// 3
console.log(t.split(" ", 1)); // [Elzero]

// 4
console.log(t.substring(0, 6) + t.substring(10)); // Elzero School

// 5
console.log(t.charAt(t.length - t.length).toLocaleLowerCase()
    + t.slice(t.length - t.length + 1, t.length - 1).toUpperCase()
    + t.charAt(t.length - 1).toLocaleLowerCase()); // eLZERO WEB SCHOOl