import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { DestinationsClient } from "./DestinationsClient";

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

const staticDestinations: Destination[] = [
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
        image: "/images/destinations/tarangire/tarangire-2.webp",
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
        image: "/images/destinations/ruaha/ruaha-1.webp",
        highlights: ["Mkata Floodplain", "Elephants", "Easy Access"]
    },
    {
        title: "Mahale Mountains",
        slug: "mahale",
        region: "Southern & Western Circuit",
        description: "A lush, mountainous jungle dropping down to the crystal clear waters of Lake Tanganyika. The ultimate chimpanzee trekking destination.",
        image: "/images/destinations/serengeti/serengeti-34.webp",
        highlights: ["Chimpanzee Trekking", "Lake Tanganyika", "Forest Walks"]
    },
    {
        title: "Gombe Stream",
        slug: "gombe",
        region: "Southern & Western Circuit",
        description: "Made famous by Jane Goodall, this intimate park offers unparalleled chimpanzee encounters in pristine forests.",
        image: "/images/destinations/nyerere/nyerere-5.webp",
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
        image: "/images/destinations/zanzibar/zanzibar-8.webp",
        highlights: ["Whale Sharks", "Scuba Diving", "Marine Park"]
    }
];

export default async function DestinationsPage() {
    let destinations: Destination[] = []

    try {
        const cms = await prisma.destination.findMany({
            where: { status: "PUBLISHED" },
            orderBy: { updatedAt: "desc" },
            select: { id: true, title: true, slug: true, description: true, coverImage: true, region: true, wildlife: true, activities: true },
        })
        if (cms.length > 0) {
            destinations = cms.map(d => ({
                title: d.title,
                slug: d.slug,
                description: d.description || "",
                image: d.coverImage || "/images/destinations/serengeti/serengeti-18.webp",
                region: d.region || "Northern Circuit",
                highlights: [...(d.wildlife ?? []).slice(0, 2), ...(d.activities ?? []).slice(0, 1)],
            }))
        }
    } catch { /* fall through */ }

    if (destinations.length === 0) destinations = staticDestinations

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

            {/* DESTINATIONS WITH CATEGORY FILTER */}
            <DestinationsClient destinations={destinations} />

            {/* CTA SECTION */}
            <section className="py-32 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay" />
                <div className="container px-6 mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Not Sure Where To Start?</h2>
                    <p className="text-white/80 font-light text-xl mb-10 max-w-2xl mx-auto">
                        Speak with our destination experts. We'll help you combine the perfect locations based on the season, wildlife movements, and your travel style.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors">
                            Get Expert Advice
                        </Link>
                        <Link href="/safari" className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">
                            Browse Itineraries
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
