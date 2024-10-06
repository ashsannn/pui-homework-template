import { cart } from './rollsData.js';

const originalRoll = new Roll('Original', 'Sugar Milk', 1, );
const walnutRoll = new Roll('Walnut', 'Vanilla Milk', 12, 39.90);
const raisinRoll = new Roll('Raisin', 'Sugar Milk', 3, 8.97);
const appleRoll = new Roll('Apple', 'Original', 3, 10.47);

cart.push(originalRoll);
cart.push(walnutRoll);
cart.push(raisinRoll);
cart.push(appleRoll);

console.log(cart);
