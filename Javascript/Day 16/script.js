const dobboxEl = document.getElementById("dob");
const btnEl = document.getElementById("btn");
const outputEl = document.getElementById("output");

function calculateAge() {
  const birthday = dobboxEl.value;
  if (birthday === "") {
    alert("Please select your birthday");
  } else {
    const currentDate = new Date();
    const birthdayDate = new Date(birthday);
    let year = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();
    console.log(month);

    outputEl.innerText = `Your are ${year} year ${month} months old`;
  }
}
