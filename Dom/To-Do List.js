const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load saved tasks
window.onload = loadTasks;

addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task) {
    addTask(task);
    saveTask(task);
    input.value = "";
  }
});

function addTask(taskText) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const btnDiv = document.createElement("div");
  btnDiv.className = "btns";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => editTask(span);

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete";
  delBtn.onclick = () => deleteTask(li, taskText);

  btnDiv.append(editBtn, delBtn);
  li.append(span, btnDiv);
  taskList.appendChild(li);
}

function editTask(span) {
  const newText = prompt("Edit task:", span.textContent);
  if (newText !== null && newText.trim() !== "") {
    updateTask(span.textContent, newText.trim());
    span.textContent = newText.trim();
  }
}

function deleteTask(li, text) {
  taskList.removeChild(li);
  removeTask(text);
}

// ---------- localStorage handling ----------
function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(addTask);
}

function removeTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTask(oldTask, newTask) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const index = tasks.indexOf(oldTask);
  if (index !== -1) tasks[index] = newTask;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
