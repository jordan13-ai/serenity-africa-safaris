import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Cultural Safari Tanzania | Serenity Africa Safaris",
    description: "Meet the Maasai, Hadzabe, and Datoga tribes of Tanzania. Authentic cultural immersion beyond the wildlife.",
};

const experiences = [
    {
        title: "Maasai Village Visit",
        description: "Spend a day with Maasai warriors, learn traditional jumping dances, visit homesteads, and understand their pastoral lifestyle alongside the wildlife.",
        duration: "Full day",
    },
    {
        title: "Hadzabe Tribe Experience",
        description: "Join one of Africa's last hunter-gatherer tribes. Learn ancient hunting techniques, make fire the traditional way, and hear click-language storytelling.",
        duration: "Full day",
    },
    {
        title: "Chagga Coffee & Culture",
        description: "Visit Chagga villages on Kilimanjaro's slopes. Learn traditional coffee cultivation, local brewing methods, and share an authentic home-cooked meal.",
        duration: "Half day",
    },
];

const tribes = [
    { name: "The Maasai", region: "Ngorongoro & Manyara", desc: "East Africa's most iconic people. Semi-nomadic pastoralists who have coexisted with wildlife for centuries. Their jumping dance and red shukas are instantly recognisable." },
    { name: "The Hadzabe", region: "Lake Eyasi", desc: "One of the last hunter-gatherer tribes on earth. Speaking a unique click language, the Hadzabe live exactly as their ancestors did 10,000 years ago." },
    { name: "The Datoga", region: "Lake Eyasi", desc: "Master metalworkers and traditional farmers. The Datoga are known for their intricate beadwork and their ironsmith skills, forging arrowheads for trade." },
    { name: "The Chagga", region: "Kilimanjaro slopes", desc: "Tanzania's famous coffee farmers. Industrious and welcoming, the Chagga have cultivated Arabica coffee on Kilimanjaro's fertile slopes for generations." },
];

export default function CulturalSafarisPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">

            {/* HERO */}
            <section className="relative h-[80vh] flex items-end overflow-hidden">
                <Image src="/images/hero/slide-3.webp" alt="Cultural Safari Tanzania" fill className="object-cover scale-105" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="relative z-10 container px-6 mx-auto pb-16 lg:pb-24">
                    <div className="max-w-3xl">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Cultural Experiences</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">Beyond Wildlife: <span className="italic text-white/70">Meet the People</span></h1>
                        <p className="text-white/70 font-light text-xl mb-8 max-w-xl">Tanzania has over 120 ethnic groups. A cultural safari reveals the human story behind one of the world's most diverse lands.</p>
                        <Link href="/request-quote" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">
                            Plan Cultural Safari <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* THE PEOPLE */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-5xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">The Tribes</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">Tanzania's <span className="italic text-gray-400">People</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {tribes.map((tribe) => (
                            <div key={tribe.name} className="border-b border-gray-200 pb-10">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A]">{tribe.name}</h3>
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 text-right">{tribe.region}</span>
                                </div>
                                <p className="text-gray-500 font-light leading-relaxed">{tribe.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCES */}
            <section className="py-24 bg-[#F5F0E8]">
                <div className="container px-6 mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Cultural Experiences</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">What You'll <span className="italic text-gray-400">Experience</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {experiences.map((exp) => (
                            <div key={exp.title} className="bg-white rounded-[2rem] p-8 border border-[#EAE3D6] hover:shadow-xl transition-shadow">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">{exp.duration}</span>
                                </div>
                                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">{exp.title}</h3>
                                <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">{exp.description}</p>
                                <Link href="/request-quote" className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-primary hover:gap-4 transition-all">
                                    Add to Safari <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#1A1A1A]">
                <div className="container px-6 mx-auto text-center max-w-2xl">
                    <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">Combine with Wildlife</span>
                    <h2 className="text-4xl font-serif text-white mb-6">Add a Cultural <span className="italic text-white/50">Dimension</span></h2>
                    <p className="text-white/50 font-light mb-10">Most cultural experiences are easily combined with any wildlife safari itinerary. Tell us what interests you.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/request-quote" className="bg-primary text-white px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">Plan Cultural Safari</Link>
                        <Link href="/all-safaris" className="border border-white/30 text-white px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">All Safari Types</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
