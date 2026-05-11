import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Tanzania Safari Planning Guide | Serenity Africa Safaris",
    description: "Everything you need to plan the perfect Tanzania safari — best seasons, budgets, park guides, packing lists, and vaccinations.",
};

const seasons = [
    { season: "Dry Season (June – October)", wildlife: "Excellent", weather: "Sunny, cool mornings", crowds: "Higher", best: true },
    { season: "Short Rains (November – December)", wildlife: "Good", weather: "Brief afternoon showers", crowds: "Lower", best: false },
    { season: "Calving Season (January – March)", wildlife: "Spectacular", weather: "Warm and sunny", crowds: "Moderate", best: true },
    { season: "Long Rains (April – May)", wildlife: "Fair", weather: "Heavy rains most days", crowds: "Lowest", best: false },
];

const faqs = [
    { q: "When is the best time for a safari?", a: "June–October (dry season) is the classic choice — animals congregate at water, vegetation is low, and visibility is excellent. January–March offers the spectacular wildebeest calving season in the southern Serengeti." },
    { q: "How much should I budget?", a: "Mid-range safaris run $250–350 per person per day, covering accommodation, meals, park fees, and guiding. Luxury safaris are $500–800+/day. Budget excludes international flights, visa ($50–100), and gratuities." },
    { q: "Do I need vaccinations?", a: "Yellow fever vaccination is required if arriving from an endemic country. Malaria prophylaxis is strongly recommended. Consult your travel doctor 6–8 weeks before departure." },
    { q: "What wildlife will I see?", a: "The Big Five (lion, leopard, elephant, buffalo, rhino) are commonly seen across Tanzania's parks. You'll also encounter zebra, giraffe, hippo, crocodile, cheetah, wild dog, and over 1,000 bird species." },
    { q: "Is Tanzania safe for tourists?", a: "Yes — Tanzania is one of Africa's most stable and safe safari destinations. You'll be with professional guides at all times in vehicles, and camps and lodges have security teams." },
];

const packingList = [
    { category: "Clothing", items: ["Neutral-coloured clothes (khaki, olive, beige)", "Long-sleeved shirts for sun & insect protection", "Light fleece or jacket for cool mornings", "Comfortable walking shoes or boots", "Wide-brim sun hat and UV sunglasses"] },
    { category: "Gear", items: ["Binoculars — this is the single most important item", "Camera with zoom lens (70–300mm minimum)", "Extra batteries and memory cards", "Power bank for charging in the field", "Headlamp with spare batteries"] },
    { category: "Health & Essentials", items: ["Sunscreen SPF 50+", "Insect repellent with DEET", "Personal prescription medications", "Hand sanitiser and wet wipes", "Reusable water bottle"] },
];

export default function SafariGuidePage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">

            {/* HEADER — editorial, no full-height hero for a guide page */}
            <section className="bg-[#1A1A1A] pt-36 pb-24 px-6">
                <div className="container mx-auto max-w-3xl">
                    <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">Planning Resource</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">Your Complete <br /><span className="italic text-white/60">Safari Guide</span></h1>
                    <p className="text-white/50 font-light text-xl max-w-2xl leading-relaxed">Everything you need to know before you book — seasons, budgets, parks, packing, and health requirements.</p>
                </div>
            </section>

            {/* WHEN TO GO */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Seasons</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">When to <span className="italic text-gray-400">Go</span></h2>
                    <div className="space-y-0">
                        {seasons.map((s) => (
                            <div key={s.season} className={`grid grid-cols-1 md:grid-cols-4 gap-4 py-8 border-b border-gray-200 ${s.best ? "" : "opacity-60"}`}>
                                <div>
                                    <div className="font-semibold text-[#1A1A1A] text-sm mb-1">{s.season}</div>
                                    {s.best && <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Recommended</span>}
                                </div>
                                <div className="text-gray-500 font-light text-sm">{s.wildlife} wildlife</div>
                                <div className="text-gray-500 font-light text-sm">{s.weather}</div>
                                <div className="text-gray-500 font-light text-sm">{s.crowds} crowds</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PACKING LIST */}
            <section className="py-24 bg-[#F5F0E8]">
                <div className="container px-6 mx-auto max-w-5xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Packing List</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">What to <span className="italic text-gray-400">Pack</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {packingList.map((section) => (
                            <div key={section.category}>
                                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-6 border-b border-gray-200 pb-4">{section.category}</div>
                                <ul className="space-y-3">
                                    {section.items.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-gray-600 font-light text-sm">
                                            <span className="text-primary mt-0.5 shrink-0">—</span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Common Questions</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">Frequently <span className="italic text-gray-400">Asked</span></h2>
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
                    <h2 className="text-4xl font-serif text-white mb-6">Ready to Start Planning?</h2>
                    <p className="text-white/70 font-light mb-10">Share your vision and we'll handle all the complex logistics — permits, timing, accommodation, and guides.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/request-quote" className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors">
                            Get Free Quote <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/all-safaris" className="border border-white/30 text-white px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">Browse Safari Types</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
