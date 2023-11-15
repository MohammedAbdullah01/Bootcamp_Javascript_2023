/*
Array Methods
    Array.every(Callback Function(Element , index, Array) , This Argument )

        CallbackFunction => Function To Run On Every Element On The Given Array 
        Element => The Current Element To Process 
        index => Index Of Current Element 
        Array  => The Current Array Working With 
    This Argument => Value To Use as This When Executing CallbackFunction 
*/

// Array.every => Determines whether all the members of an array satisfy the specified test.
// Array.every  reverse  Array.some

let locations = {
  20: "Plase 1",
  30: "Plase 2",
  80: "Plase 3",
  50: "Plase 4",
};

let minLocations = 15;

let locationKey = Object.keys(locations).map((e) => +e);

let check = locationKey.every(function (e) {
  return e > this;
}, minLocations);

console.log(check); // Return True
