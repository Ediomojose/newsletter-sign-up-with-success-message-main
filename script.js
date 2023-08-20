const pageBody = document.querySelector("body");
const openModalBtn = document.querySelector(".form__submit");
let emailInput = document.querySelector("#email__address");
let errorStateText = document.querySelector(".error__state__text");
const successMessage = document.querySelector(".success__msg");
const successMsgEmail = document.querySelector("#user__email__address");
const dismissSucessMsgBtn = document.querySelector(".dismiss__btn");

const emptyFieldMsg = "Input field can not be blank";

openModalBtn.addEventListener("click", function () {
  if (!emailInput.value) {
    emailInput.classList.add("error__state");
    emailInput.classList.add("error__placeholder");
    emailInput.classList.add("input__background");
    errorStateText.innerText = emptyFieldMsg;
  } else {
    successMessage.showModal();
    successMsgEmail.innerText = emailInput.value;
  }
});

dismissSucessMsgBtn.addEventListener("click", function () {
  successMessage.close();
});
