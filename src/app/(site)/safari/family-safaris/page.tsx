import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { ImageGallery } from "@/components/sections/ImageGallery";

export const metadata: Metadata = {
    title: "Family Safaris | Serenity Africa Safaris",
    description: "Create unforgettable family memories through safe and exciting safari adventures in Tanzania.",
};

export default function FamilySafarisPage() {
    const highlights = [
        "Family-specialist guides & storytellers",
        "Junior Ranger educational activities",
        "Interconnecting family suites & villas",
        "Flexible itineraries with shorter drives",
        "Child-friendly menus & vehicle safety",
        "Interactive cultural & community visits",
        "Safe, enclosed camp environments"
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/intro/day-trips-card.webp"
                    alt="Family Safaris"
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
                            Shared Adventures
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Family <br /><span className="italic text-white/80">Safaris</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Create unforgettable family memories through safe and exciting safari adventures.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Plan Your Family Safari</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-3/5 space-y-8">
                            <h2 className="text-4xl font-serif text-[#1A1A1A] leading-tight">
                                Adventures for <br /><span className="italic text-gray-500">Every Generation</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg text-justify">
                                <p>
                                    A Tanzanian safari is the ultimate, living outdoor classroom, offering children a rare and transformative chance to trade their digital screens for the visceral, real-world spectacles of the natural world. At Serenity Africa Safaris, we specialize in multi-generational travel, ensuring that the profound wonder of Africa is accessible, safe, and deeply engaging for everyone—from curious toddlers to adventurous grandparents.
                                </p>
                                <p>
                                    We exclusively hand-select luxury lodges and camps that specifically cater to families, offering spacious family suites, interconnecting rooms, and enclosed, secure perimeters for total peace of mind. Our family-specialist guides are not just world-class wildlife experts; they are master storytellers and educators who know exactly how to keep children of all ages captivated. Whether it's teaching them how to read the stories written in animal tracks, explaining the delicate "Circle of Life," or visiting a local village to meet and play with Tanzanian children, we focus on interactive and meaningful learning.
                                </p>
                                <p>
                                    We also deeply understand the practicalities and potential challenges of traveling with children. We carefully plan shorter, high-impact game drives with plenty of stretch-breaks, provide diverse, child-friendly menus, and ensure our vehicles are fully equipped with safety seats, cooling fans, and plenty of healthy snacks. Our ultimate goal is to create a seamless, stress-free adventure where the only thing you have to worry about is capturing the pure look of awe on your child's face when they see their first wild elephant.
                                </p>
                                <div className="pt-8">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">Junior Ranger Program</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        Our signature "Junior Ranger" program is designed to turn your children into young conservationists. Led by our most patient and engaging guides, these activities are hands-on, educational, and, most importantly, incredibly fun.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li><strong className="text-[#1A1A1A]">Bush Craft & Survival:</strong> Learn the ancient art of making fire using only sticks, identifying edible wild fruits, and building a safe temporary shelter under the guidance of local experts.</li>
                                        <li><strong className="text-[#1A1A1A]">Tracking 101:</strong> A thrilling, hands-on session where children learn to identify the "Big Five" and the equally fascinating "Little Five" by their unique tracks, sounds, and even scents.</li>
                                        <li><strong className="text-[#1A1A1A]">Cultural Exchange:</strong> Visit a local Tanzanian primary school for a friendly game of football or participate in a traditional bead-making workshop with Maasai women.</li>
                                        <li><strong className="text-[#1A1A1A]">Savannah Stargazing:</strong> On clear nights, our guides use powerful pointers to show children the vibrant African constellations and share the ancient tribal stories written in the night sky.</li>
                                    </ul>
                                </div>
                                <div className="pt-10">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">The Generational Bridge</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        A family safari is a rare opportunity to bridge the generational gap. In the vastness of the Serengeti or the wonder of the Ngorongoro Crater, grandparents, parents, and children find a common ground in their shared awe of the natural world. These are the moments that become the legends of your family's history.
                                    </p>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify">
                                        At Serenity Africa Safaris, we take the stress out of family travel. From arranging child-friendly menus and car seats to ensuring your accommodations are safe and comfortable for all ages, we handle every detail. This is "Wisdom Safari" for the whole family—a journey of discovery, bonding, and profound joy.
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
                title="Family Discovery Gallery"
                description="Create lifelong memories through safe, engaging, and educational family adventures."
                images={[
                    { src: "/images/experience/culture/culture-1.webp", alt: "Maasai Traditions", caption: "Cultural Connections" },
                    { src: "/images/experience/game drive/game-drive-4.webp", alt: "Bush Education", caption: "Junior Ranger Training" },
                    { src: "/images/destinations/lake-manyara/lake-manyara-1.webp", alt: "Family Sightseeing", caption: "Shared Wonders" },
                    { src: "/images/destinations/serengeti/serengeti-1.webp", alt: "Kids on Safari", caption: "Young Explorers" },
                    { src: "/images/destinations/serengeti/serengeti-2.webp", alt: "Family Bush Breakfast", caption: "Shared Feasts" },
                    { src: "/images/destinations/serengeti/serengeti-3.webp", alt: "Interactive Culture", caption: "Learning from the Wild" },
                ]}
            />

            {/* Sample Itinerary Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3">
                            <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">The Adventure</span>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-6 leading-tight">7-Day <br /><span className="italic text-gray-500">Family Discovery</span></h2>
                            <p className="text-gray-500 font-light leading-relaxed mb-8">
                                A high-impact, low-stress journey designed to keep children engaged and parents relaxed.
                            </p>
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-5 text-[11px] font-bold tracking-widest uppercase" asChild>
                                <Link href="/contact">Request Family Plan</Link>
                            </Button>
                        </div>
                        <div className="lg:w-2/3 space-y-12">
                            {[
                                { day: "Day 1-2", title: "Arusha & Tarangire", desc: "Start with a gentle pace. Explore Tarangire, famous for its massive elephant herds and ancient baobabs. Stay in a safe, family-friendly lodge with a pool." },
                                { day: "Day 3-5", title: "Serengeti Junior Rangers", desc: "Fly to the Serengeti. Children participate in our 'Junior Ranger' program, learning tracking and bush-craft while exploring the vast plains for big cats." },
                                { day: "Day 6", title: "Ngorongoro & Culture", desc: "Descend into the Ngorongoro Crater for a high-impact morning of wildlife. In the afternoon, visit a local Maasai boma for an interactive cultural exchange." },
                                { day: "Day 7", title: "Farewell Brunch", desc: "A final relaxed morning in the highlands before a scenic drive back to Arusha for your departure flights, carrying memories for a lifetime." }
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

            <section className="py-24 bg-[#1A1A1A] text-white">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Lifelong Memories <br /><span className="italic text-primary">For All Ages</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        Safe, engaging, and unforgettable journeys tailored for your family.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                        Inquire for Family Trips
                    </Link>
                </div>
            </section>
        </div>
    );
}
