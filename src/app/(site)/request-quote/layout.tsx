import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Request a Free Safari Quote | Custom Tanzania Itinerary",
    description: "Request a free, no-obligation quote for your Tanzania safari. Our specialists will design a personalised itinerary for Serengeti, Ngorongoro, Kilimanjaro or Zanzibar — tailored to your dates and budget.",
    alternates: { canonical: "https://serenityafricasafaris.com/request-quote/" },
    openGraph: {
        title: "Request a Free Safari Quote | Serenity Africa Safaris",
        description: "Get a personalised Tanzania safari quote in 24 hours. Serengeti, Ngorongoro, Kilimanjaro, Zanzibar — all budgets, all durations.",
        url: "https://serenityafricasafaris.com/request-quote/",
        images: [{ url: "/images/hero/slide-1.webp", width: 1200, height: 630, alt: "Request Safari Quote" }],
    },
}

export default function RequestQuoteLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
