// Contructor Objcet

// function Student(name, age, area) {
//   this.name = name;
//   this.age = age;
//   this.area = area;
// }

// let student1 = new Student("Hafiz", 22, "Rajshahi");
// let student2 = new Student("Novel", 22, "Kishoregonj");
// let student3 = new Student("Jony", 22, "Pabna");
// let student4 = new Student("Rafi", 22, "Natore");
// let student5 = new Student("Rashed", 22, "Bogra");

// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4);
// console.log(student5);

// Contructor Objcet inside function

function Student(name, age, area) {
  this.name = name;
  this.age = age;
  this.area = area;
  // this.display = function () {
  //   console.log(this.name);
  //   console.log(this.age);
  //   console.log(this.area);
  // };
}

let student1 = new Student("Hafiz", 22, "Rajshahi");
let student2 = new Student("Novel", 22, "Kishoregonj");
let student3 = new Student("Jony", 22, "Pabna");
let student4 = new Student("Rafi", 22, "Natore");
let student5 = new Student("Rashed", 22, "Bogra");

// student1.display();
// student2.display();
// student3.display();

console.log(student1);
console.log(student1.name);
console.log(student1.age);
console.log(student1.area);

console.log(student2);
