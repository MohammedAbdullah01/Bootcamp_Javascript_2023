let theinput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let taskContainer = document.querySelector(".task-content");
let noTaskMsg = document.querySelector(".no-task-message");
let taskscount = document.querySelector(".task-count span");
let tasksCompleted = document.querySelector(".task-completed span");

// Focus On Input Field

let arrytasks = [];
window.onload = () => {
  theinput.focus();
};

// Adding The Tasks
theAddButton.onclick = () => {
  if (theinput.value === "") {
    swal("Oops", "The Field Cannot Be Empty!", "error");
    // console.log("NO Value")
  } else {
    // Remove No Tasks Message
    noTaskMsg.remove();

    for (let index = 0; index < arrytasks.length; index++) {
      if (arrytasks[index] === theinput.value) {
        swal("Oops", "Something went wrong!", "error");
        return;
      }
    }

    // Create Span Element
    let mainSpan = document.createElement("span");

    // Create Delete Button
    let deleteElement = document.createElement("span");

    // Add The Span  Text
    let text = document.createTextNode(theinput.value);

    arrytasks.push(text.textContent);

    // Add The Button Delete
    let deleteText = document.createTextNode("Delete");

    // Add Text To Span
    mainSpan.appendChild(text);

    // Add calss To Main Span
    mainSpan.className = "task-box";

    // Add Text To Delete Button
    deleteElement.appendChild(deleteText);

    // Add Class To DElete Button
    deleteElement.className = "delete";

    // Add Delete Button To Main Span
    mainSpan.appendChild(deleteElement);

    // Add The Task To The Container
    taskContainer.appendChild(mainSpan);

    // Empty The Input

    theinput.value = "";

    // Focus In Field
    theinput.focus();

    console.log(arrytasks);
  }
};

// function (params) {

// }

document.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    e.target.parentNode.remove();
  }

  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
  }
});

function createNoTasks() {
  // Create Message Span Element
  let msgSpan = document.createElement("span");

  // Create The Text Message
  let msgText = document.createElement("No Tasks To Show");

  // Append Text To Message Span Element
  msgSpan.appendChild(msgText);

  // Add Class Name To Message Span
  msgSpan.className = "no-task-message";

  // Append The Message Span Element To Rhe Task Contianer
  taskContainer.appendChild(msgSpan);
}

function createButtonDeleteAllAndFinishedAll() {
  let controlEl = document.createElement("div");
  controlEl.className = "control";

  let finshedAllEl = document.createElement("div");
  finshedAllEl.className = "finshed-all";
  let spanFinish = document.createElement("span");
  spanFinish.innerHTML = "Finshed All";

  let deletedAllEl = document.createElement("div");
  deletedAllEl.className = "deleted-all";
  let spanDelete = document.createElement("span");
  spanDelete.innerHTML = "Deleted All";

  controlEl.appendChild(finshedAllEl);
  finshedAllEl.appendChild(spanFinish);
  controlEl.appendChild(deletedAllEl);
  deletedAllEl.appendChild(spanDelete);

  taskContainer.appendChild(controlEl);
}
