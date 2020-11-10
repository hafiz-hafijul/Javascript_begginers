// const arr = [1,2,3,4,5];
// arr.shift();
// console.log(arr);

// const arr = ['I', 'Love', 'Javascript', 'study']

// let name = arr.splice( 1,2);
// console.log(name);
// console.log(arr);

let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 1, 3, 4);

console.log( arr );