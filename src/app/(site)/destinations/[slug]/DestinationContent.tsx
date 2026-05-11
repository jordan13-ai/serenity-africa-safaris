"use client"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, ArrowLeft, MapPin, Clock, Users, Calendar, ChevronRight, X } from "lucide-react"

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
}

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
}

export function DestinationContent({ data, slug }: { data: Record<string, any>, slug: string }) {
    const heroRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
    const [lightboxImg, setLightboxImg] = useState<string | null>(null)

    return (
        <main className="min-h-screen bg-[#0E0E0E] text-white overflow-x-hidden">

            {/* ─── CINEMATIC HERO ─────────────────────────────────────────────── */}
            <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
                <motion.div className="absolute inset-0" style={{ y: heroY }}>
                    <Image
                        src={data.heroImage}
                        alt={data.fullName}
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                    />
                </motion.div>
                {/* Gradient layers */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/20 to-[#0E0E0E]/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E]/50 via-transparent to-transparent" />

                {/* Back nav */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute top-8 left-8 z-20"
                >
                    <Link
                        href="/destinations"
                        className="inline-flex items-center gap-2 text-white/50 text-[10px] font-bold tracking-[0.25em] uppercase hover:text-primary transition-colors group"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                        All Destinations
                    </Link>
                </motion.div>

                {/* Hero Content */}
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 container max-w-7xl mx-auto px-6 pb-20 md:pb-28"
                >
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span variants={fadeInUp} className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-5 block">
                            {data.heroSubtitle}
                        </motion.span>
                        <motion.h1 variants={fadeInUp} className="text-6xl sm:text-8xl md:text-[10rem] font-serif text-white leading-[0.9] mb-6 tracking-tight">
                            {data.name}
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-white/60 text-xl md:text-2xl font-serif italic mb-10 max-w-xl">
                            {data.tagline}
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6">
                            <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-widest uppercase">
                                <MapPin className="w-3.5 h-3.5 text-primary" />
                                {data.location}
                            </div>
                            <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-widest uppercase">
                                <Clock className="w-3.5 h-3.5 text-primary" />
                                {data.duration}
                            </div>
                            <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-widest uppercase">
                                <Calendar className="w-3.5 h-3.5 text-primary" />
                                {data.travelTime}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 opacity-40">
                    <div className="text-[8px] tracking-[0.3em] uppercase text-white rotate-90 mb-4">Scroll</div>
                    <div className="w-px h-16 bg-white/30 relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-primary"
                            animate={{ height: ["0%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </div>
            </section>

            {/* ─── STATS BAR ──────────────────────────────────────────────────── */}
            <section className="bg-[#161616] border-t border-white/5">
                <div className="container max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                        {data.stats.map((stat: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="py-8 px-6 text-center"
                            >
                                <div className="text-2xl md:text-3xl font-serif text-white mb-1">{stat.value}</div>
                                <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/30">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── EDITORIAL INTRO ────────────────────────────────────────────── */}
            <section className="py-28 md:py-40 bg-[#0E0E0E]">
                <div className="container max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        {/* Text */}
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:col-span-5 order-2 lg:order-1"
                        >
                            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
                                <div className="w-8 h-px bg-primary" />
                                <span className="text-primary text-[9px] font-bold tracking-[0.4em] uppercase">The Destination</span>
                            </motion.div>
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
                                {data.fullName} <br />
                                <span className="italic text-white/40">{data.tagline}</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-white/50 leading-relaxed font-light mb-6">
                                {data.description}
                            </motion.p>
                            <motion.p variants={fadeInUp} className="text-white/35 leading-relaxed font-light text-sm">
                                {data.longDescription}
                            </motion.p>
                            <motion.div variants={fadeInUp} className="mt-12">
                                <Link
                                    href="/request-quote"
                                    className="group inline-flex items-center gap-4 bg-primary text-white px-10 py-5 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-white hover:text-[#0E0E0E] transition-all duration-300"
                                >
                                    Plan My {data.name} Safari
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Portrait image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:col-span-7 order-1 lg:order-2"
                        >
                            <div className="relative">
                                {/* Main image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={data.portraitImage}
                                        alt={data.fullName}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/40 to-transparent" />
                                </div>
                                {/* Floating accent card */}
                                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 w-48 hidden md:block">
                                    <div className="text-[8px] font-bold tracking-[0.3em] uppercase mb-1 text-white/60">Best Season</div>
                                    <div className="text-sm font-serif leading-snug">{data.bestTime.split(".")[0]}</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── HIGHLIGHTS ─────────────────────────────────────────────────── */}
            <section className="py-28 bg-[#111111]">
                <div className="container max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-4"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-px bg-primary" />
                                <span className="text-primary text-[9px] font-bold tracking-[0.4em] uppercase">Why Visit</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                                What Makes {data.name} <span className="italic text-white/40">Unmissable</span>
                            </h2>
                        </motion.div>

                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
                            {data.highlights.map((item: string, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.08 }}
                                    className="bg-[#111111] p-8 group hover:bg-[#161616] transition-colors duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        </div>
                                        <p className="text-white/50 font-light text-sm leading-relaxed group-hover:text-white/70 transition-colors">{item}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SIGNATURE EXPERIENCES ──────────────────────────────────────── */}
            <section className="py-28 md:py-40 bg-[#0E0E0E] relative overflow-hidden">
                {/* Background texture */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

                <div className="container max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-8 h-px bg-primary" />
                            <span className="text-primary text-[9px] font-bold tracking-[0.4em] uppercase">Curated Experiences</span>
                            <div className="w-8 h-px bg-primary" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif text-white">
                            Signature <span className="italic text-white/40">Moments</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.experiences.map((exp: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.1 }}
                                className="group relative border border-white/5 hover:border-primary/30 transition-all duration-500 p-8 md:p-10 bg-[#111111]/50 hover:bg-[#161616] cursor-pointer"
                            >
                                <div className="flex items-start gap-6">
                                    <span className="text-4xl flex-shrink-0">{exp.icon}</span>
                                    <div>
                                        <h3 className="text-xl font-serif text-white mb-3 group-hover:text-primary transition-colors duration-300">{exp.name}</h3>
                                        <p className="text-white/40 font-light text-sm leading-relaxed group-hover:text-white/60 transition-colors">{exp.desc}</p>
                                    </div>
                                </div>
                                {/* Corner accent */}
                                <div className="absolute bottom-0 right-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-700" />
                                <div className="absolute bottom-0 right-0 w-px h-0 bg-primary group-hover:h-full transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── IMMERSIVE GALLERY ──────────────────────────────────────────── */}
            <section className="bg-[#0E0E0E] pb-28">
                <div className="container max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex items-end justify-between mb-10"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-8 h-px bg-primary" />
                                <span className="text-primary text-[9px] font-bold tracking-[0.4em] uppercase">Visual Journey</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif text-white">
                                Through the <span className="italic text-white/40">Lens</span>
                            </h2>
                        </div>
                        <span className="text-white/20 text-[9px] font-bold tracking-widest uppercase hidden md:block">Click to expand</span>
                    </motion.div>

                    {/* Asymmetric Masonry Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {data.gallery.map((img: string, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.97 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.07 }}
                                onClick={() => setLightboxImg(img)}
                                className={`relative overflow-hidden cursor-pointer group ${
                                    i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-[560px]" :
                                    i === 3 ? "col-span-2 md:col-span-1 aspect-video md:aspect-auto md:h-[272px]" :
                                    "aspect-square md:h-[272px]"
                                }`}
                            >
                                <Image
                                    src={img}
                                    alt={`${data.fullName} gallery ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                                        <span className="text-white text-xs">⤢</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── BEST TIME & PLANNING ───────────────────────────────────────── */}
            <section className="py-28 bg-[#111111]">
                <div className="container max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[3/4] overflow-hidden"
                        >
                            <Image
                                src={data.experienceImage}
                                alt={`${data.fullName} experience`}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6">
                                    <div className="text-[8px] font-bold tracking-[0.3em] uppercase text-white/40 mb-2">Planning Note</div>
                                    <p className="text-white/80 text-sm font-light italic leading-relaxed">&ldquo;{data.bestTime}&rdquo;</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
                                <div className="w-8 h-px bg-primary" />
                                <span className="text-primary text-[9px] font-bold tracking-[0.4em] uppercase">Plan Your Visit</span>
                            </motion.div>
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
                                When to Visit <br /><span className="italic text-white/40">{data.name}</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-white/40 font-light leading-relaxed mb-12">
                                {data.bestTime} Our safari designers will tailor your trip around the optimal wildlife windows to ensure every moment exceeds your expectations.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="space-y-4 mb-12">
                                {[
                                    { icon: <MapPin className="w-4 h-4" />, label: "Location", value: data.location },
                                    { icon: <Clock className="w-4 h-4" />, label: "Recommended Stay", value: data.duration },
                                    { icon: <Calendar className="w-4 h-4" />, label: "Access", value: data.travelTime },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 border-b border-white/5 pb-4">
                                        <div className="text-primary">{item.icon}</div>
                                        <span className="text-white/25 text-[9px] font-bold tracking-widest uppercase w-24 flex-shrink-0">{item.label}</span>
                                        <span className="text-white/60 text-sm font-light">{item.value}</span>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/request-quote"
                                    className="group flex items-center justify-center gap-3 bg-primary text-white px-8 py-5 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-white hover:text-[#0E0E0E] transition-all duration-300"
                                >
                                    Book This Safari
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center gap-3 border border-white/10 text-white/60 px-8 py-5 text-[10px] font-bold tracking-[0.25em] uppercase hover:border-primary hover:text-white transition-all duration-300"
                                >
                                    Ask an Expert
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── FULL BLEED CTA ─────────────────────────────────────────────── */}
            <section className="relative py-40 overflow-hidden">
                <Image
                    src={data.gallery[1] || data.heroImage}
                    alt={data.fullName}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0E0E0E]/80" />
                <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-primary text-[9px] font-bold tracking-[0.5em] uppercase mb-6 block">Ready to Experience It?</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
                            Your {data.name} <br />
                            <span className="italic text-white/40">Safari Awaits</span>
                        </h2>
                        <p className="text-white/40 font-light max-w-2xl mx-auto mb-12 text-lg">
                            Let our expert safari designers craft an experience around {data.fullName} that will stay with you long after you return home.
                        </p>
                        <Link
                            href="/request-quote"
                            className="group inline-flex items-center gap-4 bg-primary text-white px-14 py-6 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-[#0E0E0E] transition-all duration-300"
                        >
                            Start Planning Now
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ─── LIGHTBOX ───────────────────────────────────────────────────── */}
            {lightboxImg && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setLightboxImg(null)}
                >
                    <button
                        onClick={() => setLightboxImg(null)}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <div className="relative max-w-5xl w-full aspect-video" onClick={e => e.stopPropagation()}>
                        <Image src={lightboxImg} alt="Gallery" fill className="object-contain" />
                    </div>
                </motion.div>
            )}
        </main>
    )
}
