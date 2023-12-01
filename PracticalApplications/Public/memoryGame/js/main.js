let selectSpansInControlButtons = document.querySelectorAll(
  ".control-buttons div > span"
);

let saveLevel = "";

let spanInfoContainer = getSelectElement(".info-container span");
let selectCountDown = getSelectElement("#count-down");
let selectWorngCount = getSelectElement(".info-container .wrong span");

let selectClassLastPlayer = getSelectElement(".last-player span");
let selectClassTimeUsed = getSelectElement(".time-used span");

let memoryBlocks = createElement("div");
let divSuccessGame = createElement("div");
let createReplayEl = createElement("span");

let duration = 1000;

let selectMemoryBlock;

let time;
let cleraInt;

selectSpansInControlButtons.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("easy-level")) {
      saveLevel = "easy Level";
      getTime(2, 60);
      getNumberTheSetInteravel();

      // Get Fetch Data Json length => 10
      getFetchJsoneDate(10);
    }

    if (e.target.classList.contains("middle-level")) {
      saveLevel = "Middle Level";

      getTime(2, 45);
      getNumberTheSetInteravel();

      // [1] - Get Fetch Data Json length => 18
      getFetchJsoneDate(18);
    }
    if (e.target.classList.contains("advenced-level")) {
      saveLevel = "Advenced Level";

      getTime(1, 60);
      getNumberTheSetInteravel();

      // Get Fetch Data Json length => 18
      getFetchJsoneDate(18);
    }
  });
});

function getFetchJsoneDate(numberOfDataFetch) {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((json) => {
      json.length = numberOfDataFetch;

      // [1] Foreach Data twice In Object One
      let jsonFull = [...json, ...json];

      // [2] get All Keys In New Object => jsonFull
      let orderRanges = [...Array(jsonFull.length).keys()];

      // [3] shuffle Array => orderRanges
      shuffle(orderRanges);

      // [4] Create (Elements => game-block) The In memory-blocks
      createElementsPageIndex(jsonFull, orderRanges);

      // [5] Remove Element => control-buttons
      getSelectElement(".control-buttons").remove();
    });
}

// Shuffle Function To Array
function shuffle(array) {
  let current = array.length,
    temp,
    random;

  while (current > 0) {
    // Get Random Number
    random = Math.floor(Math.random() * current);

    // Decrease Length By One
    current--;

    // Save Current Element In Stash
    temp = array[current];

    // Current Element = Random Number
    array[current] = array[random];

    // Random Element = Get Element From Stash
    array[random] = temp;
  }
  return array;
}

// Create Elements Page Index
function createElementsPageIndex(jsonFull, orderRanges) {
  memoryBlocks.className = "memory-blocks";
  for (let index = 0; index < jsonFull.length; index++) {
    let gameBlock = document.createElement("div");
    gameBlock.className = `game-block`;
    gameBlock.style.order = orderRanges[index];
    gameBlock.dataset.thumbnailUrl = jsonFull[index].url.slice(-6);

    let frontFace = document.createElement("div");
    frontFace.className = "front face";
    let backFace = document.createElement("div");
    backFace.className = "back face";
    let img = document.createElement("img");
    img.src = jsonFull[index].thumbnailUrl;

    memoryBlocks.appendChild(gameBlock);
    gameBlock.appendChild(frontFace);
    gameBlock.appendChild(backFace);
    backFace.appendChild(img);

    document.body.appendChild(memoryBlocks);

    // Function flipBlock() =>
    flipBlock(gameBlock);
  }
}

// Flip Block Function
function flipBlock(SelectBlock) {
  SelectBlock.addEventListener("click", () => {
    // Add Class Is-flipped
    SelectBlock.classList.add("is-flipped");

    checkClassIfItExistsTwice();
  });
}

// Get All Classes Is-Flipped
function getAllClassesIsflipped() {
  // Select Element memory-blocks
  selectMemoryBlock = getSelectElement(".memory-blocks");

  // Collect All Flipped Cards
  let allFlippedBlocks = Array.from(selectMemoryBlock.children).filter(
    (flippedBlock) => flippedBlock.classList.contains("is-flipped")
  );
  return allFlippedBlocks;
}

// Check Class => (Is-flipped) If It Exists Twice
function checkClassIfItExistsTwice() {
  if (getAllClassesIsflipped().length == 2) {
    // Stop Clicking Function
    stopClicking();

    // Check Matched Block Function
    checkMatchedBlocks(
      getAllClassesIsflipped()[0],
      getAllClassesIsflipped()[1]
    );
  }
}

// Stop Clicking Function
function stopClicking() {
  // Add Class No Clicking No Main Container
  selectMemoryBlock.classList.add("no-clicking");

  // Remove Class No Clicking After The Duration
  setTimeout(() => {
    selectMemoryBlock.classList.remove("no-clicking");
  }, duration);
}

function checkMatchedBlocks(firstBlock, secondBlock) {
  if (firstBlock.dataset.thumbnailUrl === secondBlock.dataset.thumbnailUrl) {
    // Remove Class is-flipped To firstBlock &&  secondBlock
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");

    // Add Class has-match To firstBlock && secondBlock
    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");

    // // Function You Won
    iwonTheGame();

    addAudio("#success").play();
  } else {
    // Set Value Span In div => info-container .wrong wrong
    getSelectElement(".wrong span").innerHTML =
      parseInt(getSelectElement(".wrong span").innerHTML) + 1;

    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration);
    addAudio("#fail").play();
  }
}

function addAudio(ElementString) {
  return document.querySelector(ElementString);
}

function getClassesHasMatch() {
  allHasMatch = Array.from(getSelectElement(".memory-blocks").children).filter(
    (hasMatch) => hasMatch.classList.contains("has-match")
  );
  return allHasMatch;
}

function getNumberMinute(number) {
  return number;
}

// Upadte Count Down (Timer)
function updateCountDown() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? `0${seconds}` : seconds;
  getSelectElement("#count-down").innerHTML = `${minutes}:${seconds}`;
  time--;

  timeAlert();

  gameOverTimeIsUp();
}

function getTime(minute, second) {
  // Write Username
  setUserName();
  return (time = minute * second);
}

function getNumberTheSetInteravel() {
  return (cleraInt = setInterval(updateCountDown, duration));
}

function timeAlert() {
  if (getSelectElement("#count-down").innerHTML === "0:05") {
    getSelectElement(".timer").style.backgroundColor = "#F44336";
    addAudio("#fiveToOne").play();
  }
}

// The message of the end of the game when the time stops
function gameOverTimeIsUp() {
  if (
    getSelectElement("#count-down").innerHTML === "0:00" &&
    getClassesHasMatch().length < 20
  ) {
    getSelectElement(".memory-blocks").classList.add("no-clicking");

    contentPopupDiv(`Game Over Time Is Up :( `, "popup-wrong");

    spanReloadAppendInPopup();

    addAudio("#fail-end").play();
  }
}

function contentPopupDiv(msg, className) {
  clearInterval(cleraInt);

  divSuccessGame.innerHTML = msg;
  divSuccessGame.className = className;
  document.body.appendChild(divSuccessGame);
}

function spanReloadAppendInPopup() {
  createReplayEl.className = "replay";
  createReplayEl.innerHTML = "Replay";

  divSuccessGame.appendChild(createReplayEl);

  createReplayEl.onclick = function () {
    location.reload();
  };
}

function iwonTheGame() {
  if (
    getClassesHasMatch().length == 20 &&
    selectCountDown.innerHTML !== "0:00"
  ) {
    contentPopupDiv(
      `<p>${
        spanInfoContainer.innerHTML !== "Unknown"
          ? "You Won : " + spanInfoContainer.innerHTML
          : ""
      }</p>
    <p>Wrongs : ${selectWorngCount.innerHTML}</p>
    <p>Time Used : ${selectCountDown.innerHTML}</p>`,
      "popup-success"
    );

    spanReloadAppendInPopup();
    addAudio("#success-end").play();
    addAudio("#fiveToOne").pause();

    setItemLocationStorage(spanInfoContainer, selectCountDown);
  }
}

function getLocationStorageAndAppendInDiv() {
  if (localStorage.getItem(localStorage.key(0))) {
    selectClassLastPlayer.innerHTML = localStorage.key(0);
    selectClassTimeUsed.innerHTML = localStorage.getItem(localStorage.key(0));
  }
}

function setItemLocationStorage(key, value) {
  let convertUserNameToLowerCase = key.innerHTML.toLowerCase();
  if (convertUserNameToLowerCase !== "unknown") {
    localStorage.clear();
    localStorage.setItem(convertUserNameToLowerCase, [
      value.innerHTML,
      saveLevel,
    ]);
  }
}

function setUserName() {
  let yourName = prompt("What`s Your Name ?");

  if (yourName == null || yourName == "") {
    // Set Name To Unknown
    spanInfoContainer.innerHTML = "Unknown";
  } else {
    // Set Name To Your Name
    let reg = /[a-zA-Z]/gi;
    if (reg.test(yourName)) {
      spanInfoContainer.innerHTML = yourName;
    }
  }
}

function getSelectElement(value) {
  return document.querySelector(value);
}

function createElement(element) {
  return document.createElement(element);
}

getLocationStorageAndAppendInDiv();