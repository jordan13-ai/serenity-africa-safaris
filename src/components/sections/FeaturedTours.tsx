"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion } from "framer-motion"

import { tours } from "@/lib/tours-data"

export function FeaturedTours() {
    return (
        <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30">
            <div className="container px-4 mx-auto max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                            Featured Tours
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            Our most popular itineraries, hand-crafted to deliver the ultimate Tanzania experience.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex gap-2 hover:bg-primary hover:text-primary-foreground transition-all" asChild>
                        <Link href="/all-safaris">View All Tours <ArrowRight size={16} /></Link>
                    </Button>
                </motion.div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-6 pb-10">
                        {tours.map((tour, index) => (
                            <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative h-[500px] w-full overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100 flex flex-col"
                                >
                                    {/* Image Section */}
                                    <div className="relative h-[60%] w-full overflow-hidden">
                                        <Image
                                            src={tour.image}
                                            alt={tour.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                                        {/* Floating Badges */}
                                        <div className="absolute top-4 right-4 z-10">
                                            <Badge className="bg-white/90 text-black hover:bg-white backdrop-blur-md border-0 shadow-sm px-3 py-1 text-sm font-medium">
                                                {tour.duration}
                                            </Badge>
                                        </div>

                                        {/* Title over Image (Bottom of image area) */}
                                        <div className="absolute bottom-4 left-4 right-4 z-10 transition-transform duration-300 group-hover:-translate-y-2">
                                            <h3 className="text-2xl font-serif font-bold text-white drop-shadow-md leading-tight mb-1">
                                                {tour.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-white/90 text-sm">
                                                <span className="text-[10px] uppercase tracking-widest font-bold text-white/60">Bespoke Experience</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex flex-col justify-between flex-grow p-6 bg-white relative z-20">
                                        <div className="space-y-3">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {tour.highlights.slice(0, 2).map((h, i) => (
                                                    <span key={i} className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-md text-gray-600">
                                                        {h}
                                                    </span>
                                                ))}
                                                <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-md text-gray-600">
                                                    + More
                                                </span>
                                            </div>
                                            <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                                                {tour.description}
                                            </p>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                            <Button
                                                variant="ghost"
                                                className="p-0 hover:bg-transparent hover:text-primary font-semibold text-foreground transition-colors"
                                                asChild
                                            >
                                                <Link href={`/itineraries/${tour.slug}`} className="flex items-center gap-2">
                                                    View Details <ArrowRight size={16} />
                                                </Link>
                                            </Button>
                                            <div className="flex -space-x-2">
                                                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                                                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300" />
                                                <div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-[10px] text-white flex items-center justify-center font-bold">
                                                    4.9
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center md:justify-end gap-2 mt-8">
                        <CarouselPrevious className="relative translate-y-0 hover:bg-primary hover:text-primary-foreground transition-colors" />
                        <CarouselNext className="relative translate-y-0 hover:bg-primary hover:text-primary-foreground transition-colors" />
                    </div>
                </Carousel>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-all" asChild>
                        <Link href="/all-safaris">View All Tours</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
