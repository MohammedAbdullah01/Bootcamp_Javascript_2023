// Select Variables
let controlButtons = document.querySelector(".control-buttons"),
  spanControlButtons = document.querySelector(".control-buttons span"),
  infoContainer = document.querySelector(".info-container"),
  spanInfoContainer = document.querySelector(".info-container span"),
  selectCountDown = document.getElementById("count-down"),
  timerSelect = document.querySelector(".timer"),
  //Select Element Span In Dev .info-container .wrong
  selectWorngCount = document.querySelector(".info-container .wrong span");
// Effect Duration
(duration = 1000),
  // Select Blocks Container
  (memoryBlocks = document.querySelector(".memory-blocks")),
  // Create Array From Game Blocks
  (gameBlocks = Array.from(memoryBlocks.children)),
  // Create Range Of Keys
  (orderRange = [...Array(gameBlocks.length).keys()]),
  (divSuccessGame = document.createElement("div")),
  (cleraInt = "");

// Event On Click StartGame
spanControlButtons.onclick = function () {
  let yourName = prompt("What`s Your Name ?");

  if (yourName == null || yourName == "") {
    // Set Name To Unknown
    spanInfoContainer.innerHTML = "Unknown";
  } else {
    // Set Name To Your Name
    spanInfoContainer.innerHTML = yourName;
  }
  // Upadte Counr Down (Timer)

  let startingMinutes = 1;

  let time = startingMinutes * 60;

  cleraInt = setInterval(updateCountDown, duration);

  function updateCountDown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    selectCountDown.innerHTML = `${minutes}:${seconds}`;
    time--;

    timeAlert();

    gameOverTimeIsUp();
  }

  // Remove Splash Screen
  controlButtons.remove();
  addAudio("#game-start").play();
};

shuffle(orderRange);

// Add Order Css Property To Game Blocks
gameBlocks.forEach((block, index) => {
  block.style.order = orderRange[index];

  //Add Click Event
  block.addEventListener("click", () => {
    flipBlock(block);
  });
});

function getClassesHasMatch() {
  allHasMatch = gameBlocks.filter((hasMatch) =>
    hasMatch.classList.contains("has-match")
  );
  return allHasMatch;
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

// Flip Block Function
function flipBlock(SelectBlock) {
  // Add Class Is-flipped
  SelectBlock.classList.add("is-flipped");

  // Collect All Flipped Cards
  let allFlippedBlocks = gameBlocks.filter((flippedBlock) =>
    flippedBlock.classList.contains("is-flipped")
  );

  // If Theres Two Selected Blocks
  if (allFlippedBlocks.length == 2) {
    // Stop Clicking Function
    stopClicking();

    // Check Matched Block Function
    checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
  }
}

// Stop Clicking Function
function stopClicking() {
  // Add Class No Clicking No Main Container
  memoryBlocks.classList.add("no-clicking");

  // Remove Class No Clicking After The Duration
  setTimeout(() => {
    memoryBlocks.classList.remove("no-clicking");
  }, duration);
}

function checkMatchedBlocks(firstBlock, secondBlock) {
  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
    // Remove Class is-flipped To firstBlock &&  secondBlock
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");

    // Add Class has-match To firstBlock && secondBlock
    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");

    // Function You Won
    iwonTheGame();

    addAudio("#success").play();
  } else {
    // Set Value Span In div => info-container .wrong
    selectWorngCount.innerHTML = parseInt(selectWorngCount.innerHTML) + 1;

    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration);
    addAudio("#fail").play();
  }
}

// The message of the end of the game when the time stops
function gameOverTimeIsUp() {
  if (
    selectCountDown.innerHTML === "0:00" &&
    getClassesHasMatch().length < 20
  ) {
    memoryBlocks.classList.add("no-clicking");

    contentPopupDiv(`Game Over Time Is Up :( `, "popup-wrong");

    spanReloadAppendInPopup();

    addAudio("#fail-end").play();
  }
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

function timeAlert() {
  if (selectCountDown.innerHTML === "0:05") {
    timerSelect.style.backgroundColor = "#F44336";
    document.getElementById("fiveToOne").play();
  }
}

function addAudio(ElementString) {
  return document.querySelector(ElementString);
}

function contentPopupDiv(msg, className) {
  clearInterval(cleraInt);
  divSuccessGame.innerHTML = msg;
  divSuccessGame.className = className;
  document.body.appendChild(divSuccessGame);
}

function spanReloadAppendInPopup() {
  let selectReplayEl = document.createElement("span");
  selectReplayEl.className = "replay";
  selectReplayEl.innerHTML = "Replay";

  divSuccessGame.appendChild(selectReplayEl);

  selectReplayEl.onclick = function () {
    location.reload();
  };
}

function getLocationStorageAndAppendInDiv() {
  let selectClassLastPlayer = document.querySelector(".last-player span");
  let selectClassTimeUsed = document.querySelector(".time-used span");

  if (localStorage.getItem(localStorage.key(0))) {
    selectClassLastPlayer.innerHTML = localStorage.key(0);
    selectClassTimeUsed.innerHTML = localStorage.getItem(localStorage.key(0));
  }
}

function setItemLocationStorage(key, value) {
  let convertUserNameToLowerCase = key.innerHTML.toLowerCase();
  let reg = /[a-zA-Z]/gi;
  if (
    convertUserNameToLowerCase !== "Unknown" &&
    reg.test(convertUserNameToLowerCase)
  ) {
    localStorage.clear();
    localStorage.setItem(convertUserNameToLowerCase, value.innerHTML);
  }
}

getLocationStorageAndAppendInDiv();

