"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function Hero() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        // Hard fallback — always reveal after 6s even if onLoad never fires
        const fallback = setTimeout(() => setVisible(true), 6000)
        return () => clearTimeout(fallback)
    }, [])

    function onIframeLoad() {
        // Wait 3.5s after iframe load — YouTube shows its initial controls
        // for ~2s, this ensures they've auto-hidden before the overlay clears
        setTimeout(() => setVisible(true), 3500)
    }

    return (
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/2SakZbB8fuQ?autoplay=1&mute=1&loop=1&playlist=2SakZbB8fuQ&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&disablekb=1&fs=0&cc_load_policy=0"
                        allow="autoplay; fullscreen"
                        onLoad={onIframeLoad}
                        className="absolute top-1/2 left-1/2 opacity-70"
                        style={{
                            transform: "translate(-50%, -50%) scale(1.15)",
                            width: "177.78vh",
                            minWidth: "100%",
                            height: "56.25vw",
                            minHeight: "100%",
                            border: "none",
                            pointerEvents: "none",
                        }}
                        title="Serenity Africa Safaris"
                    />
                </div>

                {/* Transparent pointer-events blocker — sits above iframe to prevent
                    any hover that could wake YouTube's control overlay */}
                <div className="absolute inset-0 pointer-events-auto" style={{ zIndex: 1 }} />

                {/* Black cover — hides YouTube controls while they auto-dismiss on load */}
                <div
                    className="absolute inset-0 bg-black pointer-events-none"
                    style={{
                        zIndex: 2,
                        opacity: visible ? 0 : 1,
                        transition: visible ? "opacity 1.2s ease-in-out" : "none",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" style={{ zIndex: 3 }} />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4" style={{ zIndex: 10 }}>
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
                            className="px-10 py-4 bg-primary text-white font-bold tracking-widest uppercase text-[12px] hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none focus-visible:scale-105 transition-all hover:scale-105"
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
