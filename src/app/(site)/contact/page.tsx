"use client"
import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const interests = [
    "Wildlife Safari",
    "Kilimanjaro Trek",
    "Zanzibar Beach Holiday",
    "Combined Safari & Beach",
    "Cultural Experience",
    "Other",
];

const inputClass = "w-full bg-transparent border-0 border-b border-gray-300 focus:border-primary outline-none py-3 text-[#1A1A1A] text-base transition-colors placeholder:text-gray-300 focus:ring-0";
const labelClass = "block text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 transition-colors";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        interest: "Wildlife Safari",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg("");
        try {
            const res = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || "Failed to send");
            }
            setIsSubmitted(true);
        } catch (err) {
            setErrorMsg(err instanceof Error ? err.message : "Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="bg-[#FDFBF7] min-h-screen">
            {/* HERO SECTION */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
                <Image
                    src="/images/destinations/serengeti/serengeti-1.webp"
                    alt="Contact Us"
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
                            Get in Touch
                            <div className="w-8 h-[1px] bg-primary"></div>
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8">
                        Let's Plan <br />
                        <span className="italic text-white/70">Your Journey</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-white/60 font-light leading-relaxed text-lg max-w-2xl mx-auto">
                        Whether you're ready to book or simply gathering inspiration, our experts are here to guide you every step of the way.
                    </motion.p>
                </motion.div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-24 lg:py-32">
                <div className="container max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
                    
                    {/* LEFT — Contact Info */}
                    <div className="lg:w-1/3">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="space-y-6 lg:sticky lg:top-32"
                        >
                            <motion.div variants={fadeInUp} className="mb-10">
                                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">Direct Contact</h3>
                                <p className="text-gray-500 font-light text-sm">Reach out directly for immediate assistance or bespoke inquiries.</p>
                            </motion.div>

                            <motion.a variants={fadeInUp} href="https://wa.me/255626371646" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-5 rounded-none border border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                                </div>
                                <div>
                                    <div className="text-[#1A1A1A] text-sm font-bold tracking-[0.1em] uppercase group-hover:text-[#25D366] transition-colors mb-1">WhatsApp Chat</div>
                                    <div className="text-gray-500 text-xs font-light tracking-wide">+255 626 371 646</div>
                                </div>
                            </motion.a>

                            <motion.a variants={fadeInUp} href="mailto:info@serenityafricasafaris.com" className="flex items-center gap-6 p-5 rounded-none border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <div className="text-[#1A1A1A] text-sm font-bold tracking-[0.1em] uppercase group-hover:text-primary transition-colors mb-1">Email Us</div>
                                    <div className="text-gray-500 text-xs font-light">info@serenityafricasafaris.com</div>
                                </div>
                            </motion.a>

                            <motion.a variants={fadeInUp} href="tel:+255626371646" className="flex items-center gap-6 p-5 rounded-none border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <Phone className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <div className="text-[#1A1A1A] text-sm font-bold tracking-[0.1em] uppercase group-hover:text-primary transition-colors mb-1">Call Us</div>
                                    <div className="text-gray-500 text-xs font-light">Mon–Sun, open 24 hours</div>
                                </div>
                            </motion.a>

                            <motion.div variants={fadeInUp} className="flex items-center gap-6 p-5 rounded-none border border-gray-200 group">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-gray-500" />
                                </div>
                                <div>
                                    <div className="text-[#1A1A1A] text-sm font-bold tracking-[0.1em] uppercase mb-1">Our Office</div>
                                    <div className="text-gray-500 text-xs font-light">P.O. Box 12194, Arusha<br/>Tanzania, East Africa</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* RIGHT — Form */}
                    <div className="lg:w-2/3">
                        <div className="bg-white p-8 lg:p-16 border border-gray-100 shadow-sm">
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div 
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-center py-16"
                                    >
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring" }}
                                            className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8"
                                        >
                                            <CheckCircle2 className="w-10 h-10 text-primary" />
                                        </motion.div>
                                        <h2 className="text-4xl font-serif text-[#1A1A1A] mb-6">Jambo! Message Received.</h2>
                                        <p className="text-gray-500 font-light leading-relaxed mb-12 max-w-md mx-auto text-lg">
                                            Your inquiry is with our team. Expect a tailored response in your inbox within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity"
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="form"
                                        initial="hidden"
                                        animate="visible"
                                        exit={{ opacity: 0 }}
                                        variants={staggerContainer}
                                    >
                                        <motion.div variants={fadeInUp} className="mb-12">
                                            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">Send Us a Message</h2>
                                            <p className="text-gray-400 font-light text-sm">All fields marked with an asterisk (*) are required.</p>
                                        </motion.div>

                                        <form onSubmit={handleSubmit} className="space-y-10">
                                            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                                <div className="group">
                                                    <label htmlFor="firstName" className={labelClass}>First Name *</label>
                                                    <input
                                                        id="firstName"
                                                        required
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        className={inputClass}
                                                        placeholder="e.g. Jordan"
                                                    />
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="lastName" className={labelClass}>Last Name *</label>
                                                    <input
                                                        id="lastName"
                                                        required
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                        className={inputClass}
                                                        placeholder="e.g. Smith"
                                                    />
                                                </div>
                                                <div className="group md:col-span-2">
                                                    <label htmlFor="email" className={labelClass}>Email Address *</label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className={inputClass}
                                                        placeholder="jordan@example.com"
                                                    />
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
                                                    <input
                                                        id="phone"
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className={inputClass}
                                                        placeholder="+1 234 567 8900"
                                                    />
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="country" className={labelClass}>Country *</label>
                                                    <input
                                                        id="country"
                                                        required
                                                        value={formData.country}
                                                        onChange={handleChange}
                                                        className={inputClass}
                                                        placeholder="e.g. United States"
                                                    />
                                                </div>
                                                <div className="group md:col-span-2">
                                                    <label htmlFor="interest" className={labelClass}>I'm Interested In</label>
                                                    <div className="relative">
                                                        <select
                                                            id="interest"
                                                            value={formData.interest}
                                                            onChange={handleChange}
                                                            className={`${inputClass} appearance-none`}
                                                        >
                                                            {interests.map((opt) => (
                                                                <option key={opt}>{opt}</option>
                                                            ))}
                                                        </select>
                                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                            ▼
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="group md:col-span-2">
                                                    <label htmlFor="message" className={labelClass}>Your Message *</label>
                                                    <textarea
                                                        id="message"
                                                        required
                                                        rows={5}
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        className={`${inputClass} resize-none`}
                                                        placeholder="Tell us about your dream safari — dates, group size, interests..."
                                                    />
                                                </div>
                                            </motion.div>

                                            <motion.div variants={fadeInUp} className="pt-4">
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
                                                    className="group w-full flex items-center justify-center gap-4 bg-[#1A1A1A] text-white py-6 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-primary transition-all duration-300 disabled:opacity-50"
                                                >
                                                    {isSubmitting ? "Sending Message…" : "Send Message"}
                                                    {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />}
                                                </button>
                                            </motion.div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
