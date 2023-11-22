/*
  Promise And XHR 
*/

function getData(APILink) {
  return new Promise(function (resolve, reject) {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };
    myRequest.open("GET", APILink);
    myRequest.send();
  });
}

getData("https://api.github.com/users/MohammedAbdullah01/repos")
  .then(function (result) {
    result.length = 3;
    // console.log(result); // avito-store
    console.log(result[0].name); // avito-store
  })
  .catch(function (reg) {
    console.log(reg);
  });
