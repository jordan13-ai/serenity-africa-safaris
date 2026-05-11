"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Compass } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"
import { tours } from "@/lib/tours-data"

export function ToursCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true, 
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 4 }
        }
    })
    
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    // Auto-slide logic
    useEffect(() => {
        if (!emblaApi) return
        
        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }

        const interval = setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext()
            } else {
                emblaApi.scrollTo(0)
            }
        }, 5000)

        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)

        return () => {
            clearInterval(interval)
            emblaApi.off('select', onSelect)
            emblaApi.off('reInit', onSelect)
        }
    }, [emblaApi])

    return (
        <section className="relative py-32 bg-[#F5F2ED] overflow-hidden border-b border-primary/5">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none">
                <Image 
                    src="/images/destinations/serengeti/serengeti-16.webp" 
                    alt="Background Texture"
                    fill
                    className="object-cover grayscale"
                />
            </div>

            <div className="container relative z-10 px-6 mx-auto mb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block flex items-center">
                            <Compass className="w-4 h-4 mr-2" />
                            Our Signature Selection
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
                            The Serenity Collection
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link 
                            href="/all-safaris" 
                            className="hidden md:inline-flex items-center text-[10px] font-bold tracking-[0.3em] uppercase text-[#1A1A1A] hover:text-primary transition-colors group bg-white/50 px-6 py-3 rounded-full border border-[#1A1A1A]/10 hover:border-primary/30 mr-4"
                        >
                            View All Itineraries 
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex gap-2">
                            <button 
                                onClick={scrollPrev}
                                className="w-12 h-12 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center hover:bg-white transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 rotate-180 text-[#1A1A1A] group-hover:text-primary" />
                            </button>
                            <button 
                                onClick={scrollNext}
                                className="w-12 h-12 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center hover:bg-white transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-[#1A1A1A] group-hover:text-primary" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="container relative z-10 px-6 mx-auto overflow-visible">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-8">
                        {tours.map((item, index) => (
                            <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] pl-8">
                                <Link href={`/itineraries/${item.slug}`}>
                                    <motion.div 
                                        className="group cursor-pointer flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative h-full"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.8 }}
                                    >
                                        {/* Card Inner Texture */}
                                        <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-0">
                                            <Image 
                                                src="/images/destinations/serengeti/serengeti-4.webp" 
                                                alt="Card Texture"
                                                fill
                                                className="object-cover grayscale"
                                            />
                                        </div>

                                        {/* Image Container */}
                                        <div className="relative aspect-[4/5] w-full overflow-hidden z-10">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                        
                                        {/* Card Content */}
                                        <div className="flex flex-col flex-grow p-6 md:p-8 relative z-10 bg-white/90 backdrop-blur-sm border-t border-gray-100/50">
                                            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
                                                {item.location}
                                            </span>
                                            <h3 className="text-xl font-serif text-[#1A1A1A] mb-4 group-hover:text-primary transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            
                                            <div className="mt-auto flex items-center justify-between pt-4">
                                                <div>
                                                    <span className="text-[10px] font-medium text-gray-400 block mb-1">Duration</span>
                                                    <span className="text-[12px] font-bold text-[#1A1A1A] tracking-wider">{item.duration}</span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-[10px] font-medium text-gray-400 block mb-1">Experience</span>
                                                    <span className="text-[12px] font-bold text-primary tracking-wider uppercase">Bespoke</span>
                                                </div>
                                            </div>

                                            <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                                                <ArrowRight className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-12">
                    {Array.from({ length: Math.ceil(tours.length / 4) }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi && emblaApi.scrollTo(i * 4)}
                            className={cn(
                                "h-1.5 transition-all duration-500 rounded-full",
                                Math.floor(selectedIndex / 4) === i ? "w-8 bg-primary" : "w-4 bg-primary/20"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
