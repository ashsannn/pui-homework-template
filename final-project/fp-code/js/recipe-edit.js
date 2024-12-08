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

    ings.forEach(item => {
        // Toggle the highlight class on each item
        item.classList.toggle('ing-highlight');

        // Handle the replace icon
        if (item.classList.contains('ing-highlight')) {
            // Add the replace icon if the highlight class is applied and icon doesn't exist
            if (!item.querySelector('.replace-icon')) {
                const replaceIcon = document.createElement('img');
                replaceIcon.src = 'images/replace-icon.png'; // Replace with your icon's path
                replaceIcon.alt = 'replace icon';
                replaceIcon.className = 'replace-icon';
                item.appendChild(replaceIcon);

                // Handle the replace icon click event
                replaceIcon.addEventListener('click', function () {
                    const modal = document.getElementById('replace-modal');
                    modal.style.display = 'flex'; // Show the modal

                    // Get the Yes and No buttons
                    const confirmBtn = document.getElementById('replace-modal-confirm');
                    const cancelBtn = document.getElementById('replace-modal-cancel');

                    // The ingredient associated with this icon
                    const ingredientItem = item; // Directly use `item`

                    // Confirm button logic
                    confirmBtn.onclick = function () {
                        console.log("Ingredient replaced:", ingredientItem.innerText);

                        // Optionally replace the ingredient or trigger a function here
                        // Replace the ingredient logic here

                        // Close the modal after confirmation
                        modal.style.display = 'none';
                    };

                    // Cancel button logic
                    cancelBtn.onclick = function () {
                        // Close the modal without replacing the ingredient
                        modal.style.display = 'none';
                    };
                });
            }
        } else {
            // Remove the replace icon if the highlight class is removed
            const replaceIcon = item.querySelector('.replace-icon');
            if (replaceIcon) {item.removeChild(replaceIcon);
            }
        }

        // Handle the delete icon (removes or adds based on edit mode)
        if (!item.querySelector('.delete-icon')) {
            const deleteIcon = document.createElement('img');
            deleteIcon.src = 'images/delete-icon.svg'; // Replace with your icon's path
            deleteIcon.alt = 'delete icon';
            deleteIcon.className = 'delete-icon';
            item.appendChild(deleteIcon);

            deleteIcon.addEventListener('click', function () {
                const modal = document.getElementById('remove-modal');
                modal.style.display = 'flex'; // Show the modal

                // Get the Yes and No buttons
                const confirmBtn = document.getElementById('delete-modal-confirm');
                const cancelBtn = document.getElementById('delete-modal-cancel');

                // The ingredient associated with this icon
                const ingredientItem = item; // Directly use `item`

                // Confirm button logic
                confirmBtn.onclick = function () {
                    console.log("Ingredient removed:", ingredientItem.innerText);
                    duplicateUpdatedRecipe(item); 
                    // Optionally replace the ingredient or trigger a function here
                    // Replace the ingredient logic here

                    // Close the modal after confirmation
                    modal.style.display = 'none';
                };
                
                // Cancel button logic
                cancelBtn.onclick = function () {
                    // Close the modal without removing the ingredient
                    modal.style.display = 'none';
                };
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
    const originalRecipeContainer = document.querySelector('.container-recipe-all'); // The entire recipe container

    if (originalRecipeContainer) {
        console.log('Found container-recipe-all:', originalRecipeContainer);

        // Find the actual content (container-recipe-2) we want to clone
        const originalRecipeContent = originalRecipeContainer.querySelector('.container-recipe-2');
        console.log('Found container-recipe-2:', originalRecipeContent);

        if (originalRecipeContent) {
            // Clone only the content (container-recipe-2) and not the utilities
            const updatedRecipeContent = originalRecipeContent.cloneNode(true);

            // If we need to remove a specific ingredient, do so here
            const ingredientList = updatedRecipeContent.querySelector('.recipe-ingredient-list');
            if (ingredientList && ingredientToRemove) {
                const ingredientItems = ingredientList.querySelectorAll('li');
                let ingredientWasRemoved = false; // Track if the ingredient was found and removed
                ingredientItems.forEach(item => {
                    if (item.innerText === ingredientToRemove.innerText) {
                        item.remove(); // Remove the matched ingredient
                        ingredientWasRemoved = true;
                    }
                });

                // Update the search-text with the removed ingredient note
                if (ingredientWasRemoved) {
                    const searchText = updatedRecipeContent.querySelector('h1.search-text');
                    if (searchText) {
                        searchText.innerText += ` (ingredient removed: ${ingredientToRemove.innerText})`;
                    }
                }
            }

            // Reset the edit mode - turn off any active edits or icons
            const editText = updatedRecipeContent.querySelector('#edit-text');
            if (editText) {
                editText.innerText = 'edit recipe'; // Reset edit button text
            }

            // Remove any delete or replace icons (if any exist)
            const deleteIcons = updatedRecipeContent.querySelectorAll('.delete-icon');
            deleteIcons.forEach(icon => icon.remove());

            const replaceIcons = updatedRecipeContent.querySelectorAll('.replace-icon');
            replaceIcons.forEach(icon => icon.remove());

            const highlightedItems = updatedRecipeContent.querySelectorAll('.ing-highlight');
            highlightedItems.forEach(item => item.classList.remove('ing-highlight'));

            // Reset edit mode-related styles if they exist
            const containerServ = updatedRecipeContent.querySelector('#container-serv');
            const containerCal = updatedRecipeContent.querySelector('#container-cal');
            const servingNum = updatedRecipeContent.querySelector('#serving-num');
            const servingCals = updatedRecipeContent.querySelector('#serving-cals');
            const contIng = updatedRecipeContent.querySelector('#container-recipe-ingredients');

            containerServ.classList.remove('highlight-green');
            containerCal.classList.remove('highlight-green');
            servingNum.classList.remove('edit-box');
            servingCals.classList.remove('edit-box');
            contIng.classList.remove('highlight-border');

            // Add an animation class for smooth entry
            updatedRecipeContent.classList.add('recipe-slide-in');

            // Directly append the updated recipe content to container-recipe-1
            originalRecipeContainer.appendChild(updatedRecipeContent);
            console.log('Updated recipe injected:', updatedRecipeContent);

            // Smoothly scroll to the top of the newly added recipe, adjusted by 2rem
            const recipeTop = updatedRecipeContent.getBoundingClientRect().top + window.scrollY;
            const offset = 7 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Convert 2rem to pixels
            window.scrollTo({
                top: recipeTop - offset, // Subtract 2rem in pixels to ensure visibility
                behavior: 'smooth'
            });
            console.log('Scrolling to new recipe top, offset by 2rem');

            // Reinitialize the edit functionality for the new recipe (but with edit mode off)
            initEditMode(updatedRecipeContent);
        } else {
            console.error('Could not find .container-recipe-2 in original recipe container');
        }
    } else {
        console.error('Could not find .container-recipe-1');
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

