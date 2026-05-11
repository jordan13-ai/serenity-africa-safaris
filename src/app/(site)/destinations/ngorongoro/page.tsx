import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { DestinationItineraries } from "@/components/sections/DestinationItineraries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ngorongoro Crater | Serenity Africa Safaris",
    description: "A breathtaking natural wonder filled with wildlife, beauty, and unforgettable safari experiences at Ngorongoro Crater.",
    keywords: ["Ngorongoro Crater", "Tanzania Safari", "UNESCO World Heritage", "Big Five", "Tanzania Wildlife"]
};

export default function NgorongoroPage() {
    const highlights = [
        "UNESCO World Heritage Site",
        "Exceptional Big Five sightings",
        "Scenic volcanic crater landscapes",
        "Rare black rhino sightings",
        "Rich Maasai cultural experiences",
        "Beautiful flamingo-filled lakes"
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            {/* Elegant Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/destinations/ngorongoro/ngorongoro-1.webp"
                    alt="Ngorongoro Crater"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                <div className="relative z-10 container px-6 mx-auto mt-20">
                    <div className="max-w-3xl">
                        <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
                            Natural Wonders
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Ngorongoro <br /><span className="italic text-white/80">Crater</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            A breathtaking natural wonder filled with wildlife, beauty, and unforgettable safari experiences.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Plan Your Ngorongoro Safari</Link>
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
                                Africa’s Natural <br /><span className="italic text-gray-500">Wildlife Sanctuary</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                                <p>
                                    Ngorongoro Crater is one of Africa’s most extraordinary safari destinations and a UNESCO World Heritage Site known for its stunning landscapes and remarkable wildlife density. Formed millions of years ago after the collapse of a giant volcano, the crater creates a spectacular natural enclosure often referred to as Africa’s Garden of Eden.
                                </p>
                                <p>
                                    The crater floor is home to an incredible variety of animals living within a compact ecosystem surrounded by dramatic volcanic walls. Visitors have excellent opportunities to spot the Big Five, including rare black rhinos, lions, elephants, buffalo, and leopards.
                                </p>
                                <p>
                                    With its combination of scenic beauty, rich wildlife, and cultural heritage, Ngorongoro offers one of the most unique safari experiences in Tanzania.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/destinations/ngorongoro/ngorongoro-5.webp"
                                    alt="Wildlife in Ngorongoro"
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
                            <h2 className="text-4xl font-serif text-[#1A1A1A]">Why Visit Ngorongoro</h2>
                            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                                <p>Ngorongoro provides one of the most accessible and rewarding wildlife experiences in East Africa. The compact nature of the crater allows visitors to encounter diverse species within a short period of time, making every game drive rich and exciting.</p>
                                <p>The breathtaking views from the crater rim, the peaceful landscapes, and the opportunity to witness wildlife against dramatic natural scenery create unforgettable safari moments.</p>
                                <p>Ngorongoro is ideal for travelers seeking exceptional wildlife encounters combined with scenic beauty and cultural richness.</p>
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
                                    Natural Abundance
                                </span>
                            </div>
                            <h2 className="text-4xl font-serif text-[#1A1A1A]">Wildlife in Ngorongoro</h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                                <p>
                                    The crater supports a dense population of wildlife including lions, elephants, buffalo, zebras, hippos, hyenas, wildebeest, flamingos, jackals, and many bird species.
                                </p>
                                <p>
                                    Because animals remain within the protected crater ecosystem year-round, wildlife viewing is consistently excellent regardless of season.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/destinations/ngorongoro/ngorongoro-8.webp"
                                    alt="Wildlife in Ngorongoro"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DestinationItineraries location="Ngorongoro" title="Ngorongoro Safari Packages" />

            <ImageGallery
                title="Ngorongoro Gallery"
                description="Breathtaking landscapes and intimate wildlife encounters."
                images={[
                    { src: "/images/destinations/ngorongoro/ngorongoro-15.webp", alt: "Ngorongoro Crater Floor", caption: "The vast crater floor at sunrise" },
                    { src: "/images/destinations/ngorongoro/ngorongoro-2.webp", alt: "Black Rhino", caption: "Rare black rhino in the crater" },
                    { src: "/images/destinations/ngorongoro/ngorongoro-19.webp", alt: "Lions in Crater", caption: "Prides of lions resting in the tall grass" },
                    { src: "/images/destinations/ngorongoro/ngorongoro-21.webp", alt: "Flamingos", caption: "Pink flamingos at Lake Magadi" },
                    { src: "/images/destinations/ngorongoro/ngorongoro-4.webp", alt: "Maasai", caption: "Maasai culture in the highlands" },
                    { src: "/images/destinations/ngorongoro/ngorongoro-12.webp", alt: "Crater View", caption: "Panoramic view from the rim" },
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
                        Ngorongoro Crater is a year-round safari destination thanks to its stable wildlife population and favorable climate. The dry season offers easier wildlife spotting, while the green season provides lush landscapes and beautiful scenery.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#1A1A1A] text-white">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Explore the <br /><span className="italic text-primary">Wonders of Ngorongoro</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        Discover one of Africa’s most spectacular wildlife destinations.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-lg">
                        Plan Your Ngorongoro Safari
                    </Link>
                </div>
            </section>
        </div>
    );
}
