//Comparison Operators
//  >, <, >=, <=, ==, !=, ===, !==

// let x = true === true;

// console.log(x);

// prompt

// let age = +prompt("Enter your age");

// console.log(age);

// Confirm

// let close = confirm("Are you sure you want to close?");

// console.log(close);

// Conditional operators

// If

// if ("") {
//   console.log("buy yippey");
// } else {
//   console.log("Buy Top Ramen");
// }

let age = 20;

// Ternary operator
let isMarried = false;

age > 18
  ? isMarried
    ? console.log("you can vote")
    : console.log("you are not allowed to vote")
  : console.log("you are not allowed to vote");

if (age > 18) {
  if (ismarried) {
    console.log("you can vote");
  } else {
    console.log("you are not allowed to vote");
  }
} else {
  console.log("you are not allowed to vote");
}
