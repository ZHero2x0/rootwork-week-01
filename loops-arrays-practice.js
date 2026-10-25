// 1.
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

console.log(names[0]); // Output: first name.

console.log(names[2]); // Output: third name.

console.log(names[names.length - 1]); // Output: last name

// .2
for (const name of names) {
  console.log(name);
} // Output: every name in the array

// .3
const nums = [4, 7, 10, 13, 16, 19, 22];

for (const num of nums) {
  if (num % 2 === 0) {
    console.log(num);
  }
} // Output: only the even numbers in the array

// 4.
const = [12, 45, 7, 89, 23, 56];
let total = 0;

for (const score of scores) {
  total += score;
}
console.log(total); // Output: the total score

// 5.
const numbers = [12, 45, 7, 89, 23, 56];


