let buttonSpans = document.querySelectorAll(".buttons span");
let divParent = document.querySelector(".parent");
let result = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

buttonSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }

    if (e.target.classList.contains("add-item")) {
      addItem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show-item")) {
      showItem();
    }
    if (e.target.classList.contains("show-items")) {
      showItems();
    }
  });
});

function setMessage(message) {
  return message;
}

function checkInput(inputeName) {
  if (inputeName.value.length === 0) {
    return false;
  } else {
    return true;
  }
}

let inputLocalStorageValue = createElement(
  "input",
  "the-inpute-local-storage-value",
  "",
  "Local Storage Item Value"
);

let saveSpan = createElement(
  "span",
  "save-span",
  "background-color: #009688;color: #FFF;padding: 4px 50px;border-radius: 4px;cursor: pointer;"
);

function checkElementInput(theClassName) {
  if (document.querySelector(theClassName) === null) {
    inputLocalStorageValue;
    saveSpan;

    divParent.appendChild(inputLocalStorageValue);
    theInput.after(inputLocalStorageValue);
  } else {
    result.innerHTML = "A field cannot be added more than once";
  }
}

function createElement(
  typeElement,
  newClassName = "",
  cssText = "",
  placeholder = ""
) {
  let inputLocalStorageValue = document.createElement(typeElement);
  inputLocalStorageValue.className = newClassName;
  inputLocalStorageValue.placeholder = placeholder;
  inputLocalStorageValue.style.cssText = cssText;
  return inputLocalStorageValue;
}

function checkItem() {
  if (checkInput(theInput)) {
    let inputValue = theInput.value;

    if (localStorage.getItem(inputValue)) {
      result.innerHTML = `Found Local Storage Item <span>${inputValue}</span>`;
    } else {
      result.innerHTML = `Not Found Local Storage Item <span>${inputValue}</span>`;
    }
  }
}

function addItem() {
  if (checkInput(theInput)) {
    checkElementInput(".the-inpute-local-storage-value");
    saveSpan.innerHTML = "Save";
    divParent.appendChild(saveSpan);
  } else {
    result.innerHTML = setMessage(
      "The Input Local Storage Field Cannot Be Empty !"
    );
  }

  saveSpan.addEventListener("click", (e) => {
    if (e.target.classList.contains("save-span")) {
      if (checkInput(inputLocalStorageValue)) {
        localStorage.setItem(theInput.value, inputLocalStorageValue.value);
        result.innerHTML = setMessage(
          `Successfully saved Local Storage Item  Key : <span>${theInput.value}</span> , Value : <span>${inputLocalStorageValue.value}</span>`
        );
      } else {
        result.innerHTML = setMessage(
          "The Input Local Storage Field Cannot Be Empty !"
        );
      }
    }
  });
}

function deleteItem() {
  if (checkInput(theInput)) {
    let inputValue = theInput.value;
    if (localStorage.getItem(inputValue)) {
      localStorage.removeItem(inputValue);
      result.innerHTML = `Successfully Delete Local Storage Item  <span>${inputValue}</span>`;
    } else {
      result.innerHTML = `Not Found Local Storage Item <span>${inputValue}</span>`;
    }
  }
}

function showItem() {
  if (checkInput(theInput)) {
    let inputValue = theInput.value;
    if (localStorage.getItem(inputValue)) {
      result.innerHTML = `Key : <span>${inputValue}</span> , Value <span>${localStorage.getItem(
        inputValue
      )}</span>`;
    } else {
      result.innerHTML = `Not Found Local Storage Item <span>${inputValue}</span>`;
    }
  }
}

function showItems() {
  if (localStorage.length) {
    result.innerHTML = `<p>Count Element In Local Storage <span>${localStorage.length}</span></p>`;
    for (let [key, value] of Object.entries(localStorage)) {
      result.innerHTML += `<p>The Key: <span>${key}</span> => The Value: <span>${value}</span></p>`;
    }
  } else {
    result.innerHTML = "Local Storage Is Empty";
  }
}
