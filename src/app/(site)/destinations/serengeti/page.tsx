import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MapPin, Compass, Sparkles } from "lucide-react";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { DestinationItineraries } from "@/components/sections/DestinationItineraries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Serengeti National Park | Serenity Africa Safaris",
    description: "Experience the endless plains of Africa and witness one of the world’s greatest wildlife spectacles at Serengeti National Park.",
    keywords: ["Serengeti", "Tanzania Safari", "Great Migration", "Big Five", "National Park"]
};

export default function SerengetiPage() {
    const highlights = [
        "Witness the world-famous Great Migration",
        "Excellent opportunities to see the Big Five",
        "Hot air balloon safaris over the plains",
        "Luxury tented camp experiences",
        "Exceptional wildlife photography opportunities",
        "Beautiful golden sunsets and endless landscapes"
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            {/* Elegant Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/destinations/serengeti/serengeti-1.webp"
                    alt="Serengeti National Park"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                <div className="relative z-10 container px-6 mx-auto mt-20">
                    <div className="max-w-3xl">
                        <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
                            Iconic Destinations
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Serengeti <br /><span className="italic text-white/80">National Park</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Experience the endless plains of Africa and witness one of the world’s greatest wildlife spectacles.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Plan Your Serengeti Safari</Link>
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
                                The Heart of <br /><span className="italic text-gray-500">African Safari</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                                <p>
                                    Serengeti National Park is one of the most iconic safari destinations on Earth and the crown jewel of Tanzania’s wildlife experiences. Stretching across vast golden plains as far as the eye can see, Serengeti offers unmatched beauty, extraordinary wildlife encounters, and unforgettable safari adventures throughout the year.
                                </p>
                                <p>
                                    Known globally for the Great Migration, Serengeti hosts millions of wildebeest, zebras, and gazelles as they move across the ecosystem in search of fresh grazing land. This incredible natural movement attracts predators such as lions, cheetahs, leopards, and crocodiles, creating one of the most dramatic wildlife spectacles in the world.
                                </p>
                                <p>
                                    Beyond the migration, Serengeti offers incredible year-round game viewing with abundant wildlife, breathtaking landscapes, dramatic sunsets, and authentic safari experiences that connect travelers deeply with nature.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/destinations/serengeti/serengeti-9.webp"
                                    alt="Wildlife in Serengeti"
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
                            <h2 className="text-4xl font-serif text-[#1A1A1A]">Why Visit Serengeti</h2>
                            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                                <p>A safari in Serengeti is more than wildlife viewing — it is a journey into the heart of untamed Africa. Every day offers something unique, from watching lions resting beneath acacia trees to witnessing elephants crossing open plains at sunrise.</p>
                                <p>Serengeti is also one of the best places in Africa to experience luxury tented camps, immersive game drives, hot air balloon safaris, and authentic bush experiences under star-filled skies.</p>
                                <p>Whether you are visiting for the Great Migration, photography, honeymoon, family adventure, or a luxury safari escape, Serengeti delivers extraordinary moments that remain unforgettable for a lifetime.</p>
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

            {/* Wildlife Section */}
            <section className="py-24 md:py-32 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-primary"></div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                                    Nature's Bounty
                                </span>
                            </div>
                            <h2 className="text-4xl font-serif text-[#1A1A1A]">Wildlife in Serengeti</h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                                <p>
                                    Serengeti is home to one of the largest concentrations of wildlife in Africa. Visitors can encounter lions, leopards, elephants, cheetahs, buffalo, giraffes, hyenas, zebras, wildebeest, gazelles, hippos, crocodiles, and hundreds of bird species.
                                </p>
                                <p>
                                    The diversity of habitats — including open plains, river systems, woodlands, and rocky kopjes — supports an incredible ecosystem that makes every game drive exciting and unpredictable.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/destinations/serengeti/serengeti-18.webp"
                                    alt="Wildlife in Serengeti"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DestinationItineraries location="Serengeti" title="Top Serengeti Safaris" />

            <ImageGallery
                title="Serengeti Gallery"
                description="A glimpse into the endless plains and its magnificent inhabitants."
                images={[
                    { src: "/images/destinations/serengeti/serengeti-11.webp", alt: "Great Migration", caption: "The Great Migration in full swing" },
                    { src: "/images/destinations/serengeti/serengeti-16.webp", alt: "Serengeti Leopard", caption: "A leopard resting on a branch" },
                    { src: "/images/destinations/serengeti/serengeti-20.webp", alt: "Serengeti Sunset", caption: "Golden hour over the savannah" },
                    { src: "/images/destinations/serengeti/serengeti-23.webp", alt: "Serengeti Cheetah", caption: "Cheetah on the hunt" },
                    { src: "/images/destinations/serengeti/serengeti-27.webp", alt: "Serengeti Elephant", caption: "Gentle giants of the plains" },
                    { src: "/images/destinations/serengeti/serengeti-34.webp", alt: "Serengeti Landscape", caption: "Iconic acacia trees" },
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
                        Serengeti offers incredible safari experiences throughout the year. The timing of the Great Migration changes seasonally, while the dry season from June to October provides excellent general wildlife viewing. Green season months also offer beautiful scenery, fewer crowds, and exceptional photography conditions.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#1A1A1A] text-white">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Experience the <br /><span className="italic text-primary">Magic of Serengeti</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        Discover unforgettable safari moments in Africa’s most iconic wildlife destination.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-lg">
                        Plan Your Serengeti Safari
                    </Link>
                </div>
            </section>
        </div>
    );
}
