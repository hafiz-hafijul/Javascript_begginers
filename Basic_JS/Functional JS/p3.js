function caller() {
  return function (name) {
    return "Caller call you " + name;
  };
}
const x = caller();
const y = x("Hafiz");
y;
