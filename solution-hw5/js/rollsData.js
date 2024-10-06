//THIS IS FOR THE DIFF ROLL TYPES //FOR THE DISPLAY + UPDATING THEM
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "../assets/products/original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "../assets/products/apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "../assets/products/raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "../assets/products/walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "../assets/products/double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "../assets/products/strawberry-cinnamon-roll.jpg"
    }    
};

// Assuming the roll type is passed via URL parameters
const params = new URLSearchParams(window.location.search);
const chosenRoll = params.get('roll'); 

console.log(chosenRoll); //this is passed from product gallery to product detail (chosen roll)

const rollData = rolls[chosenRoll];
let basePrice = rollData.basePrice;

const headerElement = document.querySelector('#product-name'); //update header
headerElement.innerText = chosenRoll + " Cinnamon Roll";

const rollsImage = document.querySelector('#prod-detail-image'); //update image
rollsImage.src = rollData.imageFile;
rollsImage.alt = chosenRoll + " Cinnamon Roll"; //alt text

const priceElement = document.querySelector('#item-price-id'); //update price
priceElement.innerText = `$${rollData.basePrice.toFixed(2)}`;


const cart = []; //CART

//THIS IS FOR STORING AND THEN PUTTING INTO CART

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

document.getElementById('add-cart-button').addEventListener('click', function() { 
    const rollType = chosenRoll; //this is passed from product detail
    console.log("this is the rollType " + rollType); //debugging
    const rollGlazing = document.querySelector('select[id="glazing-options"]').value; //from select
    console.log("this is the rollGlazing " + rollGlazing); //debugging
    const packSize= document.querySelector('select[id="quantity-options"]').value; //from select
    console.log("this is the packSize " + packSize); //debugging

    addToCart(rollType, rollGlazing, packSize, basePrice); //call the function to add the roll to the cart
});


function addToCart(rollType, rollGlazing, packSize, basePrice) {
    const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice); //new roll
    cart.push(newRoll); //add roll to cart
    console.log(cart); //print cart
};

export const cart = [];