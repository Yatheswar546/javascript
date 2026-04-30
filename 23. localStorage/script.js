// ================= BASIC STORAGE =================
function saveName() {
    let name = document.getElementById("username").value;
    localStorage.setItem("username", name);
}

function getName() {
    let name = localStorage.getItem("username");
    document.getElementById("userOutput").textContent = name || "No data";
}

function removeName() {
    localStorage.removeItem("username");
    document.getElementById("userOutput").textContent = "Removed";
}

// ================= TODO APP =================
let taskList = document.getElementById("taskList");

// Load tasks on page load
window.onload = function () {
    displayTasks();
}

function addTask() {
    let task = document.getElementById("taskInput").value.trim();
    if(task === "") return;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("taskInput").value = "";
    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.forEach((task, index) => {
       let li = document.createElement("li");
       li.textContent = task;
       
       let btn = document.createElement("button");
       btn.textContent = "Delete";

       btn.onclick = function () {
        deleteTask(index);
       };

       li.appendChild(btn);
       taskList.appendChild(li);
    });
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}