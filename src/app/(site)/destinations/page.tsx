import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Compass } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tanzania Destinations | Serenity Africa Safaris",
    description: "Explore the jewels of Tanzania. From the Serengeti plains to the pristine beaches of Zanzibar and the peak of Kilimanjaro.",
};

interface Destination {
    title: string;
    slug: string;
    description: string;
    image: string;
    region: string;
    highlights: string[];
}

const destinations: Destination[] = [
    // Northern Circuit
    {
        title: "Serengeti National Park",
        slug: "serengeti",
        region: "Northern Circuit",
        description: "The quintessential African savannah, world-famous for the Great Wildebeest Migration and an incredibly high density of predators.",
        image: "/images/destinations/serengeti/serengeti-18.webp",
        highlights: ["The Great Migration", "Big Cats", "Endless Plains"]
    },
    {
        title: "Ngorongoro Crater",
        slug: "ngorongoro",
        region: "Northern Circuit",
        description: "A UNESCO World Heritage site. The world's largest inactive volcanic caldera, teeming with wildlife in a spectacular setting.",
        image: "/images/destinations/ngorongoro/ngorongoro-1.webp",
        highlights: ["Big 5", "Crater Views", "Black Rhinos"]
    },
    {
        title: "Tarangire National Park",
        slug: "tarangire",
        region: "Northern Circuit",
        description: "Known for its massive elephant herds, ancient baobab trees, and unique dry-season wildlife gatherings.",
        image: "/images/destinations/tarangire/tarangire-14.webp",
        highlights: ["Huge Elephant Herds", "Baobab Trees", "Bird Watching"]
    },
    {
        title: "Lake Manyara National Park",
        slug: "lake-manyara",
        region: "Northern Circuit",
        description: "Famous for its tree-climbing lions, ground-water forests, and vast flocks of pink flamingos along the lake shores.",
        image: "/images/destinations/lake-manyara/lake-manyara-1.webp",
        highlights: ["Tree-Climbing Lions", "Flamingos", "Scenic Escarpment"]
    },
    {
        title: "Mount Kilimanjaro",
        slug: "kilimanjaro",
        region: "Northern Circuit",
        description: "The Roof of Africa and the highest free-standing mountain in the world. A trekker's ultimate paradise.",
        image: "/images/destinations/kilimanjaro/kilimanjaro-12.webp",
        highlights: ["Uhuru Peak", "Glaciers", "Alpine Desert"]
    },
    {
        title: "Arusha National Park",
        slug: "arusha-park",
        region: "Northern Circuit",
        description: "A diverse gem offering walking safaris, canoeing on the Momella Lakes, and stunning views of Mount Meru.",
        image: "/images/destinations/tarangire/tarangire-2.webp", // Fallback image
        highlights: ["Walking Safaris", "Mount Meru", "Colobus Monkeys"]
    },

    // Southern & Western Circuit
    {
        title: "Ruaha National Park",
        slug: "ruaha",
        region: "Southern & Western Circuit",
        description: "Rugged scenery and massive predator populations. This is the remote, untouched heart of Tanzania's wilderness.",
        image: "/images/destinations/ruaha/ruaha-5.webp",
        highlights: ["Wilderness", "Lions & Leopards", "Great Ruaha River"]
    },
    {
        title: "Nyerere National Park",
        slug: "nyerere",
        region: "Southern & Western Circuit",
        description: "Africa's largest stand-alone park. A vast wilderness of oxbow lakes, riverine forests, and boat safari adventures.",
        image: "/images/destinations/nyerere/nyerere-1.webp",
        highlights: ["Boat Safaris", "Wild Dogs", "Complete Solitude"]
    },
    {
        title: "Mikumi National Park",
        slug: "mikumi",
        region: "Southern & Western Circuit",
        description: "Accessible and rich in wildlife, often compared to the Serengeti for its open horizons and abundant game.",
        image: "/images/destinations/ruaha/ruaha-1.webp", // Fallback image
        highlights: ["Mkata Floodplain", "Elephants", "Easy Access"]
    },
    {
        title: "Mahale Mountains",
        slug: "mahale",
        region: "Southern & Western Circuit",
        description: "A lush, mountainous jungle dropping down to the crystal clear waters of Lake Tanganyika. The ultimate chimpanzee trekking destination.",
        image: "/images/destinations/serengeti/serengeti-34.webp", // Fallback image
        highlights: ["Chimpanzee Trekking", "Lake Tanganyika", "Forest Walks"]
    },
    {
        title: "Gombe Stream",
        slug: "gombe",
        region: "Southern & Western Circuit",
        description: "Made famous by Jane Goodall, this intimate park offers unparalleled chimpanzee encounters in pristine forests.",
        image: "/images/destinations/nyerere/nyerere-5.webp", // Fallback image
        highlights: ["Jane Goodall Research", "Chimpanzees", "Intimate Setting"]
    },

    // Coastal & Islands
    {
        title: "Zanzibar Archipelago",
        slug: "zanzibar",
        region: "Coastal & Islands",
        description: "The legendary Spice Island. Pristine white sands, historic Stone Town, and crystal clear Indian Ocean waters.",
        image: "/images/destinations/zanzibar/zanzibar-1.webp",
        highlights: ["White Sand Beaches", "Stone Town", "Spice Farms"]
    },
    {
        title: "Mafia Island",
        slug: "mafia",
        region: "Coastal & Islands",
        description: "A tranquil paradise for divers and snorkelers. Swim with whale sharks in a protected marine park environment.",
        image: "/images/destinations/zanzibar/zanzibar-8.webp", // Fallback image
        highlights: ["Whale Sharks", "Scuba Diving", "Marine Park"]
    }
];

export default function DestinationsPage() {
    // Group destinations by region
    const groupedDestinations = destinations.reduce((acc, dest) => {
        if (!acc[dest.region]) {
            acc[dest.region] = [];
        }
        acc[dest.region].push(dest);
        return acc;
    }, {} as Record<string, Destination[]>);

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            {/* HERO SECTION */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/hero/slide-3.webp"
                    alt="Tanzania Destinations"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                <div className="relative z-10 container px-6 mx-auto mt-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
                            Discover The Extraordinary
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
                            Tanzania's <br /><span className="italic text-white/80">Crown Jewels</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                            From the endless plains of the Serengeti and the towering peak of Kilimanjaro, to the untouched wilderness of Ruaha and the turquoise waters of Zanzibar.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-10 h-[1px] bg-primary"></div>
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                            A World Within One Country
                        </span>
                        <div className="w-10 h-[1px] bg-primary"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-8 leading-tight">
                        Explore Our <br /><span className="italic text-gray-500">Diverse Ecosystems</span>
                    </h2>
                    <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                        <p>
                            Tanzania is arguably the greatest safari destination on earth. Almost a third of the country is protected for wildlife conservation. 
                        </p>
                        <p>
                            Whether you're tracking the Great Migration in the north, seeking remote solitude in the southern parks, trekking chimpanzees in the western mountains, or unwinding on the Swahili coast—Tanzania delivers an unparalleled adventure.
                        </p>
                    </div>
                </div>
            </section>

            {/* DESTINATIONS BY REGION */}
            <section className="pb-32 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    {Object.entries(groupedDestinations).map(([region, regionDestinations]) => (
                        <div key={region} className="mb-32 last:mb-0">
                            {/* Region Header */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 mb-12">
                                <div>
                                    <div className="flex items-center gap-2 text-primary mb-3">
                                        <Compass className="w-5 h-5" />
                                        <span className="text-[11px] font-bold tracking-widest uppercase">{region}</span>
                                    </div>
                                    <h3 className="text-4xl font-serif text-[#1A1A1A]">
                                        {region.split(" ")[0]} <span className="italic text-gray-500">{region.split(" ").slice(1).join(" ")}</span>
                                    </h3>
                                </div>
                            </div>

                            {/* Destination Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {regionDestinations.map((dest) => (
                                    <Link key={dest.slug} href={dest.slug === "kilimanjaro" ? "/kilimanjaro" : `/destinations/${dest.slug}`} className="group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 aspect-[4/5] flex flex-col">
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
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay" />
                <div className="container px-6 mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Not Sure Where To Start?</h2>
                    <p className="text-white/80 font-light text-xl mb-10 max-w-2xl mx-auto">
                        Speak with our destination experts. We'll help you combine the perfect locations based on the season, wildlife movements, and your travel style.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Get Expert Advice</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/safari">Browse Itineraries</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
