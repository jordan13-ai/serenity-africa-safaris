"use client"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

export function VideoSection() {
    const [videoFailed, setVideoFailed] = useState(false)
    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                {!videoFailed && (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        poster="/images/destinations/serengeti/serengeti-4.webp"
                        className="absolute inset-0 w-full h-full object-cover scale-105"
                        onError={() => setVideoFailed(true)}
                    >
                        <source src="/video/hero-video.mp4" type="video/mp4" />
                    </video>
                )}
                {videoFailed && (
                    <Image
                        src="/images/destinations/serengeti/serengeti-4.webp"
                        alt="Serengeti landscape"
                        fill
                        className="object-cover scale-105"
                    />
                )}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
                
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-white tracking-[0.4em] uppercase text-xs font-bold mb-4 block opacity-80">
                        The Call of the Wild
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
                        Experience the raw <br className="hidden md:block" />
                        <span className="italic opacity-90">heartbeat</span> of Africa
                    </h2>
                </motion.div>
            </div>
        </section>
    )
}
