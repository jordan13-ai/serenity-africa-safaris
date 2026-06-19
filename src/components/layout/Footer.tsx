import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react";

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
                                    <SocialIcon href="https://instagram.com" label="Instagram">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                                    </SocialIcon>
                                    <SocialIcon href="https://facebook.com" label="Facebook">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                    </SocialIcon>
                                    <SocialIcon href="https://x.com" label="X (Twitter)">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                    </SocialIcon>
                                    <SocialIcon href="https://youtube.com" label="YouTube">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                                    </SocialIcon>
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

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
        >
            {children}
        </Link>
    )
}
