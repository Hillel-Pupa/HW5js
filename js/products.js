import { accesories } from "./categories/accesories.js";
import { guns } from "./categories/guns.js";
import { phones } from "./categories/phones.js";

export const products = { phones, guns, accesories };
export let productCategories = Object.keys(products);
