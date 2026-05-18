"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Compass, Award, Users, HeartHandshake,
  Leaf, ShieldCheck, Clock, MapPin,
} from "lucide-react"

const reasons = [
  {
    icon: Compass,
    stat: "100%",
    statLabel: "Tailor-Made",
    title: "Bespoke Itineraries",
    description:
      "No two travellers are alike. Every safari we craft is built around your vision — your pace, your passions, your story.",
  },
  {
    icon: Users,
    stat: "Expert",
    statLabel: "Local Guides",
    title: "Born-and-Bred Guides",
    description:
      "Our naturalist guides grew up in Tanzania's wilderness. They don't just know the bush — they read it like a language.",
  },
  {
    icon: Award,
    stat: "TATO",
    statLabel: "Licensed",
    title: "Licensed Tour Operator",
    description:
      "We are a fully licensed member of the Tanzania Association of Tour Operators, giving you complete peace of mind.",
  },
  {
    icon: HeartHandshake,
    stat: "24/7",
    statLabel: "Support",
    title: "White-Glove Support",
    description:
      "From first enquiry to final transfer, a dedicated concierge is on hand around the clock — whenever you need us.",
  },
  {
    icon: Leaf,
    stat: "Eco",
    statLabel: "Conscious",
    title: "Responsible Travel",
    description:
      "We operate with deep respect for wildlife and communities. Every booking contributes to local conservation efforts.",
  },
  {
    icon: MapPin,
    stat: "5+",
    statLabel: "Ecosystems",
    title: "Multi-Ecosystem Access",
    description:
      "Serengeti, Ngorongoro, Kilimanjaro, Zanzibar — we hold exclusive permits across Tanzania's most iconic landscapes.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: "easeOut" as const },
  }),
}

export function WhyChooseUs() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#1A1A1A] overflow-hidden">

      {/* ── Background image strip ──────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/destinations/serengeti/serengeti-1.webp"
          alt=""
          fill
          className="object-cover object-center opacity-10"
          aria-hidden
        />
        {/* Left-to-right gradient: solid dark → transparent → solid dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/70 to-[#1A1A1A]" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]" />
      </div>

      {/* ── Gold top rule ────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-10 h-px bg-primary" />
          <span className="text-primary text-[11px] font-bold tracking-[0.35em] uppercase">
            Why Serenity Africa Safaris
          </span>
        </div>

        {/* ── Heading ──────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-light leading-[1.1]">
              Africa, experienced{" "}
              <span className="italic text-white/70">the right way.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            variants={fadeUp}
            className="lg:text-right"
          >
            <p className="text-white/55 font-light leading-relaxed text-lg max-w-lg ml-auto">
              We don&apos;t just show you Tanzania — we invite you into its soul. Here is what
              separates a Serenity safari from everything else.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 mt-8 text-[11px] font-bold tracking-[0.25em] uppercase text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity"
            >
              Plan Your Safari
            </Link>
          </motion.div>
        </div>

        {/* ── Cards grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={fadeUp}
              className="group relative bg-[#1A1A1A] p-8 hover:bg-[#232323] transition-colors duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <r.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary leading-none">{r.stat}</p>
                  <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase mt-0.5">
                    {r.statLabel}
                  </p>
                </div>
              </div>

              {/* Text */}
              <h3 className="text-lg font-serif text-white mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                {r.title}
              </h3>
              <p className="text-white/45 text-sm font-light leading-relaxed">
                {r.description}
              </p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom trust strip ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-10 mt-16 pt-10 border-t border-white/10"
        >
          {[
            { icon: ShieldCheck, text: "TATO Licensed Operator" },
            { icon: Clock,       text: "24/7 Guest Support" },
            { icon: Award,       text: "2 Years of Expertise" },
            { icon: Leaf,        text: "Eco-Responsible Travel" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-white/50 hover:text-white/80 transition-colors">
              <Icon className="w-4 h-4 text-primary/70 shrink-0" strokeWidth={1.5} />
              <span className="text-xs font-medium tracking-wide">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
