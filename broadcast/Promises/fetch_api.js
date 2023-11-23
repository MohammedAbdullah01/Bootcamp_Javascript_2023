/*
Fetch API
  - Return A Representation Of The Entire HTTP Response
*/

fetch("https://api.github.com/users/MohammedAbdullah01/repos")
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((myJson) => {
    myJson.length = 2;
    return myJson;
  })
  .then((the_end_result) => {
    console.log(the_end_result[0].name); // avito-store
  });
