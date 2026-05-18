"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Compass } from "lucide-react"

interface Destination {
    title: string
    slug: string
    description: string
    image: string
    region: string
    highlights: string[]
}

const REGION_CATEGORIES = [
    "All",
    "Northern Circuit",
    "Southern & Western Circuit",
    "Coastal & Islands",
]

interface Props {
    destinations: Destination[]
}

export function DestinationsClient({ destinations }: Props) {
    const [activeRegion, setActiveRegion] = useState("All")

    const filtered = activeRegion === "All"
        ? destinations
        : destinations.filter((d) => d.region === activeRegion)

    const grouped = filtered.reduce((acc: Record<string, Destination[]>, dest) => {
        if (!acc[dest.region]) acc[dest.region] = []
        acc[dest.region].push(dest)
        return acc
    }, {})

    return (
        <section className="pb-32 bg-[#FDFBF7]">
            <div className="container px-6 mx-auto">

                {/* Region Filter Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-4 mb-16 scrollbar-hide">
                    {REGION_CATEGORIES.map((region) => (
                        <button
                            key={region}
                            onClick={() => setActiveRegion(region)}
                            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest border transition-all duration-200 flex-shrink-0 ${
                                activeRegion === region
                                    ? "bg-[#C5A059] text-white border-[#C5A059] shadow-md"
                                    : "bg-white text-[#737373] border-[#E2E0DB] hover:border-[#C5A059] hover:text-[#C5A059]"
                            }`}
                        >
                            {region}
                        </button>
                    ))}
                </div>

                {/* Destinations by Region */}
                {Object.entries(grouped).map(([region, regionDestinations]) => (
                    <div key={region} className="mb-32 last:mb-0">
                        {/* Region Header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 mb-12">
                            <div>
                                <div className="flex items-center gap-2 text-primary mb-3">
                                    <Compass className="w-5 h-5" />
                                    <span className="text-[11px] font-bold tracking-widest uppercase">{region}</span>
                                </div>
                                <h3 className="text-4xl font-serif text-[#1A1A1A]">
                                    {region.split(" ")[0]}{" "}
                                    <span className="italic text-gray-500">{region.split(" ").slice(1).join(" ")}</span>
                                </h3>
                            </div>
                        </div>

                        {/* Destination Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regionDestinations.map((dest) => (
                                <Link
                                    key={dest.slug}
                                    href={dest.slug === "kilimanjaro" ? "/kilimanjaro" : `/destinations/${dest.slug}`}
                                    className="group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 aspect-[4/5] flex flex-col"
                                >
                                    <Image
                                        src={dest.image}
                                        alt={dest.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 transition-opacity duration-500" />

                                    <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h4 className="text-3xl font-serif text-white mb-3 leading-tight">{dest.title}</h4>

                                        <p className="text-white/70 text-sm font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                                            {dest.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {dest.highlights.map((highlight, idx) => (
                                                <span key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 text-primary font-bold text-[10px] tracking-widest uppercase mt-auto pt-4 border-t border-white/10">
                                            Discover Destination <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}

                {filtered.length === 0 && (
                    <div className="text-center py-24 text-gray-400 text-sm font-light">
                        No destinations found in this region.
                    </div>
                )}
            </div>
        </section>
    )
}
