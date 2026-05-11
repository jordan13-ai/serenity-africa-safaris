import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Mid-Range Safaris Tanzania | Serenity Africa Safaris",
    description: "Comfortable tented camps and quality lodges offering authentic safari experiences at excellent value. The best balance of adventure and comfort.",
};

const packages = [
    {
        name: "Classic Northern Circuit",
        days: 6,
        parks: ["Tarangire", "Serengeti", "Ngorongoro"],
        accommodation: "Comfortable tented camps",
        highlights: ["Big 5 game viewing", "Great Migration (seasonal)", "Crater floor drive"],
    },
    {
        name: "Southern Circuit Explorer",
        days: 7,
        parks: ["Ruaha", "Nyerere"],
        accommodation: "Mid-range lodges & camps",
        highlights: ["Remote wilderness", "Fewer crowds", "Boat safaris"],
    },
    {
        name: "Tanzania Highlights",
        days: 8,
        parks: ["Lake Manyara", "Serengeti", "Ngorongoro", "Tarangire"],
        accommodation: "Quality tented camps",
        highlights: ["Complete northern circuit", "Tree-climbing lions", "Diverse ecosystems"],
    },
];

const faqs = [
    { q: "What's the difference between mid-range and budget?", a: "Mid-range safaris offer comfortable tented camps with proper beds, en-suite bathrooms, and quality meals. Budget uses basic camping with shared facilities. Mid-range provides significantly better comfort while maintaining an authentic safari feel." },
    { q: "Are mid-range safaris good value?", a: "Absolutely. You get professional guides, quality vehicles, and excellent game viewing at a fraction of luxury costs. Most guests find mid-range to be the sweet spot — authentic without roughing it." },
    { q: "What type of accommodation should I expect?", a: "Comfortable tented camps with proper beds and bedding, en-suite bathrooms with flush toilets and hot showers, and dining tents. Camps are semi-permanent and positioned in prime wildlife zones." },
    { q: "How many people share a vehicle?", a: "Maximum 6 per 4x4 safari vehicle, ensuring every guest has a window seat and personal attention from the guide. Private vehicle upgrades are available." },
];

export default function MidRangeSafarisPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">

            {/* HERO */}
            <section className="relative h-[80vh] flex items-end overflow-hidden">
                <Image src="/images/hero/slide-1.webp" alt="Mid-Range Safari" fill className="object-cover scale-105" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="relative z-10 container px-6 mx-auto pb-16 lg:pb-24">
                    <div className="max-w-3xl">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Mid-Range Safaris</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">Comfort Meets <span className="italic text-white/70">Adventure</span></h1>
                        <p className="text-white/70 font-light text-xl mb-8 max-w-xl">Tanzania's wildlife in quality tented camps — 90% of the luxury experience at a fraction of the cost.</p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/request-quote" className="flex items-center gap-2 bg-primary text-white px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">Get Custom Quote <ArrowRight className="w-4 h-4" /></Link>
                            <Link href="#packages" className="flex items-center gap-2 border border-white/30 text-white px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">View Packages</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY MID-RANGE */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-5xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Why Choose Mid-Range</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16 leading-tight">The Perfect <span className="italic text-gray-400">Balance</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Comfortable Camps", body: "Proper beds, en-suite bathrooms, and hot showers in every tent. You sleep well and wake refreshed for early game drives." },
                            { title: "Excellent Value", body: "Professional guides, quality 4x4 vehicles, and prime wildlife locations at accessible prices. No compromises where it counts." },
                            { title: "Small Groups", body: "Maximum 6 guests per vehicle. Everyone gets a window seat, and your guide gives personalized attention throughout." },
                        ].map((item) => (
                            <div key={item.title}>
                                <div className="w-8 h-[1px] bg-primary mb-6" />
                                <h3 className="text-xl font-serif text-[#1A1A1A] mb-4">{item.title}</h3>
                                <p className="text-gray-500 font-light leading-relaxed">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PACKAGES */}
            <section id="packages" className="py-24 bg-[#F5F0E8]">
                <div className="container px-6 mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Safari Packages</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">Popular <span className="italic text-gray-400">Itineraries</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg) => (
                            <div key={pkg.name} className="bg-white rounded-[2rem] p-8 border border-[#EAE3D6] hover:shadow-xl transition-shadow">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">{pkg.days} Days</span>
                                </div>
                                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-3">{pkg.name}</h3>
                                <p className="text-gray-400 text-sm mb-6">{pkg.parks.join(" · ")}</p>
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

            {/* INCLUDED */}
            <section className="py-24 bg-[#1A1A1A]">
                <div className="container px-6 mx-auto max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">What's Included</span>
                    </div>
                    <h2 className="text-4xl font-serif text-white mb-16">Standard <span className="italic text-white/50">Inclusions</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <div className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-6 border-b border-white/10 pb-4">Included</div>
                            <ul className="space-y-4">
                                {["Comfortable tented camp accommodation", "All meals (breakfast, packed lunch, dinner)", "Professional driver-guide", "4x4 safari vehicle with pop-up roof", "All park entrance fees", "Bottled water during game drives", "Airport transfers", "Binoculars"].map((i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/60 font-light text-sm"><span className="text-primary mt-0.5 shrink-0">—</span>{i}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-6 border-b border-white/10 pb-4">Not Included</div>
                            <ul className="space-y-4">
                                {["International flights", "Tanzania visa ($50–100)", "Travel insurance (required)", "Guide & camp staff gratuities", "Alcoholic beverages", "Personal expenses", "Optional activities"].map((i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/30 font-light text-sm"><span className="text-white/20 mt-0.5 shrink-0">—</span>{i}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">FAQ</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">Common <span className="italic text-gray-400">Questions</span></h2>
                    <div className="space-y-0">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group border-b border-gray-200 py-6">
                                <summary className="flex justify-between items-center cursor-pointer text-lg font-serif text-[#1A1A1A] list-none">
                                    {faq.q}
                                    <span className="text-primary ml-4 shrink-0 group-open:rotate-45 transition-transform text-xl">+</span>
                                </summary>
                                <p className="mt-4 text-gray-500 font-light leading-relaxed">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary">
                <div className="container px-6 mx-auto text-center max-w-2xl">
                    <h2 className="text-4xl font-serif text-white mb-6">Ready for Your Mid-Range Safari?</h2>
                    <p className="text-white/70 font-light mb-10">Get a personalised itinerary crafted around your dates and interests.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/request-quote" className="bg-white text-primary px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors">Get Free Quote</Link>
                        <Link href="/all-safaris" className="border border-white/30 text-white px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">All Safari Types</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
