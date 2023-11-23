/*
Promise
  - All 
  - All Settled 
  - Race 
*/

let myFirstPromise = new Promise((res, reg) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 1000);
});

let mySecondPromise = new Promise((res, reg) => {
  setTimeout(() => {
    res("Iam The Second Promise");
  }, 2000);
});

let myThreePromise = new Promise((res, reg) => {
  setTimeout(() => {
    reg("Iam The Three Promise");
  }, 3000);
});

// =============== Example Promise All  ===============

// Promise.all([myFirstPromise, mySecondPromise, myThreePromise]).then(
//   (resValues) => console.log(resValues),
//   /*
//   In case Promises All  => Return resolve All
//     [
//       'Iam The First Promise',
//       'Iam The Second Promise',
//       'Iam The Three Promise'
//     ]

//     In case Promises All  => Return 1 reject

//     */
//   (rejValues) => console.log(rejValues) // Iam The Three Promise
// );

// =============== Example Promise allSettled  ===============

// Promise.allSettled([myFirstPromise, mySecondPromise, myThreePromise]).then(
//   (resValues) => console.log(resValues),
//   (rejValues) => console.log(rejValues)

//   /*
//   Return All Promises resolve || Reject

//     0: {status: 'fulfilled', value: 'Iam The First Promise'}
//     1: {status: 'fulfilled', value: 'Iam The Second Promise'}
//     2: {status: 'rejected', reason: 'Iam The Three Promise'}
//     */
// );

// =============== Example Promise Race  ===============

Promise.race([myFirstPromise, mySecondPromise, myThreePromise]).then(
  (resValues) => console.log(resValues),
  (rejValues) => console.log(rejValues)

  /*
  race => Return The First Result
  Return 1 Promise resolve || Reject  
    Iam The First Promise
    */
);
