/*
Async
  - Async Before Function Meen This Function Return a Promise
  - Async and Adwait Help In Creating Asynchronous Promise Behavior With Cleaner Style
  */

// function getData() {
//   return new Promise((reso, reje) => {
//     let users = ["Mohamed"];
//     if (users.length > 0) {
//       reso("Users Found");
//     } else {
//       reje("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resoValue) => console.log(resoValue),
//   (rejeValue) => console.log(`Rejected ${rejeValue}`)
// );

/****************************************** */

// Syntax Another way
// function getData() {
//   let users = [];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resoValue) => console.log(resoValue),
//   (rejeValue) => console.log(`Rejected ${rejeValue}`)
// );

/****************************************** */

// Syntax Another way Using =>   Async
async function getData() {
  let users = [];
  if (users.length > 0) {
    return "Users Found";
  } else {
    return "No Users Found";
  }
}

console.log(getData()); // Return Promise

/*
Promise {<fulfilled>: 'No Users Found'}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "No Users Found"
*/

getData().then(
  (resoValue) => console.log(resoValue),
  (rejeValue) => console.log(`Rejected ${rejeValue}`) // No Users Found
);
