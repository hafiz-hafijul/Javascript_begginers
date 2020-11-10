function step() {
  return {
    name: "hafiz",
    age: 22,
    print: function () {
      console.log(this.name, this.age);
    },
  };
}

const vari = step();
vari.print();