import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Safari Blog | Tanzania Wildlife & Travel Guides",
    description: "Expert Tanzania safari guides, wildlife stories, destination tips and travel inspiration from the Serenity Africa Safaris team — your resource for planning the perfect African adventure.",
    alternates: { canonical: "https://serenityafricasafaris.com/blog/" },
    openGraph: {
        title: "Serenity Africa Safaris Blog | Tanzania Safari Guides",
        description: "Wildlife stories, destination guides and safari planning tips from Tanzania's premier luxury safari operator.",
        url: "https://serenityafricasafaris.com/blog/",
        images: [{ url: "/images/hero/slide-1.webp", width: 1200, height: 630, alt: "Tanzania Safari Blog" }],
    },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
