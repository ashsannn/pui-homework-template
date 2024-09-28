// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);

console.log(params);

// Finally, we can access the parameter we want using the "get" method:
const chosenRoll = params.get('rolls')

//divider......

const rollsData = rolls[chosenRoll];

    // Update the header text
    const headerElement = document.querySelector('#product-name');
    headerElement.innerText = chosenRoll;

    // Update the image using the stored image path in the rolls object
    const rollsImage = document.querySelector('#prod-detail-img');
    rollsImage.src = rollData.imageFile;

    // Optionally, you can also display the price on the page
    const priceElement = document.querySelector('#item-price-id');
    priceElement.innerText = `$${rollData.basePrice.toFixed(2)}`;


/*
  const cart = [];
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const rollType = params.get('roll');    
*/