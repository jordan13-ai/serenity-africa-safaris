import Link from "next/link";
import Image from "next/image";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Users, Mountain, Clock, Check, Shield, Heart, Thermometer, Calendar, MapPin, ArrowRight, TrendingUp } from "lucide-react";

const routes = [
    {
        title: "Lemosho Route",
        slug: "lemosho-route",
        description: "The premier route for acclimatization and scenic views. Approaching from the west, offering the highest success rates.",
        duration: "7-8 Days",
        difficulty: "Medium",
        successRate: "95%",
        sceneryRating: 5,
        crowdLevel: "Medium",
        image: "/images/destinations/kilimanjaro/kilimanjaro-1.webp",
        bestFor: "First-timers seeking high success",
        highlights: ["Shira Plateau", "Southern Circuit", "Panoramic Views"]
    },
    {
        title: "Machame Route",
        slug: "machame-route",
        description: "The popular 'Whiskey Route'. Known for its steep profile, scenic beauty, and excellent climb-high sleep-low opportunities.",
        duration: "6-7 Days",
        difficulty: "Hard",
        successRate: "85%",
        sceneryRating: 5,
        crowdLevel: "High",
        image: "/images/destinations/kilimanjaro/kilimanjaro-2.webp",
        bestFor: "Adventurous trekkers",
        highlights: ["Lava Tower", "Barranco Wall", "Varied Terrain"]
    },
    {
        title: "Marangu Route",
        slug: "marangu-route",
        description: "The classic 'Coca-Cola Route'. The only trail offering hut accommodation instead of camping.",
        duration: "5-6 Days",
        difficulty: "Medium",
        successRate: "75%",
        sceneryRating: 3,
        crowdLevel: "High",
        image: "/images/destinations/kilimanjaro/kilimanjaro-3.webp",
        bestFor: "Those preferring hut comfort",
        highlights: ["Mandara Hut", "Horombo Hut", "The Saddle"]
    },
    {
        title: "Rongai Route",
        slug: "rongai-route",
        description: "The only route approaching from the north. Drier, wilder, and less crowded than southern routes.",
        duration: "6-7 Days",
        difficulty: "Medium",
        successRate: "80%",
        sceneryRating: 4,
        crowdLevel: "Low",
        image: "/images/destinations/kilimanjaro/kilimanjaro-4.webp",
        bestFor: "Those seeking solitude",
        highlights: ["Mawenzi Peak Views", "Wildlife Sightings", "Quiet Trails"]
    },
    {
        title: "Umbwe Route",
        slug: "umbwe-route",
        description: "The steepest and most challenging route. Recommended only for experienced trekkers looking for a quiet climb.",
        duration: "6 Days",
        difficulty: "Experts Only",
        successRate: "60%",
        sceneryRating: 5,
        crowdLevel: "Low",
        image: "/images/destinations/kilimanjaro/kilimanjaro-5.webp",
        bestFor: "Experienced mountaineers",
        highlights: ["Steep Ascent", "Western Breach", "Solitude"]
    },
    {
        title: "Northern Circuit",
        slug: "northern-circuit",
        description: "The newest and longest route on Kilimanjaro. Unmatched 360-degree scenery and the highest summit success rate.",
        duration: "9 Days",
        difficulty: "Medium-Hard",
        successRate: "98%",
        sceneryRating: 5,
        crowdLevel: "Very Low",
        image: "/images/destinations/kilimanjaro/kilimanjaro-6.webp",
        bestFor: "Those wanting the best acclimatization",
        highlights: ["360° Views", "Complete Solitude", "Highest Success Rate"]
    }
];

const generalItinerary = [
    {
        day: "Day 0",
        title: "Arrival in Moshi",
        description: "Arrive at Kilimanjaro International Airport. Transfer to your hotel in Moshi. Meet your guide for a comprehensive briefing and gear check. Rest and prepare for your adventure."
    },
    {
        day: "Days 1-5",
        title: "Ascent Through Ecological Zones",
        description: "Trek through five distinct climate zones: rainforest, heath and moorland, alpine desert, and finally the arctic summit zone. Each day brings new landscapes, from lush vegetation to barren volcanic rock."
    },
    {
        day: "Summit Night",
        title: "Midnight Push to Uhuru Peak",
        description: "Begin around midnight for the final ascent. Reach Stella Point at dawn (5,756m), then continue to Uhuru Peak (5,895m) - the Roof of Africa. Witness the sunrise over the glaciers before descending."
    },
    {
        day: "Final Days",
        title: "Descent & Celebration",
        description: "Descend through the moorland and rainforest zones. Receive your summit certificate at the gate. Transfer back to Moshi for a well-deserved celebration and hot shower."
    }
];

const faqs = [
    {
        question: "Do I need prior climbing experience?",
        answer: "No technical climbing skills are required. Kilimanjaro is a trek, not a technical climb. However, you should be in good physical condition and comfortable hiking for 5-8 hours per day."
    },
    {
        question: "What is the success rate?",
        answer: "Success rates vary by route and duration. Longer routes (7-9 days) have success rates of 85-98%, while shorter routes (5-6 days) average 60-75%. Serenity Africa Safaris maintains above-average success rates through proper acclimatization protocols."
    },
    {
        question: "When is the best time to climb?",
        answer: "The best months are January-March and June-October. These periods offer the driest weather and clearest views. December and April-May are wetter but less crowded."
    },
    {
        question: "How cold does it get?",
        answer: "Temperatures range from 25°C (77°F) in the rainforest to -20°C (-4°F) at the summit. Proper layering and quality gear are essential."
    },
    {
        question: "What about altitude sickness?",
        answer: "Altitude sickness is a risk above 3,000m. We mitigate this through gradual ascent, 'climb high, sleep low' strategies, daily health checks, and experienced guides trained in altitude illness recognition."
    },
    {
        question: "How fit do I need to be?",
        answer: "You should be able to hike 5-8 hours per day carrying a light daypack. We recommend 3-6 months of cardiovascular training including hiking, running, cycling, and stair climbing."
    },
    {
        question: "What is included in the price?",
        answer: "All park fees, professional guides, porters, cook, meals on the mountain, camping equipment, oxygen, first aid, and emergency evacuation insurance are included. Flights, tips, and personal gear are not included."
    },
    {
        question: "Can I charge my devices?",
        answer: "There is no electricity on the mountain. Bring portable power banks and extra batteries. Some routes have solar charging at certain camps (additional fee)."
    }
];

export default function KilimanjaroMainPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/destinations/kilimanjaro/kilimanjaro-12.webp")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <Badge className="mb-6 bg-primary text-primary-foreground text-base px-4 py-2">
                        Africa's Highest Peak
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        Mount Kilimanjaro
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 mb-4 leading-relaxed max-w-3xl mx-auto">
                        Stand on the Roof of Africa at 5,895 meters
                    </p>
                    <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
                        Climb with Serenity Africa Safaris - your local experts with over 15 years of experience and a 95% summit success rate
                    </p>

                    {/* Key Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <div className="text-3xl font-bold text-primary mb-1">5,895m</div>
                            <div className="text-sm text-gray-200">Uhuru Peak</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <div className="text-3xl font-bold text-primary mb-1">95%</div>
                            <div className="text-sm text-gray-200">Success Rate</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <div className="text-3xl font-bold text-primary mb-1">6</div>
                            <div className="text-sm text-gray-200">Routes</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <div className="text-3xl font-bold text-primary mb-1">5-9</div>
                            <div className="text-sm text-gray-200">Days</div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6 font-semibold" asChild>
                            <Link href="#routes">View All Routes</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-semibold text-white border-2 border-white hover:bg-white hover:text-black" asChild>
                            <Link href="/request-quote">Request a Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* About Mount Kilimanjaro */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                                About Mount Kilimanjaro
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                                <p>
                                    Mount Kilimanjaro is the highest mountain in Africa and the tallest free-standing mountain in the world, rising 5,895 meters (19,341 feet) above sea level. Located in northeastern Tanzania near the Kenyan border, this dormant stratovolcano is one of the Seven Summits and attracts over 50,000 climbers annually.
                                </p>
                                <p>
                                    What makes Kilimanjaro truly unique is that it requires no technical climbing skills - it's a challenging trek accessible to anyone with determination and proper preparation. The mountain features three volcanic cones: Kibo (the highest), Mawenzi, and Shira.
                                </p>
                                <p>
                                    Climbers journey through five distinct ecological zones: cultivated farmland, lush rainforest, heath and moorland, alpine desert, and finally the arctic summit zone with its glaciers and ice fields. This incredible diversity in just a few days of trekking is unmatched anywhere on Earth.
                                </p>
                                <p>
                                    For the Chagga people who live on Kilimanjaro's slopes, the mountain is sacred. Its name likely derives from the Swahili words "Kilima" (mountain) and "Njaro" (whiteness), referring to its snow-capped peak - though sadly, climate change is causing these glaciers to recede.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: 'url("/images/destinations/kilimanjaro/kilimanjaro-15.webp")' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* General Kilimanjaro Itinerary Overview */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                            What to Expect: A Typical Climb
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            While each route differs, here's a general overview of what your Kilimanjaro adventure will look like
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {generalItinerary.map((item, index) => (
                            <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Mountain className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <Badge variant="outline" className="mb-2">{item.day}</Badge>
                                            <CardTitle className="text-xl font-serif">{item.title}</CardTitle>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground mb-6">
                            For detailed day-by-day itineraries, explore our individual route pages below
                        </p>
                    </div>
                </div>
            </section>

            {/* Routes Overview */}
            <section id="routes" className="py-24 bg-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                            Choose Your Route
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Six distinct paths to the summit, each offering unique experiences, challenges, and scenery
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {routes.map((route) => (
                            <Card key={route.slug} className="flex flex-col group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="relative h-64 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${route.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <Badge className="absolute top-4 left-4 bg-black/70 hover:bg-black/80 text-white">
                                        {route.duration}
                                    </Badge>
                                    {route.sceneryRating === 5 && (
                                        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                                            Best Scenery
                                        </Badge>
                                    )}
                                    {route.successRate === "98%" && (
                                        <Badge className="absolute bottom-4 left-4 bg-green-600 text-white">
                                            Highest Success
                                        </Badge>
                                    )}
                                </div>

                                <CardHeader>
                                    <CardTitle className="font-serif text-2xl mb-2">{route.title}</CardTitle>
                                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Mountain size={16} className="text-primary" />
                                            {route.difficulty}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users size={16} className="text-primary" />
                                            {route.crowdLevel}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <TrendingUp size={16} className="text-primary" />
                                            {route.successRate}
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {route.description}
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-sm font-semibold text-foreground mb-2">Best For:</p>
                                        <p className="text-sm text-muted-foreground">{route.bestFor}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground mb-2">Highlights:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {route.highlights.map((highlight, i) => (
                                                <Badge key={i} variant="secondary" className="text-xs">
                                                    {highlight}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter>
                                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
                                        <Link href={`/kilimanjaro/${route.slug}`}>
                                            View Full Itinerary <ArrowRight size={16} className="ml-2" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {/* Route Comparison Quick Guide */}
                    <div className="mt-16 bg-muted/50 rounded-2xl p-8">
                        <h3 className="text-2xl font-serif font-bold mb-6 text-center">Quick Route Comparison</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                            <div>
                                <p className="font-semibold text-sm mb-2 text-muted-foreground">Easiest</p>
                                <p className="font-bold text-primary">Marangu</p>
                            </div>
                            <div>
                                <p className="font-semibold text-sm mb-2 text-muted-foreground">Most Scenic</p>
                                <p className="font-bold text-primary">Lemosho</p>
                            </div>
                            <div>
                                <p className="font-semibold text-sm mb-2 text-muted-foreground">Most Popular</p>
                                <p className="font-bold text-primary">Machame</p>
                            </div>
                            <div>
                                <p className="font-semibold text-sm mb-2 text-muted-foreground">Quietest</p>
                                <p className="font-bold text-primary">Northern Circuit</p>
                            </div>
                            <div>
                                <p className="font-semibold text-sm mb-2 text-muted-foreground">Best Success</p>
                                <p className="font-bold text-primary">Northern Circuit</p>
                            </div>
                            <div>
                                <p className="font-semibold text-sm mb-2 text-muted-foreground">Most Challenging</p>
                                <p className="font-bold text-primary">Umbwe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ImageGallery
                title="Kilimanjaro Expedition Gallery"
                description="Witness the diverse landscapes and the final push to Uhuru Peak."
                images={[
                    { src: "/images/destinations/kilimanjaro/kilimanjaro-7.webp", alt: "Kili Scene", caption: "Climbing through the alpine desert" },
                    { src: "/images/destinations/kilimanjaro/kilimanjaro-8.webp", alt: "Kili Camp", caption: "Base camp with a view" },
                    { src: "/images/destinations/kilimanjaro/kilimanjaro-9.webp", alt: "Kili Summit Sunrise", caption: "Reaching the peak at dawn" },
                    { src: "/images/destinations/kilimanjaro/kilimanjaro-10.webp", alt: "Kili Flora", caption: "Endemic Senecio plants" },
                    { src: "/images/destinations/kilimanjaro/kilimanjaro-11.webp", alt: "Kili Glacier", caption: "Ancient ice on the equator" },
                    { src: "/images/destinations/kilimanjaro/kilimanjaro-12.webp", alt: "Kili Team", caption: "Our expert mountain guides" },
                ]}
            />

            {/* Best Time to Climb */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                            Best Time to Climb Mount Kilimanjaro
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Kilimanjaro can be climbed year-round, but certain months offer better conditions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <Card className="border-2 border-primary/20">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <Calendar className="text-primary" size={32} />
                                    <CardTitle className="text-2xl font-serif">January - March</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                                        <Check size={18} className="text-green-600" />
                                        Advantages
                                    </h4>
                                    <ul className="space-y-2 text-muted-foreground ml-6">
                                        <li>• Warmest temperatures on the mountain</li>
                                        <li>• Clear skies and excellent visibility</li>
                                        <li>• Less crowded than June-October</li>
                                        <li>• Beautiful views of the glaciers</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-muted-foreground">Conditions</h4>
                                    <p className="text-muted-foreground">
                                        Dry season with minimal rainfall. Daytime temperatures range from 20-25°C in lower zones, -10 to -20°C at summit.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-primary/20">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <Calendar className="text-primary" size={32} />
                                    <CardTitle className="text-2xl font-serif">June - October</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                                        <Check size={18} className="text-green-600" />
                                        Advantages
                                    </h4>
                                    <ul className="space-y-2 text-muted-foreground ml-6">
                                        <li>• Driest months of the year</li>
                                        <li>• Most stable weather conditions</li>
                                        <li>• Coincides with Northern Hemisphere summer</li>
                                        <li>• Best for combining with safari</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-muted-foreground">Conditions</h4>
                                    <p className="text-muted-foreground">
                                        Peak climbing season. Colder than January-March but very dry. More crowded on popular routes. Book 6-12 months in advance.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-start gap-4">
                            <Thermometer className="text-blue-600 dark:text-blue-400 shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Other Months</h4>
                                <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                                    <strong>April-May</strong> and <strong>November</strong> are the wettest months with afternoon rains. Routes are less crowded and prices may be lower, but success rates decrease due to weather. The Rongai Route (northern approach) is drier during these months.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety & Acclimatization */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                            Safety & Acclimatization
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Your safety is our top priority. Here's how Serenity Africa Safaris ensures a safe and successful climb
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="text-primary" size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Professional Guides</h3>
                                <p className="text-sm text-muted-foreground">
                                    All guides are Wilderness First Responder certified with 10+ years experience
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Heart className="text-primary" size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Daily Health Checks</h3>
                                <p className="text-sm text-muted-foreground">
                                    Twice-daily pulse oximeter readings and symptom monitoring
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mountain className="text-primary" size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Proper Acclimatization</h3>
                                <p className="text-sm text-muted-foreground">
                                    "Climb high, sleep low" strategy built into all our itineraries
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="text-primary" size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Emergency Protocols</h3>
                                <p className="text-sm text-muted-foreground">
                                    AMREF Flying Doctors evacuation insurance included for all climbers
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-muted/50 rounded-2xl p-8">
                        <h3 className="text-2xl font-serif font-bold mb-6">Our Acclimatization Approach</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                    <Check className="text-green-600" size={20} />
                                    Gradual Ascent
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    We never ascend more than 600m per day above 3,000m. This allows your body to produce more red blood cells and adjust to lower oxygen levels.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                    <Check className="text-green-600" size={20} />
                                    Acclimatization Days
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    On longer routes, we include dedicated acclimatization days where you climb higher during the day and return to sleep at a lower elevation.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                    <Check className="text-green-600" size={20} />
                                    Slow Pace
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    "Pole pole" (slowly slowly in Swahili) is our motto. A slower pace allows better acclimatization and conserves energy for summit night.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                    <Check className="text-green-600" size={20} />
                                    Oxygen & Medication
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    We carry supplemental oxygen and altitude sickness medication (Diamox) for emergencies. Our guides are trained to recognize symptoms early.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included & Excluded */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                            What's Included & Excluded
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="border-2 border-green-200 dark:border-green-800">
                            <CardHeader>
                                <CardTitle className="text-2xl font-serif flex items-center gap-2 text-green-700 dark:text-green-400">
                                    <Check size={28} />
                                    Included in Your Climb
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[
                                        "All Kilimanjaro National Park fees and permits",
                                        "Professional mountain guides (Wilderness First Responder certified)",
                                        "Experienced porters and mountain cook",
                                        "3 nutritious meals per day on the mountain",
                                        "Purified drinking water throughout the trek",
                                        "Quality 4-season mountain tents (2-person tents for single use)",
                                        "Sleeping mattresses (foam or inflatable)",
                                        "Portable private toilet tent",
                                        "Mess tent with tables and chairs",
                                        "Pulse oximeter for daily health monitoring",
                                        "First aid kit and emergency oxygen",
                                        "AMREF Flying Doctors evacuation insurance",
                                        "Airport transfers (Kilimanjaro Airport to Moshi)",
                                        "Pre-climb briefing and gear check",
                                        "Summit certificate upon successful completion"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check size={18} className="text-green-600 shrink-0 mt-1" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-orange-200 dark:border-orange-800">
                            <CardHeader>
                                <CardTitle className="text-2xl font-serif flex items-center gap-2 text-orange-700 dark:text-orange-400">
                                    <span className="text-2xl">✕</span>
                                    Not Included
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[
                                        "International and domestic flights",
                                        "Tanzania visa fees ($50-100 USD)",
                                        "Travel and medical insurance (mandatory)",
                                        "Personal trekking gear (boots, clothing, sleeping bag)",
                                        "Tips for guides, porters, and cook (budget $250-350 USD)",
                                        "Personal expenses (laundry, phone calls, souvenirs)",
                                        "Meals and drinks in Moshi (before and after trek)",
                                        "Hotel accommodation in Moshi (can be arranged)",
                                        "Optional portable toilet rental ($100-150)",
                                        "Gamow bag rental (for severe altitude sickness)",
                                        "Extra porter for personal gear above 15kg",
                                        "Sleeping bag rental ($30-50 if needed)",
                                        "Trekking pole rental ($10-15 if needed)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-orange-600 shrink-0 mt-1">✕</span>
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                        <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Important Note on Tipping</h4>
                        <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                            Tipping is customary and expected in Tanzania. Your crew works incredibly hard to ensure your success and safety. Recommended amounts: $250-300 for guides, $150-200 for assistant guides, $100-150 for cook, and $50-75 per porter. We provide detailed tipping guidelines during your pre-climb briefing.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-background">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Everything you need to know before climbing Kilimanjaro
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-6 bg-muted/30">
                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground mb-6">
                            Have more questions? We're here to help!
                        </p>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/contact">Contact Our Kilimanjaro Experts</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/images/destinations/kilimanjaro/kilimanjaro-6.webp")', backgroundSize: '100px' }} />
                <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                        Ready to Climb Mount Kilimanjaro?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Join hundreds of successful climbers who have reached the Roof of Africa with Serenity Africa Safaris. Let's plan your adventure today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6 font-semibold" asChild>
                            <Link href="/request-quote">Get a Free Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-semibold" asChild>
                            <Link href="/kilimanjaro/guide">Read Our Complete Guide</Link>
                        </Button>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Check className="text-green-600" size={18} />
                            <span>95% Success Rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-600" size={18} />
                            <span>15+ Years Experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-600" size={18} />
                            <span>Local Expert Guides</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
