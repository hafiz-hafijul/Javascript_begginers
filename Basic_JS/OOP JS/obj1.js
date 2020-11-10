// This function is a class, person1 is a constructer also it's an objects

function Person(name, email) {
  this.name = name;
  this.email = email;
}

const person1 = new Person("Hafiz", "hafiz@gmail.com");
const person2 = new Person("Novel", "novel@gmail.com");
const person3 = new Person("Jony", "jony@gmail.com");

// console.log(person1);  // Like an object
// console.log(person1.name);

const people = [person1, person2, person3]


people.forEach( function (value) {
    console.log('Name of the person = ' + value.name);
});