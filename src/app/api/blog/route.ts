import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  try {
    const p = req.nextUrl.searchParams
    const category = p.get("category")
    const q = p.get("q")
    const page = Math.max(1, parseInt(p.get("page") ?? "1"))
    const limit = Math.min(50, Math.max(1, parseInt(p.get("limit") ?? "12")))

    const where: Record<string, unknown> = { status: "PUBLISHED" }
    if (category && category !== "All") where.category = category
    if (q) where.OR = [
      { title: { contains: q, mode: "insensitive" } },
      { excerpt: { contains: q, mode: "insensitive" } },
    ]

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where: where as never,
        orderBy: { publishedAt: "desc" },
        select: { id: true, title: true, slug: true, category: true, author: true, excerpt: true, coverImage: true, publishedAt: true, tags: true },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.blogPost.count({ where: where as never }),
    ])

    return NextResponse.json(
      { posts, total, page, limit, pages: Math.ceil(total / limit) },
      { headers: { "Cache-Control": "public, s-maxage=120, stale-while-revalidate=600" } }
    )
  } catch {
    return NextResponse.json({ posts: [], total: 0, page: 1, limit: 12, pages: 0 }, { status: 200 })
  }
}
