const product = [
  {
    productName: "Wheat",
    productPrice: 30,
  },

  {
    productName: "Goods",
    productPrice: 50,
  },

  {
    productName: "Rice",
    productPrice: 40,
  },
];

function showProduct(products) {
  let singleproduct = [];

//   for (let single of products) {
//     console.log(single);
//     singleproduct += `
//         Product Name :   ${single.productName} 
//         Product Price :   ${single.productPrice}  
//         `;
//   }
    
    for (let single in products) {
        console.log(single);
        singleproduct += `
        Product Name :   ${product[single]} 
        Product Price :   ${product[single]}  
        `;
    }
  console.log(singleproduct);
}

showProduct(product);

console.log(singleproduct);
