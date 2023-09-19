/*
    Arrays
    - Create Arrays [Two Method] New Array() + []
    - Access Arrays Elements
    - Nested Arrays 
    - Change Arrays Elements
    - Check For Arrays Array.isArray(arr);
*/

let myFriends = ["Mohamed", "Noar", "Noah", ["Ali", "Khalid"]];

console.log(`Hello ${myFriends[0]}`); // Mohamed
console.log(`Hello ${myFriends[1][2]}`); // a
console.log(`Hello ${myFriends[2]}`); // Noah
console.log(`Hello ${myFriends[3][0]}`); // Ali
console.log(`Hello ${myFriends[3][0][1]}`); // l
console.log(`Hello ${myFriends[3][1]}`); // Khalid

console.log(myFriends);

myFriends[1] = "Noor";
console.log(myFriends); // ["Mohamed", "Noor", "Noah", ["Ali", "Khalid"]];

myFriends[3][2] = "Ameer";
console.log(myFriends); // ["Mohamed", "Noar", "Noah", ["Ali", "Khalid" , Ameer]];

console.log(Array.isArray(myFriends)); // true

console.log(myFriends.length); // 4

/******************************************** */

/*
    Arrays Methods [Adding and Removing]
    - unshift("" , "")  => Add Element Tot The First 
    - push("" , "")     => Add Element Tot The End 
    - shift()           => Remove First Element From Array 
    - pop()             =>  Remove last Element From Array 
*/


let myFriends2 = ["Mohamed", "Noar", "Noah", ["Ali", "Khalid"]];

myFriends2.unshift("Nabil");
console.log(myFriends2); // ['Nabil', 'Mohamed', 'Noar', 'Noah', Array(2)]

myFriends2.push("Noha");
console.log(myFriends2); // ['Nabil', 'Mohamed', 'Noar', 'Noah', Array(2), 'Noha']

myFriends2.shift();
console.log(myFriends2); // ['Mohamed', 'Noar', 'Noah', Array(2), 'Noha']

myFriends2.pop();
console.log(myFriends2); // ['Mohamed', 'Noar', 'Noah', Array(2)]

/******************************************** */

/*
    Arrays Methods [Adding and Removing]
    - indexOf(Search Element , From Index [opt])   
    - lastIndexOf(Search Element , From Index [opt]) 
    - includes(Value To Find , From Index [opt]) [ES7] 
*/

let myFriends3 = ["Mohamed", "Noar", "Noah", ["Ali", "Khalid"]];


console.log(myFriends3.indexOf("Noah")); // 2
console.log(myFriends3.indexOf("Ali", 3)); // -1

console.log(myFriends3.lastIndexOf("Noar")); // 1

let ss = myFriends3[3];
console.log(ss.lastIndexOf("Khalid")); // 1


/******************************************** */

/*
    Arrays Methods [Sort]
    - sort(Function [opt])   
    - reverse() 
*/

let myFriends4 = [10, "Mohamed", "Ahmed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends4);

console.log(myFriends4.sort()); // (10) [-10, -20, 10, '10', 100, 20, '90', 9000, 'Ahmed', 'Mohamed']

console.log(myFriends4.reverse()); // ['Mohamed', 'Ahmed', 9000, '90', 20, 100, '10', 10, -20, -10]


/******************************************** */

/*
    Arrays Methods [Slicing]
    - slice(start [opt] , End[opt] Not Including End)
        slice() => All array
        If Start Undefined => 0
        Negative Count From End
        If End Is Undefined || > Indexes => Slice To The End Array.length
        Return New Array

    - splice(Start [Mand] , DeleteCount[opt] [0 No Remove] , The items To Add [opt])
        If Negative => Start From The End 
*/

let myFriends5 = ["Ahmed", "Sayed", "Noar", "Ali", "Osama"];

console.log(myFriends5.slice(1)); // ["Sayed" , "Noar" , "Ali" , "Osama"]

console.log(myFriends5.slice(-3, -2)); // ["Noar"]

console.log(myFriends5.slice(0, -2)); // ["Ahmed" , "Sayed" , "Noar" ]



myFriends5.splice(0, 2, "Nabil", "Taha"); //
console.log(myFriends5); //  ['Nabil', 'Taha', 'Noar', 'Ali', 'Osama']

myFriends5.splice(-2, 2, "Nabil", "Taha"); //
console.log(myFriends5); //  ['Nabil', 'Taha', 'Noar', 'Nabil', 'Taha']


/******************************************** */

/*
    Arrays Methods [Joining]
    - concat(array , array) => return a New Array
    - join(Separator)
*/

let myFriends6 = ["Ahmed", "Mohamed", "Gamal", "Ali", "Osama"];
let myNewFriends = ["Samy", "Sameh"];
let schoolNewFriends = ["Haytham", "Shady"];

let allFriends = myFriends6.concat(myNewFriends, schoolNewFriends, "Karma");

console.log(allFriends); // ['Ahmed', 'Mohamed', 'Gamal', 'Ali', 'Osama', 'Samy', 'Sameh', 'Haytham', 'Shady', 'Karma']

console.log(myFriends6.join()); // Ahmed,Mohamed,Gamal,Ali,Osama

console.log(myFriends6.join(" @ ")); // Ahmed @ Mohamed @ Gamal @ Ali @ Osama