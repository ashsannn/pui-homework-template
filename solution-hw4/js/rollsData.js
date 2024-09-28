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
const rollData = rolls[chosenRoll];

// Update the header text with the chosen roll name
const headerElement = document.querySelector('#product-name');
headerElement.innerText = chosenRoll;

// Update the image using the stored image path in the rolls object
const rollsImage = document.querySelector('#prod-detail-image');
rollsImage.src = rollData.imageFile;
rollsImage.alt = chosenRoll + " Cinnamon Roll";

// Update the price on the page
const priceElement = document.querySelector('#item-price-id');
priceElement.innerText = `$${rollData.basePrice.toFixed(2)}`;