import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { ImageGallery } from "@/components/sections/ImageGallery";

export const metadata: Metadata = {
    title: "Honeymoon Escapes | Serenity Africa Safaris",
    description: "Private dinners under the stars in secluded luxury lodges and camps. Designed for romance and exclusivity.",
};

export default function HoneymoonEscapesPage() {
    const highlights = [
        "Private, lantern-lit bush dinners",
        "Secluded luxury suites with plunge pools",
        "Private game drives with flexible schedules",
        "Romantic 'star-bed' sleepout experiences",
        "Seamless Safari & Zanzibar combinations",
        "Sunset champagne dhow cruises (Zanzibar)",
        "Couples' spa treatments in the wild"
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/destinations/zanzibar/zanzibar-8.webp"
                    alt="Honeymoon Escapes"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                <div className="relative z-10 container px-6 mx-auto mt-20">
                    <Link href="/safari" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-[11px] font-bold tracking-widest uppercase">
                        <ArrowLeft className="w-4 h-4" /> Back to Experiences
                    </Link>
                    <div className="max-w-3xl">
                        <span className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 block">
                            Romance in the Wild
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Honeymoon <br /><span className="italic text-white/80">Escapes</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Private dinners under the stars in secluded luxury lodges and camps.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Plan Your Romantic Escape</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-3/5 space-y-8">
                            <h2 className="text-4xl font-serif text-[#1A1A1A] leading-tight">
                                A Sanctuary for <br /><span className="italic text-gray-500">Unforgettable Love</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg text-justify">
                                <p>
                                    There is no landscape on Earth as inherently and powerfully romantic as the African savannah. At Serenity Africa Safaris, we specialize in creating bespoke honeymoon experiences that perfectly balance the raw, heart-pounding thrill of adventure with the highest levels of refined intimacy, luxury, and soul-stirring natural beauty. Your journey begins at the exact point where the untamed wild meets the exquisitely refined.
                                </p>
                                <p>
                                    Imagine returning from a breathtakingly private afternoon game drive to find your luxury tented suite lit by a hundred shimmering lanterns, a deep copper bathtub filled with aromatic local oils, and a private dinner for two set perfectly on your deck overlooking a quiet watering hole. Our exclusive selection of "star-beds" even allows you to sleep safely under the vast, celestial canopy, waking up to the first, soft rays of the African sun and the distant roar of a lion.
                                </p>
                                <p>
                                    For many couples, the ultimate honeymoon involves the iconic "Bush and Beach" combination. After the exhilaration and adrenaline of the safari, we whisk you away to the ancient spice island of <strong className="text-[#1A1A1A]">Zanzibar</strong>. Here, the golden, rolling savannah gives way to crystal-clear turquoise waters and pristine white sands, where you can relax in a private ocean-front villa, enjoy silent sunset dhow cruises, and reflect on your safari memories in total, uninterrupted tranquility.
                                </p>
                                <div className="pt-8">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">Romantic Touches</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        We believe that it's the smallest details that create the most lasting memories. From a surprise breakfast set up in a remote clearing to a private dhow cruise on the turquoise waters of the Indian Ocean, we go above and beyond to make your honeymoon truly extraordinary.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li><strong className="text-[#1A1A1A]">Private Bush Dinners:</strong> Enjoy a multi-course, lantern-lit meal in a completely secluded location, served with impeccable care by your own private chef and waiter.</li>
                                        <li><strong className="text-[#1A1A1A]">Sundowners for Two:</strong> Toast to your new life together with chilled champagne and gourmet Tanzanian snacks at a hand-picked scenic viewpoint as the African sun paints the sky.</li>
                                        <li><strong className="text-[#1A1A1A]">Luxury & Privacy:</strong> We exclusively hand-select the finest lodges and camps that prioritize maximum seclusion, offering private plunge pools, outdoor showers, and highly personalized service.</li>
                                        <li><strong className="text-[#1A1A1A]">Seamless Transitions:</strong> From private charter flights between parks to VIP airport handling and private transfers, every single logistically detail is managed with the utmost discretion and efficiency.</li>
                                    </ul>
                                </div>
                                <div className="pt-10">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">The Serenity Commitment</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        At Serenity Africa Safaris, we understand that your honeymoon is one of the most important journeys you will ever take. Our commitment is to handle every single detail—from the initial planning to the final departure—with a level of care and precision that allows you to simply focus on each other and the magic of the moment.
                                    </p>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify">
                                        We don't just book trips; we craft stories. Your honeymoon is the first chapter of your new life together, and we are honored to help you write it in the most beautiful, wild, and unforgettable landscape on Earth. Experience the "Wisdom of Love" with a safari that touches the soul and stays in the heart forever.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5">
                            <div className="bg-[#EAE3D6] p-10 md:p-12 rounded-[2rem] sticky top-32">
                                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-8">Highlights</h3>
                                <ul className="space-y-6">
                                    {highlights.map((item, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                            <span className="text-gray-600 font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ImageGallery
                title="Romantic Escapes Gallery"
                description="Experience the magic of Tanzania through intimate settings and breathtaking vistas."
                images={[
                    { src: "/images/destinations/zanzibar/zanzibar-1.webp", alt: "Romantic Beach Dinner", caption: "Dinner for Two" },
                    { src: "/images/destinations/zanzibar/zanzibar-2.webp", alt: "Luxury Safari Suite", caption: "Secluded Sanctuary" },
                    { src: "/images/destinations/zanzibar/zanzibar-3.webp", alt: "Sunset Dhow Cruise", caption: "Golden Hour Cruises" },
                    { src: "/images/destinations/zanzibar/zanzibar-8.webp", alt: "Luxury Villa", caption: "Coastal Elegance" },
                    { src: "/images/destinations/zanzibar/zanzibar-9.webp", alt: "Private Deck", caption: "Infinite Horizons" },
                    { src: "/images/destinations/zanzibar/zanzibar-10.webp", alt: "Tropical Paradise", caption: "Azure Dreams" },
                ]}
            />

            {/* Sample Itinerary Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3">
                            <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">The Journey</span>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-6 leading-tight">10-Day <br /><span className="italic text-gray-500">Bush & Beach</span></h2>
                            <p className="text-gray-500 font-light leading-relaxed mb-8">
                                A perfectly balanced escape combining the high-adrenaline of the wild with the ultimate coastal relaxation.
                            </p>
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-5 text-[11px] font-bold tracking-widest uppercase" asChild>
                                <Link href="/contact">Personalize This Path</Link>
                            </Button>
                        </div>
                        <div className="lg:w-2/3 space-y-12">
                            {[
                                { day: "Day 1-4", title: "Serengeti Serenity", desc: "Fly into a remote luxury camp in the Serengeti. Enjoy private game drives, lantern-lit bush dinners, and a breathtaking sunrise hot air balloon flight." },
                                { day: "Day 5-6", title: "Ngorongoro Highlands", desc: "Transfer to a boutique lodge on the Crater rim. Explore the 'Garden of Eden' with your private guide and enjoy romantic sundowners overlooking the caldera." },
                                { day: "Day 7-10", title: "Zanzibar Tranquility", desc: "Fly to the spice island of Zanzibar. Check into a private ocean-front villa. Spend your days snorkeling in turquoise waters, exploring Stone Town, and relaxing on pristine sands." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FDFBF7] border border-[#EAE3D6] flex items-center justify-center text-primary font-serif text-xl transition-colors group-hover:bg-primary group-hover:text-white">
                                        {idx + 1}
                                    </div>
                                    <div className="pt-2">
                                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2 block">{step.day}</span>
                                        <h3 className="text-xl font-serif text-[#1A1A1A] mb-3">{step.title}</h3>
                                        <p className="text-gray-500 font-light leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#1A1A1A] text-white">
                <div className="container px-6 mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Start Your Journey <br /><span className="italic text-primary">Hand in Hand</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        Tailored romantic experiences that celebrate your unique story.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                        Customize Your Honeymoon
                    </Link>
                </div>
            </section>
        </div>
    );
}
