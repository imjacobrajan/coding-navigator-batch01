function showMessage(name, message = "How are you") {
  //Parameter

  //   if (message === undefined) {
  //     message = "How are you";
  //   }

  console.log(`Hi ${name}, ${message} `);
}

showMessage("James"); // argument

// function addTwoNo(a, b) {
//   return a + b;
//   console.log(first);
// }

// let sum = addTwoNo(5, 3);

// console.log(sum);

function AJuice(a) {
  return a;
}

function ABJuice(a, b) {
  return a + b;
}

function ABCJuice(a, b) {
  return a + b;
}

let AppleJuice = AJuice("Apple");

let AppleBeetrootJuice = ABJuice(AppleJuice, "Beetroot");

let AppleBeetrootCarrotJuice = ABCJuice(AppleBeetrootJuice, "Carrot");

console.log(AppleBeetrootCarrotJuice);
