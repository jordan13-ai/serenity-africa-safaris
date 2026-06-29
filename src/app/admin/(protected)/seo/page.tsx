"use client"

import { useEffect, useState, useCallback } from "react"
import { Loader2, Save, Sparkles, CheckCircle, AlertCircle, ChevronDown, ChevronUp, Globe, EyeOff } from "lucide-react"

interface SeoEntry {
  id?: string
  page: string
  title: string
  description: string
  keywords: string
  ogImage: string
  noIndex: boolean
}

const STATIC_PAGES = [
  { key: "home", label: "Home Page", path: "/" },
  { key: "safari", label: "Safari / Itineraries", path: "/safari" },
  { key: "destinations", label: "Destinations", path: "/destinations" },
  { key: "kilimanjaro", label: "Kilimanjaro", path: "/kilimanjaro" },
  { key: "about", label: "About Us", path: "/about" },
  { key: "blog", label: "Blog", path: "/blog" },
  { key: "contact", label: "Contact", path: "/contact" },
]

function empty(page: string): SeoEntry {
  return { page, title: "", description: "", keywords: "", ogImage: "", noIndex: false }
}

function charColor(len: number, min: number, max: number) {
  if (len === 0) return "text-[#737373]"
  if (len < min) return "text-amber-500"
  if (len > max) return "text-red-500"
  return "text-green-600"
}

function SeoCard({
  pageKey, label, path, data, onChange, onSave, saving,
}: {
  pageKey: string; label: string; path: string
  data: SeoEntry; onChange: (d: SeoEntry) => void
  onSave: () => void; saving: boolean
}) {
  const [open, setOpen] = useState(false)
  const field = "w-full px-3 py-2.5 border border-[#E2E0DB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059]"
  const lbl = "block text-xs font-medium text-[#737373] uppercase tracking-wider mb-1.5"
  const titleLen = data.title.length
  const descLen = data.description.length

  return (
    <div className="bg-white rounded-xl border border-[#E2E0DB] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#FDFBF7] transition-colors"
      >
        <div className="flex items-center gap-3">
          <Globe className="w-4 h-4 text-[#C5A059]" />
          <div className="text-left">
            <p className="text-sm font-medium text-[#1A1A1A]">{label}</p>
            <p className="text-xs text-[#737373]">{path}</p>
          </div>
          {data.noIndex && (
            <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-red-500 bg-red-50 px-2 py-0.5 rounded">
              <EyeOff className="w-3 h-3" /> noindex
            </span>
          )}
          {data.title && (
            <span className="text-[9px] font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-0.5 rounded">
              Configured
            </span>
          )}
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-[#737373]" /> : <ChevronDown className="w-4 h-4 text-[#737373]" />}
      </button>

      {open && (
        <div className="px-6 pb-6 space-y-4 border-t border-[#F5F2ED]">
          <div className="pt-4">
            <div className="flex justify-between items-center mb-1.5">
              <label className={lbl}>Page Title</label>
              <span className={`text-[10px] font-medium ${charColor(titleLen, 40, 60)}`}>{titleLen}/60</span>
            </div>
            <input
              value={data.title}
              onChange={(e) => onChange({ ...data, title: e.target.value })}
              className={field}
              placeholder="Page title shown in Google results (40–60 chars)"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className={lbl}>Meta Description</label>
              <span className={`text-[10px] font-medium ${charColor(descLen, 120, 160)}`}>{descLen}/160</span>
            </div>
            <textarea
              value={data.description}
              onChange={(e) => onChange({ ...data, description: e.target.value })}
              rows={3}
              className={`${field} resize-y`}
              placeholder="Short description shown in search results (120–160 chars)"
            />
          </div>
          <div>
            <label className={lbl}>Keywords</label>
            <input
              value={data.keywords}
              onChange={(e) => onChange({ ...data, keywords: e.target.value })}
              className={field}
              placeholder="Comma-separated keywords"
            />
          </div>
          <div>
            <label className={lbl}>OG / Social Share Image URL</label>
            <input
              value={data.ogImage}
              onChange={(e) => onChange({ ...data, ogImage: e.target.value })}
              className={field}
              placeholder="/images/hero/slide-1.webp"
            />
          </div>
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={data.noIndex}
              onChange={(e) => onChange({ ...data, noIndex: e.target.checked })}
              className="rounded border-[#E2E0DB]"
            />
            <span className="text-sm text-[#1A1A1A]">Hide from search engines (noindex)</span>
          </label>

          {/* Live preview */}
          {(data.title || data.description) && (
            <div className="mt-2 p-4 bg-[#F9F7F4] rounded-lg border border-[#E2E0DB]">
              <p className="text-[10px] text-[#737373] uppercase tracking-wider mb-2 font-medium">Google Preview</p>
              <p className="text-blue-700 text-sm font-medium leading-tight">{data.title || "Page Title"}</p>
              <p className="text-green-700 text-[11px] mt-0.5">{`serenityafricasafaris.com${path}`}</p>
              <p className="text-[#737373] text-xs mt-1 leading-relaxed">{data.description || "Page description…"}</p>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              onClick={onSave}
              disabled={saving}
              className="flex items-center gap-2 px-5 py-2 bg-[#C5A059] text-white rounded-md text-sm font-medium hover:bg-[#B8933F] disabled:opacity-50 transition-colors"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function SeoPage() {
  const [entries, setEntries] = useState<Record<string, SeoEntry>>(
    Object.fromEntries(STATIC_PAGES.map((p) => [p.key, empty(p.key)]))
  )
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)
  const [autoRunning, setAutoRunning] = useState(false)
  const [saved, setSaved] = useState<string | null>(null)
  const [error, setError] = useState("")

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/seo")
      if (!res.ok) { setLoading(false); return }
      const data: SeoEntry[] = await res.json()
      setEntries((prev) => {
        const next = { ...prev }
        for (const d of data) {
          next[d.page] = {
            page: d.page,
            title: d.title ?? "",
            description: d.description ?? "",
            keywords: d.keywords ?? "",
            ogImage: d.ogImage ?? "",
            noIndex: d.noIndex ?? false,
          }
        }
        return next
      })
    } catch {
      // leave defaults in place
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load() }, [load])

  async function savePage(pageKey: string) {
    setSaving(pageKey)
    setError("")
    const res = await fetch("/api/admin/seo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entries[pageKey]),
    })
    setSaving(null)
    if (res.ok) {
      setSaved(pageKey)
      setTimeout(() => setSaved(null), 2500)
    } else {
      setError("Failed to save")
    }
  }

  async function autoGenerate() {
    setAutoRunning(true)
    setError("")
    const res = await fetch("/api/admin/seo/auto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pages: STATIC_PAGES.map((p) => p.key) }),
    })
    setAutoRunning(false)
    if (res.ok) {
      await load()
      setSaved("all")
      setTimeout(() => setSaved(null), 3000)
    } else {
      setError("Auto-generate failed")
    }
  }

  if (loading) return <div className="flex items-center justify-center min-h-screen"><Loader2 className="w-6 h-6 animate-spin text-[#737373]" /></div>

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">SEO Management</h2>
          <p className="text-sm text-[#737373] mt-1">Manage meta titles, descriptions and social sharing for every page</p>
        </div>
        <div className="flex items-center gap-3">
          {saved === "all" && (
            <span className="flex items-center gap-1.5 text-sm text-green-600">
              <CheckCircle className="w-4 h-4" /> All pages updated
            </span>
          )}
          <button
            onClick={autoGenerate}
            disabled={autoRunning}
            className="flex items-center gap-2 px-4 py-2 border border-[#C5A059] text-[#C5A059] rounded-md text-sm font-medium hover:bg-[#C5A059] hover:text-white disabled:opacity-50 transition-all"
          >
            {autoRunning ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            Auto-Generate All
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600">
          <AlertCircle className="w-4 h-4 shrink-0" />{error}
        </div>
      )}

      {/* Guide */}
      <div className="mb-6 p-4 bg-[#FDFBF7] border border-[#E2E0DB] rounded-xl text-sm text-[#737373] leading-relaxed">
        <p className="font-medium text-[#1A1A1A] mb-1">Quick guide</p>
        <p>• <strong>Title:</strong> 40–60 characters — appears as the blue headline in Google</p>
        <p>• <strong>Description:</strong> 120–160 characters — the grey snippet shown below the title</p>
        <p>• <strong>Auto-Generate</strong> fills all pages using your actual tour and destination content from the database</p>
      </div>

      <div className="space-y-3">
        {STATIC_PAGES.map(({ key, label, path }) => (
          <div key={key} className="relative">
            {saved === key && (
              <div className="absolute -top-1 right-4 z-10 flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                <CheckCircle className="w-3 h-3" /> Saved
              </div>
            )}
            <SeoCard
              pageKey={key}
              label={label}
              path={path}
              data={entries[key] ?? empty(key)}
              onChange={(d) => setEntries((prev) => ({ ...prev, [key]: d }))}
              onSave={() => savePage(key)}
              saving={saving === key}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
