"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const accommodations = [
    {
        slug: "serenity-camp-lodges",
        title: "Serenity Camp & Lodges",
        description: "Our signature property in the heart of the Seronera region. Nestled amid the Nyabogati Kopjes, this luxury tented sanctuary offers direct access to the Great Migration pathways and authentic Maasai-inspired elegance.",
        image: "/images/accommodation/serenity-lodge/Serenity_africa_lodge1.webp",
        features: ["Signature Property", "Central Serengeti", "Great Migration", "Maasai Style"],
        isSignature: true
    },
    {
        slug: "exclusive-tented-camps",
        title: "Exclusive Tented Camps",
        description: "Experience the romance of classic safaris without compromising on modern luxury. Our exclusive tented camps feature expansive canvas walls, en-suite bathrooms, and private verandas where you can listen to the authentic sounds of the African night while enjoying five-star service.",
        image: "/images/accommodation/serenity-lodge/Serenity_africa_lodge2.webp",
        features: ["Canvas Walls", "Private Veranda", "En-suite", "Authentic Experience"]
    },
    {
        slug: "luxury-safari-lodges",
        title: "Luxury Safari Lodges",
        description: "For those who seek the pinnacle of comfort, our luxury safari lodges offer unparalleled sophistication in the heart of the wild. Enjoy premium amenities including infinity pools, fine dining, and panoramic savannah views from your private suite.",
        image: "/images/accommodation/serenity-lodge/Serenity_africa_lodge3.webp",
        features: ["Infinity Pool", "Fine Dining", "Panoramic Views", "Luxury Suites"]
    },
    {
        slug: "treehouse-suites",
        title: "Treehouse Suites",
        description: "Elevated luxury nestled within ancient giant baobab and mahogany trees. These unique suites offer absolute privacy and breathtaking vantage points. Fall asleep under a canopy of stars on your private wooden deck, suspended safely above the African wilderness.",
        image: "/images/accommodation/serenity_africa_safaris_accommodation-3.webp",
        features: ["Private Decks", "Elevated Views", "Star Beds", "Absolute Privacy"]
    },
    {
        slug: "beachfront-villas",
        title: "Beachfront Villas",
        description: "The perfect conclusion to an exhilarating safari. Retreat to the pristine white sands of Zanzibar in a secluded oceanfront villa. Featuring private plunge pools, tropical palm gardens, and direct access to the turquoise waters of the Indian Ocean.",
        image: "/images/accommodation/serenity_africa_safaris_accommodation-4.webp",
        features: ["Ocean Views", "Plunge Pools", "White Sand", "Tropical Gardens"]
    }
]

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

export default function AccommodationPageContent() {
    return (
        <main className="min-h-screen bg-[#FDFBF7]">
            {/* HERO SECTION */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
                <Image
                    src="/images/accommodation/serenity-lodge/Serenity_africa_lodge1.webp"
                    alt="Luxury Safari Accommodation"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 via-[#1A1A1A]/40 to-[#1A1A1A]/80" />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="relative z-10 container max-w-5xl mx-auto px-6 text-center pt-20"
                >
                    <motion.div variants={fadeInUp} className="flex justify-center mb-6">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase flex items-center gap-4">
                            <div className="w-8 h-[1px] bg-primary"></div>
                            Where You&apos;ll Stay
                            <div className="w-8 h-[1px] bg-primary"></div>
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6">
                        Sanctuaries of <br />
                        <span className="italic text-white/70 font-light text-4xl md:text-6xl">the Wild</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-white/80 font-light leading-relaxed text-lg max-w-2xl mx-auto">
                        Retreat to sanctuaries of exceptional luxury. We partner only with properties that share our commitment to excellence, sustainability, and authentic hospitality.
                    </motion.p>
                </motion.div>
            </section>

            {/* EDITORIAL LISTINGS */}
            <section className="py-24 lg:py-32 overflow-hidden">
                <div className="container max-w-7xl mx-auto px-6 space-y-32">
                    {accommodations.map((acc, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
                                {/* IMAGE PANEL */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="w-full lg:w-1/2"
                                >
                                    <Link href={`/accommodation/${acc.slug}`} className="block group">
                                        <div className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden rounded-none">
                                            <Image
                                                src={acc.image}
                                                alt={acc.title}
                                                fill
                                                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                            <div className="absolute inset-0 border border-black/5 pointer-events-none" />
                                        </div>
                                    </Link>
                                </motion.div>

                                {/* TEXT PANEL */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={staggerContainer}
                                    className="w-full lg:w-1/2"
                                >
                                    <motion.span variants={fadeInUp} className="text-primary font-serif text-2xl italic block mb-4">
                                        {acc.isSignature ? "Our Signature Sanctuary" : `0${index}.`}
                                    </motion.span>
                                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-8 leading-tight">
                                        {acc.title}
                                    </motion.h2>
                                    <motion.div variants={fadeInUp} className="w-12 h-[1px] bg-primary mb-8" />
                                    <motion.p variants={fadeInUp} className="text-gray-500 font-light leading-relaxed text-lg mb-12">
                                        {acc.description}
                                    </motion.p>

                                    <motion.div variants={fadeInUp} className="mb-10">
                                        <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] mb-6">Signature Elements</h4>
                                        <ul className="flex flex-wrap gap-3">
                                            {acc.features.map((feature, i) => (
                                                <li key={i} className="text-[10px] font-bold tracking-widest uppercase text-gray-500 bg-white border border-gray-100 px-5 py-2.5 shadow-sm">
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    <motion.div variants={fadeInUp}>
                                        <Link
                                            href={`/accommodation/${acc.slug}`}
                                            className="inline-flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:text-primary hover:border-primary transition-all group"
                                        >
                                            Explore This Sanctuary
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-32 bg-[#1A1A1A] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </div>
                <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Your Dream Awaits</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Begin Crafting <span className="italic font-light opacity-80">Your Journey</span></h2>
                        <p className="text-white/60 font-light text-lg mb-12 max-w-2xl mx-auto">
                            Speak directly with our safari artisans to weave these exceptional properties into a bespoke itinerary designed exclusively for you.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/request-quote"
                                className="group inline-flex items-center justify-center gap-4 bg-primary text-white px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 w-full sm:w-auto"
                            >
                                Request Complimentary Quote
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="https://wa.me/255626371646"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-4 border border-white/20 text-white px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-white transition-all duration-300 w-full sm:w-auto"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
