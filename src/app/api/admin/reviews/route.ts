import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })
  const p = req.nextUrl.searchParams
  const page = Math.max(1, parseInt(p.get("page") ?? "1"))
  const limit = Math.min(50, parseInt(p.get("limit") ?? "20"))
  const status = p.get("status") ?? undefined
  const where = status ? { status: status as "DRAFT" | "PUBLISHED" | "ARCHIVED" } : {}
  const [data, total] = await Promise.all([
    prisma.review.findMany({ where, orderBy: { createdAt: "desc" }, skip: (page - 1) * limit, take: limit }),
    prisma.review.count({ where }),
  ])
  return NextResponse.json({ data, total, page, limit, pages: Math.ceil(total / limit) })
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })
  const body = await req.json()
  const review = await prisma.review.create({
    data: {
      name: body.name,
      location: body.location || null,
      rating: parseInt(body.rating) || 5,
      quote: body.quote,
      trip: body.trip || null,
      avatar: body.avatar || null,
      featured: body.featured ?? false,
      status: body.status ?? "DRAFT",
    },
  })
  return NextResponse.json(review, { status: 201 })
}
