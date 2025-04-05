/**
 * Dark Mode Functionality for Authentication Pages
 * Handles dark mode toggle and preference storage specifically for authentication pages
 */
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
    
    // Check for saved dark mode preference for authentication pages
    if (localStorage.getItem('authDarkMode') === 'enabled') {
        body.classList.add('dark-mode');
        updateDarkModeIcon();
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            // Save preference to localStorage with a different key
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('authDarkMode', 'enabled');
            } else {
                localStorage.setItem('authDarkMode', 'disabled');
            }
            
            updateDarkModeIcon();
        });
    }
    
    // Update icon based on current mode
    function updateDarkModeIcon() {
        if (darkModeToggle) {
            if (body.classList.contains('dark-mode')) {
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }
    }
});