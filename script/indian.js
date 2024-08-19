let slideIndices = [1, 1, 1];

const captions1 = [
    "",
    "Rempah Ratus - Banana Leaf Cafe with South Indian Cuisine",
    "The Garden Banana Leaf",
    "Anamika Spice Kitchen"
];
const captions2 = [
    "",
    "Nasi Kandar Bestari",
    "Restoran Nasi Kandar Pelita",
    "Restoran Nasi Kandar Ibramsha Sdn. Bhd."
];
const captions3 = [
    "",
    "Al Hassan Biryani House",
    "Nasi Briyani Faridah",
    "Bhai Biryani Ipoh"
];

const location1 = [
    "",
    "📍 Lot 77, Jalan Nagor, Nagore Square, 10050 George Town, Pulau Pinang",
    "📍 50, Jalan Free School, 11600 George Town, Pulau Pinang",
    "📍 8, Lintang Burma, Pulau Tikus, 10350 George Town, Pulau Pinang"
];
const location2 = [
    "",
    "📍 A3-G1-01, Ground Floor, Block A3, 1, Jln Dutamas 1, Solaris Dutamas, 50480 Kuala Lumpur, Federal Territory of Kuala Lumpur",
    "📍 113, Jln Ampang, Kuala Lumpur, 50450 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    "📍 68, Jalan Tuanku Abdul Rahman, City Centre, 50100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
];
const location3 = [
    "",
    "📍 124, Persiaran SIBC 5, Bandar Seri Iskandar, 32600 Bota, Perak",
    "📍 72, Jalan Labrooy, merdeka garden, 30100 Ipoh, Perak",
    "📍 16, Jalan Lapangan Terbang, Off, Jalan Sultan Nazrin Shah, 31350 Ipoh, Perak"
];

function plusSlides(sliderNumber, n) {
    showSlides(sliderNumber, slideIndices[sliderNumber - 1] += n);
}

function currentSlide(sliderNumber, n) {
    showSlides(sliderNumber, slideIndices[sliderNumber - 1] = n);
}

function showSlides(sliderNumber, n) {
    let i;
    let slides = document.getElementsByClassName(`mySlides${sliderNumber}`);
    let dots = document.querySelectorAll(`.dot-container${sliderNumber} .dot`);
    let captionText = document.getElementById(`caption${sliderNumber}`);
    let locationText = document.getElementById(`location${sliderNumber}`);

    if (n > slides.length) {
        slideIndices[sliderNumber - 1] = 1;
    }
    if (n < 1) {
        slideIndices[sliderNumber - 1] = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndices[sliderNumber - 1] - 1].style.display = "block";
    dots[slideIndices[sliderNumber - 1] - 1].className += " active";

    // Update the caption based on the current slide
   
    if (sliderNumber == 1) {
        captionText.innerHTML = captions1[slideIndices[sliderNumber - 1] - 1];
        locationText.innerText = location1[slideIndices[sliderNumber -1] - 1];
    }
    else if (sliderNumber == 2) {
        captionText.innerHTML = captions2[slideIndices[sliderNumber - 1] - 1];
        locationText.innerText = location2[slideIndices[sliderNumber -1] - 1];
    }
    else if (sliderNumber == 3) {
        captionText.innerHTML = captions3[slideIndices[sliderNumber - 1] - 1];
        locationText.innerText = location3[slideIndices[sliderNumber -1] - 1];
    }
    
}

// Initialize all sliders
showSlides(1, 1);
showSlides(2, 1);
showSlides(3, 1);