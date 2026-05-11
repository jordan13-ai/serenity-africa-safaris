"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
}

export function AccommodationDetailContent({ data }: { data: Record<string, any> }) {
    return (
        <main className="min-h-screen bg-[#FDFBF7]">
            {/* HERO */}
            <section className="relative h-[80vh] min-h-[600px] flex items-end justify-start overflow-hidden bg-[#1A1A1A]">
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover opacity-60 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent" />
                
                <div className="relative z-10 container max-w-7xl mx-auto px-6 pb-20">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <Link 
                            href="/accommodation"
                            className="inline-flex items-center gap-2 text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 hover:text-primary transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Accommodations
                        </Link>
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
                            {data.subtitle}
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
                            {data.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-24 lg:py-32">
                <div className="container max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        {/* LEFT COLUMN: DESCRIPTION */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-3xl font-serif text-[#1A1A1A] mb-8">
                                    A Sanctuary Crafted for <span className="italic">Immersive Living</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light italic">
                                    &ldquo;{data.description}&rdquo;
                                </p>
                                <p className="text-gray-500 leading-relaxed mb-12 font-light">
                                    {data.longDescription}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] mb-6 border-b border-gray-100 pb-4">Core Attributes</h3>
                                        <ul className="space-y-4">
                                            {data.features.map((feature: string, i: number) => (
                                                <li key={i} className="flex items-center gap-3 text-sm text-gray-500 font-light">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] mb-6 border-b border-gray-100 pb-4">Key Amenities</h3>
                                        <ul className="space-y-4">
                                            {data.amenities.map((amenity: string, i: number) => (
                                                <li key={i} className="flex items-center gap-3 text-sm text-gray-500 font-light">
                                                    <Check className="w-4 h-4 text-primary" />
                                                    {amenity}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN: QUICK BOOK/INQUIRE */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-white p-12 shadow-xl shadow-black/[0.02] border border-gray-50"
                            >
                                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-6">Experience this Sanctuary</h3>
                                <p className="text-gray-500 text-sm font-light mb-8 leading-relaxed">
                                    Ready to incorporate {data.title} into your dream Tanzania safari itinerary? Our safari designers are experts at weaving these luxury properties into seamless, unforgettable journeys.
                                </p>
                                
                                <div className="space-y-4">
                                    <Link 
                                        href="/request-quote"
                                        className="flex items-center justify-center gap-4 bg-primary text-white py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] transition-all duration-300 w-full"
                                    >
                                        Inquire About This Property
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    {data.externalLink && (
                                        <a 
                                            href={data.externalLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-4 border border-primary/20 text-primary py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300 w-full"
                                        >
                                            Visit Official Website
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    )}
                                    <Link 
                                        href="/contact"
                                        className="flex items-center justify-center gap-4 border border-gray-200 text-[#1A1A1A] py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#1A1A1A] transition-all duration-300 w-full"
                                    >
                                        Speak with a Safari Artisan
                                    </Link>
                                </div>

                                <div className="mt-12 pt-12 border-t border-gray-100 text-center">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 block mb-2">Sustainable Luxury</span>
                                    <p className="text-[11px] text-gray-400 font-light italic px-4">
                                        &ldquo;Serenity Africa Safaris partners exclusively with properties that prioritize environmental conservation and community empowerment.&rdquo;
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MINI GALLERY */}
            <section className="pb-24 lg:pb-32">
                <div className="container max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {data.gallery.map((img: string, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className={`relative overflow-hidden ${i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square md:aspect-auto'}`}
                            >
                                <Image
                                    src={img}
                                    alt={`${data.title} - Tanzania luxury safari accommodation gallery ${i + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MORE ACCOMMODATIONS CTA */}
            <section className="py-20 border-t border-gray-100">
                <div className="container max-w-7xl mx-auto px-6 text-center">
                    <Link 
                        href="/accommodation"
                        className="group inline-flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-primary transition-colors"
                    >
                        Discover All Luxury Lodging Sanctuaries in Tanzania
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </main>
    )
}
