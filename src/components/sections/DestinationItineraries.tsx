"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { tours } from "@/lib/tours-data"

interface DestinationItinerariesProps {
    location: string; // e.g., "Serengeti", "Ruaha", "Zanzibar"
    title?: string;
    subtitle?: string;
}

export function DestinationItineraries({ location, title, subtitle }: DestinationItinerariesProps) {
    // Filter tours that include the location string in their 'location' field or title
    const filteredTours = tours.filter(tour =>
        tour.location?.toLowerCase().includes(location.toLowerCase()) ||
        tour.title.toLowerCase().includes(location.toLowerCase())
    );

    if (filteredTours.length === 0) return null;

    return (
        <section className="py-24 bg-muted/20">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        {title || `Featured ${location} Itineraries`}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {subtitle || `Hand-picked safari packages that showcase the best of ${location}.`}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTours.slice(0, 3).map((tour, index) => (
                        <div key={index} className="group relative h-[500px] w-full overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100 flex flex-col">
                            {/* Image Section */}
                            <div className="relative h-[60%] w-full overflow-hidden">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                                {/* Floating Badges */}
                                <div className="absolute top-4 right-4 z-10">
                                    <Badge className="bg-white/90 text-black hover:bg-white backdrop-blur-md border-0 shadow-sm px-3 py-1 text-sm font-medium">
                                        {tour.duration}
                                    </Badge>
                                </div>

                                {/* Title over Image (Bottom of image area) */}
                                <div className="absolute bottom-4 left-4 right-4 z-10 transition-transform duration-300 group-hover:-translate-y-2">
                                    <h3 className="text-2xl font-serif font-bold text-white drop-shadow-md leading-tight mb-1">
                                        {tour.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-white/90 text-sm">
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-white/60">Bespoke Experience</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col justify-between flex-grow p-6 bg-white relative z-20">
                                <div className="space-y-3">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {tour.highlights.slice(0, 2).map((h, i) => (
                                            <span key={i} className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-md text-gray-600">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                                        {tour.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <Button
                                        variant="ghost"
                                        className="p-0 hover:bg-transparent hover:text-primary font-semibold text-foreground transition-colors"
                                        asChild
                                    >
                                        <Link href={`/itineraries/${tour.slug}`} className="flex items-center gap-2">
                                            View Details <ArrowRight size={16} />
                                        </Link>
                                    </Button>
                                    <div className="flex -space-x-2">
                                        {/* Placeholder for user avatars or rating */}
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300" />
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-[10px] text-white flex items-center justify-center font-bold">
                                            5.0
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" className="gap-2" asChild>
                        <Link href="/all-safaris">View All Safaris <ArrowRight size={16} /></Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
