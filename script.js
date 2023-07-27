const pageBody = document.querySelector("body");
const openModalBtn = document.querySelector(".form__submit");
const successMessage = document.querySelector(".success__msg");
const dismissSucessMsg = document.querySelector(".dismiss__btn");
const successMsgEmail = document.querySelector("#user__email__address");
let emailInput = document.querySelector("#enail__address");
let errorStateText = document.querySelector(".error__state__text");

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

dismissSucessMsg.addEventListener("click", function () {
  successMessage.close();
});
