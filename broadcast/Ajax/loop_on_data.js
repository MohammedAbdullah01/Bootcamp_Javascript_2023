/*
Ajax
	Loop On Data

	Search
	- Cross Origin API [CORS]
	- API Authentication
*/

let req = new XMLHttpRequest();

req.open("GET", "https://api.github.com/users/MohammedAbdullah01/repos", true);
req.send();
console.log(req);

req.onreadystatechange = function () {
  console.log(this.readyState);
  console.log(this.status);
  if (this.readyState === 4 && this.status === 200) {
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData)
    for (let index = 0; index < jsData.length; index++) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      let br = document.createElement("br");

      div.appendChild(
        document.createTextNode(`Owner Project : ${jsData[index].full_name}`)
      );
      p.appendChild(
        document.createTextNode(`Name Project : ${jsData[index].name}`)
      );
      div.appendChild(p);
      div.appendChild(br);
      document.body.appendChild(div);
    }
  }
};
