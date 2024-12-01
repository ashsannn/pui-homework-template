document.getElementById('edit-button').addEventListener('click', function () {
        // Get the element with id 'edit-text' and log it
        const editText = document.getElementById('edit-text');
        console.log('Before:', editText.innerText); // Log the current text
    
        // Toggle the text between 'edit recipe' and 'editing ON'
        if (editText) {
            if (editText.innerText === 'edit recipe') {
                editText.innerText = 'editing ON';
            } else {
                editText.innerText = 'edit recipe';
            }
        }
    
    // Get the specific elements by their IDs
    const containerServ = document.getElementById('container-serv');
    const containerCal = document.getElementById('container-cal');
    const servingNum = document.getElementById('serving-num');
    const servingCals = document.getElementById('serving-cals');

    // Toggle the highlight class for both elements
    containerServ.classList.toggle('highlight-green');
    containerCal.classList.toggle('highlight-green');
    servingNum.classList.toggle('edit-box');
    servingCals.classList.toggle('edit-box');

    // Toggle the highlight border for container-recipe-ingredients
    const contIng = document.getElementById('container-recipe-ingredients');
    contIng.classList.toggle('highlight-border');

    // Select all list items in the recipe-ingredient list
    const ings = document.querySelectorAll('.recipe-list-container .recipe-ingredient-list li'); 
    
    // Loop through each ingredient item
    ings.forEach(item => {
        // Toggle the highlight class on each item
        item.classList.toggle('ing-highlight');

        // Handle the replace icon
        if (item.classList.contains('ing-highlight')) {
            // Add the replace icon if the highlight class is applied and icon doesn't exist
            if (!item.querySelector('.replace-icon')) {
                const icon = document.createElement('img');
                icon.src = 'images/replace-icon.png'; // Replace with your icon's path
                icon.alt = 'replace icon';
                icon.className = 'replace-icon';
                item.appendChild(icon);
            }
        } else {
            // Remove the replace icon if the highlight class is removed
            const icon = item.querySelector('.replace-icon');
            if (icon) {
                item.removeChild(icon);
            }
        }

        // Handle the delete icon
        if (!item.querySelector('.delete-icon')) {
            const deleteIcon = document.createElement('img');
            deleteIcon.src = 'images/delete-icon.svg'; // Replace with your icon's path
            deleteIcon.alt = 'delete icon';
            deleteIcon.className = 'delete-icon';
            item.appendChild(deleteIcon);
        } else {
            // Remove the delete icon if it already exists
            const deleteIcon = item.querySelector('.delete-icon');
            if (deleteIcon) {
                item.removeChild(deleteIcon);
            }
        }
    });

    console.log("test1");
});
