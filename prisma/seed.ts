import { config } from "dotenv"
config({ path: ".env.local" })

import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import bcrypt from "bcryptjs"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

// ── Admin User ──────────────────────────────────────────────────────────────
async function seedAdmin() {
  const existing = await prisma.adminUser.findUnique({ where: { email: "admin@serenityafricasafaris.com" } })
  if (!existing) {
    const hashed = await bcrypt.hash("admin123", 12)
    await prisma.adminUser.create({ data: { email: "admin@serenityafricasafaris.com", password: hashed, name: "Admin" } })
    console.log("✅ Admin user created: admin@serenityafricasafaris.com / admin123")
    console.log("⚠️  Change the password after first login!")
  } else {
    console.log("ℹ️  Admin user already exists")
  }
}

// ── Blog Posts ──────────────────────────────────────────────────────────────
const BLOG_POSTS = [
  { slug: "great-migration-wonders", title: "The Great Migration: A Spectacle of Nature", excerpt: "Witness the awe-inspiring journey of millions of wildebeest and zebras across the Serengeti ecosystem, one of the world's most dramatic natural events.", author: "Serenity Africa Team", category: "Wildlife", coverImage: "/images/destinations/serengeti/serengeti-22.webp", body: `<h2>The Greatest Show on Earth</h2><p>Every year, the Serengeti ecosystem hosts one of the most incredible natural events on the planet: the Great Migration. Over 1.5 million wildebeest, 200,000 zebras, and a host of other grazers embark on a perilous journey in search of fresh grazing and water.</p><h3>The Cycle of Life</h3><p>The migration is not a single event but a continuous cycle, generally beginning in the southern Serengeti from January to March, where the calving season takes place.</p><h3>The River Crossings</h3><p>Perhaps the most dramatic phase occurs from July to October, when the herds face the treacherous Mara River. Here, giant Nile crocodiles lie in wait, and the crossings become a chaotic struggle for survival.</p><h3>Why You Should Visit</h3><p>Witnessing the Great Migration is a humbling experience. Whether you choose to see the calving season or the river crossings, it is a memory that will last a lifetime.</p>`, publishedAt: new Date("2024-12-15") },
  { slug: "kilimanjaro-facts", title: "Mount Kilimanjaro: Facts About the Roof of Africa", excerpt: "Discover the secrets of the world's tallest free-standing mountain, from its unique ecological zones to the history of its summit.", author: "Serenity Africa Team", category: "Trekking", coverImage: "/images/destinations/kilimanjaro/kilimanjaro-8.webp", body: `<h2>A Mountain of Legends</h2><p>Mount Kilimanjaro is not just a mountain; it's an icon. Standing at 5,895 meters (19,341 feet), it is the highest peak in Africa and the tallest free-standing mountain in the world.</p><h3>Ecological Zones</h3><p>Climbing Kilimanjaro is like walking from the equator to the poles through five distinct ecological zones: Cultivation, Rainforest, Heather and Moorland, Alpine Desert, and the Arctic Zone.</p><h3>Accessibility</h3><p>One of the reasons Kilimanjaro is so popular is that it requires no technical climbing skills. It is a "walk-up" mountain, making it accessible to fit hikers worldwide.</p>`, publishedAt: new Date("2024-12-10") },
  { slug: "zanzibar-beaches-culture", title: "Zanzibar: More Than Just Beaches", excerpt: "Beyond its pristine white sands, Zanzibar offers a rich tapestry of history, spice trade heritage, and vibrant Swahili culture.", author: "Serenity Africa Team", category: "Culture & Beach", coverImage: "/images/destinations/zanzibar/zanzibar-14.webp", body: `<h2>The Spice Island</h2><p>Zanzibar evokes images of turquoise waters and white sandy beaches. But this archipelago off the coast of Tanzania is also a cultural melting pot with a fascinating history.</p><h3>Stone Town</h3><p>The heart of Zanzibar City, Stone Town, is a UNESCO World Heritage site. Its winding alleys and ancient doorways tell stories of Arab, Persian, Indian, and European influences.</p><h3>The Spice Tours</h3><p>Visiting a spice farm is a sensory experience where you can see, smell, and taste cloves, nutmeg, cinnamon, and black pepper growing in their natural environment.</p><h3>Marine Life</h3><p>The waters around Zanzibar are a diver's paradise. Mnemba Atoll offers world-class snorkeling with vibrant coral reefs and abundant marine life.</p>`, publishedAt: new Date("2024-12-05") },
  { slug: "ngorongoro-crater-eden", title: "Ngorongoro Crater: The Garden of Eden", excerpt: "Explore the world's largest inactive volcanic caldera, a natural enclosure that hosts one of the densest concentrations of wildlife in Africa.", author: "Serenity Africa Team", category: "Wildlife", coverImage: "/images/destinations/ngorongoro/ngorongoro-11.webp", body: `<h2>A Natural Wonder</h2><p>The Ngorongoro Crater is often referred to as the "Eighth Wonder of the World." This massive caldera, formed around 2.5 million years ago by the collapse of a volcano, creates a unique, self-contained ecosystem.</p><h3>Wildlife Density</h3><p>The crater floor is home to over 25,000 large animals, including one of the best places in Africa to see the Big Five in a single game drive.</p><h3>The Black Rhino</h3><p>Ngorongoro is one of the few places remaining where you have a good chance of spotting the critically endangered black rhino.</p><h3>Maasai Coexistence</h3><p>The Ngorongoro Conservation Area is unique because wildlife coexists with semi-nomadic Maasai pastoralists.</p>`, publishedAt: new Date("2024-11-28") },
  { slug: "tanzania-cultural-tribes", title: "Tanzania's Cultural Mosaic", excerpt: "Meet the people of Tanzania. From the iconic Maasai warriors to the hunter-gatherer Hadzabe, discover the human story of this diverse land.", author: "Serenity Africa Team", category: "Culture", coverImage: "/images/destinations/tarangire/tarangire-15.webp", body: `<h2>A Land of Many Voices</h2><p>Tanzania is home to over 120 ethnic groups, each with its own language, traditions, and customs.</p><h3>The Maasai</h3><p>Perhaps the most famous, the Maasai are known for their distinctive red shukas and jumping dances, maintaining their traditional semi-nomadic lifestyle.</p><h3>The Hadzabe</h3><p>Living near Lake Eyasi, the Hadzabe are one of the last true hunter-gatherer societies left on Earth.</p><h3>The Datoga</h3><p>Also inhabitants of the Lake Eyasi region, the Datoga are skilled blacksmiths, fashioning arrowheads and jewelry from scrap metal.</p>`, publishedAt: new Date("2024-11-20") },
  { slug: "serengeti-big-five", title: "The Big Five: Wildlife of the Serengeti", excerpt: "Learn about the five most sought-after animals on safari—the Lion, Leopard, Elephant, Buffalo, and Rhinoceros—and where to find them.", author: "Serenity Africa Team", category: "Wildlife", coverImage: "/images/destinations/serengeti/serengeti-35.webp", body: `<h2>The Ultimate Safari Checklist</h2><p>The term "Big Five" originally referred to the five most difficult animals to hunt on foot. Today, it represents the ultimate wildlife checklist for photographers and safari-goers.</p><h3>1. The Lion</h3><p>The "King of Beasts" is abundant in the Serengeti, often seen resting on kopjes or stalking prey in the tall grass.</p><h3>2. The Leopard</h3><p>Elusive and solitary, leopards are masters of camouflage, often found resting in the branches of acacia trees.</p><h3>3. The Elephant</h3><p>Tanzania's elephant populations are particularly impressive in Tarangire, where these gentle giants travel in matriarchal herds.</p><h3>4. The Buffalo</h3><p>Cape Buffalo congregate in large herds and can often be seen grazing on the open plains or near water sources.</p><h3>5. The Rhinoceros</h3><p>The rarest of the five, the Black Rhino is critically endangered. The Ngorongoro Crater offers the best chance of a sighting.</p>`, publishedAt: new Date("2024-11-15") },
  { slug: "tarangire-land-of-giants", title: "Tarangire: The Land of Giants", excerpt: "Step into a landscape dominated by ancient baobab trees and some of the largest elephant herds in Africa. Tarangire is Tanzania's hidden gem.", author: "Serenity Africa Team", category: "Wildlife", coverImage: "/images/destinations/tarangire/tarangire-21.webp", body: `<h2>The Elephant Kingdom</h2><p>Tarangire National Park is a place of dramatic landscapes and quiet majesty. While often overshadowed by its more famous neighbors, Tarangire offers a wilder and more intimate safari experience.</p><h3>The Giants of the Savannah</h3><p>During the dry season, herds of up to 300 elephants can be seen congregating along the Tarangire River.</p><h3>Ancient Baobabs</h3><p>Some of these "upside-down trees" are over a thousand years old, providing a prehistoric backdrop to your wildlife sightings.</p><h3>Exceptional Birdlife</h3><p>With over 550 species recorded, Tarangire is one of the best birding destinations in Tanzania.</p>`, publishedAt: new Date("2024-11-05") },
  { slug: "nyerere-boat-safaris", title: "Nyerere National Park: A River Perspective", excerpt: "Experience safari from the water. Discover why boat safaris in Nyerere (formerly Selous) offer a unique and tranquil way to view wildlife.", author: "Serenity Africa Team", category: "Adventure", coverImage: "/images/destinations/nyerere/nyerere-4.webp", body: `<h2>Safari on the Rufiji River</h2><p>Nyerere National Park (formerly the Selous Game Reserve) is Africa's largest protected area. One of its greatest draws is the Rufiji River, which allows for a tranquil boat safari experience.</p><h3>A Different Vantage Point</h3><p>From the water, you can glide silently past pods of hippos and massive Nile crocodiles basking on the banks.</p><h3>A Birdwatcher's Dream</h3><p>Malachite kingfishers dart like jewels across the water, and African fish eagles can be seen perched in overhanging trees.</p><h3>Peace and Tranquility</h3><p>Unlike traditional game drives, a boat safari is incredibly peaceful—the perfect way to spend an afternoon in the African bush.</p>`, publishedAt: new Date("2024-10-28") },
  { slug: "mahale-chimpanzee-tracking", title: "Tracking Chimpanzees in Mahale Mountains", excerpt: "Journey to the remote shores of Lake Tanganyika to track our closest relatives in the lush forests of the Mahale Mountains.", author: "Serenity Africa Team", category: "Adventure", coverImage: "/images/destinations/lake-manyara/lake-manyara-7.webp", body: `<h2>Into the Wild West</h2><p>The Mahale Mountains in western Tanzania are one of the most remote and beautiful places on Earth, situated on the crystal-clear shores of Lake Tanganyika.</p><h3>The M-Group Chimpanzees</h3><p>Mahale is home to one of the world's largest populations of wild chimpanzees. The well-habituated M-Group has been studied for decades.</p><h3>The Tracking Experience</h3><p>Following a guide through dense jungle, listening for pant-hoots and the rustle of leaves, builds incredible anticipation until you finally encounter the troop.</p><h3>Lake Tanganyika</h3><p>After tracking, there's nothing like returning to the lodge for a swim in the turquoise waters of the world's second-deepest freshwater lake.</p>`, publishedAt: new Date("2024-10-15") },
  { slug: "best-time-to-visit-tanzania", title: "When to Go: The Best Time to Visit Tanzania", excerpt: "Planning your safari? Here is a month-by-month guide to the best times for wildlife, trekking, and beach holidays in Tanzania.", author: "Serenity Africa Team", category: "Travel Tips", coverImage: "/images/destinations/ruaha/ruaha-6.webp", body: `<h2>Planning the Perfect Safari</h2><p>Tanzania is a year-round destination, but the best time to visit depends on what you want to see and do.</p><h3>The Dry Season (June to October)</h3><p>Generally considered the best time for wildlife viewing. Animals congregate around water sources, and the thinning vegetation makes them easier to spot.</p><h3>The Green Season (November to May)</h3><p>The lush, green landscape is perfect for birdwatching as migratory species arrive. It's also the calving season in the southern Serengeti from January to March.</p><h3>Trekking Kilimanjaro</h3><p>The best months are the dry periods: January–February and June–October when skies are clear and success rates are higher.</p><h3>Beach Getaways</h3><p>Zanzibar and the coast are best enjoyed during the dry months. Be aware that March to May can see heavy rains.</p>`, publishedAt: new Date("2024-10-01") },
]

async function seedBlog() {
  let created = 0
  for (const post of BLOG_POSTS) {
    const existing = await prisma.blogPost.findFirst({ where: { slug: post.slug } })
    if (!existing) {
      await prisma.blogPost.create({ data: { ...post, status: "PUBLISHED", tags: [] } })
      created++
    }
  }
  console.log(`✅ Blog: ${created} posts created (${BLOG_POSTS.length - created} already existed)`)
}

// ── Destinations ────────────────────────────────────────────────────────────
const DESTINATIONS = [
  { title: "Serengeti National Park", slug: "serengeti", region: "Northern Circuit", description: "The quintessential African savannah, world-famous for the Great Wildebeest Migration and an incredibly high density of predators.", coverImage: "/images/destinations/serengeti/serengeti-18.webp", wildlife: ["Lion", "Leopard", "Cheetah", "Wildebeest", "Zebra"], activities: ["Game Drives", "Hot Air Balloon Safari", "Walking Safari", "Night Drives"], bestTime: "June to October", climate: "Semi-arid" },
  { title: "Ngorongoro Crater", slug: "ngorongoro", region: "Northern Circuit", description: "A UNESCO World Heritage site. The world's largest inactive volcanic caldera, teeming with wildlife in a spectacular setting.", coverImage: "/images/destinations/ngorongoro/ngorongoro-1.webp", wildlife: ["Big Five", "Black Rhino", "Flamingos", "Wildebeest"], activities: ["Crater Game Drives", "Maasai Cultural Visits", "Olduvai Gorge Tour"], bestTime: "June to September", climate: "Cool highland" },
  { title: "Tarangire National Park", slug: "tarangire", region: "Northern Circuit", description: "Known for its massive elephant herds, ancient baobab trees, and unique dry-season wildlife gatherings.", coverImage: "/images/destinations/tarangire/tarangire-14.webp", wildlife: ["Elephant", "Lion", "Leopard", "Bird Species 550+"], activities: ["Game Drives", "Walking Safari", "Night Game Drive", "Bird Watching"], bestTime: "June to October", climate: "Semi-arid" },
  { title: "Lake Manyara National Park", slug: "lake-manyara", region: "Northern Circuit", description: "Famous for its tree-climbing lions, ground-water forests, and vast flocks of pink flamingos along the lake shores.", coverImage: "/images/destinations/lake-manyara/lake-manyara-1.webp", wildlife: ["Tree-Climbing Lions", "Flamingos", "Hippos", "Elephants"], activities: ["Game Drives", "Canoeing", "Bird Watching", "Cultural Visits"], bestTime: "June to October", climate: "Varied" },
  { title: "Mount Kilimanjaro", slug: "kilimanjaro", region: "Northern Circuit", description: "The Roof of Africa and the highest free-standing mountain in the world. A trekker's ultimate paradise.", coverImage: "/images/destinations/kilimanjaro/kilimanjaro-12.webp", wildlife: ["Colobus Monkey", "Elephant", "Buffalo", "Leopard"], activities: ["Machame Route", "Lemosho Route", "Marangu Route", "Rongai Route", "Northern Circuit"], bestTime: "January to February, June to October", climate: "Varies by altitude" },
  { title: "Arusha National Park", slug: "arusha-park", region: "Northern Circuit", description: "A diverse gem offering walking safaris, canoeing on the Momella Lakes, and stunning views of Mount Meru.", coverImage: "/images/destinations/arusha/arusha-1.webp", wildlife: ["Colobus Monkey", "Giraffe", "Buffalo", "Flamingos"], activities: ["Walking Safari", "Canoeing", "Game Drives", "Mount Meru Trek"], bestTime: "June to February", climate: "Highland" },
  { title: "Ruaha National Park", slug: "ruaha", region: "Southern Circuit", description: "Rugged scenery and massive predator populations. This is the remote, untouched heart of Tanzania's wilderness.", coverImage: "/images/destinations/ruaha/ruaha-5.webp", wildlife: ["Lion", "Leopard", "Elephant", "Wild Dog", "Greater Kudu"], activities: ["Game Drives", "Walking Safari", "Fly Camping", "Bird Watching"], bestTime: "June to October", climate: "Semi-arid" },
  { title: "Nyerere National Park", slug: "nyerere", region: "Southern Circuit", description: "Africa's largest national park, dominated by the mighty Rufiji River and offering unique boat safaris.", coverImage: "/images/destinations/nyerere/nyerere-1.webp", wildlife: ["Hippo", "Crocodile", "Elephant", "Wild Dog", "Lion"], activities: ["Boat Safari", "Game Drives", "Walking Safari", "Fly Fishing"], bestTime: "June to October", climate: "Hot and dry" },
  { title: "Zanzibar Archipelago", slug: "zanzibar", region: "Coastal & Islands", description: "A tropical paradise offering pristine beaches, UNESCO-listed Stone Town, and vibrant marine life.", coverImage: "/images/destinations/zanzibar/zanzibar-1.webp", wildlife: ["Dolphin", "Green Turtle", "Whale Shark", "Humpback Whale"], activities: ["Beach Relaxation", "Snorkeling & Diving", "Stone Town Tour", "Spice Farm", "Dolphin Tour"], bestTime: "June to October, December to February", climate: "Tropical" },
  { title: "Lake Manyara & Eyasi", slug: "lake-eyasi", region: "Northern Circuit", description: "The hidden gem of Northern Tanzania — home to the ancient Hadzabe bushmen and traditional Datoga blacksmiths.", coverImage: "/images/destinations/lake-manyara/lake-manyara-1.webp", wildlife: ["Flamingos", "Pelicans", "Various Waterfowl"], activities: ["Hadzabe Cultural Visit", "Datoga Village Tour", "Lake Eyasi Boat Ride"], bestTime: "June to October", climate: "Semi-arid" },
]

async function seedDestinations() {
  let created = 0
  for (const dest of DESTINATIONS) {
    const existing = await prisma.destination.findFirst({ where: { slug: dest.slug } })
    if (!existing) {
      await prisma.destination.create({ data: { ...dest, status: "PUBLISHED", gallery: [] } })
      created++
    }
  }
  console.log(`✅ Destinations: ${created} created (${DESTINATIONS.length - created} already existed)`)
}

// ── Tours ───────────────────────────────────────────────────────────────────
const TOURS = [
  {
    slug: "7-day-machame-route", title: "7-Day Machame Route", summary: "Tanzania's most popular Kilimanjaro climbing route via the Whiskey route.", description: "The Machame Route is known as the 'Whiskey' route, offering a tougher challenge than the Marangu route but rewarding climbers with better scenery and higher success rates due to better acclimatization opportunities.", price: 2200, duration: 7, groupSize: "2-12 pax", difficulty: "Challenging", season: "Jan-Feb, Jun-Oct", category: "Mountain Climbs", destination: "Mount Kilimanjaro", coverImage: "/images/destinations/kilimanjaro/kilimanjaro-12.webp", highlights: ["Scenic Whiskey Route", "Great Acclimatization", "Lava Tower", "Barranco Wall"], includes: ["Park fees", "Camping fees", "Rescue fees", "Professional guides", "Porters and cook", "All meals on mountain", "Camping equipment"], excludes: ["Flights", "Visas", "Tips for crew", "Personal gear"],
    itinerary: [
      { day: 1, title: "Machame Gate to Machame Camp", description: "Drive to Machame Gate, registration, and trek through the rainforest.", accommodation: "Machame Camp (Tented)", meals: "Lunch, Dinner" },
      { day: 2, title: "Machame Camp to Shira Cave Camp", description: "Trek out of the rainforest and onto the Shira Plateau.", accommodation: "Shira Cave Camp (Tented)", meals: "Breakfast, Lunch, Dinner" },
      { day: 3, title: "Shira Cave to Lava Tower to Barranco", description: "Key acclimatization day — climb high to Lava Tower then descend to Barranco.", accommodation: "Barranco Camp (Tented)", meals: "Breakfast, Lunch, Dinner" },
      { day: 4, title: "Barranco Camp to Karanga Camp", description: "Climb the famous Barranco Wall then traverse ridges to Karanga.", accommodation: "Karanga Camp (Tented)", meals: "Breakfast, Lunch, Dinner" },
      { day: 5, title: "Karanga Camp to Barafu Camp", description: "Short but steep trek to base camp. Early dinner and sleep for the summit push.", accommodation: "Barafu Camp (Tented)", meals: "Breakfast, Lunch, Dinner" },
      { day: 6, title: "Summit Night — Uhuru Peak to Mweka Camp", description: "Start at midnight. Reach Stella Point for sunrise, push to Uhuru Peak. Descend to Mweka.", accommodation: "Mweka Camp (Tented)", meals: "Breakfast, Lunch, Dinner" },
      { day: 7, title: "Mweka Camp to Mweka Gate", description: "Final descent through the forest. Collect summit certificates.", accommodation: "Hotel in Moshi", meals: "Breakfast, Lunch" },
    ]
  },
  {
    slug: "5-day-big-five-safari", title: "5-Day Big Five Safari", summary: "A compact yet comprehensive safari across Northern Tanzania's most iconic parks.", description: "A compact yet comprehensive safari experience taking you to the most iconic parks in Northern Tanzania. Witness the vast Serengeti plains and the density of wildlife in the Ngorongoro Crater.", price: 3500, duration: 5, groupSize: "2-6 pax", difficulty: "Easy", season: "Year-round", category: "Safaris", destination: "Serengeti, Ngorongoro, Tarangire", coverImage: "/images/destinations/serengeti/serengeti-18.webp", highlights: ["Serengeti Game Drives", "Ngorongoro Crater", "Tarangire Elephants", "Big Five Spotting"], includes: ["Park fees", "Lodge/Camp accommodation", "Professional guide", "4x4 Safari Vehicle", "All meals"], excludes: ["Flights", "Visas", "Tips", "Alcoholic beverages"],
    itinerary: [
      { day: 1, title: "Arusha to Tarangire National Park", description: "Pick up from Arusha. Full day game drive with picnic lunch. Known for its massive elephant herds.", accommodation: "Maramboi Tented Lodge", meals: "Lunch, Dinner" },
      { day: 2, title: "Tarangire to Serengeti", description: "Drive towards the Serengeti, passing through the Ngorongoro Conservation Area.", accommodation: "Serengeti Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 3, title: "Full Day in Serengeti", description: "Full day game drives in the Serengeti. Follow the migration or search for Big Cats in Seronera Valley.", accommodation: "Serengeti Heritage Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 4, title: "Serengeti to Ngorongoro Crater", description: "Morning game drive before heading to the Ngorongoro Crater rim. Enjoy sunset views.", accommodation: "Rhino Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 5, title: "Ngorongoro Crater to Arusha", description: "Descend 600m into the crater floor. Best place to see rhinos. Return to Arusha.", accommodation: "N/A", meals: "Breakfast, Lunch" },
    ]
  },
  {
    slug: "8-day-lemosho-route", title: "8-Day Lemosho Route", summary: "The most scenic Kilimanjaro route with the highest success rate.", description: "Considered one of the most beautiful routes on Kilimanjaro, Lemosho offers a remote start and excellent acclimatization profile over 8 days.", price: 2800, duration: 8, groupSize: "2-10 pax", difficulty: "Moderate", season: "Jan-Feb, Jun-Oct", category: "Mountain Climbs", destination: "Mount Kilimanjaro", coverImage: "/images/destinations/kilimanjaro/kilimanjaro-8.webp", highlights: ["High 98% Success Rate", "Panoramic Views", "Less Crowded", "Shira Plateau"], includes: ["All fees", "Camping gear", "Oxygen cylinder", "AMREF Flying Doctors cover", "All meals"], excludes: ["Gear rental", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Lemosho Gate to Mti Mkubwa", description: "Start the trek through the pristine rainforest.", accommodation: "Mti Mkubwa Camp", meals: "Lunch, Dinner" },
      { day: 2, title: "Mti Mkubwa to Shira 1 Camp", description: "Enter the heath zone and cross the Shira Ridge.", accommodation: "Shira 1 Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 3, title: "Shira 1 to Shira 2 Camp", description: "Gentle hike across the plateau with stunning peak views.", accommodation: "Shira 2 Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 4, title: "Shira 2 to Lava Tower to Barranco", description: "Acclimatization day. Climb high, sleep low.", accommodation: "Barranco Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 5, title: "Barranco to Karanga", description: "Conquer the Barranco Wall.", accommodation: "Karanga Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 6, title: "Karanga to Barafu", description: "Head to base camp.", accommodation: "Barafu Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 7, title: "Summit Night — Uhuru Peak", description: "Summit night and descent to Mweka.", accommodation: "Mweka Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 8, title: "Mweka to Gate", description: "Finish the adventure. Collect certificates.", accommodation: "Hotel in Moshi", meals: "Breakfast, Lunch" },
    ]
  },
  {
    slug: "10-day-migration-beach", title: "10-Day Migration & Beach", summary: "The perfect blend of Great Migration game viewing and Zanzibar beach relaxation.", description: "The perfect blend of adventure and relaxation. Witness the dramatic river crossings of the Great Migration before unwinding on the white sands of Zanzibar.", price: 5500, duration: 10, groupSize: "2-12 pax", difficulty: "Easy", season: "Jul-Oct, Jan-Mar", category: "The Great Migration", destination: "Serengeti, Zanzibar", coverImage: "/images/destinations/migration/migration-4.webp", highlights: ["Great Migration River Crossings", "Luxury Tented Camps", "Zanzibar Relaxation", "Stone Town Tour"], includes: ["Domestic flights", "Luxury accommodation", "All park fees", "Zanzibar transfers", "Safari vehicle"], excludes: ["International flights", "Visas", "Tips", "Laundry"],
    itinerary: [
      { day: 1, title: "Arrival Kilimanjaro", description: "Transfer to Arusha hotel.", accommodation: "Arusha Hotel", meals: "Dinner" },
      { day: 2, title: "Tarangire National Park", description: "Game drive amongst giant baobabs and elephant herds.", accommodation: "Tarangire Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 3, title: "Serengeti (Central)", description: "Head to the heart of the park.", accommodation: "Serengeti Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 4, title: "Serengeti (North/West)", description: "Follow the migration herds to the Mara River.", accommodation: "Migration Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 5, title: "Ngorongoro Crater", description: "The world's largest inactive volcanic caldera.", accommodation: "Crater Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 6, title: "Fly to Zanzibar", description: "Transfer to airport and flight to paradise.", accommodation: "Beach Resort", meals: "Breakfast, Dinner" },
      { day: 7, title: "Stone Town Tour", description: "Explore the historic alleyways and spice markets.", accommodation: "Beach Resort", meals: "Breakfast" },
      { day: 8, title: "Beach Relaxation", description: "Leisure time at your resort.", accommodation: "Beach Resort", meals: "Breakfast" },
      { day: 9, title: "Blue Lagoon Snorkeling", description: "Discover underwater marine life and coral reefs.", accommodation: "Beach Resort", meals: "Breakfast" },
      { day: 10, title: "Departure", description: "Transfer to Zanzibar airport.", accommodation: "N/A", meals: "Breakfast" },
    ]
  },
  {
    slug: "3-day-fly-in-serengeti", title: "3-Day Fly-in Serengeti", summary: "Maximise your Serengeti game time with a luxury fly-in experience.", description: "Short on time but want the full experience? This fly-in safari maximizes your game viewing time by skipping the long drives.", price: 2200, duration: 3, groupSize: "2-6 pax", difficulty: "Easy", season: "Year-round", category: "Safaris", destination: "Serengeti", coverImage: "/images/destinations/serengeti/serengeti-30.webp", highlights: ["Aerial Views on Arrival", "Central Serengeti", "Maximized Game Time", "Big Cat Action"], includes: ["Return flights", "Luxury tented camp", "Park fees", "4x4 game drive vehicle"], excludes: ["Tips", "Drinks", "Insurance"],
    itinerary: [
      { day: 1, title: "Flight to Seronera", description: "Morning flight from Arusha or Zanzibar. Afternoon game drive in Seronera Valley.", accommodation: "Luxury Tented Camp", meals: "Lunch, Dinner" },
      { day: 2, title: "Full Day Serengeti", description: "Dawn to dusk game viewing in the predator-rich Seronera Valley.", accommodation: "Luxury Tented Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 3, title: "Morning Game Drive & Departure", description: "Final game drive en route to the airstrip for your return flight.", accommodation: "N/A", meals: "Breakfast, Lunch" },
    ]
  },
  {
    slug: "5-day-ruaha-wilderness", title: "5-Day Ruaha Wilderness", summary: "An intimate wilderness experience in Tanzania's largest national park.", description: "Dive deep into Tanzania's largest park. Ruaha offers a raw, uncrowded experience with massive elephant herds and high predator densities along the Great Ruaha River.", price: 3200, duration: 5, groupSize: "2-6 pax", difficulty: "Moderate", season: "Jun-Oct", category: "Adventurous Expeditions", destination: "Ruaha National Park", coverImage: "/images/destinations/ruaha/ruaha-5.webp", highlights: ["Walking Safaris", "Huge Elephant Herds", "River Scenes", "Baobab Valley"], includes: ["Flights", "Accommodation", "Park fees", "Game drives"], excludes: ["Tips", "Drinks"],
    itinerary: [
      { day: 1, title: "Fly to Ruaha", description: "Fly from Dar es Salaam or Arusha. Afternoon game drive along the river.", accommodation: "Riverside Lodge", meals: "Lunch, Dinner" },
      { day: 2, title: "Game Drives", description: "Explore the core game viewing areas along the Great Ruaha River.", accommodation: "Riverside Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 3, title: "Walking Safari", description: "Experience the bush on foot with armed guides. Track animals and learn about plants.", accommodation: "Riverside Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 4, title: "Birding & Predators", description: "Search for wild dogs, greater kudu, and rare bird species.", accommodation: "Riverside Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 5, title: "Departure", description: "Morning game drive and flight back.", accommodation: "N/A", meals: "Breakfast, Lunch" },
    ]
  },
  {
    slug: "7-day-southern-circuit", title: "7-Day Southern Circuit", summary: "The ultimate Southern Tanzania combination — Ruaha and Nyerere in one seamless trip.", description: "The ultimate Southern Tanzania combination. Experience the rugged beauty of Ruaha and the riverine magic of Nyerere National Park in one seamless trip.", price: 4500, duration: 7, groupSize: "2-6 pax", difficulty: "Moderate", season: "Jun-Oct", category: "Safaris", destination: "Ruaha, Nyerere", coverImage: "/images/destinations/ruaha/ruaha-8.webp", highlights: ["Ruaha Predators", "Nyerere Boat Safari", "Walking Safari", "Fly-in Ease"], includes: ["Internal Flights", "Full Board Accommodation", "Park Fees", "Activities"], excludes: ["International Flights", "Visas"],
    itinerary: [
      { day: 1, title: "Dar to Nyerere", description: "Fly to Nyerere. Afternoon boat safari on the Rufiji River.", accommodation: "Riverside Camp", meals: "Lunch, Dinner" },
      { day: 2, title: "Nyerere Game Drive", description: "Full day exploring the lakes and savannah.", accommodation: "Riverside Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 3, title: "Walking Safari", description: "Morning bush walk then afternoon game drive.", accommodation: "Riverside Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 4, title: "Fly to Ruaha", description: "Transfer to the rugged interior of Tanzania.", accommodation: "Ruaha Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 5, title: "Ruaha Exploration", description: "Track lions and leopards through the river valleys.", accommodation: "Ruaha Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 6, title: "Remote Ruaha", description: "Visit the distant corners of the park, searching for wild dogs.", accommodation: "Ruaha Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 7, title: "Back to Dar", description: "Morning game drive and flight back to Dar es Salaam.", accommodation: "N/A", meals: "Breakfast, Lunch" },
    ]
  },
  {
    slug: "3-day-nyerere-river-safari", title: "3-Day Nyerere River Safari", summary: "A quick but immersive escape focused on the mighty Rufiji River.", description: "A quick but immersive escape to Africa's largest reserve. The focus is on the mighty Rufiji River and its abundant aquatic wildlife.", price: 1800, duration: 3, groupSize: "2-8 pax", difficulty: "Easy", season: "Jun-Oct, Jan-Feb", category: "Safaris", destination: "Nyerere National Park", coverImage: "/images/destinations/nyerere/nyerere-1.webp", highlights: ["Rufiji River Boat Trip", "Hippo Pools", "Walking Safari", "Bird Watching"], includes: ["Flights from Dar", "Camp Stay", "Park Fees", "Boat Safari"], excludes: ["Tips", "Drinks"],
    itinerary: [
      { day: 1, title: "Fly In & Boat Safari", description: "45-minute flight from Dar es Salaam. Immediate sunset boat safari.", accommodation: "River Camp", meals: "Lunch, Dinner" },
      { day: 2, title: "Full Day Game Drive", description: "Explore the vast game reserve by 4x4 vehicle.", accommodation: "River Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 3, title: "Walking & Fly Out", description: "Morning bush walk then return flight.", accommodation: "N/A", meals: "Breakfast, Lunch" },
    ]
  },
  {
    slug: "5-day-zanzibar-escape", title: "5-Day Zanzibar Escape", summary: "Relax and recharge on the Spice Island with culture and pure beach bliss.", description: "Relax and recharge on the Spice Island. Includes a balance of cultural exploration in Stone Town and pure leisure on the white sand beaches.", price: 1500, duration: 5, groupSize: "2+", difficulty: "Easy", season: "Jun-Oct, Dec-Feb", category: "Beach Holidays", destination: "Zanzibar", coverImage: "/images/destinations/zanzibar/zanzibar-1.webp", highlights: ["Beach Relaxation", "Stone Town Tour", "Spice Farm Visit", "Blue Lagoon Snorkeling"], includes: ["All Transfers", "Hotel (B&B)", "Stone Town Tour", "Spice Farm Visit"], excludes: ["Flights", "Lunches/Dinners", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival Zanzibar", description: "Transfer to Stone Town hotel.", accommodation: "Stone Town Hotel", meals: "Dinner" },
      { day: 2, title: "Stone Town & Spices", description: "Guided city tour through the UNESCO site and a spice farm visit.", accommodation: "Beach Resort", meals: "Breakfast" },
      { day: 3, title: "Beach Day", description: "Full leisure time at your beach resort.", accommodation: "Beach Resort", meals: "Breakfast" },
      { day: 4, title: "Blue Lagoon", description: "Optional snorkeling trip to Mnemba Atoll.", accommodation: "Beach Resort", meals: "Breakfast" },
      { day: 5, title: "Departure", description: "Transfer to airport.", accommodation: "N/A", meals: "Breakfast" },
    ]
  },
]

async function seedTours() {
  let created = 0
  for (const tour of TOURS) {
    const { itinerary, ...rest } = tour
    const existing = await prisma.tour.findFirst({ where: { slug: rest.slug } })
    if (!existing) {
      await prisma.tour.create({
        data: {
          ...rest,
          status: "PUBLISHED",
          gallery: [],
          itinerary: { create: itinerary.map((d, i) => ({ day: d.day ?? i + 1, title: d.title, description: d.description, accommodation: d.accommodation, meals: d.meals ? d.meals.split(", ") : [] })) },
        },
      })
      created++
    }
  }
  console.log(`✅ Tours: ${created} created (${TOURS.length - created} already existed)`)
}

// ── Experiences ─────────────────────────────────────────────────────────────
const EXPERIENCES = [
  { slug: "game-drives", title: "Game Drives", type: "Game Drive", description: "The classic African safari experience in a 4x4 Land Cruiser with pop-up roof. Guided by expert driver-guides, search for the Big Five across Tanzania's iconic national parks.", highlights: ["Big Five encounters", "Expert tracking", "360° pop-up roof vehicles", "Morning and afternoon drives", "Sundowners in the bush"], coverImage: "/images/destinations/serengeti/serengeti-1.webp" },
  { slug: "balloon-safaris", title: "Balloon Safaris", type: "Aerial", description: "Float silently over the Serengeti at sunrise for a breathtaking bird's-eye perspective. Culminates with a traditional champagne bush breakfast.", highlights: ["Aerial views of the Serengeti", "Silent floating experience", "Sunrise over African horizon", "Champagne bush breakfast", "Unique photographic opportunities"], coverImage: "/images/experience/balloon safari/balloon-2.webp" },
  { slug: "walking-safaris", title: "Walking Safaris", type: "Walking Safari", description: "Step out of the vehicle and connect with nature on a guided bush walk. With senses heightened, discover tracking, medicinal plants, and the incredible ecosystem at ground level.", highlights: ["Intimate connection with nature", "Animal tracking skills", "Discover the Little Five", "Medicinal plant knowledge", "Armed ranger escort"], coverImage: "/images/destinations/arusha/arusha-1.webp" },
  { slug: "boat-safaris", title: "Boat Safaris", type: "Water Safari", description: "Glide silently along the Rufiji River in Nyerere National Park, observing hippos, crocodiles, and extraordinary birdlife from the water.", highlights: ["Hippo and crocodile sightings", "African fish eagle sightings", "Peaceful and unique perspective", "Outstanding photography", "Refreshing river breeze"], coverImage: "/images/destinations/nyerere/nyerere-4.webp" },
  { slug: "cultural-visits", title: "Cultural Visits", type: "Cultural", description: "Meet the Maasai, Hadzabe, and Datoga peoples of Tanzania. Experience traditional customs, dances, and an unmatched glimpse into ancient ways of life.", highlights: ["Maasai boma visit and dance", "Hadzabe hunting demonstration", "Datoga blacksmith workshop", "Hands-on cultural exchange", "Ethical community tourism"], coverImage: "/images/destinations/tarangire/tarangire-15.webp" },
  { slug: "night-game-drives", title: "Night Game Drives", type: "Game Drive", description: "After dark, a new cast of wildlife appears. Spot nocturnal creatures like aardvark, serval, leopard, and bushbaby using spotlights in the darkness.", highlights: ["Nocturnal wildlife sightings", "Spotlight tracking", "Different perspective of the park", "Serval and aardvark spotting", "Star-filled African skies"], coverImage: "/images/destinations/serengeti/serengeti-35.webp" },
  { slug: "photography-safaris", title: "Photography Safaris", type: "Photography", description: "Dedicated photography game drives with extended time at sightings, bean bag support, and guidance on camera settings for perfect wildlife shots.", highlights: ["Extended sighting stops", "Professional photography guide", "Bean bag and equipment support", "Golden hour drives", "Editing tips and post-processing"], coverImage: "/images/destinations/serengeti/serengeti-22.webp" },
]

async function seedExperiences() {
  let created = 0
  for (const exp of EXPERIENCES) {
    const existing = await prisma.experience.findFirst({ where: { slug: exp.slug } })
    if (!existing) {
      await prisma.experience.create({ data: { ...exp, status: "PUBLISHED", gallery: [] } })
      created++
    }
  }
  console.log(`✅ Experiences: ${created} created (${EXPERIENCES.length - created} already existed)`)
}

// ── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🌿 Seeding database...")
  await seedAdmin()
  await seedBlog()
  await seedDestinations()
  await seedTours()
  await seedExperiences()
  console.log("🎉 Database seeded successfully!")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
