import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mountain, ArrowRight, Activity, Clock, ShieldCheck, Map, Users } from "lucide-react";
import { routesData } from "@/lib/kilimanjaro-routes-data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Climb Mount Kilimanjaro | Serenity Africa Safaris",
    description: "Conquer the Roof of Africa with expert guides. Choose from our meticulously planned routes for the highest success rates and safety standards.",
};

export default function KilimanjaroLandingPage() {
    const routes = Object.values(routesData);

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            {/* HERO SECTION */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/destinations/kilimanjaro/kilimanjaro-1.webp"
                    alt="Mount Kilimanjaro"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
                    <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
                        The Roof of Africa
                    </span>
                    <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
                        Conquer <br /><span className="italic text-white/80">Kilimanjaro</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                        A life-changing expedition to the summit of the world's tallest free-standing mountain. Guided by local experts with uncompromised safety standards.
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                        <Link href="#routes">Explore Routes</Link>
                    </Button>
                </div>
            </section>

            {/* INTRO & STATS */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-8 leading-tight">
                                Your Summit, <br /><span className="italic text-gray-500">Our Expertise</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                                <p>
                                    Reaching the summit of Mount Kilimanjaro (5,895m) is one of the most rewarding physical and mental challenges on earth. But the journey to Uhuru Peak requires meticulous preparation, expert acclimatization strategies, and a world-class support team.
                                </p>
                                <p>
                                    At Serenity Africa Safaris, we don't just sell climbs; we curate expeditions. From high-altitude wilderness first responders to premium four-season equipment and highly nutritious mountain cuisine, every detail is optimized for your safety and success.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                            <StatCard icon={Mountain} title="5,895m" subtitle="Highest Peak in Africa" />
                            <StatCard icon={ShieldCheck} title="95%+" subtitle="Summit Success Rate" />
                            <StatCard icon={Activity} title="WFR Certified" subtitle="Expert Local Guides" />
                            <StatCard icon={Map} title="6 Routes" subtitle="Tailored Itineraries" />
                        </div>
                    </div>
                </div>
            </section>

            {/* THE ROUTES */}
            <section id="routes" className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">
                            Choose Your Path
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">
                            Kilimanjaro <span className="italic text-gray-500">Routes</span>
                        </h2>
                        <p className="text-gray-500 font-light text-lg">
                            Each route offers a unique perspective of the mountain. Whether you prioritize scenery, solitude, or success rate, we have the perfect path for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {routes.map((route, idx) => (
                            <Link key={idx} href={`/kilimanjaro/${route.slug}`} className="group relative bg-[#FDFBF7] rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={`/images/destinations/kilimanjaro/kilimanjaro-${(idx % 6) + 1}.webp`}
                                        alt={route.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-primary">
                                        {route.duration}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2 group-hover:text-primary transition-colors">{route.title}</h3>
                                    <p className="text-primary text-sm font-medium mb-4 italic">{route.subtitle}</p>
                                    <p className="text-gray-500 font-light text-sm line-clamp-3 mb-6 flex-1">
                                        {route.overview}
                                    </p>
                                    
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-6 border-t border-gray-200 mt-auto">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Success Rate</span>
                                            <span className="text-sm font-medium text-[#1A1A1A]">{route.successRate}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Difficulty</span>
                                            <span className="text-sm font-medium text-[#1A1A1A]">{route.difficulty}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* PREPARATION & GROUPS */}
            <section className="py-24 bg-[#1A1A1A] text-white">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <Link href="/kilimanjaro/guide" className="group relative rounded-[2rem] overflow-hidden p-12 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <Map className="w-12 h-12 text-primary mb-8" />
                            <h3 className="text-3xl font-serif mb-4">Trekking Guide</h3>
                            <p className="text-gray-400 font-light mb-8 max-w-sm">
                                Everything you need to know before you go. Preparation, packing lists, training advice, and expert tips for a successful summit.
                            </p>
                            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-primary group-hover:gap-4 transition-all">
                                Read Guide <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>

                        <Link href="/kilimanjaro/joining-groups" className="group relative rounded-[2rem] overflow-hidden p-12 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <Users className="w-12 h-12 text-primary mb-8" />
                            <h3 className="text-3xl font-serif mb-4">Group Climbs</h3>
                            <p className="text-gray-400 font-light mb-8 max-w-sm">
                                Join our scheduled group departures. Meet fellow adventurers from around the world, share the motivation, and save on costs.
                            </p>
                            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-primary group-hover:gap-4 transition-all">
                                View Schedule <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay" />
                <div className="container px-6 mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Ready to Conquer Africa?</h2>
                    <p className="text-white/80 font-light text-xl mb-10 max-w-2xl mx-auto">
                        Speak with our mountain experts today to start planning your custom Kilimanjaro expedition.
                    </p>
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                        <Link href="/contact">Enquire Now</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

function StatCard({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle: string }) {
    return (
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center text-center">
            <Icon className="w-10 h-10 text-primary mb-4" />
            <h4 className="text-2xl font-serif text-[#1A1A1A] mb-1">{title}</h4>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">{subtitle}</span>
        </div>
    );
}
