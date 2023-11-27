let theInput = document.querySelector(".get-repos input"),
  getButton = document.querySelector(".get-button"),
  showRepos = document.querySelector(".show-repos");

getButton.onclick = function () {
  getRepos(theInput.value);
};

function checkInputValue(input) {
  if (input.value.length > 0) {
    return true;
  } else {
    showRepos.innerHTML =
      "<span style='color:red;font-weight: bold'>The Field Github Username Cannot Be Empty</span>";
    return false;
  }
}

function getRepos(userName) {
  if (checkInputValue(theInput)) {
    let myData = fetch(`https://api.github.com/users/${userName}/repos`)
      .then((response) => {
        response.re;
        return response.json();
      })
      .then((repositeries) => {
        if (repositeries.length) {
          // Empty The Container
          showRepos.innerHTML = "";

          // Loop On Repositories
          repositeries.forEach((repo) => {
            //Crate Elements
            let divRepo = document.createElement("div");
            let aRepo = document.createElement("a");

            //Append Text
            divRepo.appendChild(document.createTextNode(repo.name));
            aRepo.appendChild(document.createTextNode("Vist Repo"));

            // Add Class Name In The divRepo
            divRepo.className = "repo-box";
            // Set URL
            aRepo.href = repo.clone_url;
            // Added Attribute
            aRepo.setAttribute("target", "_blank");

            // Append Element
            divRepo.appendChild(aRepo);

            showRepos.appendChild(divRepo);

            console.log(repo);
          });
        } else {
          showRepos.innerHTML =
            "<span style='color:red;font-weight: bold'>Not Found Repository :( </span>";
        }
      });
  }
}
