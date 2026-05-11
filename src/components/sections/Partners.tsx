"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
    {
        name: "Safari Bookings",
        logo: "/images/patner/safari-bookings.webp",
        link: "https://www.safaribookings.com/p1813",
    },
    {
        name: "TATO",
        logo: "/images/patner/tato2.webp",
        link: "https://www.tatotz.org/",
    },
    {
        name: "NCAA",
        logo: "/images/patner/ncaa.webp",
        link: "https://www.ncaa.go.tz/",
    },
    {
        name: "TripAdvisor",
        logo: "/images/patner/trip-advisor.webp",
        link: "https://www.tripadvisor.com/Attraction_Review-g297913-d23253772-Reviews-Tanzania_Wisdom_Safaris-Arusha_Arusha_Region.html",
    },
];

export function Partners() {
    return (
        <section className="py-20 bg-background border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <span className="inline-block px-4 py-1.5 mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary bg-primary/5 rounded-full">
                    Our Certifications
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground capitalize">
                    Certified & Recognized By
                </h2>
            </div>

            <div className="relative">
                {/* Modern Side-Fade Masks */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex overflow-x-hidden">
                    <motion.div
                        className="flex whitespace-nowrap items-center py-4"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Quadruple the partners to ensure seamless long scroll */}
                        {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                            <a
                                key={index}
                                href={partner.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center px-12 transition-all duration-500"
                            >
                                <div className="relative h-14 w-36 md:h-20 md:w-48 filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {/* Subtle glow effect on hover */}
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-2xl rounded-full transition-opacity duration-500 -z-10" />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
