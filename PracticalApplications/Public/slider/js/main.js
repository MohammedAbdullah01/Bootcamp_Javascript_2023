/******** Select Elements*********** */

let allImgsInSlideContanier = document.querySelectorAll(
  ".slider-contanier img"
);

(currentIndex = 1),
  (images = Array.from(allImgsInSlideContanier)),
  (imagesCount = images.length),
  (sliderNumber = document.querySelector(".slider-number")),
  (sliderControlsPrev = document.getElementById("prev")),
  (sliderControlsNext = document.getElementById("next"));
sliderControlsPrev.onclick = onClickPrev;
sliderControlsNext.onclick = onClickNext;

(createUlEl = document.createElement("ul")), (createUlEl.id = "pagination-ul");

for (let index = 1; index <= images.length; index++) {
  let createListItems = document.createElement("li");
  createListItems.setAttribute("data-index", index);
  createListItems.textContent = index;
  createUlEl.appendChild(createListItems);

  if (currentIndex === index) {
    createListItems.className = "active";
  }
}

// Add The Created Ul Element To The Page
document.querySelector(".paginations").appendChild(createUlEl);

// Get Pagination Items And Convert To Array
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentIndex = parseInt(this.getAttribute("data-index"));
    // Trigger The Checker Function
    theCheck();
  };
}
// Trigger The Checker Function
theCheck();

function onClickPrev() {
  if (sliderControlsPrev.classList.contains("disabled") === false) {
    currentIndex--;
    // Trigger The Checker Function
    theCheck();
  }
}

function onClickNext() {
  if (sliderControlsNext.classList.contains("disabled") === false) {
    currentIndex++;
    // Trigger The Checker Function
    theCheck();
  }
}

function theCheck() {
  // Set The Slide Number
  sliderNumber.textContent = `Slide # ${currentIndex} Of ${imagesCount}`;

  // Remove All Active Class
  removeAllActive();

  // set Active Class On Current Index
  images[currentIndex - 1].classList.add("active");

  // Set Active Class On Current Index
  createUlEl.children[currentIndex - 1].classList.add("active");

  // Check If Current Slide Is The First
  if (currentIndex === imagesCount) {
    sliderControlsNext.classList.add("disabled");
  } else if (currentIndex === 1) {
    sliderControlsPrev.classList.add("disabled");
  } else {
    sliderControlsNext.classList.remove("disabled");
    sliderControlsPrev.classList.remove("disabled");
  }
}

// Remove All Active Classes From Images And Pagination Bullets
function removeAllActive() {
  images.forEach((img) => {
    img.classList.remove("active");
  });
  let ListItem = Array.from(createUlEl.children);
  ListItem.forEach((li) => {
    li.classList.remove("active");
  });
}
