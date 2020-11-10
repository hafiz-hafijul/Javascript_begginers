const arr = [1, 2, 3, 4, 5, 6];

// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     newArr.push(arr[i]);
//   }
// }
// newArr;

// const value = arr.filter(function (element) {
//   return element % 2 == 1;
// });

// value;

function myFilter(element, callback) {
  const newArr = [];

  for (let i = 0; i < element.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const myArr = myFilter(arr, function (most) {
    return most % 2 == 0
});
myArr;