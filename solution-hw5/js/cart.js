const cart = []; //CART

/* ------------------------------ CART FUNCTIONALITY ----------------------------*/

function addRollToCart(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice); //new roll
    cart.push(roll); //add roll to cart
    console.log(cart); //print cart
    return roll;
};

const rollOne = addRollToCart(
    'Original',
    'Sugar Milk',
    '1'
);

const rollTwo = addRollToCart(
    'walnut',
    'Vanilla Milk',
    '12'
);

const rollThree = addRollToCart(
    'Raisin',
    'Sugar Milk',
    '3'
);

const rollFour = addRollToCart(
    'Apple',
    'Original',
    '3'
);

for (const roll of cart) {
    console.log(roll);
    createElement(roll);
} //THIS CREATES IT IN DOM SO THAT WE CAN ADD IN HTML

function createElement(roll){
    console.log("creating a roll")
    const template = document.querySelector('#roll-template'); 
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.roll');

    console.log(roll.element);
}