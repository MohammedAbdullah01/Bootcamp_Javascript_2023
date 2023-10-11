let arrayList = ["Home", "About", "Service", "Content"];
let header = document.createElement("header");
let span = document.createElement("span");
let ul = document.createElement("ul");

let logo = document.createTextNode(`Elzero`);

span.appendChild(logo);

header.appendChild(span);
header.appendChild(ul);
for (let index = 0; index < arrayList.length; index++) {
    let li = document.createElement("li");
    let newLi = document.createTextNode(arrayList[index]);
    li.appendChild(newLi)
    ul.appendChild(li);
}



document.body.appendChild(header);






// Css
// header
// display: flex;
// align - items: center;
// justify - content: space - between;
// padding: 20px;
// background - color: rgb(255, 255, 255);
