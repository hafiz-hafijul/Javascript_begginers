let sum;

function show(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  for (i in numbers) {
    sum += i;
    console.log(sum);
  }
}
show(10, 20, 1, 2, 3, 4);
