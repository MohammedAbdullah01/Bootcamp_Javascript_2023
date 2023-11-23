/*
Async Await With Try , Catch , Finally
*/

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Iam The Good Promise");
//     // reject(Error("Iam The Bad Promise"));
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await myPromise);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();
/* Result
  The Operation Is Done
  Before Promise
  Error: Iam The Bad Promise
  After Promise
  */

/***************************************** */

// Another Way

// function readData() {
//   myPromise
//     .then(async (resoValue) => {
//       console.log("Before Promise");
//       console.log(await resoValue);
//       console.log("After Promise");
//     })
//     .catch((regValue) => console.log(regValue))
//     .finally(console.log("The Operation Is Done"));
// }
// readData();

/*
Result
  if Try 
    Before Promise
    Iam The Good Promise
    After Promise

    if Catch 
    The Operation Is Done => finally
    Error: Iam The Bad Promise
    */

/***************************************** */

// Example Promise +  Using Fetch

async function fetchData() {
  console.log("Before Promise");
  try {
    let myData = await fetch(
      "https://api.github.com/users/MohammedAbdullah01/repos"
    );
    console.log(await myData.json());
  } catch (error) {
    console.log(error);
  } finally {
    console.log("After Promise");
  }
}

fetchData();
