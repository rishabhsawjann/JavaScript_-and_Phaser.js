// Load tasks when page opens
window.onload = loadTasks;

document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value.trim();

  if (task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // get tasks or empty array
    tasks.push(task); // add new task
    localStorage.setItem("tasks", JSON.stringify(tasks)); // save back to localStorage
    taskInput.value = ""; // clear input
    loadTasks(); // refresh task list
  }
}

function loadTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // clear old list
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;

    // Delete button
    let btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = function() {
      deleteTask(index);
    };

    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1); // remove task at index
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}
