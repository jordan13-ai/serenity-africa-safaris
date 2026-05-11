import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Check } from "lucide-react";

const parks = [
    { name: "Arusha National Park", duration: "10 hours", highlights: ["Mount Meru views", "Colobus monkeys", "Momella Lakes", "Walking safari option"] },
    { name: "Tarangire National Park", duration: "12 hours", highlights: ["Massive elephant herds", "Baobab trees", "Bird watching", "River wildlife"] },
    { name: "Ngorongoro Crater", duration: "12 hours", highlights: ["Big 5 in one day", "Crater floor game drive", "Black rhino sightings", "Spectacular views"] }
];

export default function OneDaySafariPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-24 bg-gradient-to-br from-primary/10 to-background">
                <div className="container max-w-5xl mx-auto px-4">
                    <Badge className="mb-4">One-Day Safari</Badge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">One-Day Safari Adventures</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Experience Tanzania's incredible wildlife in a single day. Perfect for layovers or short visits.
                    </p>
                    <Button size="lg" asChild><Link href="/contact">Book Day Safari</Link></Button>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center">Choose Your Park</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {parks.map((park, i) => (
                            <Card key={i} className="hover:shadow-xl transition-shadow">
                                <CardContent className="pt-8">
                                    <h3 className="font-bold text-2xl mb-4">{park.name}</h3>
                                    <div className="flex justify-between items-center mb-4 text-sm">
                                        <span className="flex items-center gap-1 text-muted-foreground">
                                            <Clock size={16} /> {park.duration}
                                        </span>
                                    </div>
                                    <div className="space-y-2 mb-6">
                                        {park.highlights.map((h, j) => (
                                            <div key={j} className="flex items-start gap-2 text-sm">
                                                <Check size={16} className="text-green-600 mt-0.5" />
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button className="w-full" asChild><Link href="/contact">Book This Park</Link></Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Short on Time? Not on Wildlife!</h2>
                    <p className="text-xl text-muted-foreground mb-10">See the Big 5 in just one day</p>
                    <Button size="lg" asChild><Link href="/contact">Get Quote</Link></Button>
                </div>
            </section>
        </div>
    );
}
