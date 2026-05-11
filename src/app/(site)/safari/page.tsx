import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { Metadata } from "next";
import { tours } from "@/lib/tours-data";

export const metadata: Metadata = {
    title: "Tanzania Safari Itineraries & Experiences | Serenity Africa Safaris",
    description: "Discover Tanzania through immersive wildlife encounters, cultural connections, and luxury adventures crafted for every traveler.",
};

const experiences = [
    {
        title: "The Great Migration",
        subtitle: "Witness the greatest wildlife spectacle on earth across the Serengeti plains.",
        image: "/images/destinations/migration/migration-5.webp",
        link: "/safari/great-migration"
    },
    {
        title: "Balloon Safaris",
        subtitle: "Float silently above the savannah at dawn with a champagne breakfast.",
        image: "/images/experience/balloon safari/balloon-3.webp",
        link: "/safari/balloon-safaris"
    },
    {
        title: "Cultural Encounters",
        subtitle: "Engage respectfully with local communities and discover traditions.",
        image: "/images/experience/culture/culture-4.webp",
        link: "/safari/cultural-encounters"
    },
    {
        title: "Honeymoon Escapes",
        subtitle: "Private dinners under the stars in secluded luxury lodges.",
        image: "/images/destinations/zanzibar/zanzibar-8.webp",
        link: "/safari/honeymoon-escapes"
    },
    {
        title: "Luxury Safari",
        subtitle: "The perfect balance of adventure, exclusivity, and comfort.",
        image: "/images/intro/safari-card.webp",
        link: "/safari/luxury-safari"
    },
    {
        title: "Photography Safaris",
        subtitle: "Capture breathtaking wildlife moments with expert guides.",
        image: "/images/destinations/serengeti/serengeti-15.webp",
        link: "/safari/photography-safaris"
    },
    {
        title: "Walking Safaris",
        subtitle: "Experience the African wilderness on foot through guided adventures.",
        image: "/images/experience/culture/culture-7.webp",
        link: "/safari/walking-safaris"
    },
    {
        title: "Family Safaris",
        subtitle: "Create unforgettable family memories through safe adventures.",
        image: "/images/intro/day-trips-card.webp",
        link: "/safari/family-safaris"
    }
];

export default function SafariPage() {
    // Filter out Kilimanjaro tours
    const safariTours = tours.filter(tour => !tour.location?.includes("Kilimanjaro"));

    // Group tours by category or location (simplified logic)
    const groupedTours = safariTours.reduce((acc, tour) => {
        const category = tour.category || (tour.location?.includes("Ruaha") || tour.location?.includes("Nyerere") ? "Southern Circuit" : "Northern Circuit");
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(tour);
        return acc;
    }, {} as Record<string, typeof tours>);

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <Image
                    src="/images/destinations/serengeti/serengeti-18.webp"
                    alt="Tanzania Safari Itineraries"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                <div className="relative z-10 container px-6 mx-auto mt-20">
                    <div className="max-w-3xl">
                        <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
                            Our Signature Selection
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Unforgettable <br /><span className="italic text-white/80">Safari Itineraries</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Discover Tanzania through immersive wildlife encounters, cultural connections, luxury adventures, and unforgettable moments crafted for every traveler.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-10 h-[1px] bg-primary"></div>
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                            Curated For You
                        </span>
                        <div className="w-10 h-[1px] bg-primary"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-8 leading-tight">
                        Explore Our <br /><span className="italic text-gray-500">Safari Collections</span>
                    </h2>
                    <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                        <p>
                            From witnessing millions of wildebeest crossing the Serengeti plains to exploring the hidden gems of the Southern Circuit. Browse our carefully crafted itineraries below, grouped by category and region, to find your perfect African adventure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Itineraries by Category */}
            <section className="py-12 bg-[#FDFBF7] border-b border-gray-100">
                <div className="container px-6 mx-auto">
                    {Object.entries(groupedTours).map(([category, categoryTours]) => (
                        <div key={category} className="mb-24 last:mb-0">
                            <div className="flex items-end justify-between border-b border-gray-200 pb-6 mb-10">
                                <div>
                                    <h3 className="text-3xl font-serif text-[#1A1A1A] mb-2">{category}</h3>
                                    <p className="text-gray-500 font-light">Explore our best itineraries in this collection.</p>
                                </div>
                                <Button variant="ghost" className="hidden md:flex text-primary hover:bg-primary/5 hover:text-primary" asChild>
                                    <Link href="/all-safaris" className="flex items-center gap-2">
                                        View All <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {categoryTours.map((tour) => (
                                    <Link key={tour.id} href={`/itineraries/${tour.slug}`} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={tour.image}
                                                alt={tour.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A]">
                                                {tour.duration}
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <h4 className="text-xl font-serif text-[#1A1A1A] mb-3 group-hover:text-primary transition-colors">{tour.title}</h4>
                                            
                                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                                                <MapPin className="w-3 h-3 text-primary" />
                                                <span className="truncate">{tour.location}</span>
                                            </div>

                                            <p className="text-gray-500 text-sm font-light line-clamp-3 mb-6 flex-1">
                                                {tour.description}
                                            </p>

                                            <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                                                <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Details <ArrowRight className="w-3 h-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experiences Grid (Moved to Bottom) */}
            <section className="py-24 bg-[#EAE3D6]">
                <div className="container px-6 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">
                            Enhance Your Journey
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">
                            Signature <span className="italic text-gray-500">Experiences</span>
                        </h2>
                        <p className="text-gray-500 font-light text-lg">
                            Add these unforgettable activities to any safari itinerary for a truly unique adventure in Tanzania.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experiences.map((exp, index) => (
                            <Link 
                                key={index} 
                                href={exp.link}
                                className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                <Image
                                    src={exp.image}
                                    alt={exp.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                                
                                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-serif text-white mb-2">{exp.title}</h3>
                                    <p className="text-white/70 text-sm font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {exp.subtitle}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold text-[10px] tracking-widest uppercase">
                                        Explore Experience <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-8">Create Your Own Safari Story</h2>
                    <p className="text-gray-600 font-light leading-relaxed text-lg mb-12">
                        Every traveler dreams differently, and every safari should reflect that. At Serenity Africa Safaris, we create personalized experiences designed around your interests, travel style, and sense of adventure.
                    </p>
                    <Button size="lg" className="bg-primary text-white rounded-full px-12 py-7 text-[11px] font-bold tracking-widest uppercase" asChild>
                        <Link href="/contact">Plan Your Custom Safari</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
