/*
Regular Expression

Syntax
    /Pattern/modifier(s) 
    new RegExp("Pattern" , "modifier(s)")

    Modifiers => Flags
    i => Case-insensitive
    g => global
    m => Multilines

    Search Method 
    - match(Pattern)

    Match
    -- Matches A String Against a Regular Expression Pattern
    -- Returns An Array With The Matches
    -- Returns Null If Not Match Is Found
*/

let myString = "Hello Mohamed Web School I Love mohamed ";

let regE = /mohamed/i;

console.log(myString.match(regE)); 
// ['Mohamed', index: 6, input: 'Hello Mohamed Web School I Love mohamed ', groups: undefined]

regE = /mohamed/g;
console.log(myString.match(regE)); // ['mohamed']

regE = /mohamed/ig;
console.log(myString.match(regE)); //  ['Mohamed', 'mohamed']
