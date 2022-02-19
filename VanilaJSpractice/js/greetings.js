const userForm = document.querySelector(".user-info__form");
const userInput = document.getElementById("user-info__input");
const userBtn = userForm.querySelector("button");
const greeting = document.querySelector(".greeting");

function loginSubmit(event){
    event.preventDefault();
    const username = userInput.value;
   
    userForm.classList.add("hidden");
    greeting.innerText = `Hello! ${userInput.value}`;
    greeting.classList.remove("hidden");

    
}







userBtn.addEventListener("click", loginSubmit);