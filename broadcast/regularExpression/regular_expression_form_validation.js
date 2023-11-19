/* Regular Expression
    - Input Form validation Practice
*/

document.getElementById("register").onsubmit = function () {
  let inputPhone = document.querySelector("#phone").value;
  let inputReg = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 564-8910
  let validationTest = inputReg.test(inputPhone);

  if (validationTest === false) {
    return false;
  }
  return true;
};
