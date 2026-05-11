import type { Metadata } from "next"
import AccommodationPageContent from "./AccommodationPageContent"

export const metadata: Metadata = {
    title: "Luxury Safari Accommodations Tanzania | Lodges, Camps & Villas",
    description: "Discover Serenity Africa Safaris' handpicked luxury accommodations in Tanzania. From the signature Serenity Camp & Lodges in the Serengeti to exclusive tented camps, safari lodges, treehouse suites and Zanzibar beachfront villas. Book your dream safari stay today.",
    keywords: [
        "Tanzania safari accommodation",
        "luxury safari lodges Tanzania",
        "Serengeti tented camp",
        "Serenity Camp and Lodges",
        "safari lodges Ngorongoro",
        "Tanzania beachfront villa Zanzibar",
        "treehouse suite safari",
        "exclusive tented camp Africa",
        "best accommodation Tanzania safari",
        "luxury bush camp Tanzania",
        "5 star safari lodge Tanzania",
        "where to stay Tanzania safari"
    ],
    alternates: { canonical: "https://serenityafricasafaris.com/accommodation" },
    openGraph: {
        title: "Luxury Safari Accommodations | Serenity Africa Safaris",
        description: "Handpicked sanctuaries from the Serengeti to Zanzibar. Exclusive tented camps, luxury lodges, treehouse suites & beachfront villas for your Tanzania safari.",
        url: "https://serenityafricasafaris.com/accommodation",
        images: [{ url: "/images/accommodation/serenity-lodge/Serenity_africa_lodge1.webp", width: 1200, height: 630, alt: "Serenity Camp and Lodges – Tanzania Serengeti" }]
    }
}

export default function AccommodationPage() {
    return <AccommodationPageContent />
}
