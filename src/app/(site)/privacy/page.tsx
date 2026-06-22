
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Privacy Policy | Serenity Africa Safaris",
    description: "Read Serenity Africa Safaris' privacy policy — how we collect, use and protect your personal information when you book a Tanzania safari.",
    alternates: { canonical: "https://serenityafricasafaris.com/privacy/" },
    robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <div className="bg-[#1A1A1A] text-white py-20">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90">Legal</Badge>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Privacy Policy</h1>
                    <p className="text-gray-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
            </div>

            {/* Content */}
            <div className="container max-w-4xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">1. Introduction</h2>
                        <p>
                            Welcome to <strong>Serenity Africa Safaris</strong> ("we," "us," or "our"). We strictly respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [serenityafricasafaris.com], book a safari with us, or communicate with our team.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">2. Information We Collect</h2>
                        <p className="mb-4">We collect information that helps us provide you with the best travel experience possible. This includes:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Personal Data:</strong> Name, email address, phone number, passport details, and nationality used for bookings and permits.</li>
                            <li><strong>Payment Data:</strong> Credit card details and billing addresses (processed securely by our third-party payment providers).</li>
                            <li><strong>Health Information:</strong> Dietary restrictions, medical conditions (e.g., allergies, fitness for climbing), and travel insurance details.</li>
                            <li><strong>Usage Data:</strong> Information about your device, browser, and how you interact with our website (via Cookies).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p className="mb-4">We use your data for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To process and manage your safari or trekking reservations.</li>
                            <li>To secure necessary permits (e.g., Kilimanjaro National Park permits).</li>
                            <li>To communicate with you regarding your trip details, updates, and safety instructions.</li>
                            <li>To send you newsletters or promotional offers (only if you opt-in).</li>
                            <li>To improve our website functionality and user experience.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">4. Sharing of Information</h2>
                        <p>
                            We do not sell your personal data. We may share your information with trusted third parties solely for the purpose of fulfilling your trip requirements, such as:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Service Providers:</strong> Hotels, lodges, airlines, and payment processors.</li>
                            <li><strong>Government Authorities:</strong> Tanzania National Parks (TANAPA) for park fees and rescue services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">5. Data Security</h2>
                        <p>
                            We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">6. Your Rights</h2>
                        <p>
                            You have the right to access, correct, or request deletion of your personal data. If you wish to exercise these rights, please contact us at info@serenityafricasafaris.com.
                        </p>
                    </section>

                    <section className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                        <h3 className="text-lg font-bold font-serif text-gray-900 mb-2">Contact Us</h3>
                        <p className="mb-2">If you have any questions about this Privacy Policy, please contact us:</p>
                        <ul className="space-y-1 text-sm font-medium">
                            <li>Email: info@serenityafricasafaris.com</li>
                            <li>Phone: +255 62 637 1646</li>
                            <li>Address: P.O. Box 12194, Arusha, Tanzania</li>
                        </ul>
                    </section>

                </div>
            </div>
        </main>
    )
}
