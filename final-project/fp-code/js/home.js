// menu toggle functionality
function toggleMenu() {
    // toggle 'active' class for both the menu and overlay
    const menu = document.getElementById('hamburger-menu');
    const overlay = document.getElementById('overlay');
    
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // update aria attributes for accessibility
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const isExpanded = hamburgerIcon.getAttribute('aria-expanded') === 'true';
    hamburgerIcon.setAttribute('aria-expanded', !isExpanded);
}

// close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('hamburger-menu');
    const overlay = document.getElementById('overlay');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    
    // close if click happens outside the menu and hamburger icon
    if (
      menu && overlay &&
      !menu.contains(event.target) &&
      !overlay.contains(event.target) &&
      !hamburgerIcon.contains(event.target)
    ) {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      
      // aria attributes for accessibility
      hamburgerIcon.setAttribute('aria-expanded', 'false');
    }
});

// redirect to the loading page with a target url
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button-main');
  
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetUrl = event.target.dataset.redirect || 'recipe1.html'; 
            window.location.href = `loading.html?redirect=${encodeURIComponent(targetUrl)}`;
        });
    });
  
    const searchButton = document.getElementById('search-button');

    if (searchButton) {
        // function to handle navigation
        const navigateToLoading = () => {
            window.location.href = 'recipe1.html';
        };

        // add click event listener
        searchButton.addEventListener('click', () => navigateToLoading());

        // add keydown event listener for keyboard accessibility
        searchButton.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                navigateToLoading();
            }
        });
    }
});
