// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // Check for saved dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save the dark mode preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});


// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const postBtn = document.querySelector('.post-btn');
    const modal = document.getElementById('create-post-modal');
    const closeBtn = document.querySelector('.close-btn');
    const postSubmit = document.getElementById('post-submit');

    postBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    postSubmit.addEventListener('click', () => {
        const postContent = document.getElementById('post-content').value;
        if (postContent.trim() === '') {
            alert('Post content cannot be empty');
            return;
        }
        alert('Post created!');
        document.getElementById('post-content').value = '';
        modal.style.display = 'none';
    });
});