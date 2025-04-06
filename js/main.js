document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu
    const toggleMenu = document.querySelector('.toggle-menu');
    const mainNav = document.getElementById('main-nav');
    
    if (toggleMenu) {
        toggleMenu.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        updateDarkModeIcon();
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
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

    // Read more button functionality
    const readMoreBtn = document.getElementById('read-more');
    const hiddenContent = document.getElementById('hidden-content');
    
    if (readMoreBtn && hiddenContent) {
        readMoreBtn.addEventListener('click', function() {
            hiddenContent.style.display = hiddenContent.style.display === 'block' ? 'none' : 'block';
            readMoreBtn.classList.toggle('active');
            
            if (readMoreBtn.classList.contains('active')) {
                readMoreBtn.innerHTML = 'Thu gọn <i class="fas fa-chevron-up"></i>';
            } else {
                readMoreBtn.innerHTML = 'Xem thêm <i class="fas fa-chevron-down"></i>';
            }
        });
    }

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Comment submission
    const commentForm = document.querySelector('.comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');
    
    if (commentForm && commentInput && commentsList) {
        document.getElementById('submit-comment').addEventListener('click', function() {
            const commentText = commentInput.value.trim();
            
            if (commentText) {
                // Create comment element
                const commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                
                const commentHeader = document.createElement('div');
                commentHeader.className = 'comment-header';
                
                const commentAuthor = document.createElement('span');
                commentAuthor.className = 'comment-author';
                commentAuthor.innerHTML = '<i class="far fa-user"></i> Người dùng ẩn danh';
                
                const commentDate = document.createElement('span');
                commentDate.className = 'comment-date';
                commentDate.innerHTML = '<i class="far fa-clock"></i> Vừa xong';
                
                commentHeader.appendChild(commentAuthor);
                commentHeader.appendChild(commentDate);
                
                const commentBody = document.createElement('div');
                commentBody.className = 'comment-body';
                commentBody.textContent = commentText;
                
                commentDiv.appendChild(commentHeader);
                commentDiv.appendChild(commentBody);
                
                // Add comment to list
                commentsList.prepend(commentDiv);
                
                // Clear input
                commentInput.value = '';
            }
        });
    }

    // Initialize ScrollReveal for animations
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '20px',
            duration: 1000,
            delay: 200,
            easing: 'ease-in-out'
        });
        
        sr.reveal('.article-card', { interval: 100 });
        sr.reveal('.main-article', { delay: 100 });
        sr.reveal('.comments-section', { delay: 200 });
    }
});


function logOut() {
    window.location.href = "authenticate/signin.html";
}