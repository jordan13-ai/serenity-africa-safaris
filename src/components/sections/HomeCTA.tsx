"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HomeCTA() {
    return (
        <section className="py-32 bg-white">
            <div className="container px-6 mx-auto">
                <div className="bg-[#1A1A1A] rounded-[4rem] overflow-hidden relative min-h-[600px] flex items-center">
                    
                    {/* Background Pattern: Subtle Landscape */}
                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
                        <Image 
                            src="/images/destinations/serengeti/serengeti-8.webp" 
                            alt="Background Pattern"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full px-12 md:px-24 relative z-10">
                        
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-primary text-[12px] font-bold tracking-[0.4em] uppercase mb-8 block">
                                Personal Concierge
                            </span>
                            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
                                Your Journey, <br />
                                <span className="italic font-normal">Expertly Crafted</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
                                Every Serenity safari is bespoke. Speak with our experts to begin designing your exclusive African expedition.
                            </p>
                            
                            <Button size="lg" className="h-16 px-10 rounded-full bg-primary text-white hover:bg-primary/90 text-sm font-bold tracking-widest uppercase transition-all hover:scale-105" asChild>
                                <Link href="/contact">
                                    Speak with an Expert
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            className="hidden lg:block relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                src="/images/hero/slide-2.webp"
                                alt="Safari Expert"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-40" />
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}
