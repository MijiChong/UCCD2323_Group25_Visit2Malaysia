document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.getElementById('themeButton');

    // Check the user's theme preference from local storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeButton.innerHTML = currentTheme === 'dark-mode' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }

    themeButton.addEventListener('click', function () {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            themeButton.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'light-mode'); // Store user preference in local storage
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            themeButton.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'dark-mode'); // Store user preference in local storage
        }
    });

    const backToTopButton = document.getElementById('backToTop');

    // Show the button
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Smooth scroll
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

