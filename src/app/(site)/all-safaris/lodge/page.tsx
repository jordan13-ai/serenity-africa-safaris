import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Lodge Safaris Tanzania | Serenity Africa Safaris",
    description: "Permanent structures, swimming pools, and full amenities. Lodge safaris offer robust comfort with stunning wild views.",
};

export default function LodgeSafarisPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">

            {/* HERO */}
            <section className="relative h-[80vh] flex items-end overflow-hidden">
                <Image src="/images/hero/slide-2.webp" alt="Lodge Safari Tanzania" fill className="object-cover scale-105" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="relative z-10 container px-6 mx-auto pb-16 lg:pb-24">
                    <div className="max-w-3xl">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Lodge Safaris</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">Solid Comfort, <span className="italic text-white/70">Wild Views</span></h1>
                        <p className="text-white/70 font-light text-xl mb-8 max-w-xl">Permanent structures, swimming pools, full amenities, and stunning wildlife at the doorstep. Perfect for families.</p>
                        <Link href="/request-quote" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">
                            Book Lodge Safari <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* AMENITIES */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-5xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Lodge Amenities</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">Built for <span className="italic text-gray-400">Comfort</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {[
                            { title: "Solid Structures", body: "Permanent buildings with solid walls, full insulation, and proper air conditioning where available." },
                            { title: "Swimming Pools", body: "Cool off after morning game drives in private or shared pools overlooking the bush." },
                            { title: "Modern Amenities", body: "Reliable WiFi, electricity, charging stations, and connectivity — even in remote park locations." },
                            { title: "Restaurant Dining", body: "Full-service restaurants, bars, and lounges. A la carte menus with local and international cuisine." },
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

            {/* FAMILY SECTION */}
            <section className="py-24 bg-[#F5F0E8]">
                <div className="container px-6 mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image src="/images/destinations/ngorongoro/ngorongoro-4.webp" alt="Lodge Pool View" fill className="object-cover" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[1px] bg-primary" />
                                <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Family Friendly</span>
                            </div>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-6">Perfect for <span className="italic text-gray-400">Families</span></h2>
                            <p className="text-gray-500 font-light leading-relaxed mb-8">
                                Lodge safaris are the ideal choice for families with young children, travellers who need reliable connectivity, or anyone who values having solid walls and full facilities after long days in the field.
                            </p>
                            <ul className="space-y-4">
                                {["Family rooms and interconnecting suites", "Child-friendly activities and bush walks", "Safe, fenced perimeters for children", "Full electricity and device charging", "On-site medical facilities at major lodges", "Reliable WiFi in most rooms"].map((i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 font-light text-sm">
                                        <span className="text-primary mt-0.5 shrink-0">—</span>{i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary">
                <div className="container px-6 mx-auto text-center max-w-2xl">
                    <h2 className="text-4xl font-serif text-white mb-6">Plan Your Lodge Safari</h2>
                    <p className="text-white/70 font-light mb-10">We'll select the best lodges for your route, season, and group. Family or couple, we have the right property.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/request-quote" className="bg-white text-primary px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors">Get Free Quote</Link>
                        <Link href="/all-safaris" className="border border-white/30 text-white px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">All Safari Types</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
