
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
    Clock,
    Check,
    ArrowRight,
    Mountain,
    TrendingUp,
    Shield,
    Utensils,
    Info,
    ArrowLeft,
    Share2,
    Heart,
    Zap,
    Map,
    Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { routesData } from "@/lib/kilimanjaro-routes-data"

export async function generateStaticParams() {
    return Object.keys(routesData).map((slug) => ({
        slug: slug,
    }))
}

interface KilimanjaroRoutePageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function KilimanjaroRoutePage({ params }: KilimanjaroRoutePageProps) {
    const { slug } = await params
    const route = routesData[slug]

    if (!route) {
        notFound()
    }

    const heroImage = "/images/destinations/kilimanjaro/kilimanjaro-12.webp"

    return (
        <div className="bg-[#FDFBF7] min-h-screen font-light">
            {/* Hero Section */}
            <section className="relative h-[90vh] min-h-[560px] flex items-center overflow-hidden">
                <Image
                    src={heroImage}
                    alt={route.title}
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                <div className="relative z-10 container px-4 sm:px-6 mx-auto mt-16 md:mt-20">
                    <Link href="/kilimanjaro" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6 md:mb-8 text-[11px] font-bold tracking-[0.4em] uppercase">
                        <ArrowLeft className="w-4 h-4" /> Kilimanjaro Routes
                    </Link>
                    <div className="max-w-5xl">
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 flex-wrap">
                            <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase">
                                Expedition Route
                            </span>
                            <div className="w-8 md:w-12 h-[1px] bg-white/20"></div>
                            <span className="text-white/60 text-[11px] font-bold tracking-[0.4em] uppercase">
                                {route.duration} Trek
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 md:mb-10 leading-[1.1]">
                            {route.title.split(' ').map((word, i) => (
                                <span key={i} className={i % 2 === 1 ? "italic text-white/80 font-light" : ""}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>

                        <div className="flex flex-wrap gap-5 md:gap-10 text-white/90 items-center">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5">
                                    <TrendingUp size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-0.5">Success Rate</p>
                                    <p className="text-base md:text-lg font-medium tracking-tight">{route.successRate}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5">
                                    <Mountain size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-0.5">Difficulty</p>
                                    <p className="text-base md:text-lg font-medium tracking-tight">{route.difficulty}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5">
                                    <Zap size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-0.5">Scenery</p>
                                    <p className="text-base md:text-lg font-medium tracking-tight">{route.sceneryRating}/5 Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 z-10 flex gap-3 md:gap-4">
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white hover:bg-primary transition-all duration-500">
                        <Share2 size={16} />
                    </button>
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white hover:bg-primary transition-all duration-500">
                        <Heart size={16} />
                    </button>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="container px-4 sm:px-6 mx-auto -mt-12 md:-mt-24 relative z-20 pb-12 md:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

                    {/* Left Column: Narrative & Itinerary */}
                    <div className="lg:col-span-8 space-y-10 md:space-y-16">

                        {/* Narrative Overview */}
                        <section className="bg-white p-6 sm:p-10 md:p-16 rounded-2xl md:rounded-[3rem] shadow-sm border border-[#EAE3D6]">
                            <div className="flex items-center gap-4 mb-6 md:mb-8">
                                <div className="w-8 md:w-10 h-[1px] bg-primary"></div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                                    Route Overview
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-serif text-[#1A1A1A] mb-6 md:mb-10 leading-tight">
                                {route.subtitle.split(' ').map((word, i) => (
                                    <span key={i} className={i === 0 ? "" : "italic text-gray-400 ml-2"}>
                                        {i === 0 ? word : word}
                                    </span>
                                ))}
                            </h2>
                            <div className="prose max-w-none text-gray-500 font-light leading-relaxed">
                                <p className="mb-6 md:mb-8 text-lg md:text-2xl leading-relaxed text-[#1A1A1A]/80 font-serif italic">
                                    "{route.overview.split('.')[0]}."
                                </p>
                                <p className="mb-6 md:mb-10 text-base md:text-lg leading-loose">
                                    {route.overview.split('.').slice(1).join('.')}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-8 md:mt-16 pt-6 md:pt-12 border-t border-[#FDFBF7]">
                                    <div className="space-y-5">
                                        <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#1A1A1A]">Key Highlights</h4>
                                        <ul className="space-y-3 md:space-y-4">
                                            {route.highlights.map((item, i) => (
                                                <li key={i} className="flex gap-3 md:gap-4 text-sm md:text-base items-start">
                                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/5 flex items-center justify-center shrink-0 mt-0.5">
                                                        <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                                                    </div>
                                                    <span className="text-gray-600">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-[#FDFBF7] p-5 md:p-8 rounded-xl md:rounded-[2rem] border border-[#EAE3D6] flex flex-col justify-between">
                                        <div>
                                            <Award className="w-7 h-7 md:w-8 md:h-8 text-primary mb-4 md:mb-6" />
                                            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#1A1A1A] mb-3 md:mb-4">Best Suited For</h4>
                                            <ul className="space-y-2 md:space-y-3">
                                                {route.bestFor.map((item, i) => (
                                                    <li key={i} className="text-sm text-gray-500 italic flex items-center gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-[#EAE3D6]/50">
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40">Trail Stats</p>
                                            <p className="text-sm font-medium text-[#1A1A1A]">{route.distance} Total Distance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Itinerary Section */}
                        <section id="itinerary" className="space-y-10 md:space-y-16">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8 border-b border-[#EAE3D6] pb-6 md:pb-10">
                                <div>
                                    <span className="text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-3 md:mb-4 block">The Ascent</span>
                                    <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">Daily <span className="italic text-gray-400">Progression</span></h2>
                                </div>
                                <div className="flex gap-3 md:gap-4">
                                    <Badge variant="outline" className="rounded-full px-4 md:px-5 py-2 md:py-2.5 border-[#EAE3D6] text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/60">Topographic</Badge>
                                    <Badge variant="outline" className="rounded-full px-4 md:px-5 py-2 md:py-2.5 border-[#EAE3D6] text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/60">Strategic</Badge>
                                </div>
                            </div>

                            <div className="space-y-6 md:space-y-10">
                                {route.itinerary.map((day) => (
                                    <div key={day.day} className="group relative flex flex-col md:flex-row gap-6 md:gap-10 bg-white p-5 sm:p-7 md:p-12 rounded-2xl md:rounded-[3rem] border border-[#EAE3D6] transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2">
                                        <div className="md:w-1/3 flex flex-col">
                                            <div className="flex items-baseline gap-2 mb-3 md:mb-6">
                                                <span className="text-5xl md:text-6xl font-serif text-primary/10 group-hover:text-primary transition-colors duration-700 leading-none">{String(day.day).padStart(2, '0')}</span>
                                                <span className="text-xs font-bold tracking-widest text-[#1A1A1A]/20">/{String(route.itinerary.length).padStart(2, '0')}</span>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-serif text-[#1A1A1A] leading-snug mb-4 md:mb-6">{day.title}</h3>

                                            <div className="flex md:flex-col gap-4 md:gap-4 md:mt-auto">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#EAE3D6] shrink-0">
                                                        <TrendingUp className="w-3.5 h-3.5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[8px] font-bold tracking-[0.1em] uppercase text-gray-400">Elevation</p>
                                                        <p className="text-[11px] font-medium text-[#1A1A1A]">{day.elevation}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#EAE3D6] shrink-0">
                                                        <Map className="w-3.5 h-3.5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[8px] font-bold tracking-[0.1em] uppercase text-gray-400">Distance</p>
                                                        <p className="text-[11px] font-medium text-[#1A1A1A]">{day.distance} ({day.time})</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:w-2/3 space-y-5 md:space-y-8">
                                            <p className="text-gray-500 font-light leading-relaxed text-base md:text-xl">
                                                {day.description}
                                            </p>

                                            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-5 md:pt-8 border-t border-[#FDFBF7]">
                                                <div className="flex items-center gap-3 md:gap-4">
                                                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#EAE3D6] shrink-0">
                                                        <Mountain className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400">Terrain</p>
                                                        <p className="text-xs font-medium text-[#1A1A1A]">{day.terrain}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 md:gap-4">
                                                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#EAE3D6] shrink-0">
                                                        <Utensils className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400">Dining</p>
                                                        <p className="text-xs font-medium text-[#1A1A1A]">{day.meals}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Practicalities Section */}
                        <section className="bg-[#1A1A1A] text-white p-6 sm:p-10 md:p-16 rounded-2xl md:rounded-[4rem] overflow-hidden relative shadow-2xl">
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary/10 blur-[120px] rounded-full" />
                            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-white/5 blur-[100px] rounded-full" />

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                                <div className="space-y-6 md:space-y-10">
                                    <div className="space-y-3 md:space-y-4">
                                        <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase">Expedition Standards</span>
                                        <h3 className="text-2xl md:text-4xl font-serif leading-tight">Included <br /><span className="italic text-primary">Provisioning</span></h3>
                                    </div>
                                    <div className="space-y-5 md:space-y-8">
                                        <div className="p-5 md:p-7 bg-white/5 rounded-xl md:rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-4 md:mb-6 flex items-center gap-3">
                                                <Shield className="w-4 h-4 text-primary shrink-0" /> Safety & Crew
                                            </h4>
                                            <ul className="grid grid-cols-1 gap-3 md:gap-4">
                                                <li className="flex gap-3 md:gap-4 text-sm text-white/60 font-light items-center">
                                                    <Check size={13} className="text-primary shrink-0" /> Certified Head Guide & Assistant Guides
                                                </li>
                                                <li className="flex gap-3 md:gap-4 text-sm text-white/60 font-light items-center">
                                                    <Check size={13} className="text-primary shrink-0" /> Emergency Oxygen & Pulse Oximeters
                                                </li>
                                                <li className="flex gap-3 md:gap-4 text-sm text-white/60 font-light items-center">
                                                    <Check size={13} className="text-primary shrink-0" /> Professional Mountain Porter Crew
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="p-5 md:p-7 bg-white/5 rounded-xl md:rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-4 md:mb-6 flex items-center gap-3">
                                                <Utensils className="w-4 h-4 text-primary shrink-0" /> Nutrition & Living
                                            </h4>
                                            <ul className="grid grid-cols-1 gap-3 md:gap-4">
                                                <li className="flex gap-3 md:gap-4 text-sm text-white/60 font-light items-center">
                                                    <Check size={13} className="text-primary shrink-0" /> High-Calorie Chef-Prepared Meals
                                                </li>
                                                <li className="flex gap-3 md:gap-4 text-sm text-white/60 font-light items-center">
                                                    <Check size={13} className="text-primary shrink-0" /> North Face / Mountain Hardwear Tents
                                                </li>
                                                <li className="flex gap-3 md:gap-4 text-sm text-white/60 font-light items-center">
                                                    <Check size={13} className="text-primary shrink-0" /> Private Toilet Tents at Every Camp
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6 md:space-y-10">
                                    <div className="space-y-3 md:space-y-4">
                                        <span className="text-gray-500 text-[10px] font-bold tracking-[0.5em] uppercase">Climber Preparation</span>
                                        <h3 className="text-2xl md:text-4xl font-serif leading-tight">Essential <br /><span className="italic text-gray-500">Gear List</span></h3>
                                    </div>
                                    <div className="space-y-5 md:space-y-8">
                                        <div className="p-5 md:p-7 bg-white/5 rounded-xl md:rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-4 md:mb-6">Summit Protection</h4>
                                            <div className="flex flex-wrap gap-2 md:gap-3">
                                                {route.packingEssentials?.slice(0, 10).map((item, i) => (
                                                    <Badge key={i} variant="outline" className="border-white/10 text-white/50 text-[10px] uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 bg-white/5">
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="p-5 md:p-8 bg-primary/10 rounded-xl md:rounded-[2rem] border border-primary/20">
                                            <Info className="w-7 h-7 md:w-8 md:h-8 text-primary mb-4 md:mb-6" />
                                            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-3 md:mb-4">Expert Preparation</h4>
                                            <p className="text-sm text-white/60 italic leading-loose">
                                                "Kilimanjaro is a marathon, not a sprint. Training your cardiovascular system and mental resilience months in advance is the true secret to the summit."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Booking & Details */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32 space-y-6 md:space-y-10">

                            {/* Booking Card */}
                            <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[3rem] border border-[#EAE3D6] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                                <div className="space-y-6 md:space-y-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Summit Package</span>
                                            <div className="w-6 h-[1px] bg-primary/20"></div>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A]">Luxury Expedition</h3>
                                        <p className="text-gray-400 text-sm italic mt-2">All-inclusive summit experience</p>
                                    </div>

                                    <div className="space-y-4 md:space-y-6">
                                        <Button className="w-full bg-[#1A1A1A] hover:bg-primary text-white h-16 md:h-20 rounded-full text-[12px] font-bold tracking-[0.3em] uppercase transition-all duration-700 group shadow-xl" asChild>
                                            <Link href={`/contact?route=${route.slug}`}>
                                                Inquire About Trek <ArrowRight className="ml-3 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                        <div className="flex flex-col items-center gap-2 md:gap-3">
                                            <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">Full Safety Protocols Active</p>
                                            <div className="flex gap-1">
                                                {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-primary/30" />)}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-5 pt-6 md:pt-8 border-t border-[#FDFBF7]">
                                        <div className="flex items-center gap-4 md:gap-5">
                                            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#EAE3D6] shrink-0">
                                                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-[#1A1A1A]">Best Time to Climb</p>
                                                <p className="text-[10px] text-gray-400 uppercase tracking-widest">{route.bestTime}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 md:gap-5">
                                            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#EAE3D6] shrink-0">
                                                <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-[#1A1A1A]">Expert Lead Guides</p>
                                                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Kili-Certified Professionals</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 md:gap-5">
                                            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#EAE3D6] shrink-0">
                                                <Award className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-[#1A1A1A]">98% Satisfaction</p>
                                                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Premium Equipment & Food</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Other Routes */}
                            <div className="bg-[#EAE3D6] p-6 md:p-10 rounded-2xl md:rounded-[3rem] space-y-5 md:space-y-8">
                                <h4 className="text-xl md:text-2xl font-serif text-[#1A1A1A]">Other <span className="italic">Pathways</span></h4>
                                <div className="space-y-4 md:space-y-5">
                                    {Object.values(routesData).filter(r => r.slug !== route.slug).slice(0, 3).map((r) => (
                                        <Link key={r.slug} href={`/kilimanjaro/${r.slug}`} className="group block">
                                            <div className="bg-white/40 p-5 md:p-7 rounded-xl md:rounded-[2rem] border border-transparent hover:border-primary hover:bg-white transition-all duration-700 shadow-sm hover:shadow-xl">
                                                <h5 className="text-[11px] font-bold text-[#1A1A1A] mb-2 md:mb-3 uppercase tracking-widest">{r.title}</h5>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">{r.duration}</span>
                                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 border border-primary/10 shadow-sm">
                                                        <ArrowRight size={13} className="text-primary" />
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

            {/* Final CTA */}
            <section className="py-20 md:py-32 bg-[#FDFBF7] border-t border-[#EAE3D6] overflow-hidden relative">
                <div className="container px-4 sm:px-6 mx-auto text-center max-w-5xl relative z-10">
                    <span className="text-primary text-[11px] font-bold tracking-[0.6em] uppercase mb-6 md:mb-10 block">Conquer the Roof of Africa</span>
                    <h2 className="text-4xl sm:text-5xl md:text-8xl font-serif text-[#1A1A1A] mb-8 md:mb-16 leading-tight">
                        Your peak is waiting. <br /><span className="italic text-gray-400">Step into the clouds.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                        <Button size="lg" className="bg-primary hover:bg-[#1A1A1A] text-white rounded-full px-10 md:px-16 py-7 md:py-10 text-[12px] font-bold tracking-[0.4em] uppercase transition-all duration-700 shadow-2xl" asChild>
                            <Link href="/contact">Book Your Expedition</Link>
                        </Button>
                        <Link href="/kilimanjaro" className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#1A1A1A]/40 hover:text-primary transition-colors py-4 px-8 border-b border-transparent hover:border-primary/20">
                            Compare All Routes
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
