import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  try {
    const region = req.nextUrl.searchParams.get("region")
    const where = { status: "PUBLISHED" as const, ...(region ? { region } : {}) }
    const destinations = await prisma.destination.findMany({
      where,
      orderBy: { updatedAt: "desc" },
      select: { id: true, title: true, slug: true, region: true, description: true, coverImage: true, wildlife: true, activities: true, bestTime: true },
    })
    return NextResponse.json(destinations, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" },
    })
  } catch {
    return NextResponse.json([], { status: 200 })
  }
}
