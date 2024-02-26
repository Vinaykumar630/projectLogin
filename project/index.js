let inputElement = document.getElementById("inputElement");
let mainContainerEl = document.getElementById("mainContainer");
let middleContainerEl = document.getElementById("middleContainer");
let lastContainerEl = document.getElementById("lastContainer");
let inputName = document.getElementById("name");
let inputNumber = document.getElementById("number");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
function signIn() {
  let nameValue = inputName.value;
  let numbValue = parseInt(inputNumber.value);
  let emailValue = inputEmail.value;
  let passwordValue = parseInt(inputPassword.value);
  if (nameValue !== "" && numbValue !== "" && emailValue !== "" && passwordValue !== ""){
    mainContainerEl.removeChild(middleContainerEl);
    lastContainerEl.style.display = "inline";  
  }
}
