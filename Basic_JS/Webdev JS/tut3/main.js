;const productInfoObj = {
  productName: "Wheat",
  productPrice: 30,
  productQuantity: 5,
  isAvailable: false,
}

function showData(product) {
  const { productName, productPrice, productQuantity, isAvailable } = product;

  return `Product Name : ${productName}, Product Price : ${productPrice}`;
}

console.log(showData(productInfoObj));
