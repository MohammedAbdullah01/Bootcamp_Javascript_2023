/*
    Challenge 3
    1- Find Smallest Number In All Variables And Return Integer
    2- Use Variable q + w  One Time Get The Needed Output => 10000
    3- Get Integer "2" From w Variable With 4 Method
    4- Use Variables r + w To Get This Values Output => 66.67 is a string , 67 is a Number 
 */


let q = 1_00;
let r = 2_00.5;
let e = 1e2;
let w = 2.4;

// 1
console.log(Math.trunc(Math.min(q, r, e, w))); // 2

// 2
console.log(Math.pow(q, Math.trunc(w))); // 10000

// 3
console.log(Math.trunc(w), Math.floor(w), Math.round(w), parseInt(w)); // 2 2 2 2

// 4
console.log((Math.floor(r) / 3).toFixed(2)); // 66.67 => type of String 

console.log((Math.round(r / Math.ceil(w)))); // 67 => type Of Number