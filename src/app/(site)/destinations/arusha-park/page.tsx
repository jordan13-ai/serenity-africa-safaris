import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Footprints, Binoculars } from "lucide-react";
import { ImageGallery } from "@/components/sections/ImageGallery";

export default function ArushaPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/destinations/arusha/arusha-1.webp")' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-emerald-600">Arusha National Park</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Home of Mount Meru
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Tanzania's second-highest peak. Diverse ecosystems, walking safaris, canoeing, and incredible birdlife.
                        </p>
                        <Button size="lg" asChild><Link href="/contact">Visit Arusha Park</Link></Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center">Unique Activities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Footprints, title: "Walking Safaris", desc: "One of few parks allowing guided walks" },
                            { icon: Mountain, title: "Mount Meru Trek", desc: "4-day climb to 4,566m summit" },
                            { icon: Binoculars, title: "Canoeing", desc: "Paddle Momella Lakes among wildlife" }
                        ].map((activity, i) => (
                            <Card key={i} className="text-center">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <activity.icon className="text-emerald-600" size={28} />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">{activity.title}</h3>
                                    <p className="text-muted-foreground">{activity.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <ImageGallery
                title="Arusha Park Gallery"
                description="Explore the hidden gems of Tanzania's most accessible wilderness."
                images={[
                    { src: "/images/destinations/arusha/arusha-2.webp", alt: "Mount Meru", caption: "The majestic Mount Meru" },
                    { src: "/images/destinations/arusha/arusha-3.webp", alt: "Canoeing Momella", caption: "Canoeing on Momella Lakes" },
                    { src: "/images/destinations/arusha/arusha-4.webp", alt: "Walking Safari", caption: "Guided Bush Walks" },
                    { src: "/images/destinations/arusha/arusha-5.webp", alt: "Giraffes in Arusha", caption: "Close encounters with Giraffes" },
                    { src: "/images/destinations/arusha/arusha-6.webp", alt: "Colobus Monkey", caption: "Rare Black and White Colobus" },
                    { src: "/images/destinations/arusha/arusha-7.webp", alt: "Fig Tree Arch", caption: "Iconic Fig Tree Archway" },
                ]}
            />

            <section className="py-24 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Perfect Day Trip from Arusha</h2>
                    <p className="text-xl text-muted-foreground mb-10">Just 45 minutes from town - ideal for short visits</p>
                    <Button size="lg" asChild><Link href="/contact">Book Day Trip</Link></Button>
                </div>
            </section>
        </div>
    );
}
