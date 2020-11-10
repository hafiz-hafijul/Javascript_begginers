// This is Factory Pattern

// let createPattern = function (width, height) {
//   return {
//     newWidth: width,
//     newHeight: height,
//     draw: function () {
//       console.log("This is factory Pattern OOP");
//       console.log("This is provide width : " + this.newWidth);
//       console.log("This is provide height : " + this.newHeight);
//     },
//   };
// };

// let rect1 = createPattern(10, 20);
// rect1.draw();

// let rect2 = createPattern(100, 50);
// rect2.draw();

// ///////// This is Constructor Pattern //////////

let Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  this.draw = function () {
    console.log("This is Constructor function !!!");
    this.show();
  };
  this.show = function () {
    console.log("My width : " + width);
    console.log("My height : " + height);
  };
};

let rect1 = new Rectangle(10, 20);
rect1.draw();

let rect2 = new Rectangle(100, 50);
rect2.draw();
