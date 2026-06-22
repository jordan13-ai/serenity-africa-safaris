import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowLeft, MapPin, Clock, Users, Calendar, Star } from "lucide-react"
import { DestinationContent } from "./DestinationContent"

// ─── DESTINATION DATA ───────────────────────────────────────────────────────
const destinationData: Record<string, any> = {
    serengeti: {
        name: "Serengeti",
        fullName: "Serengeti National Park",
        tagline: "The Infinite Plains",
        heroSubtitle: "Tanzania's Crown Jewel",
        description: "Stretching endlessly beneath the East African sky, the Serengeti is the beating heart of Tanzania's wildlife. Home to the greatest wildlife spectacle on earth — the Great Migration — this UNESCO World Heritage site captivates every traveller who enters its golden embrace.",
        longDescription: "The Serengeti National Park spans 14,763 square kilometres of seemingly infinite savannah, woodlands, and rivers. It is the oldest and most popular national park in Tanzania, and is internationally renowned for its annual migration of over 1.5 million white-bearded wildebeest and hundreds of thousands of zebra. Beyond the migration, the Serengeti sustains the highest density of large mammal species found anywhere on earth. Witness prides of lion lounging on sun-warmed kopjes, cheetah sprinting across the plains, and leopards draped elegantly in acacia trees.",
        heroImage: "/images/destinations/serengeti/serengeti-1.webp",
        portraitImage: "/images/destinations/serengeti/serengeti-5.webp",
        experienceImage: "/images/destinations/serengeti/serengeti-12.webp",
        stats: [
            { label: "Area", value: "14,763 km²" },
            { label: "Wildlife Species", value: "500+" },
            { label: "Bird Species", value: "500+" },
            { label: "Best For", value: "Migration" }
        ],
        highlights: [
            "Witness the Great Migration — 1.5 million wildebeest crossing",
            "Highest density of predators in Africa (lions, leopards, cheetah)",
            "Breathtaking balloon safaris over the endless plains at dawn",
            "Luxurious tented camps and lodges right in the heart of the action",
            "Central Seronera region — the wildlife hub of Tanzania",
            "Grumeti and Mara river crossings — the most dramatic wildlife spectacle"
        ],
        experiences: [
            { name: "Great Migration Witness", icon: "🦬", desc: "Track the wildebeest's ancient seasonal odyssey across the Serengeti-Mara ecosystem." },
            { name: "Balloon Safari at Dawn", icon: "🎈", desc: "Drift silently above the golden plains as the sun rises over Africa's most iconic wilderness." },
            { name: "Big Five Game Drives", icon: "🦁", desc: "Expert-guided morning and evening drives to encounter the lions, leopards, elephants, buffalo and rhino." },
            { name: "Bush Dinner Under Stars", icon: "🌟", desc: "A private candlelit dinner in the bush — the Milky Way as your canopy, lions calling in the distance." }
        ],
        gallery: [
            "/images/destinations/serengeti/serengeti-3.webp",
            "/images/destinations/serengeti/serengeti-7.webp",
            "/images/destinations/serengeti/serengeti-14.webp",
            "/images/destinations/serengeti/serengeti-20.webp",
            "/images/destinations/serengeti/serengeti-25.webp",
            "/images/destinations/serengeti/serengeti-31.webp",
        ],
        bestTime: "Year-round. Peak migration (July-October) for river crossings. January-March for calving season.",
        location: "Northern Tanzania",
        duration: "3–7 Days Recommended",
        travelTime: "45 min flight from Arusha",
        seoKeywords: "Serengeti safari, Great Migration Tanzania, Serengeti National Park, wildebeest migration, luxury Serengeti lodge, best time visit Serengeti"
    },
    ngorongoro: {
        name: "Ngorongoro",
        fullName: "Ngorongoro Crater",
        tagline: "The Eighth Wonder",
        heroSubtitle: "Africa's Eden",
        description: "Descend into the world's largest intact volcanic caldera and find yourself in an amphitheatre of wildlife unlike anywhere else on earth. Ngorongoro is not just a destination — it is an experience that redefines what a safari can be.",
        longDescription: "The Ngorongoro Crater is the world's largest unbroken and unflooded volcanic caldera, forming a natural enclosure for around 25,000 large animals. The 260 km² crater floor teems with wildebeest, zebra, gazelle, buffalo, and one of Africa's most stable populations of black rhino. Lions here are famous for their dark manes, having evolved in relative isolation for thousands of years. The rim, towering 600 metres above the floor, offers misty highland forests where leopards and elephant roam freely.",
        heroImage: "/images/destinations/ngorongoro/ngorongoro-1.webp",
        portraitImage: "/images/destinations/ngorongoro/ngorongoro-5.webp",
        experienceImage: "/images/destinations/ngorongoro/ngorongoro-15.webp",
        stats: [
            { label: "Crater Area", value: "260 km²" },
            { label: "Animals", value: "~25,000" },
            { label: "Altitude", value: "2,300 m rim" },
            { label: "Best For", value: "Big Five" }
        ],
        highlights: [
            "World's largest intact caldera — a natural wildlife enclosure",
            "One of Africa's densest concentrations of Black Rhino",
            "Famous dark-maned Ngorongoro lions in their highland habitat",
            "Breathtaking rim viewpoints with panoramic crater vistas",
            "UNESCO World Heritage Site and Biosphere Reserve",
            "Close encounters with Flamingos on Lake Magadi"
        ],
        experiences: [
            { name: "Crater Floor Game Drive", icon: "🦏", desc: "Descend 600m into Earth's most spectacular natural arena for close encounters with the Big Five." },
            { name: "Rhino Tracking", icon: "🦏", desc: "Work with expert rangers to spot Ngorongoro's rare and iconic black rhinos on the crater floor." },
            { name: "Rim Sundowners", icon: "🌅", desc: "Watch golden light pour over the crater from the misty highland rim as the sun sets over Africa." },
            { name: "Maasai Village Visit", icon: "🏡", desc: "Connect with the indigenous Maasai people who coexist alongside the wildlife in this sacred land." }
        ],
        gallery: [
            "/images/destinations/ngorongoro/ngorongoro-2.webp",
            "/images/destinations/ngorongoro/ngorongoro-6.webp",
            "/images/destinations/ngorongoro/ngorongoro-9.webp",
            "/images/destinations/ngorongoro/ngorongoro-13.webp",
            "/images/destinations/ngorongoro/ngorongoro-18.webp",
            "/images/destinations/ngorongoro/ngorongoro-19.webp",
        ],
        bestTime: "Year-round. Dry season (June-September) for best visibility and wildlife viewing.",
        location: "Northern Tanzania",
        duration: "1–3 Days Recommended",
        travelTime: "3 hrs drive from Arusha",
        seoKeywords: "Ngorongoro Crater safari, Ngorongoro wildlife, Tanzania Big Five, black rhino Tanzania, Ngorongoro Conservation Area, luxury lodge Ngorongoro"
    },
    tarangire: {
        name: "Tarangire",
        fullName: "Tarangire National Park",
        tagline: "The Land of Giants",
        heroSubtitle: "Tanzania's Elephant Kingdom",
        description: "Witness the land of giants, ancient baobabs, and the largest elephant herds in Tanzania. Tarangire is the quiet, soul-stirring alternative to the north circuit — intimate, authentic, and utterly unforgettable.",
        longDescription: "Tarangire National Park is a hidden gem in Tanzania's northern circuit, offering a wilder and more intimate safari experience. Dominated by the life-giving Tarangire River and dotted with massive baobab trees that pierce the skyline, the park feels like a world from a different era. The park is legendary for its elephant population, with herds sometimes numbering in the hundreds gathering along the riverbanks during the dry season. Beyond elephants, Tarangire is a sanctuary for predators and a paradise for bird enthusiasts, with over 550 species recorded.",
        heroImage: "/images/destinations/tarangire/tarangire-1.webp",
        portraitImage: "/images/destinations/tarangire/tarangire-5.webp",
        experienceImage: "/images/destinations/tarangire/tarangire-12.webp",
        stats: [
            { label: "Area", value: "2,850 km²" },
            { label: "Elephant Herds", value: "Hundreds+" },
            { label: "Bird Species", value: "550+" },
            { label: "Best For", value: "Elephants" }
        ],
        highlights: [
            "Home to Tanzania's largest herds of elephants",
            "Ancient baobab trees up to 3,000 years old",
            "Exceptional birdwatching with 550+ species recorded",
            "Year-round predator sightings along Tarangire River",
            "Quiet, intimate safari experience with fewer crowds",
            "Stunning dry season wildlife concentrations"
        ],
        experiences: [
            { name: "Elephant Herds Encounter", icon: "🐘", desc: "Watch hundreds of elephants gather at the Tarangire River — one of Africa's most humbling wildlife spectacles." },
            { name: "Baobab Photography Walk", icon: "📷", desc: "Guided walking safari through ancient baobab forests with expert photographic guidance at golden hour." },
            { name: "Night Game Drive", icon: "🌙", desc: "Venture out after dark to discover Tarangire's nocturnal residents — rarely seen creatures of the African night." },
            { name: "Bird Watching Expedition", icon: "🦅", desc: "Over 550 recorded species await in the riverine forests, marshes and open woodlands of Tarangire." }
        ],
        gallery: [
            "/images/destinations/tarangire/tarangire-19.webp",
            "/images/destinations/tarangire/tarangire-17.webp",
            "/images/destinations/tarangire/tarangire-10.webp",
            "/images/destinations/tarangire/tarangire-12.webp",
            "/images/destinations/tarangire/tarangire-2.webp",
            "/images/destinations/tarangire/tarangire-11.webp",
        ],
        bestTime: "June to October (dry season). Elephants concentrate at the river, making sightings extraordinary.",
        location: "Northern Tanzania",
        duration: "2–4 Days Recommended",
        travelTime: "2 hrs drive from Arusha",
        seoKeywords: "Tarangire National Park safari, elephant safari Tanzania, baobab tree safari, Tarangire wildlife, Tanzania northern circuit"
    },
    zanzibar: {
        name: "Zanzibar",
        fullName: "Zanzibar Archipelago",
        tagline: "The Spice Island Paradise",
        heroSubtitle: "Where Safari Meets Ocean",
        description: "The perfect conclusion to an exhilarating safari. Zanzibar's pristine white beaches, turquoise waters, and ancient Stone Town offer a sensory richness that is utterly unlike anywhere else in the world.",
        longDescription: "Zanzibar is a semi-autonomous archipelago off the coast of Tanzania, comprising the Zanzibar Island (Unguja) and Pemba Island, along with numerous smaller islands. The main island is famous for its white sand beaches and clear turquoise waters. Stone Town, the old part of Zanzibar City, is a UNESCO World Heritage Site — a living testament to the island's rich Swahili, Arab, Indian and European heritage. The islands are also known as the Spice Islands for their production of cloves, nutmeg and cinnamon.",
        heroImage: "/images/destinations/zanzibar/zanzibar-1.webp",
        portraitImage: "/images/destinations/zanzibar/zanzibar-8.webp",
        experienceImage: "/images/destinations/zanzibar/zanzibar-15.webp",
        stats: [
            { label: "Coastline", value: "200+ km" },
            { label: "Water Temp", value: "26–29°C" },
            { label: "Heritage Site", value: "Stone Town" },
            { label: "Best For", value: "Beach & Culture" }
        ],
        highlights: [
            "Pristine white sand beaches — Nungwi, Paje, Kendwa and beyond",
            "UNESCO World Heritage Site Stone Town — a living cultural mosaic",
            "World-class snorkelling and diving at Mnemba Atoll",
            "Traditional dhow sunset cruises on the Indian Ocean",
            "Spice plantation tours — vanilla, cloves, nutmeg and cinnamon",
            "Swim with whale sharks in season (October to March)"
        ],
        experiences: [
            { name: "Dhow Sunset Cruise", icon: "⛵", desc: "Sail the Indian Ocean on a traditional wooden dhow as the sky explodes with colour over the horizon." },
            { name: "Stone Town Cultural Walk", icon: "🕌", desc: "Explore winding alleyways, carved doorways, and vibrant spice markets with a knowledgeable local guide." },
            { name: "Mnemba Atoll Diving", icon: "🐠", desc: "Dive one of the Indian Ocean's most pristine reefs, home to dolphins, turtles, and spectacular coral gardens." },
            { name: "Spice Farm Immersion", icon: "🌿", desc: "Walk through aromatic spice plantations and taste fresh vanilla, cloves and cardamom straight from the plant." }
        ],
        gallery: [
            "/images/destinations/zanzibar/zanzibar-3.webp",
            "/images/destinations/zanzibar/zanzibar-7.webp",
            "/images/destinations/zanzibar/zanzibar-10.webp",
            "/images/destinations/zanzibar/zanzibar-16.webp",
            "/images/destinations/zanzibar/zanzibar-22.webp",
            "/images/destinations/zanzibar/zanzibar-24.webp",
        ],
        bestTime: "June to October (dry season). December to March for whale sharks. Year-round for beach.",
        location: "Indian Ocean, off Tanzania coast",
        duration: "4–7 Days Recommended",
        travelTime: "25 min flight from Dar es Salaam",
        seoKeywords: "Zanzibar beach holiday, Zanzibar safari combo, Stone Town Zanzibar, Zanzibar snorkelling, luxury Zanzibar resort, Tanzania beach vacation"
    },
    ruaha: {
        name: "Ruaha",
        fullName: "Ruaha National Park",
        tagline: "Tanzania's Wild South",
        heroSubtitle: "Africa's Untamed Frontier",
        description: "Far from the tourist trails, Ruaha is Tanzania's largest national park and one of Africa's best-kept secrets. For those who seek raw wilderness, solitude, and an authentic connection with nature, Ruaha is unrivalled.",
        longDescription: "Ruaha National Park is Tanzania's largest national park and one of Africa's most exciting wildlife destinations. The park is characterised by the Great Ruaha River, which sustains an extraordinary concentration of wildlife during the dry season. The park is home to vast elephant herds, large prides of lion, and one of Africa's healthiest wild dog populations. Its remote setting ensures that visits here feel genuinely exclusive — game drives can last for hours without encountering another vehicle.",
        heroImage: "/images/destinations/ruaha/ruaha-1.webp",
        portraitImage: "/images/destinations/ruaha/ruaha-5.webp",
        experienceImage: "/images/destinations/ruaha/ruaha-8.webp",
        stats: [
            { label: "Area", value: "20,226 km²" },
            { label: "Elephant Pop.", value: "Large Herds" },
            { label: "Wild Dogs", value: "Resident Packs" },
            { label: "Best For", value: "Exclusivity" }
        ],
        highlights: [
            "Tanzania's largest national park — exclusive, wild, and spectacular",
            "One of Africa's highest concentrations of wild dogs",
            "Huge elephant herds congregating along the Great Ruaha River",
            "Virtually crowd-free — authentic wilderness at its finest",
            "Kudu, roan, and sable antelope rarely seen elsewhere",
            "Exceptional walking safaris led by armed, expert rangers"
        ],
        experiences: [
            { name: "Wild Dog Tracking", icon: "🐾", desc: "Work with expert trackers to locate and observe Africa's most endangered predator in its element." },
            { name: "Ruaha River Game Drive", icon: "🌊", desc: "Follow the life-giving Great Ruaha River and witness the extraordinary concentration of wildlife at its banks." },
            { name: "Walking Safari", icon: "🥾", desc: "The most intimate way to experience Ruaha — on foot, with a skilled ranger reading every sign of the bush." },
            { name: "Fly-Camp Under Stars", icon: "⛺", desc: "Spend a night in a remote fly-camp deep in the wilderness with just canvas between you and the African night." }
        ],
        gallery: [
            "/images/destinations/ruaha/ruaha-2.webp",
            "/images/destinations/ruaha/ruaha-4.webp",
            "/images/destinations/ruaha/ruaha-6.webp",
            "/images/destinations/ruaha/ruaha-7.webp",
            "/images/destinations/ruaha/ruaha-3.webp",
            "/images/destinations/ruaha/ruaha-8.webp",
        ],
        bestTime: "May to November (dry season). July to October for peak wildlife concentration at the river.",
        location: "Southern Tanzania",
        duration: "3–5 Days Recommended",
        travelTime: "1 hr flight from Dar es Salaam",
        seoKeywords: "Ruaha National Park safari, Tanzania southern circuit, wild dog safari Africa, Ruaha wilderness, exclusive Tanzania safari"
    },
    nyerere: {
        name: "Nyerere",
        fullName: "Nyerere National Park",
        tagline: "Africa's Largest Reserve",
        heroSubtitle: "The Selous Wilderness",
        description: "Formerly known as Selous Game Reserve, Nyerere is Africa's largest national park — a vast, water-rich wilderness of rivers, lakes and ancient forests that offers an entirely different dimension of safari.",
        longDescription: "Nyerere National Park, formerly the Selous Game Reserve, is Africa's largest national park at over 50,000 km². A UNESCO World Heritage Site, it is bisected by the Rufiji River — Tanzania's largest river — creating a mosaic of habitats including permanent lakes, dense miombo woodlands, and open grasslands. The park is famous for its boat safaris on the Rufiji and its network of lakes, which provide some of the most exciting and unique wildlife encounters available anywhere in Africa.",
        heroImage: "/images/destinations/nyerere/nyerere-1.webp",
        portraitImage: "/images/destinations/nyerere/nyerere-3.webp",
        experienceImage: "/images/destinations/nyerere/nyerere-6.webp",
        stats: [
            { label: "Area", value: "50,000+ km²" },
            { label: "Rufiji River", value: "Tanzania's Largest" },
            { label: "Hippos", value: "Thousands" },
            { label: "Best For", value: "Boat Safari" }
        ],
        highlights: [
            "Africa's largest national park — an ocean of wilderness",
            "Spectacular boat safaris on the Rufiji River and oxbow lakes",
            "Walking safaris in truly remote, pristine wilderness",
            "Enormous hippo pods and Nile crocodile concentrations",
            "UNESCO World Heritage Site — ancient and untouched",
            "Resident population of African wild dogs"
        ],
        experiences: [
            { name: "Rufiji River Boat Safari", icon: "⛵", desc: "Float silently past hippo pods, basking crocodiles and fishing eagles on the legendary Rufiji River." },
            { name: "Lake Nzerakera Sunset", icon: "🌅", desc: "Watch hundreds of birds descend on the oxbow lakes at dusk — a sensory masterpiece." },
            { name: "Walking Safari", icon: "🥾", desc: "Explore the remote miombo woodlands on foot with professional guides tracking wildlife by its signs." },
            { name: "Fly Camping", icon: "🏕️", desc: "Spend a night at a remote temporary camp under Africa's most spectacular starry sky." }
        ],
        gallery: [
            "/images/destinations/nyerere/nyerere-2.webp",
            "/images/destinations/nyerere/nyerere-4.webp",
            "/images/destinations/nyerere/nyerere-5.webp",
            "/images/destinations/nyerere/nyerere-3.webp",
            "/images/destinations/nyerere/nyerere-1.webp",
            "/images/destinations/nyerere/nyerere-6.webp",
        ],
        bestTime: "June to October (dry season) for best boat safaris and wildlife concentration.",
        location: "Southern Tanzania",
        duration: "3–5 Days Recommended",
        travelTime: "1 hr flight from Dar es Salaam",
        seoKeywords: "Nyerere National Park, Selous Game Reserve Tanzania, boat safari Africa, Rufiji River safari, Tanzania southern safari"
    }
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const data = destinationData[slug]
    if (!data) return { title: "Destination Not Found" }

    const title = `${data.fullName} Safari | ${data.tagline} | Serenity Africa Safaris`
    const description = `${data.description} Plan your ${data.name} safari with Serenity Africa Safaris — Tanzania's premier luxury operator. ${data.bestTime}`

    return {
        title,
        description,
        keywords: [...data.seoKeywords.split(", "), "Serenity Africa Safaris", "Tanzania safari", "luxury safari Africa"],
        alternates: { canonical: `https://serenityafricasafaris.com/destinations/${slug}/` },
        openGraph: {
            title,
            description,
            url: `https://serenityafricasafaris.com/destinations/${slug}`,
            images: [{ url: data.heroImage, width: 1200, height: 630, alt: `${data.fullName} - Serenity Africa Safaris` }]
        }
    }
}

export function generateStaticParams() {
    return Object.keys(destinationData).map(slug => ({ slug }))
}

export default async function DestinationPage({ params }: Props) {
    const { slug } = await params
    const data = destinationData[slug]
    if (!data) notFound()

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": data.fullName,
        "description": data.description,
        "image": `https://serenityafricasafaris.com${data.heroImage}`,
        "url": `https://serenityafricasafaris.com/destinations/${slug}`,
        "touristType": ["Wildlife Safari", "Luxury Travel", "Nature Tourism"],
        "hasMap": `https://serenityafricasafaris.com/destinations/${slug}`,
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <DestinationContent data={data} slug={slug} />
        </>
    )
}
