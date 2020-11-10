// let num = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < num.length; i++) {
//   const element = num[i];
//   sum = sum + element;
//   console.log(sum);
// }

// console.log(sum);

let num = new Array();
// document.write(num);

for (let i = 0; i < 5; i++) {
  num[i] = parseFloat(prompt("Enter Your Number : "));
  // document.write(y);
}

let sum = 0;

for (let i = 0; i < 5; i++) {
  let element = num[i];
  sum = sum + element;
//   document.write(element);
}

document.write(sum);
