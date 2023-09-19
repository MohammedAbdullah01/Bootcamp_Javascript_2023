/*
    IF Challenge 5
        1- if ('???' === "34") Output => In Console.log(Good) 
        2- if ('???' === "w") ( W => Position May Change ) Output => In Console.log(Good) 
        3- if ('???' !== "string") Output => In Console.log(Good)  
        4- if ('???' === "number") Output => In Console.log(Good)
        5- if ('???' === "ElzeroElzero") Output => In Console.log(Good)
 */

let st = "Elzero Web Shcool";

// 1
if ((st.length + st.length).toString() === "34") {
    console.log("Good"); // Good
}

// 2
if (st.charAt(st.indexOf('W')).toLowerCase() === "w") {
    console.log("Good"); // Good
}

// 3
if (+st !== "string") {
    console.log("Good"); // Good
}

// 4
if (typeof +st === "number") {
    console.log("Good"); // Good
}


// 5
if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good"); // Good
}