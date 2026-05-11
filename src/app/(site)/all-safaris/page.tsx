import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tanzania Safari Types | Serenity Africa Safaris",
    description: "Explore every style of Tanzania safari — from mid-range tented camps to ultra-luxury lodges, honeymoon escapes, and the Great Migration.",
};

const safariTypes = [
    {
        title: "Mid-Range Safaris",
        slug: "mid-range",
        description: "Comfortable tented camps and quality lodges that balance authentic adventure with genuine comfort. The sweet spot of the African safari experience.",
        image: "/images/destinations/serengeti/serengeti-1.webp",
        priceFrom: "From $1,850 / person",
        duration: "5–7 days",
        tag: "Best Value",
    },
    {
        title: "Luxury Safaris",
        slug: "luxury",
        description: "Exclusive 5-star lodges, gourmet bush dinners, private game vehicles, and attentive personal service for the truly discerning traveler.",
        image: "/images/destinations/ngorongoro/ngorongoro-1.webp",
        priceFrom: "From $3,500 / person",
        duration: "6–10 days",
        tag: "Premium",
    },
    {
        title: "Great Migration",
        slug: "migration",
        description: "Time your visit to witness the most spectacular wildlife event on earth — millions of wildebeest, zebra, and predators in a raw battle for survival.",
        image: "/images/destinations/migration/migration-3.webp",
        priceFrom: "From $2,400 / person",
        duration: "6–8 days",
        tag: "Seasonal",
    },
    {
        title: "Cultural Experience",
        slug: "cultural",
        description: "Go beyond the wildlife. Spend time with the Maasai, hunt alongside the Hadzabe, and witness the Datoga forge arrowheads as they have for centuries.",
        image: "/images/destinations/serengeti/serengeti-3.webp",
        priceFrom: "From $1,650 / person",
        duration: "4–6 days",
        tag: "Immersive",
    },
    {
        title: "Honeymoon Safari",
        slug: "honeymoon",
        description: "Private candlelit dinners under the stars, exclusive bush camps for two, and a seamless blend of Serengeti wildlife and Zanzibar sands.",
        image: "/images/destinations/zanzibar/zanzibar-1.webp",
        priceFrom: "From $4,200 / person",
        duration: "7–10 days",
        tag: "Romantic",
    },
    {
        title: "Tented Camps",
        slug: "tented-camps",
        description: "Canvas walls let you hear the roar of lions and the rustling of elephants. Fall asleep to Africa's soundtrack without sacrificing comfort.",
        image: "/images/destinations/serengeti/serengeti-4.webp",
        priceFrom: "From $2,100 / person",
        duration: "5–7 days",
        tag: "Authentic",
    },
    {
        title: "Lodge Safaris",
        slug: "lodge",
        description: "Solid architecture, swimming pools, and full amenities set within prime wildlife corridors. Ideal for families and those who appreciate solid comforts.",
        image: "/images/destinations/ngorongoro/ngorongoro-2.webp",
        priceFrom: "From $2,300 / person",
        duration: "5–8 days",
        tag: "Family Friendly",
    },
    {
        title: "Safari Planning Guide",
        slug: "guide",
        description: "Not sure where to start? Our expert guide covers the best seasons, park combinations, what to pack, and how to choose the right safari for you.",
        image: "/images/destinations/tarangire/tarangire-1.webp",
        priceFrom: "Free Resource",
        duration: "15 min read",
        tag: "Expert Advice",
    },
];

export default function SafarisPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">

            {/* HERO */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/hero/slide-1.webp"
                    alt="Tanzania Safaris"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                <div className="relative z-10 container px-6 mx-auto mt-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
                            Every Style of Adventure
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
                            Tanzania <br /><span className="italic text-white/80">Safari Styles</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                            From intimate tented camps to ultra-luxury lodges, cultural encounters and honeymoon escapes — find the safari that's yours.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-4xl text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-10 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">How to Choose</span>
                        <div className="w-10 h-[1px] bg-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-8 leading-tight">
                        Every Traveler <br /><span className="italic text-gray-500">Has a Different Safari</span>
                    </h2>
                    <p className="text-gray-500 font-light leading-relaxed text-lg">
                        There is no single "right" way to experience Tanzania. Your ideal safari depends on your travel style, budget, the season you visit, and what you want to feel when you return home. Browse our curated collection below — or speak with a consultant who will ask the right questions.
                    </p>
                </div>
            </section>

            {/* SAFARI TYPE GRID */}
            <section className="pb-32 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {safariTypes.map((safari) => (
                            <Link
                                key={safari.slug}
                                href={`/all-safaris/${safari.slug}`}
                                className="group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 aspect-[4/5] flex flex-col"
                            >
                                <Image
                                    src={safari.image}
                                    alt={safari.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 transition-opacity duration-500" />

                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                                        {safari.tag}
                                    </span>
                                </div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-3xl font-serif text-white mb-3 leading-tight">{safari.title}</h3>

                                    <p className="text-white/70 text-sm font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                                        {safari.description}
                                    </p>

                                    <div className="flex justify-between items-end mb-6">
                                        <div>
                                            <div className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Duration</div>
                                            <div className="text-white text-sm font-medium">{safari.duration}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Price</div>
                                            <div className="text-primary text-sm font-bold">{safari.priceFrom}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-primary font-bold text-[10px] tracking-widest uppercase pt-4 border-t border-white/10">
                                        Explore <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="py-32 bg-[#1A1A1A]">
                <div className="container px-6 mx-auto max-w-5xl">
                    <div className="text-center mb-20">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">Standard Inclusions</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                            What Every Safari <br /><span className="italic text-white/60">Includes</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-white/50 text-[10px] font-bold tracking-[0.3em] uppercase mb-8 border-b border-white/10 pb-4">Included</h3>
                            <ul className="space-y-5">
                                {[
                                    "Professional driver-guide & 4x4 safari vehicle",
                                    "All national park entrance fees",
                                    "Accommodation as per itinerary",
                                    "All meals during the safari",
                                    "Bottled water throughout",
                                    "Airport transfers",
                                    "Game drives as detailed in itinerary",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-4 text-white/70 font-light">
                                        <span className="text-primary mt-0.5 shrink-0">—</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white/50 text-[10px] font-bold tracking-[0.3em] uppercase mb-8 border-b border-white/10 pb-4">Not Included</h3>
                            <ul className="space-y-5">
                                {[
                                    "International flights",
                                    "Tanzania visa ($50–100 USD)",
                                    "Travel insurance (required)",
                                    "Gratuities for guides and camp staff",
                                    "Personal items and souvenirs",
                                    "Alcoholic beverages",
                                    "Optional activities and excursions",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-4 text-white/40 font-light">
                                        <span className="text-white/20 mt-0.5 shrink-0">—</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay" />
                <div className="container px-6 mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        Ready to Plan Your Safari?
                    </h2>
                    <p className="text-white/80 font-light text-xl mb-10 max-w-2xl mx-auto">
                        Tell us your dates, interests, and budget. We'll design a bespoke itinerary within 24 hours — no obligation, no generic packages.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/request-quote">Request a Free Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/destinations">Explore Destinations</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
