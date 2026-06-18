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
            {
                day: 1,
                title: "Londorossi Gate (2,100m) to Mti Mkubwa (2,750m)",
                description: "Your Kilimanjaro adventure begins at the remote Londorossi Gate, far from the crowds. After registration, you step into the ancient montane rainforest — a lush, cathedral-like world dripping with moss and alive with birdsong. The trail winds through dense vegetation as colobus monkeys observe from above. Camp tonight beneath the giant forest trees.",
                accommodation: "Mti Mkubwa Camp (Tented)",
                meals: "Lunch, Dinner",
                distance: "8 km",
                time: "3-4 hours",
                elevation: "2,100m to 2,750m"
            },
            {
                day: 2,
                title: "Mti Mkubwa (2,750m) to Shira 1 Camp (3,500m)",
                description: "Leaving the rainforest behind, the trail ascends steeply through giant heather and moorland. The vegetation becomes increasingly sparse as you climb higher, and for the first time you may catch glimpses of Kilimanjaro's ice-capped summit emerging above the clouds. Shira 1 Camp sits on the vast Shira Plateau with wide open skies.",
                accommodation: "Shira 1 Camp (Tented)",
                meals: "Breakfast, Lunch, Dinner",
                distance: "8 km",
                time: "5-7 hours",
                elevation: "2,750m to 3,500m"
            },
            {
                day: 3,
                title: "Shira 1 (3,500m) to Shira 2 Camp (3,850m)",
                description: "A relatively gentle day crosses the magnificent Shira Plateau — Africa's largest high-altitude plateau. The route passes Shira Cathedral, a dramatic volcanic plug rising from the moorland. Views of Kibo's summit cone are extraordinary from here. Use this day to breathe, adjust to the altitude, and take in the immensity of the landscape.",
                accommodation: "Shira 2 Camp (Tented)",
                meals: "Breakfast, Lunch, Dinner",
                distance: "9 km",
                time: "4-6 hours",
                elevation: "3,500m to 3,850m"
            },
            {
                day: 4,
                title: "Shira 2 (3,850m) to Lava Tower (4,640m) to Barranco (3,976m)",
                description: "The most critical acclimatization day of the route. Trek up to the iconic Lava Tower — a jagged volcanic plug — for lunch at 4,640m, then descend to Barranco Camp for the night. This 'climb high, sleep low' strategy dramatically improves your chances of summit success. The descent into the Barranco Valley reveals otherworldly giant groundsels and lobelias.",
                accommodation: "Barranco Camp (Tented)",
                meals: "Breakfast, Lunch, Dinner",
                distance: "14 km",
                time: "7-8 hours",
                elevation: "3,850m to 4,640m then 3,976m"
            },
            {
                day: 5,
                title: "Barranco (3,976m) to Karanga Camp (4,035m)",
                description: "Begin with the legendary Barranco Wall — a hands-and-feet scramble that appears daunting but is a highlight of the entire route. Your guides lead you confidently up each ledge with rewarding views expanding below. The traverse through the Southern Icefields to Karanga is beautiful, crossing glacier-carved ridges and valleys with the summit looming overhead.",
                accommodation: "Karanga Camp (Tented)",
                meals: "Breakfast, Lunch, Dinner",
                distance: "5 km",
                time: "4-6 hours",
                elevation: "3,976m to 4,035m"
            },
            {
                day: 6,
                title: "Karanga (4,035m) to Barafu Camp (4,673m)",
                description: "A short but altitude-testing climb takes you to Barafu — your final base camp before the summit. The terrain is rocky alpine desert, completely barren and windswept. Arrive early for a hot meal and mandatory rest. Guides brief you on the summit night strategy. Lights out by 7pm as you prepare for the most significant night of the expedition.",
                accommodation: "Barafu Camp (Tented)",
                meals: "Breakfast, Lunch, Early Dinner",
                distance: "4 km",
                time: "3-4 hours",
                elevation: "4,035m to 4,673m"
            },
            {
                day: 7,
                title: "Summit: Barafu (4,673m) to Uhuru Peak (5,895m) to Mweka (3,100m)",
                description: "The ultimate night begins at midnight. Under a canopy of stars, your team starts the zigzagging ascent through volcanic scree. Step after slow step, you push through the cold and thin air. Stella Point at sunrise rewards you with views across the glaciers. Then the final push to Uhuru Peak — the Roof of Africa. After photographs and tears of joy, descend the long Mweka trail to camp.",
                accommodation: "Mweka Camp (Tented)",
                meals: "Breakfast, Dinner",
                distance: "5 km up / 12 km down",
                time: "6-8 hours up / 4-5 hours down",
                elevation: "4,673m to 5,895m to 3,100m"
            },
            {
                day: 8,
                title: "Mweka Camp (3,100m) to Mweka Gate (1,640m)",
                description: "A celebratory final descent through the rainforest. The forest comes alive around you as your legs carry you down the muddy trail to Mweka Gate, where certificates are waiting. Say farewell to your incredible crew — porters, guides, and cooks who made this summit possible. Transfer to your hotel in Moshi for a hot shower and a hard-earned celebratory dinner.",
                accommodation: "Hotel in Moshi",
                meals: "Breakfast, Lunch",
                distance: "10 km",
                time: "3-4 hours",
                elevation: "3,100m to 1,640m"
            }
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
            {
                day: 1,
                title: "Arrival in Tanzania — Welcome to Arusha",
                description: "Touch down at Kilimanjaro International Airport where your Serenity representative meets you with a warm welcome. Transfer to your hotel in Arusha, Tanzania's adventure capital, nestled between Mount Kilimanjaro and Mount Meru. Enjoy a welcome dinner and a briefing on the incredible journey ahead.",
                accommodation: "Arusha Coffee Lodge or similar",
                meals: "Dinner"
            },
            {
                day: 2,
                title: "Tarangire National Park — Giants of the Baobab Forest",
                description: "Depart Arusha after breakfast and enter Tarangire National Park, a landscape dominated by the ancient baobab tree and the Tarangire River. This park holds Africa's highest concentration of elephants outside Botswana. Scan the riverine woodland for lions lounging in baobab shade, large herds of buffalo, and hundreds of bird species including the enormous ground hornbill.",
                accommodation: "Maramboi Tented Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Serengeti (Central) — Into the Endless Plains",
                description: "Cross the Ngorongoro Highlands en route to the world-famous Serengeti National Park. As the road gives way to endless golden savannah, the sense of scale is breathtaking. Check in to your luxury tented camp before an afternoon game drive in the predator-rich Seronera Valley, where cheetahs hunt and leopards drape themselves across acacia branches.",
                accommodation: "Luxury Tented Camp, Central Serengeti",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Serengeti (North/West) — Following the Migration",
                description: "Rise before dawn and head north to intercept the Great Migration herds. Millions of wildebeest and zebra follow ancient instincts across the Serengeti plains in one of nature's greatest spectacles. Between July and October, dramatic river crossings at the Mara River draw enormous crocodiles to the frenzy. At other times of year, the herds carpet the open plains in every direction.",
                accommodation: "Luxury Tented Camp, Serengeti",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Ngorongoro Crater — The World in a Bowl",
                description: "Drive to the rim of the Ngorongoro Crater, a UNESCO World Heritage Site formed by the collapse of an ancient supervolcano 2-3 million years ago. Descend 600 metres to the crater floor, home to some 25,000 animals including the endangered black rhino, lions, hyenas, flamingos turning the soda lake pink, and dense herds of zebra and wildebeest in a self-contained ecosystem.",
                accommodation: "Crater rim lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Fly to Zanzibar — Welcome to the Spice Island",
                description: "Bid farewell to the savannah as your domestic flight carries you east over the Tanzanian coast to Zanzibar — an island of powdery white sand beaches, turquoise Indian Ocean waters, and 2,000 years of layered history. Transfer to your beachfront resort on the North or East Coast and feel the Indian Ocean breeze for the first time.",
                accommodation: "4-5 Star Beach Resort, Zanzibar",
                meals: "Breakfast, Dinner"
            },
            {
                day: 7,
                title: "Stone Town — A UNESCO World Heritage City",
                description: "Spend the morning exploring the winding alleyways of Stone Town, Zanzibar's atmospheric old quarter recognized as a UNESCO World Heritage Site. Visit the spice farm to smell cinnamon, cloves, and vanilla at the source, explore the famous Forodhani Night Market, and peek into the House of Wonders. The afternoon is free at the beach.",
                accommodation: "4-5 Star Beach Resort, Zanzibar",
                meals: "Breakfast, Lunch"
            },
            {
                day: 8,
                title: "Beach Relaxation — Days of Sun and Sand",
                description: "Today is entirely yours. Zanzibar's beaches are among the finest in Africa — powder-fine coral sand, warm shallow waters, and a horizon that dissolves into sky and sea. Whether you choose to do absolutely nothing with a book and a cocktail, explore the resort's facilities, or arrange a sunset dhow cruise, this day belongs to you completely.",
                accommodation: "4-5 Star Beach Resort, Zanzibar",
                meals: "Breakfast"
            },
            {
                day: 9,
                title: "Blue Lagoon Snorkeling — Underwater Zanzibar",
                description: "Board a traditional dhow and sail to the crystal-clear waters of the Blue Lagoon near Nakupenda sandbank. Snorkel amongst spectacular coral gardens, sea turtles, tropical fish, and if you're lucky, dolphins playing in the bow wave. Return to shore for a fresh seafood lunch before a final afternoon of beach relaxation.",
                accommodation: "4-5 Star Beach Resort, Zanzibar",
                meals: "Breakfast, Lunch"
            },
            {
                day: 10,
                title: "Departure — Until Next Time",
                description: "Savour a final breakfast with the sound of the Indian Ocean before transferring to Zanzibar International Airport for your homeward flight. Leave with sun-kissed skin, a camera full of memories, and the quiet certainty that Tanzania has changed you forever.",
                accommodation: "N/A",
                meals: "Breakfast"
            }
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
            {
                day: 1,
                title: "Fly In to Seronera — Aerial Africa",
                description: "Board your light aircraft for a spectacular low-level flight over the Serengeti plains — a perspective few travellers ever experience. Touch down at Seronera Airstrip in the very heart of the park and meet your guide. The afternoon game drive begins immediately. The Seronera Valley is renowned as one of Africa's premier big-cat habitats, home to the highest density of resident lions and leopards on the continent. Arrive at your luxury tented camp as the sun turns the savannah gold.",
                accommodation: "Luxury Tented Camp, Seronera",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Full Day in the Serengeti — Dawn to Dusk",
                description: "Wake before sunrise for a pre-dawn game drive — the hour when predators finish their night's hunt and the savannah stirs to life. Spend the entire day exploring the Central Serengeti, tracking lion prides, searching for leopards draped in acacia trees, watching cheetahs teach cubs to hunt, and observing massive elephant families at the rivers. A bush lunch is served in the wild under a shade tree. Return for another golden-hour drive before an open-air dinner under the stars.",
                accommodation: "Luxury Tented Camp, Seronera",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Final Game Drive & Departure",
                description: "Squeeze every last moment from this extraordinary experience with an early morning game drive before transferring to the airstrip. The short flight back offers a final bird's-eye view of the endless plains below — a farewell that deepens the impression these landscapes leave on every soul that passes through them.",
                accommodation: "N/A",
                meals: "Breakfast"
            }
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
            {
                day: 1,
                title: "Fly In to Ruaha — Into the Wild Interior",
                description: "Your flight from Dar es Salaam drops you into Tanzania's raw, untamed heart. Ruaha National Park is the country's largest park and among Africa's most underrated wilderness destinations — vast, rugged, and largely crowd-free. Your guide meets you at Msembe Airstrip and the afternoon game drive begins along the Great Ruaha River, where enormous elephant herds come to drink alongside hippos and crocodiles in the shallows.",
                accommodation: "Luxury River Lodge",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Deep Ruaha Game Drives — Predator Country",
                description: "Full day exploring the diverse habitats of Ruaha — from riverine woodland to open miombo savannah and rocky kopjes. Ruaha holds one of East Africa's largest lion populations, and encountering a pride mid-hunt on the open plains is an experience that demands silence. Look for the park's charismatic greater kudu and sable antelope — animals rarely seen on the Northern Circuit. Picnic lunch is served at a scenic viewpoint overlooking the river.",
                accommodation: "Luxury River Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Walking Safari — The Bush at Eye Level",
                description: "Put your boots on the ground for a guided walking safari — the most intimate way to experience the African wilderness. Led by a professional walking guide and a ranger, you track animals on foot, reading the language of the bush: paw prints, animal droppings, broken branches, and the sounds that signal predators nearby. What seemed just scenery from a vehicle becomes an immersive, living world. Afternoon game drive after a riverside lunch.",
                accommodation: "Luxury River Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Birding & Wild Dogs — Africa's Rarest Predator",
                description: "Ruaha is one of East Africa's premier destinations for African wild dogs — the continent's most endangered large predator, with only around 6,000 individuals remaining. Your guide knows the territories and tracks the pack in the early morning. The park's birdlife is equally staggering, with over 570 species recorded including carmine bee-eaters, Pel's fishing owl, and the martial eagle. Evening sundowners from a riverside cliff.",
                accommodation: "Luxury River Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Final Morning — Departure",
                description: "A final dawn game drive along the river before transferring back to Msembe Airstrip for your return flight to Dar es Salaam. Ruaha leaves an impression that stays with you long after you've left — the feeling of a wilderness truly uncompromised by tourism. You'll be planning your return before you board.",
                accommodation: "N/A",
                meals: "Breakfast"
            }
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
            {
                day: 1,
                title: "Dar es Salaam to Nyerere — Arrival on the Rufiji",
                description: "Fly from Dar es Salaam to Nyerere National Park (formerly Selous), touching down in Africa's largest national park by area. The scale is extraordinary — larger than Switzerland. Your guide whisks you directly onto the Rufiji River for a late-afternoon boat safari. Hippos grunt and wallow in the shallows, Nile crocodiles bask on sandbanks, and African fish eagles scream from riverine trees as the sun drops behind the baobabs.",
                accommodation: "Luxury Riverside Camp",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Nyerere — Lakes, Plains, and Predators",
                description: "A full day exploring Nyerere's incredible variety of habitats — from the open Lake Manze floodplains, where lion prides stalk herds of buffalo, to the palm-fringed channels teeming with hippos and water birds. Game drives venture deep into the southern sector, far from any other vehicle. Look for wild dogs — Nyerere holds one of Africa's largest remaining populations — alongside sable antelope, elephant herds, and packs of spotted hyena.",
                accommodation: "Luxury Riverside Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Walking Safari & Boat — The Bush in Full Dimension",
                description: "Morning brings a guided walking safari led by experienced rangers who track animals on foot through the miombo woodland. The afternoon is dedicated to another boat safari on the Rufiji — drift quietly along channels where elephants wade chest-deep to reach islands, crocodiles launch off banks with shocking speed, and the air fills with kingfishers, herons, and giant stork. Bush sundowners served riverside.",
                accommodation: "Luxury Riverside Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Fly to Ruaha — The Rugged Interior",
                description: "After a morning game drive, board your charter flight for the dramatic flight northwest into the Ruaha highlands. The landscape transforms dramatically — from lowland miombo to steep escarpments, baobab valleys, and the rocky terrain of the Great Ruaha River. Arrive at your lodge in time for an afternoon game drive, immediately discovering Ruaha's distinct character — wilder, rawer, and more dramatic than the parks of the north.",
                accommodation: "Ruaha River Lodge or similar",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Ruaha — Lions, Leopards, and Wild Dogs",
                description: "Ruaha's terrain rewards patient game drives. Lion prides here are some of Africa's largest, adapted to hunting buffalo and even giraffe. Follow your guide into the rocky kopjes where leopards den amongst the boulders. The evening game drive as the sun goes down over the Great Ruaha River — with hippos grunting below and a blood-red sky above — is one of the defining images of a Tanzania safari.",
                accommodation: "Ruaha River Lodge or similar",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Remote Ruaha — Off the Beaten Track",
                description: "Today ventures into the more remote areas of Ruaha's vast wilderness, where your vehicle may be the only one for miles. The sense of solitude and wildness is profound. Track the park's sable and roan antelopes — rare and beautiful animals often absent from busier parks. Visit the baobab forests in the north of the park, where ancient trees thousands of years old cast dramatic shadows. Final evening dinner under the African stars.",
                accommodation: "Ruaha River Lodge or similar",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 7,
                title: "Final Morning & Return to Dar es Salaam",
                description: "One final sunrise game drive as the bush awakens, before transferring to the airstrip for your return flight to Dar es Salaam. The Southern Circuit has given you something the Northern Circuit rarely can: space, solitude, and the feeling of a wilderness truly your own. You'll have seen more wildlife, covered more terrain, and felt more alone with Africa than almost any other itinerary can provide.",
                accommodation: "N/A",
                meals: "Breakfast"
            }
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
            {
                day: 1,
                title: "Fly In to Nyerere — Straight Onto the River",
                description: "Your 45-minute flight from Dar es Salaam lands in Nyerere National Park just as the afternoon light turns golden. There's no check-in formality — within minutes of landing you're aboard a motorised boat sliding along the Rufiji River. Hippos surface and submerge, enormous Nile crocodiles line the banks, and African skimmers skim the water's surface. A sundowner is served mid-river as the park settles into its evening routine.",
                accommodation: "Riverside Camp",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Full Day — Lakes, Channels & Open Plains",
                description: "Today opens up Nyerere in its full grandeur. Game drives circle the oxbow lakes teeming with hippos and waterfowl before crossing into the open grasslands where lion prides patrol and cheetahs scan the horizon from termite mounds. The afternoon boat safari drifts along quiet backchannels draped in overhanging fig trees — utterly silent but for birdsong and the occasional splash of a monitor lizard entering the water.",
                accommodation: "Riverside Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Walking Safari & Departure — Into the Bush on Foot",
                description: "Rise early for a guided walking safari — the most immersive way to experience Nyerere's extraordinary ecosystem. Reading tracks in the soft mud, pausing to identify plants used in traditional medicine, and getting close to grazing impala on foot changes your entire relationship with the wild. Fly back to Dar es Salaam before midday, arriving with eyes full of wild Africa and a quiet reluctance to leave.",
                accommodation: "N/A",
                meals: "Breakfast"
            }
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
            {
                day: 1,
                title: "Arrival in Zanzibar — The Spice Island Welcomes You",
                description: "Step off the plane into warm, salt-scented Indian Ocean air. Your driver meets you at Zanzibar International Airport and transfers you to your Stone Town hotel — one of Africa's most evocative historic quarters. Check in, take a slow walk through the labyrinthine alleyways of carved wooden doors and faded Ottoman architecture, and enjoy dinner at a candlelit rooftop restaurant overlooking the harbour.",
                accommodation: "Stone Town Boutique Hotel",
                meals: "Dinner"
            },
            {
                day: 2,
                title: "Stone Town & Spice Farm — Culture, History & Aroma",
                description: "Start the morning with a guided walking tour of Stone Town's UNESCO-listed old quarter. Visit the former slave market, the Palace Museum, and the birthplace of Freddie Mercury. Then venture to a working spice farm where cloves, cinnamon, vanilla, and turmeric are grown — taste them fresh from the plant and learn their uses in Swahili cooking. After lunch, transfer to your beachside resort on Zanzibar's East Coast.",
                accommodation: "4-Star Beach Resort, East Coast",
                meals: "Breakfast, Lunch"
            },
            {
                day: 3,
                title: "Beach Day — Pure Paradise",
                description: "Zanzibar's East Coast beaches are among the finest in the world — powder-white coral sand shelving gently into warm, crystal-clear turquoise water. Today is yours entirely. Read, swim, snorkel the house reef, or simply listen to the ocean. Lunches of fresh-caught grilled fish and coconut rice are served in the shade of palm trees that lean out over the sand.",
                accommodation: "4-Star Beach Resort, East Coast",
                meals: "Breakfast"
            },
            {
                day: 4,
                title: "Blue Lagoon & Snorkeling — Underwater Zanzibar",
                description: "Board a traditional dhow for a sailing trip to the stunning Blue Lagoon. Below the surface, a kaleidoscopic coral garden teems with parrotfish, angelfish, sea turtles, and reef sharks. Snorkelling equipment is provided and guides point out the most remarkable marine life. Return to shore for a grilled seafood lunch served on a sandbank before your final afternoon at the resort.",
                accommodation: "4-Star Beach Resort, East Coast",
                meals: "Breakfast, Lunch"
            },
            {
                day: 5,
                title: "Departure — Zanzibar Sends You Home",
                description: "A final breakfast with the sound of the Indian Ocean before transferring to the airport. Zanzibar has a way of slowing people down, making the world feel a little more beautiful and unhurried — a feeling that tends to linger long after the flight home.",
                accommodation: "N/A",
                meals: "Breakfast"
            }
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
            {
                day: 1,
                title: "Honeymoon Arrival — A Private Welcome",
                description: "Your villa manager meets you at the airport with a hand-written welcome card and a garland of frangipani. The drive to your private villa takes you along coastal roads lined with palm trees and glimpses of turquoise ocean. Upon arrival, chilled champagne and a flower-petal-decorated bed await. Dinner is served on your private terrace under the stars — just the two of you.",
                accommodation: "Exclusive 5-Star Private Villa",
                meals: "Dinner"
            },
            {
                day: 2,
                title: "Private Island Picnic — A Sandbank to Yourselves",
                description: "Board your private boat and sail to a remote sandbank that emerges from the Indian Ocean at low tide. Your villa team has prepared a lavish picnic: chilled wines, smoked fish, fresh tropical fruit, and handmade chocolates. Snorkel the surrounding reef, swim in the warm shallows, or simply sit together at the edge of the world. Return by late afternoon as the tide begins to reclaim the island.",
                accommodation: "Exclusive 5-Star Private Villa",
                meals: "Breakfast, Picnic Lunch, Dinner"
            },
            {
                day: 3,
                title: "Spa Day — Wellness for Two",
                description: "A full day of rest, renewal, and connection. Begin with a couples' sunrise yoga session on the deck, followed by a private spa treatment — warm stone massage, deep tissue, or a traditional Zanzibar coconut oil ritual, your choice. The afternoon is spent at your private plunge pool with fresh juices and light snacks. The evening brings a candlelit bath drawn with rose petals and essential oils.",
                accommodation: "Exclusive 5-Star Private Villa",
                meals: "Breakfast, Dinner"
            },
            {
                day: 4,
                title: "Sunset Dhow Cruise — A Sailing Romance",
                description: "Board a traditional Zanzibar dhow as the afternoon softens into evening. The crew sets the white sails and you glide across the calm water as the sky turns amber, rose, and violet. Cold champagne, oysters, and fresh prawns are served as the sun dips below the horizon. Return to shore under the first stars of the night, the scent of the ocean still on your skin.",
                accommodation: "Exclusive 5-Star Private Villa",
                meals: "Breakfast, Dinner"
            },
            {
                day: 5,
                title: "Leisure — Your Private Paradise",
                description: "No schedule. No obligations. Sleep as late as you wish, breakfast in bed if you prefer. The villa's private pool, the beach beyond, and the endless ocean are entirely yours. Arrange snorkelling, a deep-sea fishing trip, or a cycling tour of the nearby villages if you wish — or simply do nothing at all. This is the luxury of time, freely given.",
                accommodation: "Exclusive 5-Star Private Villa",
                meals: "Breakfast"
            },
            {
                day: 6,
                title: "Stone Town — A Private Evening in the Old City",
                description: "Your private guide leads you through the enchanting alleyways of Stone Town as the old city comes alive in the evening light. Visit the spice market, watch craftsmen carve the famous Zanzibar doors, and discover hidden courtyards. Dinner is reserved at one of Stone Town's finest rooftop restaurants — a candlelit table with views over the harbour — followed by an evening stroll along the waterfront.",
                accommodation: "Exclusive 5-Star Private Villa",
                meals: "Breakfast, Dinner"
            },
            {
                day: 7,
                title: "Final Leisure Day — Savour Every Moment",
                description: "Your last full day is designed to be savoured slowly. A private chef prepares your favourite breakfast at your requested time. The afternoon can include whatever you haven't yet done — a snorkelling trip, a cooking class learning Swahili cuisine, a beachside massage — or simply watching the sun slide into the ocean one final time from your private terrace.",
                accommodation: "Exclusive 5-Star Private Villa",
                meals: "Breakfast, Dinner"
            },
            {
                day: 8,
                title: "Departure — Carrying Zanzibar Home",
                description: "A private vehicle collects you and your luggage with care. Your villa team lines up to bid you farewell — a warmth that reflects everything about your stay. At the airport, you board your flight carrying not just memories but a renewed sense of closeness. Zanzibar gave you eight days of beauty, peace, and romance. It will stay with you always.",
                accommodation: "N/A",
                meals: "Breakfast"
            }
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
            {
                day: 1,
                title: "Arusha to Tarangire National Park — The Elephant Kingdom",
                description: "Depart Arusha in the morning and drive to Tarangire National Park, a landscape shaped by ancient baobab trees and the lifegiving Tarangire River. This park supports Africa's highest elephant density outside Botswana — it is not uncommon to encounter herds of 100 or more gathered at the river to drink. Spend the full day in game drives through diverse woodland and swamp habitats. Lions rest in the shade of massive trees. Hundreds of bird species fill the air. Overnight at a lodge near the park.",
                accommodation: "Mid-Range Lodge, Karatu",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Ngorongoro Crater — The World in a Bowl",
                description: "Rise early and drive to the Ngorongoro Conservation Area, descending 600 metres into the caldera of an extinct supervolcano. The crater floor is home to approximately 25,000 animals — lions, elephants, hippos, hyenas, zebra, wildebeest, flamingos, and the critically endangered black rhino in one of its last strongholds. Enjoy a picnic lunch on the crater floor before ascending and driving back to Arusha with memories that will never fade.",
                accommodation: "N/A (return to Arusha)",
                meals: "Breakfast, Lunch"
            }
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
            {
                day: 1,
                title: "Dar es Salaam to Mikumi — The Gateway Park",
                description: "Depart Dar es Salaam in the morning for the 4-hour scenic drive through the Eastern Arc Mountains. As you descend into the Mikumi basin, the Mkata Floodplain stretches ahead — a vast, flat grassland teeming with wildlife visible from the roadside. Arrive at your lodge in time for an afternoon game drive on the open plains where lions, giraffes, wildebeest, and zebra graze within metres of your vehicle.",
                accommodation: "Mikumi Wildlife Lodge",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Mikumi Full Day — Floodplain Abundance",
                description: "A full day on the Mkata Floodplain reveals Mikumi's extraordinary wealth of wildlife. Early morning drives find lions and leopards returning from their night's hunt. Later, hippos wallow in the Hippo Pool while hundreds of birds including the iconic lilac-breasted roller flash colour across the grasslands. Mikumi borders Nyerere National Park to the south, forming one of Africa's largest protected wildlife areas. Picnic lunch in the park.",
                accommodation: "Mikumi Wildlife Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Mikumi to Ruaha — Over the Escarpment",
                description: "Today's drive west through the Southern Highlands is one of Tanzania's most scenic road journeys. The road climbs through the Iringa Highlands, passing tea estates, highland villages, and ancient granite formations before descending dramatically into the Ruaha basin. The landscape becomes progressively wilder and more rugged. Arrive at your river lodge in time for an afternoon game drive along the Great Ruaha River.",
                accommodation: "Ruaha River Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Ruaha — Tanzania's Wildest Park",
                description: "A full day in Ruaha reveals why this vast, uncrowded wilderness is considered Tanzania's best-kept safari secret. Lion prides of extraordinary size patrol the riverine woodland. Huge elephant herds navigate the rocky landscape with surprising grace. The greater kudu — one of Africa's most magnificent antelopes — emerges from the bush along the river. Picnic lunch is served at a remote viewpoint overlooking the river and its abundant birdlife.",
                accommodation: "Ruaha River Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Ruaha to Mikumi — The Return Journey",
                description: "A final morning game drive captures Ruaha's early-morning magic — predators finishing their hunts, elephants at the water. Then begin the scenic return drive east over the Iringa Highlands. The evening arrives back at Mikumi, where the familiar floodplain is bathed in late afternoon light. A final game drive finds fresh wildlife encounters as the sun sets over the plains.",
                accommodation: "Mikumi Wildlife Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Mikumi to Dar es Salaam — A Southern Circuit Farewell",
                description: "One last morning game drive on the Mkata Floodplain — the perfect farewell to 6 days in Tanzania's remarkable Southern Circuit. Then drive back east through the mountains to Dar es Salaam. This itinerary gives you something the Northern Circuit rarely can: raw wilderness, solitude, and the profound satisfaction of a road safari that covered genuine distance through genuinely wild Tanzania.",
                accommodation: "N/A",
                meals: "Breakfast, Lunch"
            }
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
            {
                day: 1,
                title: "Fly In — Straight to the River",
                description: "Your flight from Dar es Salaam or Zanzibar deposits you in Africa's largest national reserve within 45 minutes. The transition from beach holiday to wild Africa is immediate and extraordinary. Meet your guide at the airstrip and head straight to the Rufiji River for a late-afternoon boat safari. The river is busy: hippos surface and groan, crocodiles bask along every sandbank, and the banks are thick with waterbirds as the sun turns the water gold.",
                accommodation: "Luxury River Lodge",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Game Drive — Lakes and Open Plains",
                description: "Today explores Nyerere's spectacular lake system and open grasslands. Lake Manze is renowned for its lion pride activity — these big cats are often seen hunting on the floodplain surrounding the lake in full view. Deeper into the reserve, wild dog packs trot along sandy tracks and sable antelope — rare in East Africa — emerge from the woodland. Afternoon boat safari drifts quietly through channels draped with fig trees and alive with kingfishers.",
                accommodation: "Luxury River Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Walking Safari & Game Drive — The Bush on Your Terms",
                description: "An armed ranger leads your morning walking safari through the miombo woodland, tracking animal prints and reading the subtle signs of a landscape in constant motion. The afternoon game drive covers the more remote northern reaches of the reserve. Bush lunch is served in a clearing beside the river, with hippos grunting in the reeds 20 metres away.",
                accommodation: "Luxury River Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Final Morning & Departure",
                description: "A final dawn activity — either a short boat ride or a morning game drive — extracts the last magic from this extraordinary destination before your guide transfers you to the airstrip. The flight back carries you above the vast green canopy of Nyerere with a new appreciation for just how large and wild this place truly is. The perfect complement to a Zanzibar beach holiday.",
                accommodation: "N/A",
                meals: "Breakfast"
            }
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
