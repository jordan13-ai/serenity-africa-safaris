import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category")
  const where = { status: "PUBLISHED" as const, ...(category ? { category } : {}) }
  const tours = await prisma.tour.findMany({
    where,
    orderBy: { updatedAt: "desc" },
    select: { id: true, title: true, slug: true, summary: true, description: true, price: true, duration: true, groupSize: true, difficulty: true, season: true, category: true, destination: true, coverImage: true, highlights: true, includes: true, updatedAt: true },
  })
  return NextResponse.json(tours)
}
