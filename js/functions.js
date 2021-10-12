function showProducts() {
  console.log("List of products:");
  for (let i = 0; i < products.length; i++) {
    console.log("Product #" + (i + 1) + ": " + products[i].name);
  }
}

function getNumber(limit, description) {
  let value;
  do {
    value = parseInt(prompt(description + "(from 1 to " + limit + "):"));
  } while (!(value > 0 && value <= limit));

  return value;
}

function priceCalculation(amount, price) {
  const priceObj = {
    totalPrice: amount * price,
  };
  // Discount calculation
  if (priceObj.totalPrice > priceToGetDiscount) {
    priceObj.priceWithDiscount = priceObj.totalPrice * discountValueToCalculate;
  }
  return priceObj;
}

function showPrice(obj) {
  document.write("<p>The price of your order is: $" + obj.totalPrice + "</p>");
  if (obj.priceWithDiscount) {
    document.write("<p>You will get the discount " + discountValue + "%</p>");
    document.write("<p>The final price is: $" + obj.priceWithDiscount + "</p>");
  }
}
