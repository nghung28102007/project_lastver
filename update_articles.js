// Script to update all article HTML files with language toggle and dark mode
const fs = require('fs');
const path = require('path');

// Directory containing article files
const articlesDir = path.join(__dirname, 'news');

// Get the dropdown menu HTML
const dropdownMenuHTML = `
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">
                            <i class="fas fa-globe"></i> Ngôn ngữ <i class="fas fa-caret-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#" data-lang="vi" class="language-option active">Tiếng Việt</a></li>
                            <li><a href="#" data-lang="en" class="language-option">English</a></li>
                        </ul>
                    </li>
                    <li class="theme-toggles">
                        <a href="#" id="light-mode-btn"><i class="fas fa-sun"></i></a>
                        <a href="#" id="dark-mode-btn"><i class="fas fa-moon"></i></a>
                    </li>`;

// JavaScript code to add
const scriptToAdd = `
    <script src="../js/translations.js"></script>
    <script>
        // Theme toggle and language switching functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Dark mode functionality
            const darkModeBtn = document.getElementById('dark-mode-btn');
            const lightModeBtn = document.getElementById('light-mode-btn');
            
            // Check if dark mode is already enabled (from localStorage)
            if (localStorage.getItem('darkMode') === 'enabled') {
                document.body.classList.add('dark-mode');
            }
            
            // Dark mode button click event
            darkModeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            });
            
            // Light mode button click event
            lightModeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            });

            // Language dropdown functionality
            const dropdownToggle = document.querySelector('.dropdown-toggle');
            const dropdownMenu = document.querySelector('.dropdown-menu');
            const languageOptions = document.querySelectorAll('.language-option');
            
            // Toggle dropdown menu
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdownMenu.classList.toggle('show');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.dropdown')) {
                    dropdownMenu.classList.remove('show');
                }
            });
            
            // Language selection
            languageOptions.forEach(option => {
                option.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Get selected language
                    const selectedLang = this.getAttribute('data-lang');
                    
                    // Update active class
                    languageOptions.forEach(opt => opt.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Store selected language in localStorage
                    setLanguage(selectedLang);
                    
                    // Apply translations based on selected language
                    applyTranslations(selectedLang);
                    
                    // Close dropdown
                    dropdownMenu.classList.remove('show');
                });
            });

            // Add CSS for dropdown and theme toggle
            const style = document.createElement('style');
            style.textContent = \`
                /* Dropdown menu styles */
                .dropdown {
                    position: relative;
                }
                
                .dropdown-toggle {
                    display: flex !important;
                    align-items: center;
                    gap: 5px;
                }
                
                .dropdown-menu {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    min-width: 160px;
                    background-color: #fff;
                    border-radius: 4px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    z-index: 100;
                    padding: 8px 0;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(10px);
                    transition: all 0.3s ease;
                }
                
                .dropdown-menu.show {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                
                .dropdown-menu li {
                    display: block;
                    width: 100%;
                }
                
                .dropdown-menu a {
                    display: block !important;
                    padding: 8px 16px;
                    color: #333;
                    text-decoration: none;
                    transition: background-color 0.2s ease;
                    font-size: 14px;
                }
                
                .dropdown-menu a:hover {
                    background-color: #f0f0f0;
                }
                
                .dropdown-menu a.active {
                    background-color: #e0e0e0;
                    font-weight: 600;
                }
                
                /* Theme toggle styles */
                .theme-toggles {
                    display: flex !important;
                    gap: 10px;
                    align-items: center;
                }
                
                .theme-toggles a {
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background-color: transparent;
                    color: #333;
                    transition: all 0.3s ease;
                }
                
                .theme-toggles a:hover {
                    background-color: rgba(0, 0, 0, 0.1);
                }
                
                #light-mode-btn {
                    color: #FF9800;
                }
                
                #dark-mode-btn {
                    color: #2196F3;
                }
                
                /* Dark mode styles */
                body.dark-mode {
                    background-color: #121212;
                    color: #f0f0f0;
                }
                
                body.dark-mode #main-header {
                    background-color: #1e1e1e;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                }
                
                body.dark-mode #main-nav a {
                    color: #f0f0f0;
                }
                
                body.dark-mode .main-article {
                    background-color: #1e1e1e;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                }
                
                body.dark-mode .article-title,
                body.dark-mode .article-content h3 {
                    color: #f0f0f0;
                }
                
                body.dark-mode .article-meta {
                    color: #aaa;
                }
                
                body.dark-mode .dropdown-menu {
                    background-color: #1e1e1e;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                }
                
                body.dark-mode .dropdown-menu a {
                    color: #f0f0f0;
                }
                
                body.dark-mode .dropdown-menu a:hover {
                    background-color: #333;
                }
                
                body.dark-mode .dropdown-menu a.active {
                    background-color: #444;
                }
                
                body.dark-mode footer {
                    background-color: #1e1e1e;
                }
                
                body.dark-mode .comment-form textarea {
                    background-color: #2a2a2a;
                    color: #f0f0f0;
                    border-color: #444;
                }
                
                body.dark-mode .btn-submit {
                    background-color: #2196F3;
                }
            \`;
            document.head.appendChild(style);
        });
    </script>`;

// Process all article HTML files
fs.readdir(articlesDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.filter(file => file.endsWith('.html') && file !== 'article1.html').forEach(file => {
        const filePath = path.join(articlesDir, file);
        
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file ${file}:`, err);
                return;
            }

            // Add dropdown menu to navigation
            let updatedContent = data.replace(
                /<li><a href="\.\.\/authenticate\/signin\.html">Đăng nhập<\/a><\/li>/,
                '<li><a href="../authenticate/signin.html">Đăng nhập</a></li>' + dropdownMenuHTML
            );

            // Remove old dark-mode-toggle
            updatedContent = updatedContent.replace(
                /\s*<div class="dark-mode-toggle">\s*<i class="fas fa-moon"><\/i>\s*<\/div>/,
                ''
            );

            // Add translations.js script and theme toggle script before closing body tag
            updatedContent = updatedContent.replace(
                // /<script src="\.\.\/js\/darkmode\.js"><\/script>\s*<\/body>/,
                '<script src="../js/darkmode.js"></script>' + scriptToAdd + '</body>'
            );

            // Write updated content back to file
            fs.writeFile(filePath, updatedContent, 'utf8', err => {
                if (err) {
                    console.error(`Error writing file ${file}:`, err);
                    return;
                }
                console.log(`Successfully updated ${file}`);
            });
        });
    });
});

console.log('Update script started. Processing article files...');
