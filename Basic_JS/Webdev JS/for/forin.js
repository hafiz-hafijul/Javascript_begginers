const product = {
  name: "Banana",
  price: 22,
  quality: true,
};

for (let details in product) {
  console.log(product[details]); //print object value
  console.log(details); //print object key
}

// Specially for loop in use in Object not Array


