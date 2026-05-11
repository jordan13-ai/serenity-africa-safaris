import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Calendar, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kilimanjaro Group Climbs | Serenity Africa Safaris",
    description: "Join a scheduled group departure to climb Mount Kilimanjaro. Share the experience and the cost with fellow adventurers.",
};

export default function JoiningGroupsPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <Image
                    src="/images/destinations/kilimanjaro/kilimanjaro-6.webp"
                    alt="Kilimanjaro Group Climb"
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
                            Shared Adventures
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Kilimanjaro <br /><span className="italic text-white/80">Group Climbs</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Join like-minded trekkers from around the world on our scheduled group departures. Share the camaraderie, the motivation, and the unforgettable moment of reaching the Roof of Africa.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto text-center max-w-3xl">
                    <h2 className="text-3xl font-serif text-[#1A1A1A] mb-6">Upcoming Departures</h2>
                    <p className="text-gray-500 font-light leading-relaxed mb-12">
                        Our 2026/2027 group climb schedule is currently being finalized to ensure the best possible dates aligning with optimal weather conditions and full moons. 
                    </p>
                    <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center gap-6">
                        <Users className="w-12 h-12 text-primary" />
                        <h3 className="text-2xl font-serif text-[#1A1A1A]">Join the Waitlist</h3>
                        <p className="text-gray-500 font-light max-w-md mx-auto">
                            Leave your details with us and be the first to know when our new group climb dates are released.
                        </p>
                        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-[11px] font-bold tracking-widest uppercase mt-4" asChild>
                            <Link href="/contact">Contact Our Team</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
