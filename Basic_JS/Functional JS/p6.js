const arr = [1, 2, 3, 4, 5];

// arr.forEach(function (element, index, arr) {
//   console.log("Element is " + element + " Index " + index + " Array " + arr);
// });

function loop(value, callback) {
  for (let i = 0; i < value.length; i++) {
    callback(value[i], i, arr);
  }
}

loop(arr, function (element, i, arr) {
  console.log("Element is =" + element + " Index " + i + " Array =" + arr);
});
