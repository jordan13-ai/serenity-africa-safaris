import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Luxury Safaris Tanzania | Serenity Africa Safaris",
    description: "Exclusive 5-star lodges, gourmet dining, and private game vehicles. Experience Tanzania in absolute luxury.",
};

const packages = [
    {
        name: "Serengeti Luxury Experience",
        days: 7,
        lodges: ["Four Seasons Safari Lodge", "Singita Grumeti"],
        highlights: ["Private game drives", "Gourmet dining", "Infinity pools", "Spa treatments"],
    },
    {
        name: "Ultimate Tanzania",
        days: 10,
        lodges: ["Ngorongoro Crater Lodge", "Singita Sasakwa", "AndBeyond Manyara"],
        highlights: ["Butler service", "Hot air balloon", "Private chef", "Helicopter transfers"],
    },
    {
        name: "Romantic Honeymoon Safari",
        days: 8,
        lodges: ["Sanctuary Retreats", "Elewana Lodges"],
        highlights: ["Private plunge pools", "Couples spa", "Bush dinners", "Champagne sunsets"],
    },
];

export default function LuxurySafarisPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">

            {/* HERO */}
            <section className="relative h-[80vh] flex items-end overflow-hidden">
                <Image src="/images/hero/slide-2.webp" alt="Luxury Safari Tanzania" fill className="object-cover scale-105" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="relative z-10 container px-6 mx-auto pb-16 lg:pb-24">
                    <div className="max-w-3xl">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Luxury Safaris</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">The Ultimate <span className="italic text-white/70">Experience</span></h1>
                        <p className="text-white/70 font-light text-xl mb-8 max-w-xl">Exclusive 5-star lodges, private vehicles, gourmet dining, and unparalleled personal service.</p>
                        <Link href="/request-quote" className="inline-flex items-center gap-2 bg-white text-[#1A1A1A] px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors">
                            Request Luxury Itinerary <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-5xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Luxury Features</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">Every Detail <span className="italic text-gray-400">Perfected</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {[
                            { title: "5-Star Lodges", body: "Spacious suites with king beds, private decks, and views that stretch across the wilderness." },
                            { title: "Gourmet Dining", body: "World-class chefs, fine wine, and bush dinner settings that you'll never forget." },
                            { title: "Private Vehicles", body: "Exclusive 4x4 with your personal guide — no sharing, no compromises." },
                            { title: "Butler Service", body: "Concierge, laundry, champagne on arrival, and 24/7 attentive care." },
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
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Safari Packages</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">Luxury <span className="italic text-gray-400">Itineraries</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg) => (
                            <div key={pkg.name} className="bg-white rounded-[2rem] p-8 border border-[#EAE3D6] hover:shadow-xl transition-shadow">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">{pkg.days} Days</span>
                                </div>
                                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-3">{pkg.name}</h3>
                                <div className="mb-5">
                                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">Featured Lodges</p>
                                    <ul className="space-y-1">
                                        {pkg.lodges.map((l) => <li key={l} className="text-gray-500 font-light text-sm">{l}</li>)}
                                    </ul>
                                </div>
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

            {/* INCLUSIONS + IMAGE */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[1px] bg-primary" />
                                <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Premium Inclusions</span>
                            </div>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-10">What's <span className="italic text-gray-400">Included</span></h2>
                            <ul className="space-y-4">
                                {["5-star lodge accommodation", "Private safari vehicle & guide", "All gourmet meals & premium beverages", "Unlimited game drives", "Hot air balloon (selected itineraries)", "Spa treatments", "Laundry service", "Airstrip transfers", "Butler & concierge service"].map((i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 font-light">
                                        <span className="text-primary mt-0.5 shrink-0">—</span>{i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image src="/images/destinations/ngorongoro/ngorongoro-3.webp" alt="Luxury Lodge" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#1A1A1A]">
                <div className="container px-6 mx-auto text-center max-w-2xl">
                    <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">Bespoke Planning</span>
                    <h2 className="text-4xl font-serif text-white mb-6">Experience Tanzania <span className="italic text-white/50">in Ultimate Luxury</span></h2>
                    <p className="text-white/50 font-light mb-10">Our luxury consultants will craft an itinerary to match your exact vision and tastes.</p>
                    <Link href="/request-quote" className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">
                        Design My Luxury Safari <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
