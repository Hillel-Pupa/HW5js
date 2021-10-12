import {
  showProducts,
  showPrice,
  getNumber,
  priceCalculation,
  selectCategory,
} from "./functions.js";
import { products } from "./products.js";

const selectedCategory = selectCategory();
console.log(selectedCategory);
showProducts(selectedCategory);
const productNumber = getNumber(
  products[selectedCategory].length,
  "Please enter the product number"
);
const selectedProduct = products[selectedCategory][productNumber - 1];
const productAmount = getNumber(
  selectedProduct.count,
  "Please enter the product amount"
);
const priceObj = priceCalculation(productAmount, selectedProduct.price);
showPrice(priceObj);
