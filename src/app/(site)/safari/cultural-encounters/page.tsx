import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { ImageGallery } from "@/components/sections/ImageGallery";

export const metadata: Metadata = {
    title: "Cultural Encounters | Serenity Africa Safaris",
    description: "Engage respectfully with local communities and discover Tanzania’s rich traditions and heritage.",
};

export default function CulturalEncountersPage() {
    const highlights = [
        "Authentic, non-intrusive village visits",
        "Hadzabe hunter-gatherer tracking",
        "Maasai boma storytelling sessions",
        "Traditional metalworking with the Datoga",
        "Direct support for community projects",
        "Local coffee farming & tasting in Arusha",
        "Expert cultural guides from local tribes"
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/experience/culture/culture-4.webp"
                    alt="Cultural Encounters"
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
                            Heart of Africa
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Cultural <br /><span className="italic text-white/80">Encounters</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Engage respectfully with local communities and discover Tanzania’s rich traditions.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Experience the Culture</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-3/5 space-y-8">
                            <h2 className="text-4xl font-serif text-[#1A1A1A] leading-tight">
                                Connecting with <br /><span className="italic text-gray-500">Tanzania's Heritage</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg text-justify">
                                <p>
                                    Beyond the legendary, sun-drenched wildlife of the plains, Tanzania’s greatest and most enduring treasure is its people. With over 120 distinct and vibrant ethnic groups, the country is a living, breathing tapestry of ancient traditions, diverse languages, and profound ancestral wisdom. Our cultural encounters are meticulously designed to be respectful, non-intrusive, and mutually beneficial, focusing on genuine human connection rather than staged, commercial performances.
                                </p>
                                <p>
                                    Whether you are spending time with the iconic <strong className="text-[#1A1A1A]">Maasai</strong> pastoralists in the dramatic Ngorongoro Highlands, learning the ancient click-language and traditional honey-gathering techniques of the <strong className="text-[#1A1A1A]">Hadzabe</strong> hunter-gatherers, or observing the skilled, rhythmic blacksmithing of the <strong className="text-[#1A1A1A]">Datoga</strong> people, you will gain a profound and lasting perspective on what it truly means to live in absolute harmony with the land.
                                </p>
                                <p>
                                    We partner directly and ethically with local communities to ensure that your visit provides tangible support for vital education, healthcare, and clean water projects. By sitting in a traditional family boma, sharing a meal, or learning about the medicinal uses of local plants, you are participating in a meaningful, two-way exchange that goes far beyond the typical tourist experience, touching the very soul of the African continent.
                                </p>
                                <div className="pt-8">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">Tribal Connections</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        Our cultural journeys are not generalized; they are specific, community-led, and deeply personal. We focus on the tribes that have lived in these landscapes for millennia, each with their own unique "Wisdom of the Wild."
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li><strong className="text-[#1A1A1A]">The Maasai:</strong> Proud, semi-nomadic pastoralists known for their vibrant red shukas, elaborate beadwork, and deep, symbiotic relationship with the savannah's ecology and wildlife.</li>
                                        <li><strong className="text-[#1A1A1A]">The Hadzabe:</strong> One of the very last remaining hunter-gatherer tribes on Earth, living near the shores of Lake Eyasi exactly as their ancestors did for thousands of years. Learn the art of tracking and the ancient click-language.</li>
                                        <li><strong className="text-[#1A1A1A]">The Datoga:</strong> Expert metalworkers and pastoralists with a rich, complex history of jewelry making, distinct facial tattooing, and a resilient agrarian lifestyle.</li>
                                        <li><strong className="text-[#1A1A1A]">The Chagga:</strong> Explore the lush, fertile slopes of Mount Kilimanjaro and discover the ancient coffee-growing heritage and intricate irrigation systems of the Chagga people.</li>
                                    </ul>
                                </div>
                                <div className="pt-10">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">The Power of Oral Tradition</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        In many Tanzanian cultures, history and wisdom are not written in books—they are carried in the voices of the elders. Our encounters often involve sitting around a fire or beneath the shade of an ancient Baobab, listening to stories that have been passed down for a hundred generations. These are stories of survival, of the stars, and of the deep spiritual connection between humans and the natural world.
                                    </p>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify">
                                        At Serenity Africa Safaris, we believe that understanding the people of Tanzania is just as important as seeing its wildlife. By participating in these respectful exchanges, you are not just a tourist—you are a guest. You leave with more than just photos; you leave with a profound new perspective on humanity's shared heritage.
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
                title="Cultural Experience Gallery"
                description="Experience the heartbeat of Africa through genuine human connections and ancient traditions."
                images={[
                    { src: "/images/experience/culture/culture-1.webp", alt: "Maasai Traditions", caption: "Maasai Heritage" },
                    { src: "/images/experience/culture/culture-2.webp", alt: "Hadzabe Hunting", caption: "Ancient Survival Skills" },
                    { src: "/images/experience/culture/culture-3.webp", alt: "Local Community", caption: "Community Joy" },
                    { src: "/images/experience/culture/culture-8.webp", alt: "Traditional Dance", caption: "The Rhythm of the Tribe" },
                    { src: "/images/experience/culture/culture-4.webp", alt: "Maasai Boma", caption: "Life in the Highlands" },
                    { src: "/images/experience/culture/culture-12.webp", alt: "Datoga Smithing", caption: "Master Metalworkers" },
                ]}
            />

            {/* Sample Itinerary Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3">
                            <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">The Connection</span>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-6 leading-tight">3-Day <br /><span className="italic text-gray-500">Cultural Immersion</span></h2>
                            <p className="text-gray-500 font-light leading-relaxed mb-8">
                                A respectful and profound journey into the heart of Tanzania's diverse communities.
                            </p>
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-5 text-[11px] font-bold tracking-widest uppercase" asChild>
                                <Link href="/contact">Request Full Itinerary</Link>
                            </Button>
                        </div>
                        <div className="lg:w-2/3 space-y-12">
                            {[
                                { day: "Day 1", title: "Maasai Wisdom & Storytelling", desc: "Spend the day in an authentic Maasai boma. Learn about their pastoralist lifestyle, participate in traditional beadwork, and listen to ancestral stories under the stars." },
                                { day: "Day 2", title: "Hadzabe & Datoga Encounter", desc: "Travel to Lake Eyasi. Track with the Hadzabe hunter-gatherers at sunrise and observe the traditional metalworking skills of the Datoga blacksmiths in the afternoon." },
                                { day: "Day 3", title: "Community & Conservation", desc: "Visit a community-led project, such as a local school or a sustainable coffee farm. Learn how tourism directly supports local livelihoods and future generations." }
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
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Discover the <br /><span className="italic text-primary">Spirit of the People</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        Meaningful connections that stay with you forever.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                        Inquire for Cultural Tours
                    </Link>
                </div>
            </section>
        </div>
    );
}
