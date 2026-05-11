import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { ImageGallery } from "@/components/sections/ImageGallery";

export const metadata: Metadata = {
    title: "Luxury Safari Experiences | Serenity Africa Safaris",
    description: "Experience the perfect balance of adventure, exclusivity, and comfort with our world-class luxury safaris.",
};

export default function LuxurySafariPage() {
    const highlights = [
        "Exclusive-use luxury villas and lodges",
        "Private silver-level professional guides",
        "Scenic charter flight transfers",
        "Gourmet bush dining & fine wine pairings",
        "Private game drives with total flexibility",
        "Wellness & spa treatments in the wild",
        "Dedicated personal butler service"
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/intro/safari-card.webp"
                    alt="Luxury Safari"
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
                            Exclusivity in the Wild
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Luxury <br /><span className="italic text-white/80">Safaris</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Experience the perfect balance of adventure, exclusivity, and comfort.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Experience Luxury</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-3/5 space-y-8">
                            <h2 className="text-4xl font-serif text-[#1A1A1A] leading-tight">
                                The Art of <br /><span className="italic text-gray-500">Refined Adventure</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg text-justify">
                                <p>
                                    At Serenity Africa Safaris, we believe that true luxury is defined by profound exclusivity, vast open space, and an unhurried, deep connection to the natural world. Our luxury safaris are meticulously designed for the discerning global traveler who seeks the raw, visceral thrill of the African wilderness without sacrificing the sophisticated refinements of world-class hospitality. It is a journey where every single detail—from the high thread count of your Egyptian cotton linens to the rare vintage of your sunset wine—is curated with absolute precision.
                                </p>
                                <p>
                                    Your extraordinary adventure often begins with a private charter flight, soaring effortlessly over the dramatic crater highlands or the vast, shimmering Serengeti plains before landing at a remote, exclusive bush airstrip. Here, you'll be welcomed into some of Africa's most iconic and architecturally stunning lodges and tented camps. These are not just places to stay; they are masterpieces of design that blend seamlessly into the environment, offering private infinity plunge pools, gourmet kitchens, and a dedicated team of staff, including private butlers and world-class professional chefs.
                                </p>
                                <p>
                                    The luxury extends far beyond the physical accommodation. It's found in the complete flexibility of your daily schedule, the unparalleled expertise of your private silver-level guide, and the privileged access to exclusive-use game-viewing concessions far away from the crowds. Whether it's a multi-course, lantern-lit dinner served in the middle of the silent bush or a rejuvenating spa treatment with the rhythmic sounds of the African night as your soundtrack, we are here to redefine your understanding of what a safari can be.
                                </p>
                                <div className="pt-8">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">The Art of Hospitality</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        Luxury is not a formula; it is a feeling. It's the warmth of a genuine smile, the perfect temperature of your morning coffee, and the effortless way your day unfolds. We focus on the intangible elements that make a journey truly exceptional.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li><strong className="text-[#1A1A1A]">Private Charters:</strong> Skip the long, dusty roads and enjoy breathtaking scenic aerial transfers directly between our hand-picked national parks.</li>
                                        <li><strong className="text-[#1A1A1A]">Culinary Excellence:</strong> Indulge in sophisticated, multi-course dining featuring the freshest locally sourced organic ingredients, expertly paired with international fine wines.</li>
                                        <li><strong className="text-[#1A1A1A]">Personalized Service:</strong> Enjoy the dedicated attention of professional butlers and camp managers who possess the rare ability to anticipate your every need before you even speak it.</li>
                                        <li><strong className="text-[#1A1A1A]">Ultimate Exclusivity:</strong> Gain unparalleled access to private wildlife conservancies and stay in exclusive-use villas for the ultimate in privacy and social distancing.</li>
                                    </ul>
                                </div>
                                <div className="pt-10">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">The Future of Luxury</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        In the modern world, the ultimate luxury is time and silence. Our safaris are designed to provide both. We move away from the "checklist" mentality of traditional travel, encouraging you to slow down, breathe deeply, and fully immerse yourself in the ancient rhythms of the African bush.
                                    </p>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify">
                                        At Serenity Africa Safaris, we are redefining luxury as a conscious, transformative experience. It is a journey that respects the environment, supports local communities, and leaves you with a profound sense of peace and perspective. This is "Wisdom Safari" at its most refined—an unforgettable exploration of the wild and the soul.
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
                title="Luxury Safari Gallery"
                description="Experience the pinnacle of wilderness hospitality through our curated selection of architectural masterpieces."
                images={[
                    { src: "/images/destinations/serengeti/serengeti-10.webp", alt: "Luxury Lodge Interior", caption: "Refined Wilderness Interiors" },
                    { src: "/images/destinations/serengeti/serengeti-11.webp", alt: "Exclusive Bush Spa", caption: "Wellness in the Wild" },
                    { src: "/images/destinations/serengeti/serengeti-12.webp", alt: "Private infinity pool", caption: "Liquid Horizons" },
                    { src: "/images/destinations/serengeti/serengeti-4.webp", alt: "Luxury Villa", caption: "Private Sanctuary" },
                    { src: "/images/destinations/serengeti/serengeti-5.webp", alt: "Gourmet Bush Dining", caption: "Epicurean Adventures" },
                    { src: "/images/destinations/serengeti/serengeti-6.webp", alt: "Private Plunge Pool", caption: "Uninterrupted Horizons" },
                ]}
            />

            {/* Sample Itinerary Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3">
                            <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">The Journey</span>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-6 leading-tight">9-Day <br /><span className="italic text-gray-500">Ultimate Sky-Safari</span></h2>
                            <p className="text-gray-500 font-light leading-relaxed mb-8">
                                A masterfully choreographed expedition featuring private air travel and total exclusivity.
                            </p>
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-5 text-[11px] font-bold tracking-widest uppercase" asChild>
                                <Link href="/contact">Inquire for Bespoke Plan</Link>
                            </Button>
                        </div>
                        <div className="lg:w-2/3 space-y-12">
                            {[
                                { day: "Day 1-3", title: "Ngorongoro Rim Exclusivity", desc: "Fly by private charter to the crater highlands. Stay in an ultra-exclusive villa on the rim. Enjoy private, early-access crater floor game drives and wellness treatments." },
                                { day: "Day 4-6", title: "Deep Serengeti Immersion", desc: "Private flight to a remote concession in the Serengeti. Experience total flexibility with your private silver-level guide, focused on rare sightings and gourmet bush dining." },
                                { day: "Day 7-9", title: "Wilderness Wellness & Departure", desc: "Conclude your journey in a serene, architectural masterpiece. Focus on slow-safari movements, private spa sessions, and one final celebratory sunrise flight." }
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
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Authentic Adventure <br /><span className="italic text-primary">Refined Hospitality</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        Discover the ultimate wilderness experience without compromise.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                        Customize Your Luxury Stay
                    </Link>
                </div>
            </section>
        </div>
    );
}
