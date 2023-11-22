/*
    To Understand Ajax , Fetch , Promises

    Asynchronous Vs Synchronous Programming
    - Meaning

    Synchronous
    - Operations Runs In Sequence
    - Each Operation Must Wait For The Previous One To Complete
    - Story From Real Life 

    Asynchronous
    - Operations Run In Parallel 
    - This Means That An Operation Can Occur While Another One Is Still Being Processed
    - Story From Real Life 

    - Facebook as Example 
    - Simulation 

    Search
    - JavaScript Is a Single-Threaded
    - Multi Threaded Languages
*/

// Synchronous => Each Operation Must Wait For The Previous One To Complete

// console.log(1);
// console.log(2);
// console.log(window.alert("Operation"));
// console.log(3);


// Asynchronous =>  This Means That An Operation Can Occur While Another One Is Still Being Processed
console.log(1);
console.log(2);
setTimeout(() => console.log("Operation") , 3000);
console.log(3);
