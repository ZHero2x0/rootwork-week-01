const tasks = [];
const taskForm = document.querySelector('#task-form');
const userText = document.querySelector('#task-input');
const errorMessage = document.querySelector('#error');
const taskList = document.querySelector('.task-box');
const taskCount = document.querySelector('#task-count');
const clearAllBtn = document.querySelector('.clear-btn');

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

let currentFilter = 'all';
const allFilter = document.querySelector('#all');
allFilter.addEventListener('click', () => {
  currentFilter = 'all';

  renderTasks();
});
const activeFilter = document.querySelector('#active');
activeFilter.addEventListener('click', () => {
  currentFilter = 'active';

  renderTasks();
});
const completedFilter = document.querySelector('#completed');
completedFilter.addEventListener('click', () => {
  currentFilter = 'completed';

  renderTasks();
});

function renderTasks() {
  taskList.textContent = '';

  let visibleTasks = tasks;
  if (currentFilter === 'active') {
    visibleTasks = tasks.filter((task) => task.completed === false);
  }
  if (currentFilter === 'completed') {
    visibleTasks = tasks.filter((task) => task.completed === true);
  }
  taskCount.textContent = visibleTasks.length;

  allFilter.classList.remove('active');
  activeFilter.classList.remove('active');
  completedFilter.classList.remove('active');
  if (currentFilter === 'all') {
    allFilter.classList.add('active');
  } else if (currentFilter === 'active') {
    activeFilter.classList.add('active');
  } else if (currentFilter === 'completed') {
    completedFilter.classList.add('active');
  }

  const emptyState = document.createElement('li');
  emptyState.classList.add('task');
  if (tasks.length === 0) {
    emptyState.textContent = '	No tasks yet. Add your first task!';
    taskList.appendChild(emptyState);
    return;
  } else if (currentFilter === 'active' && visibleTasks.length === 0) {
    emptyState.textContent = 'No Pending Tasks.';
    taskList.appendChild(emptyState);
    return;
  } else if (currentFilter === 'completed' && visibleTasks.length === 0) {
    emptyState.textContent = 'No Completed Tasks.';
    taskList.appendChild(emptyState);
    return;
  }

  for (let task of visibleTasks) {
    const listItems = document.createElement('li');
    listItems.classList.add('task');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      taskTitle.classList.toggle('completed', task.completed);

      console.log(task);
      renderTasks();
    });
    const taskLabel = document.createElement('label');
    const taskTitle = document.createElement('p');
    taskTitle.textContent = task.title;
    if (task.completed === true) {
      taskTitle.classList.add('completed');
    }
    const delTasksBtn = document.createElement('button');
    delTasksBtn.type = 'button';
    delTasksBtn.setAttribute('aria-label', 'Delete task');
    delTasksBtn.classList.add('settings');
    delTasksBtn.addEventListener('click', () => {
      const taskIndex = tasks.findIndex((item) => item.id === task.id);

      tasks.splice(taskIndex, 1);

      renderTasks();
    });
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash');

    taskLabel.appendChild(checkbox);
    taskLabel.appendChild(taskTitle);
    listItems.appendChild(taskLabel);
    delTasksBtn.appendChild(trashIcon);
    listItems.appendChild(delTasksBtn);
    taskList.appendChild(listItems);
  }
}
renderTasks();

clearAllBtn.addEventListener('click', () => {
  tasks.length = 0;

  renderTasks();
});
