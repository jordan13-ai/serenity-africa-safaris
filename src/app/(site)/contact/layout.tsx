import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | Plan Your Tanzania Safari",
    description: "Get in touch with Serenity Africa Safaris — Tanzania's premier luxury safari operator. Contact our specialists to plan your perfect Serengeti, Kilimanjaro or Zanzibar itinerary.",
    alternates: { canonical: "https://serenityafricasafaris.com/contact/" },
    openGraph: {
        title: "Contact Serenity Africa Safaris | Start Planning",
        description: "Reach our Tanzania safari specialists by phone, WhatsApp or email. We respond within 24 hours with a personalised itinerary proposal.",
        url: "https://serenityafricasafaris.com/contact/",
        images: [{ url: "/images/hero/slide-1.webp", width: 1200, height: 630, alt: "Contact Serenity Africa Safaris" }],
    },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
