// Arrays

// arr = [1, 2, 3, 4, 5]

// let arr = new Array(1, 2, 3);

// let arr = [1, 2, 3, 4, 5];

// let fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits);

// fruits[3] = "Grapes";

// console.log(fruits);

// fruits[4] = "Lemon";

// console.log(fruits.length);

// let arr = [
//   "Apple",
//   { name: "Orange" },
//   function () {
//     console.log("Lemon");
//   },
// ];

// console.log(arr[2]());

//Array Methods

//pop (removes last item)

// fruits.pop();
// fruits.push("Lemon");

// fruits.shift();
// fruits.unshift("Lemon");

// console.log(fruits);

// let fruits = ["Apple", "Orange", "Plum", "Lemon"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// for (let key in fruits) {
//   console.log(fruits[key]);
// }

// MultiDimensional arrays

// let matrix = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// console.log(matrix[1][1]);

// Concat
// Array.concat(arg1, arg2, arg3, arg4...)

let arr = [1, 2];

console.log(arr.concat([3, 4], [5, 6], 7));

function add() {
  console.log("Hello");
}
