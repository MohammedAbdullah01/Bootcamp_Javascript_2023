/*
Array Methods
    Array.some(Callback Function(Element , index, Array) , This Argument )

        CallbackFunction => Function To Run On Every Element On The Given Array 
        Element => The Current Element To Process 
        index => Index Of Current Element 
        Array  => The Current Array Working With 
    This Argument => Value To Use as This When Executing CallbackFunction 

Using
    Check If Element Exists In Array 
    Check If Number In range  

*/

let nums = [1, 5, 3, 10, 20, 40, 60];

// Example 1
console.log(
  nums.some(function (e) {
    return e > 10;
  })
); //Return True

console.log(nums.some((e) => e > 80)); //Return false

// Example 2
let numberVal = 5;
let checkNumberInEqule = nums.some(function (e) {
  return e > this;
}, numberVal);

console.log(checkNumberInEqule); // Return True

// Example 3
function checkValue(array, val) {
  return array.some(function (e) {
    return e === val;
  });
}

console.log(checkValue(nums, 40)); // Return True

// Example 4
function checkNumberInRange(array, val) {
  return array.some(function (e) {
    return e >= val && e <= val;
  });
}

console.log(checkNumberInRange(nums, 80)); // False
console.log(checkNumberInRange(nums, 20)); // true

// Example 5
let range = {
  min: 5,
  max: 20,
};

let checkNumberInRangeTwo = nums.some(function (e) {
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRangeTwo); // Return True
