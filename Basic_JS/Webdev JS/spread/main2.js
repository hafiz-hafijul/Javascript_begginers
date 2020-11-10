const product = {
  name: "Banana",
  price: 30,
  quantity: 4,
};

const updateProduct = {
  ...product,
  update: "value",
};

console.log(updateProduct);

// spread is used in Object and Array
