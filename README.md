## What the program does

The program is a Task Manager that allows users to manage their tasks. It stores tasks in an array of objects, displays task details, shows the total number of tasks, counts completed and pending tasks, identifies high-priority and incomplete tasks, and allows new tasks to be added.

## How I broke the problem down

I divided the project into smaller functions so that each function handles a specific task:

1. Add a task: Create a function that receives new task details and adds the task to the array.
2. Display tasks: Show the title, category, completion status, and priority of each task.
3. Task statistics: Calculate the total number of tasks, completed tasks, and pending tasks.
4. Task status: Identify high-priority and incomplete tasks and display a message when none are found.
5. Category summary: Count how many tasks belong to the Personal and Javascript category.
   Breaking the project into smaller parts made it easier to understand, write, and test the code.

## Concepts I used

- Arrays
- Objects
- Functions
- Parameters and arguments
- For...of loops
- If statements
- Operators
- Boolean values
- Array methods and properties
- Template literals

## Hardest part

The hardest part was understanding how loops and conditions work together, especially when writing the function for checking high-priority and incomplete tasks.

I initially placed some conditions inside the loop, which caused messages to appear at the wrong time. I also had difficulty understanding the difference between `for...in` and `for...of`.

After testing my code and correcting my mistakes, I understood that `for...of` gives me the actual task objects, while Boolean flags help me remember whether a condition was met after the loop finishes.

## One thing I would improve

With more JavaScript knowledge, I would improve the program by allowing users to add, edit, delete, and search for tasks. I would also make the category summary automatic so that it can count all categories without needing to create a separate counter for each one.

I would also improve the program's input validation to prevent users from entering incorrect task details.

## AI Disclosure

I used AI to help me understand JavaScript concepts, debug errors, and complete parts of my Task Manager program. It helped me understand functions, loops, arrays, objects, conditions, and how to add new tasks.

One suggestion I accepted: I accepted the suggestion to use a `for...of` loop instead of a `for...in` loop when displaying task objects. This made it easier to access each task and its properties.

One thing I had to understand and verify myself: I had to understand why Boolean flags were needed and why the final condition had to be placed outside the loop. I learned that the loop must check all the tasks before the program can know whether any matching tasks were found.
