document.addEventListener('DOMContentLoaded', function() {
    // Toggle menu
    const menuButton = document.getElementById('menu-button');
    const menuDropdown = document.getElementById('menu-dropdown');

    if (menuButton && menuDropdown) {
        menuButton.addEventListener('click', function() {
            this.classList.toggle('active');
            menuDropdown.classList.toggle('active');
        });
    } else {
        console.error('Menu button or dropdown not found');
    }

    // Slider functionality
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    slides[0].classList.add('active');

    // Change slide every 3 seconds
    setInterval(showNextSlide, 3000);

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // clock
    function updateClock() {
        const now = new Date();
        
        const options = {
            timeZone: 'Asia/Kuala_Lumpur',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // 24-hour format
        };
        const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
        document.getElementById('clock').textContent = timeString;
    }

    // Update clock
    setInterval(updateClock, 1000);
    updateClock(); 
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const themeIcon = document.getElementById('theme-icon');

    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const natureCards = document.querySelectorAll('.nature-card');

    function checkVisibility() {
        natureCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    }

    // Initial check
    checkVisibility();

    // Check on scroll
    window.addEventListener('scroll', checkVisibility);

    // Optional: Check on resize
    window.addEventListener('resize', checkVisibility);
});


