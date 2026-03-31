const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Load tasks from localStorage
window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTaskToDOM(task.text, task.completed));
};

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll(".task-item").forEach(item => {
    tasks.push({
      text: item.querySelector("span").innerText,
      completed: item.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task to DOM
function addTaskToDOM(taskText, completed = false) {
  const li = document.createElement("li");
  li.className = "task-item";
  if (completed) li.classList.add("completed");

  const span = document.createElement("span");
  span.innerText = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.onclick = () => {
    li.classList.toggle("completed");
    saveTasks();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Handle Add button click
addBtn.onclick = () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTaskToDOM(taskText);
    saveTasks();
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
};
