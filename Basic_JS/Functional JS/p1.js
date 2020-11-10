function base(b) {
  return function (n) {
    let result = 1;

    for (let i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}

const first = base(3);
const second = first(5);
second;
