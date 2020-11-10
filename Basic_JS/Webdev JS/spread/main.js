let str = ["I", "Love", "Bangladesh"];
let newStr = str.slice(1, 3);
console.log(newStr);



// const newArr = ["We", newStr];
// console.log(newArr);

const newArr = ["We", ...newStr]; // here ... is spread and it's ES6 rules
console.log(newArr);
