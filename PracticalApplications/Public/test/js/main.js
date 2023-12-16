// /* The above code is selecting all the `<span>` elements that are descendants of `<div>` elements
// within the elements with the class "control-buttons". */
// let selectSpansInControlButtons = document.querySelectorAll(
//   ".control-buttons div > span"
// );

// /* The above code is declaring a variable called `saveLevel` and assigning an empty string to it. */
// let saveLevel = "";

// /* The above code is declaring a variable called `spanInfoContainer` and assigning it the value
// returned by the `getSelectElement` function, passing in the argument `".info-container span"`. */
// let spanInfoContainer = getSelectElement(".info-container span");

// /* The above code is declaring a variable `selectCountDown` and assigning it the value returned by the
// `getSelectElement` function, passing in the argument `"#count-down"`. */
// let selectCountDown = getSelectElement("#count-down");

// /* The above code is declaring a variable `selectWorngCount` and assigning it the value returned by the
// `getSelectElement` function, which takes a CSS selector as an argument and returns the corresponding
// DOM element. The CSS selector used is ".info-container .wrong span". */
// let selectWorngCount = getSelectElement(".info-container .wrong span");

// /* The above code is declaring a variable `selectClassLastPlayer` and assigning it the value returned
// by the `getSelectElement` function, passing in the argument `".last-player span"`. */
// let selectClassLastPlayer = getSelectElement(".last-player span");

// /* The above code is declaring a variable `selectClassTimeUsed` and assigning it the value returned by
// the `getSelectElement` function, passing in the argument `".time-used span"`. */
// let selectClassTimeUsed = getSelectElement(".time-used span");

// /* The above code is creating a new HTML element of type "div" and assigning it to the variable
// "memoryBlocks". */
// let memoryBlocks = createElement("div");

// /* The above code is creating a new HTML div element and assigning it to the variable "divSuccessGame". */
// let divSuccessGame = createElement("div");

// /* The above code is creating a new HTML element of type "span" using the createElement() function and
// assigning it to the variable createReplayEl. */
// let createReplayEl = createElement("span");

// /* The above code is declaring a variable named "duration" and assigning it a value of 1000. */
// let duration = 1000;

// let selectMemoryBlock;

// let time;
// let cleraInt;

// /* The above code is adding event listeners to a collection of span elements with the class
// "selectSpansInControlButtons". When one of these spans is clicked, the code checks if it has a
// specific class ("easy-level", "middle-level", or "advanced-level") and performs different actions
// based on the class. */
// selectSpansInControlButtons.forEach((span) => {
//   span.addEventListener("click", (e) => {
//     if (e.target.classList.contains("easy-level")) {
//       saveLevel = "easy Level";
//       getTime(2, 60);
//       getNumberTheSetInteravel();

//       // Get Fetch Data Json length => 10
//       getFetchJsoneDate(10);
//     }

//     if (e.target.classList.contains("middle-level")) {
//       saveLevel = "Middle Level";

//       getTime(2, 45);
//       getNumberTheSetInteravel();

//       // [1] - Get Fetch Data Json length => 18
//       getFetchJsoneDate(18);
//     }
//     if (e.target.classList.contains("advenced-level")) {
//       saveLevel = "Advenced Level";

//       getTime(1, 60);
//       getNumberTheSetInteravel();

//       // Get Fetch Data Json length => 18
//       getFetchJsoneDate(18);
//     }
//   });
// });

// /**
//  * The function fetches data from a JSON API, manipulates the data, creates HTML elements, and removes
//  * a specific element from the DOM.
//  * @param numberOfDataFetch - The parameter "numberOfDataFetch" is the number of data entries that you
//  * want to fetch from the API. It determines how many data entries will be included in the "json"
//  * array.
//  */
// function getFetchJsoneDate(numberOfDataFetch) {
//   fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((response) => response.json())
//     .then((json) => {
//       json.length = numberOfDataFetch;

//       // [1] Foreach Data twice In Object One
//       let jsonFull = [...json, ...json];

//       // [2] get All Keys In New Object => jsonFull
//       let orderRanges = [...Array(jsonFull.length).keys()];

//       // [3] shuffle Array => orderRanges
//       shuffle(orderRanges);

//       // [4] Create (Elements => game-block) The In memory-blocks
//       createElementsPageIndex(jsonFull, orderRanges);

//       // [5] Remove Element => control-buttons
//       getSelectElement(".control-buttons").remove();
//     });
// }

// /**
//  * The shuffle function takes an array as input and returns a new array with the elements randomly
//  * rearranged.
//  * @param array - The parameter "array" is an array of elements that you want to shuffle.
//  * @returns the shuffled array.
//  */
// function shuffle(array) {
//   let current = array.length,
//     temp,
//     random;

//   while (current > 0) {
//     // Get Random Number
//     random = Math.floor(Math.random() * current);

//     // Decrease Length By One
//     current--;

//     // Save Current Element In Stash
//     temp = array[current];

//     // Current Element = Random Number
//     array[current] = array[random];

//     // Random Element = Get Element From Stash
//     array[random] = temp;
//   }
//   return array;
// }

// /**
//  * The function creates a set of game blocks with front and back faces, assigns order and thumbnail
//  * URLs, and adds event listeners for flipping the blocks.
//  * @param jsonFull - An array of objects containing information about games. Each object has properties
//  * like "url" and "thumbnailUrl".
//  * @param orderRanges - The `orderRanges` parameter is an array that specifies the order in which the
//  * game blocks should be displayed on the page. Each element in the array corresponds to a game block,
//  * and the value of the element determines the order of that block. For example, if `orderRanges` is
//  * `[3
//  */
// function createElementsPageIndex(jsonFull, orderRanges) {
//   memoryBlocks.className = "memory-blocks";
//   for (let index = 0; index < jsonFull.length; index++) {
//     let gameBlock = document.createElement("div");
//     gameBlock.className = `game-block`;
//     gameBlock.style.order = orderRanges[index];
//     gameBlock.dataset.thumbnailUrl = jsonFull[index].url.slice(-6);

//     let frontFace = document.createElement("div");
//     frontFace.className = "front face";
//     let backFace = document.createElement("div");
//     backFace.className = "back face";
//     let img = document.createElement("img");
//     img.src = jsonFull[index].thumbnailUrl;

//     memoryBlocks.appendChild(gameBlock);
//     gameBlock.appendChild(frontFace);
//     gameBlock.appendChild(backFace);
//     backFace.appendChild(img);

//     document.body.appendChild(memoryBlocks);

//     // Function flipBlock() =>
//     flipBlock(gameBlock);
//   }
// }

// /**
//  * The flipBlock function adds the class "is-flipped" to the SelectBlock element when it is clicked,
//  * and then calls the checkClassIfItExistsTwice function.
//  * @param SelectBlock - SelectBlock is the HTML element that represents the block that will be flipped
//  * when clicked.
//  */
// function flipBlock(SelectBlock) {
//   SelectBlock.addEventListener("click", () => {
//     // Add Class Is-flipped
//     SelectBlock.classList.add("is-flipped");

//     checkClassIfItExistsTwice();
//   });
// }

// /**
//  * The function `getAllClassesIsflipped()` returns an array of all the memory blocks that have the
//  * class "is-flipped".
//  * @returns an array of all the memory blocks that have the class "is-flipped".
//  */
// function getAllClassesIsflipped() {
//   // Select Element memory-blocks
//   selectMemoryBlock = getSelectElement(".memory-blocks");

//   // Collect All Flipped Cards
//   let allFlippedBlocks = Array.from(selectMemoryBlock.children).filter(
//     (flippedBlock) => flippedBlock.classList.contains("is-flipped")
//   );
//   return allFlippedBlocks;
// }

// /**
//  * The function checks if a specific class exists twice and performs certain actions if it does.
//  */
// function checkClassIfItExistsTwice() {
//   if (getAllClassesIsflipped().length == 2) {
//     // Stop Clicking Function
//     stopClicking();

//     // Check Matched Block Function
//     checkMatchedBlocks(
//       getAllClassesIsflipped()[0],
//       getAllClassesIsflipped()[1]
//     );
//   }
// }

// /**
//  * The function "stopClicking" adds a class to a memory block element to prevent clicking, and then
//  * removes the class after a specified duration.
//  */
// function stopClicking() {
//   // Add Class No Clicking No Main Container
//   selectMemoryBlock.classList.add("no-clicking");

//   // Remove Class No Clicking After The Duration
//   setTimeout(() => {
//     selectMemoryBlock.classList.remove("no-clicking");
//   }, duration);
// }

// /**
//  * The function checks if two blocks have matching thumbnail URLs, and if they do, it removes the
//  * "is-flipped" class and adds the "has-match" class to both blocks, otherwise it increments the wrong
//  * count and removes the "is-flipped" class after a certain duration.
//  * @param firstBlock - The firstBlock parameter represents the first block element that is being
//  * compared for a match.
//  * @param secondBlock - The secondBlock parameter is the second block element that is being compared to
//  * the firstBlock.
//  */
// function checkMatchedBlocks(firstBlock, secondBlock) {
//   if (firstBlock.dataset.thumbnailUrl === secondBlock.dataset.thumbnailUrl) {
//     // Remove Class is-flipped To firstBlock &&  secondBlock
//     firstBlock.classList.remove("is-flipped");
//     secondBlock.classList.remove("is-flipped");

//     // Add Class has-match To firstBlock && secondBlock
//     firstBlock.classList.add("has-match");
//     secondBlock.classList.add("has-match");

//     // // Function You Won
//     iwonTheGame();

//     addAudio("#success").play();
//   } else {
//     // Set Value Span In div => info-container .wrong wrong
//     getSelectElement(".wrong span").innerHTML =
//       parseInt(getSelectElement(".wrong span").innerHTML) + 1;

//     setTimeout(() => {
//       firstBlock.classList.remove("is-flipped");
//       secondBlock.classList.remove("is-flipped");
//     }, duration);
//     addAudio("#fail").play();
//   }
// }

// /**
//  * The function "addAudio" returns the first element in the document that matches the given attribute.
//  * @param attribute - The `attribute` parameter is a string that represents a CSS selector. It is used
//  * to select an HTML element from the document.
//  * @returns the element that matches the given attribute.
//  */
// function addAudio(attribute) {
//   return document.querySelector(attribute);
// }

// /**
//  * The function `getClassesHasMatch` returns an array of elements with the class "has-match" that are
//  * children of the element with the class "memory-blocks".
//  * @returns The function `getClassesHasMatch` returns an array of elements that have the class
//  * "has-match".
//  */
// function getClassesHasMatch() {
//   allHasMatch = Array.from(getSelectElement(".memory-blocks").children).filter(
//     (hasMatch) => hasMatch.classList.contains("has-match")
//   );
//   return allHasMatch;
// }

// /**
//  * The function "getNumberMinute" returns the input number.
//  * @param number - The parameter "number" is a variable that represents a number.
//  * @returns the value of the "number" parameter.
//  */
// function getNumberMinute(number) {
//   return number;
// }

// /**
//  * The function updates a countdown timer by calculating the minutes and seconds remaining, formatting
//  * the seconds to have leading zeros if necessary, and updating the HTML element with the new time.
//  */
// function updateCountDown() {
//   let minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   seconds = seconds < 10 ? `0${seconds}` : seconds;
//   getSelectElement("#count-down").innerHTML = `${minutes}:${seconds}`;
//   time--;

//   timeAlert();

//   gameOverTimeIsUp();
// }

// /**
//  * The getTime function calculates the total time in seconds based on the given minutes and seconds.
//  * @param minute - The parameter "minute" represents the number of minutes in the time.
//  * @param second - The parameter "second" represents the number of seconds.
//  * @returns The variable "time" which is the product of the minute and second parameters.
//  */
// function getTime(minute, second) {
//   // Write Username
//   setUserName();
//   return (time = minute * second);
// }

// /**
//  * The function returns a setInterval object that repeatedly calls the updateCountDown function at a
//  * specified duration.
//  * @returns The return value is the ID of the interval timer.
//  */
// function getNumberTheSetInteravel() {
//   return (cleraInt = setInterval(updateCountDown, duration));
// }

// /**
//  * The timeAlert function changes the background color of a timer element and plays an audio when the
//  * countdown reaches 0:05.
//  */
// function timeAlert() {
//   if (getSelectElement("#count-down").innerHTML === "0:05") {
//     getSelectElement(".timer").style.backgroundColor = "#F44336";
//     addAudio("#fiveToOne").play();
//   }
// }

// /**
//  * The function checks if the countdown timer has reached 0:00 and if the number of matching classes is
//  * less than 20, and if so, it adds a class to disable clicking, displays a popup message, appends a
//  * reload button to the popup, and plays a fail-end audio.
//  */
// function gameOverTimeIsUp() {
//   if (
//     getSelectElement("#count-down").innerHTML === "0:00" &&
//     getClassesHasMatch().length < 20
//   ) {
//     getSelectElement(".memory-blocks").classList.add("no-clicking");

//     contentPopupDiv(`Game Over Time Is Up :( `, "popup-wrong");

//     spanReloadAppendInPopup();

//     addAudio("#fail-end").play();
//   }
// }

// /**
//  * The function `contentPopupDiv` is used to display a message in a popup div with a specified class
//  * name.
//  * @param msg - The "msg" parameter is a string that represents the content or message that will be
//  * displayed in the popup div.
//  * @param className - The className parameter is used to specify the CSS class name that will be
//  * applied to the div element. This allows you to style the div element using CSS.
//  */
// function contentPopupDiv(msg, className) {
//   clearInterval(cleraInt);

//   divSuccessGame.innerHTML = msg;
//   divSuccessGame.className = className;
//   document.body.appendChild(divSuccessGame);
// }

// /**
//  * The function "spanReloadAppendInPopup" creates a replay button element, appends it to a div element
//  * with the class "successGame", and reloads the page when the replay button is clicked.
//  */
// function spanReloadAppendInPopup() {
//   createReplayEl.className = "replay";
//   createReplayEl.innerHTML = "Replay";

//   divSuccessGame.appendChild(createReplayEl);

//   createReplayEl.onclick = function () {
//     location.reload();
//   };
// }

// /**
//  * The function checks if the player has won the game by verifying if the number of matched classes is
//  * 20 and the countdown timer is not at 0:00.
//  */
// function iwonTheGame() {
//   if (
//     getClassesHasMatch().length == 20 &&
//     selectCountDown.innerHTML !== "0:00"
//   ) {
//     contentPopupDiv(
//       `<p>${
//         spanInfoContainer.innerHTML !== "Unknown"
//           ? "You Won : " + spanInfoContainer.innerHTML
//           : ""
//       }</p>
//     <p>Wrongs : ${selectWorngCount.innerHTML}</p>
//     <p>Time Used : ${selectCountDown.innerHTML}</p>`,
//       "popup-success"
//     );

//     spanReloadAppendInPopup();
//     addAudio("#success-end").play();
//     addAudio("#fiveToOne").pause();

//     setItemLocationStorage(spanInfoContainer, selectCountDown);
//   }
// }

// /**
//  * The function retrieves data from local storage and appends it to specific div elements.
//  */
// function getLocationStorageAndAppendInDiv() {
//   if (localStorage.getItem(localStorage.key(0))) {
//     selectClassLastPlayer.innerHTML = localStorage.key(0);
//     selectClassTimeUsed.innerHTML = localStorage.getItem(localStorage.key(0));
//   }
// }

// /**
//  * The function `setItemLocationStorage` sets an item in the local storage with a key and value, after
//  * converting the key to lowercase.
//  * @param key - The key parameter is the element that contains the username.
//  * @param value - The value parameter is the value that you want to store in the localStorage.
//  */
// function setItemLocationStorage(key, value) {
//   let convertUserNameToLowerCase = key.innerHTML.toLowerCase();
//   if (convertUserNameToLowerCase !== "unknown") {
//     localStorage.clear();
//     localStorage.setItem(convertUserNameToLowerCase, [
//       value.innerHTML,
//       saveLevel,
//     ]);
//   }
// }

// /**
//  * The function "setUserName" prompts the user to enter their name and then displays it on the webpage
//  * if it contains at least one letter.
//  */
// function setUserName() {
//   let yourName = prompt("What`s Your Name ?");

//   if (yourName == null || yourName == "") {
//     // Set Name To Unknown
//     spanInfoContainer.innerHTML = "Unknown";
//   } else {
//     // Set Name To Your Name
//     let reg = /[a-zA-Z]/gi;
//     if (reg.test(yourName)) {
//       spanInfoContainer.innerHTML = yourName;
//     }
//   }
// }

// /**
//  * The function "getSelectElement" returns the first element that matches the specified CSS selector.
//  * @param value - The value parameter is a string that represents a CSS selector. It is used to select
//  * an element from the DOM (Document Object Model).
//  * @returns the element that matches the given value.
//  */
// function getSelectElement(value) {
//   return document.querySelector(value);
// }

// /**
//  * The function `createElement` creates a new HTML element based on the provided element name.
//  * @param element - The parameter "element" is a string that represents the type of HTML element you
//  * want to create. For example, if you pass in "div", the function will create a new <div> element.
//  * @returns a newly created HTML element.
//  */
// function createElement(element) {
//   return document.createElement(element);
// }

// getLocationStorageAndAppendInDiv();

/*********************************************************************************** */
/*********************************************************************************** */
/*********************************************************************************** */
/*********************************************************************************** */
// Select Variables
// let controlButtons = document.querySelector(".control-buttons"),
//   spanControlButtons = document.querySelector(".control-buttons span"),
//   infoContainer = document.querySelector(".info-container"),
//   spanInfoContainer = document.querySelector(".info-container span"),
//   selectCountDown = document.getElementById("count-down"),
//   timerSelect = document.querySelector(".timer"),
//   //Select Element Span In Dev .info-container .wrong
//   selectWorngCount = document.querySelector(".info-container .wrong span");
// // Effect Duration
// (duration = 1000),
//   // Select Blocks Container
//   (memoryBlocks = document.querySelector(".memory-blocks")),
//   // Create Array From Game Blocks
//   (gameBlocks = Array.from(memoryBlocks.children)),
//   // Create Range Of Keys
//   (orderRange = [...Array(gameBlocks.length).keys()]),
//   (divSuccessGame = document.createElement("div")),
//   (cleraInt = "");

// // Event On Click StartGame
// spanControlButtons.onclick = function () {
//   let yourName = prompt("What`s Your Name ?");

//   if (yourName == null || yourName == "") {
//     // Set Name To Unknown
//     spanInfoContainer.innerHTML = "Unknown";
//   } else {
//     // Set Name To Your Name
//     spanInfoContainer.innerHTML = yourName;
//   }
//   // Upadte Counr Down (Timer)

//   let startingMinutes = 1;

//   let time = startingMinutes * 60;

//   cleraInt = setInterval(updateCountDown, duration);

//   function updateCountDown() {
//     let minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 10 ? `0${seconds}` : seconds;
//     selectCountDown.innerHTML = `${minutes}:${seconds}`;
//     time--;

//     timeAlert();

//     gameOverTimeIsUp();
//   }

//   // Remove Splash Screen
//   controlButtons.remove();
//   addAudio("#game-start").play();
// };

// shuffle(orderRange);

// // Add Order Css Property To Game Blocks
// gameBlocks.forEach((block, index) => {
//   block.style.order = orderRange[index];

//   //Add Click Event
//   block.addEventListener("click", () => {
//     flipBlock(block);
//   });
// });

// function getClassesHasMatch() {
//   allHasMatch = gameBlocks.filter((hasMatch) =>
//     hasMatch.classList.contains("has-match")
//   );
//   return allHasMatch;
// }

// // Shuffle Function To Array

// function shuffle(array) {
//   let current = array.length,
//     temp,
//     random;

//   while (current > 0) {
//     // Get Random Number
//     random = Math.floor(Math.random() * current);

//     // Decrease Length By One
//     current--;

//     // Save Current Element In Stash
//     temp = array[current];

//     // Current Element = Random Number
//     array[current] = array[random];

//     // Random Element = Get Element From Stash
//     array[random] = temp;
//   }
//   return array;
// }

// // Flip Block Function
// function flipBlock(SelectBlock) {
//   // Add Class Is-flipped
//   SelectBlock.classList.add("is-flipped");

//   // Collect All Flipped Cards
//   let allFlippedBlocks = gameBlocks.filter((flippedBlock) =>
//     flippedBlock.classList.contains("is-flipped")
//   );

//   // If Theres Two Selected Blocks
//   if (allFlippedBlocks.length == 2) {
//     // Stop Clicking Function
//     stopClicking();

//     // Check Matched Block Function
//     checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
//   }
// }

// // Stop Clicking Function
// function stopClicking() {
//   // Add Class No Clicking No Main Container
//   memoryBlocks.classList.add("no-clicking");

//   // Remove Class No Clicking After The Duration
//   setTimeout(() => {
//     memoryBlocks.classList.remove("no-clicking");
//   }, duration);
// }

// function checkMatchedBlocks(firstBlock, secondBlock) {
//   if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
//     // Remove Class is-flipped To firstBlock &&  secondBlock
//     firstBlock.classList.remove("is-flipped");
//     secondBlock.classList.remove("is-flipped");

//     // Add Class has-match To firstBlock && secondBlock
//     firstBlock.classList.add("has-match");
//     secondBlock.classList.add("has-match");

//     // Function You Won
//     iwonTheGame();

//     addAudio("#success").play();
//   } else {
//     // Set Value Span In div => info-container .wrong
//     selectWorngCount.innerHTML = parseInt(selectWorngCount.innerHTML) + 1;

//     setTimeout(() => {
//       firstBlock.classList.remove("is-flipped");
//       secondBlock.classList.remove("is-flipped");
//     }, duration);
//     addAudio("#fail").play();
//   }
// }

// // The message of the end of the game when the time stops
// function gameOverTimeIsUp() {
//   if (
//     selectCountDown.innerHTML === "0:00" &&
//     getClassesHasMatch().length < 20
//   ) {
//     memoryBlocks.classList.add("no-clicking");

//     contentPopupDiv(`Game Over Time Is Up :( `, "popup-wrong");

//     spanReloadAppendInPopup();

//     addAudio("#fail-end").play();
//   }
// }

// function iwonTheGame() {
//   if (
//     getClassesHasMatch().length == 20 &&
//     selectCountDown.innerHTML !== "0:00"
//   ) {
//     contentPopupDiv(
//       `<p>${
//         spanInfoContainer.innerHTML !== "Unknown"
//           ? "You Won : " + spanInfoContainer.innerHTML
//           : ""
//       }</p>
//     <p>Wrongs : ${selectWorngCount.innerHTML}</p>
//     <p>Time Used : ${selectCountDown.innerHTML}</p>`,
//       "popup-success"
//     );

//     spanReloadAppendInPopup();
//     addAudio("#success-end").play();
//     addAudio("#fiveToOne").pause();

//     setItemLocationStorage(spanInfoContainer, selectCountDown);
//   }
// }

// function timeAlert() {
//   if (selectCountDown.innerHTML === "0:05") {
//     timerSelect.style.backgroundColor = "#F44336";
//     document.getElementById("fiveToOne").play();
//   }
// }

// function addAudio(ElementString) {
//   return document.querySelector(ElementString);
// }

// function contentPopupDiv(msg, className) {
//   clearInterval(cleraInt);
//   divSuccessGame.innerHTML = msg;
//   divSuccessGame.className = className;
//   document.body.appendChild(divSuccessGame);
// }

// function spanReloadAppendInPopup() {
//   let selectReplayEl = document.createElement("span");
//   selectReplayEl.className = "replay";
//   selectReplayEl.innerHTML = "Replay";

//   divSuccessGame.appendChild(selectReplayEl);

//   selectReplayEl.onclick = function () {
//     location.reload();
//   };
// }

// function getLocationStorageAndAppendInDiv() {
//   let selectClassLastPlayer = document.querySelector(".last-player span");
//   let selectClassTimeUsed = document.querySelector(".time-used span");

//   if (localStorage.getItem(localStorage.key(0))) {
//     selectClassLastPlayer.innerHTML = localStorage.key(0);
//     selectClassTimeUsed.innerHTML = localStorage.getItem(localStorage.key(0));
//   }
// }

// function setItemLocationStorage(key, value) {
//   let convertUserNameToLowerCase = key.innerHTML.toLowerCase();
//   let reg = /[a-zA-Z]/gi;
//   if (
//     convertUserNameToLowerCase !== "Unknown" &&
//     reg.test(convertUserNameToLowerCase)
//   ) {
//     localStorage.clear();
//     localStorage.setItem(convertUserNameToLowerCase, value.innerHTML);
//   }
// }

// getLocationStorageAndAppendInDiv();

// build New Questions => The Style Json
// [
//   {
//     "id": 34,
//     "question": "Which command is used to create file archives in Linux?",
//     "description": null,
//     "answers": {
//       "answer_a": "arc",
//       "answer_b": "zip",
//       "answer_c": "ps",
//       "answer_d": "tar",
//       "answer_e": null,
//       "answer_f": null,
//     },
//     "multiple_correct_answers": "false",
//     "correct_answers": {
//       "answer_a_correct": "false",
//       "answer_b_correct": "false",
//       "answer_c_correct": "false",
//       "answer_d_correct": "true",
//       "answer_e_correct": "false",
//       "answer_f_correct": "false",
//     },
//     "correct_answer": "answer_d",
//     "explanation": null,
//     "tip": null,
//     "tags": [{ name: "Linux" }],
//     "category": "Linux",
//     "difficulty": "Easy",
//   },
// ];

// function createThePageQuestionAndAnswer() {
//   let quizApp = createElement("div");
//   quizApp.className = "quiz-app";
//   let quizInfo = createElement("div");
//   quizInfo.className = "quiz-info";
//   let category = createElement("div");
//   category.className = "category";
//   let count = createElement("div");
//   count.className = "count";
//   let quizArea = createElement("div");
//   quizArea.className = "quiz-area";
//   let answersArea = createElement("div");
//   answersArea.className = "answers-area";
//   let bullets = createElement("div");
//   bullets.className = "bullets";
//   let spans = createElement("div");
//   spans.className = "spans";
//   let countdown = createElement("div");
//   countdown.className = "countdown";
//   let minutes = createElement("span");
//   minutes.className = "minutes";
//   let seconds = createElement("span");
//   seconds.className = "seconds";

//   let results = createElement("div");
//   results.className = "results";
//   let prefect = createElement("span");
//   prefect.className = "prefect";

//   quizApp.appendChild(quizInfo);
//   quizInfo.appendChild(category);
//   quizInfo.appendChild(count);
//   quizApp.appendChild(quizArea);
//   quizApp.appendChild(answersArea);
//   answersArea.appendChild(bullets);
//   bullets.appendChild(spans);
//   bullets.appendChild(countdown);
//   countdown.appendChild(minutes);
//   countdown.appendChild(seconds);
//   answersArea.appendChild(results);
//   results.appendChild(prefect);

//   document.body.appendChild(quizApp);
// }

/************************************************************* */
/*==================== Problem Solving ====================== */
/************************************************************ */

/*************************************** */
/*========== Start Problem [1] ========= */
/*************************************** */

// Problem [1]
/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
"64607935616" -->      "#######5616"
"1" -->                "1"
"" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

/*************************************** Solved ***************************************************** */
// function maskify(cc) {
//   let fff = "";

//   for (i = 0; i < cc.length - 4; i++) {
//     if (cc.length == 1) {
//       return cc;
//     } else if (cc.length == 5) {
//       fff = cc[0] = "#";
//     } else {
//       fff += cc[i] = "#";
//     }
//   }
//   return `${fff}${cc.slice(-4)}`;
// }

// console.log(maskify("4556364607935616"));
// console.log(maskify("1"));
// console.log(maskify("11111"));

/*************************************** */
/*========== End Problem [1] ========= */
/*************************************** */

/*************************************** */
/*========== Start Problem [2] ========= */
/*************************************** */

// Problem [2]
/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

/*************************************** Solved ***************************************************** */
// let arrayOdd = [2, 4, 0, 100, 4, 11, 2602, 36];
// let arrayEven = [160, 3, 1719, 19, 11, 13, -21];

// function findOutlier(integers) {
//   let result = 0;
//   let even = [];
//   let odd = [];
//   integers.forEach((element) => {
//     if (element % 2 == 0) {
//       even.push(element);
//     } else {
//       odd.push(element);
//     }
//   });

//   odd.length === 1 ? (result = odd[0]) : "";

//   even.length === 1 ? (result = even[0]) : "";

//   return result;
// }

/************************* Start Another Solved To Used The Function Filter *****************************/
// function findOutlier(int){
//   var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }
/************************* End Another Solved To Used The Function Filter *****************************/

// console.log(findOutlier(arrayOdd)); // 11
// console.log(findOutlier(arrayEven)); // 160
// console.log(findOutlier([0, 1, 2])); // 1
// console.log(findOutlier([1, 2, 3])); // 2
// console.log(findOutlier([2, 6, 8, 10, 3])); // 3
// console.log(findOutlier([0, 0, 3, 0, 0])); // 3
// console.log(findOutlier([1, 1, 0, 1, 1])); // 0

/*************************************** */
/*========== End Problem [2] ========= */
/*************************************** */

/*************************************** */
/*========== Start Problem [3] ========= */
/*************************************** */

// Problem [3]
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

/*************************************** Solved *****************************************************/

// function accum(s) {
//   let result = "";
//   for (let index = 0; index < s.length; index++) {
//     result += s[index].toUpperCase();
//     result += s[index].toLowerCase().repeat(index);
//     result += index !== s.length - 1 ? "-" : "";
//   }
//   return result;
// }

/************************* Start Another Solved *****************************/
// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
/************************* End Another Solved  *****************************/
// console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// console.log(accum("NyffsGeyylB")); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// console.log(accum("MjtkuBovqrU")); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// console.log(accum("EvidjUnokmM")); // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// console.log(accum("HbideVbxncC")); // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");

/*************************************** */
/*========== End Problem [3] ========= */
/*************************************** */

/*************************************** */
/*========== Start Problem [4] ========= */
/*************************************** */

// Problem [4] => Create Phone Number
/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

/*************************************** Solved *****************************************************/

// function createPhoneNumber(numbers) {
//   let TheFirstThreeNumbers = "",
//     TheSecondThreeNumbers = "",
//     LastFourNumbers = "";

//   for (let i = 0; i < numbers.length; i++) {
//     if (i <= 2) {
//       TheFirstThreeNumbers += numbers[i];
//     }
//     if (i > 2 && i <= 5) {
//       TheSecondThreeNumbers += numbers[i];
//     }

//     if (i > 5) {
//       LastFourNumbers += numbers[i];
//     }
//   }

//   return `(${TheFirstThreeNumbers}) ${TheSecondThreeNumbers}-${LastFourNumbers}`;
// }

/************************* Start Another  *****************************/
// function createPhoneNumber(numbers) {
//   var format = "(xxx) xxx-xxxx";

//   for (var i = 0; i < numbers.length; i++) {
//     format = format.replace("x", numbers[i]);
//   }

//   return format;
// }
/************************* End Another Solved  *****************************/

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890");
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // "(111) 111-1111");
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890");

/*************************************** */
/*========== End Problem [4] ========= */
/*************************************** */

/*************************************** */
/*========== Start Problem [5] ========= */
/*************************************** */

// Problem [5] => Your order, please
/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

/*************************************** Solved *****************************************************/

// function order(words) {
//   if (words.length == 0) {
//     return words;
//   }
//   let wordsarr = words.split(" ");
//   let indarr = words.match(/\d/g);
//   let neword = [];
//   for (let i = 1; i <= indarr.length; i++) {
//     let ind = indarr.indexOf(i.toString());
//     neword.push(wordsarr[ind]);
//   }
//   return neword.join(" ");
// }

/************************* Start Another [1]  *****************************/
// function order(words) {
//   return words
//     .split(" ")
//     .sort(function (a, b) {
//       return a.match(/\d/) - b.match(/\d/);
//     })
//     .join(" ");
// }
/************************* End Another Solved [1]  *****************************/

// console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"
// console.log(order("")); // "", "empty input should return empty string"

/*************************************** */
/*========== End Problem [5] ========= */
/*************************************** */
