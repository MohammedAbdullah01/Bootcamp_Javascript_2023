let form = document.querySelector(".form");
let input = document.querySelector(".input");
let inputAdd = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

let string = window.localStorage.getItem('tasks');


let D = new Date();

form.onsubmit = function () {
    if (input.value) {

        let TimeNow = D.getTime();

        if (string) {

            let indexOf = string.indexOf("]");

            let stringFilter = string.substring(0, indexOf);

            window.localStorage.setItem("tasks", `${stringFilter},{"id": ${TimeNow} , "title":"${input.value}"}]`);
        } else {
            window.localStorage.setItem("tasks", `[{"id": ${TimeNow} , "title":"${input.value}"}]`);
        }
    }
}


// View All a Local Storage
let arrayItem = JSON.parse(string);
if (string) {
    arrayItem.forEach(e => {
        let p = document.createElement("p");
        let b = document.createElement("button");
        let textButton = document.createTextNode("Delete");
        let textTasks = document.createTextNode(e.title);

        b.style.cssText = "cursor: pointer;border:solid 1px red;color:white;background-color:red;border-radius:5px; float:right";
        p.style.cssText = "width:450px;padding: 10px; padding-left:20px; padding-right:20px;  background-color: rgb(221, 224, 224); border-radius:10px;top:40px';border: solid 1px rgb(221, 224, 224); margin-bottom: 10px;";
        tasks.style.cssText = "display: grid;justify-content: center;";
        input.style.cssText = "padding: 10px;top: 6px;position: relative;width: 75%;border: solid 1px rgb(221, 224, 224);border-radius: 10px;";
        inputAdd.style.cssText = "cursor: pointer;border:solid 1px red;color:white;background-color:red;border-radius:5px; float:right; padding: 10px;top: 6px;position: relative;";
        form.style.cssText = 'width:450px; height:50px; padding-left:20px; padding-right:20px; margin:auto; background-color: rgb(221, 224, 224); border-radius:10px; margin: auto '

        tasks.appendChild(p);
        p.appendChild(textTasks);
        p.appendChild(b);
        b.appendChild(textButton);
        document.body.appendChild(tasks);

        b.onclick = function (e) {
            e.target.parentElement.remove();
        }
    });
} else {
    tasks.innerHTML = "Not Found Tasks";
}























// let inputs = document.querySelector('.input');
// let btn = document.querySelector('.add');
// let form = document.querySelector('.form');


// form.style.cssText = 'width:450px; height:50px; padding-left:20px; padding-right:20px; margin:auto; background-color: rgb(221, 224, 224); border-radius:10px; '
// inputs.style.cssText = 'height:25px;position: relative;top:12px;left:8px;width: 300px;border: 1px solid gray;cursor: pointer; border-radius:5px'
// btn.style.cssText = 'position: relative;top:11px;left:20px; font-size:14px; background-color: red; color:white; border:1px solid white; border-radius:5px; padding:5px'
// tasks.style.cssText = 'width:450px; height:50px; padding-left:20px; padding-right:20px; margin:auto; background-color: rgb(221, 224, 224); border-radius:10px;position: relative;top:40px'


// inputs.onblur = function () {

//     window.localStorage.setItem('task', this.value);
//     tasks.innerHTML = window.localStorage.getItem('task');
//     let mybtn = document.createElement('button');
//     mybtn.style.cssText = "height:25px;border:none;color:white;background-color:red;border-radius:5px; float:right";
//     mybtn.innerHTML = "Delete";
//     tasks.appendChild(mybtn);

//     if (inputs !== "") {

//         mybtn.onclick = function () {

//             window.localStorage.removeItem('task');
//             tasks.innerHTML = '';
//         }
//     };
// }