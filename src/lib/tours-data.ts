export interface Tour {
    id: string;
    title: string;
    slug: string;
    image: string;
    duration: string;
    // New fields for matching Kili design
    difficulty?: string;
    distance?: string;
    successRate?: string;
    location?: string;

    // Detailed itinerary fields
    bestTime?: string;
    accommodationDetails?: string;
    minAge?: string;
    maxGroupSize?: number;
    activityLevel?: string; // e.g. "Moderate", "Challenging"
    gettingThere?: string;

    category?: string;
    gallery?: { src: string; alt: string }[];
    highlights: string[];
    description: string;
    itinerary: {
        day: number;
        title: string;
        description: string;
        accommodation?: string;
        meals?: string;
        distance?: string;
        time?: string;
        elevation?: string;
    }[];
    inclusions: string[];
    exclusions: string[];
    packingList?: string[];
}

export const tours: Tour[] = [
    {
        id: "1",
        title: "7-Day Machame Route",
        slug: "7-day-machame-route",
        image: "/images/destinations/kilimanjaro/kilimanjaro-12.webp",
        duration: "7 Days",

        difficulty: "Difficult",
        distance: "62 km",
        successRate: "94%",
        location: "Mount Kilimanjaro",
        bestTime: "Late June to October, and late December to early March are the best times to climb. Avoid the rainy season in April and May.",
        accommodationDetails: "Sleep in designated campsites in high-quality mountain tents. All camping equipment including sleeping tents, dining tents, and private toilet tents are provided and set up by our team.",
        minAge: "10 years",
        maxGroupSize: 12,
        activityLevel: "Challenging",
        gettingThere: "Fly into Kilimanjaro International Airport (JRO). Failing that, fly into Dar es Salaam (DAR) or Nairobi (NBO) and catch a connecting flight to JRO. We provide transfer from JRO to your hotel in Moshi.",
        highlights: ["Scenic 'Whiskey' Route", "Great Acclimatization", "Lava Tower", "Barranco Wall"],
        description: "The Machame Route is known as the 'Whiskey' route, offering a tougher challenge than the Marangu route but rewarding climbers with better scenery and higher success rates due to better acclimatization opportunities.",
        itinerary: [
            {
                day: 1,
                title: "Machame Gate (1,640m) to Machame Camp (2,850m)",
                description: "Drive to Machame Gate, registration, and trek through the rainforest. The path can be muddy and slippery. This is your first night sleeping on the mountain.",
                accommodation: "Machame Camp (Tented)",
                meals: "Lunch, Dinner",
                distance: "11 km",
                time: "5-7 hours",
                elevation: "1,640m to 2,850m"
            },
            {
                day: 2,
                title: "Machame Camp (2,850m) to Shira Cave Camp (3,810m)",
                description: "Trek out of the rainforest and onto the Shira Plateau. You will leave the glades of the rainforest and continue on an ascending path, crossing the valley along a step rocky ridge.",
                accommodation: "Shira Cave Camp (Tented)",
                meals: "Breakfast, Lunch, Dinner",
                distance: "5 km",
                time: "4-6 hours",
                elevation: "2,850m to 3,810m"
            },
            {
                day: 3,
                title: "Shira Cave (3,810m) to Lava Tower (4,630m) to Barranco (3,976m)",
                description: "This is a key acclimatization day. We trek high to Lava Tower for lunch and then descend to Barranco Camp to sleep. This follows the 'climb high, sleep low' principle.",
                accommodation: "Barranco Camp (Tented)",
                meals: "Breakfast, Lunch, Dinner",
                distance: "10 km",
                time: "6-8 hours",
                elevation: "3,810m to 3,976m (via 4,630m)"
            },
            {
                day: 4,
                title: "Barranco Camp (3,976m) to Karanga Camp (3,995m)",
                description: "Climb the famous Barranco Wall - a non-technical scramble that looks steeper than it is. Then traverse ridges and valleys to Karanga Camp.",
                accommodation: "Karanga Camp (Tented)",
                meals: "Breakfast, Lunch, Dinner",
                distance: "5 km",
                time: "4-5 hours",
                elevation: "3,976m to 3,995m"
            },
            {
                day: 5,
                title: "Karanga Camp (3,995m) to Barafu Camp (4,673m)",
                description: "Short but steep trek to base camp. The landscape keeps getting more barren. Early dinner and sleep to prepare for the midnight summit push.",
                accommodation: "Barafu Camp (Tented)",
                meals: "Breakfast, Lunch, Dinner",
                distance: "4 km",
                time: "4-5 hours",
                elevation: "3,995m to 4,673m"
            },
            {
                day: 6,
                title: "Barafu to Uhuru Peak (5,895m) to Mweka Camp (3,100m)",
                description: "Summit night! Wake up at 11pm, start trekking by midnight. Reach Stella Point for sunrise and push to Uhuru Peak. Descend immediately to Mweka.",
                accommodation: "Mweka Camp (Tented)",
                meals: "Breakfast, Lunch, Dinner",
                distance: "5 km up / 12 km down",
                time: "7-8 hours up / 4-6 hours down",
                elevation: "4,673m to 5,895m down to 3,100m"
            },
            {
                day: 7,
                title: "Mweka Camp (3,100m) to Mweka Gate (1,640m)",
                description: "Final descent through the lush forest. Retrieve your summit certificates at the gate and say goodbye to your crew.",
                accommodation: "Hotel in Moshi",
                meals: "Breakfast, Lunch",
                distance: "10 km",
                time: "3-4 hours",
                elevation: "3,100m to 1,640m"
            }
        ],
        inclusions: ["Park fees", "Camping fees", "Rescue fees", "Professional guides", "Porters and cook", "All meals on mountain", "Camping equipment"],
        exclusions: ["Flights", "Visas", "Tips for crew", "Personal gear"],
        packingList: [
            "Waterproof hiking boots",
            "Thermal base layers (top & bottom)",
            "Down jacket (rated to -10°C)",
            "Waterproof jacket and trousers (Gore-Tex recommended)",
            "4-season sleeping bag",
            "Headlamp with spare batteries",
            "Trekking poles",
            "Daypack (30-40L) with rain cover",
            "Water hydration system (3L capacity)",
            "Sun hat, sunglasses, and high SPF sunscreen"
        ]
    },
    {
        id: "2",
        title: "5-Day Big Five Safari",
        slug: "5-day-big-five-safari",
        image: "/images/destinations/serengeti/serengeti-18.webp",
        duration: "5 Days",

        location: "Northern Circuit, Serengeti, Ngorongoro",
        category: "Classic Wildlife Safari",
        gallery: [
            { src: "/images/destinations/serengeti/serengeti-2.webp", alt: "Lion in Serengeti" },
            { src: "/images/destinations/serengeti/serengeti-15.webp", alt: "Elephants in Tarangire" },
            { src: "/images/destinations/ngorongoro/ngorongoro-1.webp", alt: "Ngorongoro Crater View" },
            { src: "/images/destinations/serengeti/serengeti-34.webp", alt: "Acacia Trees at Sunset" },
            { src: "/images/destinations/serengeti/serengeti-19.webp", alt: "Leopard in Serengeti" },
            { src: "/images/destinations/ngorongoro/ngorongoro-12.webp", alt: "Rhino in the Crater" }
        ],
        difficulty: "Easy to Moderate",
        successRate: "100% Sightings",
        bestTime: "June to October for the dry season and best wildlife viewing. January to March for the calving season in Southern Serengeti.",
        accommodationDetails: "Stay in a mix of comfortable mid-range lodges and tented camps. Experience the sounds of nature without sacrificing comfort. Luxury upgrades available.",
        minAge: "5 years",
        maxGroupSize: 6,
        activityLevel: "Easy",
        gettingThere: "Arrive at Kilimanjaro International Airport (JRO). The tour starts and ends in Arusha.",
        highlights: ["Serengeti Game Drives", "Ngorongoro Crater", "Tarangire Elephants", "Big Five Spotting"],
        description: "A compact yet comprehensive safari experience taking you to the most iconic parks in Northern Tanzania. Witness the vast Serengeti plains and the density of wildlife in the Ngorongoro Crater.",
        itinerary: [
            {
                day: 1,
                title: "Arusha to Tarangire National Park",
                description: "Pick up from Arusha in the morning, drive to Tarangire National Park. Known for its massive elephant herds and Baobab trees. Full day game drive with picnic lunch.",
                accommodation: "Maramboi Tented Lodge",
                meals: "Lunch, Dinner",
                time: "2 hour drive + Game Drive"
            },
            {
                day: 2,
                title: "Tarangire to Serengeti National Park",
                description: "Drive towards the Serengeti, passing through the Ngorongoro Conservation Area. Game drive en route to your camp in Central Serengeti.",
                accommodation: "Serengeti Heritage Camp",
                meals: "Breakfast, Lunch, Dinner",
                time: "4-5 hour drive"
            },
            {
                day: 3,
                title: "Full Day in Serengeti",
                description: "A full day dedicated to game drives in the Serengeti. Follow the migration or search for the Big Cats in the Seronera Valley. Hot air balloon option available.",
                accommodation: "Serengeti Heritage Camp",
                meals: "Breakfast, Lunch, Dinner",
                time: "Full Day Game Drive"
            },
            {
                day: 4,
                title: "Serengeti to Ngorongoro Crater",
                description: "Morning game drive in Serengeti before heading to the Ngorongoro Crater rim. Enjoy sunset views over the caldera.",
                accommodation: "Rhino Lodge",
                meals: "Breakfast, Lunch, Dinner",
                time: "3 hour drive + Game Drive"
            },
            {
                day: 5,
                title: "Ngorongoro Crater to Arusha",
                description: "Descend 600m into the crater floor for a half-day tour. This is the best place to see rhinos. After lunch, ascend and drive back to Arusha.",
                accommodation: "N/A (End of Tour)",
                meals: "Breakfast, Lunch",
                time: "5-6 hours Game Drive + 3 hour drive to Arusha"
            }
        ],
        inclusions: ["Park fees", "Lodge/Camp accommodation", "Professional guide", "4x4 Safari Vehicle", "All meals"],
        exclusions: ["Flights", "Visas", "Tips", "Alcoholic beverages"],
        packingList: [
            "Light, neutral-colored clothing (khaki, beige)",
            "Comfortable walking shoes/sneakers",
            "Wide-brimmed hat",
            "Warm sweater/fleece for early mornings",
            "Binoculars",
            "Camera with zoom lens",
            "Sunscreen and insect repellent",
            "Personal medications/First aid kit",
            "Power bank/solar charger",
            "Swimwear (for lodges with pools)"
        ]
    },
    {
        id: "3",
        title: "8-Day Lemosho Route",
        slug: "8-day-lemosho-route",
        image: "/images/destinations/kilimanjaro/kilimanjaro-8.webp",
        duration: "8 Days",

        location: "Mount Kilimanjaro",
        difficulty: "Moderate",
        distance: "70 km",
        successRate: "98%",
        bestTime: "Year-round facing, but best conditions are from July to September and January to February.",
        accommodationDetails: "Full service camping. High-quality 4-season tents, comfortable sleeping maps, and private dining tent. Setup by our dedicated crew.",
        minAge: "10 years",
        maxGroupSize: 10,
        activityLevel: "Moderate-High",
        gettingThere: "Transfers provided from Kilimanjaro International Airport (JRO) to Moshi, and then to the Londorossi Gate for the start of the trek.",
        highlights: ["High Success Rate", "Panoramic Views", "Less Crowded", "Shira Plateau"],
        description: "Considered one of the most beautiful routes on Kilimanjaro, Lemosho offers a remote start and excellent acclimatization profile over 8 days.",
        itinerary: [
            { day: 1, title: "Lemosho Gate to Mti Mkubwa", description: "Start the trek through the pristine rainforest." },
            { day: 2, title: "Mti Mkubwa to Shira 1 Camp", description: "Enter the heath zone and cross the Shira Ridge." },
            { day: 3, title: "Shira 1 to Shira 2 Camp", description: "Gentle hike across the plateau with stunning peak views." },
            { day: 4, title: "Shira 2 to Lava Tower to Barranco", description: "Acclimatization day. Climb high, sleep low." },
            { day: 5, title: "Barranco to Karanga", description: "Conquer the Barranco Wall." },
            { day: 6, title: "Karanga to Barafu", description: "Head to base camp." },
            { day: 7, title: "Summit Night", description: "Uhuru Peak and descent." },
            { day: 8, title: "Mweka to Gate", description: "Finish the adventure." }
        ],
        inclusions: ["All fees", "Camping gear", "Oxygen cylinder", "AMREF Flying Doctors cover", "All meals"],
        exclusions: ["Gear rental", "Tips", "Travel insurance"],
        packingList: [
            "Sturdy hiking boots (broken in)",
            "Thermal underwear and fleece layers",
            "Waterproof shell jacket and pants",
            "Warm gloves and beanie",
            "Sleeping bag (-10°C to -15°C)",
            "Headlamp",
            "Trekking poles",
            "Water bottles/bladder (3-4L total)",
            "Personal toiletries and wet wipes",
            "Energy snacks and electrolytes"
        ]
    },
    {
        id: "4",
        title: "10-Day Migration & Beach",
        slug: "10-day-migration-beach",
        image: "/images/destinations/migration/migration-4.webp",
        duration: "10 Days",

        location: "Serengeti, Zanzibar",
        difficulty: "Easy",
        successRate: "100% Satisfaction",
        bestTime: "Best booked between July and October for river crossings, or Jan-March for calving + beach weather.",
        accommodationDetails: "Luxury selections including Migration camps in the Serengeti and 4-5 star beach resorts in Zanzibar.",
        minAge: "None",
        maxGroupSize: 12,
        activityLevel: "Easy",
        gettingThere: "Fly into JRO, depart from Zanzibar International Airport (ZNZ). Internal flights included.",
        highlights: ["Great Migration", "Luxury Tented Camps", "Zanzibar Relaxation", "Stone Town Tour"],
        description: "The perfect blend of adventure and relaxation. Witness the dramatic river crossings of the Great Migration before unwinding on the white sands of Zanzibar.",
        itinerary: [
            { day: 1, title: "Arrival Kilimanjaro", description: "Transfer to Arusha hotel." },
            { day: 2, title: "Tarangire National Park", description: "Game drive amongst giant baobabs." },
            { day: 3, title: "Serengeti (Central)", description: "Head to the heart of the park." },
            { day: 4, title: "Serengeti (North/West)", description: "Follow the migration herds." },
            { day: 5, title: "Ngorongoro Crater", description: "The world's largest inactive volcanic caldera." },
            { day: 6, title: "Fly to Zanzibar", description: "Transfer to airport and flight to paradise." },
            { day: 7, title: "Stone Town Tour", description: "Explore the historic alleyways and spice markets." },
            { day: 8, title: "Beach Relaxation", description: "Leisure time at your resort." },
            { day: 9, title: "Blue Lagoon Snorkeling", description: "Discover underwater marine life." },
            { day: 10, title: "Departure", description: "Transfer to airport." }
        ],
        inclusions: ["Domestic flights", "Luxury accommodation", "All park fees", "Zanzibar transfers", "Safari vehicle"],
        exclusions: ["International flights", "Visas", "Tips", "Laundry"]
    },
    {
        id: "5",
        title: "3-Day Fly-in Serengeti",
        slug: "3-day-fly-in-serengeti",
        image: "/images/destinations/serengeti/serengeti-30.webp",
        duration: "3 Days",

        location: "Serengeti NP",
        difficulty: "Easy",
        bestTime: "Excellent year-round. Wildlife is always abundant in Central Serengeti.",
        accommodationDetails: "Luxury tented camp in Seronera closer to airstrip for maximum convenience.",
        minAge: "5 years",
        maxGroupSize: 6,
        activityLevel: "Easy",
        gettingThere: "Flights from Arusha or Zanzibar directly to Seronera Airstrip.",
        highlights: ["Aerial Views", "Central Serengeti", "Maximized Time", "Big Cat Action"],
        description: "Short on time but want the full experience? This fly-in safari maximizes your game viewing time by skipping the long drives.",
        itinerary: [
            { day: 1, title: "Flight to Seronera", description: "Morning flight from Arusha/Zanzibar. Afternoon game drive." },
            { day: 2, title: "Full Day Serengeti", description: "Dawn to dusk game viewing in the predator-rich Seronera valley." },
            { day: 3, title: "Morning Game Drive & Departure", description: "Final game drive en route to airstrip for flight back." }
        ],
        inclusions: ["Return flights", "Luxury tented camp", "Park fees", "4x4 use"],
        exclusions: ["Tips", "Drinks", "Insurance"]
    },
    // Ruaha Tours
    {
        id: "6",
        title: "5-Day Ruaha Wilderness",
        slug: "5-day-ruaha-wilderness",
        image: "/images/destinations/ruaha/ruaha-5.webp",
        duration: "5 Days",

        location: "Ruaha",
        difficulty: "Moderate",
        bestTime: "Dry season (June-October) for predator action. Green season (Jan-Mar) for birding and scenery.",
        accommodationDetails: "Stay in intimate river lodges or fly-camping setups for true immersion.",
        minAge: "12 years",
        maxGroupSize: 6,
        activityLevel: "Moderate",
        gettingThere: "Fly from Dar es Salaam or Arusha to Msembe Airstrip.",
        highlights: ["Walking Safaris", "Huge Elephant Herds", "River Scenes", "Baobab Valley"],
        description: "Dive deep into Tanzania's largest park. Ruaha offers a raw, uncrowded experience with massive elephant herds and high predator densities along the Great Ruaha River.",
        itinerary: [
            { day: 1, title: "Fly to Ruaha", description: "Afternoon game drive along the river." },
            { day: 2, title: "Game Drives", description: "Explore the core game viewing areas." },
            { day: 3, title: "Walking Safari", description: "Experience the bush on foot with armed guides." },
            { day: 4, title: "Birding & Predators", description: "Search for wild dogs and greater kudu." },
            { day: 5, title: "Departure", description: "Morning drive and flight out." }
        ],
        inclusions: ["Flights", "Accommodation", "Park fees", "Game drives"],
        exclusions: ["Tips", "Drinks"]
    },
    {
        id: "7",
        title: "7-Day Southern Circuit",
        slug: "7-day-southern-circuit",
        image: "/images/destinations/ruaha/ruaha-8.webp",
        duration: "7 Days",

        location: "Ruaha, Nyerere",
        difficulty: "Moderate",
        bestTime: "June to October.",
        accommodationDetails: "Combination of luxury tented camps in both parks.",
        minAge: "10 years",
        maxGroupSize: 6,
        activityLevel: "Moderate",
        gettingThere: "Starts in Dar es Salaam, ends in Dar es Salaam.",
        highlights: ["Ruaha Predators", "Nyerere Boat Safari", "Walking Safari", "Fly-in Ease"],
        description: "The ultimate Southern Tanzania combination. Experience the rugged beauty of Ruaha and the riverine magic of Nyerere National Park in one seamless trip.",
        itinerary: [
            { day: 1, title: "Dar to Nyerere", description: "Fly to Nyerere, afternoon boat safari." },
            { day: 2, title: "Nyerere Game Drive", description: "Full day exploring the lakes and savannah." },
            { day: 3, title: "Walking Safari", description: "Morning walk, afternoon game drive." },
            { day: 4, title: "Fly to Ruaha", description: "Transfer to the rugged interior." },
            { day: 5, title: "Ruaha Exploration", description: "Track lions and leopards." },
            { day: 6, title: "Remote Ruaha", description: "Visit the distant corners of the park." },
            { day: 7, title: "Back to Dar", description: "Flight back to the coast." }
        ],
        inclusions: ["Internal Flights", "Full Board Accommodation", "Park Fees", "Activities"],
        exclusions: ["International Flights", "Visas"]
    },
    // Nyerere Tours
    {
        id: "8",
        title: "3-Day Nyerere River Safari",
        slug: "3-day-nyerere-river-safari",
        image: "/images/destinations/nyerere/nyerere-1.webp",
        duration: "3 Days",

        location: "Nyerere",
        difficulty: "Easy",
        bestTime: "June to October is dry. Jan-Feb is green and beautiful.",
        accommodationDetails: "Riverside camp with hippo views.",
        minAge: "6 years",
        maxGroupSize: 8,
        activityLevel: "Easy",
        gettingThere: "Short 45-min flight from Dar es Salaam.",
        highlights: ["Rufiji River Boat Trip", "Hippo Pools", "Walking Safari", "Bird Watching"],
        description: "A quick but immersive escape to Africa's largest reserve. The focus is on the mighty Rufiji River and its abundant aquatic wildlife.",
        itinerary: [
            { day: 1, title: "Fly In & Boat Safari", description: "Arrive and immediately hit the water for sunset." },
            { day: 2, title: "Full Day Game Drive", description: "Explore the vast game reserve." },
            { day: 3, title: "Walking & Fly Out", description: "Morning bush walk and return flight." }
        ],
        inclusions: ["Flights from Dar", "Camp Stay", "Park Fees", "Boat Safari"],
        exclusions: ["Tips", "Drinks"]
    },
    // Zanzibar Tours
    {
        id: "9",
        title: "5-Day Zanzibar Escape",
        slug: "5-day-zanzibar-escape",
        image: "/images/destinations/zanzibar/zanzibar-1.webp",
        duration: "5 Days",

        location: "Zanzibar",
        difficulty: "Relaxed",
        bestTime: "Year-round, avoid heavy rains in April/May.",
        accommodationDetails: "4-star Beach Resort on the East Coast.",
        minAge: "None",
        maxGroupSize: 99,
        activityLevel: "Very Easy",
        gettingThere: "Fly into ZNZ airport.",
        highlights: ["Beach Relaxation", "Stone Town Tour", "Spice Farm", "Blue Lagoon"],
        description: "Relax and recharge on the Spice Island. Includes a balance of cultural exploration in Stone Town and pure leisure on the white sand beaches.",
        itinerary: [
            { day: 1, title: "Arrival", description: "Transfer to Stone Town hotel." },
            { day: 2, title: "Stone Town & Spices", description: "Guided city tour and spice farm visit. Transfer to beach resort." },
            { day: 3, title: "Beach Day", description: "Leisure time at the resort." },
            { day: 4, title: "Blue Lagoon", description: "Optional snorkeling trip." },
            { day: 5, title: "Departure", description: "Transfer to airport." }
        ],
        inclusions: ["All Transfers", "Hotel (B&B)", "Tours mentioned"],
        exclusions: ["Flights", "Lunches/Dinners", "Tips"]
    },
    {
        id: "10",
        title: "8-Day Luxury Honeymoon",
        slug: "8-day-luxury-honeymoon",
        image: "/images/destinations/zanzibar/zanzibar-15.webp",
        duration: "8 Days",

        location: "Zanzibar",
        difficulty: "Relaxed",
        bestTime: "Perfect year-round.",
        accommodationDetails: "Exclusive 5-star private villa.",
        minAge: "Adults Only",
        maxGroupSize: 2,
        activityLevel: "Very Easy",
        gettingThere: "Private transfer from ZNZ.",
        highlights: ["Private Sunset Cruise", "Candlelit Dinners", "Spa Treatments", "Secluded Beach"],
        description: "The ultimate romantic getaway. Private villas, personalized service, and exclusive experiences designed for couples.",
        itinerary: [
            { day: 1, title: "Honeymoon Welcome", description: "VIP arrival and transfer." },
            { day: 2, title: "Private Island Picnic", description: "Boat trip to a sandbank." },
            { day: 3, title: "Spa Day", description: "Couples massage and wellness." },
            { day: 4, title: "Sunset Dhow Cruise", description: "Romantic sail with drinks." },
            { day: 5, title: "Leisure", description: "Relax at your private pool." },
            { day: 6, title: "Stone Town Dinner", description: "Evening tour and rooftop dining." },
            { day: 7, title: "Leisure", description: "Final day of relaxation." },
            { day: 8, title: "Departure", description: "VIP transfer out." }
        ],
        inclusions: ["Luxury Villa", "All Meals", "Private Transfers", "Spa Treatment"],
        exclusions: ["Flights", "Premium Alcohol"]
    },
    // Tarangire Specific
    {
        id: "11",
        title: "2-Day Tarangire & Ngorongoro",
        slug: "2-day-tarangire-ngorongoro",
        image: "/images/destinations/tarangire/tarangire-14.webp",
        duration: "2 Days",

        location: "Tarangire, Northern Circuit",
        difficulty: "Easy",
        bestTime: "Year-round.",
        accommodationDetails: "Mid-range lodge in Karatu.",
        minAge: "5 years",
        maxGroupSize: 6,
        activityLevel: "Easy",
        gettingThere: "Arusha return.",
        highlights: ["Elephants", "Baobabs", "Crater Views", "Big Five"],
        description: "A short but action-packed safari hitting two of the most famous parks in the North.",
        itinerary: [
            { day: 1, title: "Arusha to Tarangire", description: "Full day game drive." },
            { day: 2, title: "Ngorongoro Crater to Arusha", description: "Morning crater tour and return." }
        ],
        inclusions: ["Transport", "Park Fees", "Accommodation", "Meals"],
        exclusions: ["Tips", "Drinks"]
    },
    {
        id: "12",
        title: "6-Day Ruaha & Mikumi",
        slug: "6-day-ruaha-mikumi",
        image: "/images/destinations/ruaha/ruaha-1.webp",
        duration: "6 Days",

        location: "Ruaha, Mikumi",
        difficulty: "Moderate",
        bestTime: "June - October",
        accommodationDetails: "Mid-range lodges.",
        minAge: "8 years",
        maxGroupSize: 7,
        activityLevel: "Moderate",
        gettingThere: "Drive from Dar es Salaam.",
        highlights: ["Mikumi Plains", "Ruaha Wilderness", "Udzungwa Mountains", " scenic drive"],
        description: "A road safari exploring the Southern Circuit. Drive through the Mikumi plains and into the heart of Ruaha.",
        itinerary: [
            { day: 1, title: "Dar to Mikumi", description: "Drive to Mikumi, afternoon game drive." },
            { day: 2, title: "Mikumi Full Day", description: "Explore the Mkata floodplain." },
            { day: 3, title: "Mikumi to Ruaha", description: "Scenic drive up the escarpment." },
            { day: 4, title: "Ruaha Game Drive", description: "Full day with picnic lunch." },
            { day: 5, title: "Ruaha to Mikumi", description: "Return drive." },
            { day: 6, title: "Mikumi to Dar", description: "Morning drive and return to coast." }
        ],
        inclusions: ["Vehicle", "Driver Guide", "Park Fees", "Accommodation"],
        exclusions: ["Tips", "Drinks"]
    },
    {
        id: "13",
        title: "4-Day Nyerere Fly-in",
        slug: "4-day-nyerere-fly-in",
        image: "/images/destinations/nyerere/nyerere-5.webp",
        duration: "4 Days",

        location: "Nyerere",
        difficulty: "Easy",
        bestTime: "Dry season is best.",
        accommodationDetails: "Luxury river lodge.",
        minAge: "6 years",
        maxGroupSize: 8,
        activityLevel: "Easy",
        gettingThere: "Fly from Zanzibar or Dar.",
        highlights: ["Boat Safari", "Walking Safari", "Game Drives", "Bush Lunch"],
        description: "An extended weekend in the wild. Perfect for adding onto a Zanzibar beach holiday.",
        itinerary: [
            { day: 1, title: "Arrival", description: "Fly in, afternoon boat safari." },
            { day: 2, title: "Game Drive", description: "Full day exploring lakes." },
            { day: 3, title: "Walking & Game", description: "Morning walk, afternoon drive." },
            { day: 4, title: "Departure", description: "Morning activity and flight out." }
        ],
        inclusions: ["Flights", "Full Board", "Activities", "Fees"],
        exclusions: ["Premium drinks", "Tips"]
    },
    {
        id: "14",
        title: "7 Days Luxury Serengeti & Ngorongoro Safari",
        slug: "7-days-luxury-serengeti-ngorongoro-safari",
        image: "/images/destinations/serengeti/serengeti-29.webp",
        duration: "7 Days",
        location: "Tarangire, Serengeti, Ngorongoro",
        category: "Luxury Wildlife Safari",
        difficulty: "Easy",
        bestTime: "This safari can be enjoyed throughout the year. The dry season from June to October provides excellent wildlife viewing opportunities, while the green season offers beautiful landscapes, fewer crowds, and exceptional photography conditions.",
        accommodationDetails: "This safari includes carefully selected luxury lodges and tented camps offering comfort, privacy, exceptional service, and immersive safari atmosphere in beautiful natural settings.",
        minAge: "All Ages",
        maxGroupSize: 6,
        activityLevel: "Easy",
        gettingThere: "Arrive at Kilimanjaro International Airport (JRO). The tour starts and ends in Arusha.",
        highlights: [
            "Explore Tanzania’s most iconic national parks",
            "Witness incredible Big Five wildlife encounters",
            "Experience the endless plains of Serengeti",
            "Discover the breathtaking Ngorongoro Crater",
            "Luxury lodge and tented camp accommodations",
            "Private 4x4 safari vehicle with professional guide",
            "Exceptional wildlife photography opportunities",
            "Beautiful landscapes and unforgettable sunsets"
        ],
        description: "This 7-day luxury safari has been carefully designed to showcase the very best of Tanzania’s northern safari circuit while providing comfort, exclusivity, and unforgettable wildlife experiences. From the giant elephant herds of Tarangire National Park to the endless plains of Serengeti and the spectacular Ngorongoro Crater, this journey combines Tanzania’s most celebrated safari destinations into one seamless adventure.",
        gallery: [
            { src: "/images/destinations/serengeti/serengeti-11.webp", alt: "Great Migration" },
            { src: "/images/destinations/serengeti/serengeti-16.webp", alt: "Serengeti Leopard" },
            { src: "/images/destinations/ngorongoro/ngorongoro-1.webp", alt: "Ngorongoro Crater View" },
            { src: "/images/destinations/serengeti/serengeti-23.webp", alt: "Serengeti Cheetah" },
            { src: "/images/destinations/tarangire/tarangire-2.webp", alt: "Tarangire Baobabs" },
            { src: "/images/destinations/serengeti/serengeti-27.webp", alt: "Serengeti Elephant" }
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Tanzania – Welcome to Arusha",
                description: "Upon arrival at Kilimanjaro International Airport, you will be warmly welcomed by our Serenity Africa Safaris representative and transferred to your luxury lodge in Arusha. Depending on your arrival time, you may relax at the lodge and enjoy the peaceful surroundings while preparing for the exciting safari adventure ahead.",
                accommodation: "Luxury Lodge in Arusha",
                meals: "Bed & Breakfast"
            },
            {
                day: 2,
                title: "Arusha to Tarangire National Park",
                description: "After breakfast, depart for Tarangire National Park, a beautiful wildlife destination famous for its giant baobab trees and massive elephant herds. As you enter the park, the safari experience officially begins with game drives through diverse landscapes filled with wildlife. Tarangire is home to elephants, lions, giraffes, zebras, wildebeest, buffalo, and hundreds of bird species.",
                accommodation: "Luxury Safari Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Journey to Central Serengeti",
                description: "After breakfast, continue your journey toward the world-famous Serengeti National Park. Along the way, pass through the beautiful Ngorongoro Conservation Area with breathtaking views of the highlands and surrounding landscapes. As you enter Serengeti, the scenery transforms into endless golden plains stretching to the horizon. Wildlife sightings begin immediately.",
                accommodation: "Luxury Tented Camp in Serengeti",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Full Day Safari in Serengeti National Park",
                description: "Spend a full day exploring the incredible wildlife-rich landscapes of Serengeti National Park. Your day begins with an early morning game drive when wildlife activity is at its peak. Search for lions, cheetahs, leopards, elephants, and other animals while experiencing the peaceful beauty of the African wilderness.",
                accommodation: "Luxury Tented Camp in Serengeti",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Serengeti to Ngorongoro Highlands",
                description: "Enjoy a final morning game drive in Serengeti before departing toward the Ngorongoro Highlands. This scenic journey offers additional opportunities for wildlife viewing while crossing beautiful landscapes filled with rolling hills and dramatic scenery. Arrive at your luxury lodge located near the crater rim.",
                accommodation: "Luxury Lodge at Ngorongoro",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Ngorongoro Crater Safari",
                description: "Today you descend into the Ngorongoro Crater, one of Africa’s most extraordinary wildlife destinations and a UNESCO World Heritage Site. The crater floor is home to an incredible concentration of animals including lions, elephants, buffalo, zebras, hippos, hyenas, flamingos, and the rare black rhino.",
                accommodation: "Luxury Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 7,
                title: "Return to Arusha & Departure",
                description: "After breakfast, depart for Arusha with scenic views along the journey. Depending on your flight schedule, you may enjoy lunch or last-minute shopping before transfer to Kilimanjaro International Airport for your onward flight. Leave Tanzania with unforgettable memories.",
                accommodation: "N/A (End of Safari)",
                meals: "Breakfast, Lunch"
            }
        ],
        inclusions: [
            "Private 4x4 luxury safari vehicle",
            "Professional English-speaking safari guide",
            "All national park entrance fees",
            "Luxury accommodation during safari",
            "Meals as specified in itinerary",
            "Game drives and safari activities",
            "Airport transfers",
            "Drinking water during safari",
            "Government taxes and levies"
        ],
        exclusions: [
            "International flights",
            "Visa fees",
            "Travel insurance",
            "Personal expenses",
            "Alcoholic and soft drinks",
            "Tips and gratuities",
            "Optional activities",
            "Laundry services"
        ]
    }
];
