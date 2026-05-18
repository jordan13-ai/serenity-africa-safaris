"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Plus, Pencil, Trash2, Loader2, ChevronLeft, ChevronRight } from "lucide-react"
import { StatusBadge } from "@/components/admin/StatusBadge"

type Status = "ALL" | "DRAFT" | "PUBLISHED" | "ARCHIVED"

interface Tour {
  id: string; title: string; slug: string; status: "DRAFT" | "PUBLISHED" | "ARCHIVED"
  price: string | null; duration: number | null; category: string | null; updatedAt: string
}

const TABS: { label: string; value: Status }[] = [
  { label: "All", value: "ALL" }, { label: "Published", value: "PUBLISHED" },
  { label: "Draft", value: "DRAFT" }, { label: "Archived", value: "ARCHIVED" },
]

export default function ToursPage() {
  const [tours, setTours] = useState<Tour[]>([])
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
      const res = await fetch(`/api/admin/tours?${params}`)
      if (!res.ok) return
      const json = await res.json()
      setTours(json.data)
      setTotal(json.total)
      setTotalPages(json.pages)
    } catch { /* leave state as-is */ } finally {
      setLoading(false)
    }
  }

  async function remove(id: string, title: string) {
    if (!confirm(`Delete "${title}"?`)) return
    setDeleting(id)
    await fetch(`/api/admin/tours/${id}`, { method: "DELETE" })
    setTours((p) => p.filter((t) => t.id !== id))
    setDeleting(null)
  }

  useEffect(() => { load(filter, page) }, [filter, page])

  function changeFilter(f: Status) { setFilter(f); setPage(1) }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">Tours</h2>
          <p className="text-sm text-[#737373] mt-0.5">Manage safari itineraries</p>
        </div>
        <Link href="/admin/tours/new" className="flex items-center gap-2 px-4 py-2.5 bg-[#C5A059] text-[#1A1A1A] text-sm font-bold tracking-wide rounded-lg hover:bg-[#D4B06A] transition-colors">
          <Plus className="w-4 h-4" />New Tour
        </Link>
      </div>

      <div className="flex gap-1 mb-4 bg-white border border-[#E2E0DB] rounded-lg p-1 w-fit">
        {TABS.map((tab) => (
          <button key={tab.value} onClick={() => changeFilter(tab.value)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${filter === tab.value ? "bg-[#1A1A1A] text-white" : "text-[#737373] hover:text-[#1A1A1A]"}`}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-[#E2E0DB] overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-[#737373]" /></div>
        ) : tours.length === 0 ? (
          <div className="text-center py-20 text-[#737373]">
            <p className="text-sm">No tours {filter !== "ALL" ? `with status "${filter}"` : "yet"}.</p>
            {filter === "ALL" && <Link href="/admin/tours/new" className="text-[#C5A059] text-sm hover:underline mt-2 inline-block">Create your first tour →</Link>}
          </div>
        ) : (
          <>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E2E0DB] bg-[#F9F7F4]">
                  <th className="text-left px-5 py-3 text-xs font-medium text-[#737373] uppercase tracking-wider">Title</th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-[#737373] uppercase tracking-wider hidden md:table-cell">Category</th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-[#737373] uppercase tracking-wider hidden sm:table-cell">Duration</th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-[#737373] uppercase tracking-wider hidden sm:table-cell">Price</th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-[#737373] uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E0DB]">
                {tours.map((tour) => (
                  <tr key={tour.id} className="hover:bg-[#F9F7F4] transition-colors">
                    <td className="px-5 py-4">
                      <p className="font-medium text-[#1A1A1A]">{tour.title}</p>
                      <p className="text-xs text-[#737373] mt-0.5">{tour.slug}</p>
                    </td>
                    <td className="px-5 py-4 text-[#737373] hidden md:table-cell">{tour.category ?? "—"}</td>
                    <td className="px-5 py-4 text-[#737373] hidden sm:table-cell">{tour.duration ? `${tour.duration}D` : "—"}</td>
                    <td className="px-5 py-4 text-[#737373] hidden sm:table-cell">{tour.price ? `$${tour.price}` : "—"}</td>
                    <td className="px-5 py-4"><StatusBadge status={tour.status} /></td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 justify-end">
                        <Link href={`/admin/tours/${tour.id}`} className="p-1.5 hover:bg-[#EBE8E3] rounded"><Pencil className="w-3.5 h-3.5 text-[#737373]" /></Link>
                        <button onClick={() => remove(tour.id, tour.title)} disabled={deleting === tour.id} className="p-1.5 hover:bg-red-50 rounded">
                          {deleting === tour.id ? <Loader2 className="w-3.5 h-3.5 animate-spin text-red-400" /> : <Trash2 className="w-3.5 h-3.5 text-red-400" />}
                        </button>
                      </div>
                    </td>
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
          </>
        )}
      </div>
    </div>
  )
}
