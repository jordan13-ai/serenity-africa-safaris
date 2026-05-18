"use client"

import { useEffect, useState } from "react"
import { Loader2, Save, CheckCircle } from "lucide-react"

const DEFAULT_CONTENT = {
  heroSubtitle: "Authentic safari experiences crafted with passion, luxury, and a deep connection to the wild landscapes of Tanzania.",
  storyTitle: "Our Story",
  storyParagraph1: "Serenity Africa Safaris was born from a lifelong passion for the African wilderness. Founded by a team of experienced guides and naturalists who have spent decades exploring Tanzania's most remote and beautiful landscapes, we set out to create a safari company that prioritizes genuine connection over convenience.",
  storyParagraph2: "We believe that the most profound experiences happen when you slow down, listen to the land, and allow Africa's extraordinary wildlife and cultures to reveal themselves on their own terms. That is the Serenity promise.",
  stat1Value: "15+", stat1Label: "Years of Experience",
  stat2Value: "5,000+", stat2Label: "Happy Travelers",
  stat3Value: "98%", stat3Label: "5-Star Reviews",
  stat4Value: "50+", stat4Label: "Expert Guides",
  missionTitle: "Our Mission",
  missionText: "To connect travelers with the untamed beauty of Tanzania through responsible, expertly guided, and deeply personal safari experiences that create lasting memories and contribute to conservation.",
  valuesIntro: "Every safari we design is guided by a set of core values that define who we are and how we operate.",
  value1Title: "Authenticity", value1Text: "We create genuine connections between our guests and the natural world.",
  value2Title: "Sustainability", value2Text: "We are committed to low-impact travel and supporting local communities.",
  value3Title: "Excellence", value3Text: "We maintain the highest standards in guides, vehicles, and accommodation.",
  value4Title: "Safety", value4Text: "Your safety is our first priority on every single journey.",
  teamTitle: "Meet Our Team",
  teamText: "Our team is made up of passionate Tanzanians and international travel experts who share one common goal — to give you the safari of a lifetime.",
  ctaTitle: "Ready to Start Your Journey?",
  ctaText: "Every great safari begins with a conversation. Tell us your dream and we'll make it a reality.",
}

type ContentMap = Record<string, string>

export default function AboutAdminPage() {
  const [content, setContent] = useState<ContentMap>(DEFAULT_CONTENT)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch("/api/admin/about")
      .then((r) => r.json())
      .then((data) => {
        if (data && Object.keys(data).length > 0) {
          setContent({ ...DEFAULT_CONTENT, ...data })
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  function set(key: string, value: string) {
    setContent((p) => ({ ...p, [key]: value }))
  }

  async function save() {
    setSaving(true)
    await fetch("/api/admin/about", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    })
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  if (loading) return <div className="flex items-center justify-center min-h-screen"><Loader2 className="w-6 h-6 animate-spin text-[#737373]" /></div>

  const field = "w-full px-3 py-2.5 border border-[#E2E0DB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059]"
  const label = "block text-xs font-medium text-[#737373] uppercase tracking-wider mb-1.5"

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">About Us Page</h2>
          <p className="text-sm text-[#737373] mt-1">Edit the content displayed on the public About page</p>
        </div>
        <button onClick={save} disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#C5A059] text-white rounded-md text-sm font-medium hover:bg-[#B8933F] disabled:opacity-50 transition-colors">
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : saved ? <CheckCircle className="w-4 h-4" /> : <Save className="w-4 h-4" />}
          {saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      <div className="space-y-6">
        {/* Hero */}
        <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
          <h3 className="text-sm font-semibold text-[#1A1A1A]">Hero Section</h3>
          <div>
            <label className={label}>Hero Subtitle</label>
            <textarea value={content.heroSubtitle} onChange={(e) => set("heroSubtitle", e.target.value)} rows={2} className={`${field} resize-y`} />
          </div>
        </div>

        {/* Story */}
        <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
          <h3 className="text-sm font-semibold text-[#1A1A1A]">Our Story</h3>
          <div>
            <label className={label}>Section Title</label>
            <input value={content.storyTitle} onChange={(e) => set("storyTitle", e.target.value)} className={field} />
          </div>
          <div>
            <label className={label}>First Paragraph</label>
            <textarea value={content.storyParagraph1} onChange={(e) => set("storyParagraph1", e.target.value)} rows={4} className={`${field} resize-y`} />
          </div>
          <div>
            <label className={label}>Second Paragraph</label>
            <textarea value={content.storyParagraph2} onChange={(e) => set("storyParagraph2", e.target.value)} rows={3} className={`${field} resize-y`} />
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
          <h3 className="text-sm font-semibold text-[#1A1A1A]">Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="space-y-2">
                <div>
                  <label className={label}>Stat {n} Value</label>
                  <input value={content[`stat${n}Value`]} onChange={(e) => set(`stat${n}Value`, e.target.value)} className={field} placeholder="15+" />
                </div>
                <div>
                  <label className={label}>Stat {n} Label</label>
                  <input value={content[`stat${n}Label`]} onChange={(e) => set(`stat${n}Label`, e.target.value)} className={field} placeholder="Years Experience" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
          <h3 className="text-sm font-semibold text-[#1A1A1A]">Mission</h3>
          <div>
            <label className={label}>Mission Title</label>
            <input value={content.missionTitle} onChange={(e) => set("missionTitle", e.target.value)} className={field} />
          </div>
          <div>
            <label className={label}>Mission Text</label>
            <textarea value={content.missionText} onChange={(e) => set("missionText", e.target.value)} rows={3} className={`${field} resize-y`} />
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
          <h3 className="text-sm font-semibold text-[#1A1A1A]">Our Values</h3>
          <div>
            <label className={label}>Intro Text</label>
            <textarea value={content.valuesIntro} onChange={(e) => set("valuesIntro", e.target.value)} rows={2} className={`${field} resize-y`} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="space-y-2 p-4 border border-[#E2E0DB] rounded-lg">
                <div>
                  <label className={label}>Value {n} Title</label>
                  <input value={content[`value${n}Title`]} onChange={(e) => set(`value${n}Title`, e.target.value)} className={field} />
                </div>
                <div>
                  <label className={label}>Value {n} Text</label>
                  <textarea value={content[`value${n}Text`]} onChange={(e) => set(`value${n}Text`, e.target.value)} rows={2} className={`${field} resize-y`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
          <h3 className="text-sm font-semibold text-[#1A1A1A]">Call to Action</h3>
          <div>
            <label className={label}>CTA Title</label>
            <input value={content.ctaTitle} onChange={(e) => set("ctaTitle", e.target.value)} className={field} />
          </div>
          <div>
            <label className={label}>CTA Text</label>
            <textarea value={content.ctaText} onChange={(e) => set("ctaText", e.target.value)} rows={2} className={`${field} resize-y`} />
          </div>
        </div>
      </div>
    </div>
  )
}
