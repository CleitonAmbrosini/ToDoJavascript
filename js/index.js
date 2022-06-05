const form = document.querySelector('form');
const inputField = form.querySelector('input');
const gridOfTasks = document.querySelector('#tasks');

const verifyIfTaskExists = () => {
  if (!localStorage.getItem('tasks')) return
  const tasksFromStorage = JSON.parse(localStorage.getItem('tasks'));
  for (let task of tasksFromStorage) {
    createGridOfTasks(task);
  }
}

document.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('delete-task')) {
    element.parentElement.remove();
    saveTasksInStorage();
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!getIputValue()) return
  createGridOfTasks(getIputValue());
  saveTasksInStorage();
  inputField.value = '';
})

const getIputValue = () => {
  return inputField.value;
}

const createGridOfTasks = (task) => {
  gridOfTasks.appendChild(createLi(task));
}

const createLi = (task) => {
  const li = document.createElement('li');
  const paragraph = document.createElement('spam');
  paragraph.setAttribute('class', 'task-description');
  paragraph.innerText = task;
  li.appendChild(paragraph);
  li.appendChild(createDeleteButton());
  return li;
}

const createDeleteButton = () => {
  const button = document.createElement('button');
  button.innerText = 'Delete';
  button.setAttribute('class', 'delete-task');
  return button;
}

const saveTasksInStorage = () => {
  const tasksOfGrid = gridOfTasks.querySelectorAll('.task-description');
  const tasks = [];
  for (let task of tasksOfGrid) {
    tasks.push(task.innerText);
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

verifyIfTaskExists();