"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Plus, Pencil, Trash2, Loader2, ChevronLeft, ChevronRight } from "lucide-react"
import { StatusBadge } from "@/components/admin/StatusBadge"

type Status = "ALL" | "DRAFT" | "PUBLISHED" | "ARCHIVED"
interface Row { id: string; title: string; slug: string; status: "DRAFT" | "PUBLISHED" | "ARCHIVED"; type: string | null; updatedAt: string }
const TABS: { label: string; value: Status }[] = [{ label: "All", value: "ALL" }, { label: "Published", value: "PUBLISHED" }, { label: "Draft", value: "DRAFT" }, { label: "Archived", value: "ARCHIVED" }]

export default function ExperiencesPage() {
  const [rows, setRows] = useState<Row[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [filter, setFilter] = useState<Status>("ALL")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [total, setTotal] = useState(0)

  async function load(status: Status, p: number) {
    setLoading(true)
    try {
      const params = new URLSearchParams({ page: String(p), limit: "25" })
      if (status !== "ALL") params.set("status", status)
      const res = await fetch(`/api/admin/experiences?${params}`)
      if (!res.ok) return
      const json = await res.json()
      setRows(json.data); setTotal(json.total); setTotalPages(json.pages)
    } catch { /* leave state as-is */ } finally {
      setLoading(false)
    }
  }

  async function remove(id: string, title: string) {
    if (!confirm(`Delete "${title}"?`)) return
    setDeleting(id)
    await fetch(`/api/admin/experiences/${id}`, { method: "DELETE" })
    setRows((p) => p.filter((r) => r.id !== id))
    setDeleting(null)
  }

  useEffect(() => { load(filter, page) }, [filter, page])
  function changeFilter(f: Status) { setFilter(f); setPage(1) }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div><h2 className="text-2xl font-serif text-[#1A1A1A] font-light">Experiences</h2><p className="text-sm text-[#737373] mt-0.5">Safari activities and experiences</p></div>
        <Link href="/admin/experiences/new" className="flex items-center gap-2 px-4 py-2.5 bg-[#C5A059] text-[#1A1A1A] text-sm font-bold tracking-wide rounded-lg hover:bg-[#D4B06A]"><Plus className="w-4 h-4" />New Experience</Link>
      </div>
      <div className="flex gap-1 mb-4 bg-white border border-[#E2E0DB] rounded-lg p-1 w-fit">
        {TABS.map((tab) => (<button key={tab.value} onClick={() => changeFilter(tab.value)} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${filter === tab.value ? "bg-[#1A1A1A] text-white" : "text-[#737373] hover:text-[#1A1A1A]"}`}>{tab.label}</button>))}
      </div>
      <div className="bg-white rounded-xl border border-[#E2E0DB] overflow-hidden">
        {loading ? <div className="flex items-center justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-[#737373]" /></div> :
        rows.length === 0 ? <div className="text-center py-20 text-sm text-[#737373]">No experiences yet. <Link href="/admin/experiences/new" className="text-[#C5A059]">Create one →</Link></div> :
        <>
          <table className="w-full text-sm">
            <thead><tr className="border-b border-[#E2E0DB] bg-[#F9F7F4]">
              <th className="text-left px-5 py-3 text-xs font-medium text-[#737373] uppercase tracking-wider">Title</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-[#737373] uppercase tracking-wider hidden sm:table-cell">Type</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-[#737373] uppercase tracking-wider">Status</th>
              <th className="px-5 py-3" />
            </tr></thead>
            <tbody className="divide-y divide-[#E2E0DB]">
              {rows.map((row) => (
                <tr key={row.id} className="hover:bg-[#F9F7F4]">
                  <td className="px-5 py-4"><p className="font-medium text-[#1A1A1A]">{row.title}</p><p className="text-xs text-[#737373]">{row.slug}</p></td>
                  <td className="px-5 py-4 text-[#737373] hidden sm:table-cell">{row.type ?? "—"}</td>
                  <td className="px-5 py-4"><StatusBadge status={row.status} /></td>
                  <td className="px-5 py-4"><div className="flex items-center gap-2 justify-end">
                    <Link href={`/admin/experiences/${row.id}`} className="p-1.5 hover:bg-[#EBE8E3] rounded"><Pencil className="w-3.5 h-3.5 text-[#737373]" /></Link>
                    <button onClick={() => remove(row.id, row.title)} disabled={deleting === row.id} className="p-1.5 hover:bg-red-50 rounded">
                      {deleting === row.id ? <Loader2 className="w-3.5 h-3.5 animate-spin text-red-400" /> : <Trash2 className="w-3.5 h-3.5 text-red-400" />}
                    </button>
                  </div></td>
                </tr>
              ))}
            </tbody>
          </table>
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-5 py-3 border-t border-[#E2E0DB] bg-[#F9F7F4]">
              <p className="text-xs text-[#737373]">{total} total</p>
              <div className="flex items-center gap-2">
                <button onClick={() => setPage((p) => p - 1)} disabled={page <= 1} className="p-1 rounded hover:bg-[#EBE8E3] disabled:opacity-40"><ChevronLeft className="w-4 h-4" /></button>
                <span className="text-xs text-[#1A1A1A]">Page {page} of {totalPages}</span>
                <button onClick={() => setPage((p) => p + 1)} disabled={page >= totalPages} className="p-1 rounded hover:bg-[#EBE8E3] disabled:opacity-40"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          )}
        </>}
      </div>
    </div>
  )
}
