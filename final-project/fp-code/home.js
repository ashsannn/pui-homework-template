
// Track the scroll direction
let lastScrollTop = 0;
const searchBoxContainer = document.getElementById('container-query');

// Event listener for scroll
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // If the user scrolls down, hide the search box
    if (currentScroll > lastScrollTop) {
        // Scroll down
        searchBoxContainer.style.transform = 'translateY(100%)'; // Hide the box
    } else {
        // Scroll up
        searchBoxContainer.style.transform = 'translateY(0)'; // Show the box
    }
    
    // Update last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


//MENU FUNCTIONALITY
function toggleMenu() {
    ['hamburger-menu', 'overlay'].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.toggle('active');
    });
}


//LOADING FUNCTIONALITY
// script.js
// Get elements
const searchButton = document.getElementById('search-button');
const mainButtons = document.querySelectorAll('.button-main');
const overlay = document.getElementById('loading-overlay');

// Function to show loading animation
const showLoading = (redirectUrl = null) => {
  // Show overlay
  overlay.classList.add('active');

  // Redirect after a delay (optional)
  if (redirectUrl) {
    setTimeout(() => {
      window.location.href = redirectUrl;
    }, 3000); // 2-second delay
  } else {
    // Hide after a delay if no redirect
    setTimeout(() => overlay.classList.remove('active'), 2000);
  }
};

// Add event listener to search button
if (searchButton) {
  searchButton.addEventListener('click', event => {
    const redirectUrl = event.target.dataset.redirect;
    showLoading(redirectUrl);
  });
};

// Add event listeners to main buttons
mainButtons.forEach(button => {
  button.addEventListener('click', event => {
    const redirectUrl = event.target.dataset.redirect;
    showLoading(redirectUrl);
  });
});


lottie.loadAnimation({
    container: document.getElementById('loading-overlay'), // Target container
    renderer: 'svg', // Render as SVG
    loop: true, // Loop animation
    autoplay: true, // Start automatically
    path: 'https://assets10.lottiefiles.com/packages/lf20_kxczsi6z.json' // Animation JSON file
});
