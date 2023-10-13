let arrayList = ["Home", "About", "Service", "Content"];
let header = document.createElement("header");
let spanLogo = document.createElement("span");
let ul = document.createElement("ul");


let logo = document.createTextNode(`Elzero`);

// Css Header & spanLogo & ul
document.body.style.cssText = "margin: 0px;background-color: rgb(236,236,236);font-family: Tahoma , Arial;"
header.style.cssText = "display: flex;padding: 20px;background-color: rgb(255,255,255);justify-content: space-between;align-items: center;";
spanLogo.style.cssText = "color: rgb(35,169,110); font-size: 30px;font-weight: bold;";
ul.style.cssText = "list-style: none;padding: 0px;margin: 0px;display: flex;";

spanLogo.appendChild(logo);

header.appendChild(spanLogo);

header.appendChild(ul);

// Foreach The li
for (let index = 0; index < arrayList.length; index++) {

    let li = document.createElement("li");

    li.style.cssText = "margin-right: 8px;color: rgb(136,136,136);";

    let newLi = document.createTextNode(arrayList[index]);

    li.appendChild(newLi)

    ul.appendChild(li);

    document.body.appendChild(header);
}

// Create Element Div Content & Div Product In Div Content & Span In Div Product

// Create Element div Content
let divContent = document.createElement("div");

// Added Class Name => Content
divContent.className = "content";

// Css Content
divContent.style.cssText = "display: flex;padding: 20px;flex-wrap: wrap;justify-content: center;gap: 20px;min-height: calc(100vh - 142px);box-sizing: border-box;";

// Foreach The Div Product
for (let index = 1; index <= 15; index++) {

    // Create Element div Product
    let divProduct = document.createElement("div");

    // Added Class Name => Product
    divProduct.className = "product";

    // Create Element Span
    let spanContent = document.createElement("span");

    //Css The Div Product && Span In Product
    divProduct.style.cssText = "padding: 20px;background-color: rgb(255,255,255);border: 1px solid rgb(221,221,221);width: calc((100% - 40px) /3);box-sizing: border-box;text-align: center;color: rgb(136,136,136);border-radius: 6px;";
    spanContent.style.cssText = "font-size: 40px;color: black;font-weight: normal;display: block;margin-top: 10px;margin-bottom: 10px;";

    let textProduct = document.createTextNode(`Product`);
    let textSpan = document.createTextNode(`${index}`);

    divContent.appendChild(divProduct)

    divProduct.appendChild(spanContent);

    divProduct.appendChild(textProduct);

    spanContent.appendChild(textSpan)

    document.body.appendChild(divContent);
}


// Create Element Footer
let footer = document.createElement("footer");

footer.className = "footer"; // Added Class Name => footer

let textFooter = document.createTextNode("Copyright 2023");

//Css Footer
footer.style.cssText = "background-color: rgb(35,169,110);font-size: 23px;text-align: center;padding: 19px;color: rgb(255,255,255);";

footer.appendChild(textFooter);
document.body.appendChild(footer);
