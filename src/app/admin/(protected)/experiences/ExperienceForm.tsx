"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Loader2, Save } from "lucide-react"
import Link from "next/link"
import { TagsInput } from "@/components/admin/TagsInput"
import { ImageUpload } from "@/components/admin/ImageUpload"
import { GalleryUpload } from "@/components/admin/GalleryUpload"
import { generateSlug } from "@/lib/slug"

const empty = { title: "", slug: "", status: "DRAFT" as const, type: "", description: "", highlights: [] as string[], coverImage: "", gallery: [] as string[] }

export function ExperienceForm({ id }: { id?: string }) {
  const router = useRouter()
  const [form, setForm] = useState(empty)
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(!!id)

  useEffect(() => {
    if (!id) return
    fetch(`/api/admin/experiences/${id}`).then((r) => r.json()).then((d) => { setForm(d) }).catch(() => {}).finally(() => setLoading(false))
  }, [id])

  const set = (f: string, v: unknown) => setForm((p) => ({ ...p, [f]: v }))
  const field = "w-full px-3 py-2.5 border border-[#E2E0DB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059]"
  const label = "block text-xs font-medium text-[#737373] uppercase tracking-wider mb-1.5"

  async function save(status: "DRAFT" | "PUBLISHED") {
    setSaving(true)
    const url = id ? `/api/admin/experiences/${id}` : "/api/admin/experiences"
    await fetch(url, { method: id ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, status }) })
    setSaving(false)
    router.push("/admin/experiences")
  }

  if (loading) return <div className="flex items-center justify-center min-h-screen"><Loader2 className="w-6 h-6 animate-spin text-[#737373]" /></div>

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/experiences" className="p-2 hover:bg-[#EBE8E3] rounded-lg"><ArrowLeft className="w-4 h-4" /></Link>
        <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">{id ? "Edit Experience" : "New Experience"}</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
            <div><label className={label}>Title</label><input type="text" value={form.title} onChange={(e) => { set("title", e.target.value); set("slug", generateSlug(e.target.value)) }} className={field} /></div>
            <div><label className={label}>Slug</label><input type="text" value={form.slug} onChange={(e) => set("slug", e.target.value)} className={field} /></div>
            <div><label className={label}>Type</label>
              <select value={form.type} onChange={(e) => set("type", e.target.value)} className={field}>
                <option value="">Select...</option>
                <option>Game Drive</option><option>Walking Safari</option><option>Cultural</option><option>Water Safari</option><option>Aerial</option><option>Balloon</option><option>Photography</option>
              </select>
            </div>
            <div><label className={label}>Description</label><textarea value={form.description} onChange={(e) => set("description", e.target.value)} rows={5} className={`${field} resize-y`} /></div>
            <div><label className={label}>Highlights</label><TagsInput value={form.highlights} onChange={(v) => set("highlights", v)} /></div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
            <div><label className={label}>Status</label>
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
