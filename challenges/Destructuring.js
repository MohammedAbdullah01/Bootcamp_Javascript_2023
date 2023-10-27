let chose = 2;
let myMember = [
    { title: "Mohamed", age: 26, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 30, available: false, skills: ["Python", "Django"] },
    { title: "Noor", age: 35, available: true, skills: ["PHP", "Laravel"] },
];
let [objOne, objTwo, objThree] = myMember;

if (chose === 1) {
    showDetails(objOne);
} else if (chose === 2) {
    showDetails(objTwo);

} else if (chose === 3) {
    showDetails(objThree);

}

function showDetails(obj) {

    let { title: ti, age: ag, available: St, skills: [, s] } = obj;

    console.log(ti);
    console.log(ag);
    console.log((St == true) ? "Available" : "Not Available");
    console.log(s);
}