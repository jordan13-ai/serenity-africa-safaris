import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Clock, Users, Check, DollarSign, Coffee, Waves, Camera } from "lucide-react";

const dayTrips = [
    {
        name: "Kilimanjaro Day Hike",
        subtitle: "Mandara Hut & Maundi Crater",
        duration: "5-7 hours",
        elevation: "1,860m to 2,700m",
        difficulty: "Moderate",
        icon: Mountain,
        description: "Hike from Marangu Gate through rainforest to Mandara Hut. Optional visit to Maundi Crater for panoramic views.",
        highlights: ["Rainforest wildlife", "Mandara Hut", "Maundi Crater views", "Taste of Kilimanjaro"],
        includes: ["Park fees", "English-speaking guide", "Transport from Moshi", "Packed lunch & water"],
        excludes: ["Personal equipment", "Gratuities", "Travel insurance"]
    },
    {
        name: "Materuni Waterfalls + Hot Springs",
        subtitle: "Village, Coffee & Nature",
        duration: "Full day",
        elevation: "1,400m to 1,800m",
        difficulty: "Easy-Moderate",
        icon: Waves,
        description: "Visit Materuni Village for a scenic waterfall hike and coffee experience, then relax at Kikuletwa (Chemka) Hot Springs.",
        highlights: ["Materuni Waterfalls", "Coffee plantation tour", "Cultural experience", "Natural hot springs"],
        includes: ["Transport from Moshi", "English-speaking guide", "Village fees", "Lunch & water"],
        excludes: ["Personal gear", "Gratuities", "Travel insurance"]
    },
    {
        name: "Materuni Waterfall + Coffee Tour",
        subtitle: "Budget Cultural Experience",
        duration: "Half day",
        elevation: "1,400m to 1,800m",
        difficulty: "Easy",
        icon: Coffee,
        description: "Simpler day trip focusing on Materuni Waterfall and traditional coffee tasting without the hot springs.",
        highlights: ["Scenic waterfall", "Traditional coffee roasting", "Chagga culture", "Budget-friendly"],
        includes: ["Transport from Moshi", "Guide", "Village entry fee", "Coffee tasting"],
        excludes: ["Lunch (on own)", "Gratuities", "Travel insurance"]
    },
    {
        name: "Lake Chala Day Trip",
        subtitle: "Crater Lake Adventure",
        duration: "Full day",
        elevation: "880m (lake level)",
        difficulty: "Easy-Moderate",
        icon: Camera,
        description: "Visit the stunning crater lake on the Tanzania-Kenya border. Great for views, photos, short walks, and optional kayaking.",
        highlights: ["Crater lake views", "Tanzania-Kenya border", "Photography", "Swimming/kayaking options"],
        includes: ["Transport from Moshi", "Guide", "Lake entry fee", "Packed lunch & water"],
        excludes: ["Kayak hire (optional)", "Gratuities", "Travel insurance"]
    }
];

export default function KiliHikingPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-primary/10 to-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <Badge className="mb-4">Kilimanjaro Day Trips</Badge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Experience Kilimanjaro in a Day
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                        Don't have time for a full climb? Explore Kilimanjaro's beauty, culture, and nature with our carefully curated day trips. Perfect for those short on time or wanting to test altitude tolerance.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg" asChild>
                            <Link href="/contact">Book a Day Trip</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/kilimanjaro">Full Climbs</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Day Trips Grid */}
            <section className="py-24 bg-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center">Available Day Trips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {dayTrips.map((trip, i) => (
                            <Card key={i} className="hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                            <trip.icon className="text-primary" size={24} />
                                        </div>
                                        <Badge variant="secondary">{trip.difficulty}</Badge>
                                    </div>
                                    <CardTitle className="text-2xl font-serif mb-2">{trip.name}</CardTitle>
                                    <p className="text-sm text-primary font-semibold">{trip.subtitle}</p>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <p className="text-muted-foreground">{trip.description}</p>

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className="text-primary" />
                                            <span>{trip.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Mountain size={16} className="text-primary" />
                                            <span>{trip.elevation}</span>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div>
                                        <h4 className="font-semibold mb-2 text-sm">Highlights:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {trip.highlights.map((highlight, idx) => (
                                                <Badge key={idx} variant="outline" className="text-xs">
                                                    {highlight}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>



                                    {/* Includes/Excludes */}
                                    <div className="grid grid-cols-1 gap-4 text-sm">
                                        <div>
                                            <h5 className="font-semibold mb-2 text-green-600">✓ Includes:</h5>
                                            <ul className="space-y-1">
                                                {trip.includes.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <Check size={14} className="text-green-600 shrink-0 mt-0.5" />
                                                        <span className="text-muted-foreground">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold mb-2 text-red-600">✗ Excludes:</h5>
                                            <ul className="space-y-1">
                                                {trip.excludes.map((item, idx) => (
                                                    <li key={idx} className="text-muted-foreground text-xs">
                                                        • {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <Button className="w-full" asChild>
                                        <Link href="/contact">Book This Trip</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="py-16 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4">
                    <h3 className="text-2xl font-serif font-bold mb-6 text-center">Important Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <Card>
                            <CardContent className="pt-6">
                                <h4 className="font-semibold mb-3">Tipping Guidelines</h4>
                                <p className="text-sm text-muted-foreground">
                                    Tips are not included but appreciated. Consider $10-$25 per person for day trip guides and crew.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-background">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready for Your Kilimanjaro Adventure?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Whether it's a day trip or a full summit climb, we're here to make it unforgettable
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Book Now</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/kilimanjaro">View Full Climbs</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
