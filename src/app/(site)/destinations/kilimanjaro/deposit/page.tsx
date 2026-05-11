import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DollarSign, CreditCard, Shield, Calendar, Check, AlertCircle, Lock, RefreshCw } from "lucide-react";

const paymentMethods = [
    { name: "Credit/Debit Card", icon: CreditCard, description: "Visa, Mastercard, American Express accepted" },
    { name: "Bank Transfer", icon: DollarSign, description: "Direct wire transfer to our Tanzanian account" },
    { name: "PayPal", icon: Shield, description: "Secure online payment via PayPal" },
];

const faqs = [
    {
        question: "Why do I need to pay a deposit?",
        answer: "The $100 deposit secures your spot on your chosen departure date and allows us to begin preparations for your climb, including booking park permits, arranging guides and porters, and reserving equipment. Park permits are non-refundable and must be purchased in advance."
    },
    {
        question: "When is the balance due?",
        answer: "The remaining balance is due 60 days before your departure date. We'll send you a payment reminder via email 75 days before departure. For bookings made within 60 days of departure, full payment is required immediately."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards (Visa, Mastercard, Amex), bank transfers, and PayPal. For bank transfers, we provide our account details after you confirm your booking. Card payments and PayPal are processed securely through our payment gateway."
    },
    {
        question: "Is my deposit refundable?",
        answer: "Deposits are refundable up to 90 days before departure, minus a $50 administrative fee. Between 60-90 days, 50% of the deposit is refundable. Within 60 days of departure, deposits are non-refundable as we've already purchased park permits and made arrangements. We strongly recommend travel insurance."
    },
    {
        question: "What if I need to change my dates?",
        answer: "Date changes are free if made more than 90 days before departure (subject to availability). Between 60-90 days, a $100 change fee applies. Within 60 days, date changes may not be possible as park permits are non-transferable."
    },
    {
        question: "Can I pay the full amount upfront?",
        answer: "Yes! You're welcome to pay the full amount at the time of booking if you prefer. This locks in your price and completes your booking immediately."
    },
    {
        question: "What does the deposit cover?",
        answer: "The deposit covers administrative costs, park permit reservation fees, and secures your spot. It's applied toward your total climb cost. The balance payment covers guides, porters, equipment, food, camping fees, and all other services."
    },
    {
        question: "Is there a payment plan available?",
        answer: "For climbs booked more than 4 months in advance, we can arrange a payment plan. Contact us to discuss options. Generally, we require 50% payment 90 days before departure and the final 50% 60 days before."
    },
    {
        question: "Are there any additional fees?",
        answer: "The quoted price includes all climbing costs. The only additional expenses are tips for guides and porters (budget $250-350), personal gear you may need to rent or purchase, and travel insurance. International flights and visas are not included."
    },
    {
        question: "Do you charge credit card processing fees?",
        answer: "We absorb the processing fees for deposits. For balance payments by credit card, there's a 3.5% processing fee. Bank transfers have no additional fees."
    }
];

export default function DepositPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <Badge className="mb-6 bg-green-100 text-green-700 text-base px-4 py-2">
                        Simple & Secure
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Secure Your Kilimanjaro Climb
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                        Reserve your spot with just a <span className="text-primary font-bold">$100 deposit</span>
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Shield size={16} className="text-green-600" />
                            <span>Secure Payment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock size={16} className="text-green-600" />
                            <span>SSL Encrypted</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <RefreshCw size={16} className="text-green-600" />
                            <span>Flexible Cancellation</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            How the Deposit System Works
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Simple, transparent, and secure booking process
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                                1
                            </div>
                            <h3 className="font-bold text-lg mb-3">Choose Your Climb</h3>
                            <p className="text-sm text-muted-foreground">
                                Select your route, dates, and group size
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                                2
                            </div>
                            <h3 className="font-bold text-lg mb-3">Pay $100 Deposit</h3>
                            <p className="text-sm text-muted-foreground">
                                Secure your spot with a small deposit
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                                3
                            </div>
                            <h3 className="font-bold text-lg mb-3">Receive Confirmation</h3>
                            <p className="text-sm text-muted-foreground">
                                Get booking confirmation and preparation guide
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                                4
                            </div>
                            <h3 className="font-bold text-lg mb-3">Pay Balance</h3>
                            <p className="text-sm text-muted-foreground">
                                Final payment due 60 days before departure
                            </p>
                        </div>
                    </div>

                    {/* Timeline Card */}
                    <Card className="max-w-4xl mx-auto">
                        <CardHeader>
                            <CardTitle className="text-2xl font-serif flex items-center gap-3">
                                <Calendar className="text-primary" />
                                Payment Timeline
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                                            ✓
                                        </div>
                                        <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                                    </div>
                                    <div className="pb-8">
                                        <h4 className="font-bold text-lg mb-2">At Booking</h4>
                                        <p className="text-muted-foreground mb-2">
                                            Pay <span className="font-bold text-primary">$100 deposit</span> to secure your spot
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            You'll receive immediate booking confirmation and access to our preparation resources
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                                            75d
                                        </div>
                                        <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                                    </div>
                                    <div className="pb-8">
                                        <h4 className="font-bold text-lg mb-2">75 Days Before Departure</h4>
                                        <p className="text-muted-foreground">
                                            We send you a payment reminder via email with balance amount and payment instructions
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">
                                            60d
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">60 Days Before Departure</h4>
                                        <p className="text-muted-foreground mb-2">
                                            <span className="font-bold text-primary">Balance payment due</span>
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            After payment, you'll receive final confirmation, detailed itinerary, packing list, and pre-climb briefing details
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Payment Methods */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Secure Payment Methods
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Choose the payment method that works best for you
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {paymentMethods.map((method, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <method.icon className="text-primary" size={32} />
                                    </div>
                                    <h3 className="font-bold text-xl mb-3">{method.name}</h3>
                                    <p className="text-muted-foreground text-sm">
                                        {method.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="flex gap-4">
                            <Shield size={24} className="text-blue-600 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                                    Your Payment is Secure
                                </h4>
                                <p className="text-sm text-blue-800 dark:text-blue-200">
                                    All payments are processed through secure, encrypted channels. We never store your credit card information.
                                    Our payment system is PCI DSS compliant and uses industry-standard SSL encryption.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">
                                What Your Payment Covers
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Your climb fee includes everything you need for a successful summit, with no hidden costs.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Professional mountain guides (KINAPA certified)",
                                    "All Kilimanjaro National Park fees",
                                    "Camping/hut fees for all nights on mountain",
                                    "Rescue fees and emergency evacuation insurance",
                                    "Quality camping equipment (tents, sleeping mats)",
                                    "Portable toilet tent (private groups)",
                                    "All meals on the mountain (breakfast, lunch, dinner)",
                                    "Treated drinking water throughout the trek",
                                    "Porters to carry all group equipment",
                                    "Cook and kitchen staff",
                                    "Oxygen cylinder and first aid kit",
                                    "Pre-climb briefing and gear check",
                                    "Airport transfers (Kilimanjaro Airport)",
                                    "Hotel accommodation before and after climb",
                                    "Summit certificate"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-green-600 shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">
                                Not Included
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Budget for these additional expenses:
                            </p>
                            <div className="space-y-6">
                                <Card>
                                    <CardContent className="pt-6">
                                        <h4 className="font-bold mb-2 flex items-center gap-2">
                                            <DollarSign size={18} className="text-primary" />
                                            Tips for Crew
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Budget $250-350 total for guides, porters, and cook. Tipping is customary and greatly appreciated.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="pt-6">
                                        <h4 className="font-bold mb-2 flex items-center gap-2">
                                            <AlertCircle size={18} className="text-primary" />
                                            Travel Insurance
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Mandatory. Must cover high-altitude trekking up to 6,000m. Budget $100-200.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="pt-6">
                                        <h4 className="font-bold mb-2 flex items-center gap-2">
                                            <CreditCard size={18} className="text-primary" />
                                            Personal Expenses
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Visa ($50-100), flights, gear rental if needed, souvenirs, and extra hotel nights.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cancellation Policy */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Cancellation & Refund Policy
                        </h2>
                    </div>

                    <Card>
                        <CardContent className="pt-8">
                            <div className="space-y-6">
                                <div className="flex gap-4 pb-6 border-b">
                                    <div className="w-24 shrink-0 font-bold text-primary">
                                        90+ days
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-1">Full refund minus $50 admin fee</p>
                                        <p className="text-sm text-muted-foreground">
                                            Cancel more than 90 days before departure for maximum flexibility
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 pb-6 border-b">
                                    <div className="w-24 shrink-0 font-bold text-primary">
                                        60-90 days
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-1">50% refund of total amount paid</p>
                                        <p className="text-sm text-muted-foreground">
                                            Park permits have been purchased but may be transferable
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 pb-6 border-b">
                                    <div className="w-24 shrink-0 font-bold text-primary">
                                        30-60 days
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-1">25% refund of total amount paid</p>
                                        <p className="text-sm text-muted-foreground">
                                            Significant arrangements have been made
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-24 shrink-0 font-bold text-primary">
                                        0-30 days
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-1">No refund</p>
                                        <p className="text-sm text-muted-foreground">
                                            All permits purchased and full crew arranged. Travel insurance recommended.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                    <strong>Important:</strong> We strongly recommend purchasing travel insurance that covers trip cancellation,
                                    medical emergencies, and evacuation. This protects your investment in case of unforeseen circumstances.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-background">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Payment FAQs
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
                        Ready to Book Your Climb?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Secure your Kilimanjaro adventure today with just a $100 deposit
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6" asChild>
                            <Link href="/contact">Book Now</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                            <Link href="/kilimanjaro">View Routes</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
