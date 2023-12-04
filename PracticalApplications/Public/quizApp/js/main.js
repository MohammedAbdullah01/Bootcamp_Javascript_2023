/************** Select Elements ****************** */
let quizApp = document.querySelector(".quiz-app");
quizApp.style.display = "none";

let categoryName = document.querySelector(".quiz-info .category");

let countSpan = document.querySelector(".quiz-info .count");

let quiArea = document.querySelector(".quiz-area");

let answersArea = document.querySelector(".answers-area");

let submitButton = document.querySelector(".submit-button");

let bulltesSpanContainer = document.querySelector(".bullets .spans");

let categories = ["DevOps", "SQL", "Code", "CMS", "Linux", "Docker"];

/************** Set Options ****************** */
let currentIndex = 0;
let rightAnswer = 0;

function addAllCategoriesToThePage() {
  let divCategories = document.querySelector(".show-categories");

  for (let index = 0; index < categories.length; index++) {
    let category = createElement("div");
    category.className = "category";
    category.innerHTML = categories[index];

    divCategories.appendChild(category);
  }
  whenYouClickOnTheCategory();
}

/**
 * The function `getQuestionsApiJson` makes a synchronous GET request to the QuizAPI.io API to retrieve
 * questions based on a specified category and returns the parsed JSON response.
 * @param questionsCategory - The `questionsCategory` parameter is a string that represents the
 * category of questions you want to retrieve from the API. It is used to construct the API URL by
 * appending it to the base URL.
 * @returns the parsed JSON object of the questions fetched from the API.
 */
function getQuestionsApiJson(questionsCategory) {
  let request = new XMLHttpRequest();

  request.open(
    "Get",
    `https://quizapi.io/api/v1/questions?category=${questionsCategory}`,
    false
  );
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-type", "application/json");
  request.setRequestHeader(
    "X-Api-Key",
    "RRGAzKgk2OIYkkHu82QRYl4jil23PozCgp3ZmLx2"
  );
  request.send();

  let questions = JSON.parse(request.responseText);

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      questions = this.responseText;
    }
  };
  return questions;
}

addAllCategoriesToThePage();

/* The code snippet is adding a click event listener to each element in the `allElementsCategories`
array. When one of these elements is clicked, the event listener function is executed. */
function whenYouClickOnTheCategory() {
  let allElementsCategories = document.querySelectorAll(
    ".show-categories .category"
  );

  let containerCaregories = document.querySelector(".container-caregories");
  allElementsCategories.forEach((cate) => {
    cate.addEventListener("click", function (e) {
      categories.forEach((catValue) => {
        if (e.target.innerHTML === catValue) {
          containerCaregories.remove();
          let resultQuestions = getQuestionsApiJson(catValue);
          let questionCount = resultQuestions.length;

          addQuestionData(resultQuestions[currentIndex], questionCount);

          countDown(5, questionCount);

          setCategoryName(catValue);

          setQuestionsCount(questionCount);

          createBullets(questionCount);

          quizApp.style.display = "";

          whenYouClickOnTheAnswer(resultQuestions);
        }
      });
    });
  });
}

/**
 * The function "setCategoryName" sets the innerHTML of an element with the id "categoryName" to the
 * value of the "category" parameter.
 * @param category - The category parameter is a variable that represents the name of a category.
 */
function setCategoryName(category) {
  categoryName.innerHTML = `Category : ${category}`;
}

/**
 * The function creates a specified number of bullet elements and appends them to a container, with the
 * first bullet having a specific class.
 * @param number - The parameter "number" represents the number of bullets to be created.
 */
function createBullets(number) {
  for (let index = 0; index < number; index++) {
    let theBullte = createElement("span");
    if (index === 0) {
      theBullte.className = "on";
    }
    bulltesSpanContainer.appendChild(theBullte);
  }
}

/**
 * The function sets the number of questions in a count span element.
 * @param numberQuestions - The number of questions to be set.
 */
function setQuestionsCount(numberQuestions) {
  countSpan.innerHTML = `Questions Count : ${numberQuestions}`;
}

function addQuestionData(object, count) {
  if (currentIndex < count) {
    //Create Element h2
    let titleQuestion = createElement("h2");

    titleQuestion.innerHTML = object.question;
    quiArea.appendChild(titleQuestion);

    let answersValues = Object.values(object.answers);
    let answersKeys = Object.keys(object.answers);
    for (let index = 0; index < answersValues.length; index++) {
      if (answersValues[index] !== null) {
        let mainDiv = createElement("div");

        mainDiv.className = "answer";

        let radioInput = createElement("input");

        radioInput.name = "question";
        radioInput.type = "radio";
        radioInput.id = answersKeys[index];

        let label = createElement("lable");
        label.htmlFor = answersKeys[index];
        label.innerHTML = answersValues[index];
        mainDiv.appendChild(radioInput);
        mainDiv.appendChild(label);
        answersArea.appendChild(mainDiv);
      }
    }
  }
}

/**
 * The function "whenYouClickOnTheAnswer" is used to handle the click event on an answer element and
 * check if the selected answer is correct.
 * @param element - The "element" parameter is the HTML element that represents the answer option. It
 * could be a radio button, checkbox, or any other clickable element.
 * @param correct_answers - The `correct_answers` parameter is an object that contains the correct
 * answers for each input radio button. The keys of the object are the IDs of the input radio buttons,
 * and the values are the correct answers for each input radio button.
 */
function whenYouClickOnTheAnswer(object) {
  submitButton.onclick = () => {
    checkAnswer(object[currentIndex]);

    currentIndex++;

    quiArea.innerHTML = "";
    answersArea.innerHTML = "";

    addQuestionData(object[currentIndex], object.length);

    handleBullets();

    clearInterval(countInteravel);

    countDown(5, object.length);

    showResults(object.length);
  };
}

/**
 * The function checks if the given answer is true and increments the variable if it is, otherwise it
 * logs "bad".
 * @param rightAnswer - The parameter `rightAnswer` is a variable that represents the answer to be
 * checked.
 */
function checkAnswer(object) {
  let answers = document.getElementsByName("question");

  let choosenAnswer;

  for (let index = 0; index < answers.length; index++) {
    if (answers[index].checked) {
      choosenAnswer = `${answers[index].id}_correct`;

      if (object.correct_answers[choosenAnswer] === "true") {
        rightAnswer++;
        document.getElementById("success").play();
      } else {
        document.getElementById("fail").play();
      }
    }
  }
}

function handleBullets() {
  let bullets = document.querySelectorAll(".bullets .spans span");
  let convertBulltesToArray = Array.from(bullets);
  convertBulltesToArray.forEach((bullet, index) => {
    if (currentIndex === index) {
      bullet.className = "on";
    }
  });
}

function showResults(count) {
  if (currentIndex === count) {
    quiArea.remove();
    answersArea.remove();
    submitButton.remove();
    bulltesSpanContainer.remove();

    let results = createElement("div");
    results.className = "results";

    let prefect = createElement("div");
    prefect.className = "prefect";

    let wordSpan = createElement("span");

    if (rightAnswer === count) {
      wordSpan.className = "Excellence";
      wordSpan.innerHTML = "Excellence";
    } else if (rightAnswer >= Math.floor(count / 2)) {
      wordSpan.className = "Good";
      wordSpan.innerHTML = "Good";
    } else {
      wordSpan.className = "Failed";
      wordSpan.innerHTML = "Failed";
    }

    results.appendChild(prefect);
    prefect.appendChild(wordSpan);
    prefect.appendChild(
      document.createTextNode(` You Answered ${rightAnswer} From ${count}`)
    );
    quizApp.appendChild(results);
  }
}

function countDown(duration, count) {
  if (currentIndex < count) {
    let minutes, seconds;

    let coundownElement = document.querySelector(".coundown");

    countInteravel = setInterval(() => {
      minutes = parseInt(duration / 60);
      seconds = parseInt(duration % 60);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      coundownElement.innerHTML = `${minutes}:${seconds}`;
      if (--duration < 0) {
        clearInterval(countInteravel);

        submitButton.click();
      }
    }, 1000);
  }
}

/**
 * The function `createElement` creates a new HTML element based on the provided element name.
 * @param element - The parameter "element" is a string that represents the type of HTML element you
 * want to create. For example, if you pass in "div", the function will create a new <div> element.
 * @returns a newly created HTML element.
 */
function createElement(element) {
  return document.createElement(element);
}
