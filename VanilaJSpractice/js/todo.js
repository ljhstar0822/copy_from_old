const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const todoInput = todoForm.querySelector("input");

const TODOS = "todos";
let toDos = [];

function savedTodo(){
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}



function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    savedTodo();
}

function crossOut(event){
    const li = event.target.parentElement;
    li.classList.toggle("checked");
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    const check = document.createElement("button");
    check.innerText = "✔️";
    btn.addEventListener("click", deleteTodo);
    check.addEventListener("click", crossOut);
    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function sendTodoList(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    console.log(toDos);
    toDos.push(newTodoObj)
    paintTodo(newTodoObj);
    savedTodo();
}

todoForm.addEventListener("submit", sendTodoList);

const savedTodos = localStorage.getItem(TODOS);
if (savedTodo !==null) {
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
    
} 


