let tasks = [
  {
    title: 'Create a Script',
    category: 'Javascript',
    completed: true,
    priority: 'low',
  },
  {
    title: 'Make a song',
    category: 'Music',
    completed: true,
    priority: 'low',
  },
  {
    title: 'Draw a bird',
    category: 'Personal',
    completed: true,
    priority: 'medium',
  },
  {
    title: 'Write a Task Manager program',
    category: 'Javascript',
    completed: true,
    priority: 'low',
  },
  {
    title: 'Sleep 12 hours a day',
    category: 'Personal',
    completed: true,
    priority: 'medium',
  },
  {
    title: 'Write a lyrical masterpiece',
    category: 'Music',
    completed: true,
    priority: 'low',
  },
];

function displayTasks() {
  for (let task of tasks) {
    console.log('Title:', task.title);
    console.log('Category:', task.category);
    console.log('Completed:', task.completed);
    console.log('Priority:', task.priority);
  }
}
displayTasks();

function tasksStats() {
  let completedTask = 0;

  for (let task of tasks) {
    if (task.completed === true) {
      completedTask++;
    }
  }

  let pendingTasks = tasks.length - completedTask;

  console.log('Total number of Tasks:', tasks.length);

  console.log('Completed Tasks:', completedTask);

  console.log('Pending Tasks:', pendingTasks);
}
tasksStats();

function tasksStatus() {
  let highPriorityTask = false;
  let completedTask = false;

  for (let task of tasks) {
    if (task.priority === 'high') {
      highPriorityTask = true;
      console.log(`
      High priority Task: ${task.title}
      ${task.category}
      ${task.completed}
      ${task.priority}
    `);
    }

    if (task.completed === false) {
      completedTask = true;
      console.log(`
      Incomplete Tasks: ${task.title}
      ${task.category}
      ${task.completed}
      ${task.priority}
    `);
    }
  }
  if (highPriorityTask === false && completedTask === false) {
    console.log('No high-priority tasks or incomplete tasks remaining.');
  }
}
tasksStatus();

function taskCategory() {
  let personalTask = 0;
  let jsTask = 0;

  for (let task of tasks) {
    if (task.category === 'Personal') {
      personalTask++;
    }

    if (task.category === 'Javascript') {
      jsTask++;
    }
  }
  console.log('Personal Tasks:', personalTask);
  console.log('Javascript Tasks:', jsTask);
}
taskCategory();
