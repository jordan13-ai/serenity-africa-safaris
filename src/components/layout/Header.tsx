"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header 
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled 
                    ? "bg-[#F5F2ED] py-4 shadow-sm" 
                    : "bg-transparent py-8"
            )}
        >
            <div className="container mx-auto px-6">
                <nav className="flex items-center justify-between">
                    
                    {/* LOGO */}
                    <Link href="/" className="relative z-10">
                        <div className="relative w-44 h-12 md:w-52 md:h-14">
                            <Image
                                src="/images/logo.webp"
                                alt="Serenity Africa Safaris"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden lg:flex items-center justify-center flex-1">
                        <NavigationMenu>
                            <NavigationMenuList className={cn("font-medium text-[13px] tracking-[0.2em] uppercase transition-colors", isScrolled ? "text-foreground" : "text-white")}>

                                {/* KILIMANJARO MEGA MENU */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={cn("bg-transparent hover:text-primary hover:bg-primary/5 data-[state=open]:text-primary focus:bg-transparent text-sm uppercase px-4", isScrolled ? "text-foreground" : "text-white")}>
                                        Kilimanjaro
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <MegaMenuPane
                                            defaultTitle="Climbing Kilimanjaro"
                                            defaultDescription="Your ultimate guide to the Roof of Africa. Detailed route comparisons, training advice, and gear requirements to ensure your summit success with our expert team."
                                            defaultLink="/kilimanjaro"
                                            defaultLinkText="Explore All Routes ›"
                                            defaultImage="/images/intro/kilimanjaro-card.webp"
                                            items={[
                                                { title: "Lemosho Route", href: "/kilimanjaro/lemosho-route", description: "The premier route for acclimatization and scenic views. Approaching from the west, offering high success rates.", image: "/images/destinations/kilimanjaro/kilimanjaro-1.webp" },
                                                { title: "Machame Route", href: "/kilimanjaro/machame-route", description: "The popular 'Whiskey Route'. Known for its steep profile, scenic beauty, and excellent climb-high sleep-low opportunities.", image: "/images/destinations/kilimanjaro/kilimanjaro-2.webp" },
                                                { title: "Marangu Route", href: "/kilimanjaro/marangu-route", description: "The classic 'Coca-Cola Route'. The only trail offering hut accommodation for sleeping.", image: "/images/destinations/kilimanjaro/kilimanjaro-3.webp" },
                                                { title: "Rongai Route", href: "/kilimanjaro/rongai-route", description: "The only route approaching Mt Kilimanjaro from the north. Drier, wilder, and less crowded.", image: "/images/destinations/kilimanjaro/kilimanjaro-4.webp" },
                                                { title: "Umbwe Route", href: "/kilimanjaro/umbwe-route", description: "The steepest and most challenging route. Recommended only for experienced trekkers looking for a quiet climb.", image: "/images/destinations/kilimanjaro/kilimanjaro-5.webp" },
                                                { title: "Northern Circuit", href: "/kilimanjaro/northern-circuit", description: "The newest and longest route on Kilimanjaro. Unmatched 360-degree scenery and the highest summit success rate.", image: "/images/destinations/kilimanjaro/kilimanjaro-6.webp" },
                                                { title: "Joining Groups", href: "/kilimanjaro/joining-groups", description: "Join our scheduled group departures. Meet fellow adventurers and save on costs.", badge: "$100 Deposit", badgeColor: "bg-[#D4E8BC] text-[#3A5223]", image: "/images/intro/kilimanjaro-card.webp" },
                                                { title: "Kilimanjaro Guide", href: "/kilimanjaro/guide", description: "Everything you need to know before you go. Preparation, packing lists, and expert tips.", image: "/images/intro/kilimanjaro-card.webp" }
                                            ]}
                                        />
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* SAFARI MEGA MENU */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={cn("bg-transparent hover:text-primary hover:bg-primary/5 data-[state=open]:text-primary focus:bg-transparent text-sm uppercase px-4", isScrolled ? "text-foreground" : "text-white")}>
                                        Safari
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <MegaMenuPane
                                            defaultTitle="Tanzania Safari"
                                            defaultDescription="Experience the wild heart of Africa. From the Great Migration to private luxury lodges, discover the perfect safari adventure tailored to your dreams."
                                            defaultLink="/safari"
                                            defaultLinkText="View All Safaris ›"
                                            defaultImage="/images/intro/safari-card.webp"
                                            items={[
                                                { title: "Mid Range Safaris", href: "/all-safaris/mid-range", description: "Comfortable tented camps and lodges offering an authentic experience at excellent value.", image: "/images/intro/safari-card.webp" },
                                                { title: "Luxury Safaris", href: "/all-safaris/luxury", description: "Exclusive 5-star accommodations, gourmet dining, and private game drives for the discerning traveler.", image: "/images/intro/safari-card.webp" },
                                                { title: "Migration Safaris", href: "/all-safaris/migration", description: "Witness the greatest show on earth. Follow the massive herds of wildebeest across the Serengeti.", image: "/images/destinations/serengeti/serengeti-1.webp" },
                                                { title: "Cultural Experience", href: "/all-safaris/cultural", description: "Go beyond the wildlife. Meet the Maasai, Hadzabe, and Datoga tribes for a true cultural immersion.", image: "/images/destinations/tarangire/tarangire-3.webp" },
                                                { title: "Honeymoon", href: "/all-safaris/honeymoon", description: "Romantic escapes tailored for two. Private dinners, bush sunsets, and unforgettably magical moments.", image: "/images/destinations/zanzibar/zanzibar-1.webp" },
                                                { title: "Tented Camps", href: "/all-safaris/tented-camps", description: "Stay in the heart of the action. Canvas walls mean you hear the sounds of the African night.", image: "/images/intro/safari-card.webp" },
                                                { title: "Lodge Safaris", href: "/all-safaris/lodge", description: "Traditional structures with solid walls, swimming pools, and robust amenities for a relaxing stay.", image: "/images/intro/safari-card.webp" },
                                                { title: "Day Trips", href: "/all-day-trips", description: "Short on time? Experience Arusha National Park, Tarangire, or the crater in just one day.", image: "/images/intro/day-trips-card.webp" },
                                                { title: "Safari Guide", href: "/all-safaris/guide", description: "Expert advice on when to go, what to pack, and which parks to visit for your specific interests.", image: "/images/intro/safari-card.webp" }
                                            ]}
                                        />
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* DESTINATIONS MEGA MENU */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={cn("bg-transparent hover:text-primary hover:bg-primary/5 data-[state=open]:text-primary focus:bg-transparent text-sm uppercase px-4", isScrolled ? "text-foreground" : "text-white")}>
                                        Destinations
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <MegaMenuPane
                                            defaultTitle="Explore Destinations"
                                            defaultDescription="Beyond the savannah, discover a world of diverse landscapes. From the snow-capped peak of Kilimanjaro to the turquoise waters of Zanzibar and the wild south."
                                            defaultLink="/destinations"
                                            defaultLinkText="All Destinations ›"
                                            defaultImage="/images/intro/destinations-card.webp"
                                            items={[
                                                { title: "Serengeti", href: "/destinations/serengeti", description: "Iconic endless plains and the world's most famous wildlife spectacle.", image: "/images/destinations/serengeti/serengeti-1.webp" },
                                                { title: "Ngorongoro", href: "/destinations/ngorongoro", description: "A unique volcanic caldera teeming with life in a natural amphitheater.", image: "/images/destinations/ngorongoro/ngorongoro-1.webp" },
                                                { title: "Zanzibar", href: "/destinations/zanzibar", description: "Historic Stone Town and pristine white sand beaches of the spice islands.", image: "/images/destinations/zanzibar/zanzibar-1.webp" },
                                                { title: "Tarangire", href: "/destinations/tarangire", description: "The land of giants. Famous for massive elephant herds and ancient baobab trees.", image: "/images/destinations/tarangire/tarangire-1.webp" },
                                                { title: "Lake Manyara", href: "/destinations/lake-manyara", description: "Home of tree-climbing lions and a diverse soda lake ecosystem.", image: "/images/destinations/lake-manyara/lake-manyara-1.webp" },
                                                { title: "Selous (Nyerere)", href: "/destinations/nyerere", description: "Wild, remote, and offering unique boat safaris in Africa's largest reserve.", image: "/images/destinations/nyerere/nyerere-5.webp" }
                                            ]}
                                        />
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* SIMPLE LINKS */}
                                <NavigationMenuItem>
                                    <Link href="/about" className={cn("flex items-center bg-transparent hover:text-primary focus:bg-transparent text-sm uppercase px-4 h-10 transition-colors", isScrolled ? "text-foreground" : "text-white")}>
                                        About
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/blog" className={cn("flex items-center bg-transparent hover:text-primary focus:bg-transparent text-sm uppercase px-4 h-10 transition-colors", isScrolled ? "text-foreground" : "text-white")}>
                                        Stories
                                    </Link>
                                </NavigationMenuItem>

                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* CALL TO ACTION */}
                    <div className="flex items-center gap-6">
                        <Button 
                            className={cn(
                                "hidden md:flex rounded-full px-8 py-6 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500",
                                isScrolled 
                                    ? "bg-primary text-white hover:bg-primary/90" 
                                    : "bg-white text-foreground hover:bg-white/90"
                            )}
                            asChild
                        >
                            <Link href="/request-quote">Enquire Now</Link>
                        </Button>

                        {/* MOBILE MENU TOGGLE */}
                        <button 
                            className={cn(
                                "lg:hidden p-2 transition-colors",
                                isScrolled ? "text-foreground" : "text-white"
                            )}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                </nav>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] lg:hidden bg-white flex flex-col"
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                <div className="relative w-44 h-12">
                                    <Image
                                        src="/images/logo.webp"
                                        alt="Serenity Africa Safaris"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-[#1A1A1A] hover:bg-gray-50 rounded-full transition-colors"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Mobile links */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-10 px-6 overflow-y-auto py-12">
                            {["Kilimanjaro", "Safari", "Destinations", "About", "Stories"].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    <Link 
                                        href={
                                            item === "Safari" ? "/safari" : 
                                            item === "Stories" ? "/blog" : 
                                            item === "Destinations" ? "/destinations" : 
                                            `/${item.toLowerCase()}`
                                        }
                                        className="text-3xl font-serif text-[#1A1A1A] hover:text-primary transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                            
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="w-full max-w-xs mt-4"
                            >
                                <Button className="w-full rounded-full py-8 text-sm font-bold tracking-[0.2em] uppercase bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" asChild>
                                    <Link href="/request-quote" onClick={() => setIsMobileMenuOpen(false)}>
                                        Enquire Now
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Mobile Footer Decor */}
                        <div className="p-10 flex justify-center opacity-10">
                            <Compass className="w-12 h-12 text-primary" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

function MegaMenuPane({ defaultTitle, defaultDescription, defaultLink, defaultLinkText, defaultImage, items }: any) {
    const [activeItem, setActiveItem] = useState({
        title: defaultTitle,
        description: defaultDescription,
        link: defaultLink,
        linkText: defaultLinkText,
        image: defaultImage
    })

    return (
        <div className="flex w-[85vw] max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl">
            {/* Left Column: Navigation Items */}
            <div className="w-1/2 p-10 border-r border-gray-100 grid grid-cols-2 gap-x-8 gap-y-4 max-h-[600px] overflow-y-auto">
                {items.map((item: any, i: number) => (
                    <Link 
                        key={i} 
                        href={item.href}
                        className="group flex flex-col p-4 rounded-2xl hover:bg-primary/5 transition-all"
                        onMouseEnter={() => setActiveItem({
                            title: item.title,
                            description: item.description,
                            link: item.href,
                            linkText: "View Itinerary ›",
                            image: item.image
                        })}
                    >
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-[13px] font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-widest">
                                {item.title}
                            </span>
                            {item.badge && (
                                <span className={cn("text-[9px] px-2 py-0.5 rounded-full font-bold uppercase", item.badgeColor)}>
                                    {item.badge}
                                </span>
                            )}
                        </div>
                        <p className="text-[11px] text-gray-400 line-clamp-1 italic">
                            {item.description}
                        </p>
                    </Link>
                ))}
            </div>

            {/* Right Column: Featured Preview */}
            <div className="w-1/2 relative group">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeItem.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={activeItem.image}
                            alt={activeItem.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        <div className="absolute inset-0 p-12 flex flex-col justify-end">
                            <motion.h4 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-3xl font-serif text-white mb-4"
                            >
                                {activeItem.title}
                            </motion.h4>
                            <motion.p 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm"
                            >
                                {activeItem.description}
                            </motion.p>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Link href={activeItem.link} className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
                                    {activeItem.linkText}
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}
