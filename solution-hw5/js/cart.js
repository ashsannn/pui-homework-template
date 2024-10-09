/*-------------------------------------ROLL CLASS--------------------------------*/

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element = null;
    }

}

/* ------------------------------ CART FUNCTIONALITY ----------------------------*/

const cart = []; //CART

function addRollToCart(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice); //new roll
    cart.push(roll); //add roll to cart
    console.log(cart); //print cart
    return roll;
};

/* ------------------------------ CART FUNCTIONALITY ----------------------------*/

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

    const cartListElement = document.querySelector('.all-cart-items-container');
    cartListElement.prepend(roll.element); 
    updateElement(roll);
}


function updateElement(roll) {
    const cartImageElement = roll.element.querySelector('.cart-thumbnail');
	const cartTitleElement = roll.element.querySelector('.cart-description');

    //BELOW, UPDATE DOM ELEMENTS USING ROLL PROPERTIES
    cartImageElement.src = roll.noteImageURL;
    cartTitleElement.innerText = roll.noteTitle;
    cartBodyElement.innerText = roll.noteBody;

    //this gets a reference to the trash can item
    const btnDelete = notecard.element.querySelector('.icon-delete');
   //this syntax says, when the trash can button clicked, run the 
   //instructions in curly brackets
    btnDelete.addEventListener('click', () => {deleteNote(notecard);});
}


//TO DELETE NOTECARD !! 
function deleteNote(notecard) {
    notecard.element.remove(); //Remove from DOM
    notecardSet.delete(notecard); //We have to delete the data as well
    //from the set - not just graphical representation
}