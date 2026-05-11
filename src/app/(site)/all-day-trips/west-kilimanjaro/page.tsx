import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Clock, Users, Check, X, MapPin, Camera, TrendingUp, AlertTriangle } from "lucide-react";

export default function WestKilimanjaroPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/destinations/kilimanjaro/kilimanjaro-1.webp")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4 pb-12">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-primary text-primary-foreground text-base px-4 py-2">
                            Day Hike
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
                            West Kilimanjaro Day Hike
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-6">
                            Explore the Shira Plateau - Kilimanjaro's western alpine wonderland
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-6 text-white">
                            <div className="flex items-center gap-2">
                                <Clock size={20} className="text-primary" />
                                <span className="font-semibold">Full Day (8-10 hours)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mountain size={20} className="text-primary" />
                                <span className="font-semibold">3,500-3,800m</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={20} className="text-primary" />
                                <span className="font-semibold">8-12 km round-trip</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Overview */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-serif font-bold mb-6">Experience Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                This unique day hike gives you a taste of Kilimanjaro's western side, exploring the stunning Shira Plateau without the commitment of a full summit climb. You'll trek across elevated alpine landscapes with dramatic views of Kilimanjaro's peaks and unique volcanic terrain.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Perfect for those short on time, testing altitude tolerance, or wanting to experience Kilimanjaro's beauty without multi-day camping. The Shira Plateau sits at 3,500-3,800m, offering spectacular panoramic views and a true high-altitude experience.
                            </p>
                        </section>

                        {/* Itinerary */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-serif font-bold mb-6">Typical Itinerary</h2>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <span className="font-bold text-primary">1</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2">Early Morning Pickup</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Depart from Moshi or Arusha hotel early morning (6:00-7:00 AM) for the scenic drive to Londorossi Gate / Shira Route area on Kilimanjaro's western side.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <span className="font-bold text-primary">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2">Registration & Trek Start</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Complete park registration at the western entry point, then begin your hike across the Shira Plateau. Trek through moorlands and volcanic terrain with increasingly spectacular views.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <span className="font-bold text-primary">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2">Shira Plateau Exploration</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Explore key viewpoints such as Cathedral Point or Shira 1 Camp area (~3,500-3,800m). Enjoy a picnic lunch with panoramic views of Kilimanjaro's peaks and the surrounding landscape.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <span className="font-bold text-primary">4</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2">Return & Hotel Drop-off</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Descend and return to the gate, then drive back to your hotel in Moshi or Arusha, arriving by late afternoon or evening.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Highlights */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-serif font-bold mb-6">Highlights</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Shira Plateau alpine landscape",
                                    "Cathedral Point viewpoint",
                                    "Volcanic terrain exploration",
                                    "Panoramic Kilimanjaro views",
                                    "High-altitude experience (3,500-3,800m)",
                                    "Professional mountain guide",
                                    "Unique western side access",
                                    "No camping required"
                                ].map((highlight, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-green-600 shrink-0 mt-0.5" />
                                        <span>{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* What's Included/Excluded */}
                        <section className="mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="border-green-200 bg-green-50/50 dark:bg-green-900/10">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                                            <Check size={20} />
                                            What's Included
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2 text-sm">
                                            {[
                                                "Pickup & drop-off (Moshi/Arusha hotel)",
                                                "Kilimanjaro National Park entry & permits",
                                                "Professional mountain guide",
                                                "Transport to/from western access gate",
                                                "Packed lunch & bottled water",
                                                "Guiding and safety support",
                                                "All park fees and taxes"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <Check size={14} className="text-green-600 shrink-0 mt-1" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="border-red-200 bg-red-50/50 dark:bg-red-900/10">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                                            <X size={20} />
                                            What's Excluded
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2 text-sm">
                                            {[
                                                "International flights",
                                                "Tanzania visa fees",
                                                "Travel or trekking insurance",
                                                "Tips for guides/crew",
                                                "Personal gear (boots, jackets if not provided)",
                                                "Personal expenses",
                                                "Accommodation before/after trip"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <X size={14} className="text-red-600 shrink-0 mt-1" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        {/* Important Notes */}
                        <section className="mb-12">
                            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-900/10">
                                <CardContent className="pt-6">
                                    <div className="flex gap-3">
                                        <AlertTriangle className="text-blue-600 shrink-0" size={24} />
                                        <div>
                                            <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-200">Important Information</h4>
                                            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
                                                <li>• This is a high-altitude hike (3,500-3,800m). Some altitude effects are possible.</li>
                                                <li>• Moderate fitness level required. Expect 8-12 km of walking on uneven terrain.</li>
                                                <li>• Weather can change quickly at altitude. Bring warm layers and rain gear.</li>
                                                <li>• Best time: January-March and June-October (dry seasons).</li>
                                                <li>• Minimum 2 people usually required. Solo travelers may pay a premium.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Pricing Card */}
                            <Card className="border-primary/20 shadow-lg">
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                                <CardContent className="pt-8 space-y-6">
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">
                                            Bespoke Day Hike
                                        </p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-bold font-serif text-primary">
                                                Private Expedition
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-4 border-t border-dashed">
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Every West Kilimanjaro day hike is customized to your group size and preferences. Contact us for a personalized itinerary and quote.
                                        </p>
                                    </div>

                                    <Button size="lg" className="w-full text-lg font-semibold py-6" asChild>
                                        <Link href="/request-quote">Enquire Now</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Quick Facts */}
                            <Card className="bg-muted/50">
                                <CardHeader>
                                    <CardTitle className="text-lg font-serif">Quick Facts</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4 text-sm">
                                        <div className="flex items-start gap-3">
                                            <Mountain className="text-primary shrink-0" size={18} />
                                            <div>
                                                <p className="font-semibold">Difficulty</p>
                                                <p className="text-muted-foreground">Moderate</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Clock className="text-primary shrink-0" size={18} />
                                            <div>
                                                <p className="font-semibold">Duration</p>
                                                <p className="text-muted-foreground">Full day (8-10 hours total)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <TrendingUp className="text-primary shrink-0" size={18} />
                                            <div>
                                                <p className="font-semibold">Max Altitude</p>
                                                <p className="text-muted-foreground">3,500-3,800m</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Users className="text-primary shrink-0" size={18} />
                                            <div>
                                                <p className="font-semibold">Group Size</p>
                                                <p className="text-muted-foreground">2+ people (solo possible)</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Other Day Trips */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg font-serif">Other Day Trips</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <Link
                                            href="/all-day-trips/kili-hiking"
                                            className="block p-3 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all"
                                        >
                                            <h4 className="font-semibold text-sm mb-1">Kilimanjaro Day Hikes</h4>
                                            <p className="text-xs text-muted-foreground">Mandara Hut, Materuni, Lake Chala</p>
                                        </Link>
                                        <Link
                                            href="/all-day-trips"
                                            className="block p-3 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all"
                                        >
                                            <h4 className="font-semibold text-sm mb-1">All Day Trips</h4>
                                            <p className="text-xs text-muted-foreground">View all available day trips</p>
                                        </Link>
                                        <Link
                                            href="/kilimanjaro"
                                            className="block p-3 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all"
                                        >
                                            <h4 className="font-semibold text-sm mb-1">Full Summit Climbs</h4>
                                            <p className="text-xs text-muted-foreground">6-9 day Kilimanjaro expeditions</p>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <section className="py-16 bg-primary/10">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        Experience Kilimanjaro's Western Beauty
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Book your Shira Plateau day hike and discover why this is one of Tanzania's most spectacular alpine landscapes
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6" asChild>
                            <Link href="/contact">Get a Free Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                            <Link href="/all-day-trips">View All Day Trips</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div >
    );
}
