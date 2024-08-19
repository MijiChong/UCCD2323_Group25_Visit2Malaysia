let slideIndices = [1, 1, 1];

const captions1 = [
    "",
    "Ah Leng Char Kuey Teow",
    "850 Char Kuey Teow",
    "Wei Xiang Duck Egg Charcoal Char Koay Teow"
];
const captions2 = [
    "",
    "Hing Kee Bakuteh Jalan Kepong Aeon Metro Prima",
    "Ka Ka Bak Kut Teh",
    "Pan Heong Bak Kut Teh"
];
const captions3 = [
    "",
    "Canning Dim Sum",
    "Chooi Yue Dim Sum Ipoh",
    "Restoran Yoke Fook Moon Sdn Bhd"
];

const location1 = [
    "",
    "📍 Lorong Zoo 6, Ayer Itam, 11500, George Town, Penang",
    "📍 Pasar Lebuh Cecil, 40-48, Lebuh Cecil, 10300 George Town, Penang",
    "📍 12, Tingkat Bunga Kekwa, Taman Kekwa, 14000 Bukit Mertajam, Pulau Pinang"
];
const location2 = [
    "",
    "📍 121, Jln Kepong, Metro Prima, 52100 Kuala Lumpur",
    "📍 Jalan 1/32a, Kepong Baru, 52100 Kuala Lumpur",
    "📍 31A, Jln Kepong, Metro Prima, 52000 Kuala Lumpur"
];
const location3 = [
    "",
    "📍 1, Lebuh Cecil Rae, Taman Canning, 31400 Ipoh, Perak",
    "📍 J2, 4 & 6, Tingkat Taman Ipoh 12, Taman Ipoh Selatan, 31400 Ipoh, Perak",
    "📍 65, 67 & 69, Jalan Leong Sin Nam, Kampung Jawa, 30300 Ipoh, Perak"
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