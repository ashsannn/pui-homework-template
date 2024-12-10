const showLoadingAnimation = (redirectUrl) => {
    const loadingOverlay = document.getElementById('loading-animation');

    if (loadingOverlay) {
        loadingOverlay.classList.remove('hidden');
        loadingOverlay.classList.add('active');

        // load Lottie animation
        lottie.loadAnimation({
            container: loadingOverlay,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/lottie/animation.json',
        });

        // redirect after delay
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 1200);
    }
};

// initialize loading screen when page loads
window.addEventListener('load', () => {
    const redirectUrl = new URLSearchParams(window.location.search).get('redirect');
    if (redirectUrl) {
        showLoadingAnimation(redirectUrl);
    }
});
