// sayHello();

// function sayHello() {
//   console.log("Hello");
// }

// TDZ
// let wish = "Good Morning";
// console.log(wish);

//function

function name1(a) {
  return "James";
}

name1();

//arrow function
let name = (a) => 5;

name();

console.log(name());

//callback functions

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showok() {
//   console.log("You agreed to the Conditions");
// }

// function showCancel() {
//   console.log("You Cancelled the Conditions");
// }

// ask("Do you agree", showok, showCancel);

//assignment phase or Declaration phase

// Execution

//TDZ
let greeting = () => {
  console.log("Good mrng");
};

greeting();

greeting = undefined;
