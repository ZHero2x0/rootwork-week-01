//TEST CASE 1
//input
let age = 69;
let score = 80;
let hasLaptop = true;
let hasInternet = true;
let completedRegistration = true;

// if (age >= 18 && score >= 60 && hasLaptop && hasInternet && completedRegistration) {
//   console.log('Eligible');
// } else {
//   console.log('Not eligible');
// }
//expected result: Eligible
//actual result: Eligible

// //TEST CASE 2
// //input
// age = 17;
// if (age >= 18 && score >= 60 && hasLaptop && hasInternet && completedRegistration) {
//   console.log('Eligible');
// } else {
//   console.log('Not eligible');
// }
// //expected result: Not eligible
// //actual result: Not eligible

// //TEST CASE 3
// //input
completedRegistration = false;
if (age >= 18 && score >= 60 && hasLaptop && hasInternet && completedRegistration) {
  console.log('Eligible');
} else {
  console.log('Not eligible');
}
// //expected result: Not Eligible
// //actual result: Not Eligible

// //TEST CASE 4
// //input
// age = 20;
// score = 50;
// if (age >= 18 && score >= 60 && hasLaptop && hasInternet && completedRegistration) {
//   console.log('Eligible');
// } else {
//   console.log('Not eligible');
// }
// //expected result: Not eligible
// //actual result: Not eligible

//TEST CASE 5
//input
age = 18;
score = 91;
hasLaptop = false;
if (age >= 18 && score >= 60 && hasLaptop && hasInternet && completedRegistration) {
  console.log('Eligible');
} else {
  console.log('Not eligible');
}
//expected result: Not eligible
//actual result: Not eligible
