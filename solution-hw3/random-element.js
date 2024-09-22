
//we are going to make this 
let allGlazings = [
    {
      glazing: 'Original',
      glazePrice: '2.49',
    },
    {
      glazing: 'Sugar Milk',
      glazePrice: '2.49',
    },
    {
      glazing: 'Vanilla Milk',
      glazePrice: '3.00',
    },
    {
      glazing: 'Double Chocolate',
      glazePrice: '4.00',
    }
  ];
  
  let packSizes = [
    {
      packSize: '1',
      priceAdaptation: '1',
    },
    {
      packSize: '3',
      priceAdaptation: '3',
    },
    {
      packSize: '6',
      priceAdaptation: '5',
    },
    {
      packSize: '12',
      priceAdaptation: '10',
    }
  ];


  function populateGlazingSelect() {
    const selectElement = document.getElementById('glazing-options');

      // Use a traditional for loop to iterate over the allGlazings array
      for (let i = 0; i < allGlazings.length; i++) {
        const option = document.createElement('option');
        option.value = allGlazings[i].glazing;  // The value attribute
        option.text = `${allGlazings[i].glazing} - $${allGlazings[i].glazePrice}`;  // Display text
        selectElement.appendChild(option);
      }

  }

  function populatePackSizeSelect() {
    const selectElement = document.getElementById('quantity-options');
    
      // Use a traditional for loop to iterate over the allGlazings array
      for (let i = 0; i < packSizes.length; i++) {
        const option = document.createElement('option');
        option.value = packSizes[i].packSize;  // The value attribute
        option.text = packSizes[i].packSize;  // Display text
        selectElement.appendChild(option);
      }

  }

  window.onload = function() {
    populateGlazingSelect();
    populatePackSizeSelect();
  };


  /*
function calculateTotal(item){
    const basePrice = 2.49;
    let totalPrice = (basePrice + glazingPrice) * packPrice;
}

function glazingChange(element) {
    //get value of selected glazing option
    const priceChange = element.value;
    
    //code to change the value
   
}

function displayPrice(item) {
    let itemPriceElement = document.querySelector('#item-price-id');
  
    itemPriceElement.innerText = item.priceTotal;
  }


/*
function onSelectValueChange() {
    // In this function, `this` corresponds to the select
    // element. So `this.price` will contain the value of the
    // selected option as a string.
  
    // We need to convert the string value to an integer
    let itemIndex = parseInt(this.value);
  
    // Now retrieve the object at the index specified by the select's value
    //
  
    // Update the UI
    displayPrice(totalToDisplay);
  }
*/

/*
// When the page loads, find the select element.
let selectElement = document.querySelector('#glazing-options');

  // Give it a listener for the 'change' event, which is a function that will run
// when the selected option changes. You could also do this by setting the
// onchange property of selectElement, e.g. selectElement.onchange = ...
selectElement.addEventListener('change', onSelectValueChange);

// Initially, display the first car
displayPrice(allGlazings[0]);
*/