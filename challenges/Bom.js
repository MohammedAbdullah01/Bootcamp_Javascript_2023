let form = document.querySelector(".form");
let input = document.querySelector(".input");
let inputAdd = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let string = window.localStorage.getItem('tasks');
let D = new Date();

form.style.cssText = 'width:450px; height:50px; padding-left:20px; padding-right:20px; margin:auto; background-color: rgb(221, 224, 224); border-radius:10px; margin: auto';
input.style.cssText = "padding: 10px;top: 6px;position: relative;width: 75%;border: solid 1px rgb(221, 224, 224);border-radius: 10px;";
inputAdd.style.cssText = "cursor: pointer;border:solid 1px red;color:white;background-color:red;border-radius:5px; float:right; padding: 10px;top: 6px;position: relative;";
tasks.style.cssText = "display: grid;justify-content: center;";


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
        let b = document.createElement("input");
        let textTasks = document.createTextNode(e.title);

        b.style.cssText = "cursor: pointer;border:solid 1px red;color:white;background-color:red;border-radius:5px; float:right;margin-top: 5px;";
        p.style.cssText = "width:450px;padding: 10px 20px; background-color: rgb(221, 224, 224); border-radius:10px; border: solid 1px rgb(221, 224, 224); margin-bottom: 10px;font-size: 25px;font-weight: bold;";

        tasks.appendChild(p);
        p.appendChild(textTasks);
        p.appendChild(b);
        b.type = "submit";
        b.value = "Delete";

        document.body.appendChild(tasks);

        b.onclick = function (e) {

            // remove the task from the view
            e.target.parentElement.remove();

            // update the tasks list in local storage after converting to string 
            tasksList = removeTask(window.localStorage.tasks, e.target.parentElement.textContent);
            window.localStorage.setItem("tasks", JSON.stringify(tasksList));
            tasksList.length === 0 ? window.localStorage.clear() : console.log();

        }

    });
} else {
    tasks.innerHTML = "Not Found Tasks";
    tasks.style.cssText = "text-align: center;font-size: 25px;font-family: fantasy;color: red;font-style: italic;font-weight: bold;";
}


function removeTask(a, b) {
    // convert string to object using JSON method
    let converted = JSON.parse(a);
    return converted.filter(item => item.title != b);
};