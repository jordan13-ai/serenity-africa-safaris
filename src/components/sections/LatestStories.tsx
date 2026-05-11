"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const stories = [
    {
        id: 1,
        title: "A Photographer's Guide to the Serengeti",
        category: "Photography",
        date: "Aug 15, 2024",
        image: "/images/destinations/serengeti/serengeti-27.webp",
    },
    {
        id: 2,
        title: "Top 5 Luxury Lodges for a Romantic Safari",
        category: "Romance",
        date: "Aug 12, 2024",
        image: "/images/destinations/zanzibar/zanzibar-20.webp"
    },
    {
        id: 3,
        title: "Climbing Kilimanjaro: Which Route is Right?",
        category: "Adventure",
        date: "Aug 10, 2024",
        image: "/images/destinations/kilimanjaro/kilimanjaro-12.webp"
    },
    {
        id: 4,
        title: "How Your Safari Supports Local Communities",
        category: "Sustainability",
        date: "Aug 08, 2024",
        image: "/images/destinations/ngorongoro/ngorongoro-14.webp"
    }
]

export function LatestStories() {
    return (
        <section className="py-20 md:py-28 bg-white border-t border-gray-100">
            <div className="container px-6 mx-auto">
                
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-3 block">
                            Expert Storytelling
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A]">
                            Latest <span className="italic text-gray-400">Stories</span>
                        </h2>
                    </div>
                    <Link href="/blog" className="group flex items-center text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A] hover:text-primary transition-colors">
                        View Journal
                        <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {stories.map((story, idx) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group flex flex-col"
                        >
                            <Link href={`/blog/${story.id}`} className="block overflow-hidden rounded-2xl aspect-[4/3] mb-6 relative">
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                            </Link>
                            
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-primary font-bold text-[9px] tracking-widest uppercase">
                                    {story.category}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                <span className="text-gray-400 font-medium text-[10px] tracking-wider uppercase">
                                    {story.date}
                                </span>
                            </div>
                            
                            <Link href={`/blog/${story.id}`}>
                                <h3 className="text-lg md:text-xl font-serif text-[#1A1A1A] leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                    {story.title}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
