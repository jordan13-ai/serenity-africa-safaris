import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Coffee, Footprints, Check } from "lucide-react";

const excursions = [
    { icon: Droplets, name: "Chemka Hot Springs", duration: "4-5 hours", desc: "Swim in crystal-clear natural hot springs surrounded by lush vegetation" },
    { icon: Coffee, name: "Coffee Plantation Tour", duration: "3-4 hours", desc: "Learn coffee-making from bean to cup with traditional Chagga lunch" },
    { icon: Footprints, name: "Materuni Waterfalls", duration: "5-6 hours", desc: "Hike to stunning 80m waterfall with coffee tour included" }
];

export default function MoshiExcursionsPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-24 bg-gradient-to-br from-primary/10 to-background">
                <div className="container max-w-5xl mx-auto px-4">
                    <Badge className="mb-4">Moshi Excursions</Badge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Moshi & Surroundings</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Explore the beautiful areas around Moshi - hot springs, waterfalls, coffee plantations, and local culture.
                    </p>
                    <Button size="lg" asChild><Link href="/contact">Book Excursion</Link></Button>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center">Popular Excursions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {excursions.map((exc, i) => (
                            <Card key={i} className="hover:shadow-xl transition-shadow">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <exc.icon className="text-primary" size={28} />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2 text-center">{exc.name}</h3>
                                    <p className="text-sm text-muted-foreground text-center mb-4">{exc.desc}</p>
                                    <div className="flex justify-between items-center mb-4 text-sm">
                                        <span className="text-muted-foreground">{exc.duration}</span>
                                    </div>
                                    <Button className="w-full" asChild><Link href="/contact">Book Now</Link></Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Relax & Explore Moshi</h2>
                    <p className="text-xl text-muted-foreground mb-10">Perfect for rest days or post-climb relaxation</p>
                    <Button size="lg" asChild><Link href="/contact">Plan My Day</Link></Button>
                </div>
            </section>
        </div>
    );
}
