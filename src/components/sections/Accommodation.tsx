"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function Accommodation() {
    const accommodations = [
        {
            slug: "serenity-camp-lodges",
            title: "Serenity Camp & Lodges",
            description: "Our signature property in the heart of Serengeti. Authentic luxury amid the Nyabogati Kopjes.",
            image: "/images/accommodation/serenity-lodge/Serenity_africa_lodge1.webp",
            features: ["Signature", "Central Serengeti"]
        },
        {
            slug: "exclusive-tented-camps",
            title: "Exclusive Tented Camps",
            description: "Canvas walls, en-suite bathrooms, and the sounds of the African night.",
            image: "/images/accommodation/serenity-lodge/Serenity_africa_lodge2.webp",
            features: ["Canvas Walls", "Close to Nature"]
        },
        {
            slug: "luxury-safari-lodges",
            title: "Luxury Safari Lodges",
            description: "Premium amenities including infinity pools and panoramic savannah views.",
            image: "/images/accommodation/serenity-lodge/Serenity_africa_lodge3.webp",
            features: ["Infinity Pools", "Spa Services"]
        },
        {
            slug: "treehouse-suites",
            title: "Treehouse Suites",
            description: "Elevated luxury nestled in ancient baobab trees with private decks.",
            image: "/images/accommodation/serenity_africa_safaris_accommodation-3.webp",
            features: ["Private Decks", "Elevated Views"]
        }
    ]

    return (
        <section className="py-24 md:py-32 bg-[#FDFBF7] overflow-hidden">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
                            Where You'll Stay
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-4">
                            Refined Comfort in the Wild
                        </h2>
                        <p className="text-gray-500 font-light text-sm max-w-lg">
                            Retreat to sanctuaries of exceptional luxury. We partner only with properties that share our commitment to excellence and authentic hospitality.
                        </p>
                    </div>
                    <Link 
                        href="/accommodation" 
                        className="inline-block group shrink-0"
                    >
                        <span className="text-[11px] font-bold tracking-widest uppercase text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 transition-all group-hover:pr-4 group-hover:border-primary group-hover:text-primary">
                            View All Lodges
                        </span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {accommodations.map((acc, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group h-full"
                        >
                            <Link href={`/accommodation/${acc.slug}`} className="flex flex-col h-full cursor-pointer">
                                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] mb-6 shadow-sm">
                                    <Image
                                        src={acc.image}
                                        alt={acc.title}
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[1.5rem]" />
                                </div>
                                
                                <h3 className="text-xl font-serif text-[#1A1A1A] mb-2 group-hover:text-primary transition-colors">{acc.title}</h3>
                                <p className="text-gray-500 font-light text-xs leading-relaxed mb-4 flex-grow">
                                    {acc.description}
                                </p>
                                
                                <ul className="flex flex-wrap gap-2 mt-auto">
                                    {acc.features.map((feature, i) => (
                                        <li key={i} className="text-[9px] font-bold tracking-widest uppercase text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
