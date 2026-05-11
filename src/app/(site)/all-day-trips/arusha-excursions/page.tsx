import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Mountain, ShoppingBag, Utensils } from "lucide-react";

const activities = [
    { icon: Coffee, name: "Coffee Plantation Tour", desc: "Learn coffee-making process from bean to cup with tasting" },
    { icon: Mountain, name: "Mount Meru Foothills Hike", desc: "Easy hike through lush forests with waterfall visit" },
    { icon: ShoppingBag, name: "Arusha Market Tour", desc: "Explore vibrant local markets with cultural guide" },
    { icon: Utensils, name: "Tanzanian Cooking Class", desc: "Learn to cook traditional dishes with local chef" }
];

export default function ArushaExcursionsPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-24 bg-gradient-to-br from-primary/10 to-background">
                <div className="container max-w-5xl mx-auto px-4">
                    <Badge className="mb-4">Arusha Excursions</Badge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Arusha City & Surroundings</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Explore Tanzania's safari capital - markets, coffee plantations, hiking, and local culture.
                    </p>
                    <Button size="lg" asChild><Link href="/contact">Book Excursion</Link></Button>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center">Popular Activities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {activities.map((activity, i) => (
                            <Card key={i} className="hover:shadow-xl transition-shadow">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <activity.icon className="text-blue-600" size={28} />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-center">{activity.name}</h3>
                                    <p className="text-sm text-muted-foreground text-center mb-4">{activity.desc}</p>

                                    <Button size="sm" className="w-full" asChild><Link href="/contact">Book</Link></Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Discover Arusha</h2>
                    <p className="text-xl text-muted-foreground mb-10">Perfect for arrival or departure days</p>
                    <Button size="lg" asChild><Link href="/contact">Plan My Day</Link></Button>
                </div>
            </section>
        </div>
    );
}
