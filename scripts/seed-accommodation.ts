import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { config } from "dotenv"

config({ path: ".env.local" })

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

const LODGES = [
  {
    name: "Serenity Camp & Lodges",
    slug: "serenity-camp-lodges",
    status: "PUBLISHED" as const,
    type: "Signature Lodge",
    destination: "Serengeti",
    description: "Our flagship sanctuary nestled amid the Nyabogati Kopjes in Seronera — the very heart of Serengeti National Park. Maasai-inspired design meets world-class luxury, placing you directly in the pathway of the Great Migration year-round. Wake to lion roars, sleep under infinite stars, and experience Africa as it was meant to be felt.",
    highlights: [
      "Signature first property",
      "Nyabogati Kopjes location",
      "Great Migration pathways",
      "Maasai-inspired design",
      "17km from Seronera Airstrip",
      "Eco-certified sanctuary",
    ],
    amenities: [
      "Private outdoor decks",
      "En-suite bathrooms",
      "High-speed WiFi",
      "Welcome drinks on arrival",
      "In-room safe",
      "Eco-friendly amenities",
      "Daily housekeeping",
      "Campfire evenings",
    ],
    priceFrom: 850,
    coverImage: "/images/accommodation/serenity-lodge/Serenity_africa_lodge1.webp",
    gallery: [
      "/images/accommodation/serenity-lodge/Serenity_africa_lodge1.webp",
      "/images/accommodation/serenity-lodge/Serenity_africa_lodge2.webp",
      "/images/accommodation/serenity-lodge/Serenity_africa_lodge3.webp",
      "/images/accommodation/serenity-lodge/Serenity_africa_lodge4.webp",
    ],
    website: "https://serenitycampandlodges.com",
  },
  {
    name: "Serenity Ngorongoro Highlands Lodge",
    slug: "serenity-ngorongoro-highlands",
    status: "PUBLISHED" as const,
    type: "Luxury Lodge",
    destination: "Ngorongoro",
    description: "Perched on the misty rim of the world's largest intact volcanic caldera, Serenity Ngorongoro Highlands Lodge redefines highland luxury. Stone-and-timber suites cascade down the crater's forested edge, commanding sweeping views over the UNESCO World Heritage Site below. Each morning brings a different theatre of wildlife — lions, elephants, and black rhino roaming the ancient caldera floor.",
    highlights: [
      "Crater rim panoramic views",
      "Stone & timber architecture",
      "UNESCO World Heritage site",
      "Big 5 including black rhino",
      "Highland forest setting",
      "Exclusive sunrise crater descents",
    ],
    amenities: [
      "Heated stone fireplaces",
      "Infinity-edge viewing decks",
      "Fine dining restaurant",
      "Spa & wellness pavilion",
      "Resident naturalist guides",
      "In-room butler service",
      "Wine cellar",
      "Heated floors",
    ],
    priceFrom: 1200,
    coverImage: "/images/destinations/ngorongoro/ngorongoro-11.webp",
    gallery: [
      "/images/destinations/ngorongoro/ngorongoro-11.webp",
      "/images/destinations/ngorongoro/ngorongoro-1.webp",
    ],
    website: "",
  },
  {
    name: "Serenity Ruaha River Lodge",
    slug: "serenity-ruaha-river",
    status: "PUBLISHED" as const,
    type: "Luxury Lodge",
    destination: "Ruaha",
    description: "On a rocky escarpment above the Great Ruaha River, this architectural masterpiece sits at the frontier of Tanzania's last true wilderness. One of Africa's largest national parks surrounds you in every direction — vast, untouched, and teeming with giant elephant herds, over 500 bird species, and the elusive wild dog. Serenity Ruaha River Lodge is for those who seek profoundly remote luxury.",
    highlights: [
      "Great Ruaha River frontage",
      "Largest elephant herds in Africa",
      "Walking safaris with expert guides",
      "Over 500 bird species",
      "Wild dog territory",
      "Remote untouched wilderness",
    ],
    amenities: [
      "River-view infinity pool",
      "Open-sided lounge & bar",
      "Private verandas with river views",
      "Night safari experiences",
      "Specialist birding guides",
      "Solar-powered eco systems",
      "Bush breakfast setups",
      "Cultural village visits",
    ],
    priceFrom: 980,
    coverImage: "/images/destinations/ruaha/Ruaha-NP-1900x1000-1.webp",
    gallery: [
      "/images/destinations/ruaha/Ruaha-NP-1900x1000-1.webp",
      "/images/destinations/ruaha/Ruaha-elephants-1-1900x640-1.webp",
    ],
    website: "",
  },
  {
    name: "Serenity Tarangire Palm Lodge",
    slug: "serenity-tarangire-palm",
    status: "PUBLISHED" as const,
    type: "Boutique Lodge",
    destination: "Tarangire",
    description: "Surrounded by ancient baobab trees and the iconic Tarangire River, this intimate boutique lodge offers a deeply personal safari encounter. Tarangire's legendary elephant gatherings — the largest on the continent during dry season — are your backdrop. Elevated wooden platforms connect your private suite to the natural canopy, with resident elephants wandering past at dawn.",
    highlights: [
      "Ancient baobab tree setting",
      "Largest elephant gatherings in Africa",
      "Tarangire River frontage",
      "Elevated wooden walkways",
      "Intimate 8-suite property",
      "Year-round outstanding game viewing",
    ],
    amenities: [
      "Elevated private decks",
      "Plunge pool suites",
      "Guided walking safaris",
      "Evening sundowner cruises",
      "In-tent dining available",
      "Private bush picnics",
      "Maasai cultural interactions",
      "Morning bird walks",
    ],
    priceFrom: 750,
    coverImage: "/images/destinations/tarangire/tarangire-2.webp",
    gallery: [
      "/images/destinations/tarangire/tarangire-2.webp",
      "/images/destinations/tarangire/tarangire-16.webp",
    ],
    website: "",
  },
]

const CAMPS = [
  {
    name: "Serenity Great Migration Camp",
    slug: "serenity-great-migration-camp",
    status: "PUBLISHED" as const,
    type: "Mobile Camp",
    destination: "Serengeti",
    description: "Tanzania's most exhilarating seasonal experience, reimagined. Serenity Great Migration Camp moves with the wildebeest across the Serengeti calendar — from the thunderous Mara River crossings in the north to the dramatic calving season on the southern plains. Canvas walls, soft beds, and starlit skies: this is safari at its most authentic and most alive.",
    highlights: [
      "Follows the Great Migration year-round",
      "Mara River crossing front row access",
      "Calving season on southern plains",
      "Intimate 6-tent capacity",
      "True mobile safari experience",
      "Expert naturalist guide included",
    ],
    amenities: [
      "Flush en-suite bathrooms",
      "Hot bucket showers",
      "Gourmet bush kitchen",
      "Open-sided dining tent",
      "Campfire storytelling",
      "Pre-dawn game drives",
      "Sundowner setups in the bush",
      "Private guide per tent available",
    ],
    priceFrom: 680,
    coverImage: "/images/destinations/migration/migration-1.webp",
    gallery: [
      "/images/destinations/migration/migration-1.webp",
    ],
    website: "",
  },
  {
    name: "Serenity Mara River Camp",
    slug: "serenity-mara-river-camp",
    status: "PUBLISHED" as const,
    type: "Permanent Tented Camp",
    destination: "Northern Serengeti",
    description: "A permanent sanctuary commanding the finest position on the Mara River in Tanzania's remote northern Serengeti. From July to October, this stretch of river delivers the most dramatic wildlife spectacle on earth — thousands of wildebeest surging across crocodile-filled waters within metres of camp. With year-round resident cheetah, lion pride, and leopard, this camp never disappoints.",
    highlights: [
      "Prime Mara River crossing position",
      "Year-round resident big cats",
      "Permanent tented luxury",
      "Exclusive northern Serengeti sector",
      "Walking distance to crossing points",
      "Photography specialist guides",
    ],
    amenities: [
      "Canvas suites with solid floors",
      "Private river-view verandas",
      "Swimming pool",
      "Leather lounge & fireplace",
      "Full bar with local spirits",
      "Bush breakfast at crossing sites",
      "Night game drives available",
      "Laundry service",
    ],
    priceFrom: 790,
    coverImage: "/images/destinations/serengeti/serengeti-22.webp",
    gallery: [
      "/images/destinations/serengeti/serengeti-22.webp",
      "/images/destinations/serengeti/serengeti-18.webp",
    ],
    website: "",
  },
  {
    name: "Serenity Nyerere Bush Camp",
    slug: "serenity-nyerere-bush-camp",
    status: "PUBLISHED" as const,
    type: "Exclusive Camp",
    destination: "Nyerere National Park",
    description: "Tanzania's largest protected area remains one of Africa's great secrets — and Serenity Nyerere Bush Camp sits at its wild heart. Shaded by palm trees on the banks of the Rufiji River, this intimate camp offers experiences unavailable in northern Tanzania: boat safaris through hippo-crowded channels, guided fly-camping under the stars, and walking trails through truly wild country.",
    highlights: [
      "Rufiji River frontage",
      "Exclusive boat safaris",
      "Fly-camping under the stars",
      "Wild dog and lion territory",
      "Off-the-beaten-path wilderness",
      "Only 8 guests at a time",
    ],
    amenities: [
      "Raised riverbank tents",
      "Open-air river-view lounge",
      "Canopy-bed accommodations",
      "Private river sundowner decks",
      "Guided fly-camping experiences",
      "Fishing safaris",
      "Cultural interactions with local villages",
      "Solar power throughout",
    ],
    priceFrom: 620,
    coverImage: "/images/destinations/nyerere/Selous-giraffe-river-reflections-RR.webp",
    gallery: [
      "/images/destinations/nyerere/Selous-giraffe-river-reflections-RR.webp",
    ],
    website: "",
  },
  {
    name: "Serenity Zanzibar Beachfront Villa",
    slug: "serenity-zanzibar-beachfront",
    status: "PUBLISHED" as const,
    type: "Luxury Camp",
    destination: "Zanzibar",
    description: "The perfect crescendo to a Tanzania safari — five nights on the Indian Ocean's most storied island. Our exclusive Zanzibar Beachfront Villa combines centuries-old Swahili architecture with modern barefoot luxury. Private plunge pool, personal beach butler, and spice island dining set against a backdrop of turquoise water and powdery white sand. The ultimate safari-and-beach combination.",
    highlights: [
      "Private plunge pool",
      "Direct white sand beach access",
      "Personal beach butler",
      "Traditional Swahili architecture",
      "Spice island dining",
      "Snorkeling & water sports",
    ],
    amenities: [
      "Oceanfront private villa",
      "Personal chef on request",
      "In-villa spa treatments",
      "Sea kayaking & snorkeling",
      "Sunset dhow cruises",
      "Stone Town half-day tour",
      "Spice plantation tour",
      "Airport transfers included",
    ],
    priceFrom: 550,
    coverImage: "/images/destinations/zanzibar/zanzibar-14.webp",
    gallery: [
      "/images/destinations/zanzibar/zanzibar-14.webp",
      "/images/accommodation/serenity_africa_safaris_accommodation-4.webp",
    ],
    website: "",
  },
]

async function main() {
  console.log("Seeding lodges...")
  for (const lodge of LODGES) {
    const existing = await prisma.lodge.findUnique({ where: { slug: lodge.slug } })
    if (existing) {
      await prisma.lodge.update({ where: { slug: lodge.slug }, data: lodge })
      console.log(`  ✓ Updated lodge: ${lodge.name}`)
    } else {
      await prisma.lodge.create({ data: lodge })
      console.log(`  ✓ Created lodge: ${lodge.name}`)
    }
  }

  console.log("\nSeeding camps...")
  for (const camp of CAMPS) {
    const existing = await prisma.camp.findUnique({ where: { slug: camp.slug } })
    if (existing) {
      await prisma.camp.update({ where: { slug: camp.slug }, data: camp })
      console.log(`  ✓ Updated camp: ${camp.name}`)
    } else {
      await prisma.camp.create({ data: camp })
      console.log(`  ✓ Created camp: ${camp.name}`)
    }
  }

  console.log("\nDone! All accommodations seeded.")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
