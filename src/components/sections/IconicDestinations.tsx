"use client"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowLeft } from "lucide-react"

const destinations = [
    {
        name: "Serengeti",
        tagline: "The Endless Plains",
        image: "/images/destinations/serengeti/serengeti-9.webp",
        link: "/destinations/serengeti",
    },
    {
        name: "Ngorongoro",
        tagline: "The Eden of Africa",
        image: "/images/destinations/ngorongoro/ngorongoro-5.webp",
        link: "/destinations/ngorongoro",
    },
    {
        name: "Zanzibar",
        tagline: "The Spice Island",
        image: "/images/destinations/zanzibar/zanzibar-4.webp",
        link: "/destinations/zanzibar",
    },
    {
        name: "Kilimanjaro",
        tagline: "The Roof of Africa",
        image: "/images/destinations/kilimanjaro/kilimanjaro-3.webp",
        link: "/destinations/kilimanjaro",
    },
    {
        name: "Tarangire",
        tagline: "Land of Giants",
        image: "/images/destinations/tarangire/tarangire-5.webp",
        link: "/destinations/tarangire",
    },
    {
        name: "Lake Manyara",
        tagline: "Flamingo Shores",
        image: "/images/destinations/lake-manyara/lake-manyara-4.webp",
        link: "/destinations/lake-manyara",
    },
    {
        name: "Ruaha",
        tagline: "The Wild Escape",
        image: "/images/destinations/ruaha/ruaha-4.webp",
        link: "/destinations/ruaha",
    },
    {
        name: "Nyerere",
        tagline: "River Expeditions",
        image: "/images/destinations/nyerere/nyerere-3.webp",
        link: "/destinations/nyerere",
    }
]

export function IconicDestinations() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = window.innerWidth > 1024 ? window.innerWidth / 2 : window.innerWidth;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="py-24 md:py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none">
                <Image 
                    src="/images/destinations/serengeti/serengeti-16.webp" 
                    alt="Background Texture"
                    fill
                    className="object-cover grayscale"
                />
            </div>

            <div className="container relative z-10 px-6 mx-auto mb-16 md:mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="text-primary/90 text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">
                            World Wonders
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
                            Signature <span className="italic text-gray-400">Destinations</span>
                        </h2>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        {/* Explore All Button */}
                        <Link
                            href="/destinations"
                            className="group inline-flex items-center gap-3 border border-white/20 text-white/60 text-[10px] font-bold tracking-[0.25em] uppercase px-6 py-3 hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 rounded-full hidden md:inline-flex"
                        >
                            All Destinations
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-3 hidden md:flex">
                            <button 
                                onClick={() => scroll('left')}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 backdrop-blur-sm"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button 
                                onClick={() => scroll('right')}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 backdrop-blur-sm"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Slide Area */}
            <div className="relative z-10 w-full pl-6 md:pl-[max(1.5rem,calc((100vw-1536px)/2+1.5rem))]">
                <div 
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 pr-6 md:pr-[10vw]"
                >
                    {destinations.map((destination, index) => (
                        <motion.div 
                            key={index}
                            className="relative flex-shrink-0 w-[85vw] sm:w-[calc(50vw-2rem)] lg:w-[calc(25vw-2rem)] snap-start group"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                        >
                            <Link href={destination.link} className="block w-full">
                                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem]">
                                    <Image
                                        src={destination.image}
                                        alt={destination.name}
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                                    
                                    {/* Inner Border (Luxury aesthetic) */}
                                    <div className="absolute inset-4 border border-white/10 rounded-[1.5rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <span className="text-primary text-[9px] font-bold tracking-[0.3em] uppercase mb-3 block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            {destination.tagline}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 group-hover:-translate-y-1 transition-transform duration-500">
                                            {destination.name}
                                        </h3>
                                        
                                        <div className="flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 group-hover:text-white mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            Explore <ArrowRight className="w-3 h-3 ml-2" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mobile + bottom CTA */}
            <div className="container relative z-10 px-6 mx-auto mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-white/30 text-sm font-light">Discover Tanzania&apos;s most extraordinary places to visit.</p>
                <Link
                    href="/destinations"
                    className="group inline-flex items-center gap-3 bg-primary text-white text-[10px] font-bold tracking-[0.25em] uppercase px-8 py-4 hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 rounded-full shrink-0"
                >
                    Explore All Destinations
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    )
}
