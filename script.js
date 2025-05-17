// script.js

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-input');
    const posts = document.querySelectorAll('#recent-posts article');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();

        posts.forEach(post => {
            const title = post.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});
