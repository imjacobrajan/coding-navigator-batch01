//Slice (start, end)

let arr = ["a", "b", "c", "d", "e"];

// console.log(arr.slice(0, 4));
// console.log(arr.slice(1));
// console.log(arr.slice(-3));
// Starting value should be smaller than the ending value

// Splice (Star, No of item to be deleted, element  )

// let a = ["Iam", "studying", "Javascript", "now"];
// a.splice(1, 0, "Hello");
// console.log(a);

// Foreach

// let heros = ["IronMan", "Batman", "Hulk"];

// ["IronMan", "Batman", "Hulk"].forEach((hero) => {
//   console.log(hero);
// });

// Find

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Peter" },
//   { id: 3, name: "Mary" },
// ];

// let user = users.find((e) => {
//   return e.id == 2; //true
// });

// console.log(user);

// Filter

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Peter" },
//   { id: 3, name: "Mary" },
// ];

// let filteredUser = users.filter((item) => {
//   return item.id < 3;
// });

// console.log(filteredUser);

//Map *

// let x = [1, 2, 3, 4, 5];

// let MulTwo = x.map((item) => {
//   return item * 2;
// });
// console.log(MulTwo);

// sort

let x = [1, 13, 6, 18, 5];
x.sort((a, b) => {
  return a - b;
});
console.log(x);
