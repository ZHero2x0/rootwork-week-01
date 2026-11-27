const tasks = [];
const taskForm = document.querySelector('#task-form');
const userText = document.querySelector('#task-input');
const errorMessage = document.querySelector('#error');
const taskList = document.querySelector('.task-box');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let userTextValue = userText.value.trim();

  if (userText.value.trim() === '') {
    errorMessage.textContent = 'Please enter a Task';
    return;
  }

  let task = {
    id: Date.now(),
    title: userTextValue,
    completed: false,
  };
  tasks.push(task);
  renderTasks();
  userText.value = '';

  console.log(tasks);
  console.log('Form Submitted!');
  console.log(userTextValue);
});

function renderTasks() {
  taskList.textContent = '';

  for (let task of tasks) {
    const listItems = document.createElement('li');
    listItems.classList.add('task');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      taskTitle.classList.toggle('completed', task.completed);

      console.log(task);
    });
    const taskLabel = document.createElement('label');
    const taskTitle = document.createElement('p');
    taskTitle.textContent = task.title;
    if (task.completed === true) {
      taskTitle.classList.add('completed');
    }

    taskLabel.appendChild(checkbox);
    taskLabel.appendChild(taskTitle);
    listItems.appendChild(taskLabel);
    taskList.appendChild(listItems);
  }
}
