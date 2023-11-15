let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

//Solution 1
console.log([...n1, ...n2].length * Math.max(...n2));

//Solution 2
// console.log([...n1, ...n2].length * new Set(n2).size * Math.min(...n1));

//Solution 3
// console.log(([...n1, ...n2].length ) * n2.shift());

//Solution 4
// console.log(n1.push(...n2) * Math.max(...n2));
