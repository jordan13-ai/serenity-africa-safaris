import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SafariItineraries } from "@/components/sections/SafariItineraries"

export const metadata: Metadata = {
  title: "Tanzania Safari Itineraries | All Safari Packages",
  description: "Browse all Tanzania safari itineraries from Serenity Africa Safaris — Serengeti, Ngorongoro, Tarangire, Ruaha, Zanzibar, Kilimanjaro and more. Luxury to mid-range, 5 to 21 days.",
  alternates: { canonical: "https://serenityafricasafaris.com/safari/" },
  openGraph: {
    title: "Tanzania Safari Itineraries | Serenity Africa Safaris",
    description: "Explore 54 expertly crafted safari packages across Tanzania. Luxury safaris, family trips, honeymoons, mountain climbs and beach holidays.",
    url: "https://serenityafricasafaris.com/safari/",
    images: [{ url: "/images/destinations/serengeti/serengeti-18.webp", width: 1200, height: 630, alt: "Tanzania Safari Itineraries" }],
  },
}

export default function SafariPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/destinations/serengeti/serengeti-18.webp"
          alt="Tanzania Safari Itineraries"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
        <div className="relative z-10 container px-6 mx-auto mt-20">
          <div className="max-w-3xl">
            <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
              Our Signature Selection
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              Unforgettable <br />
              <span className="italic text-white/80">Safari Itineraries</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
              Discover Tanzania through immersive wildlife encounters, cultural connections, and luxury adventures crafted for every traveler.
            </p>
          </div>
        </div>
      </section>

      {/* Itineraries List */}
      <SafariItineraries />

      {/* CTA */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="container px-6 mx-auto text-center max-w-4xl">
          <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
            Tailor-Made For You
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Create Your Own <br />
            <span className="italic text-white/60">Safari Story</span>
          </h2>
          <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Every traveler dreams differently. We design personalized experiences around your interests, travel style, and sense of adventure.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-[#C5A059] text-white rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-[#b8924a] transition-colors duration-300"
          >
            Plan Your Custom Safari
          </Link>
        </div>
      </section>
    </div>
  )
}
