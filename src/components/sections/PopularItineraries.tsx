"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tag, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
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

export function PopularItineraries() {
  const [tours, setTours] = useState<Tour[]>([])
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 4 },
    },
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  // Reinit when category changes so Embla recalculates slides
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit()
      emblaApi.scrollTo(0, true)
      setSelectedIndex(0)
    }
  }, [activeCategory, emblaApi])

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
        // Merge: DB tours first, then seed tours not already in DB
        const dbSlugs = new Set(dbTours.map((t) => t.slug))
        const extras = normalizeStatic().filter((t) => !dbSlugs.has(t.slug))
        setTours([...dbTours, ...extras])
      })
      .catch(() => setTours(normalizeStatic()))
  }, [])

  const filtered = activeCategory === "All" ? tours : tours.filter((t) => t.category === activeCategory)

  return (
    <section className="py-32 bg-[#F5F2ED] relative overflow-hidden border-b border-primary/5">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <Image
          src="/images/destinations/serengeti/serengeti-16.webp"
          alt=""
          fill
          className="object-cover grayscale"
        />
      </div>

      <div className="relative z-10 container px-6 mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">
              Our Signature Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
              Popular{" "}
              <span className="italic font-light text-gray-500">Itineraries</span>
            </h2>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-3">
            <Link
              href="/safari"
              className="hidden md:inline-flex items-center text-[10px] font-bold tracking-[0.3em] uppercase text-[#1A1A1A] hover:text-primary transition-colors bg-white/60 px-6 py-3 rounded-full border border-[#1A1A1A]/10 hover:border-primary/30 mr-2"
            >
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={cn(
                "w-12 h-12 rounded-full border flex items-center justify-center transition-all",
                canScrollPrev
                  ? "border-[#1A1A1A]/20 hover:bg-white hover:border-primary/30 text-[#1A1A1A] hover:text-primary"
                  : "border-[#1A1A1A]/10 text-[#1A1A1A]/20 cursor-not-allowed"
              )}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={cn(
                "w-12 h-12 rounded-full border flex items-center justify-center transition-all",
                canScrollNext
                  ? "border-[#1A1A1A]/20 hover:bg-white hover:border-primary/30 text-[#1A1A1A] hover:text-primary"
                  : "border-[#1A1A1A]/10 text-[#1A1A1A]/20 cursor-not-allowed"
              )}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

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

        {/* Carousel */}
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-gray-400 text-sm font-light">
            No itineraries in this category yet.
          </p>
        ) : (
          <>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-5">
                {filtered.map((tour) => (
                  <div
                    key={tour.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] pl-5"
                  >
                    <Link
                      href={`/itineraries/${tour.slug}`}
                      className="group relative rounded-2xl overflow-hidden aspect-[3/4] block shadow-sm hover:shadow-xl transition-shadow duration-500"
                    >
                      {/* Image */}
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                      {/* Duration badge */}
                      {tour.duration && (
                        <div className="absolute top-4 right-4 bg-[#3A3525]/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded">
                          {tour.duration}
                        </div>
                      )}

                      {/* Bottom content */}
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
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            {scrollSnaps.length > 1 && (
              <div className="flex justify-center gap-2 mt-10">
                {scrollSnaps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-400",
                      i === selectedIndex ? "w-8 bg-primary" : "w-4 bg-primary/20"
                    )}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
