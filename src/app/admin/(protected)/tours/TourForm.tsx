"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Loader2, Save } from "lucide-react"
import Link from "next/link"
import { TagsInput } from "@/components/admin/TagsInput"
import { ImageUpload } from "@/components/admin/ImageUpload"
import { GalleryUpload } from "@/components/admin/GalleryUpload"
import { ItineraryBuilder, DayEntry } from "@/components/admin/ItineraryBuilder"
import { generateSlug } from "@/lib/slug"

interface Props { tourId?: string }

const empty = {
  title: "", slug: "", status: "DRAFT" as const, summary: "", description: "",
  price: "", duration: "", groupSize: "", difficulty: "", season: "", category: "",
  destination: "", highlights: [] as string[], includes: [] as string[],
  excludes: [] as string[], coverImage: "", gallery: [] as string[], itinerary: [] as DayEntry[],
}

export function TourForm({ tourId }: Props) {
  const router = useRouter()
  const [form, setForm] = useState(empty)
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(!!tourId)

  useEffect(() => {
    if (!tourId) return
    fetch(`/api/admin/tours/${tourId}`)
      .then((r) => r.json())
      .then((t) => {
        setForm({
          ...t,
          price: t.price?.toString() ?? "",
          duration: t.duration?.toString() ?? "",
          itinerary: t.itinerary ?? [],
        })
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [tourId])

  function set(field: string, value: unknown) {
    setForm((p) => ({ ...p, [field]: value }))
  }

  function onTitleChange(title: string) {
    setForm((p) => ({ ...p, title, slug: generateSlug(title) }))
  }

  async function save(status: "DRAFT" | "PUBLISHED") {
    setSaving(true)
    const payload = { ...form, status }
    const url = tourId ? `/api/admin/tours/${tourId}` : "/api/admin/tours"
    const method = tourId ? "PUT" : "POST"
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    setSaving(false)
    if (res.ok) router.push("/admin/tours")
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-6 h-6 animate-spin text-[#737373]" />
      </div>
    )
  }

  const field = "w-full px-3 py-2.5 border border-[#E2E0DB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059]"
  const label = "block text-xs font-medium text-[#737373] uppercase tracking-wider mb-1.5"

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/tours" className="p-2 hover:bg-[#EBE8E3] rounded-lg">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">
            {tourId ? "Edit Tour" : "New Tour"}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
            <h3 className="text-sm font-semibold text-[#1A1A1A]">Basic Info</h3>
            <div>
              <label className={label}>Title</label>
              <input type="text" value={form.title} onChange={(e) => onTitleChange(e.target.value)} className={field} placeholder="e.g. 7-Day Serengeti Classic Safari" />
            </div>
            <div>
              <label className={label}>Slug</label>
              <input type="text" value={form.slug} onChange={(e) => set("slug", e.target.value)} className={field} />
            </div>
            <div>
              <label className={label}>Summary</label>
              <input type="text" value={form.summary} onChange={(e) => set("summary", e.target.value)} className={field} placeholder="One-line description for cards" />
            </div>
            <div>
              <label className={label}>Full Description</label>
              <textarea value={form.description} onChange={(e) => set("description", e.target.value)} rows={5} className={`${field} resize-y`} />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
            <h3 className="text-sm font-semibold text-[#1A1A1A]">Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={label}>Price (USD)</label>
                <input type="number" value={form.price} onChange={(e) => set("price", e.target.value)} className={field} placeholder="3500" />
              </div>
              <div>
                <label className={label}>Duration (days)</label>
                <input type="number" value={form.duration} onChange={(e) => set("duration", e.target.value)} className={field} placeholder="7" />
              </div>
              <div>
                <label className={label}>Group Size</label>
                <input type="text" value={form.groupSize} onChange={(e) => set("groupSize", e.target.value)} className={field} placeholder="2-12 pax" />
              </div>
              <div>
                <label className={label}>Difficulty</label>
                <select value={form.difficulty} onChange={(e) => set("difficulty", e.target.value)} className={field}>
                  <option value="">Select...</option>
                  <option>Easy</option>
                  <option>Moderate</option>
                  <option>Challenging</option>
                </select>
              </div>
              <div>
                <label className={label}>Season</label>
                <input type="text" value={form.season} onChange={(e) => set("season", e.target.value)} className={field} placeholder="Year-round" />
              </div>
              <div className="col-span-2">
                <label className={label}>Category</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Safaris","Mountain Climbs","Beach Holidays","Family-Friendly Trips","Solo Travel","Adventurous Expeditions","Honeymoons","Cultural Tours","The Great Migration"].map((cat) => (
                    <button key={cat} type="button" onClick={() => set("category", form.category === cat ? "" : cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border transition-all ${form.category === cat ? "bg-[#C5A059] text-white border-[#C5A059]" : "bg-transparent text-[#737373] border-[#E2E0DB] hover:border-[#C5A059] hover:text-[#C5A059]"}`}>
                      {cat}
                    </button>
                  ))}
                </div>
                {form.category && (
                  <p className="text-xs text-[#C5A059] mt-2 font-medium">Selected: {form.category}</p>
                )}
              </div>
            </div>
            <div>
              <label className={label}>Destination</label>
              <input type="text" value={form.destination} onChange={(e) => set("destination", e.target.value)} className={field} placeholder="Serengeti, Ngorongoro..." />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
            <h3 className="text-sm font-semibold text-[#1A1A1A]">Highlights, Includes & Excludes</h3>
            <div>
              <label className={label}>Highlights</label>
              <TagsInput value={form.highlights} onChange={(v) => set("highlights", v)} placeholder="Big 5 sightings..." />
            </div>
            <div>
              <label className={label}>Includes</label>
              <TagsInput value={form.includes} onChange={(v) => set("includes", v)} placeholder="Park fees, accommodation..." />
            </div>
            <div>
              <label className={label}>Excludes</label>
              <TagsInput value={form.excludes} onChange={(v) => set("excludes", v)} placeholder="International flights..." />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
            <h3 className="text-sm font-semibold text-[#1A1A1A]">Itinerary</h3>
            <ItineraryBuilder value={form.itinerary} onChange={(v) => set("itinerary", v)} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
            <h3 className="text-sm font-semibold text-[#1A1A1A]">Publish</h3>
            <div>
              <label className={label}>Status</label>
              <select value={form.status} onChange={(e) => set("status", e.target.value)} className={field}>
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED">Published</option>
                <option value="ARCHIVED">Archived</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <button
                type="button"
                onClick={() => save("PUBLISHED")}
                disabled={saving}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#C5A059] text-[#1A1A1A] font-bold text-sm rounded-lg hover:bg-[#D4B06A] disabled:opacity-60 transition-colors"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Publish
              </button>
              <button
                type="button"
                onClick={() => save("DRAFT")}
                disabled={saving}
                className="w-full py-2.5 border border-[#E2E0DB] text-[#1A1A1A] font-medium text-sm rounded-lg hover:bg-[#F9F7F4] disabled:opacity-60 transition-colors"
              >
                Save Draft
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6">
            <ImageUpload value={form.coverImage} onChange={(v) => set("coverImage", v)} label="Cover Image" />
          </div>

          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6">
            <GalleryUpload value={form.gallery} onChange={(v) => set("gallery", v)} />
          </div>
        </div>
      </div>
    </div>
  )
}
