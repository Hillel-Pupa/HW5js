"use strict";
import {
  showProducts,
  showOrder,
  getNumber,
  priceCalculation,
} from "./functions.js";
import { products, productCategories } from "./products.js";
let shoppingCart = [];
function order() {
  const selectedCategoryIndex = getNumber(
    productCategories.length,
    `please select category: \n${productCategories}`
  );
  let categoryName = productCategories[selectedCategoryIndex - 1];
  // document.body.append("Your chosen category is: " + categoryName);
  // document.body.append(document.createElement("br"));
  // showProducts(categoryName);
  const productNumber = getNumber(
    products[categoryName].length,
    `Please enter the product number: \n${products[categoryName].map(function (
      item
    ) {
      return item.name;
    })}`
  );
  const selectedProduct = products[categoryName][productNumber - 1];
  const productAmount = getNumber(
    selectedProduct.count,
    "Please enter the product amount"
  );
  const priceObj = priceCalculation(
    selectedProduct,
    categoryName,
    productAmount
  );

  shoppingCart.push(priceObj);
}
do {
  order();
} while (confirm("do you wanna order more?"));
showOrder(shoppingCart);
