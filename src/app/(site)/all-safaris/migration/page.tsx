import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Great Migration Safari Tanzania | Serenity Africa Safaris",
    description: "Witness 2 million wildebeest on their epic journey across the Serengeti. Time your visit perfectly with our migration calendar.",
};

const calendar = [
    { months: "January – March", location: "Southern Serengeti", event: "Calving season — 8,000 wildebeest born daily", best: true },
    { months: "April – May", location: "Central Serengeti", event: "Herds move north, lush green season", best: false },
    { months: "June – July", location: "Western Corridor", event: "Grumeti River crossings begin", best: true },
    { months: "July – October", location: "Northern Serengeti", event: "Mara River crossings — peak dramatic action", best: true },
    { months: "November – December", location: "Eastern Serengeti", event: "Short rains, herds begin journey south", best: false },
];

const packages = [
    {
        name: "Calving Season Special",
        months: "January – March",
        days: 7,
        highlights: ["Witness 8,000 births daily", "Predator action in Ndutu", "Ngorongoro Crater visit"],
    },
    {
        name: "River Crossing Adventure",
        months: "July – October",
        days: 8,
        highlights: ["Mara River crossings", "Northern Serengeti camps", "Crocodile ambush scenes"],
    },
    {
        name: "Complete Migration Circuit",
        months: "Year-round",
        days: 10,
        highlights: ["Follow the herds", "Multiple Serengeti zones", "Best seasonal timing guaranteed"],
    },
];

export default function MigrationSafarisPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">

            {/* HERO */}
            <section className="relative h-[80vh] flex items-end overflow-hidden">
                <Image src="/images/destinations/migration/migration-1.webp" alt="Great Migration Safari" fill className="object-cover scale-105" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="relative z-10 container px-6 mx-auto pb-16 lg:pb-24">
                    <div className="max-w-3xl">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Migration Safaris</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">The Greatest Show <span className="italic text-white/70">on Earth</span></h1>
                        <p className="text-white/70 font-light text-xl mb-8 max-w-xl">Two million wildebeest, zebras, and gazelles — an epic cycle of life playing out across the Serengeti year-round.</p>
                        <Link href="/request-quote" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">
                            Plan My Migration Safari <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* MIGRATION CALENDAR */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Seasonal Guide</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-4">The Migration <span className="italic text-gray-400">Calendar</span></h2>
                    <p className="text-gray-500 font-light mb-16 max-w-xl">The herds move year-round following rainfall. Timing your visit correctly is everything.</p>

                    <div className="space-y-0">
                        {calendar.map((period) => (
                            <div key={period.months} className={`flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200 gap-4 ${period.best ? "text-[#1A1A1A]" : "text-gray-400"}`}>
                                <div className="md:w-1/4">
                                    <div className="text-sm font-semibold">{period.months}</div>
                                    {period.best && <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Best Time</span>}
                                </div>
                                <div className="md:w-1/4 text-sm font-light text-gray-500">{period.location}</div>
                                <div className="md:w-2/4 text-sm font-light">{period.event}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 bg-primary/5 border border-primary/20 rounded-2xl p-6">
                        <p className="text-gray-600 font-light text-sm leading-relaxed">
                            <strong className="text-[#1A1A1A] font-semibold">Note on timing:</strong> The migration follows rainfall patterns and can vary by 2–3 weeks year to year. We monitor herd movements daily and adjust itineraries in real-time for the best encounters.
                        </p>
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
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">Migration <span className="italic text-gray-400">Itineraries</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg) => (
                            <div key={pkg.name} className="bg-white rounded-[2rem] p-8 border border-[#EAE3D6] hover:shadow-xl transition-shadow">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">{pkg.days} Days</span>
                                </div>
                                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">{pkg.name}</h3>
                                <p className="text-gray-400 text-sm mb-6">{pkg.months}</p>
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

            {/* WHY + IMAGE */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[1px] bg-primary" />
                                <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Why Migration?</span>
                            </div>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-10">Nature's Most Spectacular <span className="italic text-gray-400">Event</span></h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Unparalleled Wildlife Density", body: "Hundreds of thousands of animals in a single view — impossible anywhere else on earth." },
                                    { title: "Dramatic River Crossings", body: "Wildebeest brave crocodile-infested waters in a life-or-death spectacle unlike anything else." },
                                    { title: "Predator Action", body: "Lions, leopards, and cheetahs follow the herds, providing the best hunting scenes on the continent." },
                                    { title: "Calving Season Magic", body: "8,000 calves born daily in February — nature's nursery in action." },
                                ].map((point) => (
                                    <div key={point.title}>
                                        <h4 className="font-semibold text-[#1A1A1A] mb-1">{point.title}</h4>
                                        <p className="text-gray-500 font-light text-sm leading-relaxed">{point.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[550px] rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image src="/images/destinations/migration/migration-2.webp" alt="Migration Crossing" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary">
                <div className="container px-6 mx-auto text-center max-w-2xl">
                    <h2 className="text-4xl font-serif text-white mb-6">Witness the Great Migration</h2>
                    <p className="text-white/70 font-light mb-10">Tell us your travel dates and we'll position you perfectly for peak wildlife drama.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/request-quote" className="bg-white text-primary px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors">Get Migration Itinerary</Link>
                        <Link href="/destinations/serengeti" className="border border-white/30 text-white px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">Explore Serengeti</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
