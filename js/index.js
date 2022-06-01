const createGridOfTasks = () => {
  const tasksGrid = document.querySelector("#tasks");
  const tasksList = document.createElement("ul");
  tasksGrid.appendChild(tasksList);
}

const toDoJavascript = () => {
  const form = document.querySelector("#form");
  const grid = document.querySelector("#tasks");
  form.addEventListener('submit', handleSubmit);
  grid.addEventListener('click', handleDelete);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newTask = document.querySelector("#todo").value;
  saveLocalStorage(newTask);
}

const saveLocalStorage = (task) => {
  let id = localStorage.length;
  localStorage.setItem(id++, task);
}

const handleDelete = (e) => {
  localStorage.removeItem(e.target.id);
  updateTaskList();
}

const updateTaskList = () => {
  const tasksList = document.querySelector("#tasks ul");
  for (let key in localStorage) {
    const task = document.createElement("li");
    task.id = key;
    task.innerHTML = localStorage[key];
    tasksList.appendChild(task);
  }
}

createGridOfTasks();
updateTaskList();
toDoJavascript();