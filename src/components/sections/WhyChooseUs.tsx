"use client"
import { Award, Compass, Users, Leaf, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Compass,
        title: "Authentic Safari Experiences",
        description: "Experience Tanzania through carefully curated safaris designed by local experts who understand the true beauty of Africa."
    },
    {
        icon: Award,
        title: "Luxury & Comfort",
        description: "Enjoy premium accommodations, personalized services, and comfortable safari experiences without compromising adventure."
    },
    {
        icon: Users,
        title: "Professional Safari Guides",
        description: "Our experienced guides provide deep knowledge of wildlife, culture, and nature to ensure unforgettable journeys."
    },
    {
        icon: HeartHandshake,
        title: "Tailor-Made Safaris",
        description: "Every safari is customized based on your interests, travel style, and budget."
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-[#FAF7F2] relative overflow-hidden">
            {/* Subtle Safari Animal Print Pattern Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                 style={{ 
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10,10 Q20,30 40,20 T80,40 T90,80 T50,90 T20,60 Z M40,60 Q50,70 70,60 T90,20 T70,10 T30,20 T20,40 Z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`, 
                     backgroundSize: "150px 150px" 
                 }}>
            </div>

            <div className="container max-w-7xl mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#3E2723] mb-6">Why Choose Serenity Africa Safaris</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        We don&apos;t just show you Tanzania; we invite you to experience its soul.
                        Here is what sets our journeys apart.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#8D6E63]/20 group"
                        >
                            <div className="w-14 h-14 bg-[#8D6E63]/10 rounded-xl flex items-center justify-center mb-6 text-[#8D6E63] group-hover:bg-[#8D6E63] group-hover:text-white transition-colors duration-300">
                                <feature.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold font-serif mb-3 text-[#4E342E] group-hover:text-[#3E2723] transition-colors">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
