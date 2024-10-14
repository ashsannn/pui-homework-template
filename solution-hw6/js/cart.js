
const cart = []; //CART

/* ------------------------------ ROLL TYPES INFO  ----------------------------*/
const rolls = {
    "Original": { "basePrice": 2.49, "imageFile": "../assets/products/original-cinnamon-roll.jpg"},
    "Apple": { "basePrice": 3.49, "imageFile": "../assets/products/apple-cinnamon-roll.jpg"},
    "Raisin": { "basePrice": 2.99, "imageFile": "../assets/products/raisin-cinnamon-roll.jpg"},
    "Walnut": { "basePrice": 3.49, "imageFile": "../assets/products/walnut-cinnamon-roll.jpg"},
    "Double-Chocolate": {"basePrice": 3.99, "imageFile": "../assets/products/double-chocolate-cinnamon-roll.jpg" },
    "Strawberry": { "basePrice": 3.99, "imageFile": "../assets/products/strawberry-cinnamon-roll.jpg"}    
};

/* ------------------------------ CALCULATION CODE ----------------------------*/
let allGlazings = [
    { glazing: 'Original', glazingPrice: '0.00'},
    { glazing: 'Sugar Milk', glazingPrice: '0.00'},
    { glazing: 'Vanilla Milk', glazingPrice: '0.50'},
    { glazing: 'Double Chocolate', glazingPrice: '1.50'}
  ];
  
  let packSizes = [
    { packSize: '1', priceAdaptation: '1'},
    { packSize: '3', priceAdaptation: '3'},
    { packSize: '6', priceAdaptation: '5'},
    { packSize: '12', priceAdaptation: '10'}
  ];

/* ------------------------------ CART FUNCTIONALITY ----------------------------*/
function addRollToCart(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(roll);
    console.log("Added to cart" + roll); //test
    createElement(roll);
    updateCartTotal(); 
    return roll;
}

/* ------------------------------ CART INITIALIZATION ----------------------------*/
addRollToCart('Original','Sugar Milk', '1', 2.49);

/* ------------------------------ DOM MANIPULATION ----------------------------*/
function createElement(roll){
    console.log("creating a roll")
    const template = document.querySelector('#roll-template'); 
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.roll');

    console.log(roll.element);

    const cartListElement = document.querySelector('.all-cart-items-container');
    cartListElement.prepend(roll.element); 
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
    const totalPriceElement = document.querySelector('#total-amount');
    totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
    console.log('Total price:', totalPrice);
}

/* ------------------------------ DELETE FUNCTIONALITY ----------------------------*/
function deleteRoll(roll) {
    roll.element.remove(); //Remove from DOM
    
    const index = cart.indexOf(roll);
    if (index > -1) {
        cart.splice(index, 1);
    }

    updateCartTotal();
}
updateCartTotal();

/* ------------------------------ LOCAL STORAGE FUNCTIONALITY ----------------------------*/
function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cart);
    localStorage.setItem('storedCart', cartArrayString);
    console.log('Cart saved to localStorage:', cartArrayString);
}

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCart');
    if (cartArrayString) {
        const cartArray = JSON.parse(cartArrayString);
        for (const rollData of cartArray) {
            const roll = addRollToCart(rollData.type, rollData.glazing, rollData.size, rollData.basePrice);  
            createElement(roll); // Update the DOM
        }
        updateCartTotal(); // Update total price
    }
}

/* ------------------------------ INITIALIZATION ----------------------------*/
if (localStorage.getItem('storedCart') != null) {
    retrieveFromLocalStorage();
}