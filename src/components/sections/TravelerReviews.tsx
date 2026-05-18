"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Star, MessageSquare } from "lucide-react"

interface Review {
  id: string; name: string; location?: string; rating: number
  quote: string; trip?: string; avatar?: string; featured: boolean
}

const STATIC_REVIEWS: Review[] = [
  { id: "1", name: "The Kensington Family", location: "London, UK", rating: 5, quote: "An ethereal experience that redefined what luxury means to us. Truly silent and serene.", trip: "10-Day Serengeti & Zanzibar", featured: true },
  { id: "2", name: "Julian & Sarah", location: "New York, USA", rating: 5, quote: "The attention to detail was beyond anything we've experienced in our travels.", trip: "Honeymoon Safari", featured: false },
  { id: "3", name: "Mark Thompson", location: "Sydney, Australia", rating: 5, quote: "Waking up to the sounds of the Serengeti is a memory we will treasure forever.", trip: "Photographic Expedition", featured: false },
]

const FALLBACK_IMAGES = [
  "/images/destinations/serengeti/serengeti-22.webp",
  "/images/destinations/zanzibar/zanzibar-14.webp",
  "/images/destinations/ngorongoro/ngorongoro-11.webp",
]

export function TravelerReviews() {
    const [reviews, setReviews] = useState<Review[]>(STATIC_REVIEWS)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
      fetch("/api/reviews")
        .then((r) => r.json())
        .then((data: Review[]) => { if (data?.length > 0) setReviews(data) })
        .catch(() => {})
    }, [])

    const active = reviews[activeIndex] ?? reviews[0]
    const bgImage = active?.avatar || FALLBACK_IMAGES[activeIndex % FALLBACK_IMAGES.length]

    return (
        <section className="py-16 md:py-24 bg-[#FDFBF7]">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-primary text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">
                        Signature Moments
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
                        Voices of the <span className="italic text-gray-500">Serene</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-sm">
                        <AnimatePresence mode="wait">
                            <motion.div key={activeIndex} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
                                <Image src={bgImage} alt={active.name} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute inset-x-8 bottom-10">
                                    <div className="flex text-primary mb-4">
                                        {Array.from({ length: active.rating }).map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" className="mr-1" />
                                        ))}
                                    </div>
                                    <p className="text-xl md:text-2xl font-serif text-white mb-6 italic leading-relaxed">"{active.quote}"</p>
                                    <span className="text-white/80 text-[11px] font-bold tracking-[0.2em] uppercase">— {active.name}</span>
                                    {active.location && <span className="text-white/50 text-[10px] block mt-1">{active.location}</span>}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                        <div className="space-y-4 mb-8">
                            {reviews.slice(0, 4).map((review, index) => (
                                <div key={review.id} onClick={() => setActiveIndex(index)}
                                    className={`p-5 md:p-6 rounded-[1.5rem] cursor-pointer transition-all duration-500 border ${activeIndex === index ? "bg-white border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] scale-[1.02]" : "bg-transparent border-transparent hover:bg-white/50"}`}>
                                    <p className={`font-serif text-base md:text-lg leading-relaxed mb-4 transition-colors duration-500 ${activeIndex === index ? "text-[#1A1A1A]" : "text-gray-400"}`}>
                                        "{review.quote}"
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className={`text-[12px] font-bold tracking-widest uppercase transition-colors duration-500 ${activeIndex === index ? "text-[#1A1A1A]" : "text-gray-400"}`}>{review.name}</h4>
                                            {review.trip && <span className="text-[11px] text-gray-400 font-light block mt-1">{review.trip}</span>}
                                        </div>
                                        <div className="flex gap-0.5">
                                            {Array.from({ length: review.rating }).map((_, i) => (
                                                <Star key={i} className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MessageSquare className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-[#1A1A1A] font-serif text-xl">Share Your Experience</h4>
                                    <p className="text-gray-500 text-sm font-light mt-1">Help others discover the magic of Serenity.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="#" className="flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl border border-gray-200 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 group">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                                    <span className="text-[11px] font-bold tracking-widest uppercase">Google</span>
                                </Link>
                                <Link href="#" className="flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl border border-gray-200 hover:border-[#34E0A1] hover:bg-[#34E0A1] transition-all duration-300">
                                    <span className="text-[11px] font-bold tracking-widest uppercase">TripAdvisor</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
