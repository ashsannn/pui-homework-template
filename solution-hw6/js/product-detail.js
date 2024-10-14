/*-------------------------------------DATA STRUCTURES--------------------------------*/
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

console.log("This is the roll currently chosen:", chosenRoll); //this is passed from product gallery to product detail (chosen roll)

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

function addRollToCart(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice); //new roll
    cart.push(roll); //add roll to cart
    console.log("Added to cart: ", roll); //debugging
    saveToLocalStorage(); // Save the updated cart to localStorage
    console.log("This is the cart now: ", cart); //print cart
    updateCartTotal();
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


/* ------------------------------ TOTAL CART PRICE CALCULATION ----------------------------*/
function updateCartTotal() {
    let totalPrice = 0;
    for (const roll of cart) {
        totalPrice += roll.calculateRollTotal();
    }
    console.log("HELP IM BROKEN")
}
/* ------------------------------ SAVE FUNCTIONALITY ----------------------------*/

function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cart); // convert cart array to a JSON string
    localStorage.setItem('storedCart', cartArrayString); //store in localStorage
    console.log('Cart saved to localStorage:', cartArrayString); //print cart
}

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCart'); // Get cart from localStorage

    if (!cartArrayString) {
        console.warn('No stored cart found in localStorage.'); //debugging
        return;
    }

    let cartArray;
    try {
        cartArray = JSON.parse(cartArrayString); //parse
    } catch (error) {
        console.error('Error parsing stored cart data:', error); //debug
        return;
    }
}

if (localStorage.getItem('storedCart') != null) {
    retrieveFromLocalStorage();
} else {
    cart = [];
}

retrieveFromLocalStorage();
