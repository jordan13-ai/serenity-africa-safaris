import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { AccommodationDetailContent } from "./AccommodationDetailContent"

// Static data for original 5 hand-crafted entries
const staticAccommodationData: Record<string, AccData> = {
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
      "/images/accommodation/serenity-lodge/Serenity_africa_lodge4.webp",
    ],
    seoKeywords: "Serenity Camp Lodges Serengeti, luxury tented camp Serengeti, Great Migration accommodation, Nyabogati Kopjes lodge, Maasai style safari camp, Tanzania luxury camp",
  },
  "exclusive-tented-camps": {
    title: "Exclusive Tented Camps", subtitle: "Authentic Bush Luxury",
    description: "Experience the romance of classic safaris without compromising on modern luxury.",
    longDescription: "Our tented camps are strategically located in the heart of the wilderness, offering an unparalleled connection to nature.",
    image: "/images/accommodation/serenity-lodge/Serenity_africa_lodge2.webp",
    features: ["Canvas Walls", "Close to Nature", "En-suite Luxury", "Campfires", "Private Verandas", "Eco-Friendly"],
    amenities: ["Solar Power", "Organic Toiletries", "Outdoor Showers", "Private Butler Service"],
    gallery: ["/images/accommodation/serenity-lodge/Serenity_africa_lodge2.webp"],
    seoKeywords: "exclusive tented camp Tanzania, luxury safari tent Serengeti, canvas tented camp Africa",
  },
  "luxury-safari-lodges": {
    title: "Luxury Safari Lodges", subtitle: "Architectural Elegance",
    description: "Built seamlessly into the natural landscape, our premium lodges offer unparalleled panoramic views.",
    longDescription: "Our luxury lodges redefine the safari experience with stunning architecture that harmonizes with the environment.",
    image: "/images/accommodation/serenity-lodge/Serenity_africa_lodge3.webp",
    features: ["Infinity Pools", "Spa Services", "Panoramic Views", "Fine Dining", "Wine Cellars", "Fitness Centers"],
    amenities: ["Air Conditioning", "Wi-Fi", "Mini-Bar", "Laundry Service"],
    gallery: ["/images/accommodation/serenity-lodge/Serenity_africa_lodge3.webp"],
    seoKeywords: "luxury safari lodge Tanzania, 5 star safari lodge Serengeti",
  },
  "treehouse-suites": {
    title: "Treehouse Suites", subtitle: "Elevated Serenity",
    description: "Elevated luxury nestled within ancient giant baobab and mahogany trees.",
    longDescription: "Suspended between the earth and the sky, our treehouse suites offer a perspective like no other.",
    image: "/images/accommodation/serenity_africa_safaris_accommodation-3.webp",
    features: ["Private Decks", "Elevated Views", "Star Beds", "Absolute Privacy", "Baobab Settings", "Romantic Vibe"],
    amenities: ["Star-gazing Kits", "Binoculars", "Gourmet Picnic Baskets", "Private Viewing Decks"],
    gallery: ["/images/accommodation/serenity_africa_safaris_accommodation-3.webp"],
    seoKeywords: "treehouse suite Tanzania, tree lodge safari Africa, elevated safari suite",
  },
  "beachfront-villas": {
    title: "Beachfront Villas", subtitle: "Island Paradise",
    description: "The perfect conclusion to an exhilarating safari. Retreat to the pristine white sands of Zanzibar.",
    longDescription: "Our beachfront villas on the spice island of Zanzibar offer a tranquil haven after the excitement of a safari.",
    image: "/images/accommodation/serenity_africa_safaris_accommodation-4.webp",
    features: ["Ocean Views", "Plunge Pools", "White Sand", "Tropical Gardens", "Direct Beach Access", "Swahili Style"],
    amenities: ["Private Pools", "Beach Butler", "Snorkeling Gear", "Sea-facing Terraces"],
    gallery: ["/images/accommodation/serenity_africa_safaris_accommodation-4.webp"],
    seoKeywords: "Zanzibar beachfront villa, luxury villa Zanzibar, safari and beach Tanzania",
  },
}

interface AccData {
  title: string
  subtitle?: string
  description: string
  longDescription?: string
  image: string
  features: string[]
  amenities: string[]
  gallery: string[]
  externalLink?: string
  seoKeywords: string
  destination?: string
  priceFrom?: number | null
  type?: string | null
}

async function getAccommodation(slug: string): Promise<AccData | null> {
  // 1. Try static (hand-crafted entries)
  if (staticAccommodationData[slug]) return staticAccommodationData[slug]

  // 2. Try DB — Lodge first, then Camp
  try {
    const lodge = await prisma.lodge.findFirst({
      where: { slug, status: "PUBLISHED" },
    })
    if (lodge) {
      return {
        title: lodge.name,
        subtitle: lodge.destination ?? undefined,
        description: lodge.description?.slice(0, 200) ?? "",
        longDescription: lodge.description ?? "",
        image: lodge.coverImage || "/images/accommodation/serenity-lodge/Serenity_africa_lodge1.webp",
        features: lodge.highlights ?? [],
        amenities: lodge.amenities ?? [],
        gallery: (lodge.gallery as string[]) ?? [],
        externalLink: lodge.website || undefined,
        seoKeywords: [lodge.destination, lodge.type, "Tanzania safari lodge", lodge.name].filter(Boolean).join(", "),
        destination: lodge.destination ?? undefined,
        priceFrom: lodge.priceFrom ? Number(lodge.priceFrom) : null,
        type: lodge.type,
      }
    }

    const camp = await prisma.camp.findFirst({
      where: { slug, status: "PUBLISHED" },
    })
    if (camp) {
      return {
        title: camp.name,
        subtitle: camp.destination ?? undefined,
        description: camp.description?.slice(0, 200) ?? "",
        longDescription: camp.description ?? "",
        image: camp.coverImage || "/images/accommodation/serenity-lodge/Serenity_africa_lodge1.webp",
        features: camp.highlights ?? [],
        amenities: camp.amenities ?? [],
        gallery: (camp.gallery as string[]) ?? [],
        externalLink: camp.website || undefined,
        seoKeywords: [camp.destination, camp.type, "Tanzania safari camp", camp.name].filter(Boolean).join(", "),
        destination: camp.destination ?? undefined,
        priceFrom: camp.priceFrom ? Number(camp.priceFrom) : null,
        type: camp.type,
      }
    }
  } catch {
    // DB unavailable — fall through to null
  }

  return null
}

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  try {
    const [lodges, camps] = await Promise.all([
      prisma.lodge.findMany({ where: { status: "PUBLISHED" }, select: { slug: true } }),
      prisma.camp.findMany({ where: { status: "PUBLISHED" }, select: { slug: true } }),
    ])
    const staticSlugs = Object.keys(staticAccommodationData).map((slug) => ({ slug }))
    const dbSlugs = [...lodges, ...camps].map((r) => ({ slug: r.slug }))
    // Merge, deduplicate
    const seen = new Set<string>()
    return [...staticSlugs, ...dbSlugs].filter(({ slug }) => {
      if (seen.has(slug)) return false
      seen.add(slug)
      return true
    })
  } catch {
    return Object.keys(staticAccommodationData).map((slug) => ({ slug }))
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = await getAccommodation(slug)
  if (!data) return { title: "Accommodation Not Found" }

  const baseUrl = "https://serenityafricasafaris.com"
  const title = `${data.title} | Luxury Safari Accommodation Tanzania`
  const description = `${data.description} Book with Serenity Africa Safaris – Tanzania's premier luxury safari operator.`

  return {
    title,
    description,
    keywords: [data.seoKeywords, "Tanzania safari lodge", "luxury safari accommodation Africa"].join(", "),
    alternates: { canonical: `${baseUrl}/accommodation/${slug}/` },
    openGraph: {
      title, description,
      url: `${baseUrl}/accommodation/${slug}/`,
      siteName: "Serenity Africa Safaris",
      images: [{ url: data.image.startsWith("http") ? data.image : `${baseUrl}${data.image}`, width: 1200, height: 630, alt: data.title }],
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description, images: [data.image] },
  }
}

export default async function AccommodationDetailPage({ params }: Props) {
  const { slug } = await params
  const data = await getAccommodation(slug)
  if (!data) notFound()

  const baseUrl = "https://serenityafricasafaris.com"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: data.title,
    description: data.description,
    image: data.image.startsWith("http") ? data.image : `${baseUrl}${data.image}`,
    url: `${baseUrl}/accommodation/${slug}/`,
    address: { "@type": "PostalAddress", addressCountry: "TZ" },
    amenityFeature: data.amenities.map((a) => ({ "@type": "LocationFeatureSpecification", name: a, value: true })),
    priceRange: "$$$",
    ...(data.priceFrom ? { priceSpecification: { "@type": "PriceSpecification", price: data.priceFrom, priceCurrency: "USD" } } : {}),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AccommodationDetailContent data={data} />
    </>
  )
}
