const packages = [
    {
        id: 1,
        days: '3days',
        activity: 'city',
        location: 'Kuala Lumpur',
        title: 'A vibrant capital city known for its iconic Petronas Twin Towers and diverse cultural experiences.',
        image: 'images/kl1_1024x683.jpg' 
    },
    {
        id: 2,
        days: '3days',
        activity: 'city',
        location: 'Penang',
        title: ' An island state celebrated for its UNESCO-listed George Town, rich street food, and beautiful beaches',
        image: 'images/penang1_1600x1066.jpg' 
    },
    {
        id: 3,
        days: '3days',
        activity: 'city',
        location: 'Ipoh',
        title: 'A historic city with colonial charm, famous for its delicious food and scenic limestone hills.',
        image: 'images/ipoh2_1200x674.jpg' 
    },
    
    {
        id: 4,
        days: '3days',
        activity: 'island',
        location: 'Pulau Perhentian',
        title: 'A pair of idyllic islands offering crystal-clear waters, white sandy beaches, and vibrant marine life.',
        image: 'images/perhentian_1600x1200.jpg' 
    },

    {
        id: 5,
        days: '3days',
        activity: 'island',
        location: 'Pulau Pangkor',
        title: 'A tranquil island with serene beaches and a laid-back atmosphere, perfect for relaxation and local cultural experiences.',
        image: 'images/pangkor.jpg' 
    },

    {
        id: 6,
        days: '3days',
        activity: 'nature',
        location: 'Sabah',
        title: '3D2N Wellness Package at Deluxe Chalet, Borneo',
        image: 'images/sabah1_931x565.jpg' 
    },

    {
        id: 7,
        days: '5days',
        activity: 'city',
        location: 'Penang',
        title: ' An island state celebrated for its UNESCO-listed George Town, rich street food, and beautiful beaches.',
        image: 'images/penang2_1920x1080.jpg'
    },
    {
        id: 8,
        days: '5days',
        activity: 'city',
        location: 'Kuala Lumpur',
        title: ' Kuala Lumpur Uncovered: A 5-Day Cultural and Scenic Journey',
        image: 'images/kl2batu_1060x704.jpg'
    },
    {
        id: 9,
        days: '5days',
        activity: 'island',
        location: 'Pulau Langkawi',
        title: 'An archipelago known for its stunning beaches, clear waters, and natural attractions like Langkawi Sky Bridge and Langkawi Cable Car',
        image: 'images/langkawi.jpg'
    },
    {
        id: 10,
        days: '5days',
        activity: 'island',
        location: 'Pulau Redang',
        title: 'A beautiful island famous for its pristine white-sand beaches, crystal-clear waters, and excellent snorkeling and diving spots',
        image: 'images/redang.jpg'
    },

    {
        id: 11,
        days: '5days',
        activity: 'island',
        location: 'Semporna, Sabah',
        title: 'A coastal town renowned for its access to spectacular diving sites in the nearby Sipadan and Mabul islands, and its vibrant Bajau Laut sea gypsy culture.',
        image: 'images/semporna.jpg'
    },

    {
        id: 12,
        days: '3days',
        activity: 'city',
        location: 'Kuching, Sarawak',
        title: 'A charming city in Sarawak with colonial architecture, a lively waterfront, and rich cultural heritage.',
        image: 'images/kuching.jpg'
    },

    {
        id: 13,
        days: '5days',
        activity: 'nature',
        location: 'Mount Kinabalu, Kudasang, Sabah',
        title: ' A scenic highland town in Sabah known for its cool climate, stunning views of Mount Kinabalu, and lush vegetable farms',
        image: 'images/kinabalu.jpg'
    },

    {
        id: 14,
        days: '8days',
        activity: 'city',
        location: 'Kuala Lumpur',
        title: ' The Ultimate KL Experience: 8 Days of Exploration and Excursions',
        image: 'images/kl3_1920x1080.jpg'
    },

    {
        id: 15,
        days: '8days',
        activity: 'city',
        location: 'Penang',
        title: 'An island state celebrated for its UNESCO-listed George Town, rich street food, and beautiful beaches.',
        image: 'images/penang3_1360x900.jpg' 
    },



    {
        id: 16,
        days: '3days',
        activity: 'city',
        location: 'Genting Highland',
        title: 'A highland resort known for its casinos, theme parks, and cool climate, situated on the peaks of the Titiwangsa Range',
        image: 'images/genting.jpg'
    },

    {
        id: 17,
        days: '3days',
        activity: 'nature',
        location: 'Cameron Highland',
        title: 'A cool, elevated region famous for its tea plantations, lush green scenery, and vibrant flower gardens.',
        image: 'images/cameron.jpg'
    },

    {
        id: 18,
        days: '8days',
        activity: 'island',
        location: 'Pulau Langkawi',
        title: 'An archipelago known for its stunning beaches, clear waters, and natural attractions like Langkawi Sky Bridge and Langkawi Cable Car',
        image: 'images/langkawi2.jpg'
    },

    {
        id: 19,
        days: '8days',
        activity: 'island',
        location: 'Semporna, Sabah',
        title: 'A coastal town renowned for its access to spectacular diving sites in the nearby Sipadan and Mabul islands, and its vibrant Bajau Laut sea gypsy culture.',
        image: 'images/semporna2.jpg'
    },

    {
        id: 20,
        days: '8days',
        activity: 'nature',
        location: 'Sabah',
        title: 'Known for its diverse natural landscapes including majestic mountains like Mount Kinabalu, extensive rainforests, and stunning marine environments.',
        image: 'images/kudasang.jpg'
    },

    {
        id: 21,
        days: '8days',
        activity: 'nature',
        location: 'Sarawak',
        title: 'Features rich tropical rainforests, impressive cave systems such as those in Mulu National Park, and a diverse range of wildlife and indigenous cultures.',
        image: 'images/sarawaknature.jpg'
    },

    {
        id: 22,
        days: '3days',
        activity: 'nature',
        location: 'Perak',
        title: 'Enjoy whitewater rafting, caving at Gua Tempurung, hiking in Royal Belum State Park, rock climbing in Ipoh, and zip-lining in Gopeng.',
        image: 'images/ipoh1_1366x768.jpg' 
    },

    {
        id: 23,
        days: '5days',
        activity: 'nature',
        location: 'Sarawak',
        title: 'Enjoy whitewater rafting, caving at Gua Tempurung, hiking in Royal Belum State Park, rock climbing in Ipoh, and zip-lining in Gopeng.',
        image: 'images/sarawaknature2.jpg' 
    }


];

const modalContents = {
    1: {
                title: "KL in a Flash: A 3-Days Urban Adventure",
                description: `
               <div style="display: flex; margin-bottom: 20px; align-items: flex-start;">
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/kl1_1024x683.jpg" alt="Petronas Twin Towers" width="600px" height="500px">
    </div>
    <div style="height: auto; margin-left: 20px;">
        <h3>Day 1: Explore the City Center</h3>
        <ul style="font-size: 22px;">
            <li><strong>Petronas Twin Towers</strong>: Start your day with a visit to the iconic Petronas Twin Towers. You can go up to the Skybridge and the observation deck for a stunning view of the city.</li>
            <li><strong>KLCC Park</strong>: After visiting the towers, take a stroll in the nearby KLCC Park, a green oasis in the heart of the city.</li>
            <li><strong>Aquaria KLCC</strong>: If you're interested in marine life, Aquaria KLCC, an underwater park, is a great place to visit.</li>
            <li><strong>Suria KLCC Mall</strong>: Have lunch and do some shopping in this upscale mall located at the base of the Petronas Towers.</li>
            <li><strong>Bukit Bintang</strong>: In the evening, head to Bukit Bintang, KL's shopping and entertainment district. Explore Jalan Alor for street food and vibrant nightlife.</li>
        </ul>
    </div>
</div>
<hr style="border: 2px solid #000;">
<div style="display: flex; margin-bottom: 20px; align-items: flex-start;">
    <div style="height: auto; margin-right: 20px;">
        <h3>Day 2: Cultural and Historical Sites</h3>
        <ul style="font-size: 22px;">
            <li><strong>Batu Caves</strong>: Start early and visit Batu Caves, a limestone hill with a series of caves and cave temples, famous for the giant statue of Lord Murugan.</li>
            <li><strong>National Museum (Muzium Negara)</strong>: Learn about Malaysia's rich history and culture.</li>
            <li><strong>Central Market (Pasar Seni)</strong>: A great place to shop for local handicrafts, art, and souvenirs.</li>
            <li><strong>Merdeka Square</strong>: Explore this historic square and see landmarks like the Sultan Abdul Samad Building and the KL City Gallery.</li>
            <li><strong>Chinatown (Petaling Street)</strong>: End your day in Chinatown, where you can explore the market, temples, and sample delicious Chinese-Malay food.</li>
        </ul>
    </div>
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/batucave.jpg" alt="Batu Caves" width="600px" height="500px">
    </div>
</div>
<hr style="border: 2px solid #000;">
<div style="display: flex; align-items: flex-start;">
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/tianhou.jpg" alt="Thean Hou Temple" width="600px" height="500px">
    </div>
    <div style="height: auto; margin-left: 20px;">
        <h3>Day 3: Nature and Relaxation</h3>
        <ul style="font-size: 22px;">
            <li><strong>Perdana Botanical Gardens</strong>: Spend your morning in this beautiful park with various attractions, including a butterfly park, bird park, and orchid garden.</li>
            <li><strong>Islamic Arts Museum Malaysia</strong>: A must-visit for anyone interested in Islamic art and architecture.</li>
            <li><strong>Thean Hou Temple</strong>: One of the oldest and largest temples in Southeast Asia, offering stunning views of the city.</li>
            <li><strong>KL Tower (Menara KL)</strong>: Visit KL Tower for another great view of the city, perhaps in the evening when the city lights up.</li>
            <li><strong>Dinner in the Sky</strong>: End your trip with a memorable dining experience at one of KL's rooftop restaurants or bars.</li>
        </ul>
    </div>
</div>
            `,
            imageUrl: "images/kl_skyline.jpg",
            customLayout: `
                <div style="display: flex; flex-direction: column;">
                    <h2 id="modalTitle"></h2>
                    <div id="modalDescription"></div>
                </div>
            `
        },

            2: {
                title: "Penang in Three Days: A Journey Through Heritage, Nature, and Flavors",
                description: `
               <div style="display: flex; margin-bottom: 20px; align-items: flex-start;">
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/georgetown.jpg" alt="George Town" width="600px" height="500px">
    </div>
    <div style="height: auto; margin-left: 20px;">
        <h3>Day 1: Explore George Town</h3>
        <ul style="font-size: 22px;">
            <li><strong>Cheong Fatt Tze Mansion (Blue Mansion)</strong>: Iconic heritage mansion with a blend of Eastern and Western architecture.</li>
            <li><strong>Pinang Peranakan Mansion</strong>: Museum showcasing the rich Peranakan culture.</li>
            <li><strong>Street Art Tour</strong>: Discover famous murals around George Town.</li>
            <li><strong>Clan Jetties</strong>: Historic waterfront Chinese settlements.</li>
            <li><strong>Kek Lok Si Temple</strong>: One of Southeast Asia’s largest Buddhist temples.</li>
            <li><strong>Gurney Drive</strong>: Popular spot for local street food.</li>
        </ul>
    </div>
</div>
<hr style="border: 2px solid #000;">
<div style="display: flex; margin-bottom: 20px; align-items: flex-start;">
    <div style="height: auto; margin-right: 20px;">
        <h3>Day 2: Nature and Relaxation</h3>
        <ul style="font-size: 22px;">
            <li><strong>Penang Hill</strong>: Scenic hill with panoramic views and nature trails.</li>
            <li><strong>The Habitat Penang Hill</strong>: Eco-park with canopy walks.</li>
            <li><strong>Penang Botanic Gardens</strong>: Lush gardens with diverse flora.</li>
            <li><strong>Batu Ferringhi Beach</strong>: Beachside relaxation and water sports.</li>
            <li><strong>Batu Ferringhi Night Market</strong>: Evening market with shopping and street food.</li>
        </ul>
    </div>
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/penanghill.jpg" alt="Penang Hill" width="600px" height="500px">
    </div>
</div>
<hr style="border: 2px solid #000;">
<div style="display: flex; align-items: flex-start;">
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/entopia.jpg" alt="Entopia by Penang Butterfly Farm" width="600px" height="500px">
    </div>
    <div style="height: auto; margin-left: 20px;">
        <h3>Day 3: Cultural and Scenic Highlights</h3>
        <ul style="font-size: 22px;">
            <li><strong>Entopia by Penang Butterfly Farm</strong>: Tropical butterfly garden.</li>
            <li><strong>Tropical Spice Garden</strong>: Explore diverse spices and tropical plants.</li>
            <li><strong>Balik Pulau</strong>: Rural Penang with traditional farms and scenic drives.</li>
            <li><strong>Teluk Bahang Dam and Penang National Park</strong>: Nature walks and scenic views.</li>
        </ul>
    </div>
</div>

            `,
            imageUrl: "images/kl_skyline.jpg",
            customLayout: `
                <div style="display: flex; flex-direction: column;">
                    <h2 id="modalTitle"></h2>
                    <div id="modalDescription"></div>
                </div>
                `
            },

            3: {
                title: "Ipoh Trip: A Journey Through Heritage, Nature, and Culinary Delights",
                description: `
               <div style="display: flex; margin-bottom: 20px; align-items: flex-start;">
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/ipoh_old_town.jpg" alt="Ipoh Old Town" width="600px" height="500px">
    </div>
    <div style="height: auto; margin-left: 20px;">
        <h3>Day 1: Explore Ipoh’s Heritage and Street Art</h3>
        <ul style="font-size: 22px;">
            <li><strong>Ipoh Old Town</strong>: Start your day by exploring the historic streets of Ipoh Old Town, known for its colonial-era buildings and charming cafes.</li>
            <li><strong>Ipoh Street Art</strong>: Discover the famous murals scattered around the Old Town, depicting the local culture and heritage.</li>
            <li><strong>Concubine Lane</strong>: Wander through this narrow alley filled with quirky shops, cafes, and street vendors.</li>
            <li><strong>Han Chin Pet Soo Museum</strong>: Visit this museum to learn about the history of tin mining and the Hakka community in Ipoh.</li>
            <li><strong>Ipoh Railway Station</strong>: End your day at this iconic landmark, often referred to as the "Taj Mahal of Ipoh" for its stunning architecture.</li>
        </ul>
    </div>
</div>
<hr style="border: 2px solid #000;">
<div style="display: flex; margin-bottom: 20px; align-items: flex-start;">
    <div style="height: auto; margin-right: 20px;">
        <h3>Day 2: Nature and Caves Exploration</h3>
        <ul style="font-size: 22px;">
            <li><strong>Kek Lok Tong Cave Temple</strong>: Begin your day with a visit to this stunning cave temple, set within a limestone hill and surrounded by tranquil gardens.</li>
            <li><strong>Sam Poh Tong Temple</strong>: Explore this famous cave temple, known for its intricate statues and beautiful pond filled with turtles.</li>
            <li><strong>Gua Tempurung</strong>: Take an adventurous trip to this impressive limestone cave, one of the largest in Peninsular Malaysia, offering guided tours through its magnificent formations.</li>
            <li><strong>Gunung Lang Recreational Park</strong>: Relax in this scenic park, featuring a beautiful lake surrounded by limestone hills, with boat rides and a small zoo.</li>
        </ul>
    </div>
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/kek_lok_tong.jpg" alt="Kek Lok Tong Cave Temple" width="600px" height="500px">
    </div>
</div>
<hr style="border: 2px solid #000;">
<div style="display: flex; align-items: flex-start;">
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/kellie.jpg" alt="Ipoh Food" width="600px" height="500px">
    </div>
    <div style="height: auto; margin-left: 20px;">
        <h3>Day 3: Culinary Delights and Local Markets</h3>
        <ul style="font-size: 22px;">
            
            <li><strong>Dim Sum Breakfast</strong>: Enjoy a traditional dim sum breakfast at a local restaurant, a popular morning ritual in Ipoh.</li>
            <li><strong>Ipoh White Coffee</strong>: Start your day with a cup of the famous Ipoh White Coffee at one of the traditional coffee shops in Old Town.</li>
            <li><strong>Kellie's Castle</strong>: Start your day with a trip to Kellie's Castle, a historic, unfinished mansion located in Batu Gajah, just a short drive from Ipoh. Explore the mysterious corridors and enjoy the scenic views from the rooftop.</li>
            <li><strong>Pasir Pinji</strong>: Visit this neighborhood known for its local markets and street food, where you can try various Ipoh specialties like chee cheong fun and caramel custard.</li>
            <li><strong>Perak Tong Cave Temple</strong>: Explore this beautiful cave temple, known for its impressive Buddha statues and panoramic views of Ipoh from the top of the hill.</li>
            
        </ul>
    </div>
</div>

            `,
            imageUrl: "images/kl_skyline.jpg",
            customLayout: `
                <div style="display: flex; flex-direction: column;">
                    <h2 id="modalTitle"></h2>
                    <div id="modalDescription"></div>
                </div>
            `
        },

        4: {
            title: "Pulau Perhentian Adventure: 3 Days of Sun, Sea, and Serenity",
            description: `
           <div style="display: flex; margin-bottom: 20px; align-items: flex-start;">
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/perhentian_beach.jpg" alt="Perhentian Beach" width="600px" height="500px">
    </div>
    <div style="height: auto; margin-left: 20px;">
        <h3>Day 1: Arrival and Beach Relaxation</h3>
        <ul style="font-size: 22px;">
            <li><strong>Long Beach (Pulau Perhentian Kecil)</strong>: Start your trip with a relaxing day on Long Beach, known for its vibrant atmosphere and clear waters. Enjoy swimming, sunbathing, and beach activities.</li>
            <li><strong>Coral Bay</strong>: Explore Coral Bay, a quieter spot perfect for snorkeling and enjoying the sunset.</li>
            <li><strong>Beachfront Dining</strong>: End your day with a beachfront dinner, enjoying fresh seafood and the serene ambiance.</li>
        </ul>
    </div>
</div>
<hr style="border: 2px solid #000;">
<div style="display: flex; margin-bottom: 20px; align-items: flex-start;">
    <div style="height: auto; margin-right: 20px;">
        <h3>Day 2: Snorkeling and Island Exploration</h3>
        <ul style="font-size: 22px;">
            <li><strong>Snorkeling Trip</strong>: Take a guided snorkeling tour to explore the vibrant coral reefs and marine life around Pulau Perhentian, including popular spots like Shark Point and Turtle Bay.</li>
            <li><strong>Perhentian Island Hopping</strong>: Visit nearby islands and secluded beaches, such as Rawa Island and Tokong Burung, for more snorkeling and relaxation.</li>
            <li><strong>Rainforest Walk</strong>: Explore the island’s lush interior with a guided rainforest walk, spotting local wildlife and enjoying the natural beauty.</li>
            <li><strong>Nightlife at Long Beach</strong>: In the evening, enjoy the lively nightlife on Long Beach, with beach bars, fire shows, and music.</li>
        </ul>
    </div>
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/perhentian_snorkeling.jpg" alt="Snorkeling in Perhentian" width="600px" height="500px">
    </div>
</div>
<hr style="border: 2px solid #000;">
<div style="display: flex; align-items: flex-start;">
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/perhentian_turtle.jpg" alt="Turtle Sanctuary" width="600px" height="500px">
    </div>
    <div style="height: auto; margin-left: 20px;">
        <h3>Day 3: Marine Conservation and Relaxation</h3>
        <ul style="font-size: 22px;">
            <li><strong>Turtle Sanctuary</strong>: Visit the Turtle Sanctuary to learn about the conservation efforts and, if you're lucky, witness baby turtles being released into the sea.</li>
            <li><strong>D’Lagoon</strong>: Spend time at D’Lagoon, a secluded area ideal for swimming, snorkeling, and relaxing in a peaceful environment.</li>
            <li><strong>Relaxation and Departure</strong>: Enjoy your final hours on the island by relaxing on the beach or taking a last swim before preparing for departure.</li>
        </ul>
    </div>
</div>

`,
        imageUrl: "images/kl_skyline.jpg",
        customLayout: `
            <div style="display: flex; flex-direction: column;">
                <h2 id="modalTitle"></h2>
                <div id="modalDescription"></div>
            </div>
            `
        },
            5: {
                title: "Pulau Pangkor Trip: Serenity and Adventure in 3 Days",
                description: `
               <div style="display: flex; margin-bottom: 20px; align-items: flex-start;">
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/pangkor_beach.jpg" alt="Pangkor Beach" width="600px" height="500px">
    </div>
    <div style="height: auto; margin-left: 20px;">
        <h3>Day 1: Relax and Unwind</h3>
        <ul style="font-size: 22px;">
            <li><strong>Pangkor Beach</strong>: Start your trip with a relaxing day on the pristine beaches of Pulau Pangkor, enjoying the sun and crystal-clear waters.</li>
            <li><strong>Nipah Bay</strong>: A popular beach area with opportunities for snorkeling and kayaking.</li>
            <li><strong>Coral Bay</strong>: Enjoy a quiet spot for swimming and snorkeling among vibrant marine life.</li>
            <li><strong>Sunset at Teluk Nipah</strong>: End your day by watching a stunning sunset from the beach.</li>
        </ul>
    </div>
</div>
<hr style="border: 2px solid #000;">
<div style="display: flex; margin-bottom: 20px; align-items: flex-start;">
    <div style="height: auto; margin-right: 20px;">
        <h3>Day 2: Explore the Island’s Heritage and Nature</h3>
        <ul style="font-size: 22px;">
            <li><strong>Fu Lin Kong Temple</strong>: Visit this Chinese temple known for its miniature replica of the Great Wall of China and beautiful gardens.</li>
            <li><strong>Dutch Fort (Kota Belanda)</strong>: Explore the remnants of a 17th-century fort, a historical landmark from the Dutch colonial era.</li>
            <li><strong>Pangkor Forest Reserve</strong>: Take a nature walk in the forest reserve, home to various species of flora and fauna.</li>
            <li><strong>Pulau Giam</strong>: Take a boat trip to this small, uninhabited island near Pangkor, ideal for snorkeling and exploring.</li>
        </ul>
    </div>
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/pulaugiam.jpg" alt="Fu Lin Kong Temple" width="600px" height="500px">
    </div>
</div>
<hr style="border: 2px solid #000;">
<div style="display: flex; align-items: flex-start;">
    <div style="flex-shrink: 0; margin-top:40px;">
        <img src="images/snorkeling.jpg" alt="Snorkeling in Pangkor" width="600px" height="500px">
    </div>
    <div style="height: auto; margin-left: 20px;">
        <h3>Day 3: Water Activities and Island Hopping</h3>
        <ul style="font-size: 22px;">
            <li><strong>Snorkeling and Diving</strong>: Spend your morning exploring the underwater world around Pulau Pangkor, with plenty of snorkeling and diving spots available.</li>
            <li><strong>Island Hopping</strong>: Take a boat tour to explore nearby islands like Pulau Mentagor and Pulau Sembilan, known for their beautiful beaches and clear waters.</li>
            <li><strong>Fishing Village Tour</strong>: Visit a local fishing village to experience the traditional lifestyle and buy fresh seafood.</li>
            <li><strong>Pangkor Laut Resort</strong>: End your trip with a visit to this luxurious resort for a relaxing afternoon, or enjoy a spa treatment.</li>
        </ul>
    </div>
</div>
 `,
            imageUrl: "images/kl_skyline.jpg",
            customLayout: `
                <div style="display: flex; flex-direction: column;">
                    <h2 id="modalTitle"></h2>
                    <div id="modalDescription"></div>
                </div>
                `
            }
};


function displayPackages(packages) {
    const packagesContainer = document.getElementById('packages');
    packagesContainer.innerHTML = '';
    packages.forEach(pkg => {
        const packageElement = document.createElement('div');
        packageElement.classList.add('package');
        packageElement.innerHTML = `
            <img src="${pkg.image}" alt="${pkg.title}">
            <h3>${pkg.location}</h3>
            <p>${pkg.title}</p>
        `;
        packageElement.addEventListener('click', () => {
            openModal(pkg.id);
        });
        packagesContainer.appendChild(packageElement);
    });
}

        function filterPackages() {
            const days = document.getElementById('days').value;
            const activities = document.getElementById('activities').value;
            const filteredPackages = packages.filter(pkg => {
                return (days === 'all' || pkg.days === days) &&
                       (activities === 'all' || pkg.activity === activities);
            });
            displayPackages(filteredPackages);
        }

      function openModal(id) {
    const modalData = modalContents[id];
    if (modalData) {
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = `
            <span class="close" onclick="closeModal()">&times;</span>
            ${modalData.customLayout}
        `;
        document.getElementById('modalTitle').textContent = modalData.title;
        document.getElementById('modalDescription').innerHTML = modalData.description;

        document.getElementById('packageModal').style.display = "block";
    } else {
        console.error(`No modal content found for id: ${id}`);
    }
}
        function closeModal() {
            document.getElementById('packageModal').style.display = "none";
        }

        window.onload = () => {
            displayPackages(packages);
        };