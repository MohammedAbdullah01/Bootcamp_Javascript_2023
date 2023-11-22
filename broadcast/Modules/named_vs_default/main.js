/*
Modules
- Export Alias 
- Named Export 
- Default Export
- Import All 
*/

let a = 10;

let array = [1, 2, 3, 4];

function sayHello() {
  return "Hello";
}

// Default Export
export default function () {
  return "Anonymity Function Default";
}

// Export Alias 
export { a as myNumber, array, sayHello };
