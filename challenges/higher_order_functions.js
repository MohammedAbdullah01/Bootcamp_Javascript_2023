/*
    Higher Order Function Challenges


    You Can Use
    - ,
    - _
    - Space
    - True => 1 => One Time Only In The Code

    You Cannot Use
    - Numbers
    - Leatters

    - You Must Use [Filter + Map + Reduce + Your Knowledge  ]
    - Order In Not Important
    - All In One Chain
*/


let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solotion = myString.split("")
    .filter((ele, index, arr) => ele !== "," && isNaN(parseInt(ele)) && index !== arr.length - true)

    .map((ele, index) => ele == "_" ? " " : ele)
    .reduce(function (acc, current, index, array) {
        return (`${acc}` === `${current}`) ? `${acc}` : `${acc}${current}`

    });

console.log(solotion);  // Elzero Web School