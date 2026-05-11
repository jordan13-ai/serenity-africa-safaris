"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, MapPin, Coffee, Droplets, Mountain, Camera, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const dayTrips = [
    {
        title: "Kilimanjaro Day Hike",
        slug: "kili-hiking",
        description: "Hike to Mandara Hut through rainforest, or explore Materuni Waterfalls and Lake Chala. Multiple options available!",
        image: "/images/destinations/kilimanjaro/kilimanjaro-4.webp",
        duration: "Half to full day",
        difficulty: "Easy-Moderate",

        highlights: ["Mandara Hut", "Materuni Falls", "Lake Chala", "Hot Springs"],
        icon: Mountain
    },
    {
        title: "West Kilimanjaro (Shira Plateau)",
        slug: "west-kilimanjaro",
        description: "Explore Kilimanjaro's western alpine wonderland. Trek across the stunning Shira Plateau at 3,500-3,800m elevation.",
        image: "/images/destinations/kilimanjaro/kilimanjaro-1.webp",
        duration: "Full day (8-10 hours)",
        difficulty: "Moderate",

        highlights: ["Shira Plateau", "Cathedral Point", "Alpine landscape", "High altitude"],
        icon: Mountain
    },
    {
        title: "One-Day Safari",
        slug: "one-day-safari",
        description: "Visit Arusha National Park, Tarangire, or Ngorongoro for a full game drive experience in one day.",
        image: "/images/destinations/ngorongoro/ngorongoro-5.webp",
        duration: "10-12 hours",
        difficulty: "Easy",

        highlights: ["Game drives", "Big 5 viewing", "Packed lunch", "Professional guide"],
        icon: Camera
    },
    {
        title: "Chemka Hot Springs",
        slug: "moshi-excursions",
        description: "Swim in crystal-clear, naturally heated springs surrounded by lush vegetation. Perfect for relaxation.",
        image: "/images/destinations/kilimanjaro/kilimanjaro-5.webp",
        duration: "4-5 hours",
        difficulty: "Easy",

        highlights: ["Natural hot springs", "Swimming", "Picnic lunch", "Scenic drive"],
        icon: Droplets
    },
    {
        title: "Cultural Village Tours",
        slug: "cultural-tours",
        description: "Visit Maasai, Chagga, or Meru villages. Learn traditional customs, see homesteads, and participate in daily activities.",
        image: "/images/destinations/tarangire/tarangire-3.webp",
        duration: "4-6 hours",
        difficulty: "Easy",

        highlights: ["Village visits", "Traditional ceremonies", "Local crafts", "Authentic meals"],
        icon: Heart
    },
    {
        title: "Coffee Plantation Tour",
        slug: "arusha-excursions",
        description: "Learn the coffee-making process from bean to cup. Includes tasting and traditional Chagga lunch.",
        image: "/images/destinations/kilimanjaro/kilimanjaro-6.webp",
        duration: "3-4 hours",
        difficulty: "Easy",

        highlights: ["Coffee roasting", "Bean picking", "Tasting session", "Local lunch"],
        icon: Coffee
    }
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

export default function DayTripsPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            {/* HERO SECTION */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero/slide-1.webp"
                        alt="Tanzania Day Trips"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 via-[#1A1A1A]/40 to-[#FDFBF7]" />

                <div className="relative z-10 container max-w-7xl mx-auto px-6 text-center">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto flex flex-col items-center"
                    >
                        <motion.span variants={fadeInUp} className="text-primary text-[11px] font-bold tracking-[0.3em] uppercase block mb-6 flex items-center gap-4">
                            <div className="w-8 h-[1px] bg-primary"></div>
                            Curated Experiences
                            <div className="w-8 h-[1px] bg-primary"></div>
                        </motion.span>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8">
                            One Day <br />
                            <span className="italic text-white/80">Adventures</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl text-white/80 font-light mb-12 max-w-2xl leading-relaxed">
                            Short on time? Experience the magic of Tanzania in a single day. From immersive coffee tours to thrilling game drives.
                        </motion.p>
                        <motion.div variants={fadeInUp}>
                            <Link 
                                href="/contact"
                                className="group inline-flex items-center gap-4 bg-primary text-white px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all"
                            >
                                Plan Your Excursion
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* DAY TRIPS GRID */}
            <section className="py-32">
                <div className="container max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">Our Collection</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-6">
                            Choose Your Experience
                        </h2>
                        <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
                            Perfect for layovers, pre or post-safari relaxation, or when you simply want a taste of the extraordinary.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {dayTrips.map((trip, index) => (
                            <motion.div 
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="group relative bg-white rounded-none overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <Image
                                        src={trip.image}
                                        alt={trip.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="absolute top-6 right-6">
                                        <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 delay-100">
                                            <trip.icon className="text-primary w-5 h-5" />
                                        </div>
                                    </div>
                                    
                                    <div className="absolute bottom-6 left-6">
                                        <span className="bg-[#1A1A1A] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2">
                                            {trip.difficulty}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 group-hover:text-primary transition-colors">{trip.title}</h3>
                                    <p className="text-gray-500 font-light text-sm leading-relaxed mb-8 flex-1">
                                        {trip.description}
                                    </p>
                                    
                                    <div className="border-t border-gray-100 pt-6 mb-8">
                                            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
                                                <Clock className="w-4 h-4 text-primary" />
                                                {trip.duration}
                                            </div>
                                        <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                                            {trip.highlights.map((highlight, i) => (
                                                <div key={i} className="text-xs text-gray-500 font-light flex items-start gap-2">
                                                    <div className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                                                    <span>{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <Link 
                                        href={`/all-day-trips/${trip.slug}`}
                                        className="inline-flex items-center justify-center gap-3 w-full border border-[#1A1A1A] text-[#1A1A1A] py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-white transition-all group/btn"
                                    >
                                        Discover More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE DAY TRIPS */}
            <section className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/destinations/ngorongoro/ngorongoro-5.webp')] bg-cover bg-fixed bg-center mix-blend-luminosity" />
                <div className="container max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.span variants={fadeInUp} className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">The Benefits</motion.span>
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight">
                                Why Opt For <br />
                                <span className="italic text-white/70">A Day Excursion?</span>
                            </motion.h2>
                            
                            <div className="space-y-8">
                                {[
                                    { title: "Perfect for Short Stays", desc: "Maximize your limited time in Tanzania with focused, high-quality experiences designed to deliver maximum impact." },
                                    { title: "Budget-Friendly Intro", desc: "Get a taste of authentic Tanzania without committing to the budget of a multi-day safari or extended trek." },
                                    { title: "Seamless Add-Ons", desc: "Enhance your main safari or Kilimanjaro climb with cultural immersion or a day of pure relaxation at the hot springs." },
                                    { title: "Ultimate Flexibility", desc: "Available daily with morning or afternoon departure options to perfectly fit your travel schedule." }
                                ].map((item, i) => (
                                    <motion.div variants={fadeInUp} key={i} className="flex gap-6">
                                        <div className="mt-1">
                                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-primary font-serif">
                                                0{i+1}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                                            <p className="text-white/50 font-light text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative h-[600px] hidden lg:block"
                        >
                            <Image
                                src="/images/intro/day-trips-card.webp"
                                alt="Day Trips"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="py-32 bg-white">
                <div className="container max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-[#1A1A1A] mb-4">
                            What to Expect
                        </h2>
                        <p className="text-gray-500 font-light">Everything you need to know about your excursion inclusions.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#FDFBF7] p-10 border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-serif text-[#1A1A1A]">Always Included</h3>
                            </div>
                            <ul className="space-y-4">
                                {["Professional English-speaking guide", "Private transportation from/to your hotel", "All park entry and village fees", "Picnic lunch or traditional hot meal", "Unlimited bottled drinking water"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-600 font-light text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#FDFBF7] p-10 border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                                    <span className="text-red-600 text-xl font-bold">×</span>
                                </div>
                                <h3 className="text-xl font-serif text-[#1A1A1A]">Not Included</h3>
                            </div>
                            <ul className="space-y-4">
                                {["Gratuities for your guide/driver", "Personal expenses and souvenirs", "Comprehensive travel insurance", "Alcoholic beverages", "International or domestic flights"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-500 font-light text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-300 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-32 bg-[#FDFBF7] text-center border-t border-gray-100">
                <div className="container max-w-3xl mx-auto px-6">
                    <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase block mb-6">Ready to Explore?</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-8">
                        Secure Your Date Today
                    </h2>
                    <p className="text-lg text-gray-500 font-light mb-12">
                        Our day trips are available daily. Last-minute bookings are welcome, subject to availability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link 
                            href="/contact"
                            className="bg-primary text-white px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all"
                        >
                            Book Your Excursion
                        </Link>
                        <Link 
                            href="/safari"
                            className="border border-[#1A1A1A] text-[#1A1A1A] px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-white transition-all"
                        >
                            View Multi-Day Safaris
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
