
export interface Activity {
    slug: string
    title: string
    subtitle: string
    description: string
    heroImage: string
    galleryImages: string[] // Array of image paths
    overview: string
    highlights: string[]
    whatToExpect: string
    bestTime: string
    locations: string[]
}

export const activitiesData: Activity[] = [
    {
        slug: "game-drives",
        title: "Game Drives",
        subtitle: "The Quintessential African Safari Experience",
        description: "Explore the vast savannahs in 4x4 vehicles with pop-up roofs for 360° wildlife viewing.",
        heroImage: "/images/destinations/serengeti/serengeti-1.webp",
        galleryImages: [
            "/images/destinations/serengeti/serengeti-2.webp",
            "/images/destinations/tarangire/tarangire-1.webp",
            "/images/destinations/ngorongoro/ngorongoro-1.webp",
            "/images/destinations/lake-manyara/lake-manyara-1.webp"
        ],
        overview: "A game drive is the classic safari experience. You'll venture into Tanzania's national parks and reserves in a custom-designed 4x4 vehicle with a pop-up roof. This offers you 360-degree views of the landscape and wildlife, ensuring you don't miss a moment of the action. Guided by our expert driver-guides, who have intimate knowledge of animal behaviors and habitats, you'll search for the Big Five—lion, leopard, elephant, buffalo, and rhino—and witness the incredible diversity of life in the African bush.",
        highlights: [
            "Close encounters with the Big Five",
            "Expert tracking by professional guides",
            "Safe and comfortable 4x4 Land Cruisers",
            "Pop-up roofs for unobstructed photography",
            "Morning and afternoon drives when animals are most active",
            "Sundowners in the bush"
        ],
        whatToExpect: "Expect early mornings as this is when predators are often on the hunt. You'll spend hours traversing different terrains, from open plains to acacia woodlands. The vehicles are equipped with charging points, fridges for cold drinks, and binoculars. Your guide will communicate with other guides to locate elusive animals.",
        bestTime: "Game drives are excellent year-round. The dry season (June to October) is best for spotting wildlife as they congregate around water sources. The wet season (November to May) offers lush landscapes, newborn animals, and birdwatching.",
        locations: ["Serengeti National Park", "Ngorongoro Crater", "Tarangire National Park", "Lake Manyara National Park", "Ruaha National Park", "Nyerere National Park"]
    },
    {
        slug: "balloon-safaris",
        title: "Balloon Safaris",
        subtitle: "Float Silently Above the Savannah",
        description: "Float silently over the Serengeti at sunrise for a breathtaking bird's-eye perspective.",
        heroImage: "/images/experience/balloon safari/balloon-2.webp",
        galleryImages: [
            "/images/experience/balloon safari/balloon-3.webp",
            "/images/experience/balloon safari/balloon-1.webp",
            "/images/experience/balloon safari/balloon-2.webp"
        ],
        overview: "There is nothing quite like a hot air balloon safari over the Serengeti. Lifting off at dawn, you'll rise with the sun and float gently over the plains. The silence is profound, broken only by the occasional blast of the burners. From this unique vantage point, you can see the scale of the migration, spot hippos in the pools below, and watch the shadow of the balloon drift across the landscape. The flight lasts about an hour and concludes with a traditional champagne bush breakfast.",
        highlights: [
            "Breathtaking aerial views of the Serengeti",
            "Silence and tranquility of floating",
            "Sunrise over the African horizon",
            "Champagne bush breakfast upon landing",
            "Unique photographic opportunities"
        ],
        whatToExpect: "You'll be picked up from your lodge early in the morning and driven to the launch site. After a safety briefing, you'll board the basket. As you ascend, the sun rises, illuminating the vast plains. The flight is smooth and gentle. After landing, you'll celebrate with a champagne toast and a full English breakfast served in the middle of the bush.",
        bestTime: "Available year-round in the Serengeti, though flights are weather-dependent. The migration season (June-October for Northern/Western, January-March for Southern) offers spectacular views of the herds.",
        locations: ["Serengeti National Park", "Tarangire National Park", "Ruaha National Park"]
    },
    {
        slug: "walking-safaris",
        title: "Walking Safaris",
        subtitle: "Step into the Wild",
        description: "Step out of the vehicle and connect with nature on a guided bush walk.",
        heroImage: "/images/destinations/arusha/arusha-1.webp",
        galleryImages: [
            "/images/destinations/tarangire/tarangire-3.webp",
            "/images/destinations/arusha/arusha-1.webp",
            "/images/destinations/ruaha/ruaha-3.webp"
        ],
        overview: "A walking safari creates a completely different connection with the African bush. Without the hum of a vehicle, your senses are heightened. You hear the crunch of dry grass, smell the sage and dust, and see the smaller details often missed—tracks, insects, plants, and birdlife. Accompanied by an armed ranger and an expert guide, you'll learn about tracking, medicinal plants, and the intricate ecosystem.",
        highlights: [
            "Intimate connection with nature",
            "Learn to track animals and identify spoor",
            "Discover the 'Little Five' and medicinal plants",
            "Thrill of being on foot in big game country",
            "Guided by armed rangers for safety"
        ],
        whatToExpect: " walks are usually conducted in the early morning or late afternoon to avoid the heat. They are slow-paced and focused on education and appreciation rather than distance. You'll walk single file and remain quiet to avoid disturbing wildlife. It's a thrilling yet peaceful experience.",
        bestTime: "The dry season (June to October) is generally preferred as the grass is shorter, making visibility better and walking easier.",
        locations: ["Arusha National Park", "Tarangire National Park", "Ruaha National Park", "Nyerere National Park", "Serengeti (buffer zones)"]
    },
    {
        slug: "cultural-experiences",
        title: "Cultural Experiences",
        subtitle: "Connect with the People of Tanzania",
        description: "Meet the Maasai, Hadzabe, and Datoga tribes to learn about their ancient traditions.",
        heroImage: "/images/experience/culture/culture-1.webp",
        galleryImages: [
            "/images/experience/culture/culture-2.webp",
            "/images/experience/culture/culture-3.webp",
            "/images/experience/culture/culture-1.webp"
        ],
        overview: "Tanzania is home to over 120 distinct ethnic groups, each with its own rich history and traditions. A cultural safari allows you to meet these diverse people and gain insight into their lives. Visit a Maasai boma to see their mud huts and jumping dance, hunt with the Hadzabe bushmen (one of the last hunter-gatherer tribes), or watch the Datoga forge metal arrowheads.",
        highlights: [
            "Authentic interactions with local tribes",
            "Learn about traditional lifestyles and customs",
            "Participate in activities like beadwork or hunting",
            "Support local communities",
            "Gain a deeper understanding of Tanzania"
        ],
        whatToExpect: "These visits are respectful and educational. You'll be welcomed into villages and given the chance to interact, ask questions, and sometimes participate in daily chores. It's a humbling experience that highlights the resilience and warmth of the Tanzanian people.",
        bestTime: "Cultural tours can be done year-round. They are often combined with wildlife safaris.",
        locations: ["Ngorongoro Highlands (Maasai)", "Lake Eyasi (Hadzabe & Datoga)", "Mto wa Mbu (Cultural Market)"]
    },
    {
        slug: "boat-safaris",
        title: "Boat Safaris",
        subtitle: "Wildlife Viewing from the Water",
        description: "Drift along the Rufiji River in Nyerere or Lake Manyara for close encounters with hippos.",
        heroImage: "/images/experience/boat safari/boat-2.webp",
        galleryImages: [
            "/images/experience/boat safari/boat-1.webp",
            "/images/experience/boat safari/boat-3.webp"
        ],
        overview: "Swap the dust of the track for the cool breeze of the river. A boat safari offers a unique perspective on wildlife. As you drift silently along the water, you can get incredibly close to pods of hippos, basking crocodiles, and elephants coming to drink. The birdlife along the riverbanks is also spectacular, with kingfishers, herons, and fish eagles in abundance.",
        highlights: [
            "Close-up views of hippos and crocodiles",
            "Excellent birdwatching opportunities",
            "Scenic sunset cruises",
            "Different perspective on wildlife coming to drink",
            "Relaxing and peaceful atmosphere"
        ],
        whatToExpect: "Boat safaris can range from short 2-hour trips to full-day excursions. The boats are stable and comfortable, often with shade. It's a very relaxing way to see game, especially in the heat of the day.",
        bestTime: "The dry season is excellent as animals congregate at the river (June to October). However, the wet season offers lush scenery and higher water levels for exploring further.",
        locations: ["Nyerere National Park (Rufiji River)", "Arusha National Park (Momella Lakes - Canoeing)", "Lake Manyara (when water levels permit)"]
    },
    {
        slug: "mountain-climbing",
        title: "Mountain Climbing",
        subtitle: "Conquer the Roof of Africa",
        description: "Guided treks up Mount Kilimanjaro and Mount Meru for the ultimate adventure.",
        heroImage: "/images/destinations/kilimanjaro/kilimanjaro-12.webp",
        galleryImages: [
            "/images/destinations/kilimanjaro/kilimanjaro-1.webp",
            "/images/destinations/kilimanjaro/kilimanjaro-2.webp",
            "/images/destinations/kilimanjaro/kilimanjaro-7.webp",
            "/images/destinations/kilimanjaro/kilimanjaro-9.webp"
        ],
        overview: "Tanzania is home to Mount Kilimanjaro, the highest free-standing mountain in the world and one of the Seven Summits. Climbing this dormant volcano is a bucket-list adventure that takes you through five distinct climate zones, from rainforest to arctic ice. For those seeking a shorter but equally rewarding challenge, Mount Meru offers stunning views and excellent acclimatization opportunities.",
        highlights: [
            "Summit the highest peak in Africa (5,895m)",
            "Experience diverse ecological zones in one trek",
            "No technical climbing skills required for most routes",
            "Witness sunrise from the Roof of Africa",
            "Professional guides with high summit success rates"
        ],
        whatToExpect: "Climbing Kilimanjaro is a multi-day trek (typically 5-9 days) that requires physical endurance and mental fortitude. You will sleep in tents (or huts on the Marangu route) and be supported by a team of porters and cooks. The final ascent to the summit usually begins at midnight to reach the peak by sunrise.",
        bestTime: "The best times to climb are the dry seasons: January to March (warmer) and June to October (drier but colder). Avoid the rainy seasons (April-May and November).",
        locations: ["Mount Kilimanjaro National Park", "Arusha National Park (Mount Meru)"]
    },
    {
        slug: "beach-escapes",
        title: "Beach Escapes",
        subtitle: "Relax on Pristine Indian Ocean Shores",
        description: "Unwind on the white sands of Zanzibar, Mafia, or Pemba after your safari.",
        heroImage: "/images/destinations/zanzibar/zanzibar-1.webp",
        galleryImages: [
            "/images/destinations/zanzibar/zanzibar-1.webp",
            "/images/destinations/zanzibar/zanzibar-2.webp",
            "/images/destinations/zanzibar/zanzibar-3.webp",
            "/images/destinations/zanzibar/zanzibar-5.webp"
        ],
        overview: "After the excitement of the bush, there is no better way to conclude your Tanzanian adventure than with a beach escape. Tanzania's coastline and islands offer some of the best beaches in the world. Zanzibar, the 'Spice Island', combines historical charm with stunning resorts. Mafia Island offers world-class diving and swimming with whale sharks, while Pemba provides a secluded, untouched tropical paradise.",
        highlights: [
            "Pristine white sandy beaches and turquoise waters",
            "Rich Swahili culture and history (Stone Town)",
            "World-class diving and snorkeling reefs",
            "Spice tours and cultural excursions",
            "Fresh seafood and romantic sunset dhow cruises"
        ],
        whatToExpect: "Expect pure relaxation. Whether you choose a large resort or a boutique hotel, life here moves at a slower pace ('pole pole'). Enjoy water sports, explore historic towns, or simply lounge by the ocean. The water is warm year-round.",
        bestTime: "The coastal areas are warm and humid year-round. The dry seasons (June to October and December to February) are ideal for beach holidays. Scuba diving is excellent from September to March.",
        locations: ["Zanzibar Archipelago (Unguja)", "Mafia Island", "Pemba Island", "Pangani Coast"]
    }
]
