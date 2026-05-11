import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react";

export function Footer() {
    const currentYear = 2026;

    return (
        <footer className="relative bg-[#0D0D0D] text-white overflow-hidden">

            {/* ── CINEMATIC SUNSET IMAGE WITH FADE OVERLAY ──────────────────── */}
            <div className="relative w-full h-[380px] md:h-[460px]">
                <Image
                    src="/images/serenity_sun_set.webp"
                    alt="Serenity Africa – Serengeti Sunset"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient: image visible at top, fades to dark background at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#0D0D0D]" />
                {/* Side vignettes */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/40 via-transparent to-[#0D0D0D]/40" />

                {/* Overlay Quote */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pb-16">
                    <span className="text-primary text-[9px] font-bold tracking-[0.5em] uppercase mb-5 block opacity-90">
                        A Promise to the Wild
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-3xl">
                        Where the Earth Still <br />
                        <span className="italic text-white/60 font-light">Whispers</span>
                    </h2>
                </div>
            </div>

            {/* ── MAIN FOOTER CONTENT ───────────────────────────────────────── */}
            <div className="relative z-10 pt-16 pb-0">

                {/* Newsletter Bar */}
                <div className="container px-6 mx-auto mb-20">
                    <div className="border border-white/8 bg-white/3 backdrop-blur-sm rounded-2xl px-8 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-2">Safari Intelligence</p>
                            <h3 className="text-xl md:text-2xl font-serif text-white">Receive Exclusive Safari Insights</h3>
                            <p className="text-white/40 text-sm mt-1 font-light">Migration calendars, hidden gems, and bespoke offer updates.</p>
                        </div>
                        <div className="flex w-full md:w-auto gap-0 min-w-[340px]">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm px-5 py-4 rounded-l-full outline-none focus:border-primary/50 transition-colors"
                            />
                            <button className="bg-primary hover:bg-primary/80 text-white text-[10px] font-bold tracking-widest uppercase px-7 py-4 rounded-r-full transition-colors whitespace-nowrap flex items-center gap-2">
                                Subscribe <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-20 pb-20 border-b border-white/8">

                        {/* Brand Column */}
                        <div className="lg:col-span-4 space-y-10">
                            <Link href="/" className="block">
                                <div className="relative w-52 h-14">
                                    <Image
                                        src="/images/serenity-logo.webp"
                                        alt="Serenity Africa Safaris"
                                        fill
                                        className="object-contain object-left"
                                    />
                                </div>
                            </Link>

                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
                                Tanzania's premier luxury safari operator. Built from real presence in the Serengeti, we craft bespoke journeys where silence, wildlife, and wonder converge.
                            </p>

                            {/* Signature Lodge Link */}
                            <Link
                                href="https://serenitycampandlodges.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.25em] uppercase text-primary hover:text-white transition-colors border border-primary/30 hover:border-white/30 px-5 py-3 w-fit rounded-full"
                            >
                                Serenity Camp & Lodges
                                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </Link>

                            {/* Social */}
                            <div>
                                <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/25 mb-4">Follow the Journey</p>
                                <div className="flex gap-3">
                                    <SocialIcon href="https://instagram.com" icon={Instagram} label="Instagram" />
                                    <SocialIcon href="https://facebook.com" icon={Facebook} label="Facebook" />
                                    <SocialIcon href="https://twitter.com" icon={Twitter} label="Twitter" />
                                    <SocialIcon href="https://youtube.com" icon={Youtube} label="YouTube" />
                                </div>
                            </div>
                        </div>

                        {/* Nav Columns */}
                        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10 xl:gap-12">

                            <FooterColumn
                                title="Experiences"
                                links={[
                                    { label: "All Safaris", href: "/all-safaris" },
                                    { label: "Kilimanjaro", href: "/kilimanjaro" },
                                    { label: "Day Trips", href: "/all-day-trips" },
                                    { label: "Migration Safari", href: "/all-safaris/migration" },
                                    { label: "Honeymoon", href: "/all-safaris/honeymoon" },
                                    { label: "Luxury Safaris", href: "/all-safaris/luxury" },
                                ]}
                            />

                            <FooterColumn
                                title="Destinations"
                                links={[
                                    { label: "Serengeti", href: "/destinations/serengeti" },
                                    { label: "Ngorongoro", href: "/destinations/ngorongoro" },
                                    { label: "Tarangire", href: "/destinations/tarangire" },
                                    { label: "Zanzibar", href: "/destinations/zanzibar" },
                                    { label: "Ruaha", href: "/destinations/ruaha" },
                                    { label: "Nyerere", href: "/destinations/nyerere" },
                                ]}
                            />

                            <FooterColumn
                                title="Company"
                                links={[
                                    { label: "Our Story", href: "/about" },
                                    { label: "Accommodations", href: "/accommodation" },
                                    { label: "Safari Journal", href: "/blog" },
                                    { label: "Request a Quote", href: "/request-quote" },
                                    { label: "Contact Us", href: "/contact" },
                                    { label: "Privacy Policy", href: "/privacy" },
                                ]}
                            />

                            {/* Contact Column */}
                            <div className="space-y-8">
                                <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Get in Touch</h4>
                                <ul className="space-y-5">
                                    <li className="flex items-start gap-3 group">
                                        <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm text-gray-400 font-light leading-relaxed">
                                            Arusha, Tanzania<br />
                                            <span className="text-white/25 text-xs">East Africa</span>
                                        </span>
                                    </li>
                                    <li>
                                        <a href="tel:+255626371646" className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors group">
                                            <Phone className="w-4 h-4 text-primary shrink-0" />
                                            <span className="font-light">+255 626 371 646</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@serenityafricasafaris.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors group">
                                            <Mail className="w-4 h-4 text-primary shrink-0" />
                                            <span className="font-light break-all">info@serenityafricasafaris.com</span>
                                        </a>
                                    </li>
                                </ul>

                                {/* WhatsApp CTA */}
                                <a
                                    href="https://wa.me/255626371646"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] text-[#25D366] hover:text-white text-[10px] font-bold tracking-widest uppercase px-5 py-3 rounded-full transition-all duration-300"
                                >
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.552 4.099 1.518 5.818L.057 23.776l6.109-1.439A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.371l-.36-.214-3.629.855.872-3.548-.235-.374A9.82 9.82 0 012.182 12C2.182 6.591 6.591 2.182 12 2.182S21.818 6.591 21.818 12 17.409 21.818 12 21.818z"/>
                                    </svg>
                                    WhatsApp Us
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Certifications & Bottom Bar */}
                <div className="container px-6 mx-auto py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Certifications */}
                        <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
                            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/20">Certified By</span>
                            <span className="text-[10px] font-bold tracking-wider uppercase text-white/30 border border-white/10 px-4 py-1.5 rounded-full">TATO Member</span>
                            <span className="text-[10px] font-bold tracking-wider uppercase text-white/30 border border-white/10 px-4 py-1.5 rounded-full">Tanzania Tourism</span>
                            <span className="text-[10px] font-bold tracking-wider uppercase text-white/30 border border-white/10 px-4 py-1.5 rounded-full">Eco Certified</span>
                        </div>

                        {/* Copyright */}
                        <div className="flex flex-col md:flex-row items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-gray-600">
                            <p>© {currentYear} Serenity Africa Safaris. All Rights Reserved.</p>
                            <div className="flex gap-6">
                                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                                <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                                <Link href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
    return (
        <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">{title}</h4>
            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            className="text-sm text-gray-500 hover:text-white transition-colors duration-300 font-light"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function SocialIcon({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
    return (
        <Link
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
        >
            <Icon size={15} />
        </Link>
    )
}
