"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Loader2, Star } from "lucide-react"
import Link from "next/link"
import { ImageUpload } from "@/components/admin/ImageUpload"

interface Props { reviewId?: string }

const empty = {
  name: "", location: "", rating: 5, quote: "", trip: "",
  avatar: "", featured: false, status: "DRAFT" as const,
}

export function ReviewForm({ reviewId }: Props) {
  const router = useRouter()
  const [form, setForm] = useState(empty)
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(!!reviewId)

  useEffect(() => {
    if (!reviewId) return
    fetch(`/api/admin/reviews/${reviewId}`)
      .then((r) => r.json())
      .then((d) => { setForm({ ...empty, ...d }) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [reviewId])

  function set(field: string, value: unknown) {
    setForm((p) => ({ ...p, [field]: value }))
  }

  async function save(status: "DRAFT" | "PUBLISHED") {
    setSaving(true)
    const url = reviewId ? `/api/admin/reviews/${reviewId}` : "/api/admin/reviews"
    const method = reviewId ? "PUT" : "POST"
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, status }),
    })
    setSaving(false)
    if (res.ok) router.push("/admin/reviews")
  }

  if (loading) return <div className="flex items-center justify-center min-h-screen"><Loader2 className="w-6 h-6 animate-spin text-[#737373]" /></div>

  const field = "w-full px-3 py-2.5 border border-[#E2E0DB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059]"
  const label = "block text-xs font-medium text-[#737373] uppercase tracking-wider mb-1.5"

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/reviews" className="p-2 hover:bg-[#EBE8E3] rounded-lg">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">
          {reviewId ? "Edit Review" : "New Review"}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
            <h3 className="text-sm font-semibold text-[#1A1A1A]">Reviewer Info</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={label}>Full Name *</label>
                <input value={form.name} onChange={(e) => set("name", e.target.value)} className={field} placeholder="e.g. Sarah & James Wilson" />
              </div>
              <div>
                <label className={label}>Location / Country</label>
                <input value={form.location ?? ""} onChange={(e) => set("location", e.target.value)} className={field} placeholder="e.g. London, UK" />
              </div>
            </div>
            <div>
              <label className={label}>Tour / Trip Name</label>
              <input value={form.trip ?? ""} onChange={(e) => set("trip", e.target.value)} className={field} placeholder="e.g. 7-Day Serengeti Classic Safari" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
            <h3 className="text-sm font-semibold text-[#1A1A1A]">Review Content</h3>
            <div>
              <label className={label}>Rating</label>
              <div className="flex gap-2 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} type="button" onClick={() => set("rating", star)}>
                    <Star className={`w-6 h-6 transition-colors ${star <= form.rating ? "fill-[#C5A059] text-[#C5A059]" : "text-[#E2E0DB]"}`} />
                  </button>
                ))}
                <span className="text-sm text-[#737373] ml-2 self-center">{form.rating}/5</span>
              </div>
            </div>
            <div>
              <label className={label}>Review Quote *</label>
              <textarea
                value={form.quote}
                onChange={(e) => set("quote", e.target.value)}
                rows={5}
                className={`${field} resize-y`}
                placeholder="What did the client say about their experience?"
              />
            </div>
          </div>
        </div>

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
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.featured} onChange={(e) => set("featured", e.target.checked)} className="rounded border-[#E2E0DB] text-[#C5A059]" />
              <span className="text-sm text-[#1A1A1A]">Feature on homepage</span>
            </label>
            <div className="flex flex-col gap-2 pt-2">
              <button type="button" onClick={() => save("PUBLISHED")} disabled={saving}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C5A059] text-white rounded-md text-sm font-medium hover:bg-[#B8933F] disabled:opacity-50 transition-colors">
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                Publish
              </button>
              <button type="button" onClick={() => save("DRAFT")} disabled={saving}
                className="px-4 py-2.5 border border-[#E2E0DB] rounded-md text-sm text-[#737373] hover:bg-[#F9F7F4] disabled:opacity-50 transition-colors">
                Save Draft
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
            <h3 className="text-sm font-semibold text-[#1A1A1A]">Reviewer Photo</h3>
            <ImageUpload value={form.avatar} onChange={(v) => set("avatar", v)} />
          </div>
        </div>
      </div>
    </div>
  )
}
