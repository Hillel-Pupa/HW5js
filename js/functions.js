import { products, productCategories } from "./products.js";

const priceToGetDiscount = 15000;
const discountValue = 5;
const discountValueToCalculate = 1 - discountValue / 100;

export function showProducts(categoryName) {
  const productsList = products[categoryName];
  document.body.append("List of products:");
  document.body.append(document.createElement("br"));
  for (let i = 0; i < productsList.length; i++) {
    document.body.append("Product #" + (i + 1) + ": " + productsList[i].name);
    document.body.append(document.createElement("br"));
  }
}

export function getNumber(limit, description) {
  let value;
  do {
    value = parseInt(prompt(description + "(from 1 to " + limit + "):"));
  } while (!(value > 0 && value <= limit) || false);

  return value;
}

export function priceCalculation(amount, price) {
  const priceObj = {
    totalPrice: amount * price,
  };
  if (priceObj.totalPrice > priceToGetDiscount) {
    priceObj.priceWithDiscount = priceObj.totalPrice * discountValueToCalculate;
  }
  return priceObj;
}

export function showPrice(obj) {
  document.body.append("The price of your order is: $" + obj.totalPrice);
  document.body.append(document.createElement("br"));
  if (obj.priceWithDiscount) {
    document.body.append("\nYou will get the discount " + discountValue + "%");
    document.body.append(document.createElement("br"));
    document.body.append("\nThe final price is: $" + obj.priceWithDiscount);
  }
}
