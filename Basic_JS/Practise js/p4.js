const person = {
  name: " Hafiz",
  age: 22,
  hair_color: " Black",
};

console.log(person);

person.nationality = " Bangladeshi";

// console.log(person);

for (let details in person) {
  console.log(details);
  console.log(person[details]);
  //   details += person[details];
  //   console.log(details);
}

delete person.age;
console.log(person);