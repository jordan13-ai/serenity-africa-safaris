"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Loader2, Save } from "lucide-react"
import Link from "next/link"
import { TagsInput } from "@/components/admin/TagsInput"
import { ImageUpload } from "@/components/admin/ImageUpload"
import { RichTextEditor } from "@/components/admin/RichTextEditor"
import { generateSlug } from "@/lib/slug"

const empty = { title: "", slug: "", status: "DRAFT" as const, category: "", author: "", excerpt: "", body: "", tags: [] as string[], coverImage: "" }

export function BlogForm({ id }: { id?: string }) {
  const router = useRouter()
  const [form, setForm] = useState(empty)
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(!!id)

  useEffect(() => {
    if (!id) return
    fetch(`/api/admin/blog/${id}`).then((r) => r.json()).then((d) => { setForm(d) }).catch(() => {}).finally(() => setLoading(false))
  }, [id])

  const set = (f: string, v: unknown) => setForm((p) => ({ ...p, [f]: v }))
  const field = "w-full px-3 py-2.5 border border-[#E2E0DB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059]"
  const label = "block text-xs font-medium text-[#737373] uppercase tracking-wider mb-1.5"

  async function save(status: "DRAFT" | "PUBLISHED") {
    setSaving(true)
    const url = id ? `/api/admin/blog/${id}` : "/api/admin/blog"
    await fetch(url, { method: id ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, status }) })
    setSaving(false)
    router.push("/admin/blog")
  }

  if (loading) return <div className="flex items-center justify-center min-h-screen"><Loader2 className="w-6 h-6 animate-spin text-[#737373]" /></div>

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/blog" className="p-2 hover:bg-[#EBE8E3] rounded-lg"><ArrowLeft className="w-4 h-4" /></Link>
        <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">{id ? "Edit Post" : "New Blog Post"}</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 space-y-4">
            <div><label className={label}>Title</label><input type="text" value={form.title} onChange={(e) => { set("title", e.target.value); set("slug", generateSlug(e.target.value)) }} className={field} /></div>
            <div><label className={label}>Slug</label><input type="text" value={form.slug} onChange={(e) => set("slug", e.target.value)} className={field} /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={label}>Category</label>
                <select value={form.category} onChange={(e) => set("category", e.target.value)} className={field}>
                  <option value="">Select...</option>
                  <option>Safari Tips</option><option>Wildlife</option><option>Travel Guide</option><option>News</option><option>Conservation</option>
                </select>
              </div>
              <div><label className={label}>Author</label><input type="text" value={form.author} onChange={(e) => set("author", e.target.value)} className={field} placeholder="John Doe" /></div>
            </div>
            <div><label className={label}>Excerpt</label><textarea value={form.excerpt} onChange={(e) => set("excerpt", e.target.value)} rows={2} className={`${field} resize-y`} placeholder="Short teaser shown on blog listing" /></div>
            <div>
              <label className={label}>Body</label>
              <RichTextEditor value={form.body} onChange={(v) => set("body", v)} placeholder="Write your article..." />
            </div>
            <div><label className={label}>Tags</label><TagsInput value={form.tags} onChange={(v) => set("tags", v)} placeholder="wildlife, serengeti..." /></div>
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
        </div>
      </div>
    </div>
  )
}
