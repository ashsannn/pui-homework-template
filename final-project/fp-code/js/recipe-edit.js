///////////////////////////MENU TOGGLE////////////////////////////////
function toggleMenu() {
    ['hamburger-menu', 'overlay'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.toggle('active');
        }
    });
  }

document.getElementById('edit-button').addEventListener('click', function () {
    const editText = document.getElementById('edit-text');

    // Toggle the text between 'edit recipe' and 'editing ON'
    if (editText) {
        if (editText.innerText === 'edit recipe') {
            editText.innerText = 'editing ON';
        } else {
            editText.innerText = 'edit recipe';
        }
    }

    const containerServ = document.getElementById('container-serv');
    const containerCal = document.getElementById('container-cal');
    const servingNum = document.getElementById('serving-num');
    const servingCals = document.getElementById('serving-cals');
    containerServ.classList.toggle('highlight-green');
    containerCal.classList.toggle('highlight-green');
    servingNum.classList.toggle('edit-box');
    servingCals.classList.toggle('edit-box');

    const contIng = document.getElementById('container-recipe-ingredients');
    contIng.classList.toggle('highlight-border');

    const ings = document.querySelectorAll('.recipe-list-container .recipe-ingredient-list li');

    // Add the remove icon and handle functionality
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

        // Handle the delete icon (removes or adds based on edit mode)
        if (!item.querySelector('.delete-icon')) {
            const deleteIcon = document.createElement('img');
            deleteIcon.src = 'images/delete-icon.svg'; // Replace with your icon's path
            deleteIcon.alt = 'delete icon';
            deleteIcon.className = 'delete-icon';
            item.appendChild(deleteIcon);

            // Add the click event listener to remove the ingredient in the new recipe
            deleteIcon.addEventListener('click', function () {
                duplicateUpdatedRecipe(item); // Pass the clicked ingredient to the function
            });
        } else {
            // Remove the remove icon if the highlight class is removed
            const icon = item.querySelector('.delete-icon');
            if (icon) {
                item.removeChild(icon);
            }
        }
    });

    console.log("Edit button functionality triggered");
});

function duplicateUpdatedRecipe(ingredientToRemove) {
    const originalRecipeContainer = document.querySelector('.container-recipe-1'); // The container of the whole recipe

    if (originalRecipeContainer) {
        // Clone the entire original recipe container (container-recipe-1)
        const updatedRecipeContainer = originalRecipeContainer.cloneNode(true);

        // Find the ingredient list in the cloned recipe container and remove the specific ingredient
        const ingredientList = updatedRecipeContainer.querySelector('.recipe-ingredient-list');
        if (ingredientList && ingredientToRemove) {
            const ingredientItems = ingredientList.querySelectorAll('li');
            ingredientItems.forEach(item => {
                if (item.innerText === ingredientToRemove.innerText) {
                    item.remove(); // Remove the matched ingredient
                }
            });
        }

        // Remove edit mode-specific styles and icons from the duplicated recipe
        const deleteIcons = updatedRecipeContainer.querySelectorAll('.delete-icon');
        deleteIcons.forEach(icon => icon.remove());

        const replaceIcons = updatedRecipeContainer.querySelectorAll('.replace-icon');
        replaceIcons.forEach(icon => icon.remove());

        const highlightedItems = updatedRecipeContainer.querySelectorAll('.ing-highlight');
        highlightedItems.forEach(item => item.classList.remove('ing-highlight'));

        const containerServ = updatedRecipeContainer.querySelector('#container-serv');
        const containerCal = updatedRecipeContainer.querySelector('#container-cal');
        const servingNum = updatedRecipeContainer.querySelector('#serving-num');
        const servingCals = updatedRecipeContainer.querySelector('#serving-cals');
        const contIng = updatedRecipeContainer.querySelector('#container-recipe-ingredients');

        containerServ.classList.remove('highlight-green');
        containerCal.classList.remove('highlight-green');
        servingNum.classList.remove('edit-box');
        servingCals.classList.remove('edit-box');
        contIng.classList.remove('highlight-border');

        // Reset the edit button text
        const editText = updatedRecipeContainer.querySelector('#edit-text');
        if (editText) {
            editText.innerText = 'edit recipe';
        }

        // Add the 'recipe-slide-in' class to apply the animation
        updatedRecipeContainer.classList.add('recipe-slide-in');

        // Find the parent container of the original recipe
        const parentContainer = originalRecipeContainer.parentNode; // Ensure correct parent
        if (parentContainer) {
            // Insert the duplicated recipe container after the original one
            parentContainer.insertBefore(updatedRecipeContainer, originalRecipeContainer.nextSibling);

            // Optionally, remove the old recipe (original one) if you want to replace it entirely
            originalRecipeContainer.remove();
        }

        // Reinitialize the edit functionality for the new recipe
        initEditMode(updatedRecipeContainer);
    }
}

// Function to initialize/edit functionality for a recipe (newly created or existing)
function initEditMode(recipeContainer) {
    const editButton = recipeContainer.querySelector('#edit-button');
    if (editButton) {
        editButton.addEventListener('click', function () {
            const editText = recipeContainer.querySelector('#edit-text');
            
            // Toggle the text between 'edit recipe' and 'editing ON'
            if (editText) {
                if (editText.innerText === 'edit recipe') {
                    editText.innerText = 'editing ON';
                } else {
                    editText.innerText = 'edit recipe';
                }
            }

            const containerServ = recipeContainer.querySelector('#container-serv');
            const containerCal = recipeContainer.querySelector('#container-cal');
            const servingNum = recipeContainer.querySelector('#serving-num');
            const servingCals = recipeContainer.querySelector('#serving-cals');
            containerServ.classList.toggle('highlight-green');
            containerCal.classList.toggle('highlight-green');
            servingNum.classList.toggle('edit-box');
            servingCals.classList.toggle('edit-box');

            const contIng = recipeContainer.querySelector('#container-recipe-ingredients');
            contIng.classList.toggle('highlight-border');

            const ings = recipeContainer.querySelectorAll('.recipe-list-container .recipe-ingredient-list li');

            // Add the remove icon and handle functionality
            ings.forEach(item => {
                item.classList.toggle('ing-highlight');

                // Handle the replace icon
                if (item.classList.contains('ing-highlight')) {
                    if (!item.querySelector('.replace-icon')) {
                        const icon = document.createElement('img');
                        icon.src = 'images/replace-icon.png'; // Replace with your icon's path
                        icon.alt = 'replace icon';
                        icon.className = 'replace-icon';
                        item.appendChild(icon);
                    }
                } else {
                    const icon = item.querySelector('.replace-icon');
                    if (icon) {
                        item.removeChild(icon);
                    }
                }

                // Handle the delete icon (removes or adds based on edit mode)
                if (!item.querySelector('.delete-icon') && editText.innerText === 'editing ON') {
                    const deleteIcon = document.createElement('img');
                    deleteIcon.src = 'images/delete-icon.svg'; // Replace with your icon's path
                    deleteIcon.alt = 'delete icon';
                    deleteIcon.className = 'delete-icon';
                    item.appendChild(deleteIcon);

                    // Add the click event listener to remove the ingredient in the new recipe
                    deleteIcon.addEventListener('click', function () {
                        duplicateUpdatedRecipe(item); // Pass the clicked ingredient to the function
                    });
                } else {
                    const icon = item.querySelector('.delete-icon');
                    if (icon && editText.innerText !== 'editing ON') {
                        item.removeChild(icon);
                    }
                }
            });
        });
    }
}
