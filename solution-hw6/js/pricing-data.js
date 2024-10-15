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

  let glazingPrice = 0; 
  let packSize = 1; 
  let priceAdaptation = 1;

  function populateGlazingSelect() {
    const selectElement = document.getElementById('glazing-options');

    for (let i = 0; i < allGlazings.length; i++) {
      const glazingOption = document.createElement('option');
      glazingOption.value = allGlazings[i].glazing; 
      glazingOption.text = allGlazings[i].glazing; //displayed in dropdown
      glazingOption.setAttribute('glazingPrice', allGlazings[i].glazingPrice); //price
      selectElement.appendChild(glazingOption);
    }

  }

  function populatePackSizeSelect() {
    const selectElement = document.getElementById('quantity-options');
    
    for (let i = 0; i < packSizes.length; i++) {
      const option = document.createElement('option');
      option.value = packSizes[i].packSize; //set value packSize
      option.text = packSizes[i].packSize; //displayed in dropdown

      option.setAttribute('priceAdaptation', packSizes[i].priceAdaptation); //priceAdaptation attribute
      selectElement.appendChild(option);
    }

  }
  
  function updateTotal() {
      let totalPrice = (basePrice + glazingPrice) * priceAdaptation;
      let totalPriceElement = document.querySelector('#item-price-id');
      totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
      console.log('Updating total --> Total price:', `$${totalPrice.toFixed(2)}`, 'Base price: ', `$${basePrice.toFixed(2)}`, 'Glazing price: ', `$${glazingPrice.toFixed(2)}`, 'pack size: ', packSize)
  }
  
  function quantityChange(element) {
    const selectedOption = element.options[element.selectedIndex]; //get the selected option
    packSize = parseInt(selectedOption.value, 10); //packsize
    priceAdaptation = parseInt(selectedOption.getAttribute('priceAdaptation'), 10); //price adaptation
    console.log('New Q --> Quantity change:', packSize, 'Price adaptation:', priceAdaptation); // for debugging
    updateTotal();
} 
  
  window.onload = function() {
    populateGlazingSelect();
    populatePackSizeSelect();
    updateTotal();
  };
