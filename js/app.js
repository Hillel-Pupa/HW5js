const priceToGetDiscount = 15000;
const discountValue = 5;
const discountValueToCalculate = 1 - discountValue / 100;

showProducts();
const productNumber = getNumber(
  products.length,
  "Please enter the product number"
);
const selectedProduct = products[productNumber - 1];
const productAmount = getNumber(
  selectedProduct.count,
  "Please enter the product amount"
);
const priceObj = priceCalculation(productAmount, selectedProduct.price);
showPrice(priceObj);
