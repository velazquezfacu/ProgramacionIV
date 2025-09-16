document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('main-nav');

    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburgerButton.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });
    }
});