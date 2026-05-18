import { MetadataRoute } from "next"
import { prisma } from "@/lib/prisma"

export const revalidate = 3600 // regenerate sitemap every hour

const BASE = "https://serenityafricasafaris.com"

function url(path: string, priority: number, freq: MetadataRoute.Sitemap[0]["changeFrequency"] = "monthly"): MetadataRoute.Sitemap[0] {
  return { url: `${BASE}${path}`, lastModified: new Date(), changeFrequency: freq, priority }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [tours, destinations, blogPosts, lodges, camps] = await Promise.all([
    prisma.tour.findMany({ where: { status: "PUBLISHED" }, select: { slug: true, updatedAt: true } }).catch(() => []),
    prisma.destination.findMany({ where: { status: "PUBLISHED" }, select: { slug: true, updatedAt: true } }).catch(() => []),
    prisma.blogPost.findMany({ where: { status: "PUBLISHED" }, select: { slug: true, updatedAt: true } }).catch(() => []),
    prisma.lodge.findMany({ where: { status: "PUBLISHED" }, select: { slug: true, updatedAt: true } }).catch(() => []),
    prisma.camp.findMany({ where: { status: "PUBLISHED" }, select: { slug: true, updatedAt: true } }).catch(() => []),
  ])

  return [
    // ── Core pages ────────────────────────────────────────────────────────
    url("/", 1.0, "weekly"),
    url("/about/", 0.8, "monthly"),
    url("/contact/", 0.9, "monthly"),
    url("/request-quote/", 0.9, "monthly"),
    url("/safari/", 0.9, "weekly"),
    url("/kilimanjaro/", 0.9, "monthly"),
    url("/destinations/", 0.9, "weekly"),
    url("/accommodation/", 0.9, "weekly"),
    url("/blog/", 0.7, "daily"),
    url("/all-safaris/", 0.8, "monthly"),
    url("/all-day-trips/", 0.8, "monthly"),
    url("/activities/", 0.8, "monthly"),
    url("/itineraries/", 0.8, "weekly"),
    url("/privacy/", 0.2),
    url("/terms/", 0.2),

    // ── Safari sub-pages ──────────────────────────────────────────────────
    ...["balloon-safaris","cultural-encounters","family-safaris","great-migration",
        "honeymoon-escapes","luxury-safari","photography-safaris","walking-safaris"]
      .map((s) => url(`/safari/${s}/`, 0.7)),

    // ── All-Safaris sub-pages ─────────────────────────────────────────────
    ...["mid-range","luxury","migration","cultural","honeymoon","tented-camps","lodge","guide"]
      .map((s) => url(`/all-safaris/${s}/`, 0.7)),

    // ── Day Trips ─────────────────────────────────────────────────────────
    ...["one-day-safari","arusha-excursions","cultural-tours","kili-hiking","moshi-excursions","west-kilimanjaro"]
      .map((s) => url(`/all-day-trips/${s}/`, 0.7)),

    // ── Kilimanjaro routes ────────────────────────────────────────────────
    ...["lemosho-route","machame-route","marangu-route","rongai-route","umbwe-route","northern-circuit"]
      .map((s) => url(`/kilimanjaro/${s}/`, 0.8)),
    url("/kilimanjaro/guide/", 0.7),
    url("/kilimanjaro/joining-groups/", 0.7),

    // ── Activities ────────────────────────────────────────────────────────
    ...["game-drives","balloon-safaris","walking-safaris","cultural-experiences",
        "boat-safaris","mountain-climbing","beach-escapes"]
      .map((s) => url(`/activities/${s}/`, 0.7)),

    // ── DB: Tours ─────────────────────────────────────────────────────────
    ...tours.map((t: { slug: string; updatedAt: Date }) => ({
      url: `${BASE}/itineraries/${t.slug}/`,
      lastModified: t.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // ── DB: Destinations ──────────────────────────────────────────────────
    ...destinations.map((d: { slug: string; updatedAt: Date }) => ({
      url: `${BASE}/destinations/${d.slug}/`,
      lastModified: d.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // ── DB: Blog Posts ────────────────────────────────────────────────────
    ...blogPosts.map((b: { slug: string; updatedAt: Date }) => ({
      url: `${BASE}/blog/${b.slug}/`,
      lastModified: b.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // ── DB: Accommodation (lodges + camps) ────────────────────────────────
    ...lodges.map((l: { slug: string; updatedAt: Date }) => ({
      url: `${BASE}/accommodation/${l.slug}/`,
      lastModified: l.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...camps.map((c: { slug: string; updatedAt: Date }) => ({
      url: `${BASE}/accommodation/${c.slug}/`,
      lastModified: c.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ]
}
