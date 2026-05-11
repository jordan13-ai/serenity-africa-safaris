import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Sun, CloudRain } from "lucide-react";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { DestinationItineraries } from "@/components/sections/DestinationItineraries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ruaha National Park Safari | Serenity Africa Safaris",
    description: "Discover the wild and remote Ruaha National Park. Experience rugged landscapes, massive elephant herds, and incredible predator density.",
    keywords: ["Ruaha", "Tanzania Safari", "Wilderness", "Elephants", "National Park"]
};

const stats = { size: "20,226 km²", established: "1964", wildlife: "Enormous elephant herds", status: "Wild & Remote" };

export default function RuahaPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/destinations/ruaha/ruaha-8.webp")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-orange-600 uppercase tracking-wider">Tanzania's Hidden Gem</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Ruaha National Park
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                            Known for its rugged scenery and massive predator populations, Ruaha is the remote heart of Tanzania. A landscape dominated by baobabs and the Great Ruaha River.
                        </p>
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                            <Link href="/contact">Visit Ruaha</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-primary/5">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {Object.entries(stats).map(([key, value]) => (
                            <div key={key}>
                                <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                                <div className="text-sm text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/destinations/ruaha/ruaha-4.webp"
                                alt="Baobab trees in Ruaha"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-serif font-bold mb-6">Rugged & Remote</h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Ruaha offers a completely different landscape compared to the Northern parks. Here, the Great Ruaha River draws animals from across the dry plains, creating intense wildlife encounters.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Incredible lion and leopard density",
                                    "Majestic baobab-studded landscapes",
                                    "Huge herds of elephants and buffalo",
                                    "Cross-over of Southern and Eastern species",
                                    "True wilderness with very few tourists"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-orange-600 shrink-0 mt-1" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <DestinationItineraries location="Ruaha" title="Recommended Ruaha Safaris" />

            <ImageGallery
                title="Ruaha National Park Gallery"
                description="Experience the raw, unadulterated beauty of Tanzania's remote interior."
                images={[
                    { src: "/images/destinations/ruaha/ruaha-1.webp", alt: "Ruaha River", caption: "Purple sunset over the Great Ruaha River" },
                    { src: "/images/destinations/ruaha/ruaha-2.webp", alt: "Ruaha Wildlife", caption: "Diverse wildlife in the heart of Ruaha" },
                    { src: "/images/destinations/ruaha/ruaha-3.webp", alt: "Ruaha Accommodation", caption: "Luxury lodge with a view" },
                    { src: "/images/destinations/ruaha/ruaha-4.webp", alt: "Ruaha Landscape", caption: "Iconic baobab-studded landscape" },
                    { src: "/images/destinations/ruaha/ruaha-5.webp", alt: "Ruaha Culture", caption: "Cultural encounters in the region" },
                    { src: "/images/destinations/ruaha/ruaha-6.webp", alt: "Ruaha Safari", caption: "Expert-led game drives" },
                ]}
            />

            <section className="py-24 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6 italic">"Ruaha is the Tanzania you DREAM OF - wild, untamed, and breathtakingly beautiful."</h2>
                    <p className="text-xl text-muted-foreground mb-10">Ideal for experienced safari-goers looking for the ultimate wilderness experience.</p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg" asChild>
                        <Link href="/contact">Inquire About Ruaha</Link>
                    </Button>
                </div>
            </section>
        </div >
    );
}
