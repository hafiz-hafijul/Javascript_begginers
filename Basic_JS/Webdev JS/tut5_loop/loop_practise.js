const product = [
  {
    productName: "Banana",
    poductPrice: 30,
    productQuantiy: 6,
    isAvailabe: true,
  },

  {
    productName: "Orange",
    poductPrice: 30,
    productQuantiy: 6,
    isAvailabe: true,
  },
];
function showProduct(details) {
  for (i = 0; i < details.length; i++) {
    console.log(product[i]);
  }
}
console.log(showProduct(product));
