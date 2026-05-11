import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AccommodationDetailContent } from "./AccommodationDetailContent"

const accommodationData: Record<string, any> = {
    "serenity-camp-lodges": {
        title: "Serenity Camp & Lodges",
        subtitle: "The Heart of the Serengeti",
        description: "Luxurious & Serene – Your home in the Serengeti. Experience ethical and immersive wildlife encounters in the epicenter of the Great Migration.",
        longDescription: "Situated in the central Seronera region of Serengeti National Park, approximately 17km from the Seronera Airstrip, Serenity Camp & Lodges is nestled amid the Nyabogati Kopjes. This strategic location places you directly in the pathway of the Great Migration. Our camp features natural colors inspired by local Maasai culture, offering a world-class stay experience where you can fall asleep to the distant roars of lions and wake up to panoramic savanna views from your private outdoor deck.",
        image: "/images/accommodation/serenity-lodge/Serenity_africa_lodge1.webp",
        features: ["Signature Property", "Central Serengeti", "Great Migration Pathways", "Maasai-Inspired Design", "Eco-Friendly Sanctuary", "Nyabogati Kopjes Location"],
        amenities: ["High-speed Wifi", "Private Outdoor Decks", "Eco-friendly Amenities", "Private Bathroom", "Welcome Drinks", "Safe Box"],
        externalLink: "https://serenitycampandlodges.com/",
        gallery: [
            "/images/accommodation/serenity-lodge/Serenity_africa_lodge1.webp",
            "/images/accommodation/serenity-lodge/Serenity_africa_lodge2.webp",
            "/images/accommodation/serenity-lodge/Serenity_africa_lodge3.webp",
            "/images/accommodation/serenity-lodge/Serenity_africa_lodge4.webp"
        ],
        seoKeywords: "Serenity Camp Lodges Serengeti, luxury tented camp Serengeti, Great Migration accommodation, Nyabogati Kopjes lodge, Maasai style safari camp, Tanzania luxury camp"
    },
    "exclusive-tented-camps": {
        title: "Exclusive Tented Camps",
        subtitle: "Authentic Bush Luxury",
        description: "Experience the romance of classic safaris without compromising on modern luxury. Our exclusive tented camps feature expansive canvas walls, en-suite bathrooms, and private verandas where you can listen to the authentic sounds of the African night while enjoying five-star service.",
        longDescription: "Our tented camps are strategically located in the heart of the wilderness, offering an unparalleled connection to nature. Each tent is a sanctuary of comfort, tastefully furnished with hand-crafted furniture, fine linens, and thoughtful amenities. At night, the sounds of the African bush come alive, providing a symphony that lulls you to sleep. By day, you are perfectly positioned for exceptional wildlife sightings right from your private deck.",
        image: "/images/accommodation/serenity-lodge/Serenity_africa_lodge2.webp",
        features: ["Canvas Walls", "Close to Nature", "En-suite Luxury", "Campfires", "Private Verandas", "Eco-Friendly"],
        amenities: ["Solar Power", "Organic Toiletries", "Outdoor Showers", "Private Butler Service"],
        gallery: [
            "/images/accommodation/serenity-lodge/Serenity_africa_lodge2.webp",
            "/images/accommodation/serenity_africa_safaris_accommodation.webp",
            "/images/accommodation/serenity_africa_safaris_accommodation-5.webp"
        ],
        seoKeywords: "exclusive tented camp Tanzania, luxury safari tent Serengeti, canvas tented camp Africa, bush camp Tanzania, glamping Tanzania safari"
    },
    "luxury-safari-lodges": {
        title: "Luxury Safari Lodges",
        subtitle: "Architectural Elegance",
        description: "Built seamlessly into the natural landscape, our premium lodges offer unparalleled panoramic views of the savannah. Enjoy infinity pools that blend into the horizon, world-class spa services, and fine dining.",
        longDescription: "Our luxury lodges redefine the safari experience with stunning architecture that harmonizes with the environment. From stone-built villas to expansive glass-fronted suites, every detail is designed to maximize the breathtaking views. The experience extends beyond your room with world-class wellness centers, wine cellars, and multiple dining venues that showcase the best of local and international cuisine.",
        image: "/images/accommodation/serenity-lodge/Serenity_africa_lodge3.webp",
        features: ["Infinity Pools", "Spa Services", "Panoramic Views", "Fine Dining", "Wine Cellars", "Fitness Centers"],
        amenities: ["Air Conditioning", "Wi-Fi", "Mini-Bar", "Laundry Service"],
        gallery: [
            "/images/accommodation/serenity-lodge/Serenity_africa_lodge3.webp",
            "/images/accommodation/serenity_africa_safaris_accommodation-2.webp",
            "/images/accommodation/serenity_africa_safaris_accommodation-4.webp"
        ],
        seoKeywords: "luxury safari lodge Tanzania, 5 star safari lodge Serengeti, premium safari accommodation Africa, best safari lodges Tanzania, Ngorongoro luxury lodge"
    },
    "treehouse-suites": {
        title: "Treehouse Suites",
        subtitle: "Elevated Serenity",
        description: "Elevated luxury nestled within ancient giant baobab and mahogany trees. These unique suites offer absolute privacy and breathtaking vantage points.",
        longDescription: "Suspended between the earth and the sky, our treehouse suites offer a perspective like no other. Built into the sprawling canopies of ancient trees, these wooden sanctuaries provide a bird's-eye view of the wilderness. Many feature 'star beds' that can be rolled out onto the deck for a night spent sleeping under the celestial canopy, safely elevated above the African wild.",
        image: "/images/accommodation/serenity_africa_safaris_accommodation-3.webp",
        features: ["Private Decks", "Elevated Views", "Star Beds", "Absolute Privacy", "Baobab Settings", "Romantic Vibe"],
        amenities: ["Star-gazing Kits", "Binoculars", "Gourmet Picnic Baskets", "Private Viewing Decks"],
        gallery: [
            "/images/accommodation/serenity_africa_safaris_accommodation-3.webp",
            "/images/accommodation/serenity_africa_safaris_accommodation.webp",
            "/images/accommodation/serenity_africa_safaris_accommodation-2.webp"
        ],
        seoKeywords: "treehouse suite Tanzania, tree lodge safari Africa, elevated safari suite, star bed safari Tanzania, romantic safari accommodation"
    },
    "beachfront-villas": {
        title: "Beachfront Villas",
        subtitle: "Island Paradise",
        description: "The perfect conclusion to an exhilarating safari. Retreat to the pristine white sands of Zanzibar in a secluded oceanfront villa.",
        longDescription: "Our beachfront villas on the spice island of Zanzibar offer a tranquil haven after the excitement of a safari. These spacious villas feature traditional Swahili architecture blended with modern luxury. Step from your private terrace directly onto soft white sand, or spend your afternoon lounging by your personal plunge pool while the turquoise waters of the Indian Ocean sparkle before you.",
        image: "/images/accommodation/serenity_africa_safaris_accommodation-4.webp",
        features: ["Ocean Views", "Plunge Pools", "White Sand", "Tropical Gardens", "Direct Beach Access", "Swahili Style"],
        amenities: ["Private Pools", "Beach Butler", "Snorkeling Gear", "Sea-facing Terraces"],
        gallery: [
            "/images/accommodation/serenity_africa_safaris_accommodation-4.webp",
            "/images/accommodation/serenity_africa_safaris_accommodation-5.webp",
            "/images/accommodation/serenity_africa_safaris_accommodation-2.webp"
        ],
        seoKeywords: "Zanzibar beachfront villa, luxury villa Zanzibar, safari and beach Tanzania, Indian Ocean villa Tanzania, Swahili villa Zanzibar"
    }
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const data = accommodationData[slug]

    if (!data) {
        return { title: "Accommodation Not Found" }
    }

    const baseUrl = "https://serenityafricasafaris.com"
    const title = `${data.title} | Luxury Safari Accommodation Tanzania`
    const description = `${data.description} Book ${data.title} with Serenity Africa Safaris – Tanzania's premier luxury safari operator. ${data.seoKeywords.split(",").slice(0, 3).join(", ")}.`

    return {
        title,
        description,
        keywords: [
            ...data.seoKeywords.split(", "),
            "Serenity Africa Safaris accommodation",
            "Tanzania safari lodge",
            "luxury safari accommodation Africa",
            "best lodges in Tanzania",
            "Tanzania wildlife lodge",
            "Serengeti accommodation",
            "private safari camp Tanzania",
            "Tanzania safari packages",
            "all inclusive safari Tanzania",
            "book safari Tanzania"
        ],
        alternates: { canonical: `${baseUrl}/accommodation/${slug}` },
        openGraph: {
            title,
            description,
            url: `${baseUrl}/accommodation/${slug}`,
            siteName: "Serenity Africa Safaris",
            images: [{ url: data.image, width: 1200, height: 630, alt: `${data.title} - Serenity Africa Safaris` }],
            type: "website",
            locale: "en_US"
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [data.image],
            creator: "@serenityafrica"
        }
    }
}

export function generateStaticParams() {
    return Object.keys(accommodationData).map((slug) => ({ slug }))
}

export default async function AccommodationDetailPage({ params }: Props) {
    const { slug } = await params
    const data = accommodationData[slug]

    if (!data) notFound()

    // JSON-LD Structured Data for rich snippets
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "name": data.title,
        "description": data.description,
        "image": `https://serenityafricasafaris.com${data.image}`,
        "url": `https://serenityafricasafaris.com/accommodation/${slug}`,
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "TZ",
            "addressRegion": "Arusha"
        },
        "amenityFeature": data.amenities.map((a: string) => ({
            "@type": "LocationFeatureSpecification",
            "name": a,
            "value": true
        })),
        "priceRange": "$$$$$",
        "starRating": { "@type": "Rating", "ratingValue": "5" }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AccommodationDetailContent data={data} />
        </>
    )
}
