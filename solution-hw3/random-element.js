
let allGlazings = [
    {
      glazing: 'Original',
      glazePrice: '0.00',
    },
    {
      glazing: 'Sugar Milk',
      glazePrice: '0.00',
    },
    {
      glazing: 'Vanilla Milk',
      glazePrice: '0.50',
    },
    {
      glazing: 'Double Chocolate',
      glazePrice: '01.50',
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

      for (let i = 0; i < allGlazings.length; i++) {
        const option = document.createElement('option');
        option.value = allGlazings[i].glazePrice; 
        option.text = `${allGlazings[i].glazing}`;  //displayed in dropdown
        selectElement.appendChild(option);
      }

  }

  function populatePackSizeSelect() {
    const selectElement = document.getElementById('quantity-options');
    
      for (let i = 0; i < packSizes.length; i++) {
        const option = document.createElement('option');
        option.value = packSizes[i].priceAdaptation;
        option.text = packSizes[i].packSize; //displayed in dropdown
        selectElement.appendChild(option);
      }

  }

  const basePrice = 2.49;
  let glazingPrice = 0; 
  let packSize = 1; 
  let priceAdaptation = 1;
  
  function updateTotal() {
      let totalPrice = (basePrice + glazingPrice) * packSize;
      let totalPriceElement = document.querySelector('#item-price-id');
      totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
      console.log('total price:', totalPrice, 'base price', basePrice, 'glaze price', glazingPrice, 'pack size', packSize)
  }
  
  function glazingChange(element) {
      glazingPrice = parseFloat(element.value); 
      console.log('glazing price change:', glazingPrice); //for debugging
      updateTotal();
  }
  
  function quantityChange(element) {
      packSize = parseInt(element.value);
      console.log('quantity change:', packSize); //for debugging
      updateTotal();
  } 

  window.onload = function() {
    populateGlazingSelect();
    populatePackSizeSelect();
    updateTotal();
  };
  