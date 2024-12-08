// Scroll Detection and Search Box Visibility
document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  const searchBoxContainer = document.getElementById('container-query');

  if (searchBoxContainer) {
      window.addEventListener('scroll', () => {
          let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

          if (currentScroll > lastScrollTop) {
              // User scrolling down - hide the search box
              searchBoxContainer.style.transform = 'translateY(100%)';
          } else {
              // User scrolling up - show the search box
              searchBoxContainer.style.transform = 'translateY(0)';
          }

          lastScrollTop = Math.max(currentScroll, 0);
      });
  }
});

// Menu Toggle Functionality
function toggleMenu() {
    // Toggle 'active' class for both the menu and overlay
    const menu = document.getElementById('hamburger-menu');
    const overlay = document.getElementById('overlay');
    
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Update ARIA attributes for accessibility
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const isExpanded = hamburgerIcon.getAttribute('aria-expanded') === 'true';
    hamburgerIcon.setAttribute('aria-expanded', !isExpanded);
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('hamburger-menu');
    const overlay = document.getElementById('overlay');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    
    // Only close if click happens outside the menu and hamburger icon
    if (
      menu && overlay &&
      !menu.contains(event.target) &&
      !overlay.contains(event.target) &&
      !hamburgerIcon.contains(event.target)
    ) {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      
      // Reset ARIA attributes for accessibility
      hamburgerIcon.setAttribute('aria-expanded', 'false');
    }
});

// Redirect to the loading page with a target URL
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button-main');
  
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetUrl = event.target.dataset.redirect || 'recipe1.html'; // Default redirect
            window.location.href = `loading.html?redirect=${encodeURIComponent(targetUrl)}`;
        });
    });
  
    const searchButton = document.getElementById('search-button');

    if (searchButton) {
        // Function to handle navigation
        const navigateToLoading = () => {
            window.location.href = 'recipe1.html'; // Replace with your desired navigation logic
        };

        // Add click event listener
        searchButton.addEventListener('click', () => navigateToLoading());

        // Add keydown event listener for keyboard accessibility
        searchButton.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent default scrolling for space
                navigateToLoading();
            }
        });
    }
  });
