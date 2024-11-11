// Logical operators

//  ||, &&, !

// || (OR)

/*  true || true - true
 false || true - true
true || false - true
false || false - false */

// if (1 || 0) {
//   console.log("truthy");
// }

// let hour = 9;

// if (hour > 18 || hour < 10) {
//   console.log("The office is closed");
// }

// console.log(1 || 0);
// console.log(true || "Hello");
// console.log(null || 1);
// console.log(null || "0" || 1);

// let currentUser = null;
// let defaultUser = "James";
// let name = null || "James" || "No-Name";
// console.log(name); //

// let x;

// true || (x = 5);

// console.log(x);

// && (AND Operator)

/* true && true - true
true && false - false
false && true - false 
false && false - false */

// let hour = 12;
// let minute = 30;
// if (hour == 12 && minute == 30) {
//   console.log("The time is 12:30");
// }

// console.log(1 && undefined);

// 1st truthy value - return second value
//1st falsy value - return first value

// console.log(null && 5);

// console.log(1 && 2 && null && 3);

// console.log(null || (2 && 3) || 4);

// !(NOT)

// let result = "Hello";

// console.log(true);

{
  value > 0 && <div>Helllo</div>;
}
