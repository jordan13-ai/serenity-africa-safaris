import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Compass, Sparkles, MapPin, Shield, CheckCircle2, Heart, Leaf, Mountain } from "lucide-react";
import { LatestStories } from "@/components/sections/LatestStories";
import { TravelerReviews } from "@/components/sections/TravelerReviews";
import { Experiences } from "@/components/sections/Experiences";

export default function AboutPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            {/* Elegant Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/hero/slide-2.webp"
                    alt="About Serenity Africa Safaris"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                <div className="relative z-10 container px-6 mx-auto text-center mt-20">
                    <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
                        Our Heritage
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                        About <br className="md:hidden" /><span className="italic text-white/80">Serenity Africa Safaris</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                        Authentic safari experiences crafted with passion, luxury, and a deep connection to the wild landscapes of Tanzania.
                    </p>
                </div>
            </section>

            {/* Our Story - Minimal Split Layout */}
            <section className="py-24 md:py-32 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-primary"></div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                                    The Beginning
                                </span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
                                Our <span className="italic text-gray-500">Story</span>
                            </h2>
                            
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                                <p>
                                    Serenity Africa Safaris was created from a passion for showcasing the beauty, wildlife, and spirit of Tanzania through authentic and unforgettable safari experiences. Built from the strong foundation of Serenity Camp in the heart of Serengeti, our company combines local expertise, luxury hospitality, and personalized service to create journeys that go beyond ordinary travel.
                                </p>
                                <p>
                                    We believe a safari is more than simply visiting wildlife destinations. It is about experiencing Africa in a meaningful and immersive way — from witnessing the Great Migration across the endless Serengeti plains to watching the golden sunset over the savannah, listening to the sounds of nature under the stars, and connecting with the culture and landscapes that make Tanzania truly unique.
                                </p>
                                <p>
                                    Every journey we design is carefully tailored to provide comfort, adventure, and unforgettable memories while maintaining the authenticity that defines African safari experiences.
                                </p>
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl w-[90%] ml-auto">
                                <Image
                                    src="/images/hero/slide-4.webp"
                                    alt="Our Story"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Combined */}
            <section className="py-24 bg-[#EAE3D6] relative overflow-hidden">
                <div className="container px-6 mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-primary"></div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                                    Our Purpose
                                </span>
                            </div>
                            <h2 className="text-4xl font-serif text-[#1A1A1A]">Our Mission</h2>
                            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                                <p>Our mission is to provide exceptional safari experiences that combine adventure, comfort, and genuine African hospitality. We are committed to delivering personalized journeys that allow travelers to explore Tanzania’s incredible wildlife, breathtaking landscapes, and rich cultural heritage in the most authentic way possible.</p>
                                <p>We strive to create experiences that inspire connection with nature while ensuring every guest feels welcomed, cared for, and fully immersed in the beauty of Africa.</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-primary"></div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                                    Future Outlook
                                </span>
                            </div>
                            <h2 className="text-4xl font-serif text-[#1A1A1A]">Our Vision</h2>
                            <p className="text-gray-600 font-light leading-relaxed text-xl italic">
                                "To become one of Tanzania’s most trusted and recognized safari brands by delivering world-class safari experiences built on authenticity, quality service, sustainability, and unforgettable storytelling."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why We Are Different */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
                            The Serenity Advantage
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
                            Why Travel With <span className="italic">Serenity Africa Safaris</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="space-y-4">
                            <div className="w-12 h-12 border border-primary/20 rounded-full flex items-center justify-center bg-[#FDFBF7] shadow-sm">
                                <MapPin className="text-primary w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-widest text-[#1A1A1A]">Real Presence in Serengeti</h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">Unlike many safari companies that operate remotely, Serenity Africa Safaris is built from direct experience in Serengeti through Serenity Camp.</p>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="w-12 h-12 border border-primary/20 rounded-full flex items-center justify-center bg-[#FDFBF7] shadow-sm">
                                <Compass className="text-primary w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-widest text-[#1A1A1A]">Personalized Planning</h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">Every traveler is different. We carefully design each safari based on your interests, style, timeline, and expectations.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="w-12 h-12 border border-primary/20 rounded-full flex items-center justify-center bg-[#FDFBF7] shadow-sm">
                                <Shield className="text-primary w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-widest text-[#1A1A1A]">Local Expertise</h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">Our experienced team and guides are passionate about Tanzania, ensuring every journey is informative, safe, and unforgettable.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="w-12 h-12 border border-primary/20 rounded-full flex items-center justify-center bg-[#FDFBF7] shadow-sm">
                                <Sparkles className="text-primary w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-widest text-[#1A1A1A]">Luxury & Comfort</h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">We combine authentic adventure with carefully selected accommodations to ensure comfort throughout your journey.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Serenity Experience & Sustainability */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/hero/slide-1.webp"
                                alt="The Serenity Experience"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-serif text-[#1A1A1A]">The Serenity Experience</h2>
                                <p className="text-gray-500 font-light leading-relaxed">
                                    At Serenity Africa Safaris, we focus on creating experiences that feel personal, inspiring, and memorable. From the moment you arrive in Tanzania to the final day of your journey, every detail is carefully planned to provide a smooth and enriching travel experience.
                                </p>
                                <p className="text-gray-500 font-light leading-relaxed">
                                    We believe the most meaningful safaris are those that create lasting memories, emotional connections, and stories worth sharing for years to come.
                                </p>
                            </div>
                            <div className="space-y-6 pt-8 border-t border-gray-100">
                                <div className="flex items-center gap-3">
                                    <Leaf className="text-primary w-5 h-5" />
                                    <h3 className="text-xl font-serif text-[#1A1A1A]">Commitment to Sustainability</h3>
                                </div>
                                <p className="text-gray-500 font-light leading-relaxed text-sm">
                                    We believe protecting nature and supporting local communities is essential for the future of tourism and wildlife conservation. We are committed to responsible tourism practices that respect wildlife and preserve natural ecosystems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-8 italic">Explore Tanzania With Us</h2>
                    <p className="text-gray-500 font-light leading-relaxed text-lg mb-12">
                        Serenity Africa Safaris invites you to experience the beauty of Tanzania through carefully crafted journeys designed with passion, professionalism, and authenticity. From the endless plains of Serengeti to the breathtaking Ngorongoro Crater and the peaceful beaches of Zanzibar.
                    </p>
                </div>
            </section>

            {/* Final CTA Redesigned */}
            <section className="py-24 bg-[#1A1A1A] text-white">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Start Planning Your <br /><span className="italic text-primary">Safari</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        Let us create a personalized Tanzania safari experience designed around your dreams, interests, and sense of adventure.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-lg">
                        Plan Your Safari
                    </Link>
                </div>
            </section>

            {/* Integrated Components */}
            <Experiences />
            <TravelerReviews />
            <LatestStories />
        </div>
    );
}
