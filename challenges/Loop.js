/*
    Loop Challenge 8
 */

    let myAdmin = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
    let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "anwar"];
    
    let index = 0;
    
    for (let i = 0; i < myAdmin.length; i++) {
        if (myAdmin[i] === "Stop") {
            let numberItems = myAdmin.indexOf("Stop");
            myAdmin = myAdmin.slice(index, numberItems);
            document.write(`<div>We Have ${myAdmin.length} Admins </div> <hr>`);
        }
    }
    
    
    for (let i = 0; i < myAdmin.length; i++) {
        let counta = 1;
        document.write(`<div>The Admin For Team Is ${i + 1} ${myAdmin[i]}`);
        document.write(`<h3>Team Members :</h3>`);
    
        for (let k = 0; k < myEmployees.length; k++) {
            if (myAdmin[i][index].toLocaleUpperCase() === myEmployees[k][index].toLocaleUpperCase()) {
                document.write(`<p> - ${counta} ${myEmployees[k]}</p>`);
                counta++;
    
            }
        }
        document.write(`</div> <hr>`);
    }
    
    // Another Answer
    
    // let myAdmins = ["ahmed", "osama", "sayed", "stop", "samera"];
    // let myEmployees = [
    //     "amged",
    //     "samag",
    //     "ameer",
    //     "omar",
    //     "othman",
    //     "amany",
    //     "samia",
    //     "Soad",
    //     "Ameen",
    //     "Omneia",
    // ];
    // let admins = [];
    
    // for (let i = 0; i < myAdmins.length; i++) {
    //     if (myAdmins[i] === "stop") {
    //         break;
    //     }
    //     admins.push(myAdmins[i]);
    // }
    // console.log(admins);
    // document.write(`<h1><div> We Have ${admins.length} Admins</div></h1> `);
    // document.write(`<hr>`);
    // // ---------------------------------------
    
    // for (let x = 0; x < admins.length; x++) {
    //     let con = 1;
    //     document.write(
    //         `<h3> The Admin for Team ${x + 1} is " ${admins[x].toUpperCase()}"</h3>`
    //     );
    //     document.write(`<h4>Team Members :</h4>`);
    
    //     for (m = 0; m < myEmployees.length; m++) {
    //         if (
    //             admins[x][0].toLocaleLowerCase() === myEmployees[m][0].toLocaleLowerCase()
    //         ) {
    //             // document.write(`<hr>`)
    //             document.write(`<div>`);
    //             document.write(`${con} - ${myEmployees[m].toLowerCase()} <br> `);
    //             document.write(`</div>`);
    //             document.write(`<hr>`);
    
    //             con++;
    //         }
    //     }
    // }