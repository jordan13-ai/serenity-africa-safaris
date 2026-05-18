import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { generateSlug } from "@/lib/slug"

async function guard() {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })
  return null
}

export async function GET(req: NextRequest) {
  const unauth = await guard(); if (unauth) return unauth
  const p = req.nextUrl.searchParams
  const status = p.get("status")
  const page = Math.max(1, parseInt(p.get("page") ?? "1"))
  const limit = Math.min(100, Math.max(1, parseInt(p.get("limit") ?? "25")))
  const where = status ? { status: status as never } : undefined
  const [data, total] = await Promise.all([
    prisma.tour.findMany({
      where,
      orderBy: { updatedAt: "desc" },
      select: { id: true, title: true, slug: true, status: true, price: true, duration: true, category: true, createdAt: true, updatedAt: true },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.tour.count({ where }),
  ])
  return NextResponse.json({ data, total, page, limit, pages: Math.ceil(total / limit) })
}

export async function POST(req: NextRequest) {
  const unauth = await guard(); if (unauth) return unauth
  const body = await req.json()
  const { itinerary, ...rest } = body

  const slug = rest.slug || generateSlug(rest.title)
  const tour = await prisma.tour.create({
    data: {
      ...rest,
      slug,
      price: rest.price ? parseFloat(rest.price) : null,
      duration: rest.duration ? parseInt(rest.duration) : null,
      itinerary: itinerary?.length
        ? { create: itinerary.map((d: Record<string, unknown>) => ({ ...d })) }
        : undefined,
    },
    include: { itinerary: { orderBy: { day: "asc" } } },
  })
  return NextResponse.json(tour, { status: 201 })
}
