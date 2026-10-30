let tasks = [
  {
    title: 'Create a Script',
    category: 'Javascript',
    completed: false,
    priority: 'High',
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
    completed: false,
    priority: 'medium',
  },
  {
    title: 'Write a Task Manager program',
    category: 'Javascript',
    completed: false,
    priority: 'high',
  },
  {
    title: 'Sleep 12 hours a day',
    category: 'Personal',
    completed: false,
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
