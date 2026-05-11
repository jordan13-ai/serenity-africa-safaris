import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { ImageGallery } from "@/components/sections/ImageGallery";

export const metadata: Metadata = {
    title: "The Great Migration Experience | Serenity Africa Safaris",
    description: "Witness the greatest wildlife spectacle on earth across the Serengeti plains with our expert-led migration safaris.",
};

export default function GreatMigrationPage() {
    const highlights = [
        "Dramatic Mara River crossings (July-Oct)",
        "Calving season in Southern Serengeti (Feb-Mar)",
        "Massive herds of over 1.5 million animals",
        "Exceptional sightings of lions, cheetahs, and leopards",
        "Mobile luxury camps that follow the herds",
        "Expert guides specializing in migration behavior",
        "Incredible predator-prey interaction photography"
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/destinations/migration/migration-5.webp"
                    alt="The Great Migration"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                <div className="relative z-10 container px-6 mx-auto mt-20">
                    <Link href="/safari" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-[11px] font-bold tracking-widest uppercase">
                        <ArrowLeft className="w-4 h-4" /> Back to Experiences
                    </Link>
                    <div className="max-w-3xl">
                        <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
                            Wildlife Spectacle
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            The Great <br /><span className="italic text-white/80">Migration</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Witness the greatest wildlife spectacle on earth across the Serengeti plains.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Plan Your Migration Safari</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-3/5 space-y-8">
                            <h2 className="text-4xl font-serif text-[#1A1A1A] leading-tight">
                                A Journey of <br /><span className="italic text-gray-500">Survival and Wonder</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg text-justify">
                                <p>
                                    The Great Migration is one of the most extraordinary natural events on the planet and the crown jewel of Africa's safari experiences. Every year, over 1.5 million wildebeest, accompanied by 200,000 zebras and 300,000 gazelles, move in a massive, circular trek across the Serengeti ecosystem. This isn't just a journey; it's a desperate race for life, driven by the search for water and fresh grazing lands across the vast golden plains.
                                </p>
                                <p>
                                    Witnessing the migration is a multisensory experience that defies simple description. You'll hear the thunderous, earth-shaking sound of thousands of hooves hitting the sun-baked earth, smell the thick dust rising in the midday heat, and feel the raw, palpable tension of nature's greatest drama. From the miraculous birth of over 500,000 calves in the southern plains during February to the treacherous, heart-stopping crossings of the Mara River in July and August, each season offers a unique and powerful chapter of this epic survival story.
                                </p>
                                <p>
                                    Our migration safaris are meticulously timed and expertly guided. We don't just take you to the general Serengeti region; we position you at the very heart of the movement. By utilizing mobile luxury camps that are strategically relocated throughout the year to follow the herds, we ensure you are never far from the action. Whether it's watching a pride of lions strategizing their next hunt under the cover of tall grass or seeing a massive Nile crocodile wait with predatory patience at the riverbank, we provide the ultimate front-row seat to the ancient cycle of life and death.
                                </p>
                                <div className="pt-8">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 text-justify">The Seasonal Rhythm</h3>
                                    <ul className="space-y-4">
                                        <li><strong className="text-[#1A1A1A]">January - March:</strong> The Calving Season in the Southern Serengeti and Ngorongoro Conservation Area. Over 8,000 wildebeest calves are born every single day, providing a bounty for the Serengeti's legendary predators. This is the best time for "action" photography as lions and cheetahs are highly active.</li>
                                        <li><strong className="text-[#1A1A1A]">April - June:</strong> The herds begin their trek North and West. As the short rains end, the grass in the south is depleted, pushing the massive columns through the Central Serengeti and into the Western Corridor, where the first major river challenge—the Grumeti River—awaits.</li>
                                        <li><strong className="text-[#1A1A1A]">July - October:</strong> The dramatic Mara River Crossings. This is the most iconic phase of the migration. The herds reach the Northern Serengeti and must cross the crocodile-infested Mara River to reach the lush grazing of the Masai Mara. It is a scene of raw chaos, bravery, and natural selection.</li>
                                        <li><strong className="text-[#1A1A1A]">November - December:</strong> The Short Rains return, and the herds begin their long trek back South through the eastern Serengeti. They move quickly, covering dozens of miles a day to reach the newly greened southern plains in time for the calving season to begin anew.</li>
                                    </ul>
                                </div>
                                <div className="pt-10">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">The Ecological Pulse</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        The Great Migration is more than just a wildlife spectacle; it is the heartbeat of the Serengeti-Mara ecosystem. The movement of millions of animals acts as a massive lawnmower, keeping the grasslands healthy and preventing the encroachment of woodland. Their waste provides vital nutrients to the soil, while their presence supports one of the highest concentrations of predators on Earth.
                                    </p>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify">
                                        At Serenity Africa Safaris, we are committed to the preservation of this natural wonder. We work closely with park authorities and conservation groups to ensure that our safaris have a minimal footprint. By choosing to travel with us, you are directly contributing to the protection of the migration corridors and the communities that live alongside them, ensuring that future generations can witness this "Wisdom of the Wild" for years to come.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/5">
                            <div className="bg-[#EAE3D6] p-10 md:p-12 rounded-[2rem] sticky top-32">
                                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-8">Highlights</h3>
                                <ul className="space-y-6">
                                    {highlights.map((item, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                            <span className="text-gray-600 font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ImageGallery
                title="Great Migration Gallery"
                description="Witness the raw power and ancient cycle of the world's largest land migration."
                images={[
                    { src: "/images/experience/migration/migration-1.webp", alt: "River Crossing", caption: "Mara River Crossing" },
                    { src: "/images/experience/migration/migration-2.webp", alt: "Serengeti Plains", caption: "Infinite Horizons" },
                    { src: "/images/experience/migration/migration-3.webp", alt: "Lions on the hunt", caption: "Apex Predators" },
                    { src: "/images/experience/migration/migration-10.webp", alt: "Calving Season", caption: "New Life on the Plains" },
                    { src: "/images/experience/migration/migration-11.webp", alt: "Dusty Trek", caption: "The Long Journey" },
                    { src: "/images/experience/migration/migration-12.webp", alt: "Wildebeest Herd", caption: "Strength in Numbers" },
                ]}
            />

            {/* Sample Itinerary Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3">
                            <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">The Experience</span>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-6 leading-tight">Sample <br /><span className="italic text-gray-500">8-Day Itinerary</span></h2>
                            <p className="text-gray-500 font-light leading-relaxed mb-8">
                                While every safari we craft is bespoke, this 8-day journey offers a glimpse into the flow of a high-end migration experience.
                            </p>
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-5 text-[11px] font-bold tracking-widest uppercase" asChild>
                                <Link href="/contact">Request Full Detail</Link>
                            </Button>
                        </div>
                        <div className="lg:w-2/3 space-y-12">
                            {[
                                { day: "Day 1-2", title: "Arrival & Central Serengeti", desc: "Arrive in Arusha and fly directly into the Serengeti. Your first game drives focus on the resident big cats and the diverse landscapes of the Seronera Valley." },
                                { day: "Day 3-5", title: "The Heart of the Migration", desc: "Move to a mobile luxury camp positioned in the path of the massive herds. Witness the sheer scale of the migration and enjoy full-day expeditions with bush lunches." },
                                { day: "Day 6-7", title: "River Crossing & Dramatic Action", desc: "Focus on the Northern Serengeti. Spend time at the Mara River banks, waiting for the high-adrenaline river crossings and incredible predator interactions." },
                                { day: "Day 8", title: "Farewell to the Savannah", desc: "One final morning game drive before flying back to Arusha for your onward journey, carrying memories that will last a lifetime." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FDFBF7] border border-[#EAE3D6] flex items-center justify-center text-primary font-serif text-xl transition-colors group-hover:bg-primary group-hover:text-white">
                                        {idx + 1}
                                    </div>
                                    <div className="pt-2">
                                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2 block">{step.day}</span>
                                        <h3 className="text-xl font-serif text-[#1A1A1A] mb-3">{step.title}</h3>
                                        <p className="text-gray-500 font-light leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#1A1A1A] text-white">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Witness the <br /><span className="italic text-primary">Natural Spectacle</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        Join us on a journey that captures the true essence of wild Africa.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                        Start Planning Now
                    </Link>
                </div>
            </section>
        </div>
    );
}
