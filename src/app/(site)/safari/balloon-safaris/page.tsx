import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { ImageGallery } from "@/components/sections/ImageGallery";

export const metadata: Metadata = {
    title: "Hot Air Balloon Safaris | Serenity Africa Safaris",
    description: "Float silently above the Serengeti at dawn and enjoy a luxury champagne bush breakfast.",
};

export default function BalloonSafarisPage() {
    const highlights = [
        "Pre-dawn launch for sunrise views",
        "Low-level wildlife tracking from the sky",
        "Panoramic views of the Serengeti ecosystem",
        "Traditional champagne landing toast",
        "Luxury bush breakfast with full service",
        "Commemorative flight certificate",
        "Exclusive perspectives for photographers"
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/experience/balloon safari/balloon-3.webp"
                    alt="Balloon Safaris"
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
                            Aerial Adventure
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Balloon <br /><span className="italic text-white/80">Safaris</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Float silently above the savannah at dawn with a champagne breakfast.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Book Your Flight</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-3/5 space-y-8">
                            <h2 className="text-4xl font-serif text-[#1A1A1A] leading-tight">
                                A View from <br /><span className="italic text-gray-500">Above the Clouds</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg text-justify">
                                <p>
                                    A hot air balloon safari is the absolute pinnacle of luxury and aerial adventure in the Serengeti. As the first, delicate light of dawn begins to paint the horizon in ethereal shades of indigo, violet, and deep orange, you will rise gently into the cool morning air. The profound silence of the sky is broken only by the occasional, powerful roar of the burner, allowing you to float like a bird above the world-famous golden plains.
                                </p>
                                <p>
                                    From this extraordinary and unique aerial perspective, the Serengeti reveals its deepest secrets. You'll watch massive, surging herds of wildebeest creating intricate, moving patterns as they trek across the grass, see family groups of elephants wandering through the ancient riverine forests, and perhaps spot a solitary leopard returning from a successful night hunt. It is a peaceful, deeply moving, and almost spiritual way to connect with the sheer vastness of the African wilderness.
                                </p>
                                <p>
                                    The adventure concludes with the traditional "Champagne Toast" immediately upon landing—a charming and historic custom dating back to the very earliest balloonists in 18th-century France. This is followed by a world-class, multi-course bush breakfast served under the sprawling shade of an ancient acacia tree, complete with fine linens, silverware, and a full cooked menu in the middle of the wild.
                                </p>
                                <div className="pt-8">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">The Morning Flow</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        The logistics of a balloon safari are as precise as the flight itself. Every morning is a choreographed dance between our ground crew and the changing winds, ensuring your flight is safe, smooth, and breathtakingly beautiful.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li><strong className="text-[#1A1A1A]">05:00 AM:</strong> Wake up at your lodge to the sounds of the bush. Enjoy a quick coffee and biscuits before your pre-dawn transfer to the launch site.</li>
                                        <li><strong className="text-[#1A1A1A]">06:00 AM:</strong> Safety briefing and balloon inflation. Watch the mesmerizing spectacle of the giant envelopes filling with air as the first hint of light hits the horizon.</li>
                                        <li><strong className="text-[#1A1A1A]">06:30 AM:</strong> Take-off. A gentle, almost imperceptible ascent. Enjoy approximately one hour of silent flight at varying altitudes for the best wildlife and landscape views.</li>
                                        <li><strong className="text-[#1A1A1A]">07:30 AM:</strong> Landing and the traditional Champagne celebration in the bush, a nod to the 18th-century French aeronauts.</li>
                                        <li><strong className="text-[#1A1A1A]">08:00 AM:</strong> A world-class, full English breakfast served on fine china in the heart of the wilderness before a mid-morning game drive back to your lodge.</li>
                                    </ul>
                                </div>
                                <div className="pt-10">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">Environmental Stewardship</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        As we float over one of the most delicate ecosystems on Earth, we are acutely aware of our responsibility to protect it. Our balloon partners utilize state-of-the-art, low-noise burners to minimize disturbance to the wildlife below. Furthermore, our landing and breakfast sites are carefully managed to ensure they leave no lasting trace on the savannah.
                                    </p>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify">
                                        A hot air balloon safari with Serenity Africa Safaris is more than just a luxury excursion; it is a commitment to experiencing the beauty of Tanzania with the utmost respect for its natural heritage. We believe that by soaring above the clouds, we gain a perspective that inspires us to be better guardians of the wild.
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
                title="Balloon Safari Gallery"
                description="Experience the Serengeti from a whole new perspective as you float silently above the savannah."
                images={[
                    { src: "/images/experience/balloon safari/balloon-1.webp", alt: "Sunrise Launch", caption: "The Pre-Dawn Launch" },
                    { src: "/images/experience/balloon safari/balloon-2.webp", alt: "Floating over Serengeti", caption: "Infinite Serenity" },
                    { src: "/images/experience/balloon safari/balloon-4.webp", alt: "Bush Breakfast", caption: "Luxury in the Wild" },
                    { src: "/images/experience/balloon safari/balloon-3.webp", alt: "Aerial Wildlife", caption: "Watching herds from above" },
                    { src: "/images/experience/balloon safari/balloon-5.webp", alt: "Balloon Silhouette", caption: "Sunrise over the horizon" },
                    { src: "/images/experience/balloon safari/balloon-6.webp", alt: "Landing celebration", caption: "Traditional Champagne Toast" },
                ]}
            />

            {/* Sample Itinerary Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3">
                            <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">The Morning</span>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-6 leading-tight">Typical <br /><span className="italic text-gray-500">Flight Sequence</span></h2>
                            <p className="text-gray-500 font-light leading-relaxed mb-8">
                                A perfectly choreographed morning journey that begins under the stars and ends with a celebratory feast.
                            </p>
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-5 text-[11px] font-bold tracking-widest uppercase" asChild>
                                <Link href="/contact">Book Your Spot</Link>
                            </Button>
                        </div>
                        <div className="lg:w-2/3 space-y-12">
                            {[
                                { time: "05:00 AM", title: "Wake-up & Transfer", desc: "Enjoy a fresh cup of Tanzanian coffee at your lodge before a pre-dawn 4x4 transfer to the balloon launch site, listening to the early morning sounds of the bush." },
                                { time: "06:00 AM", title: "Inflation & Launch", desc: "Witness the powerful burners filling the giant balloons. As the first hint of light appears, you'll climb into the basket and rise gently for a magical sunrise take-off." },
                                { time: "07:30 AM", title: "Landing & Champagne Toast", desc: "After an hour of floating over the savannah, enjoy a smooth landing. Celebrate with a traditional chilled champagne toast in the heart of the Serengeti." },
                                { time: "08:15 AM", title: "Luxury Bush Breakfast", desc: "A short drive leads to a beautifully set table under an acacia tree. Enjoy a full cooked breakfast with sparkling wine before a scenic game drive back to camp." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FDFBF7] border border-[#EAE3D6] flex items-center justify-center text-primary font-serif text-xl transition-colors group-hover:bg-primary group-hover:text-white">
                                        {idx + 1}
                                    </div>
                                    <div className="pt-2">
                                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2 block">{step.time}</span>
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
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Rise with the <br /><span className="italic text-primary">African Sun</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        Experience the ultimate safari perspective from the sky.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                        Inquire About Flights
                    </Link>
                </div>
            </section>
        </div>
    );
}
