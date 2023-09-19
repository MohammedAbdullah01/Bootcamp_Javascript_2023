/*
    Function Arrow Challenges

    Challenge 1 
        1- One Statement In Functiom
        2- Convert To Arrow Function
        3- Print The Output [Arguments May Change ]

        let names = function(????){
            // Parameter ?
            return "?????";
        }
*/

let names = function (...names) {
    return `String[${names.join("], [")}] => Done !`;
}


console.log(`${names("Khalid", "Noah", "Marim", "Mohamed", "Nabil")}`); // String[Khalid], [Noah], [Marim], [Mohamed], [Nabil] => Done !

/********************************************************* */


/*
    Challenge 2 
        1- Replace ???? In Return Statement To Get The Output
        2- Create The Same Function With Regular Syntax
        3- Use Array Inside The Argument To Get Output

        let myNumbers = [20 , 50 , 10 , 60];
        let cala = function(one ,two, ...nums) => "????";
        console.log(10 , "?????" , "????") Output => 80
*/


let myNumbers = [20, 50, 10, 60];
let cala = (one, two, ...nums) => one * two + one * two;

console.log(cala(10, myNumbers.length, myNumbers)); // 80 
