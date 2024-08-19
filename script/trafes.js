document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {

    const backgroundMusic = document.getElementById('backgroundMusic');
    const muteButton = document.getElementById('musicButton');

    window.addEventListener('click', function () {
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(error => {
                console.log('Autoplay failed:', error);
            });
        }
    });

    musicButton.addEventListener('click', function () {
        if (backgroundMusic.muted) {
            backgroundMusic.muted = false;
            musicButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            backgroundMusic.muted = true;
            musicButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
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

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.trafes-section');

    const observerOptions = {
        threshold: 0.1 // Adjust this to control when the animation starts
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target); // Optional: stop observing after animation triggers
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('section-hidden'); // Hide section initially
        observer.observe(section); // Observe each section
    });
});


