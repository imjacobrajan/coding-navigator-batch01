// String Methods
// length
let name = "James";
console.log(name.length); //5

// Character
let x = "James"; //0 - length
console.log(x[4]); //S

//uppercase and lowercase
let a = "James";
console.log(a.toUpperCase()); //JAMES
console.log(a.toLowerCase()); //james

//indexOf
let b = "Hello world!";
console.log(b.indexOf("l")); //2
console.log(b.indexOf("World")); //-1
console.log(b.indexOf("world")); //6

//includes
let c = "Hello world!";
console.log(c.includes("hello")); //false
console.log(c.includes("Hello")); //true

// Startwith & endWith
let d = "Hello world!";
console.log(d.startsWith("Hel")); //true
console.log(d.endsWith("*")); //false

//Slice (start, end) (0, 5)
//Slice (start, end-1) (0, 5)
let e = "Hello world!";
console.log(e.slice(1, 4)); //ell
console.log(e.slice(2)); //llo world!
console.log(e.slice(-4, -1)); //rld
console.log(e.slice(6, 1)); //""
//First value should be lesser than the second value

// Make First Letter Capital

let f = "vijay"; //Vijay

console.log(f[0].toUpperCase() + f.slice(1));
