/*
  Promises Intro and Syntax
  - Promises In Javascript  Is Like Promise In Real Life
  - Promises Is Something That Will Happen In The Future
  - Promises Avoid Callback Hell 
  - Promises Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status 
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed


  Story 
  - Once A Promise Has Been Called , It Will Start In a Pending State
  - The Created Promise Will Eventually End In a Resolved State Or In a Rejected State
  - Calling The Callback Functions (Passed To Then and Catch) Upon Finishing


  - Then
  --- Takes 2 Optional Argument [Callback For Success Or Failure]
*/

let myPromise = new Promise(function (resolveFunction, rejectFunction) {
  let connect = true;

  if (connect) {
    resolveFunction("Connection Successfully :)");
  } else {
    rejectFunction(Error("Connection Filed :("));
  }
});
// .then(
//   (resolveFunction) => console.log(`Good ${resolveFunction}`),
//   (rejectFunction) => console.log(`Bad ${rejectFunction}`)
// );

// Another way to see the result  [Fulfilled || Rejected] In The Object
myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

console.log(myPromise);
