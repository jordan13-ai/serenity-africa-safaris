import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Mountain, Clock, MapPin, AlertTriangle, TrendingUp, Users, Calendar, ArrowRight, Star } from "lucide-react";
import { routesData } from "@/lib/kilimanjaro-routes-data";

interface RoutePageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all routes
export async function generateStaticParams() {
    return Object.keys(routesData).map((slug) => ({
        slug: slug,
    }));
}

export default async function RoutePage({ params }: RoutePageProps) {
    const { slug } = await params;
    const route = routesData[slug];

    if (!route) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("/images/destinations/kilimanjaro/kilimanjaro-${slug === 'lemosho-route' ? '1' : slug === 'machame-route' ? '2' : slug === 'marangu-route' ? '3' : slug === 'rongai-route' ? '4' : slug === 'umbwe-route' ? '5' : '6'}.webp")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4 pb-12">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-primary text-primary-foreground text-base px-4 py-2">
                            Mount Kilimanjaro
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
                            {route.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-6">
                            {route.subtitle}
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-6 text-white">
                            <div className="flex items-center gap-2">
                                <Calendar size={20} className="text-primary" />
                                <span className="font-semibold">{route.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mountain size={20} className="text-primary" />
                                <span className="font-semibold">{route.difficulty}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={20} className="text-primary" />
                                <span className="font-semibold">{route.distance}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp size={20} className="text-primary" />
                                <span className="font-semibold">{route.successRate} Success Rate</span>
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
                            <h2 className="text-3xl font-serif font-bold mb-6">Route Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                {route.overview}
                            </p>

                            {/* Best For */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-4">Best For:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {route.bestFor.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check size={20} className="text-green-600 shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Highlights */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Route Highlights:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {route.highlights.map((highlight, i) => (
                                        <Badge key={i} variant="secondary" className="text-sm px-3 py-1">
                                            {highlight}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Tabs Section */}
                        <Tabs defaultValue="itinerary" className="w-full">
                            <TabsList className="w-full justify-start h-auto p-1 bg-muted rounded-lg mb-8 overflow-x-auto flex-wrap">
                                <TabsTrigger value="itinerary" className="py-3 px-6 text-base">
                                    Day-by-Day Itinerary
                                </TabsTrigger>
                                <TabsTrigger value="packing" className="py-3 px-6 text-base">
                                    Packing List
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="py-3 px-6 text-base">
                                    FAQs
                                </TabsTrigger>
                            </TabsList>

                            {/* Itinerary Tab */}
                            <TabsContent value="itinerary" className="space-y-4">
                                <Accordion type="single" collapsible className="w-full space-y-3">
                                    {route.itinerary.map((day) => (
                                        <AccordionItem
                                            key={day.day}
                                            value={`day-${day.day}`}
                                            className="border rounded-lg bg-muted/30"
                                        >
                                            <AccordionTrigger className="hover:no-underline px-6 py-4">
                                                <div className="flex flex-col md:flex-row md:items-center text-left gap-2 md:gap-4 w-full">
                                                    <Badge variant="outline" className="w-fit">
                                                        Day {day.day}
                                                    </Badge>
                                                    <span className="font-semibold text-lg">{day.title}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 pb-6">
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Mountain size={16} className="text-primary" />
                                                        <span>{day.elevation}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <MapPin size={16} className="text-primary" />
                                                        <span>{day.distance}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Clock size={16} className="text-primary" />
                                                        <span>{day.time}</span>
                                                    </div>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed mb-3">
                                                    {day.description}
                                                </p>
                                                <div className="flex flex-wrap gap-4 text-sm">
                                                    <div>
                                                        <span className="font-semibold">Terrain:</span>{" "}
                                                        <span className="text-muted-foreground">{day.terrain}</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold">Meals:</span>{" "}
                                                        <span className="text-muted-foreground">{day.meals}</span>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </TabsContent>

                            {/* Packing List Tab */}
                            <TabsContent value="packing">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-serif">
                                            Essential Packing List
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {route.packingEssentials.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <Check size={18} className="text-primary shrink-0 mt-1" />
                                                    <span className="text-muted-foreground">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                                <strong>Note:</strong> We can arrange sleeping bag and trekking pole rentals if needed.
                                                Contact us for availability and pricing.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* FAQ Tab */}
                            <TabsContent value="faq">
                                <Accordion type="single" collapsible className="w-full space-y-3">
                                    {route.faqs.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`faq-${index}`}
                                            className="border rounded-lg px-6 bg-muted/30"
                                        >
                                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </TabsContent>
                        </Tabs>

                        {/* Accommodation & Meals */}
                        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Mountain className="text-primary" size={24} />
                                        Accommodation
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{route.accommodation}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Check className="text-primary" size={24} />
                                        Meals
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{route.meals}</p>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Best Time */}
                        <section className="mt-12">
                            <Card className="border-primary/20">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Calendar className="text-primary" size={24} />
                                        Best Time to Climb
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">{route.bestTime}</p>
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
                                    {route.pricing && route.pricing.length > 0 ? (
                                        <>
                                            <div>
                                                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">
                                                    Starting From
                                                </p>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-4xl font-bold font-serif text-primary">
                                                        {route.pricing[route.pricing.length - 1].price.split(' ')[0]}
                                                    </span>
                                                    <span className="text-muted-foreground">/ person</span>
                                                </div>
                                            </div>
                                            <div className="space-y-3 pt-4 border-t border-dashed">
                                                <h4 className="font-semibold text-sm uppercase tracking-wide">Group Pricing</h4>
                                                {route.pricing.map((price, i) => (
                                                    <div key={i} className="flex justify-between text-sm">
                                                        <span className="font-medium text-foreground">{price.pax}</span>
                                                        <span className="font-bold text-primary">{price.price}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <div>
                                            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Pricing</p>
                                            <p className="text-sm text-muted-foreground">Contact us for pricing details.</p>
                                        </div>
                                    )}

                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md flex items-start gap-3 text-sm text-blue-700 dark:text-blue-300">
                                        <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                                        <p>Prices exclude international flights and tips. Group discounts available.</p>
                                    </div>

                                    <Button size="lg" className="w-full text-lg font-semibold py-6" asChild>
                                        <Link href="/request-quote">Request a Quote</Link>
                                    </Button>

                                    <div className="text-center">
                                        <Button variant="link" className="text-primary text-sm">
                                            Download Itinerary PDF
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Why Book With Us */}
                            <Card className="bg-muted/50">
                                <CardHeader>
                                    <CardTitle className="text-lg font-serif">Why Trek with Wisdom?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <Check size={14} />
                                            </div>
                                            <span>{route.successRate} Summit Success Rate</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <Check size={14} />
                                            </div>
                                            <span>Professional Local Guides</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <Check size={14} />
                                            </div>
                                            <span>Private Toilet Tent Included</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <Check size={14} />
                                            </div>
                                            <span>Daily Health Monitoring</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <Check size={14} />
                                            </div>
                                            <span>Emergency Evacuation Cover</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Other Routes */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg font-serif">Explore Other Routes</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {Object.values(routesData)
                                            .filter(r => r.slug !== route.slug)
                                            .slice(0, 3)
                                            .map((r) => (
                                                <Link
                                                    key={r.slug}
                                                    href={`/kilimanjaro/${r.slug}`}
                                                    className="block p-3 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all group"
                                                >
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                                            {r.title}
                                                        </h4>
                                                        <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                                    </div>
                                                    <div className="flex gap-3 text-xs text-muted-foreground">
                                                        <span>{r.duration}</span>
                                                        <span>•</span>
                                                        <span>{r.successRate} Success</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        <Link href="/kilimanjaro">
                                            <Button variant="outline" className="w-full mt-2" size="sm">
                                                View All Routes
                                            </Button>
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
                        Ready to Climb the {route.title}?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Join hundreds of successful climbers who have reached Uhuru Peak with Serenity Africa Safaris
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6" asChild>
                            <Link href="/request-quote">Get a Free Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                            <Link href="/kilimanjaro/guide">Read Complete Guide</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
