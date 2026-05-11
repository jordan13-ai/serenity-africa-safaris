// Comprehensive Kilimanjaro Routes Data
// Serenity Africa Safaris

export interface DayItinerary {
    day: number;
    title: string;
    elevation: string;
    distance: string;
    time: string;
    description: string;
    terrain: string;
    meals: string;
}

export interface RouteData {
    slug: string;
    title: string;
    subtitle: string;
    duration: string;
    difficulty: string;
    distance: string;
    successRate: string;
    sceneryRating: number;
    crowdLevel: string;
    overview: string;
    bestFor: string[];
    highlights: string[];
    itinerary: DayItinerary[];
    accommodation: string;
    meals: string;
    bestTime: string;
    packingEssentials: string[];
    faqs: { question: string; answer: string }[];
    pricing?: { pax: string; price: string }[];
}

export const routesData: Record<string, RouteData> = {
    "lemosho-route": {
        slug: "lemosho-route",
        title: "Lemosho Route",
        subtitle: "The Premier Route for Success & Scenery",
        duration: "7-8 Days",
        difficulty: "Medium",
        distance: "70km / 42 miles",
        successRate: "95%",
        sceneryRating: 5,
        crowdLevel: "Medium",
        overview: "The Lemosho Route is widely considered the most scenic route on Kilimanjaro and boasts the highest success rate of all routes. Starting on the western side of the mountain, it traverses the stunning Shira Plateau before joining the Machame Route. The longer itinerary allows for excellent acclimatization, making it ideal for first-time climbers seeking the best chance of reaching Uhuru Peak.",
        bestFor: [
            "First-time Kilimanjaro climbers",
            "Those seeking the highest success rate",
            "Photographers and scenery enthusiasts",
            "Climbers who prefer less crowded trails (especially early days)"
        ],
        highlights: [
            "Shira Plateau - vast high-altitude moorland",
            "Lava Tower acclimatization hike",
            "Barranco Wall scramble",
            "Southern Circuit with 360° views",
            "Excellent wildlife sightings in lower zones"
        ],
        itinerary: [
            {
                day: 1,
                title: "Londorossi Gate to Mti Mkubwa Camp (Big Tree Camp)",
                elevation: "2,100m to 2,895m",
                distance: "6km / 4 miles",
                time: "3-4 hours",
                description: "Drive from Moshi to Londorossi Gate (2-3 hours) for registration. Continue by 4x4 to the trailhead. Begin your trek through pristine montane rainforest rich with wildlife. Look for colobus monkeys, blue monkeys, and exotic birds. The trail is relatively gentle, allowing you to ease into the trek.",
                terrain: "Rainforest - muddy, rooted trails",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Mti Mkubwa Camp to Shira 1 Camp",
                elevation: "2,895m to 3,505m",
                distance: "8km / 5 miles",
                time: "5-6 hours",
                description: "Leave the rainforest behind and enter the heath and moorland zone. The trail steepens as you climb onto the Shira Plateau, one of the highest plateaus on Earth. Enjoy spectacular views of Kibo Peak ahead and Mount Meru in the distance. Camp on the western edge of the plateau.",
                terrain: "Heath and moorland - rocky, gradual ascent",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Shira 1 Camp to Shira 2 Camp",
                elevation: "3,505m to 3,850m",
                distance: "7km / 4 miles",
                time: "4-5 hours",
                description: "A relatively easy acclimatization day crossing the Shira Plateau from west to east. The landscape is otherworldly - vast moorland dotted with volcanic rock formations. Optional afternoon hike to Shira Cathedral (3,900m) for additional acclimatization. Excellent views of Kibo's glaciated summit.",
                terrain: "Moorland plateau - gentle rolling terrain",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Shira 2 Camp to Lava Tower to Barranco Camp",
                elevation: "3,850m to 4,600m to 3,960m",
                distance: "10km / 6 miles",
                time: "7-8 hours",
                description: "Critical acclimatization day. Climb steadily to Lava Tower (4,600m), a volcanic rock formation, for lunch. You may feel the effects of altitude here. Then descend to Barranco Camp in the valley below. This 'climb high, sleep low' strategy is key to successful acclimatization. Camp beneath the imposing Barranco Wall.",
                terrain: "Alpine desert - rocky, significant elevation gain then loss",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Barranco Camp to Karanga Camp",
                elevation: "3,960m to 3,995m",
                distance: "5km / 3 miles",
                time: "4-5 hours",
                description: "Start with the famous Barranco Wall - a 257m rock scramble that looks intimidating but is actually fun and non-technical. Enjoy stunning views from the top. Continue with several ups and downs through valleys and ridges. Short day allows for rest before summit push. Karanga is the last water point before summit.",
                terrain: "Mixed - rock scrambling, then ridge walking",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Karanga Camp to Barafu Camp",
                elevation: "3,995m to 4,673m",
                distance: "4km / 2.5 miles",
                time: "4-5 hours",
                description: "Climb steadily to Barafu Camp (base camp). The landscape becomes increasingly barren and lunar-like. Complete the Southern Circuit, giving you views from all sides of the mountain. Arrive by early afternoon. Rest, eat an early dinner, and prepare your gear for summit night. Sleep is difficult due to altitude and anticipation. Wake around 11pm for summit attempt.",
                terrain: "Alpine desert - steep, rocky, exposed",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 7,
                title: "Barafu Camp to Uhuru Peak to Mweka Camp",
                elevation: "4,673m to 5,895m to 3,068m",
                distance: "17km / 11 miles",
                time: "12-15 hours",
                description: "Begin summit push around midnight. Climb slowly through scree and snow to Stella Point (5,756m) on the crater rim, arriving at sunrise. The final push to Uhuru Peak (5,895m) takes 1-2 hours along the crater rim. Celebrate at the Roof of Africa! After photos, descend to Barafu for brunch, then continue down to Mweka Camp in the rainforest. Longest and most challenging day.",
                terrain: "Scree, snow, then rainforest descent",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 8,
                title: "Mweka Camp to Mweka Gate",
                elevation: "3,068m to 1,640m",
                distance: "10km / 6 miles",
                time: "3-4 hours",
                description: "Final descent through lush rainforest. Muddy and slippery - trekking poles recommended. Arrive at Mweka Gate for registration and to receive your summit certificate. Celebrate with your crew. Transfer back to Moshi for hot shower, celebration dinner, and well-deserved rest.",
                terrain: "Rainforest - muddy, steep descent",
                meals: "Breakfast, Lunch"
            }
        ],
        accommodation: "Mountain tents (2-person tents for single occupancy)",
        meals: "3 meals daily - breakfast, lunch, dinner. Vegetarian and special diets accommodated.",
        bestTime: "January-March and June-October for best weather. Can be climbed year-round.",
        packingEssentials: [
            "4-season sleeping bag rated to -10°C",
            "Waterproof hiking boots (broken in)",
            "Insulated jacket (down or synthetic)",
            "Waterproof rain jacket and pants",
            "Thermal base layers (top and bottom)",
            "Warm hat, sun hat, and buff/neck gaiter",
            "Sunglasses (UV protection)",
            "Headlamp with extra batteries",
            "Trekking poles",
            "Daypack (30-40L)",
            "Water bottles or hydration system (3L capacity)",
            "Sunscreen (SPF 50+) and lip balm"
        ],
        faqs: [
            {
                question: "Why is Lemosho more expensive than other routes?",
                answer: "Lemosho requires a longer drive to the starting point and takes 7-8 days, meaning more park fees, food, and crew wages. However, the higher cost translates to a 95% success rate compared to 60-75% on shorter routes."
            },
            {
                question: "Is 7 or 8 days better?",
                answer: "The 8-day itinerary adds an extra acclimatization day at Karanga Camp, increasing success rates to nearly 98%. We recommend 8 days for first-time high-altitude trekkers or those over 50."
            },
            {
                question: "How crowded is the Lemosho Route?",
                answer: "The first 2-3 days are quiet. After joining the Machame Route at Barranco, it becomes busier but still less crowded than starting on Machame from day one."
            }
        ]
    },
    "machame-route": {
        slug: "machame-route",
        title: "Machame Route",
        subtitle: "The Whiskey Route - Scenic & Challenging",
        duration: "6-7 Days",
        difficulty: "Hard",
        distance: "62km / 37 miles",
        successRate: "85%",
        sceneryRating: 5,
        crowdLevel: "High",
        overview: "The Machame Route, nicknamed the 'Whiskey Route' (as opposed to the easier 'Coca-Cola' Marangu Route), is the most popular route on Kilimanjaro. It offers incredible scenery, varied terrain, and a good acclimatization profile with several 'climb high, sleep low' days. The route is more physically demanding than Marangu or Rongai but rewards climbers with stunning views and a higher success rate.",
        bestFor: [
            "Fit hikers seeking a challenge",
            "Those wanting varied and scenic terrain",
            "Climbers comfortable with camping",
            "Adventure seekers who don't mind crowds"
        ],
        highlights: [
            "Lava Tower - dramatic volcanic formation",
            "Barranco Wall - exciting scramble",
            "Shira Plateau crossing",
            "Varied ecosystems from rainforest to arctic",
            "Southern Circuit with panoramic views"
        ],
        itinerary: [
            {
                day: 1,
                title: "Machame Gate to Machame Camp",
                elevation: "1,800m to 3,000m",
                distance: "11km / 7 miles",
                time: "5-7 hours",
                description: "Drive from Moshi to Machame Gate (45 minutes) for registration. Begin trekking through dense, beautiful rainforest on a winding trail up a ridge. The path can be muddy and slippery. Watch for colobus monkeys and listen for exotic birds. Arrive at Machame Camp on the edge of the rainforest with views of Kibo Peak if weather permits.",
                terrain: "Rainforest - muddy, rooted, steep in sections",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Machame Camp to Shira Camp",
                elevation: "3,000m to 3,850m",
                distance: "5km / 3 miles",
                time: "4-6 hours",
                description: "Leave the rainforest and enter the heath and moorland zone. The trail becomes steeper and rockier as you climb along a ridge. Cross a valley and ascend steeply to Shira Camp on the Shira Plateau. Spectacular views of Kibo Peak and the Western Breach. The landscape opens up dramatically.",
                terrain: "Heath and moorland - rocky, steep ascent",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Shira Camp to Lava Tower to Barranco Camp",
                elevation: "3,850m to 4,600m to 3,960m",
                distance: "10km / 6 miles",
                time: "6-8 hours",
                description: "Key acclimatization day. Trek east across the Shira Plateau, then climb steadily to Lava Tower (4,600m), a massive volcanic rock formation. Have lunch here and feel the altitude. Then descend into the Great Barranco Valley. This 'climb high, sleep low' day is crucial for acclimatization. Camp beneath the imposing Barranco Wall.",
                terrain: "Alpine desert - rocky, significant elevation change",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Barranco Camp to Karanga Camp",
                elevation: "3,960m to 3,995m",
                distance: "5km / 3 miles",
                time: "4-5 hours",
                description: "Begin with the famous Barranco Wall - a 257-meter scramble that looks daunting but is actually fun and requires no technical skills. Enjoy incredible views from the top. Continue with ups and downs through valleys and ridges on the Southern Circuit. Short day allows for rest and acclimatization. Karanga is the last water source before summit.",
                terrain: "Rock scrambling, then ridge walking",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Karanga Camp to Barafu Camp",
                elevation: "3,995m to 4,673m",
                distance: "4km / 2.5 miles",
                time: "4-5 hours",
                description: "Climb steadily to Barafu Camp (base camp). The landscape is barren, lunar-like alpine desert. Complete the Southern Circuit with views from all angles. Arrive early afternoon. Rest, hydrate, and eat an early dinner. Prepare gear for summit night. Try to sleep (difficult due to altitude). Wake around 11pm for summit attempt.",
                terrain: "Alpine desert - steep, rocky, exposed",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Barafu Camp to Uhuru Peak to Mweka Camp",
                elevation: "4,673m to 5,895m to 3,068m",
                distance: "17km / 11 miles",
                time: "12-15 hours",
                description: "Summit day! Begin around midnight. Climb slowly through scree and loose volcanic rock to Stella Point (5,756m) on the crater rim, arriving at sunrise. The final 1-2 hour push along the crater rim to Uhuru Peak (5,895m) - the Roof of Africa! Celebrate and take photos. Descend to Barafu for brunch, then continue down to Mweka Camp in the rainforest. Extremely long day.",
                terrain: "Scree, snow, ice, then rainforest descent",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 7,
                title: "Mweka Camp to Mweka Gate",
                elevation: "3,068m to 1,640m",
                distance: "10km / 6 miles",
                time: "3-4 hours",
                description: "Final descent through lush montane rainforest. Trail is muddy and slippery - trekking poles essential. Arrive at Mweka Gate for registration and summit certificate collection. Celebrate with your crew and distribute tips. Transfer back to Moshi for hot shower, massage, and celebration dinner.",
                terrain: "Rainforest - muddy, steep descent",
                meals: "Breakfast, Lunch"
            }
        ],
        accommodation: "Mountain tents (2-person tents for single occupancy)",
        meals: "3 meals daily. Hot breakfast, packed lunch, 3-course dinner. Vegetarian options available.",
        bestTime: "January-March and June-October. Avoid April-May (heavy rains).",
        packingEssentials: [
            "4-season sleeping bag (-10°C rating)",
            "Waterproof hiking boots (well broken in)",
            "Down or synthetic insulated jacket",
            "Waterproof shell jacket and pants (Gore-Tex)",
            "Thermal base layers (merino wool recommended)",
            "Fleece mid-layer",
            "Warm hat, sun hat, balaclava",
            "Sunglasses with UV protection",
            "Headlamp with extra batteries",
            "Trekking poles (essential for descent)",
            "Daypack (30-40L)",
            "Water bottles (3L total capacity)",
            "Sunscreen SPF 50+ and lip balm with SPF"
        ],
        faqs: [
            {
                question: "Is Machame harder than Marangu?",
                answer: "Yes, Machame is more physically demanding with steeper sections and longer days. However, the better acclimatization profile means higher success rates (85% vs 65% for Marangu 5-day)."
            },
            {
                question: "Should I do 6 or 7 days?",
                answer: "We strongly recommend 7 days. The extra day at Karanga Camp significantly improves acclimatization and increases success rates from 75% to 85%."
            },
            {
                question: "How crowded is Machame?",
                answer: "Machame is the most popular route, so expect to see other groups daily, especially at camps. However, the mountain is vast and doesn't feel overcrowded. For more solitude, consider Lemosho or Rongai."
            }
        ]
    },
    "marangu-route": {
        slug: "marangu-route",
        title: "Marangu Route",
        subtitle: "The Coca-Cola Route - Hut Comfort",
        duration: "5-6 Days",
        difficulty: "Medium",
        distance: "72km / 45 miles",
        successRate: "75%",
        sceneryRating: 3,
        crowdLevel: "High",
        overview: "The Marangu Route, nicknamed the 'Coca-Cola Route' due to the availability of soft drinks at the huts, is the oldest and most established route on Kilimanjaro. It's the only route offering hut accommodation instead of camping, making it popular with those who prefer sleeping in beds. However, the 5-day itinerary has a lower success rate due to less acclimatization time. We strongly recommend the 6-day option.",
        bestFor: [
            "Those who dislike camping",
            "Older climbers preferring hut comfort",
            "Rainy season climbers (huts provide shelter)",
            "Budget-conscious climbers (slightly cheaper than camping routes)"
        ],
        highlights: [
            "Mandara Hut - cozy A-frame cabins",
            "Horombo Hut - stunning views of Mawenzi and Kibo",
            "Maundi Crater - optional side hike",
            "The Saddle - vast alpine desert between peaks",
            "Hut accommodation with dining halls"
        ],
        itinerary: [
            {
                day: 1,
                title: "Marangu Gate to Mandara Hut",
                elevation: "1,860m to 2,700m",
                distance: "8km / 5 miles",
                time: "4-5 hours",
                description: "Drive from Moshi to Marangu Gate (1 hour) for registration. Begin trekking through beautiful rainforest on a well-maintained trail. Look for colobus monkeys and blue monkeys. The path is wide and gradual. Arrive at Mandara Hut, a collection of A-frame wooden cabins with bunk beds (4-6 beds per hut). Shared dining hall and bathrooms.",
                terrain: "Rainforest - well-maintained trail, gradual ascent",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Mandara Hut to Horombo Hut",
                elevation: "2,700m to 3,720m",
                distance: "12km / 7 miles",
                time: "6-8 hours",
                description: "Leave the rainforest and enter the heath and moorland zone. The trail becomes steeper and more exposed. Pass through open moorland with giant heather and groundsel plants. Spectacular views of Mawenzi Peak (Kilimanjaro's second summit) and Kibo. Arrive at Horombo Hut, the largest camp on the mountain with multiple huts and a spacious dining hall.",
                terrain: "Heath and moorland - steeper, more exposed",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Horombo Hut Acclimatization Day (6-day option only)",
                elevation: "3,720m to 4,300m to 3,720m",
                distance: "10km / 6 miles round trip",
                time: "4-6 hours",
                description: "Extra acclimatization day (highly recommended). Hike towards Mawenzi Hut or Zebra Rocks, reaching about 4,300m, then return to Horombo for the night. This 'climb high, sleep low' day significantly improves your chances of summit success. Alternatively, rest at camp and take short walks. This day increases success rate from 65% to 75%.",
                terrain: "Alpine desert - rocky, gradual ascent",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Horombo Hut to Kibo Hut",
                elevation: "3,720m to 4,703m",
                distance: "10km / 6 miles",
                time: "6-8 hours",
                description: "Trek across the vast Saddle, a lunar-like alpine desert between Mawenzi and Kibo peaks. The landscape is barren and otherworldly. Gradual ascent with little vegetation. Arrive at Kibo Hut, the base camp for summit attempts. Basic stone hut with bunk beds. Rest, eat early dinner, and prepare for summit night. Try to sleep. Wake around 11pm.",
                terrain: "Alpine desert - barren, gradual ascent",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Kibo Hut to Uhuru Peak to Horombo Hut",
                elevation: "4,703m to 5,895m to 3,720m",
                distance: "22km / 14 miles",
                time: "12-15 hours",
                description: "Summit day! Begin around midnight. Climb steep scree slopes in switchbacks to Gilman's Point (5,681m) on the crater rim at sunrise. Continue along the crater rim for 1-2 hours to Uhuru Peak (5,895m) - the Roof of Africa! Celebrate and take photos. Descend to Kibo Hut for brunch, then continue down to Horombo Hut. Very long and exhausting day.",
                terrain: "Scree, crater rim, then descent",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Horombo Hut to Marangu Gate",
                elevation: "3,720m to 1,860m",
                distance: "20km / 12 miles",
                time: "5-7 hours",
                description: "Final descent through moorland and rainforest. Long day but mostly downhill. Arrive at Marangu Gate for registration and summit certificate. Celebrate with your crew and distribute tips. Transfer back to Moshi for hot shower and celebration dinner. Note: On 5-day itinerary, this descent is from Kibo Hut to Marangu Gate in one day (very long).",
                terrain: "Moorland and rainforest - long descent",
                meals: "Breakfast, Lunch"
            }
        ],
        accommodation: "Mountain huts with bunk beds (4-6 beds per room). Shared dining halls and bathrooms. Bring sleeping bag.",
        meals: "3 meals daily in dining halls. Hot breakfast, packed lunch, 3-course dinner.",
        bestTime: "Year-round, but best January-March and June-October. Good choice during rainy season (April-May) due to hut shelter.",
        packingEssentials: [
            "4-season sleeping bag (-10°C rating)",
            "Sleeping bag liner (huts can be dusty)",
            "Waterproof hiking boots",
            "Insulated jacket",
            "Waterproof rain gear",
            "Thermal layers",
            "Warm hat and sun hat",
            "Sunglasses (UV protection)",
            "Headlamp",
            "Trekking poles",
            "Daypack",
            "Water bottles (3L capacity)",
            "Sunscreen and lip balm",
            "Earplugs (huts can be noisy)"
        ],
        faqs: [
            {
                question: "Are the huts comfortable?",
                answer: "The huts are basic but functional. You get a mattress on a bunk bed, but you need your own sleeping bag. There are dining halls and basic toilet facilities. Don't expect luxury - they're mountain huts, not hotels."
            },
            {
                question: "Why is the success rate lower on Marangu?",
                answer: "Most people do the 5-day itinerary which doesn't allow enough acclimatization time. The 6-day option with an extra day at Horombo increases success from 65% to 75%. We strongly recommend 6 days."
            },
            {
                question: "Is Marangu easier because of the huts?",
                answer: "The huts make it more comfortable, but the climb is still challenging. The ascent and descent use the same path, which can be mentally tiring. The summit night from Kibo Hut is steep and difficult."
            }
        ]
    },
    "rongai-route": {
        slug: "rongai-route",
        title: "Rongai Route",
        subtitle: "The Northern Approach - Dry & Remote",
        duration: "6-7 Days",
        difficulty: "Medium",
        distance: "73km / 45 miles",
        successRate: "80%",
        sceneryRating: 4,
        crowdLevel: "Low",
        overview: "The Rongai Route is the only route approaching Kilimanjaro from the north, near the Kenyan border. It's known for being drier, more remote, and less crowded than the southern routes. The gradual ascent makes it suitable for less experienced trekkers, though the success rate is slightly lower than Lemosho due to less optimal acclimatization. Rongai is an excellent choice during the rainy season when southern routes are muddy.",
        bestFor: [
            "Those seeking solitude and fewer crowds",
            "Rainy season climbers (April-May, November)",
            "First-time trekkers wanting a gradual ascent",
            "Wildlife enthusiasts (better animal sightings)"
        ],
        highlights: [
            "Mawenzi Peak views from the north",
            "Remote wilderness experience",
            "Possible wildlife sightings (elephants, buffalo)",
            "Drier conditions year-round",
            "Unique perspective of Kilimanjaro"
        ],
        itinerary: [
            {
                day: 1,
                title: "Rongai Gate to Simba Camp",
                elevation: "1,950m to 2,625m",
                distance: "8km / 5 miles",
                time: "3-4 hours",
                description: "Drive from Moshi to Rongai Gate on the northern side of Kilimanjaro (3-4 hours), passing through maize and potato fields. Begin trekking through pine forest and then into moorland. The trail is gentle and scenic. Look for wildlife including colobus monkeys and possibly elephants or buffalo. Camp at Simba Camp (Lion Camp) with views of the Kenyan plains.",
                terrain: "Pine forest to moorland - gentle, gradual ascent",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Simba Camp to Second Cave Camp",
                elevation: "2,625m to 3,450m",
                distance: "6km / 4 miles",
                time: "3-4 hours",
                description: "Continue ascending through moorland with stunning views of Kibo Peak and the eastern ice fields. The landscape becomes more barren as you gain altitude. Relatively short day allows for good acclimatization. Second Cave Camp offers spectacular views, especially at sunset.",
                terrain: "Moorland - steady, gradual ascent",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Second Cave to Kikelelwa Camp",
                elevation: "3,450m to 3,600m",
                distance: "6km / 4 miles",
                time: "3-4 hours",
                description: "Short day with minimal elevation gain, excellent for acclimatization. Trek through moorland with increasing views of Mawenzi Peak. The landscape is wild and remote. Kikelelwa Camp (also called Third Cave) is situated in a beautiful valley with dramatic views of Mawenzi's jagged peaks.",
                terrain: "Moorland - gentle terrain, minimal elevation gain",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Kikelelwa Camp to Mawenzi Tarn Camp",
                elevation: "3,600m to 4,315m",
                distance: "5km / 3 miles",
                time: "3-4 hours",
                description: "Climb steadily to Mawenzi Tarn Camp, located beneath the towering spires of Mawenzi Peak. The camp sits beside a beautiful alpine tarn (small mountain lake). Afternoon acclimatization hike recommended - climb partway up Mawenzi for stunning views. This is one of the most scenic camps on the mountain.",
                terrain: "Alpine zone - steeper ascent, rocky terrain",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Mawenzi Tarn to Kibo Hut",
                elevation: "4,315m to 4,703m",
                distance: "8km / 5 miles",
                time: "5-6 hours",
                description: "Cross the lunar-like Saddle between Mawenzi and Kibo peaks. The landscape is barren, windswept alpine desert. Gradual ascent to Kibo Hut (same base camp used by Marangu Route). Arrive by early afternoon. Rest, hydrate, and eat an early dinner. Prepare gear for summit night. Try to sleep. Wake around 11pm for summit attempt.",
                terrain: "Alpine desert - barren, gradual ascent",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Kibo Hut to Uhuru Peak to Horombo Hut",
                elevation: "4,703m to 5,895m to 3,720m",
                distance: "22km / 14 miles",
                time: "12-15 hours",
                description: "Summit day! Begin around midnight. Climb steep scree slopes in switchbacks to Gilman's Point (5,681m) on the crater rim at sunrise. Continue along the crater rim for 1-2 hours to Uhuru Peak (5,895m). Celebrate at the Roof of Africa! Descend to Kibo Hut for brunch, then continue down to Horombo Hut via the Marangu Route. Extremely long day.",
                terrain: "Scree, crater rim, then descent via Marangu",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 7,
                title: "Horombo Hut to Marangu Gate",
                elevation: "3,720m to 1,860m",
                distance: "20km / 12 miles",
                time: "5-7 hours",
                description: "Final descent through moorland and rainforest on the Marangu Route. Long day but mostly downhill. Pass through Mandara Hut for lunch. Arrive at Marangu Gate for registration and summit certificate. Celebrate with your crew and distribute tips. Transfer back to Moshi for hot shower and celebration dinner.",
                terrain: "Moorland and rainforest - long descent",
                meals: "Breakfast, Lunch"
            }
        ],
        accommodation: "Mountain tents (2-person tents for single occupancy). Kibo Hut on summit night.",
        meals: "3 meals daily. Hot breakfast, packed lunch, 3-course dinner.",
        bestTime: "Excellent year-round. Best choice during rainy season (April-May, November) as northern side is drier.",
        packingEssentials: [
            "4-season sleeping bag (-10°C rating)",
            "Waterproof hiking boots (well broken in)",
            "Insulated jacket (down or synthetic)",
            "Waterproof rain jacket and pants (less rain, but still needed)",
            "Thermal base layers (merino wool recommended)",
            "Fleece mid-layer",
            "Warm hat, sun hat, buff/neck gaiter",
            "Sunglasses (UV protection - essential for dry, sunny conditions)",
            "Headlamp with extra batteries",
            "Trekking poles (helpful for descent)",
            "Daypack (30-40L)",
            "Water bottles (3L capacity - northern route is drier)",
            "Sunscreen SPF 50+ and lip balm (extra important on sunny northern side)",
            "Dust mask or buff (for dusty conditions on northern slopes)",
            "Hand sanitizer and wet wipes (limited water for washing)"
        ],
        faqs: [
            {
                question: "Why choose Rongai over other routes?",
                answer: "Rongai is ideal if you want fewer crowds, drier conditions (especially during rainy season), and a more gradual ascent. It's also great for wildlife viewing in the lower zones."
            },
            {
                question: "Is Rongai easier than Machame?",
                answer: "Rongai has a more gradual ascent and is less physically demanding day-to-day. However, the acclimatization profile isn't as good as Machame or Lemosho, resulting in a slightly lower success rate (80% vs 85-95%)."
            },
            {
                question: "Can I descend via Rongai?",
                answer: "No, park regulations require descent via Marangu Route. This gives you the benefit of seeing two different sides of the mountain."
            }
        ]
    },
    "umbwe-route": {
        slug: "umbwe-route",
        title: "Umbwe Route",
        subtitle: "The Steepest Challenge - For Experts Only",
        duration: "6 Days",
        difficulty: "Experts Only",
        distance: "53km / 33 miles",
        successRate: "60%",
        sceneryRating: 5,
        crowdLevel: "Very Low",
        overview: "The Umbwe Route is the steepest, most direct, and most challenging route on Kilimanjaro. It's recommended only for experienced, well-acclimatized trekkers who are comfortable with steep, exposed terrain. The rapid ascent means poor acclimatization and the lowest success rate of all routes. However, those who succeed are rewarded with solitude, dramatic scenery, and the satisfaction of conquering Kilimanjaro's toughest path.",
        bestFor: [
            "Experienced mountaineers and trekkers",
            "Those recently acclimatized from other high-altitude treks",
            "Adventure seekers wanting a challenge",
            "Climbers who value solitude over comfort"
        ],
        highlights: [
            "Steepest and most direct route",
            "Complete solitude - very few climbers",
            "Dramatic Western Breach approach (optional)",
            "Stunning views from Barranco Wall",
            "True wilderness experience"
        ],
        itinerary: [
            {
                day: 1,
                title: "Umbwe Gate to Umbwe Cave Camp",
                elevation: "1,600m to 2,850m",
                distance: "11km / 7 miles",
                time: "5-7 hours",
                description: "Drive from Moshi to Umbwe Gate (1.5 hours). Begin trekking through dense, pristine rainforest on a steep, narrow trail. The path is muddy, rooted, and relentlessly uphill - this is the steepest first day of any route. Very few other climbers. Camp at Umbwe Cave Camp in the forest. Significant elevation gain on day one.",
                terrain: "Rainforest - very steep, muddy, narrow trail",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Umbwe Cave Camp to Barranco Camp",
                elevation: "2,850m to 3,960m",
                distance: "6km / 4 miles",
                time: "4-6 hours",
                description: "Continue steep ascent, leaving the rainforest and entering the heath and moorland zone. The trail follows a narrow ridge with dramatic drop-offs on either side. Spectacular but exposed. Arrive at Barranco Camp beneath the imposing Barranco Wall. This is a huge elevation gain in just two days - altitude sickness risk is high.",
                terrain: "Heath and moorland - very steep, exposed ridge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Barranco Camp to Karanga Camp",
                elevation: "3,960m to 3,995m",
                distance: "5km / 3 miles",
                time: "4-5 hours",
                description: "Begin with the famous Barranco Wall - a 257m rock scramble. Looks intimidating but is fun and non-technical. Enjoy incredible views from the top. Continue with ups and downs through valleys and ridges. Short day allows for crucial acclimatization after the rapid ascent. Karanga is the last water point before summit.",
                terrain: "Rock scrambling, then ridge walking",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Karanga Camp to Barafu Camp",
                elevation: "3,995m to 4,673m",
                distance: "4km / 2.5 miles",
                time: "4-5 hours",
                description: "Climb steadily to Barafu Camp (base camp). The landscape is barren, lunar-like alpine desert. Complete the Southern Circuit. Arrive early afternoon. Rest, hydrate, and eat an early dinner. Prepare gear for summit night. Try to sleep (difficult due to altitude). Wake around 11pm for summit attempt.",
                terrain: "Alpine desert - steep, rocky, exposed",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Barafu Camp to Uhuru Peak to Mweka Camp",
                elevation: "4,673m to 5,895m to 3,068m",
                distance: "17km / 11 miles",
                time: "12-15 hours",
                description: "Summit day! Begin around midnight. Climb slowly through scree and loose rock to Stella Point (5,756m) on the crater rim at sunrise. Final 1-2 hour push along the crater rim to Uhuru Peak (5,895m) - the Roof of Africa! Celebrate and take photos. Descend to Barafu for brunch, then continue down to Mweka Camp in the rainforest. Extremely long and exhausting day.",
                terrain: "Scree, snow, then rainforest descent",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Mweka Camp to Mweka Gate",
                elevation: "3,068m to 1,640m",
                distance: "10km / 6 miles",
                time: "3-4 hours",
                description: "Final descent through lush rainforest. Muddy and slippery - trekking poles essential. Arrive at Mweka Gate for registration and summit certificate. Celebrate with your crew and distribute tips. Transfer back to Moshi for hot shower and celebration dinner.",
                terrain: "Rainforest - muddy, steep descent",
                meals: "Breakfast, Lunch"
            }
        ],
        accommodation: "Mountain tents (2-person tents for single occupancy)",
        meals: "3 meals daily. Hot breakfast, packed lunch, 3-course dinner.",
        bestTime: "January-March and June-October. Not recommended during rainy season due to slippery conditions.",
        packingEssentials: [
            "4-season sleeping bag (-10°C rating)",
            "Waterproof hiking boots with excellent ankle support",
            "Insulated jacket (down or synthetic)",
            "Waterproof shell jacket and pants (Gore-Tex)",
            "Thermal base layers",
            "Fleece mid-layer",
            "Warm hat, sun hat, balaclava",
            "Sunglasses (UV protection)",
            "Headlamp with extra batteries",
            "Trekking poles (essential for steep terrain)",
            "Daypack (30-40L)",
            "Water bottles (3L capacity)",
            "Sunscreen SPF 50+ and lip balm",
            "Altitude sickness medication (Diamox)"
        ],
        faqs: [
            {
                question: "Who should attempt Umbwe?",
                answer: "Only experienced trekkers who have previously trekked above 4,000m and are confident in their ability to acclimatize quickly. We recommend having climbed Kilimanjaro before via another route, or having recent high-altitude experience (e.g., trekking in Nepal, Peru, or the Alps)."
            },
            {
                question: "Why is the success rate so low?",
                answer: "The rapid ascent (1,600m to 3,960m in just two days) doesn't allow proper acclimatization. Many climbers experience severe altitude sickness and must turn back. The 60% success rate is significantly lower than other routes."
            },
            {
                question: "Can I add acclimatization days?",
                answer: "Yes, we can add an extra day at Barranco or Karanga Camp to improve acclimatization. This increases the success rate to about 70-75% but adds to the cost."
            },
            {
                question: "Is Umbwe dangerous?",
                answer: "The route itself is not technically dangerous - no climbing equipment needed. However, the rapid ascent increases altitude sickness risk, which can be serious if ignored. Our guides are trained to recognize symptoms and will make the call to descend if necessary."
            }
        ]
    },
    "northern-circuit": {
        slug: "northern-circuit",
        title: "Northern Circuit Route",
        subtitle: "The Ultimate Kilimanjaro Experience",
        duration: "9 Days",
        difficulty: "Medium-Hard",
        distance: "88km / 55 miles",
        successRate: "98%",
        sceneryRating: 5,
        crowdLevel: "Very Low",
        overview: "The Northern Circuit is the newest, longest, and most remote route on Kilimanjaro. It offers the highest success rate of all routes (98%) due to excellent acclimatization over 9 days. The route traverses nearly the entire mountain, providing 360-degree views and unparalleled scenery. You'll experience complete solitude on the northern slopes. This is the ultimate Kilimanjaro experience for those with time and budget.",
        bestFor: [
            "Those wanting the highest possible success rate",
            "Photographers seeking diverse landscapes",
            "Trekkers who value solitude and wilderness",
            "Those with time for a longer trek (9 days)"
        ],
        highlights: [
            "98% summit success rate - the highest",
            "360-degree circumnavigation of the mountain",
            "Complete solitude on northern slopes",
            "Most diverse scenery of any route",
            "Excellent wildlife viewing opportunities",
            "Optimal acclimatization profile"
        ],
        itinerary: [
            {
                day: 1,
                title: "Londorossi Gate to Mti Mkubwa Camp",
                elevation: "2,100m to 2,895m",
                distance: "6km / 4 miles",
                time: "3-4 hours",
                description: "Drive from Moshi to Londorossi Gate (2-3 hours) for registration. Continue by 4x4 to the trailhead. Begin trekking through pristine montane rainforest. Look for colobus monkeys, blue monkeys, and exotic birds. Gentle first day allows you to ease into the trek. Camp at Mti Mkubwa (Big Tree Camp).",
                terrain: "Rainforest - muddy, rooted trails",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Mti Mkubwa Camp to Shira 1 Camp",
                elevation: "2,895m to 3,505m",
                distance: "8km / 5 miles",
                time: "5-6 hours",
                description: "Leave the rainforest and enter heath and moorland. Climb onto the Shira Plateau, one of the highest plateaus on Earth. Spectacular views of Kibo Peak and Mount Meru. Camp on the western edge of the plateau. The landscape opens up dramatically.",
                terrain: "Heath and moorland - rocky, gradual ascent",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Shira 1 Camp to Shira 2 Camp",
                elevation: "3,505m to 3,850m",
                distance: "7km / 4 miles",
                time: "4-5 hours",
                description: "Easy acclimatization day crossing the Shira Plateau west to east. Otherworldly landscape of vast moorland and volcanic rock formations. Optional afternoon hike to Shira Cathedral (3,900m). Excellent views of Kibo's glaciated summit.",
                terrain: "Moorland plateau - gentle rolling terrain",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Shira 2 Camp to Moir Hut",
                elevation: "3,850m to 4,200m",
                distance: "8km / 5 miles",
                time: "5-6 hours",
                description: "Leave the main trail and head north toward the remote northern slopes. Gradual ascent through alpine desert. Arrive at Moir Hut, a rarely visited camp with stunning views. Optional afternoon acclimatization hike to the summit of Little Lent Hill (4,375m). From here, you'll have the northern circuit almost entirely to yourself.",
                terrain: "Alpine desert - gradual ascent, remote",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Moir Hut to Buffalo Camp",
                elevation: "4,200m to 4,020m",
                distance: "12km / 7 miles",
                time: "5-7 hours",
                description: "Traverse the northern slopes with incredible views of the Kenyan plains below. The trail undulates through alpine desert with minimal vegetation. Complete solitude - you may not see another person all day. Buffalo Camp is named for the buffalo that occasionally wander up from the lower slopes. Spectacular sunset views.",
                terrain: "Alpine desert - undulating terrain, remote",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Buffalo Camp to Third Cave Camp",
                elevation: "4,020m to 3,870m",
                distance: "8km / 5 miles",
                time: "5-6 hours",
                description: "Continue traversing the northern slopes, gradually descending. The landscape is wild and pristine. Excellent views of Mawenzi Peak's dramatic spires. Third Cave Camp is situated in a sheltered valley. This descent day aids acclimatization before the final push to base camp.",
                terrain: "Alpine desert - gradual descent, remote",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 7,
                title: "Third Cave to School Hut",
                elevation: "3,870m to 4,750m",
                distance: "5km / 3 miles",
                time: "4-5 hours",
                description: "Climb steadily to School Hut, the base camp for summit attempts via the northern circuit. The landscape is barren, lunar-like alpine desert. Arrive early afternoon. Rest, hydrate, and eat an early dinner. Prepare gear for summit night. Try to sleep. Wake around 11pm for summit attempt. You're now perfectly acclimatized after 7 days.",
                terrain: "Alpine desert - steep, rocky ascent",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 8,
                title: "School Hut to Uhuru Peak to Mweka Camp",
                elevation: "4,750m to 5,895m to 3,068m",
                distance: "18km / 11 miles",
                time: "12-15 hours",
                description: "Summit day! Begin around 11pm. Climb steadily through scree to Gilman's Point (5,681m) on the crater rim at sunrise. Continue along the crater rim for 1-2 hours to Uhuru Peak (5,895m) - the Roof of Africa! Thanks to excellent acclimatization, you have a 98% chance of success. Descend to School Hut for brunch, then continue down to Mweka Camp in the rainforest. Long but rewarding day.",
                terrain: "Scree, crater rim, then rainforest descent",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 9,
                title: "Mweka Camp to Mweka Gate",
                elevation: "3,068m to 1,640m",
                distance: "10km / 6 miles",
                time: "3-4 hours",
                description: "Final descent through lush rainforest. Muddy and slippery - trekking poles recommended. Arrive at Mweka Gate for registration and summit certificate. Celebrate with your crew and distribute tips. Transfer back to Moshi for hot shower, massage, and celebration dinner. Reflect on your incredible 9-day journey around Africa's highest peak.",
                terrain: "Rainforest - muddy, steep descent",
                meals: "Breakfast, Lunch"
            }
        ],
        pricing: [
            { pax: "1 Person", price: "$3,200" },
            { pax: "2 People", price: "$2,900 pp" },
            { pax: "3-4 People", price: "$2,750 pp" },
            { pax: "5-6 People", price: "$2,650 pp" },
            { pax: "7+ People", price: "$2,550 pp" }
        ],
        accommodation: "Mountain tents (2-person tents for single occupancy)",
        meals: "3 meals daily. Hot breakfast, packed lunch, 3-course dinner. Vegetarian and special diets accommodated.",
        bestTime: "January-March and June-October. Can be climbed year-round but northern slopes can be very cold in July-August.",
        packingEssentials: [
            "4-season sleeping bag rated to -15°C (colder than other routes)",
            "Waterproof hiking boots (well broken in)",
            "Insulated jacket (down recommended)",
            "Waterproof shell jacket and pants (Gore-Tex)",
            "Thermal base layers (merino wool)",
            "Fleece mid-layer",
            "Warm hat, sun hat, balaclava",
            "Sunglasses (UV protection)",
            "Headlamp with extra batteries",
            "Trekking poles",
            "Daypack (30-40L)",
            "Water bottles or hydration system (3L capacity)",
            "Sunscreen SPF 50+ and lip balm",
            "Book or entertainment (longer trek)"
        ],
        faqs: [
            {
                question: "Why is the Northern Circuit so expensive?",
                answer: "The 9-day duration means more park fees, food, and crew wages. However, the 98% success rate means you're almost guaranteed to summit, making it excellent value. Many climbers who fail on shorter routes end up spending more when they have to return and try again."
            },
            {
                question: "Is 9 days too long?",
                answer: "Not at all! The extra days allow for perfect acclimatization and you get to see parts of Kilimanjaro that 95% of climbers never experience. The northern slopes are pristine wilderness. If you have the time and budget, this is the ultimate Kilimanjaro experience."
            },
            {
                question: "How crowded is the Northern Circuit?",
                answer: "Days 4-7 on the northern slopes, you'll likely have the mountain to yourself. You may not see another person for 3-4 days. It's the most remote and solitary Kilimanjaro experience possible."
            },
            {
                question: "Can I do it in 8 days?",
                answer: "Some operators offer an 8-day version, but we recommend the full 9 days for optimal acclimatization and to fully enjoy the experience without rushing."
            }
        ]
    }
};
