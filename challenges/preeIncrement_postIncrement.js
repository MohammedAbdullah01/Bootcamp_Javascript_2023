/*
    Challenge 1
*/

let d = "-100";
let v = "20";
let m = 30;
let f = true;

console.log(+d * -v); // 2000
console.log(++v * ++f + ++m + -d); // 173


/***********************************/


/*
    Challenge 2
 */
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++) // 100

console.log(++a + -b + +c++ - -a++ + +a); // 100

console.log(--c + +b + --a * +b++ - +b * a + --a - +true); //100