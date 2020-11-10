const product = [
  {
    productName: "Wheat",
    productPrice: 30,
  },
  {
    productName: "Rice",
    productPrice: 30,
    productQuantity: 5,
    isAvailable: false,
  },
];

function showData(product) {
  const [product1, product2] = product;
  return ` Product Name : ${product2.productName} , Product Price ${product2.productPrice}, Product Quantity: ${product2.productQuantity},
    Product is avsilable : ${product2.isAvailable}`;

  return ` Product Name : ${product1.productName} , Product Price ${product1.productPrice}`;
}

console.log(showData(product));


