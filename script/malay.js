let slideIndices = [1, 1, 1];

        const captions1 = [
            "",
            "Siti Li Dining",
            "Nasi Lemak Mek Sambal Warisan",
            "Nasi Lemak CT Garden"
        ];
        const captions2 = [
            "",
            "Lieniey Nasi Kerabu Tumis",
            "Kak Ma Nasi Kerabu",
            "Rohani Restoran"
        ];
        const captions3 = [
            "",
            "Restoran Gulai 7 Kawah",
            "Restoran Pak Lang Gulai Panas",
            "Jem's Gulai Batang Pisang"
        ];

        const location1 = [
            "",
            "📍 15, Jalan Setiakasih 5, Bukit Damansara, 50490 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
            "📍 G-12, G-12, Jalan Dagang Besar, Taman Dagang, 68000 Kuala Lumpur, Selangor",
            "📍 Jalan Datuk Abdul Razak, Kampung Baru, 50300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
        ];
        const location2 = [
            "",
            "📍 Jalan Abdul Kadir Adabi, 15200 Kota Bharu, Kelantan",
            "📍 Jalan Hospital, Kampung Belukar, 15000 Kota Bharu, Kelantan",
            "📍 1103, Jalan Long Yunus, 15200 Kota Bharu, Kelantan"
        ];
        const location3 = [
            "",
            "📍 2, K2, Pantai Johor, 05150 Alor Setar, Kedah",
            "📍 No.10, Bangunan MPSPK, Jalan Kuala Ketil, 08000 Sungai Petani, Kedah",
            "📍 3, Jalan Padang Matsirat, Kuah, 07000 Langkawi, Kedah"
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