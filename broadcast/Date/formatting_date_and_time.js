/*
Date and Time 

    new Date (timestamp)
    new Date (Date String)
    new Date (Numeric Value)

    Format
    - "Aug 16 1997"
    - "8 16 1997"
    - "1997-8-16" => ISO International Stander
    - "1997 10" 
    - "1997" 
    - "97" 
    - "1997 , 8 , 16 , 2 ,10 ,0" 
    - "1997 , 8 , 16" 
    - "1997-8-16T06:10:00Z" 

    Date.parse("String") => Read Date From a String
*/

console.log(Date.parse("Aug 16 1997")); // 871678800000

//new Date (timestamp)
console.log(new Date(871678800000)); // Sat Aug 16 1997 00:00:00

let date1 = new Date("8 16 1997");
console.log(date1); // Sat Aug 16 1997 00:00:00

let date2 = new Date("8-1");
console.log(date2); // Wed Aug 01 2001 00:00:00

let date3 = new Date("1997");
console.log(date3); // Wed Jan 01 1997 02:00:00

let date4 = new Date("97"); // Wed Jan 01 1997 00:00:00
console.log(date4);

let date5 = new Date(1997, 8, 16, 2, 10, 0);
console.log(date5); // Tue Sep 16 1997 02:10:00

let date6 = new Date(1997, 8, 16);
console.log(date6); // Sep 16 1997 00:00:00

let date7 = new Date("1997-10-25T06:10:00Z");
console.log(date7); // Sat Oct 25 1997 08:10:00
