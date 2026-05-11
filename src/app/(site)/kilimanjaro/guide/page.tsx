import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Map, Shield, Award } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kilimanjaro Trekking Guide | Serenity Africa Safaris",
    description: "Everything you need to know about climbing Mount Kilimanjaro: routes, packing lists, weather, and preparation.",
};

export default function KilimanjaroGuidePage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <Image
                    src="/images/destinations/kilimanjaro/kilimanjaro-5.webp"
                    alt="Kilimanjaro Guide"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                <div className="relative z-10 container px-6 mx-auto mt-20">
                    <Link href="/kilimanjaro" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-[11px] font-bold tracking-widest uppercase">
                        <ArrowLeft className="w-4 h-4" /> Back to Kilimanjaro
                    </Link>
                    <div className="max-w-3xl">
                        <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
                            Preparation & Insights
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            The Ultimate <br /><span className="italic text-white/80">Trekking Guide</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Expert advice, detailed route comparisons, packing essentials, and training tips to ensure a safe and successful summit of Mount Kilimanjaro.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto max-w-4xl">
                    <div className="space-y-16">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                <Map className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">Choosing Your Route</h3>
                                <p className="text-gray-500 font-light leading-relaxed mb-4">
                                    Selecting the right route is crucial to your success. The Lemosho and Machame routes offer excellent acclimatization and stunning scenery over 7-8 days, making them our top recommendations. The Rongai route approaches from the north and is drier, while the Marangu route is the only one with hut accommodations.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">Health & Acclimatization</h3>
                                <p className="text-gray-500 font-light leading-relaxed mb-4">
                                    Altitude sickness is the biggest challenge on Kilimanjaro. The golden rule is "Pole Pole" (Slowly, Slowly). We mandate daily health checks using pulse oximeters, and our guides are Wilderness First Responder certified. We carry emergency oxygen on every climb.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">Equipment & Preparation</h3>
                                <p className="text-gray-500 font-light leading-relaxed mb-4">
                                    Having the right gear is non-negotiable. You will experience five distinct climate zones, from rainforest to arctic conditions. Layering is key. We provide high-quality four-season sleeping tents and mess tents. 
                                </p>
                                <Button variant="outline" className="mt-4 rounded-full text-[10px] font-bold tracking-widest uppercase" asChild>
                                    <Link href="/contact">Request Full Packing List</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
