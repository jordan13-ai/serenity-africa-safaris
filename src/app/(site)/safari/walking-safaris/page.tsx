import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { ImageGallery } from "@/components/sections/ImageGallery";

export const metadata: Metadata = {
    title: "Walking Safaris | Serenity Africa Safaris",
    description: "Experience the African wilderness on foot through immersive guided adventures and expert tracking.",
};

export default function WalkingSafarisPage() {
    const highlights = [
        "Intimate ground-level wildlife encounters",
        "Expert tracking and spoor identification",
        "Accompanied by armed professional rangers",
        "Discover medicinal plants & local ecology",
        "Silent immersion in untouched wilderness",
        "Unique perspectives for bird watching",
        "Flexible routes tailored to your fitness level"
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/experience/culture/culture-7.webp"
                    alt="Walking Safaris"
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
                            Bush Exploration
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Walking <br /><span className="italic text-white/80">Safaris</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Experience the African wilderness on foot through immersive guided adventures.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Book a Walking Tour</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-3/5 space-y-8">
                            <h2 className="text-4xl font-serif text-[#1A1A1A] leading-tight">
                                Grounded in the <br /><span className="italic text-gray-500">Ancient Wilderness</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg text-justify">
                                <p>
                                    To go on a walking safari is to awaken your senses in a way you never thought possible. Away from the hum of the engine and the vibration of the vehicle, the African wilderness transforms into a vivid, living symphony. You begin to hear the subtle crackle of dry grass underfoot, the distant, frantic warning call of a plover, and the gentle whisper of the wind through the whistling-thorn acacias. At Serenity Africa Safaris, we believe walking is the purest, most honest way to experience the ancient pulse of the land.
                                </p>
                                <p>
                                    Guided by a highly trained professional guide and an armed park ranger, you will explore hidden corners of the Serengeti, Tarangire, or the Ngorongoro Highlands that remain completely inaccessible to vehicles. The focus shifts dramatically from the "Big Five" to the "Little Five"—and the complex, delicate web of life that sustains the entire ecosystem. You’ll learn how to read the complex stories written in the dust—the fresh, heart-pounding spoor of a leopard, the perfectly spherical nest of a dung beetle, or the intricate, centuries-old medicinal uses of the local flora.
                                </p>
                                <p>
                                    Walking safaris are not just about hiking or exercise; they are about profound presence and awareness. It’s an intensely grounding experience that connects you to the earth in a visceral way that no game drive can ever replicate. Whether it's a short, exhilarating morning walk from your luxury camp or a multi-day fly-camping expedition through the deep wilderness, the thrill of being an active part of the landscape rather than a mere spectator is an unforgettable highlight for any true adventurer.
                                </p>
                                <div className="pt-8">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">Safety & Expertise</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        Safety is our absolute priority on every walking safari. Our guides are among the most highly trained in Africa, possessing not only the technical skills for wilderness safety but also a deep, intuitive understanding of animal psychology and environmental cues.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li><strong className="text-[#1A1A1A]">Expert Guides:</strong> Our walking guides undergo rigorous, multi-year training programs that cover everything from advanced tracking to emergency first aid and ballistics.</li>
                                        <li><strong className="text-[#1A1A1A]">Armed Rangers:</strong> For your total peace of mind, every single walk is accompanied by a certified, armed park ranger who works in tandem with your guide.</li>
                                        <li><strong className="text-[#1A1A1A]">Detailed Tracking:</strong> Beyond just seeing the animals, you will learn the ancient art of "reading the bush"—identifying the age of a track, the direction of travel, and even the emotional state of the animal.</li>
                                        <li><strong className="text-[#1A1A1A]">The Small Wonders:</strong> Discover the fascinating, often-overlooked world of insects, birds, and botany that make up the foundation of the African ecosystem.</li>
                                    </ul>
                                </div>
                                <div className="pt-10">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">The Ancient Wisdom</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        Walking through the Tanzanian bush is a spiritual homecoming. It is the landscape where humanity first walked, and there is a profound, almost genetic memory that awakens when you move through the savannah on foot. You are no longer an observer behind glass; you are a participant in the natural order.
                                    </p>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify">
                                        Our walking expeditions, particularly in the wilderness areas of the Serengeti and the Ngorongoro Highlands, offer a chance to disconnect from the digital world and reconnect with yourself. It is a journey of silence, awareness, and profound connection—a true "Wisdom Safari" that leaves you with a deeper understanding of the world and your place within it.
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
                title="Walking Safari Gallery"
                description="Experience the African wilderness on foot, connecting with the land in its purest form."
                images={[
                    { src: "/images/destinations/nyerere/nyerere-1.webp", alt: "Tracking wildlife", caption: "Expert tracking skills" },
                    { src: "/images/destinations/tarangire/tarangire-12.webp", alt: "Walking the savannah", caption: "Endless bush pathways" },
                    { src: "/images/destinations/lake-manyara/lake-manyara-10.webp", alt: "Small wonders", caption: "Micro-ecosystem discovery" },
                    { src: "/images/destinations/serengeti/serengeti-34.webp", alt: "Bush Walk", caption: "Immersive nature trails" },
                    { src: "/images/destinations/ruaha/ruaha-4.webp", alt: "Wilderness immersion", caption: "Grounded in nature" },
                    { src: "/images/destinations/tarangire/tarangire-11.webp", alt: "Bush Education", caption: "Learning from the masters" },
                ]}
            />

            {/* Sample Itinerary Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3">
                            <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">The Journey</span>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-6 leading-tight">4-Day <br /><span className="italic text-gray-500">Walking Expedition</span></h2>
                            <p className="text-gray-500 font-light leading-relaxed mb-8">
                                A deep-dive into the wilderness, moving between remote fly-camps on foot.
                            </p>
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-5 text-[11px] font-bold tracking-widest uppercase" asChild>
                                <Link href="/contact">Request Detailed Brief</Link>
                            </Button>
                        </div>
                        <div className="lg:w-2/3 space-y-12">
                            {[
                                { day: "Day 1", title: "Arrival & Safety Orientation", desc: "Arrive at our specialized walking camp. Meet your expert guide and armed ranger for a detailed safety briefing followed by a gentle introductory afternoon walk." },
                                { day: "Day 2", title: "The Art of Tracking", desc: "A full morning spent identifying tracks and signs left behind during the night. Learn the language of the bush and the complex interconnections of the ecosystem." },
                                { day: "Day 3", title: "Wilderness Fly-Camping", desc: "Walk to a remote satellite camp set up in the deep wilderness. Experience the raw beauty of the African night around a campfire, away from all permanent structures." },
                                { day: "Day 4", title: "Sunrise Immersion", desc: "One final, early morning walk at first light, the best time for sensory awareness, before returning to camp for a celebratory brunch and departure." }
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
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Feel the <br /><span className="italic text-primary">Wild Beneath Your Feet</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        An intimate journey into the heart of the savannah.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                        Inquire About Walking Safaris
                    </Link>
                </div>
            </section>
        </div>
    );
}
