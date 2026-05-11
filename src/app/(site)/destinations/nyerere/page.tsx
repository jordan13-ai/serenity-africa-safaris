import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Binoculars, Camera, Check } from "lucide-react";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { DestinationItineraries } from "@/components/sections/DestinationItineraries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nyerere National Park Safari (Selous) | Serenity Africa Safaris",
    description: "Explore Africa's largest stand-alone park. Boat safaris on the Rufiji River and unique wilderness encounters in Nyerere National Park.",
    keywords: ["Nyerere National Park", "Selous", "Tanzania Safari", "Boat Safari", "Rufiji River"]
};

const stats = { size: "30,893 km²", established: "2019", wildlife: "Largest elephant population", status: "UNESCO Heritage Site" };

export default function NyererePage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/destinations/nyerere/nyerere-5.webp")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-green-600 uppercase tracking-wider">The Untamed South</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Nyerere National Park
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                            Forming part of the massive Selous Game Reserve, Nyerere is Africa's largest stand-alone park. A wilderness of oxbow lakes, riverine forests, and vast savannahs.
                        </p>
                        <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                            <Link href="/contact">Explore Nyerere</Link>
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
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">A Riverside Wilderness</h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                The Rufiji River is the lifeblood of Nyerere National Park. Boat safaris offer a unique perspective of the wildlife, with hippos, crocodiles, and diverse birdlife always in sight.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Boat safaris on the Rufiji River",
                                    "Walking safaris in wild terrain",
                                    "Rare wild dog sightings",
                                    "Stunning riverine landscapes",
                                    "Exclusive, low-crowd experience"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-green-600 shrink-0 mt-1" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/destinations/nyerere/nyerere-1.webp"
                                alt="Rufiji River in Nyerere"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <DestinationItineraries location="Nyerere" title="Best Nyerere Adventures" />

            <ImageGallery
                title="Nyerere National Park Gallery"
                description="Explore the raw beauty of Tanzania's southernmost wilderness."
                images={[
                    { src: "/images/destinations/nyerere/nyerere-1.webp", alt: "Nyerere Elephants", caption: "Elephants in the reserve" },
                    { src: "/images/destinations/nyerere/nyerere-2.webp", alt: "Nyerere Giraffes", caption: "Giraffes reflecting in the water" },
                    { src: "/images/destinations/nyerere/nyerere-3.webp", alt: "Nyerere Herd", caption: "Vast herds near the water" },
                    { src: "/images/destinations/nyerere/nyerere-4.webp", alt: "Nyerere Wildlife", caption: "Rich biodiversity of Nyerere" },
                    { src: "/images/destinations/nyerere/nyerere-5.webp", alt: "Nyerere Landscape", caption: "Stunning riverine scenery" },
                    { src: "/images/destinations/nyerere/nyerere-6.webp", alt: "Nyerere Birdlife", caption: "Unique avian species" },
                ]}
            />

            <section className="py-24 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6 italic">"Nyerere offers a sense of isolation and wildness that is hard to find elsewhere in Africa."</h2>
                    <p className="text-xl text-muted-foreground mb-10">Perfect for the discerning traveler seeking an off-the-beaten-path adventure.</p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg" asChild>
                        <Link href="/contact">Plan Your Nyerere Safari</Link>
                    </Button>
                </div>
            </section>
        </div >
    );
}
