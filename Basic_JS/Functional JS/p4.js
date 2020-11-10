const sta = {
  name: "Hafiz",
  age: 15,
  email: "hafiz@gmail.com",
};

function outter(it, para) {
  console.log("Mr. " + it.name + " (" + it.age + ") ");
  if (it.age >= 18) {
    para(it.email);
  } else {
    console.log("You are teenage !!!");
  }
}

function abc(pro) {
  console.log("You are mature !!!");
}

outter(sta, abc);

// const me = {
//   name: "Hafiz",
//   age: 22,
//   email: "hafiz@gmail.com",
// };

// function printMySelf(person, callback) {
//   console.log("Person " + person.name + " (" + person.age + ") ");
//   if (person.age >= 18) {
//     callback(person.email);
//   } else {
//     console.log("You are a teenage!!!");
//   }
// }

// printMySelf(me, function (email) {
//   console.log("Email sent to " + email);
// });
