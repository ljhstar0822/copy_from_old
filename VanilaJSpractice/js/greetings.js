const userForm = document.querySelector(".user-info__form");
const userInput = document.getElementById("user-info__input");
const userBtn = userForm.querySelector("button");
const greeting = document.querySelector(".greeting");


const HIDDEN = "hidden";
const USERNAME = "username";


function loginSubmit(event){
    event.preventDefault();
    const username = userInput.value;
    localStorage.setItem(USERNAME, username);
    userForm.classList.add(HIDDEN);
    paintGreeting(username);
}


function paintGreeting(username) {
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME);


if (savedUsername === null) {
    userForm.classList.remove(HIDDEN);
    userForm.addEventListener("submit", loginSubmit);
} else {
    paintGreeting(savedUsername);
}