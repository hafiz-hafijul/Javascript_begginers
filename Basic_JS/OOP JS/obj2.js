let rect = {
  width: 100,
  height: 50,
  draw: function () {
    console.log("This is rectangle function !!!");
    console.log("This funtion Width is : " + this.width);
    console.log("This funtion Height is : " + this.height);
  },
};

rect.draw();
