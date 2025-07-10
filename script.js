// script.js

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Function to set active navigation link
    function setActiveNavLink() {
        const currentPath = window.location.pathname.split('/').pop(); // Get current filename (e.g., "index.html")
        const navLinks = document.querySelectorAll('nav a'); // Get all navigation links

        navLinks.forEach(link => {
            // Remove active class from all links first
            link.classList.remove('active-nav-link');

            // Check if the link's href matches the current page or its section
            const linkHref = link.getAttribute('href');

            if (linkHref) {
                // For direct page links (e.g., "all-product.html")
                if (linkHref === currentPath) {
                    link.classList.add('active-nav-link');
                }
                // For links to sections on the index page (e.g., "index.html#line-qr-code")
                else if (currentPath === 'index.html' && linkHref.startsWith('index.html#')) {
                    const sectionId = linkHref.split('#')[1];
                    if (sectionId && document.getElementById(sectionId)) {
                        // This part is a bit tricky for "active" state based on scroll position.
                        // For now, we'll just activate "Contact" if on index.html
                        if (link.textContent === 'Contact') {
                            link.classList.add('active-nav-link');
                        }
                    }
                }
            }
        });
    }

    // Call the function on page load
    setActiveNavLink();

    // Optional: Re-check active link on hash change for single-page navigation
    window.addEventListener('hashchange', setActiveNavLink);
});
