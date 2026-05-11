"use client"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Menu, X, Tent, Compass, Mountain, MapPin, Phone, Binoculars, Calendar, BookOpen, Facebook, Instagram, Twitter, Youtube } from "lucide-react"


export function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-foreground hover:bg-secondary/10 hover:text-secondary">
                    <Menu className="h-8 w-8" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-none bg-secondary text-secondary-foreground">
                <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

                <div className="flex flex-col h-full bg-secondary text-white">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 pb-2">
                        <h2 className="text-2xl font-serif font-bold text-primary">Serenity Africa</h2>
                        <SheetClose className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
                            <X className="h-5 w-5 text-primary" />
                            <span className="sr-only">Close</span>
                        </SheetClose>
                    </div>

                    <div className="flex-1 px-4 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        <nav className="flex flex-col gap-3 pb-8">
                            {/* Home */}
                            <SheetClose asChild>
                                <Link href="/" className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors group">
                                    <Tent className="h-5 w-5 text-primary group-hover:text-primary/80" />
                                    <span className="font-medium text-lg">Home</span>
                                </Link>
                            </SheetClose>

                            {/* About Us */}
                            <SheetClose asChild>
                                <Link href="/about" className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors group">
                                    <Compass className="h-5 w-5 text-primary group-hover:text-primary/80" />
                                    <span className="font-medium text-lg">Our Story</span>
                                </Link>
                            </SheetClose>

                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {/* Safari Tours */}
                                <AccordionItem value="safaris" className="border-none">
                                    <AccordionTrigger className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors hover:no-underline group">
                                        <div className="flex items-center gap-4 flex-1">
                                            <Binoculars className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors" />
                                            <span className="font-medium text-lg">Safari Tours</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2 pb-0 pl-4">
                                        <div className="flex flex-col gap-2 border-l border-white/10 pl-4 mt-2">
                                            <SheetClose asChild><Link href="/all-safaris/luxury" className="py-2 text-white/80 hover:text-primary text-base">Luxury Safaris</Link></SheetClose>
                                            <SheetClose asChild><Link href="/all-safaris/mid-range" className="py-2 text-white/80 hover:text-primary text-base">Mid-Range Safaris</Link></SheetClose>
                                            <SheetClose asChild><Link href="/all-safaris/migration" className="py-2 text-white/80 hover:text-primary text-base">Great Migration</Link></SheetClose>
                                            <SheetClose asChild><Link href="/all-safaris/honeymoon" className="py-2 text-white/80 hover:text-primary text-base">Honeymoon Safaris</Link></SheetClose>
                                            <SheetClose asChild><Link href="/all-safaris" className="py-2 text-primary font-medium mt-1">View All Safaris</Link></SheetClose>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                {/* Kilimanjaro */}
                                <AccordionItem value="kilimanjaro" className="border-none">
                                    <AccordionTrigger className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors hover:no-underline group">
                                        <div className="flex items-center gap-4 flex-1">
                                            <Mountain className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors" />
                                            <span className="font-medium text-lg">Kilimanjaro</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2 pb-0 pl-4">
                                        <div className="flex flex-col gap-2 border-l border-white/10 pl-4 mt-2">
                                            <SheetClose asChild><Link href="/kilimanjaro/machame-route" className="py-2 text-white/80 hover:text-primary text-base">Machame Route</Link></SheetClose>
                                            <SheetClose asChild><Link href="/kilimanjaro/lemosho-route" className="py-2 text-white/80 hover:text-primary text-base">Lemosho Route</Link></SheetClose>
                                            <SheetClose asChild><Link href="/kilimanjaro/marangu-route" className="py-2 text-white/80 hover:text-primary text-base">Marangu Route</Link></SheetClose>
                                            <SheetClose asChild><Link href="/kilimanjaro/joining-groups" className="py-2 text-white/80 hover:text-primary text-base">Joining Groups</Link></SheetClose>
                                            <SheetClose asChild><Link href="/kilimanjaro" className="py-2 text-primary font-medium mt-1">View All Routes</Link></SheetClose>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                {/* Day Trips */}
                                <AccordionItem value="day-trips" className="border-none">
                                    <AccordionTrigger className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors hover:no-underline group">
                                        <div className="flex items-center gap-4 flex-1">
                                            <Calendar className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors" />
                                            <span className="font-medium text-lg">Day Trips</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2 pb-0 pl-4">
                                        <div className="flex flex-col gap-2 border-l border-white/10 pl-4 mt-2">
                                            <SheetClose asChild><Link href="/all-day-trips/kili-hiking" className="py-2 text-white/80 hover:text-primary text-base">Kili Day Hike</Link></SheetClose>
                                            <SheetClose asChild><Link href="/all-day-trips/west-kilimanjaro" className="py-2 text-white/80 hover:text-primary text-base">West Kili Hike</Link></SheetClose>
                                            <SheetClose asChild><Link href="/all-day-trips/one-day-safari" className="py-2 text-white/80 hover:text-primary text-base">One Day Safari</Link></SheetClose>
                                            <SheetClose asChild><Link href="/all-day-trips/moshi-excursions" className="py-2 text-white/80 hover:text-primary text-base">Moshi Excursions</Link></SheetClose>
                                            <SheetClose asChild><Link href="/all-day-trips" className="py-2 text-primary font-medium mt-1">View All Day Trips</Link></SheetClose>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                {/* Destinations */}
                                <AccordionItem value="destinations" className="border-none">
                                    <AccordionTrigger className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors hover:no-underline group">
                                        <div className="flex items-center gap-4 flex-1">
                                            <MapPin className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors" />
                                            <span className="font-medium text-lg">Destinations</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2 pb-0 pl-4">
                                        <div className="flex flex-col gap-2 border-l border-white/10 pl-4 mt-2">
                                            <SheetClose asChild><Link href="/destinations/serengeti" className="py-2 text-white/80 hover:text-primary text-base">Serengeti</Link></SheetClose>
                                            <SheetClose asChild><Link href="/destinations/ngorongoro" className="py-2 text-white/80 hover:text-primary text-base">Ngorongoro</Link></SheetClose>
                                            <SheetClose asChild><Link href="/destinations/zanzibar" className="py-2 text-white/80 hover:text-primary text-base">Zanzibar</Link></SheetClose>
                                            <SheetClose asChild><Link href="/destinations" className="py-2 text-primary font-medium mt-1">View All Destinations</Link></SheetClose>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            {/* Blog */}
                            <SheetClose asChild>
                                <Link href="/blog" className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors group">
                                    <BookOpen className="h-5 w-5 text-primary group-hover:text-primary/80" />
                                    <span className="font-medium text-lg">Blog</span>
                                </Link>
                            </SheetClose>

                            {/* Contact */}
                            <SheetClose asChild>
                                <Link href="/contact" className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors group">
                                    <Phone className="h-5 w-5 text-primary group-hover:text-primary/80" />
                                    <span className="font-medium text-lg">Contact</span>
                                </Link>
                            </SheetClose>
                        </nav>
                    </div>

                    <div className="p-6 pt-2">
                        <div className="h-px bg-white/10 mb-6" />
                        <SheetClose asChild>
                            <Button className="w-full text-lg py-7 rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl mb-8" asChild>
                                <Link href="/request-quote">Book Your Safari</Link>
                            </Button>
                        </SheetClose>

                        {/* Social Icons for Mobile */}
                        <div className="flex justify-center gap-6 text-gray-400">
                            <a href="https://www.facebook.com/profile.php?id=61572280686311" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full">
                                <Facebook size={20} fill="currentColor" />
                            </a>
                            <a href="https://www.instagram.com/serenityafricasafaris" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full">
                                <Instagram size={20} />
                            </a>
                            <a href="https://twitter.com/serenityafrica" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full">
                                <Twitter size={20} fill="currentColor" />
                            </a>
                            <a href="https://youtube.com/@serenityafricasafaris" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full">
                                <Youtube size={20} fill="currentColor" />
                            </a>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
