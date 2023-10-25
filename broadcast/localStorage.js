
/*
    BOM [Browser Object Model]
    Local Storage
    - setItem
    - getItem
    - removeItem
    - clear
    - key  

    info 
    - No Expiration Time
    - HTTP And HTTPS
    - Private Tab
 */

// setItem
// [1] 
window.localStorage.setItem("font-size", "30px");
// [2]
window.localStorage.fontWeight = "bold";
// [3]
window.localStorage["width"] = "500px"


// getItem
// [1]
console.log(window.localStorage.getItem("fontWeight")); // bold
// [2]
console.log(window.localStorage.width); // 500px
// [3]
console.log(window.localStorage["font-size"]); // 30px


// removeItem  =>Remove One
window.localStorage.removeItem("font-size");

// removeItem => Remove All
// window.localStorage.clear();

// get key
console.log(window.localStorage.key(1)) // fontWeight


// console Object
console.log(window.localStorage); // Storage {width: '500px', fontWeight: 'bold', length: 2}

// Length In The Local Storage
console.log(window.localStorage.length); // 2


/***************************************** */

// Example
let lis = document.querySelectorAll("ul li");
let divColor = document.querySelector(".parentDivColor");

if (window.localStorage.getItem("color")) {
    divColor.style.backgroundColor = window.localStorage.getItem("color");

    lis.forEach((li) => {
        li.classList.remove("active")
    });

    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")

}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {

        lis.forEach((li) => {
            li.classList.remove("active")
        });

        e.currentTarget.classList.add("active");

        window.localStorage.setItem("color", e.currentTarget.dataset.color);

        divColor.style.backgroundColor = e.currentTarget.dataset.color;

    });
});


/***************************************** */

/*
BOM [Browser Object Model]
    Session Storage
    - setItem
    - getItem
    - removeItem
    - clear
    - key  

    info 
    - New Tab = New Session 
    - Duplicate Tab = Copy Session
    - New Tab With Same Url = New Session
 */

let  ele = document.querySelector(".name");

if (window.sessionStorage.getItem("input-Value")) {
    ele.value =  window.sessionStorage.getItem("input-Value") ;
}

ele.onblur = function () {
    if (ele.value) {
            window.sessionStorage.setItem("input-Value", ele.value);
        }
    }
