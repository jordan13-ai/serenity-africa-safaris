"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Send, Calendar, Users, MapPin } from "lucide-react"

export function Experiences() {
    const experiences = [
        {
            title: "The Great Migration",
            description: "Witness the greatest wildlife spectacle on earth across the Serengeti plains.",
            fallbackImage: "/images/destinations/migration/migration-5.webp",
        },
        {
            title: "Balloon Safaris",
            description: "Float silently above the savannah at dawn with a champagne breakfast.",
            fallbackImage: "/images/experience/balloon safari/balloon-3.webp",
        },
        {
            title: "Cultural Encounters",
            description: "Engage respectfully with the Maasai and learn ancient traditions.",
            fallbackImage: "/images/experience/culture/culture-4.webp",
        },
        {
            title: "Honeymoon Escapes",
            description: "Private dinners under the stars in secluded luxury lodges.",
            fallbackImage: "/images/destinations/zanzibar/zanzibar-8.webp",
        }
    ]

    return (
        <section className="py-24 md:py-32 bg-[#FDFBF7] relative">
            <div className="container px-6 mx-auto">
                
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
                    
                    {/* Left Column: Experiences Grid */}
                    <div className="w-full lg:w-7/12">
                        <div className="mb-12">
                            <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">
                                Curated Moments
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">
                                Signature <span className="italic text-gray-500">Experiences</span>
                            </h2>
                            <p className="text-gray-500 leading-relaxed max-w-xl font-light">
                                Beyond the game drive. We curate extraordinary moments that transform a simple holiday into a profound, life-changing journey.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                            {experiences.map((exp, index) => (
                                <Link 
                                    key={index}
                                    href={exp.title === "The Great Migration" ? "/safari/great-migration" :
                                          exp.title === "Balloon Safaris" ? "/safari/balloon-safaris" :
                                          exp.title === "Cultural Encounters" ? "/safari/cultural-encounters" :
                                          "/safari/honeymoon-escapes"}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: index * 0.1 }}
                                        className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] cursor-pointer"
                                    >
                                        <Image
                                            src={exp.fallbackImage}
                                            alt={exp.title}
                                            fill
                                            className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                                        
                                        <div className="absolute inset-x-6 bottom-6 flex flex-col justify-end">
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <h3 className="text-xl md:text-2xl font-serif text-white mb-2">{exp.title}</h3>
                                                <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs font-light">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Sticky Form */}
                    <div className="w-full lg:w-5/12">
                        <div className="sticky top-32">
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
                            >
                                <div className="mb-8">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">Customize Your Safari</h3>
                                    <p className="text-gray-500 text-sm font-light">Let our safari experts design an itinerary tailored exactly to your rhythm.</p>
                                </div>

                                <form className="space-y-6">
                                    {/* Personal Details */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">First Name</label>
                                            <input 
                                                type="text" 
                                                className="w-full bg-transparent border-b border-gray-200 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300 font-light"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Last Name</label>
                                            <input 
                                                type="text" 
                                                className="w-full bg-transparent border-b border-gray-200 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300 font-light"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Email Address</label>
                                        <input 
                                            type="email" 
                                            className="w-full bg-transparent border-b border-gray-200 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300 font-light"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Trip Details */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2 relative">
                                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Travel Date</label>
                                            <div className="relative">
                                                <input 
                                                    type="text" 
                                                    className="w-full bg-transparent border-b border-gray-200 py-2 pl-7 text-sm text-[#1A1A1A] focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300 font-light"
                                                    placeholder="Month / Year"
                                                />
                                                <Calendar className="w-4 h-4 text-gray-400 absolute left-0 top-1/2 -translate-y-1/2" />
                                            </div>
                                        </div>
                                        <div className="space-y-2 relative">
                                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Travelers</label>
                                            <div className="relative">
                                                <input 
                                                    type="number" 
                                                    className="w-full bg-transparent border-b border-gray-200 py-2 pl-7 text-sm text-[#1A1A1A] focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300 font-light"
                                                    placeholder="2 Adults"
                                                />
                                                <Users className="w-4 h-4 text-gray-400 absolute left-0 top-1/2 -translate-y-1/2" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Destinations of Interest</label>
                                        <div className="relative">
                                            <select defaultValue="" className="w-full bg-transparent border-b border-gray-200 py-2 pl-7 text-sm text-gray-500 focus:outline-none focus:border-primary transition-colors font-light appearance-none cursor-pointer">
                                                <option value="" disabled>Select an option...</option>
                                                <option value="serengeti">Serengeti & Ngorongoro</option>
                                                <option value="zanzibar">Safari & Zanzibar Beach</option>
                                                <option value="kilimanjaro">Kilimanjaro Trekking</option>
                                                <option value="unsure">Not sure yet, please advise</option>
                                            </select>
                                            <MapPin className="w-4 h-4 text-gray-400 absolute left-0 top-1/2 -translate-y-1/2" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Message / Preferences</label>
                                        <textarea 
                                            rows={3}
                                            className="w-full bg-transparent border-b border-gray-200 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300 font-light resize-none"
                                            placeholder="Tell us about your dream safari..."
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="button"
                                        className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-primary transition-colors flex items-center justify-center gap-3 group mt-4"
                                    >
                                        Request Itinerary
                                        <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
