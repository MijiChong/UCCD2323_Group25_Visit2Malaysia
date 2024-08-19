let slideIndex = 0;
   showSlides();
              
   function showSlides() {
   let i;
  let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";   }
     slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
     for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); }
     slides[slideIndex-1].style.display = "block";  
     dots[slideIndex-1].className += " active";
     setTimeout(showSlides, 7000); // Change image every 5 seconds}
     }   
  function plusSlides(n) {
   slideIndex += n - 1;
   showSlides(); }
  function currentSlide(n) {
   slideIndex = n - 1;
   showSlides(); }

   document.addEventListener('DOMContentLoaded', () => {
      const fadeInElements = document.querySelectorAll('.fade-in');
  
      const options = {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 10% of the element is visible
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Stop observing once animation is added
          }
        });
      }, options);
  
      fadeInElements.forEach(element => {
        observer.observe(element);
      });
    });

    function showPopup() {
      document.getElementById('popup').style.display = 'flex';
  }
  
  function closePopup() {
      document.getElementById('popup').style.display = 'none';
  }
  
  function acceptAction() {
      // Redirect to another page
      window.location.href = "subscribe.html"; // Replace with your desired URL
  }

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(showPopup, 2000);
    const fadeIns = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Adjust when the element comes into view
    };

    const appearOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, appearOptions);

    fadeIns.forEach(fadeIn => {
        appearOnScroll.observe(fadeIn);
    });
});

// Toggle menu for responsive header
function toggleMenu() {
  const menu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
}