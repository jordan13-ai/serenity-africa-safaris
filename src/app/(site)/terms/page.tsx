
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms & Conditions | Serenity Africa Safaris",
    description: "Review the booking terms and conditions for Serenity Africa Safaris — cancellation policy, payment schedule, and safari booking terms.",
    alternates: { canonical: "https://serenityafricasafaris.com/terms/" },
    robots: { index: false, follow: false },
}

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <div className="bg-[#1A1A1A] text-white py-20">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90">Legal</Badge>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Terms & Conditions</h1>
                    <p className="text-gray-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
            </div>

            {/* Content */}
            <div className="container max-w-4xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">1. Agreement to Terms</h2>
                        <p>
                            By booking a trip with <strong>Serenity Africa Safaris</strong>, you agree to be bound by these Terms and Conditions. Please read them carefully before confirming your reservation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">2. Bookings & Payments</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Deposit:</strong> A non-refundable deposit of 30% of the total trip cost is required to secure your booking. This allows us to book accommodations and secure flight tickets.</li>
                            <li><strong>Balance Payment:</strong> The remaining balance must be paid at least 45 days prior to your arrival date. For bookings made within 45 days of departure, full payment is required immediately.</li>
                            <li><strong>Payment Methods:</strong> We accept bank transfers and major credit cards (Visa, Mastercard, Amex). Please note that credit card payments may incur a surcharge.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">3. Cancellations & Refunds</h2>
                        <p className="mb-4">If you must cancel your trip, you must notify us in writing. Cancellation fees will apply based on the date we receive your notice:</p>
                        <ul className="space-y-3 bg-gray-50 p-6 rounded-lg border border-gray-100">
                            <li className="flex justify-between">
                                <span>More than 60 days before arrival:</span>
                                <span className="font-bold">Loss of Deposit (30%)</span>
                            </li>
                            <li className="flex justify-between">
                                <span>60 - 31 days before arrival:</span>
                                <span className="font-bold">50% of Total Cost</span>
                            </li>
                            <li className="flex justify-between">
                                <span>30 days or less before arrival:</span>
                                <span className="font-bold">100% of Total Cost</span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">4. Travel Insurance</h2>
                        <p>
                            Comprehensive travel insurance is <strong>mandatory</strong> for all our clients. Your insurance should cover medical expenses, repatriation, cancellation, and curtailment. For Kilimanjaro climbers, your insurance must explicitly cover high-altitude trekking up to 6,000 meters.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">5. Changes to Itinerary</h2>
                        <p>
                            We reserve the right to alter the itinerary in the event of unforeseen circumstances such as weather conditions, road blockages, or park regulations. We will always endeavor to provide a suitable alternative of equal value.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">6. Liability</h2>
                        <p>
                            While we take every precaution to ensure your safety, Serenity Africa Safaris accepts no liability for personal injury, death, loss, or damage to property unless caused by our proven negligence. Participation in activities such as walking safaris and mountain climbing involves inherent risks.
                        </p>
                    </section>

                    <section className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                        <h3 className="text-lg font-bold font-serif text-gray-900 mb-3">Questions?</h3>
                        <p className="mb-4">If you have any questions regarding these terms, please do not hesitate to contact our team.</p>
                        <Link href="/contact" className="text-primary font-bold hover:underline">Get in Touch with Us →</Link>
                    </section>

                </div>
            </div>
        </main>
    )
}
