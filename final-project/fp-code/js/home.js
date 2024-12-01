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
  ['hamburger-menu', 'overlay'].forEach(id => {
      const element = document.getElementById(id);
      if (element) {
          element.classList.toggle('active');
      }
  });
}

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
      searchButton.addEventListener('click', () => {
          const targetUrl = 'recipe1.html'; // Default redirect for search
          window.location.href = `loading.html?redirect=${encodeURIComponent(targetUrl)}`;
      });
  }
});
