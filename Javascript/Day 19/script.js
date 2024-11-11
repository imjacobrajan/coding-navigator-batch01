// const imageEl = document.querySelector("img");

// console.log(imageEl.getAttribute("src"));

// imageEl.setAttribute("src", "../puppy1.jpg");

// console.log(imageEl.getAttribute("src"));

// imageEl.setAttribute("height", "100");

// imageEl.removeAttribute("height");

// console.log(imageEl.hasAttribute("height"));

//getAttribute
// setAttribute
// removeAttribute
//hasAttribute

// classList

// const foodEl = document.querySelector("p");

// console.log(foodEl.classList);

// // classList.add()

// foodEl.classList.add("rice");

// console.log(foodEl.classList);

// // classList.remove()

// foodEl.classList.remove("food");
// console.log(foodEl.classList);

// // classList.contains()

// console.log(foodEl.classList.contains("food"));

// // classList.replace()

// foodEl.classList.replace("rice", "animal");

// console.log(foodEl.classList);

// // classList.toggle()

// function toggle() {
//   foodEl.classList.toggle("animal");
//   console.log(foodEl.classList);
// }

// const boldEl = document.querySelector(".container");

// console.log(boldEl.lastChild);

function trigger() {
  console.log("Hello");
}

const myButton = document.querySelector("button");
const div = document.querySelector("div");

// myButton.onclick = trigger;

myButton.addEventListener("click", trigger);

//

const newParagraph = document.createElement("p");

console.log(newParagraph);

newParagraph.textContent = "This is a  new paragrph";
console.log(newParagraph);

div.appendChild(newParagraph);
