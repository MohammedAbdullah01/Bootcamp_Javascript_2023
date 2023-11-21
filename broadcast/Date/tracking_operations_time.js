/*
Date and Time 
- Track Operations Time 

    Search 
    - Performance.now()
    - Performance.mark()
*/

// Start Time

let start = new Date();

// Operation

for (let index = 0; index < 100000; index++) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(index));
  document.body.appendChild(div);
}

// end Time
let end = new Date();

// Operation Duration
let duration = end - start;

console.log(duration);
