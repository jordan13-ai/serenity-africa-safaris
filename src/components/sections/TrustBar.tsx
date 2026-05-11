import Image from "next/image"
import { Star, ShieldCheck, Award, HeartHandshake } from "lucide-react"

export function TrustBar() {
    const trustSignals = [
        {
            icon: Star,
            title: "TripAdvisor",
            description: "Reviewed & Recommended"
        },
        {
            icon: ShieldCheck,
            title: "TATO Member",
            description: "Licensed Tour Operator Company"
        },
        {
            icon: Award,
            title: "2 Years",
            description: "Of Safari Excellence"
        },
        {
            icon: HeartHandshake,
            title: "100% Tailor-Made",
            description: "Private & Personalized"
        }
    ]

    return (
        <section className="relative py-12 border-b border-primary/10 overflow-hidden bg-[#F5F2ED]">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none">
                <Image 
                    src="/images/destinations/serengeti/serengeti-16.webp" 
                    alt="Background Texture"
                    fill
                    className="object-cover grayscale"
                />
            </div>
            
            <div className="container relative mx-auto px-6 z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {trustSignals.map((signal, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-3">
                            <signal.icon className="w-8 h-8 text-primary opacity-80" />
                            <div>
                                <h4 className="text-[13px] font-bold uppercase tracking-widest text-[#1A1A1A]">{signal.title}</h4>
                                <p className="text-xs text-gray-500 mt-1">{signal.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
