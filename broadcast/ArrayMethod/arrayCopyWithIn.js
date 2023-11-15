/*
Array Method 
    - Array.copyWithin(Target , Start[optional] , End[optional])
    "Copy Part Of An Array To Another Location In The Same Array"

    -- Any Negative Value Will Count From The End 
    -- Target
    ---- Index To Copy Part To 
    ---- If At Or Greater Then Array Length Nothing Will Be Copied 

    -- Start 
    ---- Index To Start Copying From 
    ---- If Ommited = Start From Index 0 

    -- End 
    ---- Index To End Copying From 
    ---- Not Including End 
    ---- If Ommited = Reach The End 
*/

let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]
// myArray.copyWithin(0, -2); // ["A", "B", 30, 40, 50, "A" ,"B" ]
// myArray.copyWithin(0, -2, -1); // ["A", 20, 30, 40, 50, "A" ,"B" ]
// myArray.copyWithin(2, -2); // [10, 20, "A", "B", 50, "A", "B"]
// myArray.copyWithin(-2, -1); // [10, 20, 30, 40, 50, 'B', 'B']
// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]
// myArray.copyWithin(1, -2); // [10, 'A', 'B', 40, 50, 'A', 'B']
// myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray);
