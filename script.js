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
