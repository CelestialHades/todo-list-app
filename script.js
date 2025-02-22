// Get elements
let taskList = document.getElementById("task-list");
let newTaskInput = document.getElementById("new-task");

// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.classList.toggle("completed", task.completed);

        li.innerHTML = `
            ${task.text} 
            <button onclick="toggleTask(${index})">✔</button>
            <button class="delete" onclick="deleteTask(${index})">Delete</button>
        `;

        taskList.appendChild(li);
    });
}

// Add a new task
function addTask() {
    let taskText = newTaskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        newTaskInput.value = "";
        updateLocalStorage();
        displayTasks();
    }
}

// Toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateLocalStorage();
    displayTasks();
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    updateLocalStorage();
    displayTasks();
}

// Update local storage
function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Initial display of tasks
displayTasks();