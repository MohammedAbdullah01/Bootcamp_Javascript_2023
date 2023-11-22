/* 
To Understand Ajax , Fetch , Promises

CallBack Hell || Pyramid Of Doom

  - What Is Callback ?
  - Callback Hell Example In a  Google Search (Callback Hell) In Tab Images
  
  
  What Is Callback ?

  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
    [1] Download Photo From URL
    [2] Resize Photo  
    [3] Add Logo To The Photo 
    [4] Show The Photo In Website
*/

function makeRed(e) {
  e.target.style.color = "red";
}

let p = document.createElement("p");

p.appendChild(document.createTextNode("Testing Text"));
document.body.appendChild(p);

// On Click Event
p.addEventListener("click", makeRed);

/***************************** */
 
function iamCallback() {
  console.log("Iam Callback Function :)");
}

setTimeout(iamCallback, 1000);

setTimeout(() => {
  console.log("Download Photo From URL");
  setTimeout(() => {
    console.log("Resize Photo");
  }, 1000);
  setTimeout(() => {
    console.log("Add Logo To The Photo");
  }, 1000);
  setTimeout(() => {
    console.log("Show The Photo In Website");
  }, 1000);
}, 1000);
