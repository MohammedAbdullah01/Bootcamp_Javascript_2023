/*
DOM
- DOM Selectors
-- Find Element By ID
-- Find Element By Tag Name
-- Find Element By Class Name
-- Find Element By CSS Selectors
-- Find Element By Collection
------- title
------- body
------- images
------- forms
------- links
*/


let myIdElement = document.getElementById("my-div");
let myTagElement = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let mySelectorsElement = document.querySelector(".special");
let myquerySelectorAllElement = document.querySelectorAll(".my-span");



console.log(myIdElement);
console.log(myTagElement[1]);
console.log(myClassElement);
console.log(mySelectorsElement);
console.log(myquerySelectorAllElement);


console.log(document.title); // Broadcast JavaScript
console.log(document.body);
console.log(document.forms[0].one.value); //  Hello
console.log(document.links[1].href); //  https://youtube.com/



/************************** */

/*
    DOM 
    [Get / Set Element Content And Attributes]

    - innerHTML 
    - textContent 
    - Change Attributes Directly 
    - Change Attributes Methods 
    - getAttribute 
    - setAttribute
    
    Search
    - innerText
*/


let myElement = document.querySelector(".js");

console.log(myElement.innerHTML); // JavaScript<span>Div</span>
console.log(myElement.textContent); // JavaScript Div

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text  <span>Main.js</span> File";

console.log(myElement.innerHTML); // Text From <span>Main.js</span> File => print span Tag Html
console.log(myElement.textContent); // Text  <span>Main.js</span> File => print span Text

// Added || Updated Attribute Directly
document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

document.links[2].href = "https://youtube.com";


// Change Attributes Methods 

let myLink = document.querySelector(".link");

myLink.textContent = "Youtube";
console.log(myLink.getAttribute("class")); // link
console.log(myLink.getAttribute("href")); // https://youtube.com 

myLink.textContent = "linkedin"; // Updated TextContent Value 
myLink.setAttribute("href", "https://linkedin.com"); // Updated Attribute Value href
console.log(myLink.getAttribute("href")); // https://linkedin.com

myLink.setAttribute("title", "LinkedIn"); // Added Attribute 


/************************** */

/*
    DOM  3
    [Check Attributes]

    - Element.attributes 
    - Element.hasAttribute 
    - Element.hasAttributes 
    - Element.removeAttribute
*/


console.log(document.getElementsByTagName("p")[2].attributes); // get All Attributes => class , title , data-src

let myP = document.getElementsByTagName("p")[2];

// Check Attribute = > hasAttribute() => return true || false
if (myP.hasAttribute("data-src")) // return Boolean
{
    if (myP.getAttribute("data-src") === "") {
        myP.removeAttribute("data-src");
    } else {
        myP.setAttribute("data-src", "Mohamed")
    }
} else {
    console.log("Not Found");
}

// Check Atributes => found || Not Found
if (myP.hasAttributes()) {
    console.log("Yes Has Attributes"); // Yes Has Attributes
}


if (document.getElementsByTagName("div")[3]) {
    console.log("Has Attributes"); // Has Attributes
} else {
    console.log("Has Not Attributes"); // Has Attributes

}



/************************** */

/*
    DOM 4
    [Create Element]

    - createElement 
    - createComment 
    - createTextNode 
    - createAttribute 
    - appendChild
*/

let myElement2 = document.createElement("div");

let myCreateAttribute = document.createAttribute("data-custom"); //Created Attribute No Value
let myCreateTextNode = document.createTextNode("Product One"); // <div>product One</div>
let myCreateComment = document.createComment("This Is Div"); // Comment on The Div

myElement2.className = "product";
myElement2.setAttributeNode(myCreateAttribute);
myElement2.setAttribute("data-test", "New Test");

myElement2.appendChild(myCreateComment);
myElement2.appendChild(myCreateTextNode);

document.body.appendChild(myElement2);


/************************** */

// Example print Div => h1 => p --- 1 To 100

for (let index = 1; index <= 100; index++) {

    let myElement3 = document.createElement("div");
    let myElementH1 = document.createElement("h1");
    let myElementp = document.createElement("p");

    let myCreateTextNodeh = document.createTextNode(`Product Title ${index}`); // <div>product One</div>
    let myCreateTextNodep = document.createTextNode(`Product  Pragraph ${index}`); // <div>product One</div>


    // Add Heading Text
    myElementH1.appendChild(myCreateTextNodeh);

    // Add Heading To Element
    myElement3.appendChild(myElementH1);

    // Add Pragraph Text
    myElementp.appendChild(myCreateTextNodep);
    // Add Pragraph To Element 

    myElement3.appendChild(myElementp);

    myElement3.className = `product ${index}`;

    document.body.appendChild(myElement3);

}



/************************** */

/*
    DOM 6
    [Deal With Childrens]

    - children
    - childNodes
    - firstChild
    - lastChild
    - firstElementChild
    - lastElementChild
*/

let myCh = document.getElementsByTagName("div")[3];

console.log(myCh.children); // [p, span] => length 2 

console.log(myCh.childNodes); // [comment, text, p, span, comment, text] => length 6

console.log(myCh.firstChild); // comment <!--FirstComment-->

console.log(myCh.lastChild); // text "Hello"

console.log(myCh.firstElementChild); // <p>Hello P</p>

console.log(myCh.lastElementChild); // <span>Hello S</span>








