import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tarangire National Park | Serenity Africa Safaris",
    description: "Witness the land of giants, ancient baobabs, and the largest elephant herds in Tanzania at Tarangire National Park.",
    keywords: ["Tarangire", "Tanzania Safari", "Elephants", "Baobab trees", "Wildlife Photography"]
};

export default function TarangirePage() {
    const highlights = [
        "Home to Tanzania's largest herds of elephants",
        "Ancient baobab trees up to 3,000 years old",
        "Exceptional birdwatching with 550+ species",
        "Year-round predator sightings along Tarangire River",
        "Quiet, intimate safari experience with fewer crowds",
        "Stunning dry season wildlife concentrations"
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            {/* Elegant Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/destinations/tarangire/tarangire-1.webp"
                    alt="Tarangire National Park"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                <div className="relative z-10 container px-6 mx-auto mt-20">
                    <div className="max-w-3xl">
                        <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
                            The Land of Giants
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Tarangire <br /><span className="italic text-white/80">National Park</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Witness the majestic presence of Tanzania's largest elephant herds against a backdrop of ancient baobabs.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Plan Your Tarangire Safari</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Intro Section - Split Layout */}
            <section className="py-24 md:py-32 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-primary"></div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                                    Introduction
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
                                A Sanctuary of <br /><span className="italic text-gray-500">Ancient Spirits</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                                <p>
                                    Tarangire National Park is a hidden gem in Tanzania’s northern circuit, offering a wilder and more intimate safari experience. Dominated by the life-giving Tarangire River and dotted with massive baobab trees that pierce the skyline, the park feels like a world from a different era.
                                </p>
                                <p>
                                    The park is legendary for its elephant population, with herds sometimes numbering in the hundreds gathering along the riverbanks during the dry season. It is a place of dramatic landscapes and quiet beauty, where the rhythms of nature are felt in every breeze across the savannah.
                                </p>
                                <p>
                                    Beyond the elephants, Tarangire is a sanctuary for predators and a paradise for bird enthusiasts, offering a diverse array of species that thrive in its unique combination of riverine forests and open woodlands.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/destinations/tarangire/tarangire-5.webp"
                                    alt="Wildlife in Tarangire"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Visit & Highlights */}
            <section className="py-24 bg-[#EAE3D6] relative overflow-hidden">
                <div className="container px-6 mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-primary"></div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                                    The Experience
                                </span>
                            </div>
                            <h2 className="text-4xl font-serif text-[#1A1A1A]">Why Visit Tarangire</h2>
                            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                                <p>Tarangire offers a peaceful alternative to the more crowded parks, allowing for intimate wildlife encounters without the bustle of many vehicles. The dry season (June to October) is particularly spectacular as animals converge on the river, providing unparalleled game viewing.</p>
                                <p>The presence of ancient baobab trees creates an iconic African silhouette that is unique to this region, making it a photographer's dream, especially at sunset.</p>
                                <p>Whether you're following the elephant paths or exploring the marshes, Tarangire delivers a soulful and authentic connection to the Tanzanian wilderness.</p>
                            </div>
                        </div>

                        <div className="bg-white/50 backdrop-blur-sm p-10 md:p-12 rounded-[2rem] border border-white/50 shadow-sm">
                            <h3 className="text-2xl font-serif text-[#1A1A1A] mb-8">Highlights</h3>
                            <ul className="space-y-6">
                                {highlights.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-gray-600 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ImageGallery
                title="Tarangire Gallery"
                description="Experience the land of giants, ancient baobabs, and diverse wildlife."
                images={[
                    { src: "/images/destinations/tarangire/tarangire-19.webp", alt: "Tarangire Elephant", caption: "Majestic elephant herds by the river" },
                    { src: "/images/destinations/tarangire/tarangire-17.webp", alt: "Tarangire Baobab", caption: "Ancient baobab trees silhouette" },
                    { src: "/images/destinations/tarangire/tarangire-10.webp", alt: "Tarangire Wildlife", caption: "Predators in the riverine forest" },
                    { src: "/images/destinations/tarangire/tarangire-12.webp", alt: "Tarangire Landscape", caption: "Golden savannah horizons" },
                    { src: "/images/destinations/tarangire/tarangire-2.webp", alt: "Tarangire Zebras", caption: "Zebras at the life-giving waterhole" },
                    { src: "/images/destinations/tarangire/tarangire-11.webp", alt: "Tarangire Birds", caption: "Diverse birdlife of the marshes" },
                ]}
            />

            {/* Best Time Section */}
            <section className="py-24 bg-[#EAE3D6]">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
                        Planning
                    </span>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-8">Best Time to Visit</h2>
                    <p className="text-gray-600 font-light leading-relaxed text-lg mb-12">
                        Tarangire is a year-round destination, but it truly shines during the dry season (June to October). During these months, the river becomes the only water source, drawing thousands of animals and offering some of the best wildlife viewing in East Africa.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#1A1A1A] text-white">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Explore the <br /><span className="italic text-primary">Land of Giants</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        Discover unforgettable safari moments in the heart of Tarangire National Park.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-lg">
                        Plan Your Tarangire Safari
                    </Link>
                </div>
            </section>
        </div>
    );
}
