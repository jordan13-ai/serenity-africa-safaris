"use client"

import { motion } from "framer-motion"

const hotspots = [
    { name: "Serengeti", top: "25%", left: "35%", description: "Endless plains and the Great Migration." },
    { name: "Ngorongoro", top: "45%", left: "55%", description: "A wildlife sanctuary within a volcanic caldera." },
    { name: "Zanzibar", top: "75%", left: "85%", description: "Pristine beaches and spice-scented air." },
    { name: "Kilimanjaro", top: "35%", left: "70%", description: "The snow-capped roof of Africa." }
]

export function SafariMap() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Map Visual */}
                    <div className="relative aspect-square md:aspect-video bg-[#F9F7F4] rounded-[3rem] p-12 overflow-hidden flex items-center justify-center border border-gray-100">
                        {/* Stylized SVG Map (Simplified Tanzania shape) */}
                        <svg className="w-full h-full text-gray-200 opacity-50" viewBox="0 0 500 500" fill="currentColor">
                            <path d="M100,50 L400,50 L450,200 L400,450 L100,450 L50,200 Z" />
                        </svg>

                        {/* Interactive Hotspots */}
                        {hotspots.map((spot, i) => (
                            <motion.div
                                key={i}
                                className="absolute group cursor-pointer"
                                style={{ top: spot.top, left: spot.left }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + (i * 0.2) }}
                            >
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute w-8 h-8 bg-primary/20 rounded-full animate-ping" />
                                    <div className="relative w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg" />
                                    
                                    {/* Tooltip */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none w-48 text-center bg-white p-4 shadow-xl rounded-2xl">
                                        <h4 className="font-bold text-xs uppercase tracking-widest mb-1 text-primary">{spot.name}</h4>
                                        <p className="text-[10px] text-gray-500 leading-tight">{spot.description}</p>
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Text Content */}
                    <div>
                        <span className="text-primary text-[12px] font-bold tracking-[0.4em] uppercase mb-4 block">
                            Explore the Territory
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-8">
                            A Land of <br />
                            <span className="italic">Infinite Discovery</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-12">
                            From the sprawling savannahs of the North to the secret archipelagos of the Indian Ocean, our territory spans the most pristine corners of Tanzania.
                        </p>
                        
                        <div className="space-y-8">
                            <MapFeature 
                                number="01"
                                title="The Northern Circuit"
                                desc="Serengeti, Ngorongoro, and the home of the Great Migration."
                            />
                            <MapFeature 
                                number="02"
                                title="The Spice Islands"
                                desc="Zanzibar and private escapes like Mnemba and Fanjove."
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

function MapFeature({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="flex gap-6 items-start">
            <span className="text-primary/30 font-serif text-3xl font-light">{number}</span>
            <div>
                <h4 className="text-[13px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">{title}</h4>
                <p className="text-sm text-gray-500">{desc}</p>
            </div>
        </div>
    )
}
