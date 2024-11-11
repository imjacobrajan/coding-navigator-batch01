//DOM , BOM

// getElementById
const titleElement = document.getElementById("page-title");
console.log(titleElement);

// getElementsByClassName
const familyContacts = document.getElementsByClassName("family");
console.log(familyContacts);

// getElementsByTagName

let allContacts = document.getElementsByTagName("p");
console.log(allContacts);

// querySelector

let workContact = document.querySelector(".work");
console.log(workContact);

// querySelectorAll
let workContacts = document.querySelectorAll(".work");
console.log(workContacts);

// innerHTML
// console.log(titleElement.innerHTML);
// titleElement.innerHTML = "Hi";
// console.log(titleElement.innerHTML);

function changeText() {
  titleElement.innerHTML = "<p>Good Evening</p>";
  console.log(titleElement.innerHTML);
}
