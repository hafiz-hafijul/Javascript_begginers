class FirstClass {
  hello(a, b) {
    this.num1 = a;
    this.num2 = b;
    console.log("Hello World");
    console.log(this.num1 + this.num2);
  }
}

let obj = new FirstClass();
obj.hello(10, 20);
