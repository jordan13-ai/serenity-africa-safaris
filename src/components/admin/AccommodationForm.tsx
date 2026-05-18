"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Loader2, Save } from "lucide-react"
import Link from "next/link"
import { TagsInput } from "./TagsInput"
import { ImageUpload } from "./ImageUpload"
import { GalleryUpload } from "./GalleryUpload"
import { generateSlug } from "@/lib/slug"

type Kind = "lodges" | "camps"

const empty = {
  name: "", slug: "", status: "DRAFT" as const, destination: "", type: "",
  description: "", highlights: [] as string[], amenities: [] as string[],
  priceFrom: "", coverImage: "", gallery: [] as string[], website: "",
}

export function AccommodationForm({ kind, id }: { kind: Kind; id?: string }) {
  const router = useRouter()
  const [form, setForm] = useState(empty)
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(!!id)
  const label = kind === "lodges" ? "Lodge" : "Camp"
  const typeOptions = kind === "lodges"
    ? ["Signature Lodge", "Luxury Lodge", "Boutique Lodge", "Standard Lodge"]
    : ["Luxury Tented Camp", "Permanent Tented Camp", "Mobile Camp", "Exclusive Camp", "Fly Camp", "Luxury Camp"]

  useEffect(() => {
    if (!id) return
    fetch(`/api/admin/${kind}/${id}`).then((r) => r.json()).then((d) => { setForm({ ...empty, ...d, priceFrom: d.priceFrom?.toString() ?? "" }) }).catch(() => {}).finally(() => setLoading(false))
  }, [id, kind])

  const set = (f: string, v: unknown) => setForm((p) => ({ ...p, [f]: v }))
  const field = "w-full px-3 py-2.5 border border-[#E2E0DB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059]"
  const lbl = "block text-xs font-medium text-[#737373] uppercase tracking-wider mb-1.5"

  async function save(status: "DRAFT" | "PUBLISHED") {
    setSaving(true)
    const url = id ? `/api/admin/${kind}/${id}` : `/api/admin/${kind}`
    await fetch(url, { method: id ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, status }) })
    setSaving(false)
    router.push(`/admin/${kind}`)
  }

  if (loading) return <div className="flex items-center justify-center min-h-screen"><Loader2 className="w-6 h-6 animate-spin text-[#737373]" /></div>

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href={`/admin/${kind}`} className="p-2 hover:bg-[#EBE8E3] rounded-lg"><ArrowLeft className="w-4 h-4" /></Link>
        <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">{id ? `Edit ${label}` : `New ${label}`}</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
            <div><label className={lbl}>Name</label><input type="text" value={form.name} onChange={(e) => { set("name", e.target.value); set("slug", generateSlug(e.target.value)) }} className={field} /></div>
            <div><label className={lbl}>Slug</label><input type="text" value={form.slug} onChange={(e) => set("slug", e.target.value)} className={field} /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={lbl}>Type</label>
                <select value={form.type} onChange={(e) => set("type", e.target.value)} className={field}>
                  <option value="">Select...</option>
                  {typeOptions.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div><label className={lbl}>Destination</label><input type="text" value={form.destination} onChange={(e) => set("destination", e.target.value)} className={field} placeholder="Serengeti" /></div>
            </div>
            <div><label className={lbl}>Description</label><textarea value={form.description} onChange={(e) => set("description", e.target.value)} rows={5} className={`${field} resize-y`} /></div>
            <div><label className={lbl}>Highlights</label><TagsInput value={form.highlights} onChange={(v) => set("highlights", v)} /></div>
            <div><label className={lbl}>Amenities</label><TagsInput value={form.amenities} onChange={(v) => set("amenities", v)} placeholder="Pool, Spa, Wi-Fi..." /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={lbl}>Price From (USD)</label><input type="number" value={form.priceFrom} onChange={(e) => set("priceFrom", e.target.value)} className={field} placeholder="500" /></div>
              <div><label className={lbl}>Website</label><input type="url" value={form.website} onChange={(e) => set("website", e.target.value)} className={field} placeholder="https://..." /></div>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
            <div><label className={lbl}>Status</label>
              <select value={form.status} onChange={(e) => set("status", e.target.value)} className={field}>
                <option value="DRAFT">Draft</option><option value="PUBLISHED">Published</option><option value="ARCHIVED">Archived</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <button onClick={() => save("PUBLISHED")} disabled={saving} className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#C5A059] text-[#1A1A1A] font-bold text-sm rounded-lg hover:bg-[#D4B06A] disabled:opacity-60">
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}Publish
              </button>
              <button onClick={() => save("DRAFT")} disabled={saving} className="w-full py-2.5 border border-[#E2E0DB] text-sm font-medium rounded-lg hover:bg-[#F9F7F4] disabled:opacity-60">Save Draft</button>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6">
            <ImageUpload value={form.coverImage} onChange={(v) => set("coverImage", v)} />
          </div>
          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6">
            <GalleryUpload value={form.gallery} onChange={(v) => set("gallery", v)} />
          </div>
        </div>
      </div>
    </div>
  )
}
