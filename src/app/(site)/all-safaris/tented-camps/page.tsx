import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Tented Camp Safaris Tanzania | Serenity Africa Safaris",
    description: "Sleep in the heart of the wild. Canvas walls, hot showers, and the sounds of Africa's night — the authentic safari experience.",
};

export default function TentedCampSafarisPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">

            {/* HERO */}
            <section className="relative h-[80vh] flex items-end overflow-hidden">
                <Image src="/images/hero/slide-3.webp" alt="Tented Camp Safari" fill className="object-cover scale-105" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="relative z-10 container px-6 mx-auto pb-16 lg:pb-24">
                    <div className="max-w-3xl">
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Tented Camp Safaris</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">Sleep in the <span className="italic text-white/70">Heart of the Wild</span></h1>
                        <p className="text-white/70 font-light text-xl mb-8 max-w-xl">Canvas walls mean lions roaring in the dark and elephants passing feet away. The authentic African night.</p>
                        <Link href="/request-quote" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">
                            Book Tented Safari <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY TENTED */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-5xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-primary" />
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Why Tented Camps</span>
                    </div>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-16">Immersion <span className="italic text-gray-400">Without Compromise</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {[
                            { title: "Authentic Atmosphere", body: "True safari feeling. Canvas, wood, and nature — not concrete and air conditioning." },
                            { title: "Sounds of the Wild", body: "Unzip your tent and hear the African night. Hyena calls, lion roars, and elephant footsteps." },
                            { title: "Under the Stars", body: "No light pollution at our remote camps. The Milky Way is visible every clear night." },
                            { title: "Prime Locations", body: "Tented camps are positioned inside or adjacent to national parks for first-light game drives." },
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

            {/* COMFORT IN CANVAS */}
            <section className="py-24 bg-[#F5F0E8]">
                <div className="container px-6 mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image src="/images/destinations/serengeti/serengeti-4.webp" alt="Tented Camp Interior" fill className="object-cover" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[1px] bg-primary" />
                                <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Camp Comfort</span>
                            </div>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-6">Comfort in <span className="italic text-gray-400">Canvas</span></h2>
                            <p className="text-gray-500 font-light leading-relaxed mb-8">Don't let "tented" mislead you. Our camps offer proper beds, en-suite bathrooms with hot showers, and quality meals — you get the authentic sounds and atmosphere without sacrificing any essential comfort.</p>
                            <ul className="space-y-4">
                                {["Proper king or twin beds with quality linens", "En-suite bathroom with flush toilet & hot shower", "Electricity for charging devices", "Dining tent with freshly prepared meals", "Bush bar with cold drinks", "Trained camp staff on call"].map((i) => (
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
                    <h2 className="text-4xl font-serif text-white mb-6">Hear Africa's Night</h2>
                    <p className="text-white/70 font-light mb-10">Tell us where and when — we'll place you in the best-positioned tented camp for your wildlife goals.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/request-quote" className="bg-white text-primary px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors">Book Tented Safari</Link>
                        <Link href="/all-safaris" className="border border-white/30 text-white px-10 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">All Safari Types</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
