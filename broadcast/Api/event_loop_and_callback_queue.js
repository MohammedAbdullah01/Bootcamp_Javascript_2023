/*
To Understand Ajax , Fetch , Promises

    Event Loop + Callback Queue
    
    Story
    - Javascript Is A Single Threaded Language "All Operations Executed In Single Thread"
    - Call Stack Track All Calls
    - Every Function Is Done Its Poped Out 
    - When You Call Asynchronous Function It Sent To Browser API
    - Asynchronous Function Like Settimeout Start Its Own Thread
    - Browser API Act As A Second Thread 
    - API Finish Waiting and Send Back The Function For Processing
    - Browser API Add The Callback To Callback Queue
    - Event Loop Wait For Call Stack To Be Empty 
    - Event Loop Get Callback From Callback Queue and Add It To Call Stack
    - Callback Queue Follow FIFO "First In First Out" Rule 
*/

console.log(1);
console.log(2);
setTimeout(() => console.log(4), 0);
setTimeout(() => console.log(5), 0);
console.log(3);

/*
======== Result ========
1
2
3
4
5
*/

// Example 2

let number = 100;
console.log(number);

/*
======== Result ========
1
2
3
100
4
5
*/

// Example 3
let number2 = 6;

setTimeout(() => console.log(number2));

/*
======== Result ========
1
2
3
100
4
5
6
*/

// Example 4

setTimeout(() => console.log(number3));

let number3 = 7;

/*
======== Result ========
1
2
3
100
4
5
6
7
*/
