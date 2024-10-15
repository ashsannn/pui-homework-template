//THIS IS FOR THE PRICE + QUANTITY DYNAMIC
let allGlazings = [
    {glazing: 'Original', glazingPrice: '0.00'},
    {glazing: 'Sugar Milk', glazingPrice: '0.00'},
    {glazing: 'Vanilla Milk', glazingPrice: '0.50'},
    {glazing: 'Double Chocolate', glazingPrice: '01.50',}
  ];
  
  let packSizes = [
    {packSize: '1', priceAdaptation: '1'},
    {packSize: '3', priceAdaptation: '3'},
    {packSize: '6', priceAdaptation: '5'},
    {packSize: '12', priceAdaptation: '10'}
  ];

  function populateGlazingSelect() {
    const selectElement = document.getElementById('glazing-options');

      for (let i = 0; i < allGlazings.length; i++) {
        const glazingOption = document.createElement('option');
        glazingOption.value = allGlazings[i].glazing; 
        glazingOption.text = `${allGlazings[i].glazing}`;  //displayed in dropdown

        glazingOption.setAttribute('glazingPrice', allGlazings[i].glazingPrice); //data attribute for price

        selectElement.appendChild(glazingOption);
      }

  }

  function populatePackSizeSelect() {
    const selectElement = document.getElementById('quantity-options');
    
      for (let i = 0; i < packSizes.length; i++) {
        const option = document.createElement('option');
        option.value = packSizes[i].priceAdaptation;
        option.text = packSizes[i].packSize; //displayed in dropdown

        option.setAttribute('packSize', packSizes[i].packSize); // Store packSize attribute
        option.setAttribute('priceAdaptation', packSizes[i].priceAdaptation); // Store priceAdaptation attribute
        selectElement.appendChild(option);

        selectElement.appendChild(option);
      }

  }

  let glazingPrice = 0; 
  let packSize = 1; 
  let priceAdaptation = 1;
  
  function updateTotal() {
      let totalPrice = (basePrice + glazingPrice) * packSize;
      let totalPriceElement = document.querySelector('#item-price-id');
      totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
      console.log('Updating total --> Total price:', `$${totalPrice.toFixed(2)}`, 'Base price: ', `$${basePrice.toFixed(2)}`, 'Glazing price: ', `$${glazingPrice.toFixed(2)}`, 'pack size: ', packSize)
  }
  
  function glazingChange(element) {
    const selectedOption = element.options[element.selectedIndex];  
    glazingPrice = parseFloat(selectedOption.getAttribute('glazingPrice')); 
    console.log('New glazing --> Glazing price change: ', glazingPrice); //for debugging
    updateTotal();
  }
  
  function quantityChange(element) {
      packSize = parseInt(element.value);
      console.log('New Q --> Quantity change:', packSize); //for debugging
      updateTotal();
  } 

  window.onload = function() {
    populateGlazingSelect();
    populatePackSizeSelect();
    updateTotal();
  };
