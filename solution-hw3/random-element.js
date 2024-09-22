
//we are going to make this 
let allGlazings = [
    {
      glazing: 'Keep Original',
      price: '2.49',
    },
    {
      glazing: 'Sugar Milk',
      price: '2.49',
    },
    {
      glazing: 'Vanilla Milk',
      price: '3.00',
    },
    {
      glazing: 'Double Chocolate',
      price: '4.00',
    }
  ];
  


function displayPrice(price) {
    let glazingPriceElement = document.querySelector('#glazing-price-id');
  
    glazingPriceElement.innerText = glazing.price;
  }
  


function onSelectValueChange() {
    // In this function, `this` corresponds to the select
    // element. So `this.price` will contain the value of the
    // selected option as a string.
    //console.log('You selected ' + this.value);
  
    // We need to convert the string value to an integer
    let itemIndex = parseInt(this.value);
  
    // Now retrieve the object at the index specified by the select's value
    let priceToDisplay = allGlazings[itemIndex];
  
    // Update the UI
    displayPrice(priceToDisplay);
  }

  let selectElement = document.querySelector('#glazing-select');

  // Give it a listener for the 'change' event, which is a function that will run
// when the selected option changes. You could also do this by setting the
// onchange property of selectElement, e.g. selectElement.onchange = ...
selectElement.addEventListener('change', onSelectValueChange);

// Initially, display the first car
displayPrice(allGlazings[0]);

