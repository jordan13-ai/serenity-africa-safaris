import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

const SITE_NAME = "Serenity Africa Safaris"

// Auto-generate SEO for all known pages based on DB content
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  const { pages } = await req.json() as { pages: string[] }

  const results: Record<string, { title: string; description: string; keywords: string }> = {}

  for (const page of pages) {
    if (page === "home") {
      results[page] = {
        title: `${SITE_NAME} | Luxury Tanzania Safari Tours`,
        description: "Discover extraordinary safari experiences in Tanzania. Expert-guided tours to Serengeti, Ngorongoro, Kilimanjaro and Zanzibar. Tailor-made luxury safaris crafted for discerning travelers.",
        keywords: "Tanzania safari, luxury safari, Serengeti, Ngorongoro Crater, Kilimanjaro, Zanzibar, Africa wildlife tours",
      }
    } else if (page === "safari") {
      results[page] = {
        title: `Safari Itineraries | ${SITE_NAME}`,
        description: "Browse our complete collection of Tanzania safari itineraries — from classic wildlife safaris to mountain climbs, honeymoons, and cultural tours.",
        keywords: "Tanzania safari itineraries, safari packages, wildlife safaris, Tanzania tours",
      }
    } else if (page === "destinations") {
      results[page] = {
        title: `Tanzania Destinations | ${SITE_NAME}`,
        description: "Explore Tanzania's iconic destinations: Serengeti, Ngorongoro Crater, Kilimanjaro, Zanzibar, Ruaha, Nyerere and more.",
        keywords: "Tanzania destinations, Serengeti, Ngorongoro, Kilimanjaro, Zanzibar, Ruaha, Tanzania parks",
      }
    } else if (page === "kilimanjaro") {
      results[page] = {
        title: `Kilimanjaro Climbing Routes | ${SITE_NAME}`,
        description: "Climb Mount Kilimanjaro with expert guides. Choose from Lemosho, Machame, Marangu, Rongai, and Umbwe routes. All-inclusive packages with experienced mountain guides.",
        keywords: "Kilimanjaro climb, Mount Kilimanjaro routes, Lemosho route, Machame route, Kilimanjaro trekking",
      }
    } else if (page === "about") {
      results[page] = {
        title: `About Us | ${SITE_NAME}`,
        description: "Serenity Africa Safaris — founded by passionate Tanzanian guides with decades of experience. We craft genuine, responsible safari experiences in Tanzania's most breathtaking landscapes.",
        keywords: "about Serenity Africa Safaris, Tanzania safari company, local safari guides, responsible tourism",
      }
    } else if (page === "blog") {
      const posts = await prisma.blogPost.findMany({
        where: { status: "PUBLISHED" },
        select: { title: true, tags: true },
        take: 10,
        orderBy: { publishedAt: "desc" },
      })
      const tags = [...new Set(posts.flatMap((p) => p.tags))].slice(0, 6).join(", ")
      results[page] = {
        title: `Safari Blog & Travel Stories | ${SITE_NAME}`,
        description: "Expert safari tips, wildlife stories, travel guides and conservation news from Tanzania's top safari specialists.",
        keywords: tags || "Tanzania safari blog, safari tips, wildlife stories, Africa travel",
      }
    } else if (page === "contact") {
      results[page] = {
        title: `Contact Us | ${SITE_NAME}`,
        description: "Get in touch with our safari specialists to plan your perfect Tanzania adventure. Custom quotes, expert advice and tailor-made itineraries.",
        keywords: "contact Serenity Africa Safaris, safari booking, Tanzania safari quote",
      }
    } else if (page.startsWith("tour:")) {
      const slug = page.replace("tour:", "")
      const tour = await prisma.tour.findUnique({ where: { slug }, select: { title: true, summary: true, destination: true, highlights: true, coverImage: true } })
      if (tour) {
        results[page] = {
          title: `${tour.title} | ${SITE_NAME}`,
          description: tour.summary || `${tour.title} — an unforgettable Tanzania safari experience in ${tour.destination || "Tanzania"}.`,
          keywords: [tour.destination, tour.title, "Tanzania safari", ...(tour.highlights ?? []).slice(0, 3)].filter(Boolean).join(", "),
        }
      }
    } else if (page.startsWith("destination:")) {
      const slug = page.replace("destination:", "")
      const dest = await prisma.destination.findUnique({ where: { slug }, select: { title: true, description: true, wildlife: true, region: true } })
      if (dest) {
        const desc = dest.description?.slice(0, 160) ?? `Discover ${dest.title} in Tanzania's ${dest.region ?? "wilderness"}.`
        results[page] = {
          title: `${dest.title} | ${SITE_NAME}`,
          description: desc,
          keywords: [dest.title, dest.region, "Tanzania", ...(dest.wildlife ?? []).slice(0, 3)].filter(Boolean).join(", "),
        }
      }
    }
  }

  // Upsert all generated results
  await Promise.all(
    Object.entries(results).map(([page, data]) =>
      prisma.seoMeta.upsert({
        where: { page },
        update: data,
        create: { page, ...data },
      })
    )
  )

  return NextResponse.json({ generated: Object.keys(results) })
}
