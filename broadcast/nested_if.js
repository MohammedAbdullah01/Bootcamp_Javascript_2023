/*
    Nested If
*/

let price = 100;

let discount = false;

let country = "Egydpt";

let student = false;

let studentDiscountAmmount = 20;

let discountAmount = 30;

let discountCountry = { 'eg': 10, 'sy': 20, 'pa': 30 }; //Syria palestine

let discountCountryAmmount = country.slice(0, 2).toLocaleLowerCase();

let totalPrice = price - discountCountry[discountCountryAmmount];

let messagediscountCountry = `<h2><p>
A discount Of %${discountCountry[discountCountryAmmount]} 
was obtained because you are from the country of ${country}
</p></h2>`;

let messageDiscountStudent = `<h2><p> + 
With another discount %${studentDiscountAmmount} for being a 
</p><h2>`;

let messageDiscountTotal = `<h3><p>
Total price of the course : ${student === true ? totalPrice -= studentDiscountAmmount : totalPrice} 
</p></h3>`;

if (country === "Egypt" || country === "Syria" || country === "Palestine") {

    if (student === true) {
        messagediscountCountry += messageDiscountStudent;
    }

    document.write(messagediscountCountry + messageDiscountTotal);

} else {
    document.write(`<h3><p>
    Sorry, there are no discountsprice <p>The Total : ${price} 
    </p></h3>`);

}
/*************************************/

/*
    Conditional (Ternary) Operator
*/

let theName = "noha";
let theGander = "female";
let theAge = 65;
let result = (theGander === "female") ? "MRS" : "MR";

(theGander === "Male" ? console.log(`MR: ${theName}`) : console.log(`MRS: ${theName}`)); // MRS: noha

document.write(`Hello  ${result} :${theName}`); // MRS: noha

// In Use Condition Conditional (Ternary) Operator In Use Nested If  & Else If

theAge < 20
    ? console.log("Age cannot be younger than 20")
    : theAge > 20 && theAge < 60
        ? console.log("The Age Between 20 To 60")
        : theAge > 60
            ? console.log("The Age Larger Than 60")
            : console.log("Unknown");