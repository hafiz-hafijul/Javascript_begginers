const product1 = {
  productName: "Wheat",
  productPrice: 30,
};

const product2 = {
  productName: "Goods",
  productPrice: 30,
};

const product3 = {
  productName: "Rice",
  productPrice: 30,
};

function showProductInfo(first) {
  return `Product Name : ${first.productName}, Product Price : ${first.productPrice}`;
}

console.log(showProductInfo(product1));
const corps = showProductInfo(product2);
const far = showProductInfo(product3);

//console.log(art);
console.log(corps);
console.log(far);
