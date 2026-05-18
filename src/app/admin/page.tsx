import { prisma } from "@/lib/prisma"
import { Status } from "@prisma/client"
import Link from "next/link"
import {
  Map, Compass, Sparkles, BookOpen, Building2, Tent,
  Plus, Star, Info, ArrowRight, ImageIcon, SearchCheck,
  Clock, TrendingUp, FileText, Eye,
} from "lucide-react"

function sc(fn: () => Promise<number>): Promise<number> {
  try { return fn().catch(() => 0) } catch { return Promise.resolve(0) }
}

async function safeModelCounts(model: { count: (args?: { where?: unknown }) => Promise<number> }) {
  try {
    const [total, published, draft] = await Promise.all([
      model.count().catch(() => 0),
      model.count({ where: { status: Status.PUBLISHED } }).catch(() => 0),
      model.count({ where: { status: Status.DRAFT } }).catch(() => 0),
    ])
    return { total, published, draft }
  } catch {
    return { total: 0, published: 0, draft: 0 }
  }
}

async function getStats() {
  try {
    const [tours, destinations, experiences, blogs, lodges, camps, reviews] = await Promise.all([
      safeModelCounts(prisma.tour as never),
      safeModelCounts(prisma.destination as never),
      safeModelCounts(prisma.experience as never),
      safeModelCounts(prisma.blogPost as never),
      safeModelCounts(prisma.lodge as never),
      safeModelCounts(prisma.camp as never),
      safeModelCounts(prisma.review as never),
    ])
    return { tours, destinations, experiences, blogs, lodges, camps, reviews }
  } catch {
    const zero = { total: 0, published: 0, draft: 0 }
    return { tours: zero, destinations: zero, experiences: zero, blogs: zero, lodges: zero, camps: zero, reviews: zero }
  }
}

async function getRecentActivity() {
  try {
    const [recentTours, recentBlogs, recentReviews, featuredReviews, seoCount, mediaCount] = await Promise.all([
      prisma.tour.findMany({ orderBy: { updatedAt: "desc" }, take: 4, select: { id: true, title: true, status: true, updatedAt: true, slug: true } }).catch(() => []),
      prisma.blogPost.findMany({ orderBy: { updatedAt: "desc" }, take: 4, select: { id: true, title: true, status: true, updatedAt: true, slug: true } }).catch(() => []),
      prisma.review.findMany({ orderBy: { createdAt: "desc" }, take: 4, select: { id: true, name: true, rating: true, status: true, createdAt: true } }).catch(() => []),
      sc(() => prisma.review.count({ where: { featured: true, status: Status.PUBLISHED } })),
      sc(() => prisma.seoMeta.count()),
      sc(() => prisma.media.count()),
    ])
    return { recentTours, recentBlogs, recentReviews, featuredReviews, seoCount, mediaCount }
  } catch {
    return { recentTours: [], recentBlogs: [], recentReviews: [], featuredReviews: 0, seoCount: 0, mediaCount: 0 }
  }
}

function timeAgo(date: Date) {
  const diff = Date.now() - date.getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  return `${days}d ago`
}

const cards = [
  { key: "tours", label: "Tours", icon: Map, href: "/admin/tours", color: "bg-amber-50 text-amber-700", bar: "bg-amber-400" },
  { key: "destinations", label: "Destinations", icon: Compass, href: "/admin/destinations", color: "bg-emerald-50 text-emerald-700", bar: "bg-emerald-400" },
  { key: "experiences", label: "Experiences", icon: Sparkles, href: "/admin/experiences", color: "bg-purple-50 text-purple-700", bar: "bg-purple-400" },
  { key: "blogs", label: "Blog Posts", icon: BookOpen, href: "/admin/blog", color: "bg-blue-50 text-blue-700", bar: "bg-blue-400" },
  { key: "lodges", label: "Lodges", icon: Building2, href: "/admin/lodges", color: "bg-rose-50 text-rose-700", bar: "bg-rose-400" },
  { key: "camps", label: "Camps", icon: Tent, href: "/admin/camps", color: "bg-orange-50 text-orange-700", bar: "bg-orange-400" },
  { key: "reviews", label: "Reviews", icon: Star, href: "/admin/reviews", color: "bg-yellow-50 text-yellow-700", bar: "bg-yellow-400" },
]

export default async function DashboardPage() {
  const [stats, activity] = await Promise.all([getStats(), getRecentActivity()])

  const totalPublished = Object.values(stats).reduce((s, v) => s + v.published, 0)
  const totalDraft = Object.values(stats).reduce((s, v) => s + v.draft, 0)
  const totalContent = Object.values(stats).reduce((s, v) => s + v.total, 0)

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">Dashboard</h2>
        <p className="text-[#737373] text-sm mt-1">Welcome back — here's an overview of your safari website</p>
      </div>

      {/* Top summary bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Content", value: totalContent, icon: FileText, color: "text-[#C5A059]", bg: "bg-[#C5A059]/10" },
          { label: "Published Live", value: totalPublished, icon: Eye, color: "text-green-600", bg: "bg-green-50" },
          { label: "Drafts", value: totalDraft, icon: TrendingUp, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Media Uploads", value: activity.mediaCount, icon: ImageIcon, color: "text-blue-600", bg: "bg-blue-50" },
        ].map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-xl border border-[#E2E0DB] p-5 flex items-center gap-4">
            <div className={`p-2.5 rounded-lg ${bg}`}>
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1A1A1A]">{value}</p>
              <p className="text-xs text-[#737373]">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Content cards */}
      <h3 className="text-xs font-bold text-[#737373] uppercase tracking-widest mb-3">Content Sections</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
        {cards.map(({ key, label, icon: Icon, href, color, bar }) => {
          const s = stats[key as keyof typeof stats]
          const publishedPct = s.total > 0 ? Math.round((s.published / s.total) * 100) : 0
          return (
            <div key={key} className="bg-white rounded-xl border border-[#E2E0DB] p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2.5 rounded-lg ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <Link href={`${href}/new`} className="flex items-center gap-1 text-xs text-[#C5A059] hover:text-[#B8933F] font-medium">
                  <Plus className="w-3.5 h-3.5" /> New
                </Link>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-0.5">{s.total}</h3>
              <p className="text-sm text-[#737373] mb-3">{label}</p>

              {/* Published bar */}
              {s.total > 0 && (
                <div className="mb-3">
                  <div className="flex justify-between text-[10px] text-[#737373] mb-1">
                    <span>{publishedPct}% published</span>
                    <span>{s.total - s.published - s.draft} archived</span>
                  </div>
                  <div className="h-1.5 bg-[#F5F2ED] rounded-full overflow-hidden">
                    <div className={`h-full ${bar} rounded-full transition-all`} style={{ width: `${publishedPct}%` }} />
                  </div>
                </div>
              )}

              <div className="flex gap-3 text-xs mb-3">
                <span className="text-green-600 font-medium">{s.published} published</span>
                <span className="text-yellow-600 font-medium">{s.draft} draft</span>
              </div>
              <Link href={href} className="text-xs text-[#737373] hover:text-[#C5A059] transition-colors">View all →</Link>
            </div>
          )
        })}
      </div>

      {/* Two column: recent activity + quick actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Tours */}
        <div className="bg-white rounded-xl border border-[#E2E0DB] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#F5F2ED]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C5A059]" />
              <h3 className="text-sm font-semibold text-[#1A1A1A]">Recent Tours</h3>
            </div>
            <Link href="/admin/tours" className="text-xs text-[#C5A059] hover:underline">View all</Link>
          </div>
          <div className="divide-y divide-[#F5F2ED]">
            {activity.recentTours.length === 0 ? (
              <p className="px-5 py-4 text-xs text-[#737373]">No tours yet</p>
            ) : activity.recentTours.map((t) => (
              <Link key={t.id} href={`/admin/tours/${t.id}`} className="flex items-center justify-between px-5 py-3 hover:bg-[#FDFBF7] transition-colors group">
                <div className="min-w-0">
                  <p className="text-sm text-[#1A1A1A] truncate group-hover:text-[#C5A059] transition-colors">{t.title}</p>
                  <p className="text-[10px] text-[#737373] mt-0.5">{timeAgo(new Date(t.updatedAt))}</p>
                </div>
                <span className={`shrink-0 ml-3 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${t.status === "PUBLISHED" ? "bg-green-100 text-green-700" : t.status === "DRAFT" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-500"}`}>
                  {t.status}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Blog Posts */}
        <div className="bg-white rounded-xl border border-[#E2E0DB] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#F5F2ED]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C5A059]" />
              <h3 className="text-sm font-semibold text-[#1A1A1A]">Recent Blog Posts</h3>
            </div>
            <Link href="/admin/blog" className="text-xs text-[#C5A059] hover:underline">View all</Link>
          </div>
          <div className="divide-y divide-[#F5F2ED]">
            {activity.recentBlogs.length === 0 ? (
              <p className="px-5 py-4 text-xs text-[#737373]">No posts yet</p>
            ) : activity.recentBlogs.map((b) => (
              <Link key={b.id} href={`/admin/blog/${b.id}`} className="flex items-center justify-between px-5 py-3 hover:bg-[#FDFBF7] transition-colors group">
                <div className="min-w-0">
                  <p className="text-sm text-[#1A1A1A] truncate group-hover:text-[#C5A059] transition-colors">{b.title}</p>
                  <p className="text-[10px] text-[#737373] mt-0.5">{timeAgo(new Date(b.updatedAt))}</p>
                </div>
                <span className={`shrink-0 ml-3 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${b.status === "PUBLISHED" ? "bg-green-100 text-green-700" : b.status === "DRAFT" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-500"}`}>
                  {b.status}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions + Reviews snapshot */}
        <div className="space-y-4">
          {/* Reviews snapshot */}
          <div className="bg-white rounded-xl border border-[#E2E0DB] p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#C5A059]" />
                <h3 className="text-sm font-semibold text-[#1A1A1A]">Reviews</h3>
              </div>
              <Link href="/admin/reviews" className="text-xs text-[#C5A059] hover:underline">Manage</Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#F9F7F4] rounded-lg p-3 text-center">
                <p className="text-xl font-bold text-[#1A1A1A]">{stats.reviews.published}</p>
                <p className="text-[10px] text-[#737373] mt-0.5">Published</p>
              </div>
              <div className="bg-[#F9F7F4] rounded-lg p-3 text-center">
                <p className="text-xl font-bold text-[#C5A059]">{activity.featuredReviews}</p>
                <p className="text-[10px] text-[#737373] mt-0.5">Featured</p>
              </div>
            </div>
            {activity.recentReviews.slice(0, 2).map((r) => (
              <div key={r.id} className="mt-3 pt-3 border-t border-[#F5F2ED]">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-[#1A1A1A]">{r.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < r.rating ? "fill-[#C5A059] text-[#C5A059]" : "text-[#E2E0DB]"}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-[#E2E0DB] p-5">
            <h3 className="text-xs font-bold text-[#737373] uppercase tracking-widest mb-3">Quick Actions</h3>
            <div className="space-y-2">
              {[
                { label: "Edit About Us", href: "/admin/about", icon: Info, desc: "Story, mission & values" },
                { label: "Media Library", href: "/admin/media", icon: ImageIcon, desc: `${activity.mediaCount} uploads` },
                { label: "SEO Settings", href: "/admin/seo", icon: SearchCheck, desc: `${activity.seoCount}/7 pages configured` },
                { label: "View Public Site", href: "/", icon: ArrowRight, desc: "Preview live website", target: "_blank" },
              ].map(({ label, href, icon: Icon, desc, target }) => (
                <Link key={href} href={href} target={target as "_blank" | undefined} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#F5F2ED] transition-colors group">
                  <div className="p-1.5 rounded-md bg-[#F9F7F4] group-hover:bg-[#C5A059]/10 transition-colors">
                    <Icon className="w-3.5 h-3.5 text-[#737373] group-hover:text-[#C5A059]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A] leading-tight">{label}</p>
                    <p className="text-[10px] text-[#737373]">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
