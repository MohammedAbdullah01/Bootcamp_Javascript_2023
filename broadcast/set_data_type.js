/*
- Set Data Type 
Syntax : new Set(Iterable)
-- Object To Store Unique Value
-- Cannot Access Elements By Index

Properties:
- size

Method
- add 
- has 
- delete
- clear
*/

let myData = [1, 1, 1, 2, 3];
let myUniqueData = new Set(myData);


console.log(myData); // (5) [1, 1, 1, 2, 3]

console.log(myUniqueData); // Set(3) {1, 2, 3}

// size
console.log(myUniqueData.size); // 3

// add
console.log(myUniqueData.add("A")); // Set(4) {1, 2, 3, "A"}

// has
console.log(myUniqueData.has("A")); // return => true Is Found
console.log(myUniqueData.has(8)); // return => false Is Not  Found

// delete
console.log(myUniqueData.delete("A")); // Return => true
console.log(myUniqueData); // Set(3) {1, 2, 3}

// clear
myUniqueData.clear();
console.log(myUniqueData); // Set(0) {size: 0}



/*************************************** */


/*
- Set Vs WeakSet

The WeakSet Is weak Meaning references To Object In a WeakSet ara held Weakly.
if no Other references to an object stored in the weakSet exist ,
those objects can be garbage collected.

Set      => Can Store Any Data Values
WeakSet  => Collection Of Object Only 


Set      => Have Size Property 
WeakSet  => Does Not  Have Size Property  


Set      => Have Keys , Value , Entries
WeakSet  => Does Not Have Clear , Keys , Values And Entries 


Set      => Can Use forEach 
WeakSet  => Cannot Use forEach

Usage : Store Objects and Removes Them Once They Become Inaccessible
*/

/////////////// Set ///////////////

// Type Of Data 
let mySet = new Set([10, 20, 10, 20, "M"]);

console.log(mySet);

// Size
console.log(`Size Of Elemenet Inside Set Is : ${mySet.size}`); // 3 

// Values + Keys [Alias For Values]
let itrator = mySet.keys();

console.log(itrator.next()); //  {value: 10, done: false} done => The foreach did not end
console.log(itrator.next()); //  {value: 20, done: false} done => The foreach did not end
console.log(itrator.next().value); // "M"  
console.log(itrator.next()); //  {value: undefined, done: true} done => The foreach did not end

// Can Use forEach
mySet.forEach((e) => console.log(e)); // 10 , 20 , "M"


/////////////// WeakSet ///////////////

let myWeakSet = new WeakSet([{ a: 1, b: 2 }]);

console.log(myWeakSet);




