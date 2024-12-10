let deletedIngredients = []; // array to track deleted ingredients globally

///////////////////////////menu toggle////////////////////////////////
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

    // toggle the text between 'edit recipe' and 'editing current recipe'
    if (editText) {
        if (editText.innerText === 'edit recipe') {
            editText.innerText = 'editing current recipe';
        } else {
            editText.innerText = 'edit recipe';
        }
    }
    toggleEditModeFeatures();
});

function toggleEditModeFeatures() {
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
        item.classList.toggle('ing-highlight');

        // add or remove the replace icon
        if (item.classList.contains('ing-highlight')) {
            if (!item.querySelector('.replace-icon')) {
                const replaceIcon = createReplaceIcon(item);
                item.appendChild(replaceIcon);
            }
        } else {
            const replaceIcon = item.querySelector('.replace-icon');
            if (replaceIcon) item.removeChild(replaceIcon);
        }

        // add or remove the delete icon
        if (item.classList.contains('ing-highlight')) {
            if (!item.querySelector('.delete-icon')) {
                const deleteIcon = createDeleteIcon(item);
                item.appendChild(deleteIcon);
            }
        } else {
            const deleteIcon = item.querySelector('.delete-icon');
            if (deleteIcon) item.removeChild(deleteIcon);
        }
    });

    console.log("edit mode toggled");
}

function createReplaceIcon(item) {
    const replaceIcon = document.createElement('img');
    replaceIcon.src = 'images/replace-icon.png';
    replaceIcon.alt = 'replace icon';
    replaceIcon.className = 'replace-icon';

    replaceIcon.addEventListener('click', function () {
        const modal = document.getElementById('replace-modal');
        modal.style.display = 'flex'; // show the modal

        const confirmBtn = document.getElementById('replace-modal-confirm');
        const cancelBtn = document.getElementById('replace-modal-cancel');

        confirmBtn.onclick = function () {
            console.log("ingredient replaced:", item.innerText);
            modal.style.display = 'none';
        };

        cancelBtn.onclick = function () {
            modal.style.display = 'none';
        };
    });

    return replaceIcon;
}

function createDeleteIcon(item) {
    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'images/delete-icon.svg';
    deleteIcon.alt = 'delete icon';
    deleteIcon.className = 'delete-icon';

    deleteIcon.addEventListener('click', function () {
        const modal = document.getElementById('remove-modal');
        modal.style.display = 'flex'; // show the modal

        const confirmBtn = document.getElementById('delete-modal-confirm');
        const cancelBtn = document.getElementById('delete-modal-cancel');

        confirmBtn.onclick = function () {
            console.log("ingredient removed:", item.innerText);
            deletedIngredients.push(item.innerText); // add the deleted ingredient to the global array
            createNewRecipe(item); // update all recipes
            modal.style.display = 'none';
        };

        cancelBtn.onclick = function () {
            modal.style.display = 'none';
        };
    });

    return deleteIcon;
}

function resetEditMode(recipeContainer) {
    const editText = document.getElementById('edit-text'); 
    if (editText) {
        editText.innerText = 'edit recipe';
    }

    // remove highlights and icons
    recipeContainer.querySelectorAll('.highlight-green, .edit-box, .highlight-border, .ing-highlight').forEach(el => {
        el.classList.remove('highlight-green', 'edit-box', 'highlight-border', 'ing-highlight');
    });

    recipeContainer.querySelectorAll('.replace-icon, .delete-icon').forEach(icon => icon.remove());
}

function createNewRecipe() {
    const originalRecipeContainer = document.querySelector('.container-recipe-all');

    if (originalRecipeContainer) {
        const originalRecipeContent = originalRecipeContainer.querySelector('.container-recipe-2');

        if (originalRecipeContent) {
            const updatedRecipeContent = originalRecipeContent.cloneNode(true);

            const ingredientList = updatedRecipeContent.querySelector('.recipe-ingredient-list');
            const deletedIngredientText = deletedIngredients.join(', '); // join deleted ingredients into a string

            if (ingredientList) {
                ingredientList.querySelectorAll('li').forEach(item => {
                    // only remove the ingredient if it exists in the deletedIngredients list
                    if (deletedIngredients.includes(item.innerText)) {
                        item.remove();
                    }
                });
            }

            // update the h1.search-text with the removed ingredient(s)
            const searchText = updatedRecipeContent.querySelector('h1.search-text');
            if (searchText && deletedIngredientText) {
                searchText.innerText += ` (Removed: ${deletedIngredientText})`; // append deleted ingredients
            }

            // reset edit mode for all existing recipes
            document.querySelectorAll('.container-recipe-2').forEach(recipe => resetEditMode(recipe));
            console.log("edit mode off");

            // append the new recipe and disable edit mode
            originalRecipeContainer.appendChild(updatedRecipeContent);
            resetEditMode(updatedRecipeContent);

            updatedRecipeContent.classList.add('recipe-slide-in');
            const recipeTop = updatedRecipeContent.getBoundingClientRect().top + window.scrollY;
            const offset = 7 * parseFloat(getComputedStyle(document.documentElement).fontSize);
            window.scrollTo({
                top: recipeTop - offset,
                behavior: 'smooth'
            });
        } else {
            console.error('could not find .container-recipe-2');
        }
    } else {
        console.error('could not find .container-recipe-all');
    }
}


// initialize edit mode for specific recipe container
function initEditMode(recipeContainer) {
    const editButton = recipeContainer.querySelector('#edit-button');
    if (editButton) {
        editButton.addEventListener('click', function () {
            // turn off edit mode for all recipes
            document.querySelectorAll('.container-recipe-2').forEach(recipe => resetEditMode(recipe));

            // enable edit mode only for the clicked recipe
            const editText = recipeContainer.querySelector('#edit-text');
            if (editText) editText.innerText = 'editing current recipe';

            toggleEditModeFeatures(recipeContainer);
        });
    }
} 


// array to store bookmarked recipes
let bookmarkedRecipes = JSON.parse(localStorage.getItem('bookmarkedRecipes')) || [];

function saveRecipeToBookmarks() {
    // select the most recent recipe container (the last .container-recipe-2 on the page)
    const latestRecipeContainer = document.querySelector('.container-recipe-2:last-child');

    if (latestRecipeContainer) {
        const recipeName = latestRecipeContainer.querySelector('h1.search-text').innerText;

        // ingredients and instructions from the latest recipe
        const ingredients = Array.from(latestRecipeContainer.querySelectorAll('.recipe-ingredient-list li')).map(item => item.innerText);
        const instructions = Array.from(latestRecipeContainer.querySelectorAll('.recipe-instruction-list li')).map(item => item.innerText);

        const recipeData = {
            name: recipeName,
            ingredients: ingredients,
            instructions: instructions
        };

        console.log(recipeData); // debugging

        const notification = document.getElementById('saved-notification');
        const notificationContent = notification.querySelector('.saved-notification-content');

        // check if the recipe is already bookmarked
        if (!bookmarkedRecipes.some(recipe => recipe.name === recipeData.name)) {
            bookmarkedRecipes.push(recipeData);
            localStorage.setItem('bookmarkedRecipes', JSON.stringify(bookmarkedRecipes));
            console.log(`recipe "${recipeName}" saved to bookmarks!`);

            notificationContent.innerText = `recipe "${recipeName}" saved to bookmarks!`;
        } else {
            // if the recipe is already bookmarked
            console.log(`recipe "${recipeName}" is already bookmarked.`);
            notificationContent.innerText = `recipe "${recipeName}" is already bookmarked!`;
        }

        console.log(bookmarkedRecipes);

        // show the notification
        notification.style.display = 'flex';

        // hide the notification after 3 seconds
        setTimeout(function () {
            notification.style.display = 'none';
        }, 2000);
    } else {
        console.error('no recipe found to save.');
    }
}


// Add event listener to bookmark button
document.getElementById('bookmark-button').addEventListener('click', function() {
    const recipeContainer = document.querySelector('.container-recipe-2'); // or use another selector to target the specific recipe container
    if (recipeContainer) {
        saveRecipeToBookmarks(recipeContainer);
    } else {
        console.log('No recipe found to bookmark.');
    }
});

