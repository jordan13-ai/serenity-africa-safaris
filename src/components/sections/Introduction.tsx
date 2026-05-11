"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Compass, Sparkles, Leaf, ArrowRight } from "lucide-react"

export function Introduction() {
    const pillars = [
        {
            icon: Compass,
            title: "Bespoke Itineraries",
            description: "Crafted to your exact rhythm."
        },
        {
            icon: Sparkles,
            title: "Refined Luxury",
            description: "Premium lodges in the wild."
        },
        {
            icon: Leaf,
            title: "Sustainable Ethos",
            description: "Protecting the land we love."
        }
    ]

    return (
        <section className="py-16 md:py-20 bg-[#FDFBF7] overflow-hidden">
            {/* Extremely Subtle Pattern */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none">
                <Image 
                    src="/images/destinations/ngorongoro/ngorongoro-3.webp" 
                    alt="Background Texture"
                    fill
                    className="object-cover grayscale"
                />
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
                    
                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 space-y-10 lg:pr-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-primary"></div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                                    The Serenity Philosophy
                                </span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] leading-[1.1]">
                                Reclaiming the Art of <br />
                                <span className="italic text-gray-500 font-light">Silent Discovery.</span>
                            </h2>
                            
                            <p className="text-gray-500 leading-relaxed text-base font-light max-w-md pt-2">
                                At Serenity Africa Safaris, we believe true luxury isn't found in excess, but in the profound silence of a Serengeti sunrise and the raw connection between traveler and nature.
                            </p>
                        </motion.div>

                        {/* Attractive Vertical Icon List */}
                        <motion.div 
                            className="space-y-6 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            {pillars.map((pillar, index) => (
                                <div key={index} className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center bg-white group-hover:bg-primary group-hover:border-primary transition-colors duration-300 shadow-sm">
                                        <pillar.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#1A1A1A] mb-1">{pillar.title}</h4>
                                        <p className="text-[13px] text-gray-500 font-light">{pillar.description}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="pt-6"
                        >
                            <Link href="/about" className="group inline-flex items-center text-[11px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] hover:text-primary transition-colors bg-white px-8 py-4 rounded-full shadow-sm border border-gray-100 hover:shadow-md">
                                Discover Our Story 
                                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image Side - Dual Overlap Layout */}
                    <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 flex justify-end">
                        {/* Main Large Image */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[4/5] w-[75%] overflow-hidden rounded-[2rem] shadow-xl z-10"
                        >
                            <Image
                                src="/images/intro/safari-card.webp"
                                alt="Serenity Africa Safari Experience"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/5" />
                        </motion.div>

                        {/* Overlapping Secondary Image */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40, x: -20 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="absolute bottom-8 left-10 w-[45%] aspect-square overflow-hidden rounded-[2rem] shadow-2xl border-8 border-[#FDFBF7] z-20 hidden md:block"
                        >
                            <Image
                                src="/images/destinations/tarangire/tarangire-8.webp"
                                alt="Serengeti detail"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Decorative Circle Background */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="absolute top-1/2 right-10 -translate-y-1/2 w-[70%] aspect-square rounded-full border border-primary/10 z-0 hidden lg:block"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
