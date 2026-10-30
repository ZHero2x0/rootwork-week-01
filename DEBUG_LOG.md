Problem 1: Case sensitivity

Problem: My program did not recognise some high-priority tasks.

What I observed: Tasks with the priority 'High' were ignored when I checked for 'high'.

What I checked: I checked the priority values in my task objects and compared their spelling and capitalisation.

Cause: JavaScript is case-sensitive, meaning 'High' and 'high' are treated as different strings.

Fix: Changed the the "H" to "h".

Problem 2: Incorrect placement of conditions

Problem: My program displayed messages like "No high-priority tasks found" even when it had not checked all the tasks.

What I observed: The messages appeared at the wrong time or were printed more than once.

What I checked: I checked the position of my if statements and else statements inside the loop.

Cause: I placed the condition that checks whether any matching tasks were found inside the loop. This made the program check too early, before examining the entire array.

Fix: I used Boolean flags to keep track of whether matching tasks were found. I moved the final checks outside the loop so they would only run after all tasks had been checked.
