"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    Check,
    Info,
    Mountain,
    Calendar,
    Backpack,
    Heart,
    AlertTriangle,
    ArrowRight,
    ShieldCheck,
    Users,
    Thermometer,
    CloudRain
} from "lucide-react";
import { ImageGallery } from "@/components/sections/ImageGallery";

export default function KilimanjaroGuidePage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/destinations/kilimanjaro/kilimanjaro-1.webp")' }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-primary text-primary-foreground text-sm px-4 py-1">
                        CLIMBER'S RESOURCE
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                        The Ultimate Kilimanjaro Guide
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Everything you need to know to stand on the Roof of Africa. Preparation, gear, and expert tips for a successful summit.
                    </p>
                </div>
            </section>

            <div className="container max-w-7xl mx-auto px-4 py-16">
                <Tabs defaultValue="preparation" className="w-full">
                    <TabsList className="flex flex-wrap h-auto gap-2 bg-muted p-1 mb-12 rounded-xl">
                        <TabsTrigger value="preparation" className="flex-1 py-4 text-base rounded-lg">
                            Preparation & Training
                        </TabsTrigger>
                        <TabsTrigger value="when-to-go" className="flex-1 py-4 text-base rounded-lg">
                            When to Go
                        </TabsTrigger>
                        <TabsTrigger value="packing" className="flex-1 py-4 text-base rounded-lg">
                            Packing List
                        </TabsTrigger>
                        <TabsTrigger value="health" className="flex-1 py-4 text-base rounded-lg">
                            Health & Safety
                        </TabsTrigger>
                    </TabsList>

                    {/* Preparation Tab */}
                    <TabsContent value="preparation" className="space-y-12">
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-serif font-bold mb-6">Getting Ready for the Climb</h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    Kilimanjaro is a non-technical climb, but it is physically demanding. Success depends on your physical fitness, mental toughness, and how well your body adapts to high altitude.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Heart className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Cardiovascular Training</h3>
                                            <p className="text-muted-foreground">Focus on hiking, walking, or running to build stamina. Aim for at least 3-4 sessions per week starting 3-6 months before your climb.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Mountain className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Hiking with a Pack</h3>
                                            <p className="text-muted-foreground">The best preparation for hiking is hiking. Walk on inclines with a weighted daypack to simulate trail conditions.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Mental Preparation</h3>
                                            <p className="text-muted-foreground">Summit night is tough. Stay positive, trust your guides, and remember to take it "Pole Pole" (slowly, slowly).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-muted rounded-3xl p-8 border">
                                <h3 className="text-2xl font-serif font-bold mb-6">Training Recommended Schedule</h3>
                                <div className="space-y-6">
                                    <div className="border-l-4 border-primary pl-6 py-2">
                                        <div className="font-bold text-primary mb-1">Month 3-6</div>
                                        <p className="text-sm text-muted-foreground">Build base fitness. 45-60 min of cardio 3 times a week.</p>
                                    </div>
                                    <div className="border-l-4 border-primary pl-6 py-2">
                                        <div className="font-bold text-primary mb-1">Month 1-3</div>
                                        <p className="text-sm text-muted-foreground">Specific training. 2-4 hour weekend hikes with a 5kg pack.</p>
                                    </div>
                                    <div className="border-l-4 border-primary pl-6 py-2">
                                        <div className="font-bold text-primary mb-1">Last 2 Weeks</div>
                                        <p className="text-sm text-muted-foreground">Taper down. Light walks, stay hydrated, and get plenty of rest.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </TabsContent>

                    {/* When To Go Tab */}
                    <TabsContent value="when-to-go">
                        <section className="space-y-12">
                            <div className="text-center max-w-3xl mx-auto">
                                <h2 className="text-3xl font-serif font-bold mb-6">Best Time to Climb</h2>
                                <p className="text-lg text-muted-foreground">
                                    While you can climb Kilimanjaro year-round, certain months offer better weather conditions for a successful summit.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { season: "Jan - March", condition: "Best / Clear", desc: "Warm and clear skies. Excellent visibility and less rain.", icon: Calendar, color: "bg-green-500" },
                                    { season: "April - May", condition: "Long Rains", desc: "Heavy rain and slippery trails. Recommended only for experienced trekkers.", icon: CloudRain, color: "bg-blue-500" },
                                    { season: "June - Oct", condition: "Peak Season", desc: "Dry and cool. Busiest time on the mountain but best weather.", icon: Thermometer, color: "bg-orange-500" },
                                    { season: "Nov - Dec", condition: "Short Rains", desc: "Occasional rain showers, usually in the afternoons. Quieter trails.", icon: CloudRain, color: "bg-blue-300" }
                                ].map((item, i) => (
                                    <Card key={i} className="border-none shadow-lg">
                                        <CardHeader>
                                            <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-4`}>
                                                <item.icon className="text-white" />
                                            </div>
                                            <CardTitle>{item.season}</CardTitle>
                                            <Badge variant="secondary" className="w-fit">{item.condition}</Badge>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </TabsContent>

                    {/* Packing Tab */}
                    <TabsContent value="packing">
                        <section className="space-y-12">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                <div className="lg:col-span-1 space-y-6">
                                    <h2 className="text-3xl font-serif font-bold">Packing Essentials</h2>
                                    <p className="text-muted-foreground">
                                        Crucial to pack in layers. Temperatures range from 30°C in the rainforest to -15°C at the summit.
                                    </p>
                                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                        <h4 className="font-bold flex items-center gap-2 mb-2">
                                            <Info size={18} className="text-blue-600" />
                                            Weight Limits
                                        </h4>
                                        <p className="text-sm text-blue-800">
                                            Porters carry one duffel bag per person up to 15kg (33lbs). You will carry your own daypack with essentials.
                                        </p>
                                    </div>
                                    <Button className="w-full gap-2 py-6 text-lg" asChild>
                                        <Link href="/contact">Download Full Gear List (PDF) <ArrowRight size={18} /></Link>
                                    </Button>
                                </div>

                                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { title: "Clothing Layers", items: ["Base layer (moisture-wicking)", "Mid-layer (fleece/down luxury)", "Outer shell (waterproof)", "Summit jacket (heavy down)"], icon: Backpack },
                                        { title: "Footwear", items: ["Broken-in hiking boots", "Camp shoes/sneakers", "Thick thermal socks", "Lightweight liners"], icon: Mountain },
                                        { title: "Head & Hands", items: ["Sun hat & beanie", "Balaclava (summit night)", "Lightweight gloves", "Heavy waterproof mittens"], icon: Thermometer },
                                        { title: "Gear & Tech", items: ["Headlamp with extra batteries", "Power bank", "UV sunglasses", "Camera & spare memory"], icon: Backpack }
                                    ].map((cat, i) => (
                                        <Card key={i}>
                                            <CardHeader className="flex flex-row items-center gap-3">
                                                <cat.icon className="text-primary" />
                                                <CardTitle className="text-lg">{cat.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-2">
                                                    {cat.items.map((item, idx) => (
                                                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                                                            <Check size={16} className="text-green-600" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </TabsContent>

                    {/* Health Tab */}
                    <TabsContent value="health">
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <Card className="border-red-100 bg-red-50/30">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-red-800">
                                        <AlertTriangle size={24} />
                                        Altitude Sickness (AMS)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">
                                        Acute Mountain Sickness is the biggest challenge on Kilimanjaro. Our guides monitor your health twice daily using pulse oximeters.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-xl shadow-sm">
                                            <h4 className="font-bold text-sm mb-2">Common Symptoms</h4>
                                            <ul className="text-xs space-y-1 text-muted-foreground">
                                                <li>• Headache</li>
                                                <li>• Nausea / Loss of appetite</li>
                                                <li>• Fatigue / Dizziness</li>
                                                <li>• Shortness of breath</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm">
                                            <h4 className="font-bold text-sm mb-2">Prevention Tips</h4>
                                            <ul className="text-xs space-y-1 text-muted-foreground">
                                                <li>• Move very slowly (Pole Pole)</li>
                                                <li>• Drink 3-4 liters of water daily</li>
                                                <li>• Eat well (even without appetite)</li>
                                                <li>• Consider Diamox (consult doctor)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-serif font-bold">Vaccinations & Insurance</h3>
                                <div className="space-y-4">
                                    <div className="p-5 border rounded-2xl flex gap-4">
                                        <ShieldCheck className="text-primary shrink-0" size={24} />
                                        <div>
                                            <h4 className="font-bold">Mandatory Insurance</h4>
                                            <p className="text-sm text-muted-foreground">You must have travel insurance that specifically covers high-altitude trekking up to 6,000 meters and helicopter evacuation.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 border rounded-2xl flex gap-4">
                                        <Users className="text-primary shrink-0" size={24} />
                                        <div>
                                            <h4 className="font-bold">Vaccinations</h4>
                                            <p className="text-sm text-muted-foreground">Yellow Fever is required if traveling from an endemic zone. We also recommend consultation for Malaria prophylaxis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </TabsContent>
                </Tabs>

                <ImageGallery
                    title="Mount Kilimanjaro Gallery"
                    description="The diverse landscapes and inspiring moments from the Roof of Africa."
                    images={[
                        { src: "/images/destinations/kilimanjaro/kilimanjaro-2.webp", alt: "Kilimanjaro Summit", caption: "Sunrise at Uhuru Peak" },
                        { src: "/images/destinations/kilimanjaro/kilimanjaro-3.webp", alt: "Kilimanjaro Forest", caption: "Lush rainforest at the base" },
                        { src: "/images/destinations/kilimanjaro/kilimanjaro-4.webp", alt: "Kilimanjaro Moorland", caption: "Dramatic moorland landscapes" },
                        { src: "/images/destinations/kilimanjaro/kilimanjaro-5.webp", alt: "Climbers on Kili", caption: "The long journey upward" },
                        { src: "/images/destinations/kilimanjaro/kilimanjaro-6.webp", alt: "Kilimanjaro Glaciers", caption: "Ancient glaciers near the summit" },
                        { src: "/images/destinations/kilimanjaro/kilimanjaro-7.webp", alt: "Kili Camp Life", caption: "Resting at high altitude camps" },
                    ]}
                />

                {/* FAQ Section */}
                <section className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
                        <p className="text-xl text-muted-foreground">Everything else you might be wondering about.</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                { q: "How much should I tip the crew?", a: "Tipping is a mountain tradition. We recommend roughly $250-$350 per climber for the entire team (guides, porters, cooks) depending on group size." },
                                { q: "What is the food like on the mountain?", a: "High-carbohydrate meals are freshly prepared. Breakfast includes porridge, eggs, and toast. Lunch and dinner feature soups, starch (rice, pasta, potatoes), and meat or vegetable sauces." },
                                { q: "How do we go to the bathroom?", a: "We provide private chemical toilet tents at every camp - a standard luxury feature with Serenity Africa Safaris. No need to use public facilities." },
                                { q: "Can a beginner climb Kilimanjaro?", a: "Yes! If you are in good health and reasonably fit, you can summit. Choose a longer route (7-8 days) for much better acclimatization." },
                                { q: "Do I need a technical climbing experience?", a: "No. Kilimanjaro is a trekking peak. No ropes, harnesses, or technical skills are required - just walking." }
                            ].map((item, i) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="border-b last:border-0 border-muted">
                                    <AccordionTrigger className="text-left py-6 hover:no-underline font-semibold text-lg">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="mt-24 py-16 bg-primary/10 rounded-[3rem] text-center border border-primary/20">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Conquer Kili?</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Join our expert guides for the journey of a lifetime. Get a free, no-obligation quote and custom itinerary today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-7" asChild>
                                <Link href="/contact">Get Free Quote</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-7 border-2 border-primary text-primary hover:bg-primary hover:text-white" asChild>
                                <Link href="/kilimanjaro">View All Routes</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
