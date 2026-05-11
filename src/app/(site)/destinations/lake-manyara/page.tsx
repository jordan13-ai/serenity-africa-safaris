import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lake Manyara National Park | Serenity Africa Safaris",
    description: "Discover the emerald gem of Tanzania, home to tree-climbing lions, pink flamingos, and lush groundwater forests.",
    keywords: ["Lake Manyara", "Tanzania Safari", "Tree-climbing lions", "Flamingos", "Groundwater forest"]
};

export default function LakeManyaraPage() {
    const highlights = [
        "Unique tree-climbing lions in acacia woodlands",
        "Thousands of pink flamingos on the lake shores",
        "Lush emerald groundwater forest ecosystems",
        "Large herds of elephants and baboon troops",
        "Canoeing safaris on the lake waters",
        "Spectacular views from the Great Rift Valley"
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            {/* Elegant Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/destinations/lake-manyara/lake-manyara-1.webp"
                    alt="Lake Manyara National Park"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                <div className="relative z-10 container px-6 mx-auto mt-20">
                    <div className="max-w-3xl">
                        <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
                            The Emerald Gem
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Lake <br /><span className="italic text-white/80">Manyara</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Discover a breathtaking tapestry of groundwater forests, pink-hued lake shores, and the famous tree-climbing lions.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Plan Your Manyara Safari</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Intro Section - Split Layout */}
            <section className="py-24 md:py-32 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-primary"></div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                                    Introduction
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
                                A Paradise of <br /><span className="italic text-gray-500">Emerald Shadows</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                                <p>
                                    Lake Manyara National Park is an extraordinary emerald gem nestled at the base of the Great Rift Valley escarpment. Despite its compact size, the park offers a remarkably diverse range of ecosystems, from the lush groundwater forest to the expansive alkaline lake that dominates the landscape.
                                </p>
                                <p>
                                    The park is most famous for its unique tree-climbing lions, a behavior rarely seen elsewhere in Africa, often found lounging in the branches of ancient acacia trees. The lake shores are frequently painted pink by thousands of flamingos, creating a stunning visual contrast against the deep blue waters.
                                </p>
                                <p>
                                    Beyond its visual beauty, Manyara is home to large herds of elephants, massive baboon troops, and over 400 species of birds, making it a perfect destination for birdwatchers and wildlife enthusiasts alike.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/destinations/lake-manyara/lake-manyara-4.webp"
                                    alt="Wildlife in Lake Manyara"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Visit & Highlights */}
            <section className="py-24 bg-[#EAE3D6] relative overflow-hidden">
                <div className="container px-6 mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-primary"></div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                                    The Experience
                                </span>
                            </div>
                            <h2 className="text-4xl font-serif text-[#1A1A1A]">Why Visit Manyara</h2>
                            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                                <p>Lake Manyara provides a serene and intimate safari experience that complements the larger northern parks. The transition from the jungle-like groundwater forest to the open lake plains makes every game drive feel like a journey through different worlds.</p>
                                <p>It is one of the few places where you can experience a night game drive or take a guided walk along the treetop walkway, offering a unique perspective of the forest canopy and its inhabitants.</p>
                                <p>Whether you're exploring by boat, vehicle, or on foot, Lake Manyara delivers a peaceful yet exhilarating connection to the wild heart of Tanzania.</p>
                            </div>
                        </div>

                        <div className="bg-white/50 backdrop-blur-sm p-10 md:p-12 rounded-[2rem] border border-white/50 shadow-sm">
                            <h3 className="text-2xl font-serif text-[#1A1A1A] mb-8">Highlights</h3>
                            <ul className="space-y-6">
                                {highlights.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-gray-600 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ImageGallery
                title="Lake Manyara Gallery"
                description="Experience the highlights of this emerald gem, from tree-climbing lions to vast flamingo flocks."
                images={[
                    { src: "/images/destinations/lake-manyara/lake-manyara-2.webp", alt: "Manyara Lions", caption: "Famous tree-climbing lions" },
                    { src: "/images/destinations/lake-manyara/lake-manyara-11.webp", alt: "Manyara Flamingos", caption: "Pink flamingos on the lake" },
                    { src: "/images/destinations/lake-manyara/lake-manyara-13.webp", alt: "Manyara Elephants", caption: "Elephants in the groundwater forest" },
                    { src: "/images/destinations/lake-manyara/lake-manyara-5.webp", alt: "Manyara Hippo Pool", caption: "Hippos in the wetland areas" },
                    { src: "/images/destinations/lake-manyara/lake-manyara-6.webp", alt: "Manyara Baboons", caption: "Large troops of baboons" },
                    { src: "/images/destinations/lake-manyara/lake-manyara-10.webp", alt: "Manyara Canopy", caption: "Lush groundwater forest views" },
                ]}
            />

            {/* Best Time Section */}
            <section className="py-24 bg-[#EAE3D6]">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
                        Planning
                    </span>
                    <h2 className="text-4xl font-serif text-[#1A1A1A] mb-8">Best Time to Visit</h2>
                    <p className="text-gray-600 font-light leading-relaxed text-lg mb-12">
                        Lake Manyara is a fantastic year-round destination. The dry season (July to October) is ideal for large mammal sightings, while the wet season (November to June) transforms the park into a lush green paradise, perfect for birdwatching and photography.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#1A1A1A] text-white">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Explore the <br /><span className="italic text-primary">Lake Manyara Gem</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        Discover unforgettable safari moments in one of Tanzania’s most unique wildlife parks.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-lg">
                        Plan Your Manyara Safari
                    </Link>
                </div>
            </section>
        </div>
    );
}
