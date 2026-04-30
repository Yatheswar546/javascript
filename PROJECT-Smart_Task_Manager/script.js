// VARIABLES & DATA
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const quoteE1 = document.getElementById("quote");

// ADD TASK
taskForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const newTask = {
        id: Date.now(),
        title: taskInput.value,
        completed: false,
        notes: []
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = "";
});

// RENDER TASKS
function renderTasks() {
    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(task => {
        if(filter === "completed") return task.completed;
        if(filter === "pending") return !task.completed;
        return true;
    });

    filteredTasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">
                ${task.title}
            </span>
            <div>
                <button onclick="toggleTask(${task.id})">✔</button>
                <button onclick="deleteTask(${task.id})">❌</button>
            </div> 
        `;

        taskList.appendChild(li);
    });
}

// TOGGLE TASK
function toggleTask(id){
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
}

// DELETE TASK
function deleteTask(id){
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

// SAVE TO LOCAL STORAGE
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// FILTER EVENTS
document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener('click', () => {
        filter = btn.dataset.filter;
        renderTasks();
    });
});

//FETCH API (ASYNC / AWAIT)
async function fetchQuote() {
    try {
        quoteE1.textContent = "Loading quote...";

        const res = await fetch("https://api.adviceslip.com/advice");

        if(!res.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await res.json();
        quoteE1.textContent = data.slip.advice;

    } catch (error) {
        quoteE1.textContent = "Failed to load quote";
        console.log(error);
    }
}

// INITIAL LOAD
renderTasks();
fetchQuote();