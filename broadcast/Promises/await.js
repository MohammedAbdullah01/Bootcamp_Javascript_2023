/*
Await
  - Await Works Only Inside Asnyc Functions
  - Await Make Javascript Wait For The Promise Result 
  - Await Is More Elegant Syntax Of Getting Promise Result 
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Iam The Good Promise");
    reject(Error("Iam The Bad Promise"));
  }, 3000);
});

async function readData() {
  console.log("Before Promise");

  /* myPromise.then((resValue) => console.log(resValue));
  Before Promise
  After Promise
  Iam The Good Promise
  */

  /* console.log(await myPromise);
  Before Promise
  Iam The Good Promise
  After Promise
  */

  /* console.log(await myPromise.catch((err) => err));
  Before Promise
  Error: Iam The Bad Promise
  After Promise
  */

  console.log("After Promise");
}

readData();
