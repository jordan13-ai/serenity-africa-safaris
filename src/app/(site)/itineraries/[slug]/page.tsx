
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
    Clock,
    Check,
    ArrowRight,
    TrendingUp,
    Shield,
    Camera,
    Utensils,
    Info,
    ArrowLeft,
    Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { tours } from "@/lib/tours-data"
import { seedTours, SeedTour } from "@/lib/seed-tours-data"
import { ImageGallery } from "@/components/sections/ImageGallery"
import type { Metadata } from "next"
import type { Tour } from "@/lib/tours-data"

function normalizeSeedTour(t: SeedTour): Tour {
    return {
        id: t.slug,
        title: t.title,
        slug: t.slug,
        image: t.coverImage,
        duration: `${t.duration} Days`,
        difficulty: t.difficulty,
        location: t.destination,
        category: t.category,
        highlights: t.highlights,
        description: t.description,
        bestTime: t.season,
        itinerary: t.itinerary.map((d) => ({
            day: d.day,
            title: d.title,
            description: d.description,
            accommodation: d.accommodation || undefined,
            meals: Array.isArray(d.meals) ? d.meals.join(", ") : d.meals,
        })),
        inclusions: t.includes,
        exclusions: t.excludes,
        packingList: [],
        gallery: t.gallery.map((src) => ({ src, alt: t.title })),
    }
}

const ALL_TOURS: Tour[] = [
    ...tours,
    ...seedTours.filter((s) => !tours.some((t) => t.slug === s.slug)).map(normalizeSeedTour),
]

export async function generateStaticParams() {
    return ALL_TOURS.map((tour) => ({ slug: tour.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const tour = ALL_TOURS.find((t) => t.slug === slug)
    if (!tour) return {}
    return {
        title: tour.title,
        description: `${tour.description.slice(0, 155)}…`,
        alternates: { canonical: `https://serenityafricasafaris.com/itineraries/${slug}/` },
        openGraph: {
            title: `${tour.title} | Serenity Africa Safaris`,
            description: tour.description.slice(0, 155),
            images: [{ url: tour.image, width: 1200, height: 630, alt: tour.title }],
            type: "article",
        },
    }
}

interface ItineraryPageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function ItineraryPage({ params }: ItineraryPageProps) {
    const { slug } = await params
    const tour = ALL_TOURS.find((t) => t.slug === slug)

    if (!tour) {
        notFound()
    }

    return (
        <div className="bg-[#FDFBF7] min-h-screen font-light">
            {/* Hero Section - Cinematic & Immersive */}
            <section className="relative h-[90vh] flex items-center overflow-hidden">
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                
                <div className="relative z-10 container px-6 mx-auto mt-20">
                    <Link href="/all-safaris" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-[11px] font-bold tracking-[0.4em] uppercase">
                        <ArrowLeft className="w-4 h-4" /> All Safaris
                    </Link>
                    <div className="max-w-5xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase">
                                {tour.category || "Signature Journey"}
                            </span>
                            <div className="w-12 h-[1px] bg-white/20"></div>
                            <span className="text-white/60 text-[11px] font-bold tracking-[0.4em] uppercase">
                                {tour.location}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-[1.1]">
                            {tour.title.split(' ').map((word, i) => (
                                <span key={i} className={i % 2 === 1 ? "italic text-white/80 font-light" : ""}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>
                        
                        <div className="flex flex-wrap gap-10 text-white/90 items-center">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5">
                                    <Clock size={20} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Duration</p>
                                    <p className="text-lg font-medium tracking-tight">{tour.duration}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5">
                                    <TrendingUp size={20} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Pace</p>
                                    <p className="text-lg font-medium tracking-tight">{tour.difficulty || "Premium"}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5">
                                    <Shield size={20} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Service</p>
                                    <p className="text-lg font-medium tracking-tight">Full Concierge</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 right-10 z-10 flex gap-4">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent(`Check out this safari: https://serenityafricasafaris.com/itineraries/${tour.slug}/`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share this itinerary on WhatsApp"
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white hover:bg-primary transition-all duration-500"
                    >
                        <Share2 size={18} />
                    </a>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="container px-6 mx-auto -mt-24 relative z-20 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Left Column: Narrative & Itinerary */}
                    <div className="lg:col-span-8 space-y-24">
                        
                        {/* Narrative Overview */}
                        <section className="bg-white p-12 md:p-20 rounded-[3rem] shadow-sm border border-[#EAE3D6]">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-[1px] bg-primary"></div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                                    Introduction
                                </span>
                            </div>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-10 leading-tight">
                                The <span className="italic text-gray-400">Untamed</span> Heart <br /> of Tanzania
                            </h2>
                            <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed">
                                <p className="mb-8 text-xl md:text-2xl leading-relaxed text-[#1A1A1A]/80 font-serif italic">
                                    "{tour.description.split('.')[0]}."
                                </p>
                                <p className="mb-10 text-lg leading-loose">
                                    {tour.description.split('.').slice(1).join('.')}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-[#FDFBF7]">
                                    <div className="space-y-6">
                                        <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#1A1A1A]">Curated Highlights</h4>
                                        <ul className="space-y-4">
                                            {tour.highlights.map((item, i) => (
                                                <li key={i} className="flex gap-4 text-base items-start">
                                                    <div className="w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center shrink-0 mt-0.5">
                                                        <Check className="w-3.5 h-3.5 text-primary" />
                                                    </div>
                                                    <span className="text-gray-600">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-[#FDFBF7] p-10 rounded-[2rem] border border-[#EAE3D6] flex flex-col justify-between">
                                        <div>
                                            <Info className="w-8 h-8 text-primary mb-6" />
                                            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#1A1A1A] mb-4">The Expert's View</h4>
                                            <p className="text-sm text-gray-500 italic leading-loose">
                                                {tour.bestTime || "The dry season is generally considered the best time for game viewing."}
                                            </p>
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-[#EAE3D6]/50">
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40">Travel Style</p>
                                            <p className="text-sm font-medium text-[#1A1A1A]">Bespoke & Private</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Itinerary Section */}
                        <section id="itinerary" className="space-y-16">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#EAE3D6] pb-10">
                                <div>
                                    <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">The Expedition</span>
                                    <h2 className="text-5xl font-serif text-[#1A1A1A] leading-tight">Your <span className="italic text-gray-400">Day-by-Day</span> <br />Narrative</h2>
                                </div>
                                <div className="flex gap-4 mb-2">
                                    <Badge variant="outline" className="rounded-full px-5 py-2.5 border-[#EAE3D6] text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/60">Detailed</Badge>
                                    <Badge variant="outline" className="rounded-full px-5 py-2.5 border-[#EAE3D6] text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/60">Immersive</Badge>
                                </div>
                            </div>

                            <div className="space-y-10">
                                {tour.itinerary.map((day) => (
                                    <div key={day.day} className="group relative flex flex-col md:flex-row gap-12 bg-white p-10 md:p-14 rounded-[3rem] border border-[#EAE3D6] transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
                                        <div className="md:w-1/4 flex flex-col">
                                            <div className="flex items-baseline gap-2 mb-6">
                                                <span className="text-6xl font-serif text-primary/10 group-hover:text-primary transition-colors duration-700 leading-none">{String(day.day).padStart(2, '0')}</span>
                                                <span className="text-xs font-bold tracking-widest text-[#1A1A1A]/20">/{String(tour.itinerary.length).padStart(2, '0')}</span>
                                            </div>
                                            <h3 className="text-2xl font-serif text-[#1A1A1A] leading-snug mb-4">{day.title}</h3>
                                            <div className="mt-auto hidden md:block">
                                                <div className="w-12 h-1 bg-[#FDFBF7] mb-2 rounded-full"></div>
                                                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Section {String(day.day).padStart(2, '0')}</span>
                                            </div>
                                        </div>
                                        <div className="md:w-3/4 space-y-8">
                                            <p className="text-gray-500 font-light leading-relaxed text-xl">
                                                {day.description}
                                            </p>
                                            
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-[#FDFBF7]">
                                                {day.accommodation && (
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#EAE3D6]">
                                                            <Shield className="w-4 h-4 text-primary" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400">Accommodation</p>
                                                            <p className="text-xs font-medium text-[#1A1A1A]">{day.accommodation}</p>
                                                        </div>
                                                    </div>
                                                )}
                                                {day.meals && (
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#EAE3D6]">
                                                            <Utensils className="w-4 h-4 text-primary" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400">Dining</p>
                                                            <p className="text-xs font-medium text-[#1A1A1A]">{day.meals}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Gallery Section */}
                        {tour.gallery && (
                            <ImageGallery 
                                images={tour.gallery} 
                                title="Visual Story" 
                                description="A glimpse into the extraordinary moments that await on this journey."
                            />
                        )}

                        {/* Inclusions & Practicalities */}
                        <section className="bg-[#1A1A1A] text-white p-14 md:p-24 rounded-[4rem] overflow-hidden relative shadow-2xl">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full" />
                            
                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">
                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase">All-Inclusive Service</span>
                                        <h3 className="text-4xl font-serif leading-tight">What is <br /><span className="italic text-primary">Seamlessly Included</span></h3>
                                    </div>
                                    <ul className="space-y-5">
                                        {tour.inclusions.map((item, i) => (
                                            <li key={i} className="flex gap-5 text-base text-white/60 font-light items-start">
                                                <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check size={12} className="text-primary" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <span className="text-gray-500 text-[10px] font-bold tracking-[0.5em] uppercase">Travel Preparation</span>
                                        <h3 className="text-4xl font-serif leading-tight">Important <br /><span className="italic text-gray-500">Logistics</span></h3>
                                    </div>
                                    <div className="space-y-10">
                                        <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-6">Essential Packing</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {tour.packingList?.slice(0, 8).map((item, i) => (
                                                    <Badge key={i} variant="outline" className="border-white/10 text-white/50 text-[10px] uppercase tracking-widest px-4 py-2 bg-white/5">
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">Considerations</h4>
                                            <ul className="space-y-4">
                                                {tour.exclusions.slice(0, 4).map((item, i) => (
                                                    <li key={i} className="flex gap-4 text-xs text-white/40 items-center">
                                                        <div className="w-2 h-2 rounded-full bg-white/10" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Booking & Details */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-10">
                            
                            {/* Booking Card */}
                            <div className="bg-white p-12 rounded-[3rem] border border-[#EAE3D6] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                                <div className="space-y-10">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Signature Journey</span>
                                            <div className="w-6 h-[1px] bg-primary/20"></div>
                                        </div>
                                        <h3 className="text-3xl font-serif text-[#1A1A1A]">Bespoke Adventure</h3>
                                        <p className="text-gray-400 text-sm italic mt-2">Private all-inclusive experience</p>
                                    </div>

                                    <div className="space-y-6">
                                        <Button className="w-full bg-[#1A1A1A] hover:bg-primary text-white h-20 rounded-full text-[12px] font-bold tracking-[0.3em] uppercase transition-all duration-700 group shadow-xl" asChild>
                                            <Link href={`/contact?itinerary=${tour.slug}`}>
                                                Secure Your Dates <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                        <div className="flex flex-col items-center gap-3">
                                            <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">Bespoke Planning Available</p>
                                            <div className="flex gap-1">
                                                {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-primary/30" />)}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6 pt-10 border-t border-[#FDFBF7]">
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#EAE3D6] group hover:border-primary transition-colors duration-500">
                                                <Shield className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-[#1A1A1A]">Private Journey</p>
                                                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Exclusive to your party</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#EAE3D6] group hover:border-primary transition-colors duration-500">
                                                <Camera className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-[#1A1A1A]">Expert Guidance</p>
                                                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Master-level safari guides</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#EAE3D6] group hover:border-primary transition-colors duration-500">
                                                <Shield className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-[#1A1A1A]">Elite Support</p>
                                                <p className="text-[10px] text-gray-400 uppercase tracking-widest">24/7 on-ground concierge</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Similar Journeys */}
                            <div className="bg-[#EAE3D6] p-12 rounded-[3rem] space-y-8">
                                <h4 className="text-2xl font-serif text-[#1A1A1A]">Discover <span className="italic">More</span></h4>
                                <div className="space-y-5">
                                    {ALL_TOURS.filter(t => t.slug !== tour.slug).slice(0, 3).map((t) => (
                                        <Link key={t.slug} href={`/itineraries/${t.slug}`} className="group block">
                                            <div className="bg-white/40 p-8 rounded-[2rem] border border-transparent hover:border-primary hover:bg-white transition-all duration-700 shadow-sm hover:shadow-xl">
                                                <h5 className="text-[11px] font-bold text-[#1A1A1A] mb-3 uppercase tracking-widest">{t.title}</h5>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">{t.duration}</span>
                                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 border border-primary/10 shadow-sm">
                                                        <ArrowRight size={14} className="text-primary" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final Visual Impact */}
            <section className="py-40 bg-[#FDFBF7] border-t border-[#EAE3D6] overflow-hidden relative">
                <div className="container px-6 mx-auto text-center max-w-5xl relative z-10">
                    <span className="text-primary text-[11px] font-bold tracking-[0.6em] uppercase mb-10 block">Crafting Unforgettable Expeditions</span>
                    <h2 className="text-5xl md:text-8xl font-serif text-[#1A1A1A] mb-16 leading-tight">
                        Tanzania is calling. <br /><span className="italic text-gray-400">Will you answer?</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button size="lg" className="bg-primary hover:bg-[#1A1A1A] text-white rounded-full px-16 py-10 text-[12px] font-bold tracking-[0.4em] uppercase transition-all duration-700 shadow-2xl" asChild>
                            <Link href="/contact">Begin Your Story</Link>
                        </Button>
                        <Link href="/all-safaris" className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#1A1A1A]/40 hover:text-primary transition-colors py-4 px-8 border-b border-transparent hover:border-primary/20">
                            Explore All Journeys
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
