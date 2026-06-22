"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tag, CheckCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { seedTours } from "@/lib/seed-tours-data"

const CATEGORIES = [
  "All",
  "Safaris",
  "Mountain Climbs",
  "Beach Holidays",
  "Family-Friendly Trips",
  "Solo Travel",
  "Adventurous Expeditions",
  "Honeymoons",
  "Cultural Tours",
  "The Great Migration",
]

const PAGE_SIZE = 12

interface Tour {
  id: string
  title: string
  slug: string
  image: string
  duration: string
  location: string
  category: string
  price?: number
  includes?: string[]
  highlights?: string[]
}

function normalizeStatic(): Tour[] {
  return seedTours.map((t) => ({
    id: t.slug,
    title: t.title,
    slug: t.slug,
    image: t.coverImage,
    duration: `${t.duration} Days`,
    location: t.destination,
    category: t.category,
    price: t.price,
    includes: t.includes.slice(0, 1),
    highlights: t.highlights,
  }))
}

export function SafariItineraries() {
  const [tours, setTours] = useState<Tour[]>([])
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/tours?limit=100")
      .then((r) => r.json())
      .then((data) => {
        const items: Record<string, unknown>[] = Array.isArray(data) ? data : (data.data ?? [])
        const dbTours: Tour[] = items.map((t) => ({
          id: t.id as string,
          title: t.title as string,
          slug: t.slug as string,
          image: (t.coverImage as string) || "/images/destinations/serengeti/serengeti-18.webp",
          duration: t.duration ? `${t.duration} Days` : "",
          location: (t.destination as string) || "",
          category: (t.category as string) || "Safaris",
          price: t.price as number | undefined,
          includes: (t.includes as string[]) || [],
          highlights: (t.highlights as string[]) || [],
        }))
        // Merge: DB tours first, then any static tours not already in DB
        const dbSlugs = new Set(dbTours.map((t) => t.slug))
        const extras = normalizeStatic().filter((t) => !dbSlugs.has(t.slug))
        setTours([...dbTours, ...extras])
        setLoading(false)
      })
      .catch(() => {
        setTours(normalizeStatic())
        setLoading(false)
      })
  }, [])

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [activeCategory])

  const filtered = activeCategory === "All" ? tours : tours.filter((t) => t.category === activeCategory)
  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7]">
      <div className="container px-6 mx-auto">

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 text-[10px] font-bold uppercase tracking-widest border rounded transition-all duration-200",
                activeCategory === cat
                  ? "bg-[#3A3525] text-white border-[#3A3525]"
                  : "bg-transparent text-[#3A3525] border-[#3A3525]/30 hover:border-[#3A3525]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="w-6 h-6 animate-spin text-[#737373]" />
          </div>
        ) : filtered.length === 0 ? (
          <p className="py-16 text-center text-gray-400 text-sm font-light">
            No itineraries in this category yet.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((tour) => (
                <Link
                  key={tour.id}
                  href={`/itineraries/${tour.slug}`}
                  className="group relative rounded-2xl overflow-hidden aspect-[3/4] block shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                  {tour.duration && (
                    <div className="absolute top-4 right-4 bg-[#3A3525]/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded">
                      {tour.duration}
                    </div>
                  )}

                  {tour.category && tour.category !== "Safaris" && (
                    <div className="absolute top-4 left-4 bg-[#C5A059]/90 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                      {tour.category}
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-black uppercase text-sm tracking-wide mb-3 leading-tight group-hover:text-[#D4A96A] transition-colors duration-300">
                      {tour.title}
                    </h3>

                    {tour.price != null && (
                      <div className="flex items-center gap-2 text-[#D4A96A] text-xs font-bold mb-2">
                        <Tag className="w-3.5 h-3.5 flex-shrink-0" />
                        From ${tour.price.toLocaleString()}
                      </div>
                    )}

                    {(tour.includes?.[0] || tour.highlights?.[0]) && (
                      <div className="flex items-center gap-2 text-white/65 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 text-white/40" />
                        <span className="line-clamp-1">
                          {tour.includes?.[0] || tour.highlights?.[0]}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                  className="flex items-center gap-3 px-10 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
                >
                  Load More Itineraries
                  <span className="text-[9px] opacity-60">({filtered.length - visibleCount} remaining)</span>
                </button>
              </div>
            )}

            {/* Results count */}
            <p className="text-center text-[11px] text-gray-400 mt-6 font-light tracking-wide">
              Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} itineraries
            </p>
          </>
        )}
      </div>
    </section>
  )
}
