let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function displayTask() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add("completed");
      li.innerHTML = li.innerText + " ✅";
    }
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    li.addEventListener("click", () => {
      task.completed = !task.completed;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTask();
    });
    editBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      let updatedTask = prompt("Edit task", task.text);
      if (updatedTask && updatedTask.trim() !== "") {
        task.text = updatedTask.trim();
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTask();
    });
    deleteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTask();
    });
  });
}
function addTask() {
  let value = input.value.trim();
  if (value !== "") {
    tasks.push({
      text: value,
      completed: false,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    displayTask();
  }
}
btn.addEventListener("click", () => {
  addTask();
});
input.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    addTask();
  }
});
displayTask();
