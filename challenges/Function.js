/*
    Function - Random Argument Challenge 
    =====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
        - String => Name
        - Number => Age
        - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
        - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
    let myArray = [a, b, c];
    let mystrings = ``;
    let mynumber = ``;
    let myBoolean = ``;

    for (let i = 0; i < myArray.length; i++) {
        (typeof myArray[i] === "string")
            ? mystrings = `Hello ${myArray[i]}`
            : (typeof myArray[i] === "number")
                ? mynumber += `Your Age Is ${myArray[i]}`
                : ((typeof myArray[i] === "boolean") && myArray[i] === true)
                    ? myBoolean = `You Are Available For Hire`
                    : ((typeof myArray[i] === "boolean") && myArray[i] === false)
                        ? myBoolean = `You Are Not Available For Hire`
                        : ''
    }
    let result = `${mystrings}, ${mynumber},  ${myBoolean}`;

    return `${result}`;

}


console.log(showDetails("Osama", 26, true)); // Hello Osama, Your Age Is 26,You Are Available For Hire
console.log(showDetails(26, "Osama", true)); // Hello Osama, Your Age Is 26,You Are Available For Hire
console.log(showDetails(true, 26, "Osama")); // Hello Osama, Your Age Is 26,You Are Available For Hire
console.log(showDetails(false, "Osama", 26)); // Hello Osama, Your Age Is 26,  You Are Not Available For Hire