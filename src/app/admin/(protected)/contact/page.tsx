"use client"

import { useEffect, useState } from "react"
import { Loader2, Save, RotateCcw } from "lucide-react"

const DEFAULT: Record<string, string> = {
  heroTagline: "Get In Touch",
  heroHeadline: "Start Planning Your Safari",
  heroSubheadline: "Our team of Tanzania specialists is ready to craft your perfect itinerary. Reach out and we'll respond within 24 hours.",
  officeAddress: "Arusha, Tanzania",
  officePhone: "+255 754 000 000",
  officeEmail: "info@serenityafricasafaris.com",
  officeHours: "Monday – Saturday, 8am – 6pm EAT",
  formHeadline: "Send Us a Message",
  formSubheadline: "Fill in the form and one of our safari specialists will be in touch shortly.",
  formCta: "Send Message",
  whatsappNumber: "+255754000000",
  whatsappLabel: "Chat on WhatsApp",
  emergencyPhone: "+255 754 000 001",
  emergencyLabel: "24/7 Emergency Line (for guests on safari)",
}

type Field = { key: string; label: string; multiline?: boolean }

const SECTIONS: { title: string; fields: Field[] }[] = [
  {
    title: "Hero",
    fields: [
      { key: "heroTagline", label: "Tagline (small text above headline)" },
      { key: "heroHeadline", label: "Main Headline" },
      { key: "heroSubheadline", label: "Sub-headline", multiline: true },
    ],
  },
  {
    title: "Office Details",
    fields: [
      { key: "officeAddress", label: "Address" },
      { key: "officePhone", label: "Phone Number" },
      { key: "officeEmail", label: "Email Address" },
      { key: "officeHours", label: "Office Hours" },
    ],
  },
  {
    title: "Contact Form",
    fields: [
      { key: "formHeadline", label: "Form Section Headline" },
      { key: "formSubheadline", label: "Form Section Sub-headline", multiline: true },
      { key: "formCta", label: "Submit Button Text" },
    ],
  },
  {
    title: "WhatsApp & Emergency",
    fields: [
      { key: "whatsappNumber", label: "WhatsApp Number (with country code, no spaces)" },
      { key: "whatsappLabel", label: "WhatsApp CTA Label" },
      { key: "emergencyPhone", label: "Emergency Phone" },
      { key: "emergencyLabel", label: "Emergency Line Description" },
    ],
  },
]

export default function AdminContactPage() {
  const [content, setContent] = useState<Record<string, string>>(DEFAULT)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch("/api/admin/contact")
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
      await fetch("/api/admin/contact", {
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
    if (!confirm("Reset all contact page content to defaults?")) return
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
          <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">Contact Page</h2>
          <p className="text-sm text-[#737373] mt-0.5">Edit the text content of the contact page</p>
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
