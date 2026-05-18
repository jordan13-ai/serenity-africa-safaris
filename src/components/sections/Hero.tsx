"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black">
            {/* Background Media */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105"
                >
                    <source src="/video/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <span className="text-white/80 text-[12px] font-bold tracking-[0.4em] uppercase mb-8 block">
                        Exclusive Boutique Safaris
                    </span>
                    <h1 className="text-5xl md:text-8xl font-serif text-white font-light mb-12 leading-[1.1]">
                        The Art of <br />
                        <span className="italic font-normal">African Serenity</span>
                    </h1>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <Link
                            href="/safari"
                            className="px-10 py-4 bg-primary text-white font-bold tracking-widest uppercase text-[12px] hover:bg-primary/90 transition-all hover:scale-105"
                        >
                            Discover the Collection
                        </Link>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 flex flex-col items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <div className="w-[1px] h-20 bg-gradient-to-b from-white/80 to-transparent relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full bg-white"
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        />
                    </div>
                    <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
                </motion.div>
            </div>
        </section>
    )
}
