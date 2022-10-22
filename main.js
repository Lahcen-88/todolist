const inputField = document.getElementById("inputField");
const addToDo = document.getElementById("addToDo");
const list = document.querySelector(".list");
const popUp = document.getElementById("pop-up");
const btnPopup = document.getElementById("btnPopup");


document.addEventListener("DOMContentLoaded", () => {
    retrieveTask();
})
addToDo.addEventListener('click', () => {
    if (!inputField.value) {
        popUp.classList.toggle("showPopup")
        btnPopup.onclick = () => {
        popUp.classList.toggle("showPopup")
    }
        return false;
    }
    let paragraph = document.createElement("p");
    let del = document.createElement("i");
    let div = document.createElement("div");
    paragraph.innerHTML = inputField.value;
    paragraph.style.fontWeight = "bolder";
    del.innerHTML = `<i onclick="deleteTask(this)"  class="fa-regular fa-trash-can"></i>`;
    div.append(paragraph, del);
    list.appendChild(div);

    saveTask(inputField.value)

    inputField.value = "";
    inputField.focus();
});
function deleteTask(button){
    button.parentElement.previousElementSibling.parentElement.remove()
    let targeted = button.parentElement.previousElementSibling.innerHTML;
    let tasks;
    if (localStorage.getItem("tasks") === null) {
    tasks = [];
    } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.splice(targeted, 1)
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function saveTask(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
    tasks = [];
    } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function retrieveTask() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
    tasks = [];
    } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function (task) {
        let paragraph = document.createElement("p");
        let del = document.createElement("i");
        let div = document.createElement("div");
        paragraph.innerHTML = task;
        P.fontSize = "12pt";
        del.innerHTML = `<i onclick="deleteTask(this)" class="fa-regular fa-trash-can"></i>`;
        div.append(paragraph, del);
        list.appendChild(div);
    });
}


