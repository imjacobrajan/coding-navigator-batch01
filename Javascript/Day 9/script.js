let student = {
  name: "James",
  age: 13,
  isMajor: false,
};

let studentCopy = student;

studentCopy.age = 56;
studentCopy.isMajor = true;

console.log(student);
console.log(studentCopy);

console.log(student === studentCopy);

const name = {};

const age = {};

console.log(name === age);

student.ishappy = true;

delete student.age;
