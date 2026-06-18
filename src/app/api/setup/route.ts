import { NextResponse } from "next/server"
import { execSync } from "child_process"
import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

function getPrisma() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
  return new PrismaClient({ adapter })
}

export async function POST(req: Request) {
  const { name, email, password } = await req.json()

  if (!name || !email || !password || password.length < 8) {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 })
  }

  const prisma = getPrisma()
  const log: string[] = []

  try {
    // Block re-installation once an admin exists
    let adminCount = 0
    try {
      adminCount = await prisma.adminUser.count()
    } catch {
      // Table doesn't exist yet — continue with setup
    }
    if (adminCount > 0) {
      await prisma.$disconnect()
      return NextResponse.json({ error: "Already installed." }, { status: 409 })
    }

    // Push schema to database
    log.push("Setting up database tables...")
    const prismaBin = "./node_modules/.bin/prisma"
    execSync(`${prismaBin} db push --accept-data-loss --skip-generate`, {
      env: { ...process.env },
      stdio: "pipe",
    })
    log.push("Database tables created.")

    // Seed blog posts
    log.push("Loading blog posts...")
    const BLOG_POSTS = [
      { slug: "great-migration-wonders", title: "The Great Migration: A Spectacle of Nature", excerpt: "Witness the awe-inspiring journey of millions of wildebeest and zebras across the Serengeti ecosystem.", author: "Serenity Africa Team", category: "Wildlife", coverImage: "/images/destinations/serengeti/serengeti-22.webp", body: "<h2>The Greatest Show on Earth</h2><p>Every year, the Serengeti ecosystem hosts one of the most incredible natural events on the planet: the Great Migration.</p>", publishedAt: new Date("2024-12-15") },
      { slug: "kilimanjaro-facts", title: "Mount Kilimanjaro: Facts About the Roof of Africa", excerpt: "Discover the secrets of the world's tallest free-standing mountain.", author: "Serenity Africa Team", category: "Trekking", coverImage: "/images/destinations/kilimanjaro/kilimanjaro-8.webp", body: "<h2>A Mountain of Legends</h2><p>Mount Kilimanjaro stands at 5,895 meters — the highest peak in Africa.</p>", publishedAt: new Date("2024-12-10") },
      { slug: "zanzibar-beaches-culture", title: "Zanzibar: More Than Just Beaches", excerpt: "Beyond its pristine white sands, Zanzibar offers a rich tapestry of history and culture.", author: "Serenity Africa Team", category: "Culture & Beach", coverImage: "/images/destinations/zanzibar/zanzibar-14.webp", body: "<h2>The Spice Island</h2><p>Zanzibar evokes images of turquoise waters and white sandy beaches.</p>", publishedAt: new Date("2024-12-05") },
      { slug: "ngorongoro-crater-eden", title: "Ngorongoro Crater: The Garden of Eden", excerpt: "Explore the world's largest inactive volcanic caldera.", author: "Serenity Africa Team", category: "Wildlife", coverImage: "/images/destinations/ngorongoro/ngorongoro-11.webp", body: "<h2>A Natural Wonder</h2><p>The Ngorongoro Crater is often referred to as the Eighth Wonder of the World.</p>", publishedAt: new Date("2024-11-28") },
      { slug: "tarangire-land-of-giants", title: "Tarangire: The Land of Giants", excerpt: "Step into a landscape dominated by ancient baobab trees and elephant herds.", author: "Serenity Africa Team", category: "Wildlife", coverImage: "/images/destinations/tarangire/tarangire-21.webp", body: "<h2>The Elephant Kingdom</h2><p>Tarangire National Park is a place of dramatic landscapes and quiet majesty.</p>", publishedAt: new Date("2024-11-05") },
      { slug: "best-time-to-visit-tanzania", title: "When to Go: The Best Time to Visit Tanzania", excerpt: "A month-by-month guide to Tanzania for wildlife, trekking, and beach holidays.", author: "Serenity Africa Team", category: "Travel Tips", coverImage: "/images/destinations/ruaha/ruaha-6.webp", body: "<h2>Planning the Perfect Safari</h2><p>Tanzania is a year-round destination, but timing matters.</p>", publishedAt: new Date("2024-10-01") },
    ]
    for (const post of BLOG_POSTS) {
      const existing = await prisma.blogPost.findFirst({ where: { slug: post.slug } })
      if (!existing) await prisma.blogPost.create({ data: { ...post, status: "PUBLISHED", tags: [] } })
    }
    log.push("Blog posts loaded.")

    // Seed destinations
    log.push("Loading destinations...")
    const DESTINATIONS = [
      { title: "Serengeti National Park", slug: "serengeti", region: "Northern Circuit", description: "World-famous for the Great Wildebeest Migration and an incredibly high density of predators.", coverImage: "/images/destinations/serengeti/serengeti-18.webp", wildlife: ["Lion", "Leopard", "Cheetah", "Wildebeest", "Zebra"], activities: ["Game Drives", "Hot Air Balloon Safari", "Walking Safari"], bestTime: "June to October", climate: "Semi-arid" },
      { title: "Ngorongoro Crater", slug: "ngorongoro", region: "Northern Circuit", description: "A UNESCO World Heritage site. The world's largest inactive volcanic caldera.", coverImage: "/images/destinations/ngorongoro/ngorongoro-1.webp", wildlife: ["Big Five", "Black Rhino", "Flamingos"], activities: ["Crater Game Drives", "Maasai Cultural Visits"], bestTime: "June to September", climate: "Cool highland" },
      { title: "Tarangire National Park", slug: "tarangire", region: "Northern Circuit", description: "Known for massive elephant herds, ancient baobab trees, and dry-season wildlife gatherings.", coverImage: "/images/destinations/tarangire/tarangire-14.webp", wildlife: ["Elephant", "Lion", "Leopard"], activities: ["Game Drives", "Walking Safari", "Night Game Drive"], bestTime: "June to October", climate: "Semi-arid" },
      { title: "Mount Kilimanjaro", slug: "kilimanjaro", region: "Northern Circuit", description: "The Roof of Africa — the highest free-standing mountain in the world.", coverImage: "/images/destinations/kilimanjaro/kilimanjaro-12.webp", wildlife: ["Colobus Monkey", "Elephant", "Buffalo"], activities: ["Machame Route", "Lemosho Route", "Marangu Route"], bestTime: "January to February, June to October", climate: "Varies by altitude" },
      { title: "Ruaha National Park", slug: "ruaha", region: "Southern Circuit", description: "Rugged scenery and massive predator populations — the remote heart of Tanzania.", coverImage: "/images/destinations/ruaha/ruaha-5.webp", wildlife: ["Lion", "Leopard", "Elephant", "Wild Dog"], activities: ["Game Drives", "Walking Safari", "Fly Camping"], bestTime: "June to October", climate: "Semi-arid" },
      { title: "Nyerere National Park", slug: "nyerere", region: "Southern Circuit", description: "Africa's largest national park, dominated by the mighty Rufiji River.", coverImage: "/images/destinations/nyerere/nyerere-1.webp", wildlife: ["Hippo", "Crocodile", "Elephant", "Wild Dog"], activities: ["Boat Safari", "Game Drives", "Walking Safari"], bestTime: "June to October", climate: "Hot and dry" },
      { title: "Zanzibar Archipelago", slug: "zanzibar", region: "Coastal & Islands", description: "A tropical paradise with pristine beaches and vibrant Swahili culture.", coverImage: "/images/destinations/zanzibar/zanzibar-1.webp", wildlife: ["Dolphin", "Green Turtle", "Whale Shark"], activities: ["Beach Relaxation", "Snorkeling & Diving", "Stone Town Tour"], bestTime: "June to October, December to February", climate: "Tropical" },
    ]
    for (const dest of DESTINATIONS) {
      const existing = await prisma.destination.findFirst({ where: { slug: dest.slug } })
      if (!existing) await prisma.destination.create({ data: { ...dest, status: "PUBLISHED", gallery: [] } })
    }
    log.push("Destinations loaded.")

    // Seed tours
    log.push("Loading tours...")
    const TOURS = [
      { slug: "5-day-big-five-safari", title: "5-Day Big Five Safari", summary: "A compact yet comprehensive safari across Northern Tanzania.", description: "A compact yet comprehensive safari taking you to the most iconic parks in Northern Tanzania.", price: 3500, duration: 5, groupSize: "2-6 pax", difficulty: "Easy", season: "Year-round", category: "Safaris", destination: "Serengeti, Ngorongoro, Tarangire", coverImage: "/images/destinations/serengeti/serengeti-18.webp", highlights: ["Serengeti Game Drives", "Ngorongoro Crater", "Tarangire Elephants", "Big Five Spotting"], includes: ["Park fees", "Lodge accommodation", "Professional guide", "All meals"], excludes: ["Flights", "Visas", "Tips"], itinerary: [{ day: 1, title: "Arusha to Tarangire", description: "Full day game drive with picnic lunch.", accommodation: "Maramboi Tented Lodge", meals: ["Lunch", "Dinner"] }, { day: 2, title: "Tarangire to Serengeti", description: "Drive towards the Serengeti.", accommodation: "Serengeti Heritage Camp", meals: ["Breakfast", "Lunch", "Dinner"] }, { day: 3, title: "Full Day in Serengeti", description: "Full day game drives.", accommodation: "Serengeti Heritage Camp", meals: ["Breakfast", "Lunch", "Dinner"] }, { day: 4, title: "Serengeti to Ngorongoro", description: "Morning game drive then crater rim.", accommodation: "Rhino Lodge", meals: ["Breakfast", "Lunch", "Dinner"] }, { day: 5, title: "Ngorongoro to Arusha", description: "Descend into the crater, return to Arusha.", accommodation: "", meals: ["Breakfast", "Lunch"] }] },
      { slug: "7-day-machame-route", title: "7-Day Machame Route", summary: "Tanzania's most popular Kilimanjaro climbing route.", description: "The Machame Route offers superb scenery and higher summit success rates.", price: 2200, duration: 7, groupSize: "2-12 pax", difficulty: "Challenging", season: "Jan-Feb, Jun-Oct", category: "Mountain Climbs", destination: "Mount Kilimanjaro", coverImage: "/images/destinations/kilimanjaro/kilimanjaro-12.webp", highlights: ["Scenic Route", "Great Acclimatization", "Lava Tower", "Barranco Wall"], includes: ["Park fees", "Camping fees", "Guides", "Porters", "All meals"], excludes: ["Flights", "Tips", "Personal gear"], itinerary: [{ day: 1, title: "Machame Gate to Machame Camp", description: "Trek through the rainforest.", accommodation: "Machame Camp", meals: ["Lunch", "Dinner"] }, { day: 2, title: "Machame to Shira Cave", description: "Out of the rainforest onto the Shira Plateau.", accommodation: "Shira Cave Camp", meals: ["Breakfast", "Lunch", "Dinner"] }, { day: 3, title: "Shira to Barranco via Lava Tower", description: "Key acclimatization day.", accommodation: "Barranco Camp", meals: ["Breakfast", "Lunch", "Dinner"] }, { day: 4, title: "Barranco to Karanga", description: "Climb the Barranco Wall.", accommodation: "Karanga Camp", meals: ["Breakfast", "Lunch", "Dinner"] }, { day: 5, title: "Karanga to Barafu", description: "Trek to base camp.", accommodation: "Barafu Camp", meals: ["Breakfast", "Lunch", "Dinner"] }, { day: 6, title: "Summit — Uhuru Peak", description: "Midnight summit attempt. Descend to Mweka.", accommodation: "Mweka Camp", meals: ["Breakfast", "Lunch", "Dinner"] }, { day: 7, title: "Mweka Camp to Gate", description: "Final descent and certificate collection.", accommodation: "Hotel in Moshi", meals: ["Breakfast", "Lunch"] }] },
      { slug: "10-day-migration-beach", title: "10-Day Migration & Beach", summary: "Great Migration game viewing combined with Zanzibar relaxation.", description: "Witness dramatic river crossings then unwind on the white sands of Zanzibar.", price: 5500, duration: 10, groupSize: "2-12 pax", difficulty: "Easy", season: "Jul-Oct, Jan-Mar", category: "The Great Migration", destination: "Serengeti, Zanzibar", coverImage: "/images/destinations/serengeti/serengeti-18.webp", highlights: ["Migration River Crossings", "Luxury Tented Camps", "Zanzibar Beaches", "Stone Town Tour"], includes: ["Domestic flights", "Luxury accommodation", "Park fees", "Safari vehicle"], excludes: ["International flights", "Visas", "Tips"], itinerary: [{ day: 1, title: "Arrival", description: "Transfer to Arusha.", accommodation: "Arusha Hotel", meals: ["Dinner"] }, { day: 2, title: "Tarangire", description: "Game drive among elephant herds.", accommodation: "Tarangire Lodge", meals: ["Breakfast", "Lunch", "Dinner"] }, { day: 3, title: "Serengeti Central", description: "Heart of the park.", accommodation: "Serengeti Camp", meals: ["Breakfast", "Lunch", "Dinner"] }, { day: 4, title: "Migration Area", description: "Follow the herds to the Mara River.", accommodation: "Migration Camp", meals: ["Breakfast", "Lunch", "Dinner"] }, { day: 5, title: "Ngorongoro Crater", description: "The world's largest inactive caldera.", accommodation: "Crater Lodge", meals: ["Breakfast", "Lunch", "Dinner"] }, { day: 6, title: "Fly to Zanzibar", description: "Flight to paradise.", accommodation: "Beach Resort", meals: ["Breakfast", "Dinner"] }, { day: 7, title: "Stone Town Tour", description: "Historic alleyways and spice markets.", accommodation: "Beach Resort", meals: ["Breakfast"] }, { day: 8, title: "Beach Day", description: "Leisure at your resort.", accommodation: "Beach Resort", meals: ["Breakfast"] }, { day: 9, title: "Snorkeling", description: "Marine life and coral reefs.", accommodation: "Beach Resort", meals: ["Breakfast"] }, { day: 10, title: "Departure", description: "Transfer to airport.", accommodation: "", meals: ["Breakfast"] }] },
      { slug: "5-day-zanzibar-escape", title: "5-Day Zanzibar Escape", summary: "Relax on the Spice Island with culture and beach bliss.", description: "A balance of cultural exploration in Stone Town and pure leisure on white sand beaches.", price: 1500, duration: 5, groupSize: "2+", difficulty: "Easy", season: "Jun-Oct, Dec-Feb", category: "Beach Holidays", destination: "Zanzibar", coverImage: "/images/destinations/zanzibar/zanzibar-1.webp", highlights: ["Beach Relaxation", "Stone Town Tour", "Spice Farm", "Snorkeling"], includes: ["All Transfers", "Hotel B&B", "Stone Town Tour", "Spice Farm Visit"], excludes: ["Flights", "Lunches", "Tips"], itinerary: [{ day: 1, title: "Arrival Zanzibar", description: "Transfer to Stone Town.", accommodation: "Stone Town Hotel", meals: ["Dinner"] }, { day: 2, title: "Stone Town & Spices", description: "Guided city tour and spice farm visit.", accommodation: "Beach Resort", meals: ["Breakfast"] }, { day: 3, title: "Beach Day", description: "Full leisure at your beach resort.", accommodation: "Beach Resort", meals: ["Breakfast"] }, { day: 4, title: "Snorkeling", description: "Mnemba Atoll marine experience.", accommodation: "Beach Resort", meals: ["Breakfast"] }, { day: 5, title: "Departure", description: "Transfer to airport.", accommodation: "", meals: ["Breakfast"] }] },
    ]
    for (const tour of TOURS) {
      const { itinerary, ...rest } = tour
      const existing = await prisma.tour.findFirst({ where: { slug: rest.slug } })
      if (!existing) {
        await prisma.tour.create({
          data: {
            ...rest,
            status: "PUBLISHED",
            gallery: [],
            itinerary: { create: itinerary },
          },
        })
      }
    }
    log.push("Tours loaded.")

    // Seed experiences
    log.push("Loading experiences...")
    const EXPERIENCES = [
      { slug: "game-drives", title: "Game Drives", type: "Game Drive", description: "The classic African safari in a 4x4 with a pop-up roof.", highlights: ["Big Five", "Expert tracking", "Morning and afternoon drives"], coverImage: "/images/destinations/serengeti/serengeti-1.webp" },
      { slug: "balloon-safaris", title: "Balloon Safaris", type: "Aerial", description: "Float silently over the Serengeti at sunrise.", highlights: ["Aerial Serengeti views", "Champagne breakfast"], coverImage: "/images/experience/balloon safari/balloon-2.webp" },
      { slug: "walking-safaris", title: "Walking Safaris", type: "Walking Safari", description: "Connect with nature on a guided bush walk.", highlights: ["Animal tracking", "Medicinal plants", "Armed ranger escort"], coverImage: "/images/destinations/arusha/arusha-1.webp" },
      { slug: "boat-safaris", title: "Boat Safaris", type: "Water Safari", description: "Glide along the Rufiji River observing hippos and birdlife.", highlights: ["Hippo sightings", "Outstanding photography"], coverImage: "/images/destinations/nyerere/nyerere-4.webp" },
      { slug: "cultural-visits", title: "Cultural Visits", type: "Cultural", description: "Meet the Maasai, Hadzabe, and Datoga peoples.", highlights: ["Maasai boma visit", "Hadzabe hunting demonstration"], coverImage: "/images/destinations/tarangire/tarangire-15.webp" },
    ]
    for (const exp of EXPERIENCES) {
      const existing = await prisma.experience.findFirst({ where: { slug: exp.slug } })
      if (!existing) await prisma.experience.create({ data: { ...exp, status: "PUBLISHED", gallery: [] } })
    }
    log.push("Experiences loaded.")

    // Seed reviews
    log.push("Loading reviews...")
    const REVIEWS = [
      { name: "The Kensington Family", location: "London, UK", rating: 5, quote: "An ethereal experience that redefined what luxury means to us. Waking to the sounds of the Serengeti from our private deck was simply unforgettable.", trip: "10-Day Serengeti & Zanzibar", featured: true },
      { name: "Julian & Sarah M.", location: "New York, USA", rating: 5, quote: "The attention to detail was beyond anything we have experienced in our travels. Our guide knew every animal by name and every tree by story.", trip: "Honeymoon Safari", featured: true },
      { name: "Mark Thompson", location: "Sydney, Australia", rating: 5, quote: "We have been on safaris across Africa but Serenity is on another level. The private camps, the guides, the silence — absolutely world class.", trip: "Photographic Expedition", featured: true },
      { name: "Dr. & Mrs. Hoffmann", location: "Munich, Germany", rating: 5, quote: "From the very first email to the farewell transfer, every detail was handled with grace and professionalism.", trip: "7-Day Northern Circuit Safari", featured: false },
      { name: "Charlotte & Ben", location: "Cape Town, South Africa", rating: 5, quote: "The Ngorongoro Crater at sunrise, completely alone with our guide — that moment alone was worth the entire journey.", trip: "5-Day Big Five Safari", featured: false },
      { name: "The Okafor Family", location: "Lagos, Nigeria", rating: 5, quote: "Travelling with three children and a grandmother, we were nervous. Serenity made every single one of us feel completely at ease and in awe.", trip: "Family Safari Adventure", featured: false },
    ]
    for (const review of REVIEWS) {
      const existing = await prisma.review.findFirst({ where: { name: review.name } })
      if (!existing) await prisma.review.create({ data: { ...review, status: "PUBLISHED" } })
    }
    log.push("Reviews loaded.")

    // Create admin user
    log.push("Creating admin account...")
    const hashed = await bcrypt.hash(password, 12)
    await prisma.adminUser.create({
      data: { email, password: hashed, name, role: "ADMIN" },
    })
    log.push("Admin account created.")
    log.push("Installation complete!")

    await prisma.$disconnect()
    return NextResponse.json({ log }, { status: 200 })
  } catch (err: unknown) {
    await prisma.$disconnect()
    const message = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
