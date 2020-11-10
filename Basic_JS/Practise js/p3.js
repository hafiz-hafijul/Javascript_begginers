let names = "Bilbo, Gandalf, Nazgul";

let arr = names.split(", ").reverse();

for (let name of arr) {
  console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
}


let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.reverse();

console.log(arr2);

const str = 'Name';
let str1 = str.split('');
console.log(str1.reverse());