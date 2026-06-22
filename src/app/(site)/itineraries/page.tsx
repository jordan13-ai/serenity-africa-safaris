import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: "All Safari Itineraries | Tanzania Safari Packages",
    description: "Browse all 54 Tanzania safari itineraries from Serenity Africa Safaris — Serengeti, Ngorongoro, Kilimanjaro, Zanzibar and beyond. Luxury to mid-range, 5 to 21 days.",
    alternates: { canonical: "https://serenityafricasafaris.com/itineraries/" },
}

export default function ItinerariesIndexPage() {
    redirect("/safari/")
}
