# Interactive Task Tracker

A simple task management application built with HTML, CSS, and vanilla JavaScript.

## How to Run

1. Clone or download the repository.
2. Open the `task-tracker` folder.
3. Open `index.html` in your browser.

## How It Works

### Task State and Rendering

When a task is added, it is stored in an array and displayed on the page. Each task has its own unique title, ID, and completion status.

When a task is completed, deleted, or filtered, the task list updates automatically. Tasks are stored temporarily in the browser's memory, so they are cleared when the page is refreshed.

### Event Listeners

Event listeners handle user interactions:

- `submit` adds new tasks.
- `click` handles filtering, deleting tasks, and clearing all tasks.
- `change` updates a task's completion status.

### Input Validation

The `trim()` method removes whitespace from the input. If the input is empty, an error message is displayed and the task is not added.

## Bug Debugged

Problem: The selected filter button was not keeping its active colour.

Cause: The active class was not being removed from all filter buttons before applying it to the selected button.

Fix: I updated the JavaScript to remove the active class from all three buttons before highlighting the selected one. I also adjusted the CSS selector to target `.filter-btn.active`.

## Manual Testing

| Test                                         | Outcome |
| -------------------------------------------- | ------- |
| Add a task                                   | Passed  |
| Toggle task completion                       | Passed  |
| Delete an individual task                    | Passed  |
| Filter All, Active and Completed             | Passed  |
| Submit empty input                           | Passed  |
| Keyboard navigation and Enter/Space controls | Passed  |
| Clear All Tasks Button                       | Passed  |

## AI Disclosure

I used ChatGPT for explanations of JavaScript concepts, debugging assistance, and guidance on implementing features.

I reviewed the suggestions, wrote and modified the code, and tested the functionality to understand how the different parts of the application work.
