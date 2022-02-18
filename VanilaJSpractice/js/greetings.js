const userForm = document.querySelector(".user-info__form");
const userInput = document.getElementById("user-info__input");
const userBtn = userForm.querySelector("button");
const greeting = document.querySelector(".greeting");

function loginSubmit(event){
    event.preventDefault();
    userForm.classList.add("hidden");

}







userBtn.addEventListener("click", loginSubmit);