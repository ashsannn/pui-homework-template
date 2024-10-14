//THIS IS FOR THE DIFF ROLL TYPES //FOR THE DISPLAY + UPDATING THEM
const rolls = {
    "Original": {"basePrice": 2.49, "imageFile": "../assets/products/original-cinnamon-roll.jpg"},
    "Apple": { "basePrice": 3.49, "imageFile": "../assets/products/apple-cinnamon-roll.jpg"},
    "Raisin": { "basePrice": 2.99, "imageFile": "../assets/products/raisin-cinnamon-roll.jpg"},
    "Walnut": { "basePrice": 3.49, "imageFile": "../assets/products/walnut-cinnamon-roll.jpg"},
    "Double-Chocolate": { "basePrice": 3.99, "imageFile": "../assets/products/double-chocolate-cinnamon-roll.jpg"},
    "Strawberry": { "basePrice": 3.99, "imageFile": "../assets/products/strawberry-cinnamon-roll.jpg"}    
};

/*-----------------------------PASSING ROLL TYPE---------------------------*/
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

/* ------------------------------ CART FUNCTIONALITY ----------------------------*/
let cart = [];
if (localStorage.getItem('storedCart') != null) {
    retrieveFromLocalStorage();
} else {
    cart = [];
}

function addRollToCart(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice); //new roll
    cart.push(roll); //add roll to cart
    saveToLocalStorage(); // Save the updated cart to localStorage
    console.log(cart); //print cart
    return roll;
};

document.getElementById('add-cart-button').addEventListener('click', function() { 
    const rollType = chosenRoll; //this is passed from product detail
    console.log("this is the rollType " + rollType); //debugging
    const rollGlazing = document.querySelector('select[id="glazing-options"]').value; //from select
    console.log("this is the rollGlazing " + rollGlazing); //debugging
    const packSize= document.querySelector('select[id="quantity-options"]').value; //from select
    console.log("this is the packSize " + packSize); //debugging

    addRollToCart(rollType, rollGlazing, packSize, basePrice); //call the function to add the roll to the cart
})

/* ------------------------------ DOM MANIPULATION ----------------------------*/
function createElement(roll){
    console.log("creating a roll")

    cart.prepend(roll.element); 
    updateElement(roll);
}

function updateElement(roll) {
    const cartImageElement = roll.element.querySelector('.cart-thumbnail');
    const cartTitleElement = roll.element.querySelector('.cart-roll-name');

    cartImageElement.src = rolls[roll.type].imageFile; //image
    cartImageElement.alt = `${roll.type} Cinnamon Roll`; //alt text

    cartTitleElement.innerText = `${roll.type} Cinnamon Roll`; //roll name

    roll.element.querySelector('#glazing').innerText = roll.glazing; //glazing 
    roll.element.querySelector('#pack-size-cart').innerText = roll.size; //pack size

    const priceElement = roll.element.querySelector('.price-cart'); //roll price
    priceElement.innerText = `$${roll.calculateRollTotal().toFixed(2)}`;

    const btnDelete = roll.element.querySelector('.cart-remove'); //remove
    btnDelete.addEventListener('click', () => { deleteRoll(roll); });
}

/* ------------------------------ TOTAL CART PRICE CALCULATION ----------------------------*/
function updateCartTotal() {
    let totalPrice = 0;
    for (const roll of cart) {
        totalPrice += roll.calculateRollTotal();
    }
}
/* ------------------------------ SAVE FUNCTIONALITY ----------------------------*/

function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cart); // convert cart array to a JSON string
    localStorage.setItem('storedCart', cartArrayString); //store in localStorage
    console.log('Cart saved to localStorage:', cartArrayString); //print cart
}

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCart'); //get cart from localStorage
    if (cartArrayString) {
        const cartArray = JSON.parse(cartArrayString); //parse
        cart = cartArray; //update cart variable

        for (const rollData of cartArray) { //loop through the saved cart items
            createElement(rollData); //update DOM for each item
        }
        updateCartTotal(); // update the cart total (assuming updateCartTotal exists)
    }
}

if (localStorage.getItem('storedCart') != null) { // Check if there's a saved cart in localStorage and retrieve it
    retrieveFromLocalStorage();
} 