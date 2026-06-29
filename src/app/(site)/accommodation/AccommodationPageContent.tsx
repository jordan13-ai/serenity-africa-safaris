"use client"
import { useEffect, useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, DollarSign, Loader2, Building2, Tent, SlidersHorizontal } from "lucide-react"

interface Accommodation {
  id: string
  name: string
  slug: string
  type: string | null
  destination: string | null
  description: string | null
  highlights: string[]
  priceFrom: number | null
  coverImage: string | null
  website: string | null
  kind: "lodge" | "camp"
}

const STATIC_DATA: Accommodation[] = [
  {
    id: "s1", name: "Serenity Camp & Lodges", slug: "serenity-camp-lodges",
    type: "Signature Lodge", destination: "Serengeti",
    description: "Our flagship sanctuary nestled amid the Nyabogati Kopjes in Seronera — the very heart of Serengeti National Park.",
    highlights: ["Signature Property", "Central Serengeti", "Great Migration"],
    priceFrom: 850, coverImage: "/images/accommodation/serenity-lodge/Serenity_africa_lodge1.webp",
    website: null, kind: "lodge",
  },
]

const CATEGORY_ORDER = [
  "All",
  "Signature Lodge", "Luxury Lodge", "Boutique Lodge", "Standard Lodge",
  "Luxury Tented Camp", "Permanent Tented Camp", "Mobile Camp", "Exclusive Camp", "Fly Camp", "Luxury Camp",
]

const TYPE_COLOR: Record<string, string> = {
  "Signature Lodge": "bg-[#C5A059] text-white",
  "Luxury Lodge": "bg-[#1A1A1A] text-white",
  "Boutique Lodge": "bg-emerald-700 text-white",
  "Standard Lodge": "bg-stone-600 text-white",
  "Luxury Tented Camp": "bg-amber-700 text-white",
  "Permanent Tented Camp": "bg-teal-700 text-white",
  "Mobile Camp": "bg-indigo-700 text-white",
  "Exclusive Camp": "bg-rose-700 text-white",
  "Fly Camp": "bg-sky-700 text-white",
  "Luxury Camp": "bg-purple-700 text-white",
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

function AccommodationCard({ acc }: { acc: Accommodation }) {
  const isSignature = acc.slug === "serenity-camp-lodges"
  const image = acc.coverImage || "/images/accommodation/serenity-lodge/Serenity_africa_lodge1.webp"
  const typeBadge = acc.type ? (TYPE_COLOR[acc.type] ?? "bg-gray-700 text-white") : ""

  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-white border border-[#E2E0DB] overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <Link href={`/accommodation/${acc.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={image} alt={acc.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {isSignature && (
            <div className="absolute top-3 left-3 bg-[#C5A059] text-white text-[8px] font-bold uppercase tracking-[0.2em] px-2.5 py-1">
              Signature
            </div>
          )}
          {acc.type && !isSignature && (
            <div className={`absolute top-3 left-3 text-[8px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 ${typeBadge}`}>
              {acc.type}
            </div>
          )}
          {acc.priceFrom && (
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1.5 flex items-center gap-1">
              <DollarSign className="w-2.5 h-2.5" />
              From ${acc.priceFrom.toLocaleString()}
            </div>
          )}
        </div>
      </Link>
      <div className="p-5">
        {isSignature && (
          <div className="mb-3">
            <Image
              src="/images/accommodation/serenity-lodge/serenity-camp-logo.webp"
              alt="Serenity Camp & Lodges – Official Partner"
              width={88}
              height={36}
              className="opacity-90"
            />
          </div>
        )}
        <Link href={`/accommodation/${acc.slug}`}>
          <h3 className="font-serif text-[#1A1A1A] text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
            {acc.name}
          </h3>
        </Link>
        {acc.destination && (
          <div className="flex items-center gap-1 text-xs text-[#737373] mb-3">
            <MapPin className="w-3 h-3 text-primary shrink-0" />
            {acc.destination}
          </div>
        )}
        {acc.description && (
          <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-4">{acc.description}</p>
        )}
        <Link
          href={`/accommodation/${acc.slug}`}
          className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A] border-b border-[#1A1A1A] pb-0.5 hover:text-primary hover:border-primary transition-all group/link"
        >
          Explore
          <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function AccommodationPageContent() {
  const [all, setAll] = useState<Accommodation[]>(STATIC_DATA)
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeKind, setActiveKind] = useState<"all" | "lodge" | "camp">("all")

  useEffect(() => {
    fetch("/api/accommodation")
      .then((r) => r.json())
      .then((data) => {
        const lodges: Accommodation[] = (data.lodges ?? []).map((l: Accommodation) => ({ ...l, kind: "lodge" as const }))
        const camps: Accommodation[] = (data.camps ?? []).map((c: Accommodation) => ({ ...c, kind: "camp" as const }))
        const combined = [...lodges, ...camps]
        if (combined.length > 0) setAll(combined)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const categories = useMemo(() => {
    const found = new Set(all.map((a) => a.type).filter(Boolean) as string[])
    return CATEGORY_ORDER.filter((c) => c === "All" || found.has(c))
  }, [all])

  const filtered = useMemo(() => {
    return all.filter((a) => {
      const kindMatch = activeKind === "all" || a.kind === activeKind
      const catMatch = activeCategory === "All" || a.type === activeCategory
      return kindMatch && catMatch
    })
  }, [all, activeCategory, activeKind])

  const lodgeCount = all.filter((a) => a.kind === "lodge").length
  const campCount = all.filter((a) => a.kind === "camp").length

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        <Image
          src="/images/accommodation/serenity-lodge/Serenity_africa_lodge1.webp"
          alt="Luxury Safari Accommodation"
          fill className="object-cover" priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 via-[#1A1A1A]/40 to-[#1A1A1A]/80" />
        <motion.div
          initial="hidden" animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
          className="relative z-10 container max-w-5xl mx-auto px-6 text-center pt-20"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase flex items-center gap-4">
              <div className="w-8 h-[1px] bg-primary" />
              Where You&apos;ll Stay
              <div className="w-8 h-[1px] bg-primary" />
            </span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6">
            Sanctuaries of <br />
            <span className="italic text-white/70 font-light text-4xl md:text-6xl">the Wild</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-white/80 font-light leading-relaxed text-lg max-w-2xl mx-auto">
            {loading ? "Loading properties…" : `${all.length} handpicked properties across Tanzania — from signature lodges to mobile safari camps.`}
          </motion.p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-30 bg-white border-b border-[#E2E0DB] shadow-sm">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Kind tabs */}
          <div className="flex items-center gap-0 border-b border-[#F0EDE8]">
            {[
              { value: "all", label: "All Properties", icon: SlidersHorizontal, count: all.length },
              { value: "lodge", label: "Lodges", icon: Building2, count: lodgeCount },
              { value: "camp", label: "Camps", icon: Tent, count: campCount },
            ].map(({ value, label, icon: Icon, count }) => (
              <button
                key={value}
                onClick={() => { setActiveKind(value as typeof activeKind); setActiveCategory("All") }}
                className={`flex items-center gap-2 px-5 py-4 text-xs font-bold tracking-widest uppercase transition-all border-b-2 -mb-px ${activeKind === value ? "border-primary text-primary" : "border-transparent text-[#737373] hover:text-[#1A1A1A]"}`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${activeKind === value ? "bg-primary/10 text-primary" : "bg-[#F5F2ED] text-[#737373]"}`}>{count}</span>
              </button>
            ))}
          </div>

          {/* Category filter pills */}
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-full transition-all ${activeCategory === cat ? "bg-[#1A1A1A] text-white" : "bg-[#F5F2ED] text-[#737373] hover:bg-[#EBE8E3]"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex justify-center py-24">
              <Loader2 className="w-6 h-6 animate-spin text-[#C5A059]" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24 text-[#737373]">
              <p className="text-sm">No properties found for this filter.</p>
            </div>
          ) : (
            <>
              <p className="text-xs text-[#737373] uppercase tracking-widest mb-8">
                Showing {filtered.length} {filtered.length === 1 ? "property" : "properties"}
                {activeCategory !== "All" ? ` · ${activeCategory}` : ""}
              </p>
              <motion.div
                key={`${activeKind}-${activeCategory}`}
                initial="hidden"
                animate="visible"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filtered.map((acc) => (
                  <AccommodationCard key={acc.id} acc={acc} />
                ))}
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Your Dream Awaits</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Begin Crafting <span className="italic font-light opacity-80">Your Journey</span>
          </h2>
          <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
            Speak directly with our safari experts to weave these exceptional properties into a bespoke itinerary designed exclusively for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/request-quote"
              className="group inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 w-full sm:w-auto">
              Request Complimentary Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/255626371646" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-white transition-all duration-300 w-full sm:w-auto">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
