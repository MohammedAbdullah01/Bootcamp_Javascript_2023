/*
- Map Data Type 
Syntax: new Map(Interable With Key / Value)

-- Map Vs Object

Map      => Does Not Contain Key By Default
Object   => Has Default Keys 


Map      => Key Can Be Anything [Function , Object , Any Primitive Data Types] 
Object   => String , Symbol


Map      => Ordered By Insertion 
Object   => Not 100% Till Now 


Map      => Get Item By Size 
Object   => Need To Do Manually


Map      => Can Be Directly Iterated
Object   => Not Directly And Need To Use Object.keys() And So On  


Map      => Better Performance When Add Or Remove Data 
Object   => Low Preformance  When Comparing To Map 
*/


let myObject = {};

let myEmptyObject = Object.create(null);

let myMap = new Map();

console.log(myObject); // [[Prototype]]: Object

console.log(myEmptyObject); // No properties

console.log(myMap); // No properties

/** Object  **/
// String , Symbol

let myNewObject = {
    10: "Number",
    "10": "String",
};

console.log(myNewObject[10]); // String

// Size =>  Need To Do Manually
// [1] get items length in Object
console.log(Object.keys(myNewObject).length); // 1
// [2] get items keys All
console.log(Object.keys(myNewObject)); // ['10']


// Has Default Keys 
console.log(myNewObject); // {10: 'String'} Override 


/** Map  **/
let myNewMap = new Map();

// Key Can Be Anything [Function , Object , Any Primitive Data Types] 
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() { }, "function");

console.log(myNewMap.get(10)); // Number
console.log(myNewMap.get("10")); // String 


// Does Not Contain Key By Default
console.log(myNewMap); // Map(2) {10 => 'Number', '10' => 'String'}

// Get Item By Size 
console.log(myNewMap.size); // 5


/*************************************** */



/*
- Map Data Type

Method
- set 
- has 
- get 
- delete
- clear

Properties:
- size
*/

let myMapMethod = new Map([
    ["age",26],
    [true,"Boolean"],
]);

// set
myMapMethod.set("name", "Mohamed"); // Map(1) {'name' => 'Mohamed'}

// has
console.log(myMapMethod.has("name")); // true

// get
console.log(myMapMethod.get("name")); // Mohamed

// delete
console.log(myMapMethod.delete("named")); // false

// size
console.log(myMapMethod.size);

// clear
myMapMethod.clear(); // Deleted Keys Items All 

console.log(myMapMethod);


/*************************************** */



/*
- Map VS WeakMap

WeakMap Allows Garbage Collector To Do Its Task But Not Map . 

Map     => Key Can Be Anything
WeakMap => Key Can Be Object Only 
*/

let mapUser = {theName: "Mohamed"};
let myMap2 = new Map();

myMap2.set(mapUser , "Object");

mapUser = null;

console.log(myMap2);

let mapWeakUser = {theName: "Mohamed"};

let myWeakMap = new WeakMap();

myWeakMap.set(mapWeakUser,"Object Value");

mapWeakUser = null;

console.log(myWeakMap);
