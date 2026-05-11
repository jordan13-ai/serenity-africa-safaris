"use client"
import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Clock, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const tripTypes = [
    { value: "", label: "Select trip type" },
    { value: "wildlife-safari", label: "Wildlife Safari" },
    { value: "kilimanjaro", label: "Kilimanjaro Trek" },
    { value: "zanzibar", label: "Zanzibar Beach Holiday" },
    { value: "combined", label: "Combined Safari & Beach" },
    { value: "combined-kili", label: "Kilimanjaro & Safari" },
    { value: "honeymoon", label: "Honeymoon Package" },
    { value: "family", label: "Family Safari" },
    { value: "cultural", label: "Cultural Experience" },
    { value: "other", label: "Other" },
]

const durations = [
    { value: "", label: "Select duration" },
    { value: "3-5", label: "3–5 days" },
    { value: "6-8", label: "6–8 days" },
    { value: "9-12", label: "9–12 days" },
    { value: "13-15", label: "13–15 days" },
    { value: "16+", label: "16+ days" },
]

const budgets = [
    { value: "", label: "Select budget range" },
    { value: "1000-2000", label: "$1,000 – $2,000" },
    { value: "2000-3500", label: "$2,000 – $3,500" },
    { value: "3500-5000", label: "$3,500 – $5,000" },
    { value: "5000-7500", label: "$5,000 – $7,500" },
    { value: "7500+", label: "$7,500+" },
]

const accommodations = [
    { value: "", label: "Select preference" },
    { value: "budget", label: "Budget (Camping & Basic Lodges)" },
    { value: "mid-range", label: "Mid-Range (Tented Camps & Lodges)" },
    { value: "luxury", label: "Luxury (5-Star & Exclusive Camps)" },
    { value: "mixed", label: "Mixed (Combination)" },
]

const inputClass = "w-full bg-transparent border-0 border-b-2 border-gray-200 focus:border-primary outline-none py-4 text-[#1A1A1A] text-lg transition-colors placeholder:text-gray-300 focus:ring-0"
const labelClass = "block text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 transition-colors"
const selectClass = "w-full bg-transparent border-0 border-b-2 border-gray-200 focus:border-primary outline-none py-4 text-[#1A1A1A] text-lg transition-colors focus:ring-0 appearance-none"

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

function RequestQuoteContent() {
    const searchParams = useSearchParams()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        tripType: "",
        destinations: "",
        travelDates: "",
        duration: "",
        travelers: "",
        budget: "",
        accommodation: "",
        specialRequests: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        const tourName = searchParams.get("tour")
        if (tourName) {
            setFormData((prev) => ({
                ...prev,
                specialRequests: `I am interested in the "${tourName}" tour.\n\n` + prev.specialRequests,
            }))
        }
    }, [searchParams])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setErrorMsg("")
        try {
            const res = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                throw new Error(data.error || "Failed to send")
            }
            setIsSubmitted(true)
        } catch (err) {
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-[#FDFBF7] flex items-center justify-center px-6 pt-24 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
                </div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center max-w-xl py-20 relative z-10"
                >
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 15 }}
                        className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-10"
                    >
                        <CheckCircle2 className="w-12 h-12 text-primary" />
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-6 tracking-tight">Request Received</h1>
                    <p className="text-gray-500 font-light leading-relaxed mb-8 text-lg">
                        Thank you, {formData.firstName}. Our luxury safari consultants are reviewing your preferences and will prepare a tailored itinerary for <strong>{formData.email}</strong> within 24 hours.
                    </p>
                    <div className="w-16 h-[1px] bg-gray-200 mx-auto mb-8" />
                    <p className="text-gray-400 text-sm font-light mb-10 uppercase tracking-widest">
                        For immediate assistance
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/255626371646"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#20bd5a] transition-colors rounded-none"
                        >
                            <MessageCircle className="w-4 h-4" /> WhatsApp Us
                        </a>
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-3 border border-[#1A1A1A] text-[#1A1A1A] px-8 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </motion.div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#FDFBF7]">
            {/* HERO SECTION */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
                <Image
                    src="/images/hero/slide-2.webp"
                    alt="Request Quote"
                    fill
                    className="object-cover opacity-40 mix-blend-luminosity"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
                
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="relative z-10 container max-w-5xl mx-auto px-6 text-center pt-24"
                >
                    <motion.div variants={fadeInUp} className="flex justify-center mb-8">
                        <span className="text-primary text-[11px] font-bold tracking-[0.3em] uppercase flex items-center gap-4">
                            <div className="w-8 h-[1px] bg-primary"></div>
                            Bespoke Planning
                            <div className="w-8 h-[1px] bg-primary"></div>
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8">
                        Design Your <br />
                        <span className="italic text-white/50">Masterpiece</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-white/60 font-light leading-relaxed text-lg max-w-2xl mx-auto">
                        Tell us about your dream journey. Our dedicated safari artisans will craft a personalised, obligation-free proposal tailored exactly to your rhythm and style.
                    </motion.p>
                </motion.div>
            </section>

            {/* CONTENT SECTION - Centered Form Layout */}
            <section className="py-24 lg:py-32 relative">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
                
                <div className="container max-w-4xl mx-auto px-6 relative z-10">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="bg-white p-8 md:p-16 lg:p-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-24">

                            {/* Section: Personal */}
                            <motion.div variants={fadeInUp}>
                                <div className="text-center mb-16">
                                    <span className="text-primary font-serif text-2xl italic block mb-4">01.</span>
                                    <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">Guest Information</h2>
                                    <div className="w-12 h-[1px] bg-primary mx-auto" />
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                    <div className="group">
                                        <label htmlFor="firstName" className={labelClass}>First Name *</label>
                                        <input id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} className={inputClass} placeholder="e.g. Jordan" />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="lastName" className={labelClass}>Last Name *</label>
                                        <input id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} className={inputClass} placeholder="e.g. Smith" />
                                    </div>
                                    <div className="group md:col-span-2">
                                        <label htmlFor="email" className={labelClass}>Email Address *</label>
                                        <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="jordan@example.com" />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
                                        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+1 234 567 8900" />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="country" className={labelClass}>Country of Residence *</label>
                                        <input id="country" name="country" required value={formData.country} onChange={handleChange} className={inputClass} placeholder="e.g. United States" />
                                    </div>
                                </div>
                            </motion.div>

                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                            {/* Section: Trip Details */}
                            <motion.div variants={fadeInUp}>
                                <div className="text-center mb-16">
                                    <span className="text-primary font-serif text-2xl italic block mb-4">02.</span>
                                    <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">Safari Preferences</h2>
                                    <div className="w-12 h-[1px] bg-primary mx-auto" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                    <div className="group">
                                        <label htmlFor="tripType" className={labelClass}>Type of Safari *</label>
                                        <div className="relative">
                                            <select id="tripType" name="tripType" required value={formData.tripType} onChange={handleChange} className={selectClass}>
                                                {tripTypes.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                                            </select>
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                                                ▼
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="destinations" className={labelClass}>Preferred Parks</label>
                                        <input id="destinations" name="destinations" value={formData.destinations} onChange={handleChange} className={inputClass} placeholder="e.g. Serengeti, Ngorongoro" />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="travelDates" className={labelClass}>Estimated Dates</label>
                                        <input id="travelDates" name="travelDates" value={formData.travelDates} onChange={handleChange} className={inputClass} placeholder="e.g. July 2026" />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="duration" className={labelClass}>Duration *</label>
                                        <div className="relative">
                                            <select id="duration" name="duration" required value={formData.duration} onChange={handleChange} className={selectClass}>
                                                {durations.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                                            </select>
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                                                ▼
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="travelers" className={labelClass}>Party Size *</label>
                                        <input id="travelers" name="travelers" type="number" min="1" required value={formData.travelers} onChange={handleChange} className={inputClass} placeholder="Number of guests" />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="budget" className={labelClass}>Budget per Person *</label>
                                        <div className="relative">
                                            <select id="budget" name="budget" required value={formData.budget} onChange={handleChange} className={selectClass}>
                                                {budgets.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                                            </select>
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                                                ▼
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group md:col-span-2">
                                        <label htmlFor="accommodation" className={labelClass}>Accommodation Style *</label>
                                        <div className="relative">
                                            <select id="accommodation" name="accommodation" required value={formData.accommodation} onChange={handleChange} className={selectClass}>
                                                {accommodations.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                                            </select>
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                                                ▼
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                            {/* Section: Special Requests */}
                            <motion.div variants={fadeInUp}>
                                <div className="text-center mb-16">
                                    <span className="text-primary font-serif text-2xl italic block mb-4">03.</span>
                                    <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">Finer Details</h2>
                                    <div className="w-12 h-[1px] bg-primary mx-auto" />
                                </div>
                                
                                <div className="group max-w-3xl mx-auto">
                                    <label htmlFor="specialRequests" className={`${labelClass} text-center`}>Anything else we should know?</label>
                                    <textarea
                                        id="specialRequests"
                                        name="specialRequests"
                                        rows={4}
                                        value={formData.specialRequests}
                                        onChange={handleChange}
                                        className={`${inputClass} text-center resize-none`}
                                        placeholder="Dietary requirements, accessibility needs, special occasions…"
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="pt-12 text-center">
                                <AnimatePresence>
                                    {errorMsg && (
                                        <motion.p 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="text-red-500 text-sm mb-6"
                                        >
                                            {errorMsg}
                                        </motion.p>
                                    )}
                                </AnimatePresence>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group inline-flex items-center justify-center gap-4 bg-[#1A1A1A] text-white px-16 py-6 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-primary transition-all duration-300 disabled:opacity-50 mx-auto"
                                >
                                    {isSubmitting ? "Crafting Your Proposal…" : "Request Complimentary Quote"}
                                    {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />}
                                </button>

                                <p className="text-xs text-gray-400 font-light mt-8">
                                    Your information is secure. We guarantee 100% privacy and zero spam.
                                </p>
                            </motion.div>
                        </form>
                    </motion.div>

                    {/* Value Proposition Bottom Bar */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 shadow-sm">
                            <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                            <h4 className="text-sm font-bold tracking-widest uppercase text-[#1A1A1A] mb-2">Secure Booking</h4>
                            <p className="text-gray-500 text-sm font-light">Fully bonded and insured for your peace of mind.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 shadow-sm">
                            <Clock className="w-8 h-8 text-primary mb-4" />
                            <h4 className="text-sm font-bold tracking-widest uppercase text-[#1A1A1A] mb-2">Fast Response</h4>
                            <p className="text-gray-500 text-sm font-light">Expect a detailed itinerary within 24 hours.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 shadow-sm">
                            <MapPin className="w-8 h-8 text-primary mb-4" />
                            <h4 className="text-sm font-bold tracking-widest uppercase text-[#1A1A1A] mb-2">Local Experts</h4>
                            <p className="text-gray-500 text-sm font-light">100% locally owned and operated in Tanzania.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

export default function RequestQuotePage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
                <div className="w-12 h-12 border-2 border-gray-200 border-t-primary rounded-full animate-spin"></div>
            </div>
        }>
            <RequestQuoteContent />
        </Suspense>
    )
}
