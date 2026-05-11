import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Honeymoon Safari Tanzania | Serenity Africa Safaris",
    description: "Romantic safari escapes tailored for two. Private game drives, champagne sunsets, bush dinners, and Zanzibar beaches.",
};

const packages = [
    {
        name: "Serengeti Romance",
        days: 7,
        highlights: ["Private vehicle & guide", "Champagne bush sundowners", "Romantic bush dinners", "Couples spa treatment"],
    },
    {
        name: "Ultimate Honeymoon",
        days: 10,
        highlights: ["Ultra-luxury lodges", "Hot air balloon flight", "Zanzibar beach extension", "Private chef & concierge"],
    },
    {
        name: "Safari & Beach Escape",
        days: 12,
        highlights: ["Northern circuit safari", "Zanzibar private island", "Sunset dhow cruise", "Ocean-view suite"],
    },
];

export default function HoneymoonSafarisPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">

            {/* HERO */}
            <section className="relative h-[80vh] flex items-end overflow-hidden">
                <Image src="/images/destinations/zanzibar/zanzibar-1.webp" alt="Honeymoon Safari Tanzania" fill className="object-cover scale-105" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="relative z-10 container px-6 mx-auto pb-16 lg:pb-24">
                    <div className="max-w-3xl">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Honeymoon Safaris</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">Romance Under <span className="italic text-white/70">African Skies</span></h1>
                        <p className="text-white/70 font-light text-xl mb-8 max-w-xl">Private game drives, champagne at sunset, intimate bush dinners — and the white sands of Zanzibar waiting at the end.</p>
                        <Link href="/request-quote" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">
                            Plan Our Honeymoon <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ROMANTIC TOUCHES */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-5xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">For Two</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">Every Moment <span className="italic text-gray-400">Curated for Love</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {[
                            { title: "Private Vehicle", body: "Your own 4x4 and guide — no sharing, no schedules. Go where you want, stay as long as you like." },
                            { title: "Bush Dinners", body: "Candlelit tables set under a canopy of stars, miles from anywhere, with the sounds of the wild around you." },
                            { title: "Champagne Moments", body: "Sunrise balloon flights, sundowners on a kopje, and champagne waiting in your tent on arrival." },
                            { title: "Zanzibar Extension", body: "Trade the savannah for turquoise waters and white sand. The perfect ending to your honeymoon adventure." },
                        ].map((f) => (
                            <div key={f.title}>
                                <div className="w-8 h-[1px] bg-primary mb-6" />
                                <h3 className="text-xl font-serif text-[#1A1A1A] mb-3">{f.title}</h3>
                                <p className="text-gray-500 font-light text-sm leading-relaxed">{f.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PACKAGES */}
            <section className="py-24 bg-[#F5F0E8]">
                <div className="container px-6 mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Honeymoon Packages</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">Romantic <span className="italic text-gray-400">Itineraries</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg) => (
                            <div key={pkg.name} className="bg-white rounded-[2rem] p-8 border border-[#EAE3D6] hover:shadow-xl transition-shadow">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">{pkg.days} Days</span>
                                </div>
                                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-6">{pkg.name}</h3>
                                <ul className="space-y-2 mb-8">
                                    {pkg.highlights.map((h) => (
                                        <li key={h} className="flex items-start gap-3 text-gray-500 text-sm font-light">
                                            <span className="text-primary mt-0.5 shrink-0">—</span>{h}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/request-quote" className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-primary hover:gap-4 transition-all">
                                    Enquire <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#1A1A1A]">
                <div className="container px-6 mx-auto text-center max-w-2xl">
                    <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">Your Perfect Beginning</span>
                    <h2 className="text-4xl font-serif text-white mb-6">Start Your Forever in <span className="italic text-white/50">Africa</span></h2>
                    <p className="text-white/50 font-light mb-10">Tell us your dates and vision. We'll handle every romantic detail.</p>
                    <Link href="/request-quote" className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">
                        Plan Our Honeymoon <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
