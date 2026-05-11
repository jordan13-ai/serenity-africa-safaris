
import { activitiesData } from "@/lib/activities-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, MapPin, Calendar, ArrowRight } from "lucide-react"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export function generateStaticParams() {
    return activitiesData.map((activity) => ({
        slug: activity.slug,
    }))
}

export default async function ActivityPage({ params }: PageProps) {
    const resolvedParams = await params
    const activity = activitiesData.find((a) => a.slug === resolvedParams.slug)

    if (!activity) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white">
            {/* HERO SECTION */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <Image
                    src={activity.heroImage}
                    alt={activity.title}
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-4 drop-shadow-md">
                        {activity.title}
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl drop-shadow-sm">
                        {activity.subtitle}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* MAIN CONTENT */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview */}
                        <section>
                            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                {activity.overview}
                            </p>
                        </section>

                        {/* Highlights */}
                        <section className="bg-muted/30 rounded-3xl p-8 border border-muted">
                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                                Highlights
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {activity.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 min-w-5 min-h-5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* What to Expect */}
                        <section>
                            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">What to Expect</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {activity.whatToExpect}
                            </p>
                        </section>

                        {/* Gallery Preview (Grid) */}
                        {activity.galleryImages && activity.galleryImages.length > 0 && (
                            <section>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Gallery</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {activity.galleryImages.slice(0, 2).map((img, idx) => (
                                        <div key={idx} className="relative h-64 rounded-xl overflow-hidden group">
                                            <Image
                                                src={img}
                                                alt={`${activity.title} gallery ${idx + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* SIDEBAR */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Quick Info Card */}
                        <div className="bg-white rounded-3xl p-8 border shadow-lg sticky top-24">
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 pb-4 border-b">
                                Key Information
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center gap-3 text-primary mb-2">
                                        <Calendar className="w-5 h-5" />
                                        <h4 className="font-bold uppercase text-xs tracking-wider">Best Time to Go</h4>
                                    </div>
                                    <p className="text-sm text-gray-600 pl-8">
                                        {activity.bestTime}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 text-primary mb-2">
                                        <MapPin className="w-5 h-5" />
                                        <h4 className="font-bold uppercase text-xs tracking-wider">Locations</h4>
                                    </div>
                                    <ul className="pl-8 space-y-1">
                                        {activity.locations.map((loc, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">• {loc}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6">
                                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg rounded-xl shadow-md hover:shadow-xl transition-all">
                                        <Link href="/contact">
                                            Book This Experience
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Link>
                                    </Button>
                                    <p className="text-xs text-center text-muted-foreground mt-3">
                                        Customizable based on your itinerary
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* CTA Section */}
            <section className="bg-primary/5 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready for an adventure?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Start planning your dream safari today. Our experts can include {activity.title.toLowerCase()} in your custom itinerary.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button asChild size="lg" className="bg-primary text-white rounded-full px-8">
                            <Link href="/request-quote">Request a Quote</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full px-8 hover:bg-white">
                            <Link href="/all-safaris">Explore Safaris</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
