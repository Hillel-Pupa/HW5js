import {
  showProducts,
  showPrice,
  getNumber,
  priceCalculation,
} from "./functions.js";
import { products, productCategories } from "./products.js";

const selectedCategoryIndex = getNumber(
  productCategories.length,
  `please select category: \n${productCategories}`
);
let categoryName = productCategories[selectedCategoryIndex - 1];
document.body.append("List of categories: " + productCategories);
document.body.append(document.createElement("br"));
document.body.append("Your chosen category is: " + categoryName);
document.body.append(document.createElement("br"));
showProducts(categoryName);
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
const priceObj = priceCalculation(productAmount, selectedProduct.price);
showPrice(priceObj);
