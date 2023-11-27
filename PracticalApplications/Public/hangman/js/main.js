// Letters
let letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Element In Container
let elementLetter = document.querySelector(".letters");

// Generate Letters

lettersArray.forEach((letter) => {
  // Create Element Span
  let spanLetter = document.createElement("span");

  // Create Letter Text Node
  let spanLetterText = document.createTextNode(letter);

  //Append SpanText In Element SpanLetter
  spanLetter.appendChild(spanLetterText);

  // Add Class On Span
  spanLetter.className = "letter-box";

  //Append Span In Element Letter
  elementLetter.appendChild(spanLetter);
});

// Object Of Words + Category
let words = {
  Programming: ["javascript", "php", "html", "css", "Python"],
  Movies: [
    "The Godfather",
    "The Dark Knight",
    "Angry Men",
    "Fight Club",
    "Inception",
  ],

  Hollywood_Celebrities: [
    "Johnny Depp",
    "Jim Carrey",
    "Emma Watson",
    "Daniel Radcliffe",
    "Leonardo DiCaprio",
  ],

  Football_Celebrities: [
    "Cristiano Ronaldo",
    "Kylian Mbappe",
    "Zlatan Ibrahimovic",
    "David Beckham",
    "Diego Maradona",
  ],

  Countries: ["syria", "Palestine", "Egypt", "Yemen", "Bahrain", "Qater"],
};

// Get All Keys In Object => words
let allKeys = Object.keys(words);
// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomPropNumber];

// Category Value
let randomPropValue = words[randomPropName];

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// Random Category Value In Array
let randomValueName = randomPropValue[randomValueNumber];

// Select Element Span In Category
let spanCategory = document.querySelector(".category span");

// Set Category Info
spanCategory.innerHTML = randomPropName.replace("_", " ");

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert randomValueName => Array
let lettersAndSpace = Array.from(randomValueName);

lettersAndSpace.forEach((e) => {
  let spanLettersGuess = document.createElement("span");
  if (e === " ") {
    // Add Class To The Span
    spanLettersGuess.className = "with-space";
  }
  lettersGuessContainer.appendChild(spanLettersGuess);
});

// Select Spans In => Letters Guess Element
let allSpanInGurss = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman-draw");

// Handle Clicking On Letters
document.addEventListener("click", (e) => {
  let theStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    lettersAndSpace.forEach((letter, index) => {
      if (theClickedLetter == letter.toLowerCase()) {
        theStatus = true;
        allSpanInGurss.forEach((span, spanIndex) => {
          if (index == spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });
    // If Letter Is Wrong
    if (theStatus !== true) {
      wrongAttempts++;

      // Add Class wrong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      // Play Fail Sound
      getSoundGame("fail");

      if (wrongAttempts === 8) {
        endGame(
          "Game Over , The Word Is",
          "popup-wrong",
          `"${randomValueName}"`
        );

        elementLetter.classList.add("finished");
        // Play Fail Sound
        getSoundGame("fail-end");
      }
    } else {
      // Play Fail Sound
      getSoundGame("success");

      // Get All Spans In Element Div .letters-guess
      let spanValue = "";
      allSpanInGurss.forEach((s) => {
        spanValue += s.innerHTML;
      });

      // Check SpanValue Equal To RandomValueName
      function checkSpanValueEqualRandomValueName(msg) {
        if (spanValue === randomValueName.toLowerCase()) {
          endGame(msg, "popup-success", "Wrongs: " + wrongAttempts);
          elementLetter.classList.add("finished");
          getSoundGame("success-end");
        }
      }
      if (wrongAttempts >= 4) {
        checkSpanValueEqualRandomValueName("Good level");
      }
      if (wrongAttempts < 4) {
        checkSpanValueEqualRandomValueName("Very good level");
      }
      if (wrongAttempts === 0) {
        checkSpanValueEqualRandomValueName("Very Very good level");
      }
    }
  }
});

// End Game Function

function endGame(message, className, word = "") {
  // Create Element Popup Div
  let div = document.createElement("div");
  let pRandoValue = document.createElement("p");

  // Create Text
  let divText = document.createTextNode(message);
  let pext = document.createTextNode(`${word}`);

  // Append Text To Div
  div.appendChild(divText);

  // Append Text To pRandoValue
  pRandoValue.appendChild(pext);

  // Append pRandoValue To div
  div.appendChild(pRandoValue);

  // Add Class On Div
  div.className = className;

  //Append To The Body

  document.body.appendChild(div);
}

function getSoundGame(className) {
  return document.getElementById(className).play();
}
