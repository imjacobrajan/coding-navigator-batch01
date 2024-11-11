// Reverse

// let arr = [5, 2, 3, 1, 7, 8];
// console.log(arr.reverse());

// Split and Join

// Split - String -> []
// Join -  Array -> String

// let names = "Kabila, Subramani, Karthick";
// let splitNames = names.split(",");
// console.log(splitNames);

// let str = splitNames.join("*");
// console.log(str);

// let email = "kabila@codingnavigator.com";
// let userName = email.split("@");
// console.log(userName[0]);

// Array Destructuring

// let arr = ["Kabila", "Subramani", "Kavin"];
// let user1 = arr[0];
// let user2 = arr[1];
// let user3 = arr[2];

// console.log(user1 + " " + user2 + " " + user3);

let arr = ["Kabila", "Subramani", "Kavin"];

let [user1, , user3, user4, user5] = [
  "Kabila",
  "Subramani",
  "Kavin",
  "Karthick",
];
console.log(user1 + " " + user4 + " " + user3);

let user = "Jacob";
let [firstName, lastName = "Rajan"] = user.split(" ");

console.log(user.split(" "));

console.log(firstName + " " + lastName);

//Object Destructuring

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let { title, height: h, width: w = 500 } = options;

// console.log(title + " " + w + " " + h);

// rest

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [kabila, kavin, ...jacob] = num;
console.log(jacob);

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

let { title, ...rest } = options;

console.log(rest);

// Javascript Object notation

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};

console.log(student.name);

let json = JSON.stringify(student);

console.log(json);

let object = JSON.parse(json);

console.log(object);
