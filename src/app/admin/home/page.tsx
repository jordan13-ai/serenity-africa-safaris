"use client"

import { useEffect, useState } from "react"
import { Loader2, Save, RotateCcw } from "lucide-react"

const DEFAULT: Record<string, string> = {
  heroTagline: "Tanzania's Premier Safari Company",
  heroHeadline: "Where the Wild\nThings Are",
  heroSubheadline: "Extraordinary safaris, mountain climbs and beach escapes crafted by experts who call Tanzania home.",
  heroCta: "Plan Your Safari",
  heroCtaSecondary: "View Itineraries",
  statsYears: "15+",
  statsLabel1: "Years of Excellence",
  statsGuests: "5,000+",
  statsLabel2: "Happy Travellers",
  statsParks: "12+",
  statsLabel3: "Parks & Reserves",
  statsRating: "4.9★",
  statsLabel4: "Average Rating",
  featuredHeadline: "Signature Experiences",
  featuredSubheadline: "From the Serengeti's endless plains to Kilimanjaro's glacial summit, we craft journeys that redefine adventure.",
  whyHeadline: "Why Serenity Africa",
  whySubheadline: "We are a team of passionate Tanzanian guides and safari specialists dedicated to creating extraordinary, responsible travel experiences.",
  ctaHeadline: "Ready for the Journey of a Lifetime?",
  ctaSubheadline: "Let us craft your perfect Tanzania itinerary — tailored to your dates, interests and budget.",
  ctaButton: "Request a Free Quote",
}

type Field = { key: string; label: string; multiline?: boolean }

const SECTIONS: { title: string; fields: Field[] }[] = [
  {
    title: "Hero Section",
    fields: [
      { key: "heroTagline", label: "Tagline (small text above headline)" },
      { key: "heroHeadline", label: "Main Headline", multiline: true },
      { key: "heroSubheadline", label: "Sub-headline", multiline: true },
      { key: "heroCta", label: "Primary CTA Button" },
      { key: "heroCtaSecondary", label: "Secondary CTA Button" },
    ],
  },
  {
    title: "Stats Bar",
    fields: [
      { key: "statsYears", label: "Stat 1 — Value (e.g. 15+)" },
      { key: "statsLabel1", label: "Stat 1 — Label" },
      { key: "statsGuests", label: "Stat 2 — Value" },
      { key: "statsLabel2", label: "Stat 2 — Label" },
      { key: "statsParks", label: "Stat 3 — Value" },
      { key: "statsLabel3", label: "Stat 3 — Label" },
      { key: "statsRating", label: "Stat 4 — Value" },
      { key: "statsLabel4", label: "Stat 4 — Label" },
    ],
  },
  {
    title: "Featured Experiences Section",
    fields: [
      { key: "featuredHeadline", label: "Section Headline" },
      { key: "featuredSubheadline", label: "Section Sub-headline", multiline: true },
    ],
  },
  {
    title: "Why Choose Us",
    fields: [
      { key: "whyHeadline", label: "Section Headline" },
      { key: "whySubheadline", label: "Section Sub-headline", multiline: true },
    ],
  },
  {
    title: "Bottom CTA",
    fields: [
      { key: "ctaHeadline", label: "CTA Headline" },
      { key: "ctaSubheadline", label: "CTA Sub-headline", multiline: true },
      { key: "ctaButton", label: "CTA Button Text" },
    ],
  },
]

export default function AdminHomePage() {
  const [content, setContent] = useState<Record<string, string>>(DEFAULT)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch("/api/admin/home")
      .then((r) => r.json())
      .then((data) => {
        if (data && Object.keys(data).length > 0) setContent({ ...DEFAULT, ...data })
      })
      .finally(() => setLoading(false))
  }, [])

  function update(key: string, val: string) {
    setContent((c) => ({ ...c, [key]: val }))
    setSaved(false)
  }

  async function handleSave() {
    setSaving(true)
    try {
      await fetch("/api/admin/home", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } finally {
      setSaving(false)
    }
  }

  function handleReset() {
    if (!confirm("Reset all home page content to defaults?")) return
    setContent(DEFAULT)
    setSaved(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-6 h-6 animate-spin text-[#737373]" />
      </div>
    )
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">Home Page</h2>
          <p className="text-sm text-[#737373] mt-0.5">Edit the text content of the home page</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-2 border border-[#E2E0DB] text-[#737373] text-sm rounded-lg hover:bg-[#F9F7F4] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-[#C5A059] text-[#1A1A1A] text-sm font-bold rounded-lg hover:bg-[#D4B06A] disabled:opacity-60 transition-colors"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saved ? "Saved!" : saving ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {SECTIONS.map((section) => (
          <div key={section.title} className="bg-white rounded-xl border border-[#E2E0DB] overflow-hidden">
            <div className="px-5 py-3 bg-[#F9F7F4] border-b border-[#E2E0DB]">
              <h3 className="text-xs font-semibold text-[#737373] uppercase tracking-wider">{section.title}</h3>
            </div>
            <div className="p-5 space-y-4">
              {section.fields.map(({ key, label, multiline }) => (
                <div key={key}>
                  <label className="block text-xs font-medium text-[#737373] uppercase tracking-wide mb-1.5">
                    {label}
                  </label>
                  {multiline ? (
                    <textarea
                      rows={3}
                      value={content[key] ?? ""}
                      onChange={(e) => update(key, e.target.value)}
                      className="w-full px-3 py-2 border border-[#E2E0DB] rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A059] resize-none transition-colors"
                    />
                  ) : (
                    <input
                      type="text"
                      value={content[key] ?? ""}
                      onChange={(e) => update(key, e.target.value)}
                      className="w-full px-3 py-2 border border-[#E2E0DB] rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2.5 bg-[#C5A059] text-[#1A1A1A] text-sm font-bold rounded-lg hover:bg-[#D4B06A] disabled:opacity-60 transition-colors"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saved ? "Saved!" : saving ? "Saving…" : "Save Changes"}
        </button>
      </div>
    </div>
  )
}
