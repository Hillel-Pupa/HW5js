"use strict";
import { products, productCategories } from "./products.js";

const priceToGetDiscount = 15000;
const discountValue = 5;
const discountValueToCalculate = 1 - discountValue / 100;

export function Item(name, count, price) {
  this.name = name;
  this.count = count;
  this.price = price;
}
function name(params) {}

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

export function priceCalculation(item, categoryName, amount) {
  const priceObj = {
    item: item,
    categoryName: categoryName,
    amount: amount,
    totalPrice: amount * item.price,
  };

  return priceObj;
}

export function showOrder(shoppingCart) {
  let orderTotal = 0;
  document.body.append("---------------");
  document.body.append(document.createElement("br"));

  for (let index = 0; index < shoppingCart.length; index++) {
    const priceObj = shoppingCart[index];
    orderTotal += priceObj.totalPrice;
    document.body.append(
      `Category is: ${priceObj.categoryName} - ${priceObj.item.name}, 
      amount: ${priceObj.amount}, $${priceObj.totalPrice} `
    );
    document.body.append(document.createElement("br"));
  }
  let priceWithDiscount = 0;
  if (orderTotal > priceToGetDiscount) {
    priceWithDiscount = orderTotal * discountValueToCalculate;
  }
  document.body.append("Your order total is $" + orderTotal);
  document.body.append(document.createElement("br"));
  if (priceWithDiscount) {
    document.body.append("\nYou will get the discount " + discountValue + "%");
    document.body.append(document.createElement("br"));
    document.body.append("\nThe final price is: $" + priceWithDiscount);
    document.body.append(document.createElement("br"));
  }
}
