// Function to Load and Play Lottie Animation
const showLoadingAnimation = (redirectUrl) => {
    const loadingOverlay = document.getElementById('loading-animation');

    if (loadingOverlay) {
        // Display loading overlay
        loadingOverlay.classList.remove('hidden');
        loadingOverlay.classList.add('active');

        // Load Lottie animation
        lottie.loadAnimation({
            container: loadingOverlay,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/lottie/animation.json',
        });

        // Redirect after delay
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 1200);
    }
};

// Initialize loading screen when page loads
window.addEventListener('load', () => {
    const redirectUrl = new URLSearchParams(window.location.search).get('redirect');
    if (redirectUrl) {
        showLoadingAnimation(redirectUrl);
    }
});
