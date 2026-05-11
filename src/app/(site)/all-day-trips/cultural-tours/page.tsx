import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Home, Music, Heart } from "lucide-react";

const tours = [
    { icon: Users, name: "Maasai Village Visit", desc: "Spend a day with Maasai warriors, learn traditional dances, visit homesteads" },
    { icon: Home, name: "Hadzabe Tribe Experience", desc: "Join hunter-gatherers, learn ancient hunting, make fire traditionally" },
    { icon: Music, name: "Chagga Cultural Tour", desc: "Visit Chagga villages, learn coffee cultivation, enjoy local meals" }
];

export default function CulturalToursPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-24 bg-gradient-to-br from-primary/10 to-background">
                <div className="container max-w-5xl mx-auto px-4">
                    <Badge className="mb-4">Cultural Tours</Badge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Cultural Day Tours</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Meet local tribes, learn traditional customs, and experience authentic Tanzanian culture.
                    </p>
                    <Button size="lg" asChild><Link href="/contact">Book Cultural Tour</Link></Button>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center">Available Tours</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tours.map((tour, i) => (
                            <Card key={i} className="hover:shadow-xl transition-shadow">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <tour.icon className="text-purple-600" size={28} />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2 text-center">{tour.name}</h3>
                                    <p className="text-sm text-muted-foreground text-center mb-4">{tour.desc}</p>

                                    <Button className="w-full" asChild><Link href="/contact">Book Tour</Link></Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Experience Authentic Tanzania</h2>
                    <p className="text-xl text-muted-foreground mb-10">Connect with local communities and traditions</p>
                    <Button size="lg" asChild><Link href="/contact">Plan Cultural Experience</Link></Button>
                </div>
            </section>
        </div>
    );
}
