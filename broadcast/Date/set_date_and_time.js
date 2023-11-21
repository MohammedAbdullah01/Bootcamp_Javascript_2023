/*
Date And Time 
    - setTime(Milliseconds)
    - setDate() => Day Of The Month [Negative and Positive]
    - setFullYear(year , month => Optional [0 - 11] , day => Optional [1-31]) 
    - setMonth(Month [0-11] , Day => Optional[1-31]) [Negative and Positive]
    - setHours(Hours [0 - 24] ,Minutes => Optional [0- 59] , Seconds => Optional[0 ,59] , Ms => Optional [0 - 999])
    - setMinutes(Minutes[0- 59] , Seconds => Optional[0 ,59] , Ms => Optional [0 - 999])
    - setSeconds(Seconds[0 ,59] , Ms => Optional [0 - 999])
*/

let dateNow = new Date();

console.log(dateNow);
console.log("#".repeat(30));

// setTime
// dateNow.setTime(0);
// console.log(dateNow); // Thu Jan 01 1970 02:00:(00) GMT+0200
// console.log("#".repeat(30));

// dateNow.setTime(10000);
// console.log(dateNow); // Thu Jan 01 1970 02:00:(10) GMT+0200
// console.log("#".repeat(30));

/********************** */

// // setDate
// dateNow.setDate(20); // Mon Nov 20 2023 23:15:23 GMT+0200
// dateNow.setDate(-2); // Sun Oct 29 2023 23:14:56 GMT+0200
// dateNow.setDate(33); // Sun Dec 03 2023 23:16:30 GMT+0200
// console.log(dateNow);
// console.log("#".repeat(30));

/********************** */

// // setFullYear
// dateNow.setFullYear(2020); // Sat Nov 21 2020 23:17:20 GMT+0200
// dateNow.setFullYear(1997 , 7 ,16); // Sat Aug 16 1997 23:19:35 GMT+0300
// console.log(dateNow);
// console.log("#".repeat(30));

/********************** */

// // setMonth
// dateNow.setMonth(0); // Jan 21 2023 23:22:44 GMT+0200
// dateNow.setMonth(1 , 1); // Wed Feb 01 2023 23:23:47 GMT+0200
// console.log(dateNow);
// console.log("#".repeat(30));

/********************** */

// // setHours
// dateNow.setHours(2); // Tue Nov 21 2023 02:25:00 GMT+0200
// dateNow.setHours(1 , 5 , 20 , 800); // Tue Nov 21 2023 01:05:20 GMT+0200
// console.log(dateNow);
// console.log("#".repeat(30));

/********************** */

// // setMinutes
// dateNow.setMinutes(2); // Tue Nov 21 2023 23:02:41 GMT+0200
// dateNow.setMinutes( 5 , 20 , 800); // Tue Nov 21 2023 23:05:20 GMT+0200
// console.log(dateNow);
// console.log("#".repeat(30));

/********************** */

// // setSeconds
// dateNow.setSeconds(2); // Tue Nov 21 2023 23:28:02 GMT+0200
dateNow.setSeconds(5, 800); //Tue Nov 21 2023 23:29:05 GMT+0200
// console.log(dateNow);
// console.log("#".repeat(30));
