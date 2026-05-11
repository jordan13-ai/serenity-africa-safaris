import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, Calendar, DollarSign, Check, Heart, Globe, MessageCircle, ArrowRight } from "lucide-react";

const upcomingDepartures = [
    { date: "January 15-23, 2026", route: "Lemosho Route", spaces: 3, price: "$2,250" },
    { date: "February 5-12, 2026", route: "Machame Route", spaces: 5, price: "$1,950" },
    { date: "March 10-18, 2026", route: "Lemosho Route", spaces: 2, price: "$2,250" },
    { date: "June 8-15, 2026", route: "Machame Route", spaces: 6, price: "$1,950" },
    { date: "July 20-28, 2026", route: "Lemosho Route", spaces: 4, price: "$2,250" },
    { date: "August 5-13, 2026", route: "Northern Circuit", spaces: 3, price: "$2,750" },
    { date: "September 12-19, 2026", route: "Machame Route", spaces: 5, price: "$1,950" },
    { date: "October 3-11, 2026", route: "Lemosho Route", spaces: 2, price: "$2,250" },
];

const faqs = [
    {
        question: "What is a group climb?",
        answer: "A group climb is when you join other climbers on a scheduled departure date. You'll share the experience with fellow adventurers from around the world, while still receiving the same high-quality service, professional guides, and safety standards as a private climb."
    },
    {
        question: "How many people are in a group?",
        answer: "Our groups range from 4-12 climbers. We keep groups small to ensure personalized attention from guides and maintain the quality of the experience. Each group has multiple guides (1 guide per 2-3 climbers) plus porters and cook staff."
    },
    {
        question: "What if I'm traveling solo?",
        answer: "Perfect! Most of our group climbers are solo travelers. Joining a group is a great way to meet like-minded adventurers and share the experience. You'll have your own tent, but you can request to share if you prefer. A small single supplement may apply for tent accommodation."
    },
    {
        question: "Can I choose my route?",
        answer: "Yes! We offer scheduled departures on our most popular routes: Lemosho, Machame, and Northern Circuit. Check our departure schedule above to see available dates and routes."
    },
    {
        question: "What's the age range of group members?",
        answer: "Our group climbers typically range from 25-65 years old, with most in their 30s-50s. We've had successful climbers from 18 to 75! What matters most is fitness level and determination, not age."
    },
    {
        question: "How do I secure my spot?",
        answer: "Simply pay a $100 deposit to reserve your place. The balance is due 60 days before departure. We accept credit cards, bank transfers, and PayPal."
    },
    {
        question: "What if the group doesn't fill up?",
        answer: "We guarantee all published departures will run with a minimum of 2 climbers. If fewer than 4 people book, there may be a small price adjustment, but we'll always honor the trip."
    },
    {
        question: "Can I bring a friend and still join a group?",
        answer: "Absolutely! You can book together and join a scheduled group departure. You'll get the group rate and meet other climbers too."
    }
];

export default function JoiningGroupsPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/destinations/kilimanjaro/kilimanjaro-5.webp")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <Badge className="mb-6 bg-primary text-primary-foreground text-base px-4 py-2">
                        Join a Group Climb
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                        Climb Kilimanjaro with Fellow Adventurers
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Join our scheduled group departures and share the adventure of a lifetime with like-minded climbers from around the world
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6" asChild>
                            <Link href="#departures">View Departures</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-2 border-white hover:bg-white hover:text-black" asChild>
                            <Link href="/contact">Enquire Now</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Why Join a Group Climb?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Experience the camaraderie and shared achievement of climbing with others
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <DollarSign className="text-primary" size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">Better Value</h3>
                                <p className="text-muted-foreground">
                                    Save $300-500 compared to private climbs by sharing costs with other climbers
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="text-primary" size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">Meet New Friends</h3>
                                <p className="text-muted-foreground">
                                    Connect with adventurers from around the world and create lifelong friendships
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Heart className="text-primary" size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">Shared Motivation</h3>
                                <p className="text-muted-foreground">
                                    Encourage each other through challenges and celebrate summit success together
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Calendar className="text-primary" size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">Fixed Dates</h3>
                                <p className="text-muted-foreground">
                                    Choose from multiple scheduled departures throughout the year
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Globe className="text-primary" size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">Perfect for Solo Travelers</h3>
                                <p className="text-muted-foreground">
                                    No need to organize a group yourself - we handle everything
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="text-primary" size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">Same Quality Service</h3>
                                <p className="text-muted-foreground">
                                    Professional guides, quality equipment, and safety standards as private climbs
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Upcoming Departures */}
            <section id="departures" className="py-24 bg-muted/30">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Upcoming Group Departures
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Secure your spot with just a $100 deposit
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {upcomingDepartures.map((departure, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-xl font-serif mb-2">
                                                {departure.route}
                                            </CardTitle>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Calendar size={16} />
                                                <span>{departure.date}</span>
                                            </div>
                                        </div>
                                        <Badge variant={departure.spaces <= 3 ? "destructive" : "secondary"}>
                                            {departure.spaces} {departure.spaces === 1 ? 'spot' : 'spots'} left
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Price per person</p>
                                            <p className="text-2xl font-bold text-primary">{departure.price}</p>
                                        </div>
                                        <Button asChild>
                                            <Link href="/contact">
                                                Reserve Spot <ArrowRight size={16} className="ml-2" />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground mb-4">
                            Don't see a date that works for you?
                        </p>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/contact">Request Custom Dates</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            How Group Climbs Work
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                1
                            </div>
                            <h3 className="font-bold text-lg mb-2">Choose Your Date</h3>
                            <p className="text-sm text-muted-foreground">
                                Browse our scheduled departures and select a date that works for you
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                2
                            </div>
                            <h3 className="font-bold text-lg mb-2">Pay $100 Deposit</h3>
                            <p className="text-sm text-muted-foreground">
                                Secure your spot with a small deposit. Balance due 60 days before departure
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                3
                            </div>
                            <h3 className="font-bold text-lg mb-2">Prepare Together</h3>
                            <p className="text-sm text-muted-foreground">
                                Join our group WhatsApp chat to meet your teammates and prepare together
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                4
                            </div>
                            <h3 className="font-bold text-lg mb-2">Climb Together</h3>
                            <p className="text-sm text-muted-foreground">
                                Meet in Moshi and embark on your Kilimanjaro adventure as a team
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Group Size & Composition */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">
                                Small Groups, Big Experience
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    We keep our groups intentionally small (4-12 climbers) to ensure everyone receives personalized attention from our guides and maintains the quality wilderness experience.
                                </p>
                                <p>
                                    Each group has a lead guide plus assistant guides (1 guide per 2-3 climbers), ensuring safety and individual support throughout the trek.
                                </p>
                                <p>
                                    Our group climbers come from all over the world - USA, UK, Australia, Europe, Asia, and beyond. Most are solo travelers in their 30s-50s, but we've had successful climbers from 18 to 75 years old.
                                </p>
                                <p>
                                    What unites everyone is a sense of adventure, determination to reach the summit, and respect for the mountain and fellow climbers.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-muted p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-serif font-bold mb-6">What's Included</h3>
                            <ul className="space-y-3">
                                {[
                                    "Professional mountain guides (1 per 2-3 climbers)",
                                    "All park fees and permits",
                                    "Quality camping equipment",
                                    "3 meals daily on the mountain",
                                    "Porters to carry group equipment",
                                    "Emergency oxygen and first aid",
                                    "AMREF evacuation insurance",
                                    "Pre-climb briefing and gear check",
                                    "Summit certificate",
                                    "Group WhatsApp chat for preparation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-green-600 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-background">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Frequently Asked Questions
                        </h2>
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
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary/10">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Ready to Join a Group?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Secure your spot on an upcoming departure with just a $100 deposit
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6" asChild>
                            <Link href="/contact">Reserve Your Spot</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                            <Link href="/kilimanjaro">View All Routes</Link>
                        </Button>
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
                        <MessageCircle size={20} className="text-primary" />
                        <span>Questions? WhatsApp us at +255 62 637 1646</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
