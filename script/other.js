let slideIndices = [1, 1, 1, 1];

const captions1 = [
    "",
    "Tan Soon Kui kolo mee stall",
    "Kim Seng Cafe",
    "Kuching Kolok Mee Cafe"
];
const captions2 = [
    "",
    "KING LAKSA SARAWAK (ICOM SQUARE)",
    "Mui Xin Laksa",
    "Poh Lam Laksa"
];
const captions3 = [
    "",
    "Sinalau Bakas",
    "Sinalau Bakas Himbaan Bongol",
    "Sinalau Mogiding (Sinalau Bakas)"
];
const captions4 = [
    "",
    "How Kee Fish Noddles",
    "Kedai Cheng Wah",
    "Gaya Fish Noodle"
];

const location1 = [
    "",
    "📍 Tan Soon Kui kolo mee stall, Jln Swee Khim, 98000 Miri, Sarawak",
    "📍 Kim Seng Cafe, Jalan Cherry, 98000 Miri, Sarawak",
    "📍 Lot 967, S/Lot 2422 Ground Floor Kuching Kolok Mee Cafe, Taman Tunku, 98000 Miri, Sarawak"
];
const location2 = [
    "",
    "📍 Icom Square, Ground Floor, Unit A101 & Unit 102, Block A, Jalan Pending, 93450 Kuching, Sarawak",
    "📍 Mui Xin Laksa @ Lau Ya Keng, 23, Carpenter St, 93000 Kuching, Sarawak",
    "📍 Poh Lam Laksa 寶蘭叻沙@Chong Choon Cafe, 331, Jalan Abell, 93100 Kuching, Sarawak"
];
const location3 = [
    "",
    "📍 Sinalau Bakas, 89150 Tuaran, Sabah",
    "📍 Sinalau Bakas Himbaan Bongol, 89150 Tuaran, Sabah",
    "📍 Sinalau Mogiding (Sinalau Bakas), 606, 89200 Tuaran, Sabah"
];
const location4 = [
    "",
    "📍 How Kee Fish Noddles, 89500 Penampang, Sabah",
    "📍 Lot 8 Block A, Penampang, Taman Che Mei, 88848 Kota Kinabalu, Sabah",
    "📍 129, Jalan Gaya, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah"
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
    else if (sliderNumber == 4) {
        captionText.innerHTML = captions4[slideIndices[sliderNumber - 1] - 1];
        locationText.innerText = location4[slideIndices[sliderNumber -1] - 1];
    }
    
}

// Initialize all sliders
showSlides(1, 1);
showSlides(2, 1);
showSlides(3, 1);
showSlides(4, 1);