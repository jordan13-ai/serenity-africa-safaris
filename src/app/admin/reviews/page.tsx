"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { Plus, Star, Pencil, Trash2, Loader2, ChevronLeft, ChevronRight } from "lucide-react"

interface Review {
  id: string; name: string; location: string; rating: number
  quote: string; trip: string; featured: boolean; status: string
  createdAt: string
}

export default function ReviewsListPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState("")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [total, setTotal] = useState(0)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({ page: String(page), limit: "20" })
      if (statusFilter) params.set("status", statusFilter)
      const res = await fetch(`/api/admin/reviews?${params}`)
      if (!res.ok) return
      const data = await res.json()
      setReviews(data.data)
      setTotalPages(data.pages)
      setTotal(data.total)
    } catch { /* leave state as-is */ } finally {
      setLoading(false)
    }
  }, [page, statusFilter])

  useEffect(() => { load() }, [load])

  function changeFilter(f: string) { setStatusFilter(f); setPage(1) }

  async function deleteReview(id: string) {
    if (!confirm("Delete this review?")) return
    await fetch(`/api/admin/reviews/${id}`, { method: "DELETE" })
    load()
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">Reviews</h2>
          <p className="text-sm text-[#737373] mt-1">{total} total</p>
        </div>
        <Link href="/admin/reviews/new" className="flex items-center gap-2 px-4 py-2 bg-[#C5A059] text-white rounded-md text-sm font-medium hover:bg-[#B8933F] transition-colors">
          <Plus className="w-4 h-4" /> New Review
        </Link>
      </div>

      <div className="flex gap-2 mb-6">
        {["", "PUBLISHED", "DRAFT", "ARCHIVED"].map((s) => (
          <button key={s} onClick={() => changeFilter(s)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${statusFilter === s ? "bg-[#1A1A1A] text-white" : "bg-white border border-[#E2E0DB] text-[#737373] hover:border-[#C5A059]"}`}>
            {s || "All"}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-16"><Loader2 className="w-6 h-6 animate-spin text-[#737373]" /></div>
      ) : reviews.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-[#E2E0DB]">
          <Star className="w-8 h-8 text-[#E2E0DB] mx-auto mb-3" />
          <p className="text-[#737373] text-sm">No reviews yet. Add your first testimonial.</p>
          <Link href="/admin/reviews/new" className="mt-4 inline-flex items-center gap-1 text-sm text-[#C5A059] hover:underline"><Plus className="w-4 h-4" /> Add Review</Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-[#E2E0DB] overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-[#E2E0DB] bg-[#F9F7F4]">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#737373] uppercase tracking-wider">Reviewer</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#737373] uppercase tracking-wider hidden md:table-cell">Trip</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#737373] uppercase tracking-wider">Rating</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#737373] uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#737373] uppercase tracking-wider hidden lg:table-cell">Featured</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F5F2ED]">
              {reviews.map((r) => (
                <tr key={r.id} className="hover:bg-[#FDFBF7]">
                  <td className="px-4 py-3">
                    <p className="font-medium text-[#1A1A1A]">{r.name}</p>
                    {r.location && <p className="text-xs text-[#737373]">{r.location}</p>}
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-[#737373] max-w-[180px] truncate">{r.trip || "—"}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < r.rating ? "fill-[#C5A059] text-[#C5A059]" : "text-[#E2E0DB]"}`} />
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${r.status === "PUBLISHED" ? "bg-green-100 text-green-700" : r.status === "DRAFT" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-500"}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell text-xs text-[#737373]">
                    {r.featured ? <span className="text-[#C5A059] font-bold">★ Featured</span> : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 justify-end">
                      <Link href={`/admin/reviews/${r.id}`} className="p-1.5 hover:bg-[#EBE8E3] rounded"><Pencil className="w-3.5 h-3.5 text-[#737373]" /></Link>
                      <button onClick={() => deleteReview(r.id)} className="p-1.5 hover:bg-red-50 rounded"><Trash2 className="w-3.5 h-3.5 text-red-400" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-[#E2E0DB]">
              <span className="text-xs text-[#737373]">Page {page} of {totalPages}</span>
              <div className="flex gap-1">
                <button onClick={() => setPage(p => p - 1)} disabled={page === 1} className="p-1.5 hover:bg-[#EBE8E3] rounded disabled:opacity-30"><ChevronLeft className="w-4 h-4" /></button>
                <button onClick={() => setPage(p => p + 1)} disabled={page === totalPages} className="p-1.5 hover:bg-[#EBE8E3] rounded disabled:opacity-30"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
