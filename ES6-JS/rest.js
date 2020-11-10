function show(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  let sum = 0;
  for (let i of numbers) {
    sum = sum + i;
  }
  console.log(sum);
}
show(10, 20, 1, 2, 3, 4,6);
