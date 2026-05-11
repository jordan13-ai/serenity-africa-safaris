import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zanzibar Island | Serenity Africa Safaris",
    description: "Where white sand beaches, turquoise waters, and rich culture create the perfect island escape in Zanzibar.",
    keywords: ["Zanzibar", "Tanzania Beach", "Stone Town", "Indian Ocean", "Swahili Culture", "Luxury Island"]
};

export default function ZanzibarPage() {
    const highlights = [
        "Beautiful white sand beaches",
        "Historic Stone Town experiences",
        "Luxury beachfront resorts",
        "Snorkeling and diving adventures",
        "Traditional dhow sunset cruises",
        "Spice farm and cultural tours"
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            {/* Elegant Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/destinations/zanzibar/zanzibar-1.webp"
                    alt="Zanzibar Island"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                <div className="relative z-10 container px-6 mx-auto mt-20">
                    <div className="max-w-3xl">
                        <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
                            Tropical Paradise
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Zanzibar <br /><span className="italic text-white/80">Archipelago</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Where white sand beaches, turquoise waters, and rich culture create the perfect island escape.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Plan Your Zanzibar Escape</Link>
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
                                The Jewel of the <br /><span className="italic text-gray-500">Indian Ocean</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                                <p>
                                    Zanzibar is a tropical paradise located off the coast of Tanzania, famous for its crystal-clear waters, white sandy beaches, rich Swahili culture, and fascinating history. Often combined with Tanzania safaris, Zanzibar offers the perfect balance of relaxation, romance, and cultural exploration.
                                </p>
                                <p>
                                    Stone Town, the historic center of Zanzibar, is filled with narrow streets, ancient architecture, local markets, and a vibrant blend of African, Arab, and European influences. Beyond the town, visitors can enjoy beautiful beaches, luxury resorts, snorkeling, diving, spice tours, and unforgettable sunset dhow cruises.
                                </p>
                                <p>
                                    Whether you are seeking a romantic honeymoon, beach holiday, or peaceful retreat after safari adventures, Zanzibar delivers a truly unforgettable island experience.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/destinations/zanzibar/zanzibar-4.webp"
                                    alt="Zanzibar Beaches"
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
                            <h2 className="text-4xl font-serif text-[#1A1A1A]">Why Visit Zanzibar</h2>
                            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                                <p>Zanzibar is the perfect destination to relax and unwind after exploring Tanzania’s wildlife parks. The island combines tropical beauty with cultural richness, offering experiences that range from beach relaxation to historical exploration.</p>
                                <p>Visitors can enjoy swimming in warm turquoise waters, discovering coral reefs, tasting fresh seafood, exploring spice plantations, or simply watching the sunset along the Indian Ocean.</p>
                                <p>Its calm atmosphere and breathtaking scenery make Zanzibar one of the most desirable beach destinations in Africa.</p>
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

            {/* Wildlife/Marine Section */}
            <section className="py-24 md:py-32 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-primary"></div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                                    Island Life
                                </span>
                            </div>
                            <h2 className="text-4xl font-serif text-[#1A1A1A]">Marine & Cultural Experiences</h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                                <p>
                                    Zanzibar offers incredible marine life experiences including snorkeling, scuba diving, dolphin tours, and coral reef exploration.
                                </p>
                                <p>
                                    The island also provides rich cultural experiences through its Swahili traditions, historical sites, local cuisine, and vibrant coastal communities.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/destinations/zanzibar/zanzibar-11.webp"
                                    alt="Marine Life Zanzibar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ImageGallery
                title="Zanzibar Gallery"
                description="Sun-drenched shores and historic Stone Town."
                images={[
                    { src: "/images/destinations/zanzibar/zanzibar-22.webp", alt: "Zanzibar Coast", caption: "Turquoise waters of the Indian Ocean" },
                    { src: "/images/destinations/zanzibar/zanzibar-18.webp", alt: "Stone Town", caption: "The historic narrow streets of Stone Town" },
                    { src: "/images/destinations/zanzibar/zanzibar-24.webp", alt: "Sunset Dhow", caption: "Traditional dhow sailing at sunset" },
                    { src: "/images/destinations/zanzibar/zanzibar-16.webp", alt: "Luxury Resort", caption: "Exquisite beachfront luxury" },
                    { src: "/images/destinations/zanzibar/zanzibar-12.webp", alt: "Zanzibar Marine", caption: "Colorful coral reefs" },
                    { src: "/images/destinations/zanzibar/zanzibar-26.webp", alt: "Spice Market", caption: "Vibrant local spice markets" },
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
                        The best time to visit Zanzibar is from June to October and December to February when the weather is warm, sunny, and ideal for beach activities and water sports.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#1A1A1A] text-white">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Escape to <br /><span className="italic text-primary">Zanzibar</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        Relax, explore, and experience the beauty of Tanzania’s tropical paradise.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-lg">
                        Plan Your Zanzibar Escape
                    </Link>
                </div>
            </section>
        </div>
    );
}
