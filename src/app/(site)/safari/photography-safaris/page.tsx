import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { ImageGallery } from "@/components/sections/ImageGallery";

export const metadata: Metadata = {
    title: "Photography Safaris | Serenity Africa Safaris",
    description: "Capture breathtaking wildlife moments and landscapes with expert-guided safari photography experiences in Tanzania.",
};

export default function PhotographySafarisPage() {
    const highlights = [
        "Modified 4x4 vehicles for 360° views",
        "Photography-specialist guides",
        "Extended field time during Golden Hour",
        "In-vehicle charging & equipment beanbags",
        "Private game drives for total pacing control",
        "Focus on predator action & rare species",
        "Macro and landscape photography opportunities"
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/images/destinations/serengeti/serengeti-15.webp"
                    alt="Photography Safaris"
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
                            Capture the Moment
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Photography <br /><span className="italic text-white/80">Safaris</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
                            Capture breathtaking wildlife moments and landscapes with expert-guided experiences.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-[11px] font-bold tracking-widest uppercase" asChild>
                            <Link href="/contact">Book Your Lens Adventure</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#FDFBF7]">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-3/5 space-y-8">
                            <h2 className="text-4xl font-serif text-[#1A1A1A] leading-tight">
                                Through the <br /><span className="italic text-gray-500">Professional Lens</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg text-justify">
                                <p>
                                    Tanzania is a global photographer’s paradise, offering a raw, unfiltered, and breathtaking look at nature’s most visceral and dramatic moments. At Serenity Africa Safaris, we intimately understand that for a professional or serious amateur photographer, a safari isn't just about viewing wildlife—it's about the precise quality of light, the perfect angle of the shot, and the infinite patience required to capture a single, transcendent frame. Our photography-dedicated safaris are built from the ground up around these core principles.
                                </p>
                                <p>
                                    We provide specially adapted 4x4 vehicles with unrestricted 360-degree views and significantly lower window levels, allowing you to get eye-level with apex predators for that powerful, intimate perspective. Our photography-specialist guides are expert trackers who are trained to position the vehicle according to the sun’s exact angle and instinctively anticipate wildlife behavior, ensuring you are pre-focused and ready before the action even begins. Whether it's the explosive, high-speed chase of a cheetah on the hunt or the tender, quiet grooming of a lion pride, we ensure you have the ultimate vantage point.
                                </p>
                                <p>
                                    Beyond the legendary "Big Five," our expeditions focus on the smaller, equally captivating subjects that make the Serengeti so unique—from the vibrant, jewel-toned plumage of a Lilac-breasted roller to the striking geometric patterns of a zebra herd against the cracked earth of a dry lakebed. We strictly prioritize the "Golden Hours" of dawn and dusk, staying in the deep field significantly longer than standard tours to maximize the soft, ethereal, and soul-stirring light that defines award-winning wildlife photography.
                                </p>
                                <div className="pt-8">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">The Photographer's Edge</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        We provide more than just a ride; we provide a mobile studio. Our vehicles are configured to accommodate professional-grade tripods and gimbals, ensuring rock-solid stability for those critical long-exposure or high-magnification shots.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li><strong className="text-[#1A1A1A]">Specialized Vehicles:</strong> Open-sided or heavily modified 4x4s with customized beanbags, door-mounts, and ample floor space for multiple camera bodies and long telephoto lenses.</li>
                                        <li><strong className="text-[#1A1A1A]">In-Vehicle Power:</strong> Integrated multi-socket charging stations ensure your batteries are constantly topped up, allowing for uninterrupted shooting during even the longest days in the field.</li>
                                        <li><strong className="text-[#1A1A1A]">Expert Positioning:</strong> Our guides are trained to understand "Golden Hour" lighting, backlight vs. frontlight, and how to anticipate predator movement to ensure you are always in the optimal position.</li>
                                        <li><strong className="text-[#1A1A1A]">Custom Pacing:</strong> We operate on "Photographer's Time." There is no rushing between sightings; we stay as long as the light, the composition, and the wildlife remain compelling.</li>
                                    </ul>
                                </div>
                                <div className="pt-10">
                                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">The Post-Processing Journey</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify mb-6">
                                        The work doesn't end when the sun goes down. Many of our photography-specialist camps offer dedicated media rooms with high-color-accuracy monitors and reliable power for backing up your day's work. Our guides and hosts often share their own insights into editing and post-processing, helping you bring out the true spirit of the Tanzanian wild in your final images.
                                    </p>
                                    <p className="text-gray-500 font-light leading-relaxed text-lg text-justify">
                                        At Serenity Africa Safaris, we believe that a great photograph is a powerful tool for conservation. By capturing and sharing the beauty of Tanzania, you are helping to inspire a global movement to protect these precious landscapes and the wildlife that calls them home. Experience the "Wisdom of the Lens" and create a visual legacy that lasts a lifetime.
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
                title="Photography Expedition Gallery"
                description="Capture the extraordinary through the lens with expert guidance and optimized perspectives."
                images={[
                    { src: "/images/destinations/serengeti/serengeti-13.webp", alt: "Tracking wildlife", caption: "Perfect Angle Tracking" },
                    { src: "/images/destinations/serengeti/serengeti-14.webp", alt: "Golden hour shooting", caption: "Ethereal Golden Light" },
                    { src: "/images/destinations/serengeti/serengeti-15.webp", alt: "Apex action", caption: "The Moment of Impact" },
                    { src: "/images/destinations/serengeti/serengeti-7.webp", alt: "Leopard in Tree", caption: "The Elusive Leopard" },
                    { src: "/images/destinations/serengeti/serengeti-8.webp", alt: "Elephant at Sunset", caption: "Golden Hour Giants" },
                    { src: "/images/destinations/serengeti/serengeti-9.webp", alt: "Lilac-breasted Roller", caption: "Avian Splendor" },
                ]}
            />

            {/* Sample Itinerary Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3">
                            <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">The Mission</span>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-6 leading-tight">8-Day <br /><span className="italic text-gray-500">Lens Expedition</span></h2>
                            <p className="text-gray-500 font-light leading-relaxed mb-8">
                                An unhurried journey focused exclusively on the art of wildlife and landscape photography.
                            </p>
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-5 text-[11px] font-bold tracking-widest uppercase" asChild>
                                <Link href="/contact">Request Gear Guide</Link>
                            </Button>
                        </div>
                        <div className="lg:w-2/3 space-y-12">
                            {[
                                { day: "Day 1-3", title: "Central Serengeti Predators", desc: "Focus on the high-density cat populations. Our guides use low-angle techniques to capture powerful, intimate shots of lions and leopards in prime morning light." },
                                { day: "Day 4-6", title: "Remote Northern Action", desc: "Travel to the northern Mara River area. Prioritize the high-adrenaline river crossings and capturing the dramatic movement of the Great Migration herds." },
                                { day: "Day 7-8", title: "Macro & Night Sky", desc: "Explore the smaller details of the bush—insects, flora, and textures. Conclude with a dedicated session for astrophotography under the pure African night sky." }
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
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Frame the <br /><span className="italic text-primary">Wild Spirit</span></h2>
                    <p className="text-white/60 font-light text-lg mb-10 max-w-2xl mx-auto">
                        Personalized expeditions focused on light, composition, and wildlife.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                        Inquire About Photography
                    </Link>
                </div>
            </section>
        </div>
    );
}
